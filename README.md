# Contract Law Academy - Progressive Web App (PWA)

A comprehensive mobile learning application for mastering Contract Law fundamentals with special focus on Remedies for Breach and Damages. This PWA includes 16 detailed audio lessons with captions, guidelines, and interactive features.

## 📱 Features

### Core Features
- **16 Comprehensive Audio Lessons** covering all aspects of contract law
- **Interactive Audio Player** with controls and captions
- **Progress Tracking** - Monitor your learning journey
- **Offline Support** - Works without internet connection
- **Mobile-Optimized Design** - Perfect for smartphones and tablets
- **Installable App** - Download directly to your home screen
- **Dark/Light Theme** - Comfortable viewing in any light condition

### Learning Features
- **Detailed Captions** - Read along with lessons
- **Timed Highlights** - Key points with timestamps
- **Study Guidelines** - Best practices and learning tips
- **Lesson Descriptions** - What you'll learn from each lesson
- **Progress Statistics** - Track completed lessons
- **Export Functionality** - Save your progress

### Lessons Included
1. Setting the Scene: What Are Terms?
2. Warranties and Innominate Terms
3. Conditions: Going to the Root
4. Incorporation: Is the Term in the Contract?
5. Exclusion Clauses and UCTA 1977
6. Misrepresentation: Elements and Statement of Fact
7. Three Types of Misrepresentation and Remedies
8. Mistake: Common, Mutual, Unilateral
9. Duress & Economic Coercion
10. Frustration: When the Contract Cannot Survive
11. Discharge by Performance
12. **Remedies for Breach: Damages** (Primary Focus)
13. The Privity Rule and Its Reform
14. Limitation of Actions
15. Gender and Contract Law
16. Malawian Law Context

## 🚀 Installation & Deployment

### Option 1: Deploy with Your Web Server (Recommended)

#### Requirements
- A web server (Apache, Nginx, Node.js, etc.)
- HTTPS support (required for PWA)
- File upload access

#### Steps
1. **Upload Files**: Upload all application files to your web server:
   - `index.html`
   - `app.js`
   - `sw.js`
   - `manifest.json`
   - Audio files (`.wav` files from the zip)

2. **Ensure HTTPS**: PWA requires HTTPS. Set up SSL/TLS certificates if not already done.

3. **Configure MIME Types**: Ensure your server serves these files with correct MIME types:
   ```
   .html -> text/html
   .js -> application/javascript
   .json -> application/json
   .wav -> audio/wav
   ```

4. **Test**: Open your domain in a browser and verify all files load correctly.

### Option 2: Deploy with GitHub Pages

1. Create a GitHub repository
2. Upload all files to the repository
3. Enable GitHub Pages in repository settings
4. Access your PWA via the GitHub Pages URL

### Option 3: Deploy with Netlify

1. Create a Netlify account
2. Connect your GitHub repository
3. Set build settings and deploy
4. Enable HTTPS (automatic)

### Option 4: Deploy with Firebase Hosting

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Initialize Firebase: `firebase init`
3. Deploy: `firebase deploy`

## 📲 How to Install on Phone

### iPhone/iPad
1. Open Safari and navigate to your app URL
2. Tap the **Share** button
3. Scroll down and tap **Add to Home Screen**
4. Tap **Add**
5. The app will appear on your home screen

### Android
1. Open Chrome and navigate to your app URL
2. Tap the **Menu** (three dots)
3. Tap **Install app** or **Add to Home screen**
4. Follow the prompts
5. The app will appear on your home screen

## 💾 Local Storage & Data

The app stores the following data locally on your device:
- Completed lessons list
- User preferences (theme, settings)
- Progress statistics

This data never leaves your device and is not shared with any server.

## 🎯 Using the App

### Main Navigation
1. **Lessons Tab** - Browse and access all available lessons
2. **Guidelines Tab** - Read learning guidelines and best practices
3. **Progress Tab** - Track your learning progress and statistics
4. **Settings Tab** - Customize app preferences

### Learning a Lesson
1. Click on any lesson card
2. Read the lesson description
3. Click **Play** to listen to the audio
4. Follow along with the captions
5. Click **Mark as Complete** when finished
6. Move to the next lesson

### Features
- **Download Lesson** - Save audio to device for offline listening
- **Share** - Share lessons with friends via social media
- **Export Progress** - Export your completion data as JSON

## ⚙️ Settings & Preferences

### Appearance
- **Light Mode** - Default bright theme
- **Dark Mode** - Easy on the eyes in low light

### Audio Preferences
- **Auto-play Next** - Automatically play next lesson
- **Show Captions** - Display lesson captions and highlights

### Data Management
- **Export Progress** - Download your progress as JSON file
- **Reset All** - Clear all progress (cannot be undone)

## 📊 Tracking Progress

The app tracks:
- Number of lessons completed
- Total lessons available
- Overall completion percentage
- Estimated hours invested
- Time remaining to completion

Export your progress anytime to keep a backup!

## 🔧 Technical Details

### Technology Stack
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **PWA**: Service Workers, Manifest.json
- **Storage**: LocalStorage API
- **Audio**: HTML5 Audio API

### Browser Compatibility
- Chrome/Edge 40+
- Firefox 35+
- Safari 11+ (iOS 11.3+)
- Samsung Internet 4+

### Offline Functionality
The Service Worker caches:
- HTML pages
- JavaScript files
- Manifest and metadata

Audio files can be downloaded for offline access via the "Download Lesson" button.

## 📋 Audio Files Setup

Place your audio files in the same directory as the HTML files. Update the `file` property in the `lessonsData` array in `app.js` if your audio file names differ from the expected names.

Audio file naming convention:
```
Lesson_Title_Here.wav
```

## 🔒 Privacy & Security

- No personal data is collected
- No external API calls
- All data stored locally on device
- No tracking or analytics
- Fully offline capable

## 🐛 Troubleshooting

### Audio Not Playing
- Ensure audio files are in the correct directory
- Check browser console for MIME type errors
- Verify file format is WAV or MP3
- Clear browser cache and reload

### Service Worker Not Registering
- Verify HTTPS is enabled
- Check browser console for errors
- Try clearing browser cache
- Ensure `sw.js` file exists

### App Won't Install
- Make sure you're on HTTPS
- Try different browser (Chrome works best)
- Clear cache and cookies
- Reload the page

### Progress Not Saving
- Check browser's LocalStorage is enabled
- Ensure you're not in private/incognito mode
- Check available storage space
- Try resetting the app

## 📝 Customization

### Adding New Lessons
Edit `lessonsData` array in `app.js`:
```javascript
{
  id: 17,
  title: "Your Lesson Title",
  icon: "📚",
  duration: "10-12 min",
  description: "Your description",
  file: "your_audio_file.wav",
  captions: [
    { time: "0:00", text: "Caption text here" },
    // Add more captions
  ]
}
```

### Changing Colors
Edit CSS variables in `index.html`:
```css
:root {
  --primary: #2563eb;
  --secondary: #7c3aed;
  /* ... other colors ... */
}
```

### Modifying Guidelines
Edit the Guidelines section in the HTML or in the `setupEventListeners()` function.

## 📞 Support

For issues or questions:
1. Check the Troubleshooting section
2. Clear cache and reload
3. Try a different browser
4. Check browser console for errors

## 📜 License

This application is provided as educational material. Customize and distribute as needed for your learning institution.

## 🎓 Educational Notes

This PWA is designed for:
- Law students learning contract law
- Legal professionals in training
- Anyone studying Malawian contract law
- Self-paced learning environments

## 🚀 Future Enhancements

Potential features for future versions:
- Quiz functionality
- Video lessons alongside audio
- Note-taking features
- Discussion forums
- Certification upon completion
- Multiple language support
- Interactive case studies

---

**Version**: 1.0.0  
**Last Updated**: April 2026  
**Lessons**: 16  
**Total Duration**: ~16-20 hours  
**Language**: English

Happy Learning! 📚✨
