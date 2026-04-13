gsap.registerPlugin(ScrollTrigger, TextPlugin);

function splitTextToLetters(selector) {
  const element = document.querySelector(selector);
  element.innerHTML = element.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
}

function animateNumber(element, start, end, duration) {
  let obj = {value: start};
  gsap.to(obj, {
    value: end,
    duration: duration,
    roundProps: "value",
    ease: "power1.inOut",
    onUpdate: function () {
      element.textContent = obj.value;
    }
  });
}

/* Start Screen */

const titleTimeline = gsap.timeline();
const subtitleTimeline = gsap.timeline();

function typewriterAnimation() {
  const titleLines = Array.from(document.getElementById('title').children);

  titleLines.forEach((line, index) => {
    titleTimeline.from(line.children, {
      x: '-100%',
      duration: 1,
      ease: "power2.out",
      delay: index * 0.2
    });
  });

  titleTimeline.from('.start__img', {
    opacity: 0,
    duration: 1,
    ease: "power4.out",
    transformOrigin: "right center",
    skewX: -34,
    skewY: -30,
    x: 0,
    y: 250,
    scale: 0.4,
  }, '-=0.2');

  titleTimeline.to(".typewriter", {
    duration: 1.4,
    clipPath: "inset(0% 0% 0% 0%)",
    ease: "power2.out"
  }, 0.3);

  titleTimeline.fromTo('.start__button--one',
    {y: 120, opacity: 0},
    {duration: 0.3, y: 0, opacity: 1}, 0.1);

  titleTimeline.fromTo('.start__button--two',
    {y: 120, opacity: 0},
    {duration: 0.3, y: 0, opacity: 1}, 0.5);

  titleTimeline.fromTo('.start__bottom-title',
    {y: 50, opacity: 0},
    {duration: 0.1, y: 0, opacity: 1}, 1);

  titleTimeline.fromTo('.start__text',
    {y: 50, opacity: 0},
    {duration: 0.1, y: 0, opacity: 1}, 1.3);

  titleTimeline.to(".typewriter-two", {
    delay: -0.3,
    duration: 0.8,
    clipPath: "inset(0% 0% 0% 0%)",
    ease: "power2.out"
  });

  titleTimeline.eventCallback('onComplete', () => {
    setTimeout(() => {
      subtitleTimeline.play();
    }, 50);
  });
}

typewriterAnimation();

ScrollTrigger.create({
  trigger: ".typewriter-two",
  animation: subtitleTimeline,
  start: "top center",
  end: "bottom center",
});

/* MarketOffers */

splitTextToLetters('.marketoffers__title');
splitTextToLetters('.marketoffers__text--bottom');

const timelineMarket = gsap.timeline({paused: true});

timelineMarket.from('.marketoffers__title .letter', {
  opacity: 0,
  duration: 0.1,
  ease: "power4.out",
  stagger: 0.03
});
timelineMarket.from('.marketoffers__card--one', {opacity: 0, y: 300, duration: 0.25}, '-=1');
timelineMarket.from('.marketoffers__card--long', {opacity: 0, y: 300, duration: 0.45}, '-=0.7');
timelineMarket.from('.marketoffers__img--decor', {opacity: 0, y: -150, duration: 0.35}, '-=0.4');
timelineMarket.from('#marketoffers-one', {opacity: 0, y: 150, duration: 0.45}, '-=0.3');
timelineMarket.from('.marketoffers__subtitle--top', {opacity: 0, y: 50, duration: 0.3}, '-=0.5');
timelineMarket.from('.marketoffers__text--bottom .letter', {
  opacity: 0,
  duration: 0.1,
  ease: "power4.out",
  stagger: 0.01
}, '-=0.6');
timelineMarket.from('.marketoffers__subtitle--padding', {opacity: 0, y: 150, duration: 0.3}, '-=1.1');
timelineMarket.from('.marketoffers__digital', {opacity: 0, y: 300, duration: 0.35}, '-=0.6');
timelineMarket.from('.marketoffers__info', {opacity: 0, y: 200, duration: 0.45}, '-=0.6');
timelineMarket.from('.marketoffers__link', {opacity: 0, y: 200, duration: 0.4}, '-=0.6');
timelineMarket.from('.marketoffers__text--two', {opacity: 0, y: 200, duration: 0.5}, '-=0.5');

function createScrollTriggerMarket() {
  let startValue = 'bottom 180%';

  if (window.matchMedia('(min-height: 740px)').matches) {
    startValue = 'top 70%';
  }

  if (window.matchMedia('(max-width: 630px)').matches) {
    startValue = 'top 70%';
  }

  ScrollTrigger.create({
    trigger: '.marketoffers',
    start: startValue,
    once: true,
    onEnter: () => {
      timelineMarket.play();
    },
  });
}

createScrollTriggerMarket();

/* Community */

splitTextToLetters('.community__title');
splitTextToLetters('.community__text');

const timelineCommunity = gsap.timeline({paused: true});
timelineCommunity.from('.community', {opacity: 0, y: 100, duration: 0.6});
timelineCommunity.from('.community__title .letter', {
  opacity: 0,
  duration: 0.05,
  ease: "power4.out",
  stagger: 0.02
});
timelineCommunity.from('.community__text .letter', {
  opacity: 0,
  duration: 0.1,
  ease: "power4.out",
  stagger: 0.005,
});
timelineCommunity.from('.community__link', {opacity: 0, y: 100, duration: 0.5}, '-=0.4');
timelineCommunity.from('.community__item--one', {opacity: 0, y: 100, duration: 0.4}, '-=0.9');
timelineCommunity.from('.community__item--two', {opacity: 0, y: 100, duration: 0.4}, '-=0.8');
timelineCommunity.from('.community__decor', {opacity: 0, y: -100, duration: 0.4});
timelineCommunity.from('.community__img', {
  opacity: 0,
  duration: 2,
  ease: "power4.out",
  transformOrigin: "right center",
  skewX: 40,
  skewY: -40,
  x: 0,
  y: 350,
  onStart: function () {
    gsap.set('.community__img', {transformOrigin: "right center"});
  },
  onComplete: function () {
    gsap.to('.community__img', {
      rotation: 1.4,
      skewY: -0.5,
      duration: 1.4,
      ease: 'power1.inOut',
      repeat: -1,
      yoyo: true,
      delay: -0.2
    });
  }
}, '-=1.7');

function createScrollTrigger() {
  let startValue = 'bottom 170%';

  if (window.matchMedia('(max-width: 1508px)').matches) {
    startValue = 'bottom 190%';
  }

  if (window.matchMedia('(max-width: 830px)').matches) {
    startValue = 'bottom 160%';
  }

  if (window.matchMedia('(max-width: 530px)').matches) {
    startValue = 'top 90%';
  }

  ScrollTrigger.create({
    trigger: '.community',
    start: startValue,
    once: true,
    onEnter: () => {
      timelineCommunity.play();
    },
  });
}

createScrollTrigger();

/* Partners */

splitTextToLetters('.partners__title');

const timelinePartners = gsap.timeline({paused: true});
timelinePartners.from('.partners__title .letter', {
  opacity: 0,
  duration: 0.5,
  ease: "power4.out",
  stagger: 0.03
});
timelinePartners.from('.partners__decor', {opacity: 0, y: 90, duration: 0.35}, '-=0.4');
timelinePartners.from('.partners__link--one', {opacity: 0, y: 50, duration: 0.45}, '-=0.6');
timelinePartners.from('.partners__link--two', {opacity: 0, y: 50, duration: 0.45}, '-=0.55');
timelinePartners.from('.partners__subtitle', {opacity: 0, y: 50, duration: 0.35}, '-=0.25');
timelinePartners.from('.partners__text', {opacity: 0, y: 50, duration: 0.35}, '-=0.30');

ScrollTrigger.create({
  trigger: '.partners',
  start: 'bottom 150%',
  once: true,
  onEnter: () => {
    timelinePartners.play();
  },
});

/* Exclusive Offers */
splitTextToLetters('.exclusive-offers__title');
splitTextToLetters('.exclusive-offers__subtext');

const timelineExclusiveOffers = gsap.timeline({paused: true});
timelineExclusiveOffers.from('.exclusive-offers__title .letter', {
  opacity: 0,
  duration: 0.1,
  ease: "power4.out",
  stagger: 0.03
});
timelineExclusiveOffers.from('.exclusive-offers__subtext .letter', {
  opacity: 0,
  duration: 0.1,
  ease: "power4.out",
  stagger: 0.01
});
timelineExclusiveOffers.from('.exclusive-offers__name--one', {opacity: 0, y: 60, duration: 0.5}, '-=0.85');
timelineExclusiveOffers.from('.exclusive-offers__text--one', {opacity: 0, y: 60, duration: 0.5}, '-=0.65');
timelineExclusiveOffers.from('#one-description', {opacity: 0, y: 110, duration: 0.7}, '-=0.85');
timelineExclusiveOffers.from('#two-description', {opacity: 0, y: 110, duration: 0.7}, '-=0.70');
timelineExclusiveOffers.from('#exclusive-decor-two', {opacity: 0, y: 110, duration: 1.3}, '-=0.70');
timelineExclusiveOffers.from('#one-link-offer', {opacity: 0, y: 110, duration: 0.7}, '-=0.25');

timelineExclusiveOffers.from('.exclusive-offers__name--two', {opacity: 0, y: 60, duration: 0.5}, '-=1.25');
timelineExclusiveOffers.from('.exclusive-offers__text--two', {opacity: 0, y: 60, duration: 0.5}, '-=1.1');
timelineExclusiveOffers.from('#three-description', {opacity: 0, y: 110, duration: 0.7}, '-=0.9');
timelineExclusiveOffers.from('#four-description', {opacity: 0, y: 110, duration: 0.7}, '-=0.8');
timelineExclusiveOffers.from('#exclusive-decor-one', {opacity: 0, y: 110, duration: 1.1}, '-=1.1');
timelineExclusiveOffers.from('.exclusive-offers__subtitle', {opacity: 0, y: 40, duration: 0.7}, '-=0.7');
timelineExclusiveOffers.from('#exclusive-subtext', {opacity: 0, y: 30, duration: 0.4}, '-=0.6');
timelineExclusiveOffers.from('#two-link-offer', {opacity: 0, y: 50, duration: 0.7}, '-=0.45');

timelineExclusiveOffers.to('#exclusive-decor-one', {
  rotation: -7,
  duration: 2,
  delay: -1.5,
  ease: "none",
  repeat: -1,
  yoyo: true
});

timelineExclusiveOffers.to('#exclusive-decor-two', {
  rotation: 7,
  duration: 2,
  delay: -1.5,
  ease: "none",
  repeat: -1,
  yoyo: true
});

function createScrollTriggerOffers() {
  let startValue = 'bottom 180%';

  if (window.matchMedia('(max-width: 730px)').matches) {
    startValue = 'top 70%';
  }

  ScrollTrigger.create({
    trigger: '.exclusive-offers',
    start: startValue,
    once: true,
    onEnter: () => {
      timelineExclusiveOffers.play();
    },
  });
}

createScrollTriggerOffers();

/* Home Cases */
if (document.querySelector('.home-cases')) {
  splitTextToLetters('.home-cases__title');

  const timelineHomeCases = gsap.timeline({paused: true});
  timelineHomeCases.from('.home-cases__title .letter', {
    opacity: 0,
    duration: 0.08,
    ease: "power4.out",
    stagger: 0.02
  });
  timelineHomeCases.from('.home-cases__all', {opacity: 0, y: 60, duration: 0.4}, '-=0.4');
  timelineHomeCases.from('.home-cases__nav-btn', {opacity: 0, y: 40, duration: 0.35, stagger: 0.1}, '-=0.4');
  timelineHomeCases.from('.home-cases__slide', {opacity: 0, y: 120, duration: 0.5, stagger: 0.12}, '-=0.2');

  ScrollTrigger.create({
    trigger: '.home-cases',
    start: 'top 50%',
    once: true,
    onEnter: () => {
      timelineHomeCases.play();
    },
  });
}

/* Contacts */
splitTextToLetters('.contacts__subtitle');

const timelineContacts = gsap.timeline({paused: true});
timelineContacts.from('.contacts__subtitle .letter', {
  opacity: 0,
  duration: 1.3,
  ease: "power4.out",
  stagger: 0.03
});
timelineContacts.from('.contacts__title', {opacity: 0, y: 300, duration: 0.5}, '-=0.8');
timelineContacts.from('.contacts__text', {opacity: 0, y: 300, duration: 0.5}, '-=0.5');
timelineContacts.from('.contacts__item-subtext', {opacity: 0, y: 100, duration: 0.4}, '-=1.1');
timelineContacts.from('.contacts__info', {opacity: 0, y: 200, duration: 0.5}, '-=0.89');
timelineContacts.from('#contact-link', {opacity: 0, y: 200, duration: 0.3}, '-=0.6');
timelineContacts.from('#contact-one', {opacity: 0, y: 200, duration: 0.4}, '-=0.5');
timelineContacts.from('#contact-two', {opacity: 0, y: 200, duration: 0.4}, '-=0.4');
timelineContacts.from('#contact-three', {opacity: 0, y: 200, duration: 0.4}, '-=0.2');
timelineContacts.from('#telegram-icon', {
  opacity: 0,
  scale: 0.5,
  rotation: 720,
  transformOrigin: "center center",
  ease: "power2.out",
  duration: 1
}, '-=1.5');

ScrollTrigger.create({
  trigger: '.contacts',
  end: 'top 70%',
  once: true,
  onEnter: () => {
    timelineContacts.play();
  },
});

/* Footer */
const timelineFooter = gsap.timeline({paused: true});
timelineFooter.from('.footer__img', {opacity: 0, y: 320, duration: 0.6, delay: 0.2});
timelineFooter.from('.footer__author', {opacity: 0, y: 140, duration: 0.4}, '-=0.3');
timelineFooter.from('#column-one', {opacity: 0, y: 200, duration: 0.4}, '-=0.3');
timelineFooter.from('#column-two', {opacity: 0, y: 200, duration: 0.4}, '-=0.3');
timelineFooter.from('.widget__footer', {opacity: 0, y: 300, duration: 0.4}, '-=0.2');
timelineFooter.from('.menu-btn--footer', {opacity: 0, y: 100, duration: 0.3}, '-=0.2');
ScrollTrigger.create({
  trigger: '.footer',
  once: true,
  onEnter: () => {
    timelineFooter.play();
  },
});