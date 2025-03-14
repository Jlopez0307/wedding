const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const bars = document.querySelectorAll("#menu-btn div");
const menuLinks = document.querySelectorAll("#menu a");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
    // Toggle menu visibility
    menu.classList.toggle("hidden");

    setTimeout(() => {
      menu.classList.toggle("opacity-0");
      menu.classList.toggle("scale-95");
    }, 10);

    // Animate menu links (fade + slide in)
    if (!menu.classList.contains("hidden")) {
      menuLinks.forEach((link, index) => {
        setTimeout(() => {
          link.classList.add("opacity-100", "translate-y-0");
        }, 100 * index);
      });
    } else {
      menuLinks.forEach((link) => {
        link.classList.remove("opacity-100", "translate-y-0");
        link.classList.add("opacity-0", "translate-y-5");
      });
    }

    // Animate menu button to "X"
    bars[0].classList.toggle("rotate-45");
    bars[1].classList.toggle("opacity-0");
    bars[2].classList.toggle("-rotate-45");

    bars[0].classList.toggle("translate-y-1.5");
    bars[2].classList.toggle("-translate-y-1.5");
});

// Change navbar background on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("bg-white", "shadow-lg");
    navbar.classList.remove("bg-transparent");
  } else {
    navbar.classList.add("bg-transparent");
    navbar.classList.remove("bg-white", "shadow-lg");
  }
});