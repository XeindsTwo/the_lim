export function footer() {
  const bodyElement = document.body;
  const mobileFooter = document.querySelector('.footer__mobile');
  const footerMenuButton = document.querySelector('.menu-btn--footer');
  const footerLinks = document.querySelectorAll('.footer__link-mobile[href^="#"]');

  footerMenuButton.addEventListener('click', (event) => {
    event.preventDefault();
    document.documentElement.classList.toggle('active');
    bodyElement.classList.toggle('body--active');
    mobileFooter.classList.toggle('footer__mobile--active');
    footerMenuButton.classList.toggle('active');
    footerMenuButton.blur();
  });

  function scrollToTarget(targetId) {
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      document.documentElement.classList.remove('active');
      bodyElement.classList.remove('body--active');
      mobileFooter.classList.remove('footer__mobile--active');
      footerMenuButton.classList.remove('active');
      setTimeout(() => {
        const targetOffset = targetSection.offsetTop;
        window.scrollTo({top: targetOffset, behavior: 'smooth'});
      }, 300);
    }
  }

  function handleAnchorClick(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href');
    scrollToTarget(targetId);
  }

  for (const footerLink of footerLinks) {
    footerLink.addEventListener('click', handleAnchorClick);
    footerLink.addEventListener('touchstart', handleAnchorClick, {passive: true});
  }

  const headerLinks = document.querySelectorAll('.new-header__link');
  headerLinks.forEach((headerLink) => {
    headerLink.addEventListener('click', handleAnchorClick);
    headerLink.addEventListener('touchstart', handleAnchorClick, {passive: true});
  });
}