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


## Social Architecture

:::warning DRAFT NOTICE

Still a work in progress beyond this point, but a tentative outline:

- One Data Pipeline to Rule Them All!
- The Rest of the Stack
- Governance
- Tech Support

:::

From a strictly technical standpoint, not a lot about this architecture is brand
spanking new. Examples abound for each of the three architectural patterns
above. Many of them have a long history of success, even if they still may be
considered untried in the realm of so-called "enterprise" software. I'll compare
FMPs with the prior art in greater detail below, but let it suffice to say that
a lack of novelty is not only acknowledged but intended. A core tenet of
Runrig's methodology is to provide the [glue] that patches together existing
applications, services, and platforms, not to start a new greenfield project
every time the existing solutions could stand to be slightly improved.

What I hope distinguishes FMPs is the combination of these three patterns with a
methodology and an organizing model for making every service that FMPs provides
affordable and accessible to the communities who need them most, while also
being sustainable for the IT professional needed to design, build, deploy, and
maintain those services.

[glue]: https://en.wikipedia.org/wiki/Glue_code

### One Data Pipeline to Rule Them All!

:::warning DRAFT NOTICE

- a.k.a. universal gateway, interface, or switchboard (a la Greg @ Our Sci)
- A default UI, if no other client app exists for some or all of the data
  - ...or a simplified UI for members who don't need the full power of the
    standard GUI that other members or admins need access to
  - e.g., so maybe a farmer or driver doesn't want the full CSA dashboard,
    just wants to check an inbox or notifications tab for order confirmations
- Can link or route members to external services
  - ...or wrap all internal/external services in a consistent UI shared by all
- Middleware, "glue" services, `wontfix` issues
- Single Sign-On (SSO)
- Data Independence

:::


### Three Layers of Autonomy

:::warning DRAFT NOTICE

- Data Provider
- Federated Municipal Platforms
- Client Apps

:::


### Governance

:::warning DRAFT NOTICE

- Sweet-spot membership total, a la Dunbar's number
- Platform members don't have to be tech savvy to know what tools they want
- If platform is used for commerce, revenue can be "taxed" in order to...
  - pay recurring costs for hosting etc
  - sponsor feature dev & other platform improvements
  - fund community stewards, moderators, working groups, gov councils, etc.
  - stipends to enable political participation from disadvantaged groups
  - redistribute wealth thru solidarity shares, sliding scale programs, etc.
- Platform members own it, not the IT support workers

:::


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

