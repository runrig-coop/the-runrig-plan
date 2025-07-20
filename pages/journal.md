<script setup>
import { data } from './../.vitepress/theme/journal.data.js';
import RRPostIndex from './../.vitepress/theme/RRPostIndex.vue';
</script>

# The Runrig Journal
The Runrig Journal is an ongoing series that explores the design principles and
methodologies behind [The Runrig Plan]. Most articles will be in the typical
blog format, intended for a general audience, while other posts will take the
form of more technical documentation, case studies, tutorials, and even the
occasional [long-form essay]. To get the latest updates, you can sign up for the
[newsletter], subscribe to [RSS], [Atom], or [JSON Feed], or follow Runrig on
Mastodon as [@runrig@social.coop] or on Bluesky as [@runrig.bsky.social]. The
goal is a biweekly cadence, but will probably be less frequent as time allows.
Don't hesitate to email [Jamie] with questions, comments, or if you'd like to
contribute!

[The Runrig Plan]: /plan
[long-form essay]: /posts/hedgerows
[newsletter]: https://buttondown.com/runrig/
[RSS]: /feed/rss.xml
[Atom]: /feed/atom.xml
[JSON Feed]: /feed/feed.json
[@runrig@social.coop]: https://social.coop/@runrig
[@runrig.bsky.social]: https://bsky.app/profile/runrig.bsky.social
[Jamie]: mailto:jamie@runrig.org

<RRPostIndex :data="data" />
