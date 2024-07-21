<script setup>
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
const date = fmtDate(props.fm.date);
</script>

<template>
  <header class="vp-doc">
    <h1>
      <span>
        {{ fm.title }}
      </span>
      <span class="rr-subtitle" v-if="fm.subtitle">
        {{ fm.subtitle }}
      </span>
    </h1>
    <ul v-if="fm.author || date">
      <li v-if="fm.author">{{ fm.author }}</li>
      <li v-if="date">{{ date }}</li>
    </ul>
    <slot></slot>
  </header>
</template>

<style scoped>
header {
  border-bottom: 1px solid var(--vp-c-divider);
  margin-top: 6rem;
  margin-bottom: 1.5rem
}
.vp-doc h1 {
  font-size: 3rem;
  line-height: 3rem;
  color: var(--vp-c-text-1);
  margin-bottom: 1.5rem;
}
.rr-subtitle {
  margin-top: .75rem;
  display: inline-block;
  color: var(--vp-c-text-2);
  letter-spacing: -0.02em;
  line-height: 28px;
  font-size: 24px;
  max-width: 80%;
}
ul, li {
  all: unset;
}
.vp-doc ul {
  display: inline-block;
  margin-top: 0;
  margin-bottom: .75rem;
  list-style: none;
  padding-left: 0;
}
li:nth-child(1) {
  color: var(--vp-c-text-1);
  margin-right: .75rem;
}
li:nth-child(2) {
  color: var(--vp-c-text-1);
  color: var(--vp-c-text-2);
}
</style>