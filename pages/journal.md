<script setup>
import { data } from './../.vitepress/theme/journal.data.js';
import RRPostIndex from './../.vitepress/theme/RRPostIndex.vue';
</script>

# The Runrig Journal
The Runrig Journal is an ongoing series that explores the design principles and
methodologies behind the [Runrig Plan]. It is intended to form a general
critique of conventional software development methodologies and how they often
come freighted with the implicit assumptions of proprietary technology and
capitalistic modes of growth – e.g., concepts like scalability,
Software-as-a-Service (SaaS), and even object-oriented programming. In that
regard, the series will also look at ways free & open source software ([FOSS])
can go beyond the narrow scope of mere individual liberties and explicitly
_socialize_ the project for software freedom. The hope is to establish a new set
of design primitives and computing metaphors that can help to counteract those
embedded assumptions and more fairly redistribute control over our shared
technological inheritance. Finally, through Runrig's ongoing work and emerging
project proposals, the series will address what concrete strategies have worked,
which ones have not, and how to adapt those lessons to serve a broader community
of farmers, food workers, and technologists.

The Runrig Journal will include articles for a general audience, along with more
technical reports, tutorials, and even the occasional long-form essay. To get
the latest updates, you can sign up for the [newsletter], subscribe to [RSS],
[Atom], or [JSON Feed], or follow Runrig on Mastodon as [@runrig@social.coop] or
on Bluesky as [@runrig.bsky.social]. The goal is a biweekly cadence, but will
probably be less frequent as time allows. Don't hesitate to email [Jamie] with
questions, comments, or if you'd like to contribute!

[Runrig Plan]: /posts/the-runrig-plan-for-socio-ecological-design.html
[FOSS]: https://www.gnu.org/philosophy/floss-and-foss.html
[newsletter]: https://buttondown.com/runrig/
[RSS]: /feed/rss.xml
[Atom]: /feed/atom.xml
[JSON Feed]: /feed/feed.json
[@runrig@social.coop]: https://social.coop/@runrig
[@runrig.bsky.social]: https://bsky.app/profile/runrig.bsky.social
[Jamie]: mailto:jamie@runrig.org

<RRPostIndex :data="data" />
