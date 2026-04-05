# Deployment Guide - Contract Law Academy PWA

Quick setup instructions for different hosting platforms.

## 🚀 Quick Start Summary

You have 5 files to deploy:
1. **index.html** - Main application file
2. **app.js** - Application logic
3. **sw.js** - Service worker (offline support)
4. **manifest.json** - App metadata
5. **Audio files** - WAV files from the original zip (16 files)

All files must be in the same directory on your server.

---

## ☁️ Deployment Options

### 1. NETLIFY (Recommended for Beginners) ⭐

**Steps:**
1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click "New Site from Git"
4. Select your repository with the PWA files
5. Netlify will auto-detect and deploy!
6. HTTPS is automatic

**Time**: 5 minutes
**Cost**: Free with free tier
**Difficulty**: ⭐ Easy

**Notes:**
- No configuration needed
- Automatic HTTPS
- Free domain or use your own
- File upload: Max 100MB

---

### 2. FIREBASE HOSTING

**Prerequisites:**
- Google account
- Node.js installed

**Steps:**
```bash
# 1. Install Firebase CLI
npm install -g firebase-tools

# 2. Login
firebase login

# 3. Initialize project (in your project folder)
firebase init hosting

# 4. Deploy
firebase deploy
```

**Time**: 10 minutes
**Cost**: Free with free tier
**Difficulty**: ⭐⭐ Medium

**Benefits:**
- Fast global CDN
- Automatic HTTPS
- Real-time database options
- Free tier very generous

---

### 3. GITHUB PAGES + CLOUDFLARE (Free HTTPS)

**Steps:**
1. Create GitHub repository
2. Push files to repository
3. Go to repository Settings
4. Enable "GitHub Pages" from main branch
5. Set up Cloudflare for free HTTPS (optional)

**Time**: 10 minutes
**Cost**: Free
**Difficulty**: ⭐⭐ Medium

**URL Format**: `username.github.io/repository-name`

**Note**: Direct GitHub Pages doesn't support Service Workers well. Use Cloudflare for better PWA support.

---

### 4. VERCEL (Former Zeit)

**Steps:**
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

**Time**: 5 minutes
**Cost**: Free with free tier
**Difficulty**: ⭐ Easy

**Advantages:**
- Automatic HTTPS
- Preview deployments
- Serverless functions available
- Great documentation

---

### 5. HEROKU (With Node.js)

**Steps:**
```bash
# 1. Create Procfile with content:
web: python -m http.server $PORT

# Or for Node.js, create server.js:
const express = require('express');
const app = express();
app.use(express.static('./'));
app.listen(process.env.PORT || 5000);

# 2. Deploy
heroku create your-app-name
git push heroku main
```

**Time**: 15 minutes
**Cost**: Free (with limitations)
**Difficulty**: ⭐⭐⭐ Hard

---

### 6. TRADITIONAL WEB HOST (cPanel/Shared Hosting)

**Steps:**
1. FTP into your server
2. Create folder: `/public_html/contract-law/`
3. Upload all files (index.html, app.js, sw.js, manifest.json, audio files)
4. Set correct MIME types in .htaccess:

```apache
<IfModule mod_mime.c>
  AddType application/javascript .js
  AddType application/json .json
  AddType audio/wav .wav
  AddType text/html .html
</IfModule>

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>
```

5. Ensure HTTPS is enabled (Let's Encrypt)

**Time**: 20 minutes
**Cost**: Usually $3-10/month
**Difficulty**: ⭐⭐⭐ Hard

---

### 7. AWS S3 + CLOUDFRONT

**Steps:**
```bash
# 1. Create S3 bucket
aws s3 mb s3://contract-law-academy

# 2. Upload files
aws s3 sync . s3://contract-law-academy/

# 3. Set public access
aws s3api put-bucket-policy --bucket contract-law-academy \
  --policy file://policy.json

# 4. Create CloudFront distribution
# (Use AWS Console)

# 5. Enable HTTPS
# CloudFront: Request SSL certificate
```

**Time**: 30 minutes
**Cost**: Pay-as-you-go (usually $1-5/month)
**Difficulty**: ⭐⭐⭐ Hard

---

### 8. DOCKER + ANY VPS

**Dockerfile:**
```dockerfile
FROM nginx:alpine

COPY index.html /usr/share/nginx/html/
COPY app.js /usr/share/nginx/html/
COPY sw.js /usr/share/nginx/html/
COPY manifest.json /usr/share/nginx/html/
COPY *.wav /usr/share/nginx/html/

EXPOSE 80
```

**Deploy:**
```bash
docker build -t contract-law-academy .
docker run -d -p 80:80 contract-law-academy
```

**Time**: 30 minutes
**Cost**: VPS costs ($5-20/month)
**Difficulty**: ⭐⭐⭐⭐ Very Hard

---

## 📋 Pre-Deployment Checklist

- [ ] All 5 files created (index.html, app.js, sw.js, manifest.json, audio files)
- [ ] Audio files named correctly (check `app.js` for file names)
- [ ] HTTPS enabled on hosting
- [ ] MIME types correctly configured
- [ ] Service worker registered (check browser console)
- [ ] Manifest file loads (check browser console)
- [ ] Audio plays correctly
- [ ] No console errors
- [ ] App installs on mobile

---

## 🧪 Testing After Deployment

### Desktop
1. Open browser developer tools (F12)
2. Check "Application" tab
3. Verify Service Worker status: "Active"
4. Check Manifest loads correctly
5. Play audio and check controls work

### Mobile
1. Open app in mobile browser
2. Look for "Install" prompt
3. Install to home screen
4. Launch installed app
5. Test all features work offline

---

## ⚡ Performance Tips

1. **Optimize Audio Files**: Use MP3 or OGG instead of WAV for smaller file sizes
2. **Compress Images**: If adding images, compress them
3. **Enable Gzip**: Ask your hosting provider to enable Gzip compression
4. **Use CDN**: For audio files, consider using a CDN
5. **Cache Strategy**: Service Worker caches everything (configured in sw.js)

---

## 🔐 Security Considerations

1. **HTTPS Required**: PWAs need HTTPS
2. **CSP Headers**: Add Content Security Policy headers
3. **No Sensitive Data**: App stores progress only locally
4. **CORS**: Configure CORS if needed for audio files

### Example CSP Header:
```
Content-Security-Policy: 
  default-src 'self'; 
  script-src 'self'; 
  style-src 'self' 'unsafe-inline'; 
  media-src 'self' data:; 
  manifest-src 'self'
```

---

## 📊 Hosting Comparison

| Platform | Setup Time | Cost | HTTPS | CDN | Difficulty |
|----------|-----------|------|-------|-----|-----------|
| Netlify | 5 min | Free | ✅ | ✅ | ⭐ |
| Vercel | 5 min | Free | ✅ | ✅ | ⭐ |
| Firebase | 10 min | Free | ✅ | ✅ | ⭐⭐ |
| GitHub Pages | 10 min | Free | ✅ | ✅ | ⭐⭐ |
| Heroku | 15 min | Free | ✅ | ❌ | ⭐⭐⭐ |
| Shared Host | 20 min | $3-10/mo | ✅ | ❌ | ⭐⭐⭐ |
| AWS S3 | 30 min | $1-5/mo | ✅ | ✅ | ⭐⭐⭐ |
| Docker VPS | 30 min | $5-20/mo | ❓ | ❌ | ⭐⭐⭐⭐ |

**Recommendation for beginners**: Use **Netlify** or **Vercel** - easiest setup with excellent PWA support.

---

## 🆘 Deployment Troubleshooting

### Issue: Service Worker Won't Register
- ✅ Ensure HTTPS is enabled
- ✅ Check `sw.js` file exists
- ✅ Look for errors in browser console
- ✅ Clear cache and reload

### Issue: Audio Files Not Loading
- ✅ Check file paths match in `app.js`
- ✅ Verify MIME type is `audio/wav` or `audio/mpeg`
- ✅ Use relative paths: `./filename.wav`
- ✅ Audio files must be in same directory as HTML

### Issue: Manifest Not Loading
- ✅ Check `<link rel="manifest" href="manifest.json">`
- ✅ Verify manifest.json exists
- ✅ Check manifest JSON syntax (use JSON validator)
- ✅ MIME type should be `application/json`

### Issue: App Won't Install on Mobile
- ✅ Ensure HTTPS is enabled
- ✅ Manifest must be valid JSON
- ✅ Icon URLs must be absolute or correct relative paths
- ✅ Try using Chrome (best PWA support)

### Issue: Slow Loading
- ✅ Compress audio files to MP3
- ✅ Enable Gzip compression
- ✅ Use CDN for audio files
- ✅ Check hosting provider's speed

---

## 📞 Getting Help

1. **Netlify Docs**: https://docs.netlify.com
2. **Firebase Docs**: https://firebase.google.com/docs
3. **MDN PWA Guide**: https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps
4. **Browser DevTools**: Press F12 for debugging

---

**Need help?** Check the main README.md for troubleshooting guide.

Happy deploying! 🚀
