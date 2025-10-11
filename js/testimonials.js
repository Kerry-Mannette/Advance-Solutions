// Testimonials carousel enhancements
(function () {
  // Ensure DOM is ready
  document.addEventListener('DOMContentLoaded', function () {
    var carouselEl = document.getElementById('testimonialsCarousel');
    if (!carouselEl) return;

    // Create indicators dynamically based on items
    var inner = carouselEl.querySelector('.carousel-inner');
    var items = inner ? inner.querySelectorAll('.carousel-item') : [];
    if (items.length > 1) {
      var indicators = document.createElement('ol');
      indicators.className = 'carousel-indicators mb-4';
      items.forEach(function (it, idx) {
        var li = document.createElement('li');
        li.setAttribute('data-bs-target', '#testimonialsCarousel');
        li.setAttribute('data-bs-slide-to', String(idx));
        if (idx === 0) li.className = 'active';
        indicators.appendChild(li);
      });
      // Insert indicators before the carousel-inner
      carouselEl.insertBefore(indicators, inner);
    }

    // Initialize Bootstrap carousel with autoplay (interval) and wrap
    var carousel = new bootstrap.Carousel(carouselEl, {
      interval: 5000,
      ride: 'carousel',
      pause: false
    });

    // Pause on hover, resume on leave
    carouselEl.addEventListener('mouseover', function () {
      carousel.pause();
    });
    carouselEl.addEventListener('mouseleave', function () {
      carousel.cycle();
    });

    // Keyboard navigation: left/right to change slides
    carouselEl.setAttribute('tabindex', '0');
    carouselEl.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') {
        carousel.prev();
      } else if (e.key === 'ArrowRight') {
        carousel.next();
      }
    });
  });
})();


