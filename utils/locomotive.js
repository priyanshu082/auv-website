// locomotive-config.js
import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  // Add other configuration options as needed
});

export default scroll;
