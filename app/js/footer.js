import {initAnchorLinks} from './anchor-link.js';

export function footer() {
  const bodyElement = document.body;
  const mobileFooter = document.querySelector('.footer__mobile');
  const footerMenuButton = document.querySelector('.menu-btn--footer');

  if (footerMenuButton) {
    footerMenuButton.addEventListener('click', (event) => {
      event.preventDefault();
      document.documentElement.classList.toggle('active');
      bodyElement.classList.toggle('body--active');
      mobileFooter?.classList.toggle('footer__mobile--active');
      footerMenuButton.classList.toggle('active');
      footerMenuButton.blur();
    });
  }

  initAnchorLinks({
    linkSelector: '.footer .anchor-link[href^="#"], .footer__mobile .anchor-link[href^="#"], .footer .widget__up[href^="#"], .footer__mobile .widget__up[href^="#"]',
    closeMenu: () => {
      document.documentElement.classList.remove('active');
      bodyElement.classList.remove('body--active');
      mobileFooter?.classList.remove('footer__mobile--active');
      footerMenuButton?.classList.remove('active');
    },
  });
}