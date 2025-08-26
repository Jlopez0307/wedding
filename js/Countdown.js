document.addEventListener("DOMContentLoaded", function () {
  // Set the wedding date (October 11, 2025, 15:00 local time)
  const weddingDate = new Date('2025-10-11T12:00:00');

  function updateCountdown() {
    const now = new Date();
    const diff = weddingDate - now;

    const countdown = document.getElementById('countdown');
    if (!countdown) return;

    if (diff <= 0) {
      countdown.innerHTML = "<span class='text-green-300'>It's Wedding Day!</span>";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdown.innerHTML = `
      <div><span class="font-bold">${days}</span><span class="block text-lg text-gray-200">Days</span></div>
      <div><span class="font-bold">${hours}</span><span class="block text-lg text-gray-200">Hours</span></div>
      <div><span class="font-bold">${minutes}</span><span class="block text-lg text-gray-200">Minutes</span></div>
      <div><span class="font-bold">${seconds}</span><span class="block text-lg text-gray-200">Seconds</span></div>
    `;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
});