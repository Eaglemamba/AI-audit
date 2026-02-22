# AIAudit

**Know where your time goes.**

A mobile-first time tracking PWA that helps you build awareness of how you spend your time.

🔗 **Live Demo**: [https://eaglemamba.github.io/AI-audit/](https://eaglemamba.github.io/AI-audit/)

---

## Features

- ⏱️ **One-tap Timer** — Start tracking instantly
- 📊 **Time Distribution** — See where your time goes
- 🔁 **Quick Routines** — Customizable templates for recurring tasks
- 📅 **Day & Week View** — Visual daily timeline + 7-day planning grid
- 🔔 **Daily Reminders** — Morning & evening notifications (iOS 16.4+)
- 📝 **Tap Empty Slot** — Past = backfill, Future = plan new task
- ✏️ **Edit Tasks** — Change category, priority, duration anytime
- 🍽️ **Lunch Time** — Visual block on calendar (customizable)
- ↻ **Reschedule** — Move events to different time slots
- 💾 **Offline Support** — Works without internet
- 📤 **Export/Import** — Backup your data anytime

---

## Installation

### Step 1: Open in Safari (iPhone) or Chrome (Android)

```
https://eaglemamba.github.io/AI-audit/
```

### Step 2: Add to Home Screen

**iPhone (Safari only):**
1. Tap **Share** button (square with arrow)
2. Tap **"Add to Home Screen"**
3. Name it **"AIAudit"** → **Add**

**Android (Chrome):**
1. Tap **menu** (⋮) → **"Add to Home screen"**

### Step 3: Open from Home Screen

Tap the AIAudit icon to launch.

---

## Quick Guide

### Fastest Way: Tap Empty Slot
1. Go to **Today** tab
2. Tap empty time slot (top half = :00, bottom half = :30)
3. Fill in details → **Add**

**Past slots** → Backfill (record what you did)
**Future slots** → Plan (create task + schedule)

### Week View
1. In **Today** tab, tap **[Week]** toggle
2. See 7 days at a glance (Mon-Sun)
3. Tap any cell → Opens that day + time for scheduling
4. Use **< >** to navigate weeks

### Track & Complete
1. Tap **▶** to start timer
2. Tap **⏱** to complete when done
3. **Forgot to start?** Actual time prefills with estimate — adjust with +/- buttons

### Reschedule Events
1. Tap an **incomplete event**
2. Tap **↻ Reschedule**
3. Select a new time slot

### Customize Quick Routines
1. Tap **+** to open Add Task
2. **Long-press** any Quick Routine button
3. Edit icon, name, category, duration

### Edit Existing Tasks
1. Tap any task in **Tasks** tab
2. Change **Category**, **Priority**, or **Duration**
3. Changes save automatically

### Schedule with Start Time
1. When creating a task, select a **Due Date**
2. **Start Time** picker appears
3. Select time → Task auto-schedules when created

### Set Lunch Time
1. Go to **More** → **Settings** → **Lunch Time**
2. Set start and end time (30-min intervals)
3. Toggle **Show on calendar**
4. Lunch block appears as gray overlay on Day View

---

## Enable Notifications

> Requires iOS 16.4+ or Android 8+

1. Open AIAudit **from Home Screen**
2. Go to **More** tab
3. Turn on **Daily Reminder**
4. Allow notification permission
5. Set Morning & Evening times

**Tip**: Keep app in background for reliable notifications.

---

## Host Your Own Version (For Developers)

> **Regular users don't need this.** Just use the Live Demo link above — your data is stored safely on your own device.
>
> This section is for developers who want to **modify the code or customize features**.

### 1. Create GitHub Repository

- Go to [github.com](https://github.com) → New repository
- Name: `aiaudit` (or any name)
- Visibility: **Public**

### 2. Upload Files

Upload these 3 files to repository root:

| File | Description |
|------|-------------|
| `index.html` | Main application |
| `manifest.json` | PWA configuration |
| `sw.js` | Service Worker |

### 3. Enable GitHub Pages

1. Repository **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** / **root** → **Save**

### 4. Access Your App

```
https://YOUR-USERNAME.github.io/YOUR-REPO/
```

---

## Data & Privacy

| Item | Details |
|------|---------|
| Storage | Browser localStorage (device only) |
| Privacy | Your data stays on your device |
| Backup | Export to Google Drive manually |
| Sync | Use Export/Import between devices |

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| No "Add to Home Screen" | Use Safari (iPhone) or Chrome (Android) |
| Notifications not working | Open from Home Screen, not browser |
| 404 on GitHub Pages | Wait 2-3 min for deployment |
| Data lost | Use Export Backup regularly |

---

## System Requirements

| Platform | Browser | Version |
|----------|---------|---------|
| iPhone | Safari | iOS 14+ (notifications: 16.4+) |
| Android | Chrome | 8+ |
| Desktop | Any modern browser | Latest |

---

## License

MIT License - Free to use and modify.

---

## Version

**v1.5** | February 2026
