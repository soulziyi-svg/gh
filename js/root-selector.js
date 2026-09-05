const spaceSliders = document.querySelectorAll('[data-space-slider]');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

spaceSliders.forEach((slider, sliderIndex) => {
  const slides = [...slider.querySelectorAll('.type-card__slides img')];
  const indicators = [...slider.querySelectorAll('.type-card__progress i')];
  const name = slider.querySelector('[data-slide-name]');
  const names = sliderIndex === 0
    ? ['거실', '욕실', '주방', '침실']
    : ['카페', '오피스', '리테일', '레스토랑'];
  let current = 0;

  const showSlide = (next) => {
    slides[current].classList.remove('is-active');
    indicators[current].classList.remove('is-active');
    current = next;
    slides[current].classList.add('is-active');
    indicators[current].classList.add('is-active');
    name.textContent = names[current];
  };

  if (!reduceMotion && slides.length > 1) {
    window.setInterval(() => showSlide((current + 1) % slides.length), 2000);
  }
});
