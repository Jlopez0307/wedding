
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHyaQizf2R-14owLvcq6O450ArCPCSJcQ",
  authDomain: "ml-wedding-2bf4e.firebaseapp.com",
  projectId: "ml-wedding-2bf4e",
  storageBucket: "ml-wedding-2bf4e.firebasestorage.app",
  messagingSenderId: "283590127904",
  appId: "1:283590127904:web:a3250e1e7123986f3ba745"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

const form = document.getElementById('uploadForm');
const status = document.getElementById('status');

form.addEventListener('submit', async e => {
  e.preventDefault();
  const fileInput = document.getElementById('photo');
  const file = fileInput.files[0];
  if (!file) return;

  status.textContent = 'Uploading...';

  try {
    const storageRef = storage.ref(`uploads/${Date.now()}_${file.name}`);
    await storageRef.put(file);
    status.textContent = 'Upload successful!';
    form.reset();
  } catch (err) {
    console.error('Upload failed:', err);
    status.textContent = 'Upload failed. Please try again.';
  }
});
