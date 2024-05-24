<script setup>
import { onMounted } from 'vue';
import quadNW from './assets/open_field_system_quadrant_northwest.png';
import quadNE from './assets/open_field_system_quadrant_northeast.png';
import quadSE from './assets/open_field_system_quadrant_southeast.png';
import quadSW from './assets/open_field_system_quadrant_southwest.png';

const props = defineProps({
  isDark: Boolean,
});

/**
 * FADE-IN BACKGROUND IMAGES
 * The background images are quite large and a better 'Cache-Control' value is
 * needed in vercel.json to optimize how they're cached, but even then, they may
 * be slow to load. So they are hidden by a masking div until all 4 quadrants
 * are fully loaded, then uncovered by transitioning the mask's opacity to zero with
 * with a 1 second eased duration to make it less jarring.
 */
const fourWinds = [
  { name: 'northwest', src: quadNW },
  { name: 'northeast', src: quadNE },
  { name: 'southeast', src: quadSE },
  { name: 'southwest', src: quadSW },
];
onMounted(() => {
  let loaded = 0;
  const mask = document.querySelector('.rr-home-bg-img-mask');
  mask.classList.add('cover');
  function uncover() {
    mask.classList.remove('cover');
    mask.classList.add('uncover');
  };
  fourWinds.forEach(({ src, name }) => {
    const img = new Image();
    img.addEventListener('load', () => {
      loaded += 1;
      const className = `.quadrant-${name}`;
      const quad = document.querySelector(className);
      quad.style.backgroundImage = `url("${src}")`; 
      if (loaded >= 4) uncover();
    });
    img.src = src;
  });
});
</script>

<template>
  <div class="rr-home-bg-img-container" :class="{ 'is-dark': isDark }">
    <div class="rr-home-bg-img">
      <div class="quadrant-northwest"></div>
      <div class="quadrant-northeast"></div>
      <div class="quadrant-southeast"></div>
      <div class="quadrant-southwest"></div>
    </div>
    <div class="rr-home-bg-img-mask"></div>
  </div>
</template>

<style>
.rr-home-bg-img-container {
  --bg-img-height: 1748px;
  --bg-img-width: 1407px;
  --max-content-width: 1152px;
  --max-content-margin: calc(calc(100vw - var(--max-content-width)) * .5);
  position: fixed;
  width: 100%;
  margin-top: var(--vp-nav-height);
}

/* BACKGROUND IMAGE MASK & FADE TRANSITIONS */
.rr-home-bg-img-mask {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: var(--vp-c-bg);
}
.rr-home-bg-img-mask.cover {
  opacity: 1;
  transition: opacity 1s ease;
}
.rr-home-bg-img-mask,
.rr-home-bg-img-mask.uncover {
  opacity: 0;
  transition: opacity 1s ease;
}

/**
 * BREAKPOINT: Mobile screens up to 640px
 */
@media (max-width: 640px) {
  .rr-home-bg-img-container {
    position: absolute;
  }
  .rr-home-bg-img {
    position: absolute;
    height: calc(.375 * var(--bg-img-height));
    width: calc(.375 * var(--bg-img-width));
    right: max(0em, calc(50vw - .1875 * var(--bg-img-width)));
    top: 8px;
  }

  .quadrant-northwest,
  .quadrant-northeast {
    position: absolute;
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position-x: 0;
    background-position-y: 0;
    opacity: 1;
  }
}

/**
 * BREAKPOINT: 640px and higher
 */
@media (min-width: 640px) {
  .rr-home-bg-img {
    position: absolute;
    height: calc(.5 * var(--bg-img-height));
    width: calc(.5 * var(--bg-img-width));
    left: calc(48px + 36em - .25 * var(--bg-img-width));
    top: 32px;
    animation: scroll-bg-img-640 1s linear infinite;
    animation-play-state: paused;
    animation-delay: calc(var(--scroll) * -1s);
    animation-iteration-count: 1;
    animation-fill-mode: both;
  }

  .quadrant-northwest,
  .quadrant-northeast,
  .quadrant-southeast,
  .quadrant-southwest {
    position: absolute;
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position-x: 0;
    background-position-y: 0;
  }
  .quadrant-northwest {
    animation: scroll-quadrant-northwest-640 1s linear infinite;
    animation-play-state: paused;
    animation-delay: calc(var(--scroll) * -1s);
    animation-iteration-count: 1;
    animation-fill-mode: both;
  }
  .quadrant-northeast {
    animation: scroll-quadrant-northeast-640 1s linear infinite;
    animation-play-state: paused;
    animation-delay: calc(var(--scroll) * -1s);
    animation-iteration-count: 1;
    animation-fill-mode: both;
  }
  .quadrant-southeast {
    animation: scroll-quadrant-southeast-640 1s linear infinite;
    animation-play-state: paused;
    animation-delay: calc(var(--scroll) * -1s);
    animation-iteration-count: 1;
    animation-fill-mode: both;
  }
  .quadrant-southwest {
    animation: scroll-quadrant-southwest-640 1s linear infinite;
    animation-play-state: paused;
    animation-delay: calc(var(--scroll) * -1s);
    animation-iteration-count: 1;
    animation-fill-mode: both;
  }
}

@keyframes scroll-bg-img-640 {
  15% {
    transform: translate(0, -5%);
  }
  20% {
    transform: translate(-75%, 5%);
  }
  40% {
    transform: translate(-75%, -25%);
  }
  48% {
    transform: translate(5%, -25%) scale(.7);
  }
  54% {
    opacity: 1;
  }
  57% {
    opacity: 0;
  }
  60% {
    opacity: 0;
    transform: translate(5%, -50%) scale(.7);
  }
  100% {
    transform: translate(5%, -110%) scale(.7);
    opacity: 0;
  }
}

@keyframes scroll-quadrant-northwest-640 {
  0% {
    opacity: 1;
  }
  5% {
    opacity: .5;
  }
  10% {
    opacity: 0;
  }
  18% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  52.5% {
    transform: translate(0, 0);
  }
  53% {
    transform-origin: 25% 25%;
    box-shadow: inset 0 0 0px 0px transparent;
  }
  60% {
    transform: translate(-40%, -20%) rotate(15deg);
    box-shadow: inset 0 0 0px 0px transparent;
  }
  100% {
    opacity: 1;
  }
}
@keyframes scroll-quadrant-northeast-640 {
  0% {
    opacity: 1;
  }
  15% {
    opacity: 1;
  }
  20% {
    opacity: 0;
  }
  42% {
    opacity: 0;
  }
  45% {
    opacity: 1;
  }
  52.5% {
    transform: translate(0, 0);
  }
  53% {
    transform-origin: 75% 25%;
    box-shadow: inset 0 0 0px 0px transparent;
  }
  60% {
    transform: translate(40%, -20%) rotate(-15deg);
    box-shadow: inset 0 0 0px 0px transparent;
  }
  100% {
    opacity: 1;
  }
}
@keyframes scroll-quadrant-southeast-640 {
  0% {
    opacity: 1;
  }
  5% {
    opacity: .5;
  }
  10% {
    opacity: 0;
  }
  30% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  52.5% {
    transform: translate(0, 0);
  }
  53% {
    transform-origin: 75% 75%;
    box-shadow: inset 0 0 0px 0px transparent;
  }
  60% {
    transform: translate(40%, 20%) rotate(15deg);
    box-shadow: inset 0 0 0px 0px transparent;
  }
  100% {
    opacity: 1;
  }
}
@keyframes scroll-quadrant-southwest-640 {
  0% {
    opacity: 0;
  }
  18% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  52.5% {
    transform: translate(0, 0);
  }
  53% {
    transform-origin: 25% 75%;
    box-shadow: inset 0 0 0px 0px transparent;
  }
  60% {
    transform: translate(-40%, 20%) rotate(-15deg);
    box-shadow: inset 0 0 0px 0px transparent;
  }
  90% {
    opacity: 1;
  }
}

/**
 * BREAKPOINT: 960px and higher
 */
@media (min-width: 960px) {
  .rr-home-bg-img {
    height: calc(.65 * var(--bg-img-height));
    width: calc(.65 * var(--bg-img-width));
    left: calc(64px + 39em - .325 * var(--bg-img-width));
    top: 32px;
    animation: scroll-bg-img-960 1s linear infinite;
    animation-play-state: paused;
    animation-delay: calc(var(--scroll) * -1s);
    animation-iteration-count: 1;
    animation-fill-mode: both;
  }
  .quadrant-northwest {
    animation: scroll-quadrant-northwest-960 1s linear infinite;
    animation-play-state: paused;
    animation-delay: calc(var(--scroll) * -1s);
    animation-iteration-count: 1;
    animation-fill-mode: both;
  }
  .quadrant-northeast {
    animation: scroll-quadrant-northeast-960 1s linear infinite;
    animation-play-state: paused;
    animation-delay: calc(var(--scroll) * -1s);
    animation-iteration-count: 1;
    animation-fill-mode: both;
  }
  .quadrant-southeast {
    animation: scroll-quadrant-southeast-960 1s linear infinite;
    animation-play-state: paused;
    animation-delay: calc(var(--scroll) * -1s);
    animation-iteration-count: 1;
    animation-fill-mode: both;
  }
  .quadrant-southwest {
    animation: scroll-quadrant-southwest-960 1s linear infinite;
    animation-play-state: paused;
    animation-delay: calc(var(--scroll) * -1s);
    animation-iteration-count: 1;
    animation-fill-mode: both;
  }
}

@keyframes scroll-bg-img-960 {
  17.5% {
    transform: translate(0, 0);
  }
  22.5% {
    transform: translate(-57%, 25%);
  }
  30% {
    transform: translate(-57%, 25%);
  }
  40% {
    transform: translate(-57%, -5%);
  }
  45% {
    transform: translate(-57%, -15%);
  }
  55% {
    transform: translate(5%, -15%) scale(.75);
  }
  65% {
    opacity: 1;
  }
  70% {
    opacity: 0;
  }
  100% {
    transform: translate(5%, -140%) scale(.75);
    opacity: 0;
  }
}

@keyframes scroll-quadrant-northwest-960 {
  0% {
    opacity: 1;
  }
  5% {
    opacity: .5;
  }
  10% {
    opacity: 0;
  }
  20% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  65% {
    transform: translate(0, 0);
    transform-origin: 25% 25%;
    box-shadow: inset 0 0 0px 0px transparent;
  }
  75% {
    transform: translate(-40%, -20%) rotate(15deg);
    box-shadow: inset 0 0 0px 0px transparent;
  }
  100% {
    opacity: 1;
  }
}
@keyframes scroll-quadrant-northeast-960 {
  0% {
    opacity: 1;
  }
  15% {
    opacity: 1;
  }
  25% {
    opacity: 0;
  }
  45% {
    opacity: 0;
  }
  48% {
    opacity: 1;
  }
  65% {
    transform: translate(0, 0);
    transform-origin: 75% 25%;
    box-shadow: inset 0 0 0px 0px transparent;
  }
  75% {
    transform: translate(40%, -20%) rotate(-15deg);
    box-shadow: inset 0 0 0px 0px transparent;
  }
  100% {
    opacity: 1;
  }
}
@keyframes scroll-quadrant-southeast-960 {
  0% {
    opacity: 1;
  }
  5% {
    opacity: .5;
  }
  10% {
    opacity: 0;
  }
  25% {
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  65% {
    transform: translate(0, 0);
    transform-origin: 75% 75%;
    box-shadow: inset 0 0 0px 0px transparent;
  }
  75% {
    transform: translate(40%, 20%) rotate(15deg);
    box-shadow: inset 0 0 0px 0px transparent;
  }
  100% {
    opacity: 1;
  }
}
@keyframes scroll-quadrant-southwest-960 {
  0% {
    opacity: 0;
  }
  15% {
    opacity: 0;
  }
  20% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  65% {
    transform: translate(0, 0);
    transform-origin: 25% 75%;
    box-shadow: inset 0 0 0px 0px transparent;
  }
  75% {
    transform: translate(-40%, 20%) rotate(-15deg);
    box-shadow: inset 0 0 0px 0px transparent;
  }
  90% {
    opacity: 1;
  }
}

/**
 * BREAKPOINT: 1152px and higher
 */
@media (min-width: 1152px) {
  .rr-home-bg-img {
    height: calc(.75 * var(--bg-img-height));
    width: calc(.75 * var(--bg-img-width));
    left: calc(var(--max-content-margin) + 256px);
    top: 0;
    animation: scroll-bg-img-1152 1s linear infinite;
    animation-play-state: paused;
    animation-delay: calc(var(--scroll) * -1s);
    animation-iteration-count: 1;
    animation-fill-mode: both;
  }
  .quadrant-northwest {
    animation: scroll-quadrant-northwest-1152 1s linear infinite;
    animation-play-state: paused;
    animation-delay: calc(var(--scroll) * -1s);
    animation-iteration-count: 1;
    animation-fill-mode: both;
  }
  .quadrant-northeast {
    animation: scroll-quadrant-northeast-1152 1s linear infinite;
    animation-play-state: paused;
    animation-delay: calc(var(--scroll) * -1s);
    animation-iteration-count: 1;
    animation-fill-mode: both;
  }
  .quadrant-southeast {
    animation: scroll-quadrant-southeast-1152 1s linear infinite;
    animation-play-state: paused;
    animation-delay: calc(var(--scroll) * -1s);
    animation-iteration-count: 1;
    animation-fill-mode: both;
  }
  .quadrant-southwest {
    animation: scroll-quadrant-southwest-1152 1s linear infinite;
    animation-play-state: paused;
    animation-delay: calc(var(--scroll) * -1s);
    animation-iteration-count: 1;
    animation-fill-mode: both;
  }
}

@keyframes scroll-bg-img-1152 {
  15% {
    transform: translate(0, -10%);
  }
  30% {
    transform: translate(-50%, -5%);
  }
  40% {
    transform: translate(-50%, -30%);
  }
  50% {
    transform: translate(20%, -10%) scale(.65);
  }
  60% {
    transform: translate(20%, -30%) scale(.65);
    opacity: 1;
  }
  68% {
    opacity: 0;
  }
  100% {
    transform: translate(20%, -110%) scale(.65);
    opacity: 0;
  }
}

@keyframes scroll-quadrant-northwest-1152 {
  0% {
    opacity: 1;
  }
  5% {
    opacity: 0;
  }
  20% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  60% {
    opacity: 1;
  }
  62.5% {
    transform: translate(0, 0);
  }
  63% {
    transform-origin: 25% 25%;
    box-shadow: inset 0 0 0px 0px transparent;
  }
  70% {
    transform: translate(-40%, -20%) rotate(15deg);
    box-shadow: inset 0 0 0px 0px transparent;
  }
  90% {
    opacity: .5;
  }
  100% {
    opacity: 0;
  }
}
@keyframes scroll-quadrant-northeast-1152 {
  0% {
    opacity: 1;
  }
  15% {
    opacity: 1;
  }
  20% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  62.5% {
    transform: translate(0, 0);
  }
  63% {
    transform-origin: 75% 25%;
  }
  70% {
    transform: translate(40%, -20%) rotate(-15deg);
  }
  100% {
    opacity: 1;
  }
}
@keyframes scroll-quadrant-southeast-1152 {
  0% {
    opacity: 1;
  }
  10% {
    opacity: 0;
  }
  25% {
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  62.5% {
    transform: translate(0, 0);
    box-shadow: var(--bg-img-box-shadow);
  }
  63% {
    transform-origin: 75% 75%;
    box-shadow: inset 0 0 0px 0px transparent;
  }
  70% {
    transform: translate(40%, 20%) rotate(15deg);
    box-shadow: inset 0 0 0px 0px transparent;
  }
  100% {
    opacity: 1;
  }
}
@keyframes scroll-quadrant-southwest-1152 {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  62.5% {
    transform: translate(0, 0);
    box-shadow: var(--bg-img-box-shadow);
  }
  63% {
    transform-origin: 25% 75%;
    box-shadow: inset 0 0 0px 0px transparent;
  }
  70% {
    transform: translate(-40%, 20%) rotate(-15deg);
    box-shadow: inset 0 0 0px 0px transparent;
  }
  90% {
    opacity: 1;
  }
}
</style>
