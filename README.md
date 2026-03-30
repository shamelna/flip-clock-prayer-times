# Flip Clock with Prayer Times

A beautiful, minimalist flip clock display with Islamic prayer times, countdown timers, and progress visualization. Designed as both a web application and potential screensaver.

## ✨ Features

- **Animated Flip Clock**: Smooth, realistic flip card animations for hours and minutes
- **Islamic Prayer Times**: Automatic calculation based on your location (Muslim World League method)
- **Countdown Timer**: Shows time remaining until the next prayer
- **Progress Bar**: Visual representation with white indicators showing prayer interval progress
- **Geolocation Support**: Automatically detects your location for accurate prayer times
- **Responsive Design**: Adapts perfectly to any screen size
- **Monochrome Theme**: Clean, minimalist design with subtle scanline effects
- **PWA Support**: Install as a standalone app on mobile devices

## 🚀 Quick Start

### Web Version
Simply open `index.html` in your web browser. No installation required!

### Screensaver Version
For screensaver functionality, you can:
1. Open `index.html` in fullscreen mode (F11)
2. Use a screensaver creation tool to compile it into a .scr file

## 🛠️ Technologies Used

- **Pure HTML/CSS/JavaScript**: No external dependencies
- **Google Fonts**: Bebas Neue & Share Tech Mono
- **Service Worker**: For PWA functionality
- **Geolocation API**: For automatic location detection
- **AlAdhan API**: For prayer time calculations (with local fallback)

## 📱 Features in Detail

### Clock Display
- Large, easy-to-read flip numbers
- AM/PM indicator
- Current date and day display
- Smooth flip animations every minute

### Prayer Times
- **Fajr, Dhuhr, Asr, Maghrib, Isha** (Sunrise shown but not counted as salah)
- Automatic location detection
- Manual fallback to Mecca coordinates if geolocation fails
- Updates daily at midnight

### Progress Visualization
- Enhanced progress bar with prominent visibility
- White circle indicator at current progress position
- Diamond markers at start and end points
- Monochrome design with subtle glow effects

### User Experience
- Exits on mouse movement or keypress (screensaver mode)
- Responsive layout engine adapts to any screen
- Landscape orientation preferred (portrait shows rotation hint)
- Hidden cursor in screensaver mode

## 🌐 API Integration

The app uses the [AlAdhan API](https://aladhan.com/) for prayer time calculations:
- Method 3: Muslim World League
- Automatic fallback to local calculations if API fails
- Respects user timezone settings

## 📁 Project Structure

```
Clock/
├── index.html          # Main application
├── manifest.json       # PWA manifest
├── sw.js              # Service worker
├── icon-192.svg       # App icon
└── README.md          # This file
```

## 🎨 Customization

The app uses CSS variables for easy customization:
- Card dimensions (`--cw`, `--ch`)
- Font sizes (`--fs`)
- Corner radius (`--cr`)
- Rivet size (`--rv`)

## 🔧 Installation as Screensaver

### Method 1: Browser Fullscreen (Simple)
1. Open `index.html` in Chrome/Firefox
2. Press F11 for true fullscreen
3. Move mouse or press any key to exit

### Method 2: Dedicated Screensaver
1. Download a screensaver creator (ScreenSaverWizard, Axialis, etc.)
2. Use `index.html` as the source
3. Compile to `.scr` format
4. Copy to `C:\Windows\System32\`
5. Right-click and select "Install"

## 🌍 Location Support

The app automatically detects your location, but you can modify the coordinates in the code:
```javascript
// Default fallback coordinates (Mecca)
userLat = 21.3891; 
userLng = 39.8579;
```

## 📊 Prayer Calculation Method

Uses the Muslim World League calculation method:
- Fajr angle: 18°
- Isha angle: 17°
- Asr: Shafi'i method (shadow ratio = 1)

## 🔄 Updates

The app automatically:
- Updates clock every second
- Refreshes prayer times daily at midnight
- Adapts layout on window resize
- Handles orientation changes

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is open source and available under the MIT License.

---

**Made with ❤️ for the Muslim community**
