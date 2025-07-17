const express = require('express');
const app = express();
const path = require('path');

// Serve static files (your HTML/CSS/JS)
app.use(express.static(path.join(__dirname, '../')));

// Serve Firebase config from env vars
app.get('/firebase-config', (req, res) => {
  res.json({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "ml-wedding-2bf4e.firebaseapp.com",
    projectId: "ml-wedding-2bf4e",
    storageBucket: "ml-wedding-2bf4e.firebasestorage.app",
    messagingSenderId: "283590127904",
    appId: "1:283590127904:web:a3250e1e7123986f3ba745"
  });
});

// Optional: Catch-all for single-page apps
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../html/index.html'));
// });

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, '../html/index.html'));
});

app.get('/rsvp', (req, res) => {
  res.sendFile(path.join(__dirname, '../html/rsvpForm.html'));
});

app.get('/faq', (req, res) => {
  res.sendFile(path.join(__dirname, '../html/faq.html'));
});

app.get('/registry', (req, res) => {
  res.sendFile(path.join(__dirname, '../html/registry.html'));
});

app.get('/gallery', (req, res) => {
  res.sendFile(path.join(__dirname, '../html/gallery.html'));
});

app.get('/upload', (req, res) => {
  res.sendFile(path.join(__dirname, '../html/upload.html'));
});

app.get('/wedding-gallery', (req, res) => {
  res.sendFile(path.join(__dirname, '../html/weddin-gallery.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
