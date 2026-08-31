document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('mobileToggle');
  const panel = document.getElementById('mobilePanel');

  if (toggleBtn && panel) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = !panel.hasAttribute('hidden');
      if (isOpen) {
        panel.setAttribute('hidden', '');
      } else {
        panel.removeAttribute('hidden');
      }
    });

    panel.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => panel.setAttribute('hidden', ''));
    });
  }
});
