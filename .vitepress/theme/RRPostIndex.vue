<script setup>
import { computed } from 'vue';

const props = defineProps({ data: Array });

function fmtDate(d) {
  try {
    const utc = new Date(d);
    const offset = utc.getTimezoneOffset() * 60 * 1000;
    const nineHours = 9 * 60 * 1000;
    const localBizStartTime = new Date(utc.valueOf() + offset + nineHours);
    const opts = { dateStyle: 'medium' };
    return localBizStartTime.toLocaleDateString(undefined, opts);
  } catch (e) {
    console.warn(`Invalid date, ${d}, for post, "${fm.title}". Reason: `, e);
    return false;
  }
}
const posts = computed(() => props.data.map((post) => {
  const { frontmatter = {}, url } = post;
  const { author, description, subtitle, title } = frontmatter;
  const date = fmtDate(frontmatter.date);
  return { author, date, description, subtitle, title, url };
}));
</script>

<template>
  <main>
    <a v-for="(post, i) of posts" :key="`post-${i}`" :href="post.url">
      <header>
        <h1>{{ post.title }}</h1>
        <h2 v-if="post.subtitle">{{ post.subtitle }}</h2>
      </header>
      <ul v-if="post.author || post.date">
        <li v-if="post.author">{{ post.author }}</li>
        <li v-if="post.date">{{ post.date }}</li>
      </ul>
      <p v-if="post.description">
        {{ post.description }}
      </p>
    </a>
  </main>
</template>

<style scoped>
main {
  padding-top: 6rem;
}
a {
  display: inline-block;
  min-width: 100%;
  color: var(--rr-c-text-2);
  text-decoration: none;
  text-decoration-color: transparent;
  text-decoration-style: unset;
  text-underline-offset: 0;
  border-bottom: 1px solid var(--rr-c-divider);
  margin-bottom: 3rem;
}
a:hover {
  box-shadow: 0 .75px .25px var(--rr-c-divider);
  transition: box-shadow 200ms;
}
a:hover p {
  color: var(--rr-c-text-1);
  transition: color 200ms;
}
header {
  margin-bottom: .75rem
}
h1 {
  font-size: 3rem;
  line-height: 3rem;
  color: var(--rr-c-text-1);
}
h2 {
  border: none;
  margin: .5rem 0 0 0;
  padding: 0;
  color: var(--rr-c-text-2);
  letter-spacing: -0.02em;
  line-height: 28px;
  font-size: 24px;
  max-width: 80%;
}
ul, li {
  all: unset;
}
ul {
  margin: 0 0 .75rem 0;
  list-style: none;
  padding-left: 0;
}
li:nth-child(1) {
  color: var(--rr-c-text-1);
  margin-right: .75rem;
}
li:nth-child(2) {
  color: var(--rr-c-text-1);
  color: var(--rr-c-text-2);
}
p {
  margin: 1.5rem 0;
  color: var(--rr-c-text-2);
  transition: color 200ms;
}
</style>