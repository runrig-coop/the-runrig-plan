---
title: Capability Approach to Free Software
author: Jamie Gaehring
date: 2025-12-31
outline: [2, 4]
---

:::warning HERE BE DRAGONS 🐉 

Still in a ___very___ rough state of draft...

- Errata from a [copyleftism] draft.
- Check w/ L. Villa about publishing transcript.
- Consider merging "local maxima in the fitness landscape" from [DWeb slides].

:::

[copyleftism]:
    https://github.com/runrig-coop/the-runrig-plan/tree/draft/copyleft/posts/copyleftism.md
[DWeb slides]: https://dweb.camp/p/foodweb__response-to-utility-proposal


In 2016, Luis Villa gave a fantastic presentation titled ["Free as in ... ?"] at
the Free Software Foundations's annual Libre Planet conference. Borrowing from
the _capability approach_, a theory of justice and human rights developed by
Amartya Sen and Martha Nussbaum, Villa makes a compelling argument for why free
software has failed to gain wider adoption over the years. I highly recommend
free software proponents watch it in its entirety.

The core of Villa's critique is that the free software community, in so many
ways, has constrained our notion of "freedom" to granting only the _permission_
to use software freely, while neglecting to grant a corresponding _capability_
to use it effectively. There's a tendency to focus too narrowly on the license
for the source code alone, and the prevailing notion of the [Four Freedoms]
interprets them only as the _developer's freedom_ to run, read, modify, and
share the source code as they see fit. Not much regard is given to what end
users can do with it after the fact.

The main challenge, as Villa sees it, is knowing what capabilities to grant that
will most positively impact software users. To that, the only answer he can
offer is, "It depends," which he admits is inadequate, but might be closest any
of us get to a universal solution. Field research, human centered design, and
codes of conduct can all help, but at the end of the day, it comes down to the
specific context of each piece of software and each user scenario.

I would add a few more dimensions to this, which still won't answer for the
specific context, but I think will put us on a much firmer footing to achieve
its resolution. When we inquire into the user's capabilities, we shouldn't seek
to identify an exemplary or idealized user, nor evaluate their capabilities in
terms of that one user. Instead, I believe we should be asking:

_What are the __collective capabilities__ for a __community of users__ this
software serves, and what is the total impact they seek to achieve together?_

To this I would then add a few more proscriptions. First, we must recognize that
__developers are a part of that community__. We cannot privilege our
capabilities as developers but must account for them as __contingent upon the
collective capabilities of the whole community__. We can't make make software
that positively impacts a community of users alone; our capabilities as
developers will always be insufficient to that task. We depend upon others'
capabilities in equal proportion to how everyone else depends upon ours. Partly,
this is so we can design appropriately for users in the community: first we need
their concrete knowledge of the domain that our software aims to model, then we
must trust that their feedback is truthful and their reporting accurate. There
are contributions to documentation, message boards, and issue queues that are
all invaluable to a project's success.

But we also have to recognize that the bulk of what users contribute is seldom
measured or recorded – let alone justly compensated or appreciated. A community
of users, especially for a free software project, also does the lion's share of
the unseen care work that is absolutely required to promulgate and grow a
project. Other users are who most often introduce software to new users; they
communicate its value, show others how it works, and share tips and tricks from
their own work flows. The majority of issues or bugs users encounter will be
triaged first by other users, and most of those will never register with the
project's maintainers. Users help each other, but that helps the software and
arguably helps the developers most of all.

Then of course, there are users who are other developers, where I employ the
term "developers" with the broadest of possible meanings – e.g., designers,
engineers, product managers, office managers, technical assistance providers,
customer service reps, salespeople, etc. We're even using our own programs as we
develop them, in a sense, while other developers will use our programs, too, and
we use programs that other developers wrote. When I look at big software
project, like Linux, or more generally a knowledge commons like Wikipedia, I
sometimes think of this excerpt from Peter Kropotkin's _Conquest of Bread_:

> A house in certain parts of Paris is valued at many thousands of pounds
> sterling, not because thousands of pounds’ worth of labour have been expended
> on that particular house, but because it is in Paris; because for centuries
> workmen, artists, thinkers, and men of learning and letters have contributed
> to make Paris what it is today⁠—a centre of industry, commerce, politics, art,
> and science; because Paris has a past; because, thanks to literature, the
> names of its streets are household words in foreign countries as well as at
> home; because it is the fruit of eighteen centuries of toil, the work of fifty
> generations of the whole French nation.
> 
> Who, then, can appropriate to himself the tiniest plot of ground, or the
> meanest building in such a city, without committing a flagrant injustice? Who,
> then, has the right to sell to any bidder the smallest portion of the common
> heritage?

How much like the Paris house is the Linux kernel, with its 15 millions lines of
code and it's 

Finally, this should go without saying, but since we're talking about food and
agriculture it bears repeating: no matter how many lines of code a developer
writes or tickets they close, they can't eat code and they make a house out of
Jira tickets. Ones and zeros won't refill our coffee mugs. That takes a lot of
other people, the _cumulative_ capabilities from all of them. Probably some of
those people growing our food and brewing our coffee use our software, too, and
it's important to acknowledge that.x

["Free as in ... ?"]: https://lu.is/2016/03/free-as-in-my-libreplanet-2016-talk/
[Four Freedoms]: https://www.gnu.org/philosophy/free-sw.html#four-freedoms
