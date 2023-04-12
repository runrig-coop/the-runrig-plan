<script setup>
const props = defineProps({
  isDark: Boolean,
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
  </div>
</template>

<style>
.rr-home-bg-img-container {
  --bg-img-height: 1748px;
  --bg-img-width: 1407px;
  --max-content-width: 1152px;
  --max-content-margin: calc(calc(100vw - var(--max-content-width)) * .5);
  --bg-img-box-shadow: var(--vp-c-bg);
  position: fixed;
  width: 100%;
  margin-top: var(--vp-nav-height);
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
    left: -160px;
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
    box-shadow: var(--bg-img-box-shadow);
    opacity: 1;
  }
  .quadrant-northwest {
    background-image: url('/open_field_system_quadrant_northwest.png');
  }
  .quadrant-northeast {
    background-image: url('/open_field_system_quadrant_northeast.png');
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
    box-shadow: var(--bg-img-box-shadow);
  }
  .quadrant-northwest {
    background-image: url('/open_field_system_quadrant_northwest.png');
    animation: scroll-quadrant-northwest-640 1s linear infinite;
    animation-play-state: paused;
    animation-delay: calc(var(--scroll) * -1s);
    animation-iteration-count: 1;
    animation-fill-mode: both;
  }
  .quadrant-northeast {
    background-image: url('/open_field_system_quadrant_northeast.png');
    animation: scroll-quadrant-northeast-640 1s linear infinite;
    animation-play-state: paused;
    animation-delay: calc(var(--scroll) * -1s);
    animation-iteration-count: 1;
    animation-fill-mode: both;
  }
  .quadrant-southeast {
    background-image: url('/open_field_system_quadrant_southeast.png');
    animation: scroll-quadrant-southeast-640 1s linear infinite;
    animation-play-state: paused;
    animation-delay: calc(var(--scroll) * -1s);
    animation-iteration-count: 1;
    animation-fill-mode: both;
  }
  .quadrant-southwest {
    background-image: url('/open_field_system_quadrant_southwest.png');
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
    opacity: 1;
  }
  58% {
    opacity: 0;
  }
  60% {
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
  30% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  52.5% {
    opacity: 1;
    transform-origin: center;
    transform: translate(0, 0);
    box-shadow: var(--bg-img-box-shadow);
  }
  53% {
    transform-origin: 25% 25%;
    box-shadow: none;
  }
  60% {
    transform: translate(-80%, -40%) rotate(45deg);
  }
  90% {
    opacity: .5;
  }
  100% {
    opacity: 0;
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
  40% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  52.5% {
    opacity: 1;
    transform-origin: center;
    transform: translate(0, 0);
    box-shadow: var(--bg-img-box-shadow);
  }
  53% {
    transform-origin: 75% 25%;
    box-shadow: none;
  }
  60% {
    transform: translate(80%, -40%) rotate(-45deg);
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
    opacity: 1;
    transform-origin: center;
    transform: translate(0, 0);
    box-shadow: var(--bg-img-box-shadow);
  }
  53% {
    transform-origin: 75% 75%;
    box-shadow: none;
  }
  60% {
    transform: translate(80%, 40%) rotate(45deg);
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
    opacity: 1;
    transform-origin: center;
    transform: translate(0, 0);
    box-shadow: var(--bg-img-box-shadow);
  }
  53% {
    transform-origin: 25% 75%;
    box-shadow: none;
  }
  60% {
    transform: translate(-80%, 40%) rotate(-45deg);
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
    background-image: url('/open_field_system_quadrant_northwest.png');
    animation: scroll-quadrant-northwest-960 1s linear infinite;
    animation-play-state: paused;
    animation-delay: calc(var(--scroll) * -1s);
    animation-iteration-count: 1;
    animation-fill-mode: both;
  }
  .quadrant-northeast {
    background-image: url('/open_field_system_quadrant_northeast.png');
    animation: scroll-quadrant-northeast-960 1s linear infinite;
    animation-play-state: paused;
    animation-delay: calc(var(--scroll) * -1s);
    animation-iteration-count: 1;
    animation-fill-mode: both;
  }
  .quadrant-southeast {
    background-image: url('/open_field_system_quadrant_southeast.png');
    animation: scroll-quadrant-southeast-960 1s linear infinite;
    animation-play-state: paused;
    animation-delay: calc(var(--scroll) * -1s);
    animation-iteration-count: 1;
    animation-fill-mode: both;
  }
  .quadrant-southwest {
    background-image: url('/open_field_system_quadrant_southwest.png');
    animation: scroll-quadrant-southwest-960 1s linear infinite;
    animation-play-state: paused;
    animation-delay: calc(var(--scroll) * -1s);
    animation-iteration-count: 1;
    animation-fill-mode: both;
  }
}

@keyframes scroll-bg-img-960 {
  15% {
    transform: translate(0, -25%);
  }
  30% {
    transform: translate(-57%, -5%);
  }
  40% {
    transform: translate(-57%, -35%);
  }
  45% {
    transform: translate(5%, -20%) scale(.6);
  }
  48% {
    opacity: 1;
  }
  55% {
    opacity: 0;
  }
  60% {
    transform: translate(5%, -50%) scale(.6);
  }
  100% {
    transform: translate(5%, -110%) scale(.6);
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
  30% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  52.5% {
    opacity: 1;
    transform-origin: center;
    transform: translate(0, 0);
    box-shadow: var(--bg-img-box-shadow);
  }
  53% {
    transform-origin: 25% 25%;
    box-shadow: none;
  }
  60% {
    transform: translate(-80%, -40%) rotate(45deg);
  }
  90% {
    opacity: .5;
  }
  100% {
    opacity: 0;
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
  40% {
    opacity: 0;
  }
  45% {
    opacity: 1;
  }
  52.5% {
    transform-origin: center;
    transform: translate(0, 0);
    box-shadow: var(--bg-img-box-shadow);
  }
  53% {
    transform-origin: 75% 25%;
    box-shadow: none;
  }
  60% {
    transform: translate(80%, -40%) rotate(-45deg);
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
  52.5% {
    opacity: 1;
    transform-origin: center;
    transform: translate(0, 0);
    box-shadow: var(--bg-img-box-shadow);
  }
  53% {
    transform-origin: 75% 75%;
    box-shadow: none;
  }
  60% {
    transform: translate(80%, 40%) rotate(45deg);
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
  52.5% {
    opacity: 1;
    transform-origin: center;
    transform: translate(0, 0);
    box-shadow: var(--bg-img-box-shadow);
  }
  53% {
    transform-origin: 25% 75%;
    box-shadow: none;
  }
  60% {
    transform: translate(-80%, 40%) rotate(-45deg);
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
    background-image: url('/open_field_system_quadrant_northwest.png');
    animation: scroll-quadrant-northwest-1152 1s linear infinite;
    animation-play-state: paused;
    animation-delay: calc(var(--scroll) * -1s);
    animation-iteration-count: 1;
    animation-fill-mode: both;
  }
  .quadrant-northeast {
    background-image: url('/open_field_system_quadrant_northeast.png');
    animation: scroll-quadrant-northeast-1152 1s linear infinite;
    animation-play-state: paused;
    animation-delay: calc(var(--scroll) * -1s);
    animation-iteration-count: 1;
    animation-fill-mode: both;
  }
  .quadrant-southeast {
    background-image: url('/open_field_system_quadrant_southeast.png');
    animation: scroll-quadrant-southeast-1152 1s linear infinite;
    animation-play-state: paused;
    animation-delay: calc(var(--scroll) * -1s);
    animation-iteration-count: 1;
    animation-fill-mode: both;
  }
  .quadrant-southwest {
    background-image: url('/open_field_system_quadrant_southwest.png');
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
    transform: translate(-50%, -10%);
  }
  40% {
    transform: translate(-50%, -40%);
  }
  50% {
    transform: translate(20%, -10%) scale(.5);
  }
  60% {
    transform: translate(20%, -25%) scale(.5);
    opacity: 1;
  }
  68% {
    opacity: 0;
  }
  100% {
    transform: translate(20%, -110%) scale(.5);
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
    opacity: 1;
    transform-origin: center;
    transform: translate(0, 0);
    box-shadow: var(--bg-img-box-shadow);
  }
  63% {
    transform-origin: 25% 25%;
    box-shadow: none;
  }
  70% {
    transform: translate(-80%, -40%) rotate(45deg);
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
    opacity: 1;
    transform-origin: center;
    transform: translate(0, 0);
    box-shadow: var(--bg-img-box-shadow);
  }
  63% {
    transform-origin: 75% 25%;
    box-shadow: none;
  }
  70% {
    transform: translate(80%, -40%) rotate(-45deg);
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
    opacity: 1;
    transform-origin: center;
    transform: translate(0, 0);
    box-shadow: var(--bg-img-box-shadow);
  }
  63% {
    transform-origin: 75% 75%;
    box-shadow: none;
  }
  70% {
    transform: translate(80%, 40%) rotate(45deg);
  }
  100% {
    opacity: 1;
  }
}
@keyframes scroll-quadrant-southwest-1152 {
  0% {
    opacity: 0;
  }
  15% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  62.5% {
    opacity: 1;
    transform-origin: center;
    transform: translate(0, 0);
    box-shadow: var(--bg-img-box-shadow);
  }
  63% {
    transform-origin: 25% 75%;
    box-shadow: none;
  }
  70% {
    transform: translate(-80%, 40%) rotate(-45deg);
  }
  90% {
    opacity: 1;
  }
}
</style>
