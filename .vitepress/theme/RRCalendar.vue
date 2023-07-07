<script setup>
import { data } from './calendar.data.js';

const fmtTime = (utc) => new Date(utc).toLocaleTimeString(undefined, {
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
  <div class="event-container">
    <div v-for="(evt, i) in events" :key="`event-${i}`" class="event">
      <h3>{{ evt.title }}</h3>
      <ul>
        <li v-if="evt.upcoming">
          Next session: {{ evt.upcoming[0] }}, {{ evt.start || null }}
        </li>
        <li v-if="evt.repeats">
          Repeats: {{ evt.repeats }}
        </li>
        <li v-if="evt.location">
          Join:&nbsp;<a :href="evt.location" target="_blank">{{ evt.location }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.event-container {
  display: flex;
  justify-content: space-between;
  flex-flow: column;
  padding: 16px;
  border-radius: 8px;
}

.event {
  flex: auto;
  background-color: var(--vp-c-green-dimm-2);
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 16px;
}

.event:last-child {
  margin-bottom: 0;
}

.event h3 {
  margin-top: 0;
}

.event ul {
  list-style: none;
  padding-left: 0;
}
</style>