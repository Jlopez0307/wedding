fetch('/firebase-config')
  .then(res => res.json())
  .then(config => {
    firebase.initializeApp(config);

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
        status.textContent = 'Upload successful! Redirecting...';
        form.reset();

        // ✅ Redirect after a short delay (optional)
        setTimeout(() => {
          window.location.href = '/wedding-gallery';
        }, 1000); // 1 second delay for user feedback

      } catch (err) {
        console.error('Upload failed:', err);
        status.textContent = 'Upload failed. Please try again.';
      }
    });
  })
  .catch(err => console.error('Error fetching Firebase config:', err));
