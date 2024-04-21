<script setup>
import { data } from './calendar.data.js';

const fmtTime = (utc) => new Date(utc).toLocaleTimeString(undefined, {
  hour: 'numeric',
  minute: 'numeric',
  timeZoneName: 'short',
});

const fmtRepeatingRule = (phrase, rule = {}, i = 0, rules = [rule]) => {
  const { rule: { byday = '', freq = 'WEEKLY', interval = 1 } } = rule;
  if (interval < 1) return phrase;

  const every = i === 0 ? 'Every': 'every';
  let frequency = freq === 'DAILY' ? 'day': freq.replace(/LY$/g, '').toLowerCase();
  if (interval > 1) freqUnit = `${interval} ${frequency}s`;
  frequency = `${every} ${frequency}`;

  const dayMap = {
    'SU': 'Sunday',
    'MO': 'Monday',
    'TU': 'Tuesday',
    'WE': 'Wednesday',
    'TH': 'Thursday',
    'FR': 'Friday',
    'SA': 'Saturday',
  };
  const ordinalMap = {
    '1': '1st',
    '2': '2nd',
    '3': '3rd',
    '4': '4th',
    '5': '5th',
  };

  const dayRE = /^([1-5]?)([A-Z]{2})/g
  const [, ordinal = '', abbrDay = ''] = [...byday.matchAll(dayRE)].flat();
  const day = `${ordinal ? 'the ' + ordinalMap[ordinal] + ' ' : ''}${dayMap[abbrDay]}`;

  const punc = rules.length === i + 1 ? '.' : ';'
  return `${phrase} ${frequency} on ${day}${punc}`;
};

const now = new Date();
const eventComparator = ({ upcoming: [a] }, { upcoming: [b] }) =>
  new Date(a).valueOf() - new Date(b).valueOf();
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
  const repeats = Array.isArray(rules)
    ? rules.flat().reduce(fmtRepeatingRule, '')
    : fmtRepeatingRule(rules);
  return [
    ...evts,
    { title, description, location, start, end, upcoming, rules, repeats },
  ];
}, []).toSorted(eventComparator);
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
  background-color: var(--vp-c-green-soft);
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