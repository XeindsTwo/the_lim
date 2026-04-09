export function header() {
  const body = document.body;
  const headerMenu = document.querySelector('.header__mobile');
  const menuBtn = document.querySelector('.menu-btn--header');
  const anchors = document.querySelectorAll('.header__link.link');
  const screenReader = document.querySelector('.sr-only');

  menuBtn.addEventListener('click', (event) => {
    event.preventDefault();
    screenReader.textContent = 'Закрыть меню';
    document.documentElement.classList.toggle('active');
    body.classList.toggle('body--active');
    headerMenu.classList.toggle('header__mobile--active');
    menuBtn.classList.toggle('active');
    menuBtn.blur();
  });

  function scrollToTarget(targetId, offset = 30) {
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      document.documentElement.classList.remove('active');
      body.classList.remove('body--active');
      headerMenu.classList.remove('header__mobile--active');
      menuBtn.classList.remove('active');
      setTimeout(() => {
        const targetOffset = targetSection.offsetTop - offset;
        window.scrollTo({top: targetOffset, behavior: 'smooth'});
      }, 300);
    }
  }

  function handleAnchorClick(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href');
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

    scrollToTarget(targetId, offset);
  }

  for (const anchor of anchors) {
    anchor.addEventListener('click', handleAnchorClick);
    anchor.addEventListener('touchstart', handleAnchorClick, {passive: true});
  }

  const menuLinks = document.querySelectorAll('.header__link.link');
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', handleAnchorClick);
    menuLink.addEventListener('touchstart', handleAnchorClick, {passive: true});
  });
}