document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('mobileToggle');
  const panel = document.getElementById('mobilePanel');

  if (toggleBtn && panel) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = !panel.hasAttribute('hidden');
      if (isOpen) {
        panel.setAttribute('hidden', '');
        toggleBtn.setAttribute('aria-expanded', 'false');
      } else {
        panel.removeAttribute('hidden');
        toggleBtn.setAttribute('aria-expanded', 'true');
      }
    });

    panel.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        panel.setAttribute('hidden', '');
        toggleBtn.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        panel.setAttribute('hidden', '');
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }
});
