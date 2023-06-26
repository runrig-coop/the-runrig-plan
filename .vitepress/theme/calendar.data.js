import fs from 'node:fs';
import ICAL from 'ical.js';

function fmtDate(time) {
  return time.toJSDate().toISOString();
}

export default {
  watch: ['../../public/cal/*.ics'],
  load(filePaths) {
    const rawICS = filePaths.map(f => fs.readFileSync(f, 'utf-8'));
    return rawICS.map((ics) => {
      const jCalData = ICAL.parse(ics);
      const comp = new ICAL.Component(jCalData);
      const vevent = comp.getFirstSubcomponent('vevent');
      const event = new ICAL.Event(vevent);

      const {
        summary, description, location,
        startDate, endDate,
        organizer, uid, attendees,
      } = event;

      const recur = event.iterator();
      const rules = new ICAL.Recur(recur.toJSON()).ruleIterators;

      // 100 events may be overkill, but this list is generated only during
      // the build process and won't be updated until a new production build
      // is triggered. The calendar component will further filter stale dates
      // at render, and will make the final decision on how many to display.
      const next100 = [];
      const now = Date.now();
      let i = 0;
      while (i < 100) {
        const next = recur.next();
        if (next.toJSDate().valueOf() > now) {
          next100.push(fmtDate(next));
          i += 1;
        }
      }

      return {
        event: {
          summary, description, location,
          startDate: fmtDate(startDate), endDate: fmtDate(endDate),
          organizer, uid, attendees,
        },
        rules,
        next100,
        jcal: jCalData,
      };
    });
  },
};
