
fetch('/firebase-config')
  .then(res => res.json())
  .then(config => {
    firebase.initializeApp(config);

    // Now you can run your upload/gallery logic here
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
  })
  .catch(err => console.error('Error fetching Firebase config:', err));
