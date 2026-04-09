import {header} from './header.js';

header();

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const timelineContacts = gsap.timeline({paused: true});

timelineContacts.from('.contacts-page__title', {opacity: 0, y: 100, duration: 0.55});
timelineContacts.from('#contact-one', {opacity: 0, y: 200, duration: 0.3});
timelineContacts.from('#contact-two', {opacity: 0, y: 200, duration: 0.3});
timelineContacts.from('#contact-three', {opacity: 0, y: 200, duration: 0.3});
timelineContacts.from('#contact-four', {opacity: 0, y: 200, duration: 0.3});
timelineContacts.from('.contacts-page__link', {opacity: 0, y: 50, duration: 0.25});
timelineContacts.from('#decor-one', {opacity: 0, y: 50, duration: 0.4}, '-=0.8');
timelineContacts.from('#decor-two', {opacity: 0, y: 50, duration: 0.4}, '-=0.7');
timelineContacts.to('#decor-one', {
  rotation: -8,
  duration: 2,
  delay: -1.5,
  ease: "none",
  repeat: -1,
  yoyo: true
});
timelineContacts.to('#decor-two', {
  rotation: 8,
  duration: 2,
  delay: -1.5,
  ease: "none",
  repeat: -1,
  yoyo: true
});

ScrollTrigger.create({
  trigger: '.contacts-page',
  once: true,
  onEnter: () => {
    timelineContacts.play();
  },
});