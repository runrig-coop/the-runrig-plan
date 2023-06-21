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

      const recur = event.iterator(ICAL.Time.now());
      const rules = new ICAL.Recur(recur.toJSON()).ruleIterators;

      const next100 = [];
      let i = 0;
      while (i < 100) {
        const next = recur.next();
        next100.push(fmtDate(next));
        i += 1;
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
