---
title: Illegible Agriculture
subtitle: Why technocrats so often try (and fail) to simplify farming's
    essential complexity
author: Jamie Gaehring
date: 2025-07-07
---

In the latter half of 2022, I helped organize a short series of open design
sessions that focused on the information and communication systems of multi-farm
CSAs and food hubs. It was a joint effort between the [GOAT community] and the
short-lived yet influential [Skywoman] project that Chris Newman had
spearheaded. We first interviewed the [Richland Gro-Op], an urban farmers'
cooperative based on the [Microfarm] model developed at Ohio State by Kip
Curtis. We followed that up by talking to Tianna Kennedy from [the 607 CSA], who
had built up an impressive distribution network as an emergency response to
COVID-19, sourcing from roughly a dozen farms across Upstate New York and
supplying up to 50 drop-off sites throughout the Hudson Valley and New York
City. Both organizations are extraordinary examples of how the operational and
logistical complexity of a supply chain can be successfully managed by means of
thorough local knowledge combined with a well-established network of trust.

Documenting their procedures was the primary goal and accomplishment of those
sessions, and all the notes and interview materials are available on GitHub as
the [MAIA Project], for anyone who still wants to learn from them. In addition
to that central aim, I hoped the sessions might also act as a proving ground for
some ideas I was developing about participatory software development, shared
knowledge systems, and some specific design concepts that would eventually
became the basis for Runrig. They were not yet fully formed, but the main
impetus was there, as I wrote in the [project announcement]:

> The data underpinning networks of agricultural production and food
> distribution are so inextricably complex; it is no accident that this
> complexity only skyrockets when due respect and full equity is granted to
> every person and creature involved, as well as the land and overall ecology
> that contributes to feeding a community. It is a reflection of the social and
> cultural complexities underpinning how we eat, grow and relate to one another
> and our environment. I don't think there can be a just and equitable software
> system, capable of handling all that informational complexity, if it doesn't
> have social and ecological cooperation baked right into the design and
> methodology of the system itself.

I argued that VC-funded startups could never be expected to deliver technology
with the necessary breadth and depth of coverage while also maintaining fidelity
to real-world food systems.

As the interviews were wrapping up, Chris Newman offered further insight into
[why off-the-shelf software so often fails] to solve the informational
challenges of diversified agriculture and short supply chains. He relayed a
complaint from another farmer, who had soured on ag-tech startups claiming that
their software would cure all the logistical pains that ailed them. When these
schemes inevitably came up short, the "solutions experts" insisted there was
nothing wrong with the software's design or implementation. Instead, the fault
laid in their own farming practices. These software engineers had determined
that the farm itself was unjustifiably complex and in drastic need of
simplification. Newman, who himself worked as a software engineer for many years
prior to farming, points out what a "big red flag" this ought to be seen as:

> Software companies are not in the food business, they don't have any business
> telling you how to run yours, and if they do, they're deliberately attempting
> to throttle what works for you in order to make you work for them.

In some ways, this is emblematic of the "lossy" quality of software abstractions
that try to oversimplify intrinsically complex systems, thereby losing some
critical bits of information. Since [at least the mid-1980s], software
developers and information architects have tried to distinguish between
_essential complexity_, which is inherent to the user domain or business logic,
and _accidental complexity_, which is incurred by the very fact of adding
software into the mix. For our interests, everything entailed by the task of
farming is essential complexity, while technical details, such as the way an app
connects to the network or to a database, is all accidental complexity. It is
the job of good design to find ways of reducing accidental complexity, even if
it can never be eliminated entirely. Good software, in turn, just gets out of
the way so the domain expert – i.e., the farmer or food worker – can reason more
clearly about the essential complexity without distraction. The software's role
is to be a better crop planning notebook or a better store checkout process, not
a better farmer or better food worker. Deliberately targeting essential
complexity for removal, as the developers recommended in Newman's anecdote, can
only be interpreted as a flaw in the design. At least, that's the most
charitable way of explaining why proprietary software so often fails to meet a
farmer's needs.

To view it from a more overtly political perspective, we might interpret the
elimination of essential complexity as technocrats imposing _legibility_ upon a
socially and ecologically diverse food system, which would otherwise remain
unintelligible to your average engineer or startup founder. Legibility is a
concept [originated by James C. Scott] to analyze the failures of top-down state
planning, from the Soviet Union's collectivization of agriculture to the urban
renewal projects of Le Corbusier and Robert Moses. It's an interpretive lens
employed in many anarchist critiques of both capitalist and socialist forms of
state coercion. Marxists might observe, meanwhile, that material goods and
services must undergo a distinctly [Hegelian form of abstraction] in order to be
made exchangeable as commodities under capitalism. In his book [_Platform
Socialism_], James Muldoon applies this line of thinking to what he calls _data
commodity fetishism_, defining it as "the perception of certain digital
relationships between people (especially for communication and exchange) as
having their value based not on the social relationships themselves but on the
data they produce." It's part of Big Tech's rent-seeking enterprise, whereby
they insert themselves as the brokers of our everyday social and economic
exchanges, whether that's with our nextdoor neighbors or remote customers,
distant friends or close family members. Tech platforms make themselves
indispensable that way, not because they add anything of value, but because
they've locked down and monopolized all other digital modes of exchange.

Each of these interpretations offers unique insights of its own, but altogether
I think they gesture towards the same general conclusion. The tendency of
proprietary software to oversimplify complex food systems is not meant to
facilitate or improve upon existing foodways – i.e., how a community grows its
food in accordance with local customs and conditions. Rather, it is meant to
render the labor, knowledge, and produce of that community more suitable for
mass consumption and capital accumulation. Any costs incurred by shoving
inherently complex and richly organic material into simpler commodity forms are
deflected back onto the community itself. Investors won't ever feel those costs,
that's for sure, which is entirely by design. Of all these takes, I think Chris
Newman still summed it up best, that software companies really just want "to
throttle what works for you in order to make you work for them."

Meanwhile, the real challenge remains: how can diverse food communities bring
their full capacities to bear upon the production and deployment of appropriate
technologies, which meet their practical needs but preserve all the essential
complexity of their social relations and physical environment? And for any of
that to work – because at the moment we do still live under capitalism, with all
its rentiers and artificial scarcities – how do we manage the added costs of
developing and maintaining such technology?

In very broad strokes, I attempted to address those questions in [The Runrig
Plan], which I first published once the final interviews for the MAIA Project
concluded. Over the course of the intervening two years, I've continued to
explore particular aspects of the designs I proposed there. I've also been in
constant discussion with farmers, community leaders, and other free software
developers about the merits, drawbacks, and tradeoffs of various technology
stacks, differing approaches to their implementation, and so forth.

Better alternatives are well within reach, but before I elaborate on them, I
need to delve just a little bit deeper into the hidden assumptions that
underwrite so many of these complexity-erasing abstractions. Chief among them is
what startups like to call _scalability_. It is assumed to be at once necessary
to the success of any respectable software project, while also attainable with
zero loss of fidelity to the domain model. The perceived need to scale can cause
even community-based, free software projects with the purest intentions to
perpetuate the same anti-patterns as VC-funded, proprietary software startups.
Without scaling, it is argued, there is no other way of making free software
both accessible and affordable to the wider masses. That is a noble aim, truly,
and I'll make the case that it's still quite feasible, but that "scaling" is the
wrong metaphor for the job. Far more often, scalability only leads to bad design
choices that do, in fact, erase essential aspects of our food systems' social
and ecological complexity. In order to reach a broader base of people and
accommodate a more varied array of user scenarios, all while preserving the full
range of complexity they inhabit, free software needs new metaphors and new
abstractions to build upon. That will be the topic of my next article, so do
stay tuned.


[GOAT community]: https://goatech.org/
[Skywoman]:
    https://rvamag.com/eatdrink/goodeats/from-tech-to-independent-farming-chris-newman-of-sylvanaqua-farms-and-his-journey-to-food-sovereignty-and-advocacy.html
[Richland Gro-Op]: https://richlandgro-op.com/
[the 607 CSA]: https://www.the607csa.com/
[Microfarm]:
    https://osumarion.osu.edu/alumni-initiatives/initiatives/microfarm.html
[project announcement]: https://jgaehring.com/blog/platform-coop
[MAIA Project]:
    https://github.com/skywoman/multifarm-aggregation-info-arch#technical-interviews--open-design-sessions
[why off-the-shelf software so often fails]:
    https://web.archive.org/web/20240303180714/https://www.skywoman.community/post/choosing-software-the-case-for-using-erp-crm-scm-to-scale-farms
[at least the mid-1980s]: https://en.wikipedia.org/wiki/No_Silver_Bullet
[originated by James C. Scott]:
    https://theanarchistlibrary.org/library/james-c-scott-seeing-like-a-state
[Hegelian form of abstraction]:
    https://www.marxists.org/archive/marx/works/1857/grundrisse/ch01.htm#loc3
[_Platform Socialism_]:
    https://www.techwontsave.us/episode/97_envisioning_platform_socialism_w_james_muldoon
[The Runrig Plan]: /posts/the-runrig-plan-for-socio-ecological-design
