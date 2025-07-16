fetch('/firebase-config')
  .then(res => res.json())
  .then(config => {
    firebase.initializeApp(config);

    // Now you can run your upload/gallery logic here
    const storage = firebase.storage();

const galleryContainer = document.getElementById('gallery');

// Reference to the uploads folder
const storageRef = storage.ref('uploads');

storageRef.listAll()
  .then((res) => {
    res.items.forEach((itemRef) => {
      itemRef.getDownloadURL().then((url) => {
        const img = document.createElement('img');
        img.src = url;
        img.alt = 'Uploaded Photo';
        img.className = 'mb-4 rounded-lg shadow w-full object-cover break-inside-avoid opacity-0 transition-opacity duration-700';

        // Fade in once loaded
        img.onload = () => {
          img.classList.remove('opacity-0');
          img.classList.add('opacity-100');
        };

        galleryContainer.appendChild(img);
      });
    });
  })
  .catch((error) => {
    console.error('Error fetching gallery:', error);
  });
  })
  .catch(err => console.error('Error fetching Firebase config:', err));

