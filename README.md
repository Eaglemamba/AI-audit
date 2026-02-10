# AIAudit

**Know where your time goes.**

A mobile-first time tracking PWA that helps you build awareness of how you spend your time.

🔗 **Live Demo**: <https://eaglemamba.github.io/AI-audit/>

-----

## Features

- ⏱️ **One-tap Timer** — Start tracking instantly
- 📊 **Time Distribution** — See where your time goes
- 🔁 **Quick Routines** — Templates for recurring tasks
- 📅 **Calendar View** — Visual daily timeline
- 🔔 **Daily Reminders** — Morning & evening notifications
- 💾 **Offline Support** — Works without internet
- 📤 **Export/Import** — Backup your data anytime

-----

## Installation

### Step 1: Open in Safari (iPhone) or Chrome (Android)

```
https://eaglemamba.github.io/AI-audit/
```

### Step 2: Add to Home Screen

**iPhone (Safari only):**

1. Tap **Share** button (square with arrow)
1. Tap **“Add to Home Screen”**
1. Name it **“AIAudit”** → **Add**

**Android (Chrome):**

1. Tap **menu** (⋮) → **“Add to Home screen”**

### Step 3: Open from Home Screen

Tap the AIAudit icon to launch.

-----

## Enable Notifications

> Requires iOS 16.4+ or Android 8+

1. Open AIAudit **from Home Screen**
1. Go to **More** tab
1. Turn on **Daily Reminder**
1. Allow notification permission
1. Set Morning & Evening times

**Tip**: Keep app in background for reliable notifications.

-----

## Host Your Own Version (For Developers)

> **一般用戶不需要這步驟。** 直接使用上方 Live Demo 連結即可，你的資料會安全存在你自己的裝置。
> 
> 這個章節是給想要**修改程式碼、客製化功能**的開發者。

### 1. Create GitHub Repository

- Go to [github.com](https://github.com) → New repository
- Name: `aiaudit` (or any name)
- Visibility: **Public**

### 2. Upload Files

Upload these 3 files to repository root:

|File           |Description      |
|---------------|-----------------|
|`index.html`   |Main application |
|`manifest.json`|PWA configuration|
|`sw.js`        |Service Worker   |

### 3. Enable GitHub Pages

1. Repository **Settings** → **Pages**
1. Source: **Deploy from a branch**
1. Branch: **main** / **root** → **Save**

### 4. Access Your App

```
https://YOUR-USERNAME.github.io/YOUR-REPO/
```

-----

## Data & Privacy

|Item   |Details                           |
|-------|----------------------------------|
|Storage|Browser localStorage (device only)|
|Privacy|Your data stays on your device    |
|Backup |Export to Google Drive manually   |
|Sync   |Use Export/Import between devices |

-----

## Troubleshooting

|Problem                  |Solution                               |
|-------------------------|---------------------------------------|
|No “Add to Home Screen”  |Use Safari (iPhone) or Chrome (Android)|
|Notifications not working|Open from Home Screen, not browser     |
|404 on GitHub Pages      |Wait 2-3 min for deployment            |
|Data lost                |Use Export Backup regularly            |

-----

## System Requirements

|Platform|Browser           |Version                       |
|--------|------------------|------------------------------|
|iPhone  |Safari            |iOS 14+ (notifications: 16.4+)|
|Android |Chrome            |8+                            |
|Desktop |Any modern browser|Latest                        |

-----

## License

MIT License - Free to use and modify.

-----

## Version

**v1.2** | February 2026
