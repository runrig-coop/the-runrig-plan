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
607 CSA], who had built up an impressive distribution network as an emergency
response to COVID-19, sourcing from roughly a dozen farms across Upstate New
York and supplying upwards of 40 drop-off sites throughout the Hudson Valley and
New York City. Both organizations were (and still are) extraordinary examples of
how the operational and logistical complexity of a supply chain can be
successfully managed by means of thorough local knowledge combined with a
well-established network of trust.

Documenting their procedures was the primary goal and accomplishment of those
sessions, and the [full interviews] are available on GitHub for anyone who wants
to learn from them. In addition to that, however, I secretly hoped that the
sessions would act as a proving ground for some ideas I was developing about
participatory software design, shared knowledge systems, and some specific
technical concepts that would eventually became the basis for Runrig. They were
not yet fully formed, but the main impetus was there, [as I wrote at the time]:

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
and _accidental complexity_, which is incurred by the addition of the technology
itself amid the problem space. For our interests, everything entailed by the
task of farming is essential complexity, while technical details, such as the
way an app connects to the network or to a database, is all accidental
complexity. It is the job of good design to find ways of reducing accidental
complexity, even if it can never be eliminated entirely. But when the software
model omits critical aspects of essential complexity, it can only be interpreted
as a flaw in the design. Deliberately targeting essential complexity for
erasure, as the developers recommended in Newman's anecdote, should be regarded
as a cardinal sin by responsible information architects. That's at least one way
– perhaps the most charitable – to understand the failure of proprietary
software to meet the needs of most farmers.

To view it from an more overtly political perspective, we might interpret the
elimination of essential complexity as technocrats' way imposing _legibility_
upon socially and ecologically diverse food systems, which would otherwise
remain unintelligible to your average engineer or startup founder. Legibility is
a concept [originated by James C. Scott] to analyze the failures of top-down
state planning, from Soviet collectivization of agriculture to the urban renewal
projects of Le Corbusier and Robert Moses. It's an interpretive lens employed by
many anarchist critiques of both capitalist and socialist forms of state
coercion. Marxists might observe, meanwhile, that material goods and services
must undergo a distinctly [Hegelian form of abstraction] in order to be made
exchangeable as commodities under capitalism. In his book [_Platform
Socialism_], James Muldoon applies this line of thinking to what he calls _data
commodity fetishism_, defining it as "the perception of certain digital
relationships between people (especially for communication and exchange) as
having their value based not on the social relationships themselves but on the
data they produce." It's part of a rent-seeking enterprise whereby tech
companies insert themselves as the brokers to an increasing number of our social
and economic exchanges. They make themselves indispensable, not because they add
anything of value, but because they've locked down and monopolized all other
digital modes of exchange.

Each of these interpretations can offer a key insight on its own, and altogether
I think they gesture towards the same general conclusion: the tendency of
proprietary software to oversimplify complex food systems is not intended to
facilitate or improve upon existing foodways – i.e., how a community grows its
food in accordance with local customs and conditions; rather, it is meant to
render the labor, knowledge and matériel of that community more suitable for
mass consumption and capital accumulation. Any costs incurred by shoving
inherently complex social and natural systems into simpler commodity forms are
deflected onto the community itself. Investors certainly won't ever feel those
costs, and that is by design. I think Chris Newman still summed it up best,
however, that software companies really just want "to throttle what works for
you in order to make you work for them."

Meanwhile, the primary challenge remains: how can diverse food communities bring
their full capacities to bear upon the creation of appropriate technologies that
meet their material needs without erasing the essential complexity of their
social relations and natural environment? And to make all that work, since we
still live under the artificial scarcities of capitalism, how do we manage all
the associated costs of developing and maintaining that technology?

I began to address those questions in [The Runrig Plan], at least in very broad
strokes, publishing the first draft not long after the final interviews for the
MAIA Project. Over the course of the intervening two years, I've continued to
explore particular aspects of the designs I proposed there. I've also been in
constant discussion with farmers, community leaders, and other free software
developers about the merits, drawbacks, and tradeoffs of various technology
stacks and approaches to their implementation.

Alternatives to VC-funded, proprietary, agricultural software are well within
reach. However, before I go to far into their design and how we can make them
more accessible, I need to delve just a little deeper into some hidden
assumptions that underwrite such complexity-erasing abstractions. Chief among
these assumptions is _scalability_ and the mistaken belief that it is both
necessary to successful software design and achievable without any loss of
fidelity to the domain model. It is an assumption that can cause even
well-intended, community-based free software projects to perpetuate the same
patterns that lead to the erasure of essential complexity, and it will be the
topic for my next article.


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
[The Runrig Plan]: /posts/the-runrig-plan-for-socio-ecological-design
