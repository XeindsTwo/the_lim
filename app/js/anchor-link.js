export function initAnchorLinks({
                                  linkSelector = '.anchor-link[href^="#"]',
                                  closeMenu = null,
                                  delay = 300,
                                } = {}) {
  const links = document.querySelectorAll(linkSelector);

  function getOffset(targetId) {
    let offset = 30;

    if (window.innerWidth <= 1080) {
      if (targetId === '#community') {
        offset = 40;
      }

      if (targetId === '#support') {
        offset = 80;
      }
    } else {
      if (targetId === '#community') {
        offset = 105;
      }

      if (targetId === '#support') {
        offset = 125;
      }
    }

    return offset;
  }

  function scrollToTarget(targetId) {
    const targetSection = document.querySelector(targetId);
    if (!targetSection) return;

    if (typeof closeMenu === 'function') {
      closeMenu();
    }

    setTimeout(() => {
      const offset = getOffset(targetId);
      const targetTop = targetSection.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top: targetTop,
        behavior: 'smooth',
      });
    }, delay);
  }

  function handleAnchorClick(event) {
    event.preventDefault();

    const targetId = this.getAttribute('href');
    if (!targetId || !targetId.startsWith('#')) return;

    scrollToTarget(targetId);
  }

  links.forEach((link) => {
    link.addEventListener('click', handleAnchorClick);
  });
}