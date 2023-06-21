import DefaultTheme from 'vitepress/theme'
import RRCalendar from './RRCalendar.vue'
import RRLayout from './RRLayout.vue'
import RRNewsletterForm from './RRNewsletterForm.vue'

export default {
  ...DefaultTheme,
  // override the Layout with a wrapper component that injects the slots
  Layout: RRLayout,
  enhanceApp(ctx) {
    // register custom global components
    ctx.app.component('RRNewsletterForm', RRNewsletterForm);
    ctx.app.component('RRCalendar', RRCalendar);
  }
}
