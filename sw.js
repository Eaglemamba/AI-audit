// AIAudit Service Worker
const CACHE_NAME = 'aiaudit-v1';

// Install event
self.addEventListener('install', event => {
    self.skipWaiting();
});

// Activate event
self.addEventListener('activate', event => {
    event.waitUntil(clients.claim());
});

// Store notification settings
let notificationSettings = {
    enabled: false,
    morning: '09:00',
    evening: '18:00'
};

// Listen for messages from main app
self.addEventListener('message', event => {
    if (event.data.type === 'SCHEDULE_NOTIFICATIONS') {
        notificationSettings = event.data.settings;
        scheduleLocalNotifications();
    }
});

// Schedule notifications using setTimeout (workaround for iOS limitations)
let morningTimeout = null;
let eveningTimeout = null;

function scheduleLocalNotifications() {
    // Clear existing timeouts
    if (morningTimeout) clearTimeout(morningTimeout);
    if (eveningTimeout) clearTimeout(eveningTimeout);
    
    if (!notificationSettings.enabled) return;
    
    const now = new Date();
    
    // Schedule morning notification
    const morningTime = getNextNotificationTime(notificationSettings.morning);
    const morningDelay = morningTime - now;
    if (morningDelay > 0) {
        morningTimeout = setTimeout(() => {
            showNotification('morning');
            scheduleLocalNotifications(); // Reschedule for next day
        }, morningDelay);
    }
    
    // Schedule evening notification
    const eveningTime = getNextNotificationTime(notificationSettings.evening);
    const eveningDelay = eveningTime - now;
    if (eveningDelay > 0) {
        eveningTimeout = setTimeout(() => {
            showNotification('evening');
            scheduleLocalNotifications(); // Reschedule for next day
        }, eveningDelay);
    }
}

function getNextNotificationTime(timeStr) {
    const [hours, minutes] = timeStr.split(':').map(Number);
    const next = new Date();
    next.setHours(hours, minutes, 0, 0);
    
    // If time has passed today, schedule for tomorrow
    if (next <= new Date()) {
        next.setDate(next.getDate() + 1);
    }
    
    return next;
}

function showNotification(type) {
    const title = type === 'morning' 
        ? '🌅 Good morning!' 
        : '🌙 Time for review';
    
    const body = type === 'morning'
        ? 'Ready to track your day? Open AIAudit to start.'
        : 'How did today go? Review your time audit.';
    
    self.registration.showNotification(title, {
        body: body,
        icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%23007aff" width="100" height="100" rx="20"/><text x="50" y="68" text-anchor="middle" fill="white" font-size="50">⏱</text></svg>',
        badge: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%23007aff" width="100" height="100" rx="20"/><text x="50" y="68" text-anchor="middle" fill="white" font-size="50">⏱</text></svg>',
        tag: 'aiaudit-reminder',
        renotify: true,
        requireInteraction: false
    });
}

// Handle notification click
self.addEventListener('notificationclick', event => {
    event.notification.close();
    
    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clientList => {
            // If app is already open, focus it
            for (const client of clientList) {
                if (client.url.includes('AI-audit') && 'focus' in client) {
                    return client.focus();
                }
            }
            // Otherwise open new window
            if (clients.openWindow) {
                return clients.openWindow('/AI-audit/');
            }
        })
    );
});

// Periodic background sync (if supported)
self.addEventListener('periodicsync', event => {
    if (event.tag === 'daily-reminder') {
        event.waitUntil(checkAndNotify());
    }
});

async function checkAndNotify() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const currentTime = `${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}`;
    
    // Check if current time matches any reminder
    if (notificationSettings.enabled) {
        if (isTimeMatch(currentTime, notificationSettings.morning)) {
            showNotification('morning');
        } else if (isTimeMatch(currentTime, notificationSettings.evening)) {
            showNotification('evening');
        }
    }
}

function isTimeMatch(current, target) {
    // Allow 5 minute window
    const [cH, cM] = current.split(':').map(Number);
    const [tH, tM] = target.split(':').map(Number);
    const cTotal = cH * 60 + cM;
    const tTotal = tH * 60 + tM;
    return Math.abs(cTotal - tTotal) <= 5;
}
