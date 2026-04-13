import {initAnchorLinks} from './anchor-link.js';

export function header() {
  const body = document.body;
  const headerMenu = document.querySelector('.header__mobile');
  const menuBtn = document.querySelector('.menu-btn--header');
  const screenReader = document.querySelector('.sr-only');

  if (menuBtn) {
    menuBtn.addEventListener('click', (event) => {
      event.preventDefault();
      screenReader.textContent = 'Закрыть меню';
      document.documentElement.classList.toggle('active');
      body.classList.toggle('body--active');
      headerMenu.classList.toggle('header__mobile--active');
      menuBtn.classList.toggle('active');
      menuBtn.blur();
    });
  }

  initAnchorLinks({
    linkSelector: '.header .anchor-link[href^="#"], .header__mobile .anchor-link[href^="#"]',
    closeMenu: () => {
      document.documentElement.classList.remove('active');
      body.classList.remove('body--active');
      headerMenu?.classList.remove('header__mobile--active');
      menuBtn?.classList.remove('active');
    },
  });
}