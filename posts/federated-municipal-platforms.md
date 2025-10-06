---
title: Federated Municipal Platforms
subtitle: A fundamental design pattern
description: A description.
author: Jamie Gaehring
date: 2025-09-09
outline: [2, 4]
---

> It would be fine if freedom were as easy as this, that man was naturally free.
> But it is not true. Freedom is the product, not of the instincts, but of
> social relations themselves. Freedom is secreted in the relation of man to
> man.
> 
> — Christopher Caudwell, _Studies in a Dying Culture_ (1937)

As a design methodology, the Runrig Plan prioritizes organic design elements
that can evolve and that are _necessarily_ enmeshed within a broader ecosystem
of digital and social technologies, the majority of which are outside the
designer's control. I've tried to distill this down to a simple maxim: _ecology
over architecture_. This is meant to inoculate against a tendency in software to
fixate on the latest "tech stack," whether that's blockchain, neural networks,
or whatever database happens to be the current fad. I don't mean to eschew the
notion of architecture altogether; it just shouldn't represent a hard boundary,
demarcating the totality of the design space. Architecture must yield to the
greater ecology of the system, which knows no bounds, and so become less
determinate, less mechanistic, more permeable. Good architecture must be able to
float.

The __federated municipal platform__ is intended to be one such architectural
pattern, one that will play a central role in many of the systems I hope to
build with Runrig.

## Some Definitions
In brief, a federated municipal platform, or __FMP__, is a communally owned and
controlled digital platform for a regional foodshed or bioregion to manage its
own land, resources, and labor according to its own needs. It can be a host for
multiple, [_libre_] software applications and services, ranging from
agricultural software like [farmOS] or the delivery app [CoopCycle], to generic
productivity apps like [Etherpad] or [Grist]. It all depends on what its
community of users decide. An FMP can also run headless bridge services, or
"webhooks," that integrates its users' data and work flows with other
community-based platforms, such as the [Open Food Network] and [GrownBy], or
with proprietary platforms like Shopify. That way users don't have to double- or
triple-enter data every time their product catalog is updated. Naturally, an FMP
can also "federate" with other FMPs, affording even tighter integration and
promoting collaboration between dispersed or divergent communities.

With Runrig, I plan to work mostly within food and agricultural communities, so
I've defined the FMP in familiar terms like "foodshed" and "farmers." There's
nothing about this architecture, however, that couldn't be applied to more
generic community groups or for different types of activity.

To illustrate its finer details, a federated municipal platform can be dissected
and its three constituent terms inspected more closely, defining them one by
one.

[_libre_]: https://www.gnu.org/philosophy/free-sw.html
[farmOS]: https://farmos.org/
[CoopCycle]: https://coopcycle.org/
[Etherpad]: https://etherpad.org/
[Grist]: https://www.getgrist.com/
[Open Food Network]: https://openfoodnetwork.org/
[GrownBy]: https://grownby.com/

### Platform
As a __platform__, it will host a suite of software applications and network
services, like so many of the "cloud" platforms we already interact with every
day (e.g., Amazon, Facebook, Airbnb, Netflix). There may be only one such
service visible to users, or it might be several distinct applications, but they
should be closely integrated and able to communicate with each other. In this
regard, it will be comparable to the way Google Calendar, Drive, and Gmail all
function as separate apps but also as one integrated platform, simultaneously.
Farmers, food workers, and other community members will access these services
via dedicated mobile apps, browser-based web apps, possibly even remote sensors
or on-board displays in tractors and other vehicles.

### Municipal
As a __municipal__ platform, its user-members will share collective ownership
and control of its services, along with certain responsibilities to maintain and
improve it.[^userdata] How exactly those services and their maintenance are
governed will be up to the user-members collectively, but should adhere to
democratic principles or some sort of consensus procedure. Members will
therefore have to get to know one another, if they don't already, either
remotely or in person. To keep this from becoming too unwieldy or
over-bureaucratized, it will require at least a few 10s of members, perhaps
100s, but ideally not beyond a few 1,000s or at most 10,000s. Ideally all
members will live and work within relatively close proximity to one another, so
that the platform represents a regional demographic, foodshed, or bioregion. In
the absence of geographic closeness, the membership ought to share some other
material interest or concern – beyond the platform itself – to ensure their
long-term commitment to each other's mutual success and well-being.

[^userdata]: Collective ownership and control does not apply to purely
  individualized or personal data, only shared instances of the software running
  as services on collective infrastructure. Each user's data will be theirs and
  theirs alone, until they choose to share it with other members of the
  platform, or with members of the general public; that choice will _always_ be
  theirs. Instances of the software users choose to run independently as
  applications on their own personal devices are also theirs to own and control
  individually. Ownership and control of these running _instances_ of the
  software, whether they're cloud servers or phone apps, are distinct from
  ownership and control of the software itself and its source code, which remain
  parts of the software commons under the GNU Affero General Public License
  v3.0, or AGPLv3.

### Federated
As a __federated__ platform, it will be capable of connecting with other
platforms just like it. With some due diligence, it could even connect to
platforms that are _not_ so much like itself, like standard payment processors
(PayPal, Cash App, Stripe), proprietary sales platforms (e.g., PayPal, Shopify,
Squarespace), or corporate cloud storage services (e.g., iCloud, Dropbox,
Airtable). Perhaps most importantly, this means users aren't restricted from
joining more than one platform, switching between them, or leaving entirely.
Their data can easily follow them with just a simple authorization process,
whenever they choose. In other words, you're not forced to stay put or move to
whatever app holds your data; your data will always come to you. Similarly,
sharing your data doesn't force those you share it with to switch to your
platform or preferred service.

### Political Implications
These terms import a neutral surface-level meaning, which speaks directly to
their function. Granted, other terms could denote more or less the same
functionality, but I chose these three terms purposely because they add further
political connotations I wish to imply as well. I'll make those politics
explicit here because I don't want my intentions to be misconstrued, but feel
free to skip to the next section if you just want get on with the nuts and bolts
of how FMPs work.

The system as a whole borrows heavily from the concept of [platform
cooperatives], popularized by Trebor Scholz and Nathan Schneider among others.
But whereas platform co-ops are often thought of as business platforms
cooperatively owned by individual workers,[^platform-coop] FMPs are intended to
represent a broader base of membership, comprised of workers, consumers,
producers, and other people from the community, with both individual and
institutional members. I expect an FMP to be held together principally on the
strength of its social bonds, and in some cases by an outright political
ideology or agenda. Even multi-stakeholder cooperatives tend to rely more on
shared economic and commercial interests, at least in practice if not in theory.
To be sure, commerce will be a key function of the FMP, and so it risks being
co-opted or "economized" in just the same way as the [7 Cooperative Principles]
can be; however, membership and participation in an FMP should not be predicated
on a person or group entering into a formal professional relationship with other
members, so long as they demonstrate their commitment to the community.

[^platform-coop]: To be clear, Scholz and Schneider _do not_ restrict platform
    co-ops to businesses. Quite the contrary, they have both written extensively
    about – and contributed directly to the establishment of – numerous
    real-world examples of platform co-ops that are owned by their users, like
    [social.coop], in order to share costs and collectively administer the site.
    They do not limit their definition to those platforms that are exclusively
    owned by workers to share profits and manage their own labor and production,
    like [Up&Go], but include many different membership models and even
    multi-stakeholder formations. Still, I've consciously elected not to use the
    term "cooperative" because of the emphasis usually placed on a co-op's
    composition according to membership classes, such as worker-members,
    producer-members, consumer-members, etc. I'm by no means opposed to co-ops,
    but I wanted to put more emphasis on geographical and cultural proximity as
    the basis for its shared interests and commitments; hence, _municipal_
    rather than _cooperative_.

In this respect, FMPs skew a bit closer to the "civic platforms" put forth in
James Muldoon's [_Platform Socialism_]. Muldoon takes inspiration from two
socialist construction projects from the early 20th century, namely G. D. H.
Cole's theory of guild socialism and Otto Neurath's models of economic planning.
A wider membership base, established not only upon commerce but other equally
important social relations, will hopefully afford opportunities for more
civic-minded programs to develop. A common critique of co-ops is that, although
they may promote virtuous behavior _internally_, such as egalitarianism and free
association, they must still contend within the larger realm of
capital-dominated markets, and so _externally_, all the same, successful co-ops
are encouraged to reproduce capitalistic forms of competition, subterfuge, and
oppression. Again, this is why FMPs must seek out a wider base of membership,
even among people who seldom login login to the platform (if ever), but who
still maintain strong social bonds with the rest of the group. This will require
both careful vetting and active recruitment, to some degree, so that those who
might not otherwise be inclined to join a digital platform are still invited to
participate. In the long run, only constant vigilance can fully safeguard
against this and other forms of moral co-optation, but expanding the sphere of
participation can at least mitigate the risk of this form of "co-op co-optation"
specifically.

Ultimately, that's why the FMP is also a municipal or _municipalist_ platform,
in the sense of Murray Bookchin's [libertarian municipalism] or the [New
Municipalism] movement exemplified by groups like _Barcelona En Comú_ and
[Fearless Cities]. As a municipality, it might also echo the far more radical
_Municipios Autónomos Rebeldes Zapatistas_, or MAREZs, which from 1994 to 2023
represented the smallest unit of local self-governance in the autonomous regions
of Chiapas.[^marez]

[^marez]: This last reference to the Zapatistas is a stretch, I admit, but I
    mean it more as an homage than a strict comparison. While I don't equate
    FMPs or Runrig to MAREZs or the EZLN, I would certainly welcome any positive
    associations. The same goes for the Spanish CNT-FAI and the DAANES of
    Rojava, referenced in the following paragraph.

Municipalism should not be mistaken for provincialism, however, which is why the
FMP must be a federated platform, and even a _federalist_ platform. By federated
I mean the technical sense of a _federated server architecture_. Simply put,
that's when servers communicate with other servers as peers, in what can almost
be called a peer-to-peer (P2P) architecture, as opposed to the more conventional
client-server architecture. This is akin to BitTorrent, Apple Airdrop, or even
Bluetooth, but whereas each of those applications are conceived of like clients,
just remade as P2P apps so users can communicate directly with one another –
i.e., without a server relaying messages – federated platforms, on the other
hand, are conceived of like servers remade as peer nodes in a decentralized
network, wherein no single server is distinguished as authoritative over the
others. Typically, they are still thought of as "headless" servers, in that they
don't necessarily take direct user input from any type of graphical interface.
They can also continue to act in the role of a traditional server with other
clients, but those clients are distinct from their federated peers. Federation,
in this sense, is the pattern that gives its name to the [Fediverse], most
famously represented by Mastodon, the alternative social media app, along with
the myriad other [applications] and [services] that support some variant of the
[ActivityPub] protocol.

I say _federalist_ platform, in addition to federated, to imply the long-held
[anarchist sense of federalism]. I would only qualify that I don't especially
have in mind the more "utopian" aspects of federalism, often associated with
mid-19th century thinkers like Pierre-Joseph Proudhon or James Guillaume.
Rather, I would point to much later anarchist projects of the 20th and 21st
century, which certainly developed out of utopian socialism, but which
positioned themselves as explicitly internationalist if not outright
counter-utopianist. Starting at least as early as the Spanish Civil War, the
anarcho-syndicalists of the [CNT-FAI] established federated communes as a part
of their revolutionary fight against fascism, supported by the International
Brigades and a host of left-wing tendencies ranging from libertarian socialists
to Trotskyists. Even more pertinent is the [Democratic Confederalism] of
Abdullah Öcalan, which forms the theoretical and constitutional basis for the
[DAANES] of Northeast Syria, a.k.a. Rojava. Their program is emphatically
internationalist, while also firmly rooted in social ecology and the
municipalist principles of Bookchin, via Öcalan.

Perhaps the closest parallel, encapsulating most (if not all) of what I'm trying
to infer with these terms, is the work already being done by Cooperation Jackson
in Mississippi, for whom Kali Akuno is often a spokesperson. They reject what he
calls "entities that exist to press for benefits within the capitalist system,"
or what I've enumerated here as _economism_ or _utopianism_. Cooperation Jackson
strives to work outside of the capitalist order by adopting a conscientious
strategy of [dual power], which posits an alternative base of socio-economic
power, not as a form of escapism, but as a direct challenge to topple the status
quo. I would recommend that all FMPs endorse the five __Basic Principles of
Class Struggle or Class Conscious Cooperatives__, laid out by Akuno in his [2023
May Day proclamation].

[platform cooperatives]: https://platform.coop
[7 Cooperative Principles]:
    https://ica.coop/en/whats-co-op/co-operative-identity-values-principles
[social.coop]: https://wiki.social.coop/wiki/Main_Page
[Up&Go]: https://colab.coop/work/upandgo/
[_Platform Socialism_]:
    https://www.techwontsave.us/episode/97_envisioning_platform_socialism_w_james_muldoon
[libertarian municipalism]:
    https://social-ecology.org/wp/1999/08/thoughts-on-libertarian-municipalism/
[New Municipalism]:
    https://www.opendemocracy.net/en/can-europe-make-it/which-municipalism-lets-be-choosy/
[Fearless Cities]: https://www.fearlesscities.com/
[anarchist sense of federalism]:
    https://theanarchistlibrary.org/library/what-do-anarchists-mean-by-federalism
[CNT-FAI]: https://libcom.org/tags/federacion-anarquista-iberica-fai
[DAANES]:
    https://rojavainformationcenter.org/2023/12/aanes-social-contract-2023-edition/
[Democratic Confederalism]:
    https://ocalanbooks.com/#/book/democratic-confederalism
[Fediverse]: https://fediverse.info/
[applications]: https://delightful.coding.social/delightful-fediverse-clients/
[services]: https://delightful.coding.social/delightful-fediverse-experience/
[ActivityPub]: https://activitypub.rocks/
[dual power]: https://blacksocialists.us/dual-power-map
[2023 May Day proclamation]:
    https://cooperationjackson.org/announcementsblog/buildingclassconsciouscoops


## A Social Architecture, or Information Ecology

:::warning DRAFT NOTICE

Still a work in progress beyond this point, but a tentative outline:

- One Data Pipeline to Rule Them All!
- The Rest of the Stack
- Governance
- Tech Support

:::

From a technical standpoint, nothing about this architecture is brand spanking
new. Prior art exists in separate examples from federated social media, platform
cooperatives, and digital democracy tools like [Decidem], [Polis], and
[DemocraciaOS]. I'll compare FMPs with existing solutions in greater detail
below, but let it suffice to say that a lack of novelty is not only acknowledged
but intended. What I hope distinguishes FMPs is the combination of these
patterns with an organizing model that will make essential software services
accessible and affordable – specifically for the food and farming communities
that need them most – while also being sustainable for the IT professionals,
like myself, who ultimately design, build, deploy, and maintain those services.

Federated municipal platforms are meant to serve as a _social architecture_,
blending digital and social technologies through a comprehensive approach to
design. In combination, those technologies will be favored that support
distributed forms of power over the tools themselves and the resources they
control. To put it a slightly different way, the FMP is designed to promote a
bottom-up _information ecology_, rather than constructing a top-down information
architecture – once again, putting "ecology over architecture."

[Decidem]: https://decidim.org/
[Polis]: https://pol.is/home
[DemocraciaOS]: https://democraciaos.org/en/

### One Data Pipeline to Rule Them All!
To look at the FMP in terms of the core features users might be interested in,
think of it as a __unified data pipeline__ that can push and pull data to and
from other applications and services.

For example, if a farmer already has an online store that works well for them
and their customers, the FMP won't force them to migrate away from that
platform. Instead, it can help them find additional sales outlets that only adds
to their sales, while automatically updating their catalog or inventory in
multiple stores whenever they update it in their primary store. Or if that's not
their jam, it could integrate their store with another tool for managing on-farm
production and inventory, so that their stock can be incremented when a harvest
activity is recorded or decremented when an order is placed. These could be
configured according to how fully automated they wish the process to be, or if
they prefer to be prompted to approve updates when a change is detected
elsewhere.

How and where the user interfaces with their data is another aspect meant to
provide flexibility. In some cases, an FMP member may never login to a website
or app dedicated to that FMP; they might just continue using integrated
third-party applications and enjoy the benefits of synchronization. On the
opposite end of the spectrum, there could be someone who only wants to login to
their FMP from one site to access a comprehensive dashboard for all of their
data across multiple platforms. Yet another case are FMP members who can't stand
logging in at all and don't use any other tools except email and text messaging;
in that case, the FMP can be configured to send out emails or messages to that
member, while other members can trigger those messages or send them
notifications through the interface of their choosing, like the dashboard or
third-party app. In all of these scenarios, even the member who never logs in,
they will always enjoy the benefit of a persistent store for all their data that
is theirs to individually own and control and that runs on infrastructure that
is communally owned and controlled – that is, the FMP itself. At any later date
they can choose to access, remove, or transfer their data elsewhere, if they
choose to leave or join another platform.

A core tenet of Runrig's methodology is to provide the [glue] that fits together
existing applications, services, and platforms like Lego bricks. I want to
consciously avoid starting a new greenfield project every time the existing
tools could merely stand to be improved somewhat. How that improvement is made –
i.e., how the "glue" gets applied – can play out in various ways. Much of it
will depend on the effort required and issues of technical compatibility. The
process will also vary significantly depending on whether the existing tool is
free & open source software or communal platform, or whether it is a proprietary
application or closed cloud platform.

[glue]: https://en.wikipedia.org/wiki/Glue_code

#### Free Software &#x21D4; FMP: Tackling `wontfix` Issues
When the preexisting tool is free or open source software, this might take the
form of plugin or extension, which might later be contributed back to the
original software as a core feature.

Sometimes a little more effort might be required, where a separate server is
needed to work as an intermediary service that relays and transforms data
between two existing tools, or the existing tool and some new piece of
functionality. This is actually where FMPs can truly excel, because these kinds
of "heavy lifts" are what often get flagged as a `wontfix` issue by more mature
free software projects. That is the tag commonly applied to GitHub issues that
represent some feature request or a minor bug that the project's maintainers
decide is out of scope for the project and so will not be addressed. Sometimes
those issues are pure nuisance – e.g., yet another request to [add group chat] –
but sometimes they're valuable features that fall through the cracks for
small-scale community projects with limited resources. A Runrig middleware that
can run on an FMP could help fill the gap, thereby relieving some of the strain
on more mature projects that lack the bandwidth, while serving a niche concern
that might not have otherwise been addressed. It lifts all boats by essentially
improving the functionality of the ecosystem as a whole, rather than just
directing resources to one isolated project.

In either of these two scenarios, the added functionality can always be
reintegrated into previous tools, or taken up and extended as separate projects
later on, if enough demand exists to support it. As a part of the software
commons, the potential is limitless.

[add group chat]: https://en.wikipedia.org/wiki/Jamie_Zawinski#Zawinski's_Law

#### Proprietary Apps &#x21D4; FMP: Adversarial Interoperability
An FMP is not limited to working exclusively with free and open source software,
but can work with proprietary tools just as well. All that is needed is a public
API that the FMP can connect to in some way. In many cases, this kind of
interoperability is supported or even encouraged, even among Big Tech platforms.
The most straight forward way is through a network request, where the FMP can
call the existing service, request some data, or post an update. Some platforms,
like [Shopify] and [Squarespace], provide developers with official toolkits to
extend the platform's functionality with an app store for plugins and
extensions, which can be made to relay data between services or add integrations
with third-party applications. At the very least, there is typically some
import/export option, which could be automated with a service that could run on
the FMP platform itself.

In cases where the proprietary platform takes a more hostile stance to data
portability, or is willfully neglectful of its own users and the wider developer
community, we can employ what Cory Doctorow has dubbed [adversarial
interoperability]:

> [Adversarial interoperability is] when you create a new product or service
> that plugs into the existing ones without the permission of the companies that
> make them. Think of third-party printer ink, alternative app stores, or
> independent repair shops that use compatible parts from rival manufacturers to
> fix your car or your phone or your tractor.

Whether the tactic employ is one of adversarial interoperability (e.g., via
reverse engineering and web-scraping) or benevolent data portability (e.g., via
plugins and app stores), in either case, the larger strategy should enable a
migration path away from the proprietary platform towards a free software
alternative in the long run. Users shouldn't be forced into that migration, but
they should encouraged. Offering a more gradual migration process should only
help with that encouragement.

The ultimate migration target itself might be a service hosted by the FMP, or it
might be a separate free software platform, like [Open Food Network], with which
the FMP can help establish an automated connection. This strategy goes
hand-in-hand with the previous strategy of extending and improving the overall
ecosystem of free and open source software. It is a slow-and-steady, piecemeal
approach to free software adoption that meets users where they're at, instead of
insisting they switch everything all at once. In the meantime, they can still
enjoy the immediate, practical benefits of free software, which even limited
adoption can afford, while shifting a bit more power away from Big Tech and also
lifting some of the burden off free software platforms like Open Food Network.

[Shopify]: https://apps.shopify.com/
[Squarespace]: https://developers.squarespace.com/
[adversarial interoperability]:
    https://www.eff.org/deeplinks/2019/10/adversarial-interoperability


### Two Other Layers
I want to point out here that FMPs are just one layer in the three-layer system
I envisage for the Runrig system as a whole. FMPs represent perhaps the most
important layer, and they certainly are the most distinct, but there are certain
characteristics of the FMP that are only borne out when considered within this
context. I addressed these in the [initial plan] for Runrig and will return to
the flesh out other two layers in a separate post, but I'll briefly summarize
here the relationship between these layers and their relevant components.

The three layers themselves can be called:

1. Global Data Provider (a.k.a. "One Big Data Union")
2. Federated Municipal Platforms (a.k.a. the "Glue Services")
3. Local-first Applications (a.k.a. "Bring Your Own Client")

In a nutshell, these different layers can help ensure a balance between autonomy
and equity across individual, local, regional, and global scales.

[initial plan]:
    /posts/the-runrig-plan-for-socio-ecological-design.md#three-layers-of-autonomy

#### Global Data Provider
The Data Provider is a global data store of structured, standardized, and
self-describing data. Users can be allotted a portion of that storage, which is
theirs to own and control, whether they wish to keep it private or share it with
other authorized users or share it publicly. This sometimes called a [personal
online data space (PODS)] or [personal data server (PDS)], or they can be
referred to more generally a "pod" or [data space]. The benefit of having
structured data of this sort is that the system for storing it can be entirely
generic, whether it's farm-related data or an online shopping cart or a
collection of restaurant reviews. The data provider can safely host any of these
types of data and, with the data owner's permission, distribute it to a
multitude of different applications for the owner's own use, or the purpose of
sharing with other individuals or services.

This could be tremendously beneficial to FMPs by offloading some of the burden
of storage costs and maintenance, while also offering FMP members with greater
flexibility in how to access, share, and store their data. A good example of
this is a typical document file stored in a standard format, which can be hosted
from a single location but viewed simultaneously from a web browser, a desktop
file system, or a mobile app, all with the option to share the document with
fine-grained permissions regarding who can view, edit, or leave separate
comments.

Data providers of these sorts can be large or small, run by private companies,
non-profit organizations, or governments, and the standards they support can
range from the most generic to varying degrees of specificity. An FMP could
potentially connect to any sort of data provider and wouldn't be limited to just
one, but a global data provider that is collectively owned and controlled – much
like the FMP itself, but with a much wider membership – would of course be
ideal. That would help to distribute costs more equitably at an international
level while creating a massive base for organizing global solidarity efforts.
There are a few existing [legal frameworks] for how to codify such a shared data
system, though I suspect a data trust with some customized provisions for
including both individual members and regional platforms themselves as trustees
would be advisable.

Of course, the implementation of such a massive system would take far greater
time to fully develop than the FMP itself, but some groundwork could be laid by
careful design of the FMPs themselves, with an iterative approach to the
deployment of the global data provider.

[personal online data space (PODS)]:https://solidproject.org/get_a_pod
[personal data server (PDS)]:
    https://atproto.com/guides/glossary#pds-personal-data-server
[data space]: https://internationaldataspaces.org/
[legal frameworks]:
    https://www.adalovelaceinstitute.org/report/legal-mechanisms-data-stewardship/

#### Local-first Applications
If the global data provider represents a larger scope of collective autonomy, in
relationship to the FMP, then local-first applications represent a much smaller,
individualized form of autonomy.

Local-first software is an approach to software design [first postulated in
2019] by a group of researchers at Ink & Switch. There's far more to it, but for
its relevance to FMPs, the most important aspects of local-first software can be
seen as twofold:

1. Both the software and the data are always localized and self-contained on
   each user's personal device, enabling fully offline functionality.
2. Data and functionality can still be shared and synchronized across the
   network for simultaneous, real-time collaboration with peers.

Local-first applications would be ideal access points for FMP members to
interact with their own data. The FMP would function as an "always available"
node for synchronizing across devices and between users. Many of the standards
and protocols used by the global data provider are well-suited to local-first
applications as well. The synergy between the data provider and local-first apps
would offer individuals more freedom to join multiple FMPs, switch between them,
or leave the network entirely.

[first postulated in 2019]: https://www.inkandswitch.com/essay/local-first/

### Governance
After looking at the ways a data provider could be deployed on a global scale to
help diffuse costs, it might be tempting to apply the same rationale to the
applications and services that run on the platform. If one global platform
cooperative could achieve the same benefits, all while retaining collective
ownership and bottom-up control, why go to all the trouble of setting up many,
federated, municipal-level platforms?

But while it may be true that the necessary digital technologies, on their own,
could be scaled to such proportions, the same cannot be said for the
accompanying social technologies.

So much of what I've described so far requires on a tremendous amount of
introspection and agreement between members of a particular FMP. Since the whole
point of the FMP is to give all its members greater sovereignty over their
computing systems and food systems alike, the importance of governance to the
success of the platform cannot be overemphasized.

#### The Costs of Administration & Development
I worry I might oversell what all an FMP can do in practice. Hypothetically, the
number of applications and services it can host are indeed limitless; the way
its features can be augmented or customized can go on forever; and its overall
flexibility is practically infinite. Of course, the first trade-off you'll
encounter in practice is the material cost of the hardware and power that hosts
your FMP, as well as the labor to administer and maintain it, plus whatever
extra development you might want to sponsor for new features, plugins, or other
forms of customization.

Then again, these material costs can be offset by recruiting more FMP members,
in order to distribute and diffuse its total cost. Most of the costs to host,
administer, and maintain the platform will flatten out pretty quickly as the
number of members increases. Where the most variability of costs then comes into
play is the extent to which increasing membership increases the demand for
additional features and customization.

Essentially, it all boils down to an issue of governance, and there's not
one-size-fits-all solution to solve it. Each FMP will need to determine the
scope of what it can do, what kind of economic activities it can cater to, what
aspects of food production and distribution it can manage. Whatever democratic
process the FMP adopts, the more each member's technological needs and wants
overlap with their those of their fellow members, the less development should be
required to meet all members needs and wants equally. Also, by choosing the
operational scope carefully, the costs can be further offset by the ways
non-computing resources can be distributed and shared, such as trucking and cold
storage, in order to lower costs. Similarly, the overall value can increase
through activities like shared marketing.

#### Geographic Boundaries
For all of these reasons, the easiest way to achieve equilibrium will most often
be the establishment of geographical boundaries. After all, the underlying
economic and social dynamics of an autonomous food system should be rooted in
place, as I think most people will recognize intuitively. Geographic proximity
ensures at least some commonality of material needs and wants, in so far as the
same material resources can be brought to bear on a given operation without
incurring further transportation costs. By assigning a geographic boundary, it
can also help avoid more exclusionary methods of limiting membership, based upon
a member's socioeconomic status or upon the self-selecting tendencies that can
emerge within a closed sphere of cultural identity.

How and where the geographic boundaries are determined, however, will still
depend heavily upon the specific context. So again, there's no one-size-fits-all
solution here, but it can at least provide a useful starting point.

#### Resource Sharing
The main issue of FMP governance – excluding other policies that regard the
community but do not require specific changes to how the platform operates –
will be in deciding what software it will provide and how to pay for it.

Such decisions may include:

- Structuring monthly or annual hosting fees among members to pay for the
  platform's servers and other core utilities.
- Allocating funds to sponsor new features, plugins, or platform customizations.
- Hiring technical assistance providers to support members remotely or on-site.
- Raising additional funds to expand capacity through a dues paying system,
  public or private grants, crowdfunding initiatives, percentage-based service
  fees for online sales or other transactions, etc.
- Electing platform members to act as community stewards or moderators, to form
  working groups, or form governing councils.
- Equitable reapportionment of resources through sliding scale programs, CSA
  solidarity shares, discounted hosting fees for members, etc.

There are too many governance models, funding options, and tools to address
here, and I think a wide range of latitude should be given to FMPs to decide
what works best for them and when to reassess their governing model.
Nevertheless, there are three resources I would at least recommend consulting:

- __[Enspiral]:__ This cooperative from Aotearoa, New Zealand develops [Loomio],
  free and open source software for online voting, proposal submissions,
  transparency, and more. They also make the participatory budgeting tool,
  [Cobudget], and publish their [Enspiral Handbook] for others to learn from
  their experience as a cooperative and a self-governing community.
- __[Community Rule]:__ A beautifully designed "governance toolkit" by Nathan
  Schneider. You can start with a [rule template] – e.g., Do-ocracy, Consensus,
  Elected Board, or Benevolent Dictator – or mix-and-match [rules from the
  library], then publish and share your own unique set of rules. There's also a
  PDF version of the [Community Rule book] that you can print and share for
  free. It can be helpful to look at the different configurations as an ongoing
  decision process, where communities continue to grow, shrink, change, reflect,
  always evolve, and periodically reset.
- __[Tyranny of Structurelessness]:__ The classic essay by Jo Freeman, first
  published in 1971. Based on her experience in the women's liberation movement,
  Freeman argues for the adoption of _explicit_ governing structures, even when
  in radically decentralized or horizontalized groups, because otherwise
  _implicit_ governing structures tend to form, with or without anyone's
  intention. Unspoken hierarchies of that sort can be especially difficult to
  address once they've formed, can lead to internal strife, and wind up
  perpetuating many of the inequities such "structureless" groups claim to
  oppose.

Voting tools – including but not limited to the ones that Enspiral offers –
could also be hosted on the FMP, although in many cases that probably won't be
necessary.

[Enspiral]: https://www.enspiral.com/
[Loomio]: https://www.loomio.com/
[Cobudget]: https://cobudget.com/
[Enspiral Handbook]: https://handbook.enspiral.com/
[Community Rule]: https://communityrule.info/
[rule template]: https://communityrule.info/templates/
[rules from the library]: https://communityrule.info/library/
[Community Rule book]: https://communityrule.info/book/
[Tyranny of Structurelessness]: https://www.jofreeman.com/joreen/tyranny.htm

#### Jo Freeman's Seven Principles of Democratic Structuring
I encourage anyone who hasn't already to read the aforementioned [Jo Freeman
essay] in its entirety. I want to highlight for now, however, the 7 principles
for "democratic structuring," which conclude her essay and which I've
paraphrased below. Without prescribing a specific governance model, they address
what I think are fundamental characteristics of a practical, _functioning_
democracy, regardless the group's size or political persuasion.

1. __Delegation of Specific Authority:__ The group selects members to be granted
   the authority to perform specific tasks on behalf of the group, instead of
   people self-selecting.
2. __Accountability of Delegates:__ Once selected, delegates are held
   accountable to the group to exercise that authority as the group determines,
   not the delegate.
3. __Sufficient Distribution of Authority:__ Delegate tasks to as many group
   members as it is reasonable, so authority is exercised through consultation
   with others, and so more people have a chance how to learn how to perform
   those tasks.
4. __Periodic Rotation of Authority:__ Delegates should be responsible for a
   task long enough to gain competence and satisfaction from its performance,
   but not so long that they become possessive or unwilling to relinquish
   responsibility.
5. __Rational Allocation of Authority:__ Ability, interest, and reliability with
   regard to the specific task should be the main criteria for selecting
   delegates, not popularity. Group members can learn new skills by apprenticing
   with a delegate, but not being thrust into the delegate position alone.
6. __Equal Diffusion of Information:__ Information should be spread to everyone
   equally and frequently through proper group channels, not the rumor mill.
7. __Equal Access to Resources:__ Equipment, information, and skills that the
   group needs to function should be shared equally among members. If full
   equality of access is not practical to achieve from the start, then members
   must be willing to teach, learn, and share whatever they can so they may
   fully realize it eventually.

[Jo Freeman essay]: https://www.jofreeman.com/joreen/tyranny.htm

### Technical Support

:::warning DRAFT NOTICE

- Tech team are not members, just hired support
  - ...unless they're also from community
- Community can fire the support team, hire another service provider
  - Likewise, the support team can fire the community as its client
  - ...so be nice to each other! 🙂
- More than just coding/hosting:
  - On-call help desk for remote support
  - Technical Assistance Providers (TAP) for on-site support
  - Trusted advisors, consultants, and educators
  - Facilitators of participatory design projects initiated by the community

:::

