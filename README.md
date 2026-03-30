# React Music Player

A modern, responsive music player built with React that provides a smooth audio experience with an intuitive interface.

## 🎵 Features

- **Audio Playback**: Play, pause, skip forward/backward through songs
- **Time Control**: Interactive progress bar to scrub through tracks
- **Song Library**: Browse and select songs from a collapsible library
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Auto-Advance**: Automatically plays the next song when current track ends
- **Visual Feedback**: Active song highlighting in the library

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd react-player
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📱 Usage

- **Play/Pause**: Click the play/pause button in the center
- **Skip Tracks**: Use the forward/backward arrows to navigate songs
- **Time Scrubbing**: Drag the progress bar to jump to different parts of the song
- **Browse Library**: Click the menu icon to toggle the song library
- **Select Songs**: Click any song in the library to play it immediately

## 🛠️ Built With

- **React** - Frontend framework
- **SCSS** - Styling
- **FontAwesome** - Icons
- **HTML5 Audio** - Audio playback

## 📂 Project Structure

```
src/
├── components/
│   ├── Player.js      # Main player controls
│   ├── Song.js        # Current song display
│   ├── Library.js     # Song library container
│   ├── LibrarySong.js # Individual song item
│   └── Nav.js         # Navigation header
├── styles/
│   ├── app.scss       # Main styles
│   ├── _player.scss   # Player component styles
│   ├── _song.scss     # Song display styles
│   ├── _library.scss  # Library styles
│   └── _nav.scss      # Navigation styles
├── data.js            # Song data
└── App.js             # Main app component
```

## 🎯 Key Components

- **Player**: Handles audio playback, time updates, and user controls
- **Library**: Displays all available songs with selection functionality
- **Song**: Shows current playing song with album art
- **Navigation**: Toggles library visibility

## 📱 Mobile Support

The app is fully responsive and works seamlessly on mobile devices. Touch interactions are optimized for smaller screens, and the library slides in from the side on mobile.

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (not recommended)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is private and not licensed for public use.

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
