<script setup lang="ts">
/**
 * Based on and overrides Vitepress v.1.6.3 VPFooter.vue (via ../config.js):
 * https://github.com/vuejs/vitepress/blob/v1.6.3/src/client/theme-default/components/VPFooter.vue
 */
import { useData } from 'vitepress';
import { useSidebar } from 'vitepress/theme';
import RRIconBluesky from './RRIconBluesky.vue';
import RRIconRssFeed from './RRIconRssFeed.vue';
import RRIconGitHub from './RRIconGitHub.vue';
import RRIconMastodon from './RRIconMastodon.vue';

const { theme, frontmatter } = useData();
const { hasSidebar } = useSidebar();
</script>

<template>
  <footer v-if="theme.footer && frontmatter.footer !== false" class="rr-footer" :class="{ 'has-sidebar': hasSidebar }">
    <div class="container follow">
      <a href="https://social.coop/@runrig" target="_blank">
        <RRIconMastodon />
      </a>
      <a href="https://bsky.app/profile/runrig.bsky.social" target="_blank">
        <RRIconBluesky />
      </a>
      <a href="https://github.com/runrig-coop" target="_blank">
        <RRIconGitHub />
      </a>
      <a href="/feed/rss.xml" target="_blank">
        <RRIconRssFeed />
      </a>
    </div>
    <div class="container">
      <p v-if="theme.footer.message" class="message" v-html="theme.footer.message"></p>
      <p v-if="theme.footer.copyright" class="copyright" v-html="theme.footer.copyright"></p>
    </div>
  </footer>
</template>

<style scoped>
.rr-footer {
  position: relative;
  z-index: var(--vp-z-index-footer);
  border-top: 1px solid var(--rr-c-gutter);
  padding: 32px 24px;
  background-color: var(--rr-c-bg);
}
.rr-footer.has-sidebar {
  display: none;
}
.rr-footer :deep(a) {
  text-decoration-line: underline;
  text-underline-offset: 2px;
  transition: color 0.25s;
}
.rr-footer :deep(a:hover) {
  color: var(--rr-c-text-1);
}
@media (min-width: 768px) {
  .rr-footer {
    padding: 32px;
  }
}

.container {
  margin: 0 auto;
  max-width: var(--rr-layout-max-width);
  text-align: center;
}

.follow {
  display: flex;
  justify-content: center;
  gap: .75rem;
  margin-bottom: .75rem;
}
.follow a {
  height: 1.5rem;
}
.follow svg {
  height: 100%;
}
.follow :deep(path),
.follow :deep(circle) {
  fill: var(--rr-c-text-2);
}
.follow a:hover :deep(path),
.follow a:hover :deep(circle) {
  fill: var(--rr-c-text-1);
}

.message,
.copyright {
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--rr-c-text-2);
}
</style>