const images = document.querySelectorAll("#gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.getElementById("close-lightbox");

// Open Lightbox
images.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.classList.remove("hidden");
    lightboxImg.src = img.src;
  });
});

// Close Lightbox when clicking the close button
closeLightbox.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevent event bubbling
  lightbox.classList.add("hidden");
});

// Close Lightbox when clicking outside the image
lightbox.addEventListener("click", (e) => {
  if (e.target !== lightboxImg) {
    lightbox.classList.add("hidden");
  }
});

// Close Lightbox when pressing the ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    lightbox.classList.add("hidden");
  }
});