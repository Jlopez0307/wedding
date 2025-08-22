const express = require('express');
const app = express();
const path = require('path');

// Load environment variables from .env file in project root
require('dotenv').config({ path: path.join(__dirname, '../.env') });

// Serve static files (your HTML/CSS/JS)
app.use(express.static(path.join(__dirname, '../')));

// Serve Firebase config from env vars
app.get('/firebase-config', (req, res) => {
  res.json({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  });
});

// Optional: Catch-all for single-page apps
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../html/index.html'));
// });

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../html/index.html'));
});

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
  res.sendFile(path.join(__dirname, '../html/wedding-gallery.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
