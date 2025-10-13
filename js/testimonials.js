// Minimal testimonials carousel initialization
document.addEventListener('DOMContentLoaded', function () {
  var carouselEl = document.getElementById('testimonialsCarousel');
  if (!carouselEl) return;

  // Make focusable for keyboard navigation (if not already)
  if (!carouselEl.hasAttribute('tabindex')) carouselEl.setAttribute('tabindex', '0');

  // Initialize Bootstrap carousel with sensible defaults:
  // - interval: 5000ms autoplay
  // - pause: 'hover' (pause on mouseenter)
  // - keyboard: true (allow arrow navigation)
  new bootstrap.Carousel(carouselEl, {
    interval: 5000,
    ride: 'carousel',
    pause: 'hover',
    keyboard: true,
    touch: true
  });
});


