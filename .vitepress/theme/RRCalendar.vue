<script setup>
import { data } from './calendar.data.js';

const fmtTime = (iso) => new Date(iso).toLocaleTimeString(undefined, {
  hour: 'numeric',
  minute: 'numeric',
  timeZoneName: 'short',
});

// This is a SUPER naive implementation here, but just enough for our current requirements.
const fmtRepeats = (rules = [{}]) => {
  const { rule: { byday = 'SA', freq = 'WEEKLY', interval = 2 } = {} } = rules[0];
  if (interval < 1) return '';

  let f = freq === 'DAILY' ? 'day': freq.replace(/LY$/g, '').toLowerCase();
  if (interval > 1) f = `${interval} ${f}s`;

  const dayMap = {
    'SU': 'Sunday',
    'MO': 'Monday',
    'TU': 'Tuesday',
    'WE': 'Wednesday',
    'TH': 'Thursday',
    'FR': 'Friday',
    'SA': 'Saturday',
  }
  const d = dayMap[byday];

  return `Every ${f} on ${d}`;
};

const now = new Date();
const events = data.reduce((evts, { event, next100 = [], rules }) => {
  const dateOpts = { month: 'short', day: 'numeric', year: 'numeric' };
  const upcoming = next100
    .map(d => new Date(d))
    .filter(d => d.valueOf() > now.valueOf())
    .map(d => d.toLocaleDateString(undefined, dateOpts));
  if (upcoming.length < 1) return evts;
  const {
    summary: title, description, location, startDate, endDate,
  } = event;
  const start = fmtTime(startDate);
  const end = fmtTime(endDate);
  const repeats = fmtRepeats(rules);
  return [
    ...evts,
    { title, description, location, start, end, upcoming, rules, repeats },
  ];
}, []);
</script>

<template>
  <div v-for="(evt, i) in events" :key="`event-${i}`">
    <h2>{{ evt.title }}</h2>
    <h4 v-if="evt.upcoming.length > 0">Next session: {{ evt.upcoming[0] }}</h4>
    <h4 v-if="evt.repeats !== ''">Repeats: {{ evt.repeats }}</h4>
    <h4 v-if="evt.start !== ''">Starts: {{ evt.start }}</h4>
    <h4 v-if="evt.end !== ''">Ends: {{ evt.end }}</h4>
    <p><span v-html="evt.description"></span></p>
  </div>
</template>

<style lang="scss" scoped>

</style>