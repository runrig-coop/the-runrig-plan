<template>
  <div class="rr-home-bg-img-container">
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
  position: fixed;
  width: 100%;
  margin-top: var(--vp-nav-height);
}

/**
 * BREAKPOINT: 640px and higher
 */
@media (min-width: 640px) {
  .rr-home-bg-img {
    position: absolute;
    height: calc(.75 * var(--bg-img-height));
    width: calc(.75 * var(--bg-img-width));
    left: calc(var(--max-content-margin) + 256px);
    top: 128px;
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
    box-shadow: inset 0 0 8px 8px white;
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
    transform: translate(0, -25%);
  }
  30% {
    transform: translate(-50%, -20%);
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

@keyframes scroll-quadrant-northwest-640 {
  0% {
    opacity: 0;
  }
  15% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  60% {
    opacity: 1;
  }
  62.5% {
    opacity: 1;
    transform-origin: center;
    transform: translate(0, 0);
    box-shadow: inset 0 0 8px 8px white;
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
@keyframes scroll-quadrant-northeast-640 {
  0% {
    opacity: 1;
  }
  10% {
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
    box-shadow: inset 0 0 8px 8px white;
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
@keyframes scroll-quadrant-southeast-640 {
  0% {
    opacity: 1;
  }
  10% {
    opacity: .5;
  }
  20% {
    opacity: 0;
  }
  30% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  62.5% {
    opacity: 1;
    transform-origin: center;
    transform: translate(0, 0);
    box-shadow: inset 0 0 8px 8px white;
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
@keyframes scroll-quadrant-southwest-640 {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  62.5% {
    opacity: 1;
    transform-origin: center;
    transform: translate(0, 0);
    box-shadow: inset 0 0 8px 8px white;
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
