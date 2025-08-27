---
title: Against Scale
subtitle: The cloud falling back down to earth
description: A look at the way scalability perpetuates some of the worst
    tendencies of neoliberal capitalism, and how Runrig proposes to overturn
    those harmful dynamics through participatory design and transparent
    abstractions.
author: Jamie Gaehring
date: 2025-08-29
---

At the end of my first round of consultation for the Farm Flow project, I
offered my initial recommendations for its [development model], then left some
closing remarks to make clear my own biases that led to those conclusions. I
don't pretend to put all of my political convictions aside when rendering a
professional opinion, but I do try to be transparent. Those remarks, under the
final subheading of "Distributing Cost & Control; Organizing Support & Reach,"
read in part:

> I’m reluctant to speak in terms of “scaling” product development, as is common
> today in start-up culture and industry. [I find that scaling] is essentially
> at odds with the goal of producing technology that affords its users greater
> autonomy, both individually and collectively. I prefer to think about the ways
> technology can help to distribute control over our production systems, while
> also diffusing the costs of maintaining them. From this perspective, it’s not
> the product that expands to an ever greater and greater scale, but rather our
> capacity to organize a larger bloc of mutual support with a stronger
> commitment to shared values.
> 
> [...]
> 
> In terms of technology development and _especially technology maintenance_,
> widening the circle of cooperation can diffuse costs, by lowering the stakes
> required to initiate development at the very start, while also averaging out
> the long-term costs of ownership through shared ownership.

Roughly 6 months later, following DWeb Camp 2024, I drew upon those early
assessments and the lessons I took away from my subsequent consultations with
Farm Flow to formulate [a critique of two emerging proposals] for how to fund
open source agricultural software projects. Framing Runrig's methods for
development in sharp contrast with some of the most harmful business practices
of startup culture, as I saw them, I attempted to distill the above remarks into
a succinct tabular form:

|            Runrig Methodology |     | Venture Capitalism      |
| ----------------------------: | --- | :---------------------- |
|    ___Distributing_ CONTROL__ | vs. | _Scaling PRODUCTION_    |
|         ___Diffusing_ COSTS__ | vs. | _Accumulating CAPITAL_  |
| ___Expanding_ PARTICIPATION__ | vs. | _Consolidating MARKETS_ |
|       __WORKER-_organizing___ | vs. | _RENT-seeking_          |

To be honest, I'm still ambivalent about the whole framing, whether each
columnar value is truly antithetical to its counterpart or not, but I feel most
confident on the point about scaling. I almost think I could have filled in the
entire right-hand column with "scaling" of some type or another, and each
element in the left-hand column would still pose a distinct, valid alternative
to the same flawed method of capitalist production, which could be summed up
rather bluntly as "scale everything, all the time," without much regard for
particulars.

In my [previous article], I discussed discussed how ag-tech startups have a
penchant for oversimplifying the essential complexities of agriculture and
regional food systems. I asserted that this is not meant to improve them at the
local level, in accordance with the communities own needs, desires, and
understanding, but rather "to render the labor, knowledge, and produce of that
community more suitable for mass consumption and capital accumulation." There
are alternatives, but before exploring those, we need to dispel some of the
unspoken myths that underwrite our current software methodologies.

No less than when I first presented that table, _scale_ is still at the top of
my list of tech myths that simply must be jettisoned.

[development model]: /posts/farm-flow-backstory#deciding-on-a-development-model
[a critique of two emerging proposals]:
    https://dweb.camp/p/foodweb__response-to-utility-proposal
[previous article]: /posts/illegible-agriculture.md

## On Scalability
In Silicon Valley, there is a widespread fascination with _scaling_, or to be
more precise, _digital technologies that scale_. The verb "to scale" in this
context can take the passive voice, as in digital technologies that "can be
scaled," or an active voice for technologies that facilitate "the scaling of"
other systems, both digital and non-digital systems alike. If some new tech
promises "to scale" and "to be scaled" at the same time, all the better. Many a
would-be founder has exalted the properties of this or that technology for its
ability to scale, as if by some quasi-magical property latent in the computer
chips themselves. But scaling is by no means inherent to the nature of
computation, nor does scaling emerge from digital technology all of its own
accord. Rather, it is imposed on technology by a mandate from venture capital
investors to pursue unlimited economic growth.

In _Empire of AI_, Karen Hao points out that, as much as AI hype man Sam Altman
and others like him are wont to cloak their business prognostications in a veil
of empirical evidence and physical law, this is mere pseudoscience:

> In the end, Moore’s Law was not based on some principle of physics. It was an
> economic and political observation that Moore made about the rate of progress
> that he could drive his company to achieve, and an economic and political
> choice that he made to follow it. When he did, Moore took the rest of the
> computer chip industry with him, as other companies realized it was the most
> competitive business strategy. OpenAI’s Law, or what the company would later
> replace with an even more fevered pursuit of so-called scaling laws, is
> exactly the same. It is not a natural phenomenon. It’s a self-fulfilling
> prophecy.

Where information technology does make an original contribution is in
the form of its unrivaled capacity for _abstraction_, a power that can just as
well be applied to scaling as to other unrelated tasks or even opposing aims. A
well-designed computer algorithm can abstract away concrete details of the real
world – e.g., material goods and services, users, workers, facial expressions,
social relations, monetary costs, environmental costs, etc. – and whisk them away
to the _cloud_. Once in this realm of pure abstraction, properties like color,
size, and shape become mere numbers or bits. Free of all physical encumbrance,
our worldly cares assume new virtual bodies, becoming weightless, untethered,
and without consequence. Up there in the cloud, scale itself is only limited to
the largest number you can fit into a [64-bit register] – although that limit,
too, can be easily abstracted away.

[64-bit register]:
    https://tromp.github.io/blog/2023/11/24/largest-number

When the object of scaling is economic productivity or market dynamics,
computational abstraction becomes an accelerant for capital's race towards
infinite growth. This secret sauce – abstraction coupled to a business model
meant for rapid market growth and capital accumulation – is what business
analysts or techno-optimists typically infer by the neologism: _scalability_.

## The Physicality of Information
Before going too much further, I should point out that in addition to the
economic sense of the word, scalability has another more technical usage, where
scale can be measured by empirical observation or even evaluated by mathematical
proof.[^comp-sci] Some might argue that this technical meaning can be considered
independently from its business connotation, without any reference to
socioeconomic value statements. That may be true in a purely academic setting,
but even under such contrived circumstances, I would argue that the term still
comes freighted with some heavy socioeconomic implications. The physical limits
and potentials of scalability measured in the laboratory are of interest largely
to the extent that they can be correlated to the economic costs and benefits of
scalability. There is no applied science for the upper reaches of scalability
without the vast resources available only to tech companies intent on scaling to
billions of users and a market capitalization that puts them on the S&P 500.
That's what funds scientific research into scalability in the first place and
why it gets any significant attention.

[^comp-sci]: Scalability is a pretty dry body of literature in the applied
    sciences, but to get a sense, see [Amdahl's Law] and [Gunther's Universal
    Scalability Law]. The theoretical physics behind computational limits is
    actually a lot more approachable and fun to explore. On her YouTube channel
    _Up and Atom_, Jade Tan-Holmes gives a fantastic explanation of ["Why Pure
    Information Gives Off Heat"] according to [Landauer's Principle]. To
    understand how Planck's constant and the Uncertainty Principle put a hard
    upper limit on how much information can be transmitted over a fixed period
    of time, see ["What is the maximum Bandwidth?"] with  Prof. Mike Merrifield
    and Brady Haran from _Sixty Symbols_. It's far more useful, in my opinion,
    to get a beginner's intuition for the _physicality of information_ than to
    memorize a bunch of equations for scaling systems that have no business
    being that big to start with.

To that point, it remains to be seen if the abstractions of scalability can
survive eventual contact with reality – _the cloud falling back down to earth_,
so to speak. Computational abstractions do incur physical costs and real-world
consequences, and there are practical limits to the scale of their application,
even if they encompass theoretical infinities. The need for sane limits on
computational scaling could not be more acute than in the face of our
accelerating climate crisis and the rising number of geopolitical conflicts
spawned by competition over finite energy and mineral resources. Indeed, such
resources will never be adequate to the computational demands of today's tech
moguls, if left to set their own limits. When Microsoft announces [it will
reopen Three Mile Island] to power its large language models, _this is the cloud
falling back down to earth_. When companies like Apple, Tesla and Dell are
willing to pay millions of dollars in legal fees each year so they can keep
[extracting the conflict minerals] that power our smartphones, electric
vehicles, and other devices, _this too is the cloud falling back down to earth_.

I need only to gesture slightly towards the current AI bubble and its [impending
burst], as its hype finally seems to be fading and this terawatt-hour-expending
project with its ["scale-at-all-cost"] approach, as Hao calls it, is exposed for
the massive scam it has always been from the start.

[Amdahl's Law]: https://dl.acm.org/doi/10.1145/1465482.1465560
[Gunther's Universal Scalability Law]: https://arxiv.org/abs/0808.1431v2
[Landauer's Principle]: https://en.wikipedia.org/wiki/Landauer%27s_principle
["Why Pure Information Gives Off Heat"]:
    https://www.youtube.com/watch?v=XY-mbr-aAZE
["What is the maximum Bandwidth?"]: https://www.youtube.com/watch?v=0OOmSyaoAt0
[it will reopen Three Mile Island]:
    https://www.npr.org/2024/09/20/nx-s1-5120581/three-mile-island-nuclear-power-plant-microsoft-ai
[extracting the conflict minerals]:
    https://arstechnica.com/tech-policy/2024/03/apple-and-other-firms-dont-have-to-compensate-victims-of-forced-child-labor/
[impending burst]: https://ig.ft.com/ai-data-centres/
["scale-at-all-cost"]:
    https://www.democracynow.org/2025/7/4/empire_of_ai_karen_hao_on

## A Measure of Social Control
Beyond the clear perils to our planet's climate and natural ecosystems, rapid
scaling also threatens our social and cultural ecosystems. When big tech
companies talk about scalability, they might have in mind scaling the production
of our physical needs and wants (e.g., GrubHub, Apple, Tesla), scaling the
market for those products (e.g., Amazon, AdSense, Square), scaling the creative
arts and our cultural identities (e.g., Netflix, Spotify, YouTube), or scaling
the web of social relations bound up in all of that (e.g., Facebook, LinkedIn,
Tinder). But when these processes are scaled by algorithmic abstraction, some
essential quality of our social relations will always be lost.

In many ways, abstraction is just the omission of certain characteristics that
make real-world phenomena especially inscrutable to meaningful analysis. Those
details perceived as anomalous, divergent, or simply irrelevant are thrown out
while other patterns and traits are elevated in their place. All of this is done
to form a coherent model of whichever dynamics the modeler deems most
significant. As George Box once put it, "all models are wrong, but some are
useful," and abstraction can just as easily produce models that are insightful
and beneficial to society as it can throw up models that are misleading,
exploitative, or utterly meaningless. In the case of most cloud software, the
abstraction is performed by proprietary algorithms, hidden away on a remote
server somewhere that only its owners can ever see or control. Ask any content
creator who's tried to guess what thumbnail image will get them the most views,
or an SEO consultant who's racked their brain for the right combination of
keywords to improve their website's search ranking, and they'll tell you just
how futile a guessing game that can be.

Billions of decisions are being made every second on the basis of such
cloud-based abstractions, and all for the sake of somebody's model. But _whose_?
Most of those decisions are the sole prerogative of the algorithm's authors,
while the overwhelming majority of us are relegated to being the mere _objects
of their abstractions_, even if we never use the particular cloud software in
question. Users and non-users alike are seldom granted any knowledge of the
decisions being made that impact our lives, let alone any influence over how
those abstractions are formed in the first place. When the phenomenon being
abstracted away is an entire economic sector or, worse yet, society as a whole,
we forfeit a tremendous degree of agency over our social lives and our very
material existence. All that power of abstraction is essentially handed over to
just a few over-caffeinated engineers and their even fewer corporate managers.
Once in their hands they'll do whatever they deem necessary for the sake of
scale, often to the detriment of our communities and ultimately to the sole
benefit of their company's shareholders.

That imbalance of control is _the definitive metric for scalability_ and the
primary rationale for scaling up so much tech infrastructure in the first place.
Another implicit assumption of scalability is that whatever measure is used to
indicate a company's total market share or asset valuation – e.g., the number of
active users, payments processed, or revenues – that value is expected to
increase at a _geometric rate_ with respect to the total number of engineers,
managers, etc, needed to achieve said increase. A mere _linear rate_ of growth
would be seen as an abject failure. Whether the market valuation is expressed in
users, dollars, or some other unit, in order to be commensurable with the number
of employees or other operating costs, they both must be measures of
socioeconomic value in one form or another.

Putting assets and liabilities together in a ratio this way also implies that
what's being scaled represents a form of equity. If we assume a positive equity
valuation is the desired outcome, it really just amounts to an unequal exchange
of socioeconomic value, with the difference always flowing upward. Or to put it
more bluntly, it's a form of wealth extraction, plain and simple. Furthermore,
if the projected growth rate – e.g., equity over time – must rise geometrically
in order to be deemed "scalable," then scalability is just an expression for the
rate at which a technology system can perpetuate and increase socioeconomic
inequality over time. Given the informational and communicative nature of such
systems, especially in comparison with pre-digital methods of scaling economic
production, it must be emphasized that such inequality will be at once economic
as well as social in nature, effecting both how resources are allocated and who
controls the allocation process. Scalability, in other words, must also be
viewed as essentially _a measure of extractiveness and social control_.

Social control and extraction are nothing new, of course, and computers aren't
unique in their ability to scale them; for millennia prior to the invention of
integrated circuits, ancient bureaucrats did just fine with their abacuses, law
books, _quipu_, and clay tablets. Where computerized scaling differs is in the
_rate of extraction_ and the _degree or granularity of control_ it can achieve
relative to the amount of effort it requires to implement and enforce. In this
respect, it exceeds all previous means of scaling by orders of magnitude.

## Info Trawlers
The enormous informational complexity these tools purport to scale is so far in
excess of what all the world's engineers, managers, and shareholders can ever
hope to apprehend, at least with the remotest semblance of competence or
intentionality. Despite the relative ease with which it enables their control
over nearly all aspects of our daily lives, scalability is a very sloppy means
of control. And yet, however ineptly they may wield it, it remains a very
powerful and very dangerous form of control, all the same. As with many forms of
industrialization, scalability can prove so harmful through the sheer bluntness
of the tool, even if no malice is intended. Inevitably, it will be applied to a
needlessly broad swath of social functions, across diverse cultures and with
reckless indifference, because in spite of any damage it incurs, any greater
precision would be seen as a mere nuisance to engineers and an unjustified cost
to the shareholders.

Like an [ocean trawler] that obliterates square miles of seafloor habitat and
all the diversity of marine life it sustains, just to harvest a few scallops and
discard three quarters of its total catch – so, too, scalability can cut across
a wide swathe of our social and natural environs, wreaking havoc with our lives
and wasting untold resources, while its operators scarcely pay any notice to the
destruction left in their wake.

!["Still frame from David Attenborough's Ocean (2025), depicting an industrial
bottom trawler decimating the seafloor off the channel coast of southern
England"](
./img/ocean-trawler-attenborough-2025.png
"Still frame from David Attenborough's Ocean (2025), depicting an industrial
bottom trawler decimating the seafloor off the channel coast of southern
England")

I don't polemicize against scale because I oppose widespread adoption of new and
effective digital tools. I just don't think that technology should be designed,
owned, and controlled by a tiny number of elites, who then get to impose it upon
the masses whether they want it or not. I also think we're past the point of
reinterpreting "scale" to mean anything else. The metaphor is too embroiled with
those practices to rehabilitate it now.[^redef]

[^redef]: I don't know if a non-technical audience would appreciate the full
    extent to which capitalistic exploitation is entangled with the whole
    concept of technological scalability, but software developers should be able
    to spot it instantly.
    
    Look at any of the most common (or most extreme) approaches to scaling:
    containerized swarms and clusters, database sharding, MapReduce, data
    warehouses, data lakes, massively parallel processor arrays, etc. These
    techniques scale up the number of operations that can be performed or the
    number of bits that can be stored, but they aren't intended to scale up the
    complexity of the underlying computing model – some might say that defeats
    the whole point! And so they do little or nothing to accommodate any greater
    complexity in the domain model itself, which is where computational control
    can be handed off to the end user to decide for themselves what programs
    will positively impact their material lives. For all that massive
    parallelism and distributed architecture, the potential for human
    intervention becomes increasingly siloed and extremely centralized. It's
    analogous to scaling a bitmap image from 32x32 to 64x64 pixels. You can do
    it easily enough by transforming every single pixel into a homogenous
    2x2-pixel block, each one a precise replica of the original, but you haven't
    added any information or finer detail to the image. You just quadrupled the
    number of bits you now need to store or transmit it. There's no increase in
    the significance of what's been scaled, no new knowledge, no refinement.

    This is what technological scaling represents today, in essence. Unless all
    the familiar techniques are rewritten from scratch or tossed out entirely,
    this is the definition of scaling that technologists are stuck with for the
    foreseeable future. We must adopt new metaphors if we want to break out of
    this established pattern.

[ocean trawler]: https://www.youtube.com/watch?v=IzG9AwlypaY

## Socializing Our Computational Abstractions
It should go without saying that scaling and abstractions of the sort described
above are deeply at odds with any vision for appropriate technology that
respects users' autonomy. Nevertheless, I contend that different abstractions
can still play a critical role in overturning those injustices. After all, that
is my entire purpose with Runrig: to develop the methodologies, relationships,
and infrastructure needed to bring more liberatory technologies into my own
community, and then with some luck, to share them more widely.

It was with that in mind that I first proposed the table at the start of this
article as a rebuttal to the various abstractions imposed by venture capital
funding models. Exploitative abstractions like scaling have been so normalized
in the tech industry that they are taken for granted even by free software
maintainers and advocates, including myself at times.

Technology does not have to blindly _scale the production and reproduction of
our socio-economic systems_, to the exclusion of all other concerns. It's not
obliged to turn our communities into more efficient resource pumps for _capital
accumulation_. We can choose different abstractions and only decide to scale
them when we have group consensus. We can co-develop new abstractions for
__distributing control__ of our production systems more evenly, while also
__diffusing the costs__ of maintaining them. Instead of _consolidating markets_
into fewer and fewer hands, we can __expand the zone of participation__, along
with our capacity for collective action. And although we live for now under
capitalism, where technocratic _rent-seeking_ is the order of the day, we can
still choose not to reproduce those dynamics with our labor and technology.
Instead, let's use them to __organize bulwarks of worker power__ that are more
resilient to such rent-seeking efforts, as well as other forms of attack.

Much of this is just a convoluted restatement of mutual aid's basic tenets, and
I'm by no means the first to apply them to food and technology. I reframe them
this way as a response to specific critiques about free software and cooperative
technology. Namely, there's a view that truly robust, maintainable software must
be amply funded through capital investments, public grants, or large donations
from private foundations – at least, for halfway decent software anyone wants to
use. It's not surprising to hear this charge coming from the startup industry,
but skepticism of this sort is also prevalent among many in the free software
and regenerative agriculture communities.

It might be easy to dismiss those claims as a symptom of the "non-profit
industrial complex," and there may even be a bit of truth in that, but I do
sympathize with the concern and can fully relate to the pragmatic outlook it
speaks from. The high-minded ideals of software freedom and cooperative
economics must be balanced against the need for fair compensation that pays
developers and support staff to deliver the kind of safe, reliable, easy-to-use
software that users deserve. It's a tough nut to crack, when you take a
realistic account of all the labor, expertise, and long-term commitments needed
to accommodate every one of those concerns. Alternative funding models do exist,
but they're poorly attested even within free software circles, let alone the
among broader coalition of supporters you would need from food & agriculture
networks. All of this is central to the work Runrig aims to accomplish.

I've indicated here a few alternatives to "scaling" as a metaphor – e.g.,
"diffusing costs" and "distributing control" – but nothing comparable in terms
of its power for abstraction or a feasible pattern for achieving it. For that,
we do need to get more specific and talk about architecture, as much as I like
to make a fuss about putting [_ecology over architecture_]. So next time, I'll
cut straight to the chase and layout what I believe will be the key
architectural pattern for much of Runrig's future development: _federated
municipal platforms_.

[_ecology over architecture_]:
    /posts/the-runrig-plan-for-socio-ecological-design.html#ecology-over-architecture