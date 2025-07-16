// Firebase Config (same as before)
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
