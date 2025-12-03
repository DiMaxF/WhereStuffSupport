# WhereStuff Support Website

Support page for the WhereStuff iOS application, hosted on GitHub Pages.

## Overview

This is the official support website for WhereStuff, an iOS app for tracking items in storage locations. The site provides:

- App information and features
- Developer contact information
- Privacy Policy
- Contact form for user inquiries

## Requirements

This website meets App Store requirements for iOS apps:
- ✅ Support URL (required)
- ✅ Privacy Policy (required)
- ✅ Developer contact information (required)
- ✅ HTTPS (provided by GitHub Pages)

## Structure

```
wherestuff-support/
├── index.html          # Main page
├── styles/
│   └── main.css       # Main styles
├── scripts/
│   └── main.js        # JavaScript (form validation, smooth scrolling)
└── README.md          # Repository description
```

## Features

- **Responsive Design**: Mobile-first approach, works on all devices
- **Smooth Scrolling**: Navigation with smooth anchor scrolling
- **Form Validation**: Client-side validation for contact form
- **Back to Top Button**: Easy navigation for long pages
- **Privacy Policy**: Complete privacy policy matching app functionality
- **Contact Form**: Integrated contact form (Formspree or mailto:)

## Setup

### Using Formspree for Contact Form

1. Sign up at [Formspree.io](https://formspree.io)
2. Create a new form
3. Get your form ID
4. Update `index.html` line with form action:
   ```html
   <form id="contact-form" class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Using mailto: for Contact Form

1. Comment out the form action in `index.html`
2. Uncomment the mailto: code in `scripts/main.js` (lines 72-75)

## Deployment

### GitHub Pages

1. Create a new GitHub repository
2. Upload all files to the repository
3. Go to repository Settings → Pages
4. Select source: "Deploy from a branch"
5. Select branch: "main" (or "master")
6. Select folder: "/ (root)"
7. Click "Save"
8. Your site will be available at: `https://yourusername.github.io/wherestuff-support/`

### Custom Domain (Optional)

1. Add a `CNAME` file to the root with your domain name
2. Configure DNS records as per GitHub Pages documentation
3. GitHub Pages will automatically provide HTTPS for custom domains

## Customization

### Colors

Edit CSS variables in `styles/main.css`:
```css
:root {
    --primary-color: #007AFF;
    --primary-hover: #0051D5;
    /* ... */
}
```

### Contact Email

Update email addresses in `index.html`:
- Line with `where-stuff-support@proton.me` (replace with your email)

### App Version

Update version information in the "About the App" section of `index.html`

## Browser Support

- Safari (iOS)
- Chrome (Android)
- Desktop browsers (Chrome, Safari, Firefox, Edge)

## License

© 2025 cybercrot. All rights reserved.

## Updates

- **January 2025**: Initial release
- All content in English
- Privacy Policy matches app functionality
- No widget feature mentioned

