<script setup>
import { inject } from 'vue'
import VPButton from 'vitepress/dist/client/theme-default/components/VPButton.vue';
import VPImage from 'vitepress/dist/client/theme-default/components/VPImage.vue';

const props = defineProps({
  name: String,
  text: String,
  tagline: String,
  actions: Array,
  image: String||Object,
});

</script>

<template>
  <section class="home-section">
    <div class="container">
        <div class="main">
          <slot name="section-info">
            <h1 v-if="name" class="name">
              <span class="clip">{{ name }}</span>
            </h1>
            <p v-if="text" class="text">{{ text }}</p>
            <p v-if="tagline" class="tagline">{{ tagline }}</p>
          </slot>

          <div v-if="actions" class="actions">
            <div v-for="action in actions" :key="action.link" class="action">
              <VPButton
                tag="a"
                size="medium"
                :theme="action.theme"
                :text="action.text"
                :href="action.link"
              />
            </div>
          </div>

        </div>

        <div v-if="image" class="image">
          <div class="image-container">
            <div class="image-bg" />
            <slot name="home-hero-image">
              <VPImage v-if="image" class="image-src" :image="image" />
            </slot>
          </div>
        </div>
    </div>
  </section>

</template>

<style>
.home-section {
  margin-top: calc((var(--vp-nav-height) + var(--vp-layout-top-height, 0px)) * -1);
  padding: calc(var(--vp-nav-height) + var(--vp-layout-top-height, 0px) + 48px) 24px 48px;
}
@media (min-width: 640px) {
  .home-section {
    padding: calc(var(--vp-nav-height) + var(--vp-layout-top-height, 0px) + 80px) 48px 64px;
  }
}
@media (min-width: 960px) {
  .home-section {
    padding: calc(var(--vp-nav-height) + var(--vp-layout-top-height, 0px) + 80px) 64px 64px;
  }
}
.home-section .container {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1152px;
}
@media (min-width: 960px) {
  .home-section .container {
    flex-direction: row;
  }
}
.home-section .main {
  position: relative;
  z-index: 10;
  order: 2;
  flex-grow: 1;
  flex-shrink: 0;
}
.home-section.has-image .container {
  text-align: center;
}
@media (min-width: 960px) {
  .home-section.has-image .container {
    text-align: left;
  }
}
@media (min-width: 960px) {
  .home-section .main {
    order: 1;
    width: calc((100% / 3) * 2);
  }
  .home-section.has-image .main {
    max-width: 592px;
  }
}
.home-section .name {
  max-width: 392px;
  letter-spacing: -0.4px;
  line-height: 40px;
  font-size: 32px;
  font-weight: 700;
  white-space: pre-wrap;
}
.home-section.has-image .name {
  margin: 0 auto;
}
.home-section .name {
  color: var(--vp-home-hero-name-color);
}
.home-section .clip {
  background: var(--vp-home-hero-name-background);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: var(--vp-home-hero-name-color);
}
@media (min-width: 640px) {
  .home-section .name {
    max-width: 576px;
    line-height: 56px;
    font-size: 48px;
  }
}
@media (min-width: 960px) {
  .home-section .name{
    line-height: 64px;
    font-size: 56px;
  }
  .home-section.has-image .name {
    margin: 0;
  }
}
.home-section .tagline {
  padding-top: 8px;
  max-width: 392px;
  line-height: 28px;
  font-size: 18px;
  font-weight: 500;
  white-space: pre-wrap;
  color: var(--vp-c-text-2);
}
.home-section.has-image .tagline {
  margin: 0 auto;
}
@media (min-width: 640px) {
  .home-section .tagline {
    padding-top: 12px;
    max-width: 576px;
    line-height: 32px;
    font-size: 20px;
  }
}
@media (min-width: 960px) {
  .home-section .tagline {
    line-height: 36px;
    font-size: 24px;
  }
  .home-section.has-image .tagline {
    margin: 0;
  }
}
.home-section .actions {
  display: flex;
  flex-wrap: wrap;
  margin: -6px;
  padding-top: 24px;
}
.home-section.has-image .actions {
  justify-content: center;
}
@media (min-width: 640px) {
  .home-section .actions {
    padding-top: 32px;
  }
}
@media (min-width: 960px) {
  .home-section.has-image .actions {
    justify-content: flex-start;
  }
}
.home-section .action {
  flex-shrink: 0;
  padding: 6px;
}
.home-section .image {
  order: 1;
  margin: -76px -24px -48px;
}
@media (min-width: 640px) {
  .home-section .image {
    margin: -108px -24px -48px;
  }
}
@media (min-width: 960px) {
  .home-section .image {
    flex-grow: 1;
    order: 2;
    margin: 0;
    min-height: 100%;
  }
}
.home-section .image-container {
  position: relative;
  margin: 0 auto;
  width: 320px;
  height: 320px;
}
@media (min-width: 640px) {
  .home-section .image-container {
    width: 392px;
    height: 392px;
  }
}
@media (min-width: 960px) {
  .home-section .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    /*rtl:ignore*/
    transform: translate(-32px, -32px);
  }
}
.home-section .image-bg {
  position: absolute;
  top: 50%;
  /*rtl:ignore*/
  left: 50%;
  border-radius: 50%;
  width: 192px;
  height: 192px;
  background-image: var(--vp-home-hero-image-background-image);
  filter: var(--vp-home-hero-image-filter);
  /*rtl:ignore*/
  transform: translate(-50%, -50%);
}
@media (min-width: 640px) {
  .home-section .image-bg {
    width: 256px;
    height: 256px;
  }
}
@media (min-width: 960px) {
  .home-section .image-bg {
    width: 320px;
    height: 320px;
  }
}
:deep(.image-src) {
  position: absolute;
  top: 50%;
  /*rtl:ignore*/
  left: 50%;
  max-width: 192px;
  max-height: 192px;
  /*rtl:ignore*/
  transform: translate(-50%, -50%);
}
@media (min-width: 640px) {
  :deep(.image-src) {
    max-width: 256px;
    max-height: 256px;
  }
}
@media (min-width: 960px) {
  :deep(.image-src) {
    max-width: 320px;
    max-height: 320px;
  }
}
</style>