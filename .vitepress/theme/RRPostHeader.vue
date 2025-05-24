<script setup>
import { computed } from 'vue';

const props = defineProps({
  fm: Object,
  page: Object || undefined,
});

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
const date = computed(() => fmtDate(props.fm.date));
</script>

<template>
  <header class="vp-doc">
    <h1>
      {{ fm.title }}
    </h1>
    <p  v-if="fm.subtitle">
      {{ fm.subtitle }}
    </p>
    <ul v-if="fm.author || fm.date">
      <li v-if="fm.author">{{ fm.author }}</li>
      <li v-if="fm.date">{{ date }}</li>
    </ul>
    <slot></slot>
  </header>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--rr-c-divider);
  margin-top: 6rem;
  margin-bottom: 1.5rem
}
header h1 {
  font-size: 3rem;
  font-weight: 600;
  line-height: 3rem;
  color: var(--rr-c-text-1);
}
header p {
  margin-top: .75rem;
  margin-bottom: 0;
  display: inline-block;
  color: var(--rr-c-text-2);
  letter-spacing: -0.02em;
  line-height: 28px;
  font-size: 24px;
  font-weight: 600;
  max-width: 80%;
}
ul, li {
  all: unset;
}
header ul {
  display: inline-block;
  margin-top: 1.5rem;
  margin-bottom: .75rem;
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
</style>