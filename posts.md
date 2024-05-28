<script setup>
import { data as posts } from './.vitepress/theme/posts.data.js';
import RRPostHeader from './.vitepress/theme/RRPostHeader.vue';
</script>

<div v-for="post of posts" class="post-list">
  <a :href="post.url">
    <RRPostHeader :fm="post.frontmatter" >
      <span v-if="post.frontmatter?.description" class="description">
        {{ post.frontmatter.description }}
      </span>
    </RRPostHeader>
  </a>
</div>

<style scoped>
.post-list a {
  color: var(--vp-c-text-2);
  text-decoration: none;
  text-decoration-color: transparent;
  text-decoration-style: unset;
  text-underline-offset: 0;
}
.description {
  display: inline-block;
  margin-bottom: .75rem;
}
</style>
