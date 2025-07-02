---
title: Illegible Agriculture
subtitle: Why Silicon Valley tries (and fails) to simplify farming's essential
    complexities
author: Jamie Gaehring
date: 2025-07-02
---

In the late summer and fall of 2022, I helped organize a short series of
technical interviews and open design sessions focusing on the information
systems employed by multi-farm CSAs and food hubs. It was a joint effort between
the [GOAT community] and the short-lived yet influential [Skywoman] project
spearheaded by Chris Newman. We first interviewed the [Richland Gro-Op], an
urban farmers' cooperative based on the [Microfarm] model developed at Ohio
State by Kip Curtis. We followed that up by talking to Tianna Kennedy from [the
607 CSA], who had scaled up an impressive distribution network as an emergency
response to COVID-19, sourcing from a dozen or so farms across Upstate New York
and supplying over 40 drop-off sites throughout the Hudson Valley and New York
City. Both organizations were (and still are) extraordinary examples of how the
operational and logistical complexity of a supply chain can be successfully
managed by means of thorough local knowledge combined with a well-established
network of trust.

Documenting their procedures was the primary goal and accomplishment of those
sessions, and the [full interviews] are available on GitHub for anyone who wants
to learn from them. In addition, I hoped that the sessions would act as a
proving ground for a few ideas I was developing about participatory software
design, shared knowledge systems, and some specific technical concepts that
would eventually became the basis for Runrig. They were not yet fully formed,
but the main impetus was there, [as I wrote at the time]:

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
with the same breadth and depth of coverage while also maintaining fidelity to
real-world food systems.

As the interviews were wrapping up, Chris Newman offered further insight into
[why off-the-shelf software so often fails] to solve the informational
challenges of diversified agriculture and short supply chains. He relayed a
complaint from another farmer, who had soured on ag-tech startups claiming that
their software would cure all the logistical pains that ailed them. When it
inevitably came up short, the "solutions experts" insisted there was nothing
wrong with the software's design or implementation. Instead, the fault laid in
their own farming practices. These software engineers had determined that the
farm itself was unjustifiably complex and in drastic need of simplification.
Newman, who himself worked as a software engineer for many years prior to
farming, points out what a "big red flag" this ought to be seen as:

> Software companies are not in the food business, they don't have any business
> telling you how to run yours, and if they do, they're deliberately attempting
> to throttle what works for you in order to make you work for them.

In some ways, this is emblematic of the "lossy" quality of software abstractions
that try to oversimplify intrinsically complex systems, thereby losing some
critical bits of information. Since [at least the mid-1980s], software
developers and information architects have tried to distinguish between
_essential complexity_, which is inherent to the user domain or business logic,
and _accidental complexity_, which is incurred by the addition of the technology
itself to the problem space. For our interests, everything entailed by the task
of farming is essential complexity, while technical details, such as the way an
app connects to the network or to a database, is all accidental complexity. It
is the job of good design to find ways of reducing accidental complexity, even
if it can never be eliminated entirely. Wherever the software model omits
critical aspects of essential complexity, however, it can only be interpreted as
a flaw in the design. Deliberately targeting essential complexity for removal,
as the developers suggested in Newman's anecdote, should be regarded as a
cardinal sin of responsible software development. That's at least one way of
understanding the failure of proprietary farming software, perhaps the most
charitable.

To view it from an more overtly political perspective, we might interpret the
elimination of essential complexity as the technocrat's way imposing
_legibility_ upon socially and ecologically diverse food systems, which would
otherwise remain unintelligible to your average engineer or startup founder.
Legibility is a concept [originated by James C. Scott] to analyze the failures
of top-down state planning, from the Soviet collectivization of agriculture to
the urban renewal projects of Le Corbusier and Robert Moses. It's an
interpretive lens favored by many anarchist critiques of both capitalist and
socialist forms of state coercion. Marxists, on the other hand, might observe
that under capitalism, material goods and services must undergo a distinctly
[Hegelian form of abstraction], in order to be made exchangeable as commodities.
In his book [_Platform Socialism_], James Muldoon applies this line of thinking
to what he calls _data commodity fetishism_, defining it as "the perception of
certain digital relationships between people (especially for communication and
exchange) as having their value based not on the social relationships themselves
but on the data they produce."

Each of these modes of interpretation, I think, gesture towards the same general
conclusion: the compulsion to simplify complex food systems is not meant to
facilitate or improve upon existing foodways – i.e., how a community farms and
feeds itself in accordance with local conditions and cultural practices; rather,
it is meant to render the labor, knowledge and matériel of that community more
suitable for mass consumption and capital accumulation. Any costs associated
with adapting inherently complex natural and social systems to simpler commodity
forms, ready for consumption, are deflected onto the community itself, not its
investors. I think Chris still might have summed it up best, however, as the
intent of software companies "to throttle what works for you in order to make
you work for them."

Meanwhile, the core challenge remains: how can diverse food communities bring
their full capacities to bear upon the creation of appropriate technologies that
meet their material needs and simultaneously reflect their collective values?
And importantly, how do we manage all the associated costs of developing and
maintaining such technology? While we strive to avoid further exploitation by
private software platforms, we continue to live under the artificial scarcities
of capitalism, so how do we manage what scarce resources we have left — amidst
all other competing demands on them — to sustain communally owned software
alternatives?

[GOAT community]: https://goatech.org/
[Skywoman]:
    https://rvamag.com/eatdrink/goodeats/from-tech-to-independent-farming-chris-newman-of-sylvanaqua-farms-and-his-journey-to-food-sovereignty-and-advocacy.html
[Richland Gro-Op]: https://richlandgro-op.com/
[the 607 CSA]: https://www.the607csa.com/
[Microfarm]:
    https://osumarion.osu.edu/alumni-initiatives/initiatives/microfarm.html
[as I wrote at the time]: https://jgaehring.com/blog/platform-coop
[full interviews]:
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
