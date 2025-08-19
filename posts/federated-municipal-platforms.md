---
title: Federated Municipal Platforms
subtitle: A fundamental design pattern
description: A description.
author: Jamie Gaehring
date: 2025-08-26
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
or whatever database happens to be the latest fad. I don't mean to eschew the
notion of architecture altogether; it just shouldn't represent a hard boundary,
demarcating the totality of the design space. Architecture must yield to the
greater ecology the system, which knows no bounds, and so become less
determinate, less mechanistic, more permeable. Good architecture must be able
and willing to float.

Federated municipal platforms are intended to be one such architectural pattern,
one that will play a central role in many of the systems I hope to build with
Runrig.

## Some Definitions
In brief, a __federated municipal platform__, or __FMP__, is a communally owned
and controlled digital platform for a regional foodshed or bioregion to manage
its own land, resources, and labor according to its own needs. It can be a host
for multiple, [_libre_] software applications and services, ranging from
agricultural software like [farmOS] or the delivery app [CoopCycle], to generic
productivity apps like [Etherpad] or [Grist]. It all depends on what its
community of users decide. An FMP can also run headless bridge services, or
"webhooks," that integrates its users' data and work flows with other
community-based platforms, such as the [Open Food Network] and [GrownBy], or
with proprietary platforms like Shopify. That way users don't have to double- or
triple-enter data every time their product catalog is updated. Naturally, an FMP
can also "federate" with other FMPs, affording even more thorough integration
and promoting collaboration between dispersed or divergent communities.

A federated municipal platform can be defined in a bit more detail by reference
to its three constituent terms, working backwards from the last:

- As a __platform__, it will host a suite of software applications and network
  services, like so many of the "cloud" platforms we already interact with every
  day (e.g., Amazon, Facebook, Airbnb, Netflix). There may be only one such
  service visible to users, or it might be several distinct applications, but
  they should be closely integrated and able to communicate with each other. In
  this regard, it will be comparable to the way Google Calendar, Drive, and
  Gmail all function as separate apps but also as one integrated platform,
  simultaneously. Farmers, food workers, and other community members will access
  these services via dedicated mobile apps, browser-based web apps, possibly
  even remote sensors or on-board displays in tractors and other vehicles.

- As a __municipal__ platform, its user-members will share collective ownership
  and control of its services, along with certain responsibilities to maintain
  and improve it.[^userdata] How exactly those services and their maintenance
  are governed will be up to the user-members collectively, but should adhere to
  democratic principles or some sort of consensus procedure. Members will
  therefore have to get to know one another other, if they don't already, either
  remotely or in person. To keep this from becoming too unwieldy or
  over-bureaucratized, it will require at least a few 10s of members, perhaps
  100s, but ideally not beyond a few 1,000s or at most 10,000s. Ideally all
  members will live and work within relatively close proximity to one another,
  so that the platform represents a regional demographic, foodshed, or
  bioregion. In the absence of geographic closeness, the membership ought to
  share some other material interest or concern – beyond the platform itself –
  to ensure their long-term commitment to each other's mutual success and
  well-being.

- As a __federated__ platform, it will be capable of connecting with other
  platforms just like it. With some due diligence, it could even connect to
  platforms that are _not_ so like itself, such as traditional payment and
  e-commerce platforms (e.g., Shopify, Squarespace, PayPal) or corporate cloud
  storage services (e.g., iCloud, Dropbox, Airtable). Perhaps most importantly,
  this means users aren't restricted from joining more than one platform,
  switching between them, or leaving entirely. Their data can easily follow them
  with just a simple authorization process, whenever they choose. In other
  words, you're not forced to stay put or move to whatever app holds your data;
  your data will always come to you. Similarly, sharing your data doesn't force
  those you share it with to switch to your platform or preferred service.

With Runrig, I plan to work mostly within food and agricultural communities, so
I've defined the FMP in familiar terms like "foodshed" and "farmers." There's
nothing about this architecture, however, that couldn't be applied to more
generic community groups or for different types of activity.

[^userdata]: Collective ownership and control does not apply to purely
  individual data, only the services and maintenance of those services. Each
  user's data will always be theirs and theirs alone, to share with only certain
  other members or the public or to keep it private, however they so choose.
  This applies on the organizational level, too, although some internal
  democratization would be encouraged and possibly facilitated by the platform.

[_libre_]: https://www.gnu.org/philosophy/free-sw.html
[farmOS]: https://farmos.org/
[CoopCycle]: https://coopcycle.org/
[Etherpad]: https://etherpad.org/
[Grist]: https://www.getgrist.com/
[Open Food Network]: https://openfoodnetwork.org/
[GrownBy]: https://grownby.com/

### Political Implications
These terms import a neutral surface-level meaning that speaks directly to their
function, which could be stated other ways, granted, but I chose these terms
purposely because they add further political connotations. I'll spell those out
here because I don't want the point to be confused, but feel free to skip to the
next section if you just want get on with the nuts and bolts of how FMPs work.

The system as a whole borrows heavily from the concept of [platform
cooperatives], popularized by Trebor Scholz and Nathan Schneider among others.
But whereas platform co-ops are typically businesses, cooperatively owned by
individual workers, FMPs are intended to represent a broader base of membership,
comprised of workers, consumers, producers, and other people from the community,
with both individual and institutional members. I expect an FMP to be held
together principally on the strength of its social bonds, if not an outright
political ideology or agenda. Even multi-stakeholder cooperatives tend to rely
more on shared economic and commercial interests, at least in practice if not in
theory. To be sure, commerce will be a key function of the FMP, and so it risks
being "economized" in just the same way as the [7 Cooperative Principles];
however, membership and participation in an FMP should not be predicated on a
person or group entering into a formal professional relationship with other
members, so long as they demonstrate their commitment to the community.

In this respect, FMPs skew a bit closer to the "civic platforms" put forth in
James Muldoon's [_Platform Socialism_]. Muldoon takes inspiration from two
socialist construction projects from the early 20th century, namely G. D. H.
Cole's theory of guild socialism and Otto Neurath's models of economic planning.
A wider membership base, established not only upon commerce but also strong
social ties, will hopefully afford opportunities for more civic-minded programs
to develop. A common critique of co-ops is that, while they may foster
egalitarianism _internally_, they still must compete in capital-dominated
markets, and so successful co-ops tend to reproduce capitalistic forms of
oppression _externally_. If a wider membership base can be encouraged, even
among people who seldom if ever login to the platform but still maintain social
relations with the rest of the group, I believe that can go a long ways to
mitigate the risk of "co-op co-optation."

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
I mean the technical sense of a _federated server architecture_. That's when
servers communicate with other servers as peers, in a peer-to-peer (P2P)
architecture, as opposed to the more conventional client-server architecture,
where one end of the exchange is designated as the client (even if that "client"
is just another server, at least in another context). Federation is the pattern
that gives its name to the [Fediverse], most famously represented by Mastodon,
the alternative social media app, along with the myriad other [applications] and
[services] that support some variant of the [ActivityPub] protocol.

By _federalist_ platform, I mean the long-held [anarchist sense of federalism],
although not so much the utopian aspects often associated with mid-19th century
thinkers like Proudhon and Guillaume. Rather, I would point to the later
anarchist projects of the 20th and 21st century, which certainly developed out
of utopian federalism but took an explicitly internationalist, counter-utopian
stance. Starting at least as early as the Spanish Civil War, the
anarcho-syndicalists of the [CNT-FAI] established federated communes as a part
of their revolutionary fight against fascism, supported by the International
Brigades and a host of left-wing tendencies ranging from libertarian socialists
to Trotskyists. Even more pertinent is the [Democratic Confederalism] of
Abdullah Öcalan, which forms the theoretical and constitutional basis for the
[DAANES] of Northeast Syria, a.k.a. Rojava. Their program is emphatically
internationalist, while also firmly rooted in social ecology and the
municipalist principles of Bookchin, via Öcalan.

[platform cooperatives]: https://platform.coop
[7 Cooperative Principles]:
    https://ica.coop/en/whats-co-op/co-operative-identity-values-principles
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


## How It Works

:::warning NOTICE

Still in draft.

:::


### Prior Art
- Bonfire
- social.coop
- May First
- Coop Cycle
- Open Food Network & DFC / FDC
- Sandstorm
- Inrupt
- Bluesky / ATProto


### Municipal Platform Services
- Multi-tenant farmOS
- Multi-user/-farm POD service
- Bridge to OFN-USA
- Bridge to GrownBy
- Grist
- NocoDB
- Brinjel
- Farm Flow Board
- CoopCycle
- Rootable


### Municipal Group Users
- Food Hubs/Co-ops
- Community Ctr's & Food Councils
- Mutual Aid / Food Rescue
- CSA & Buying Clubs
- Wholesale, Distribution & Logistics
- Restaurants & Grocers
- Restaurant Workers
- Food Delivery Workers
- Farm Owners, Managers, & Workers
- Community Gardens


## Some Practical Examples

:::warning NOTICE

Still in draft.

:::

#### Example: NYC, Hudson Valley, and Tri-state Region

- Food Hubs / Co-ops
  - Bushwick Food Co-op
  - Brooklyn Supported Agriculture
- Community Ctr's & Food Councils
  - East Flatbush Group?
  - Group in Harlem Tianna connected me with
  - Sixth St Community Ctr
  - Chester Agricultural Ctr
  - May Day Space
  - Woodbine
- Mutual Aid / Food Rescue
  - Bushwick Ayuda Mutua
  - Woodbine
  - Ridgewood Presbyterian
  - Covenant Lutheran Church
  - In Our Hearts NYC (@iohnyc)
  - Food Fight Brooklyn (@foodfightbk)
  - Bed-Stuy Food Not Bombs
- CSA & Buyers Club
  - Woodbine
  - 607 CSA
  - Green Ave Buyers Club
  - Rocksteady
  - ...
- Wholesale Food Distro & Logistics
  - Brooklyn Packers
  - Catskills Agrarian Alliance
  - Baldor
  - Tay Shing Corp
  - Choy Commons
- Restaurants & Grocers
  - Burrito Republic
  - Ridgewood Taco
  - Good Neighbor
  - Valentinos
  - Europa
- Restaurant & Delivery Workers
  - FIG-NYC
  - Los Deliveristas Unidos
  - El Hormiguero
- Farm Owners, Managers, & Workers
  - Rocksteady
  - Norwich
  - Rise & Root
  - ...
- Community Gardens
  - Miryam's
  - Catherine Shadoud
  - Sunset Garden
  - Sparrow's Nest (Corona)
  - Powell St Garden (Brownsville)
  - Hattie Carthan
  - La Plaza Cultural


## Back to Ecology

:::warning NOTICE

Still in draft.

:::


### Main Legal Entities Constituting the Runrig System (from [`/ecology`])
1. A __data cooperative__ or __data trust__, likely incorporated as a
   non-profit, whose members are users of the global data provider. They can
   join through a service platform authorized to provision that storage on the
   user's behalf, or by directly provisioning space on the data provider
   themselves. The data coop will have legal custody of the data provider's main
   servers, but may contract the administration and maintenance of those servers
   to the worker coop (described in #2 below). It may also hold the licenses to
   Runrig's core software modules, trademarks, etc., though that could also be
   delegated to a conservancy, such as the Software Freedom Conservancy or the
   Commons Conservancy.
2. A __worker cooperative__ of engineers, designers and system administrators,
   responsible for the main data provider and core services, under contract to
   the data cooperative. It is also responsible for maintaining the free
   libraries, API's and other integrations used by the service platforms,
   possibly even the application software they use. They are also available on
   contract to develop custom, sponsored software at the request of one or
   several service platforms (ideally those solutions will nevertheless be
   contributed back to the commons and made free to all, not just the sponsoring
   platform). Hosting and other backend services could also be provided to the
   service platforms at preferred rates. In the beginning this may be more
   loosely structured as more of a freelancer's coop, while there may not be
   much in the way of significant revenues to sustain fulltime worker-owners.
3. __Service platform cooperatives__, situated in regional foodsheds and serving
   more localized needs, which may vary widely in scope, purpose and membership.
   The specifics will be more up to the constituents of those platforms
   themselves, but there should be some criteria for what platforms are
   permitted to join the data provider and provision storage on behalf of its
   users. It is conceivable that they need not be a cooperative, strictly
   speaking, but it may be desireable place some restrictions on non-cooperative
   for-profit business, while also including some kind of statement of shared
   values in any agreements, and possibly provide discounts or other incentives
   to coops and non-profits.

### Membership Classes (from [`/ecology`])
1. __Data Members:__ Individuals, farms, collectives or traditional companies
   who have some amount of their own data stored on the data provider, via a
   service platform(s) or with a direct membership account. The set of data
   members should be coterminous with the set of storage user accounts.
2. __Service Members:__ Platform coops and other service platforms who can join
   the data cooperative with the right to broker agreements with data members
   and provision storage for them on the data provider, granting them status of
   data members in the process. Note that service membership is distinct from
   any form of membership that entities might hold with a service platform
   itself, for those platforms which confer any form of membership status; such
   status is managed by the platforms and not with the purview of the Runrig
   system. It may be possible, however, for an entity to hold dual membership as
   both a service member and a data member. if a service member wishes to have
   storage on the data provider, separate from its constituent userss.
3. __Worker Members:__ Engineers, designers, etc who develop and maintain the
   software and underlying infrastructure. Unlike the other membership classes,
   these are members of separate worker cooperative, not the data cooperative.
4. __Community Members:__ Trusted supporters and advisors from the community,
   who may wish to participate in member assemblies and activities, but no
   voting rights or other privileges, so more symbolic than anything else.

### Service-level Agreements (from [`/ecology`])
All of this necessitates that care is taken when drafting the terms of service
and other service-level agreements, both between storage providers and regional
platforms, and between regional platforms and individual users.

#### Transferral of Rights & Responsibilities (from [`/ecology`])
There are some potential issues when it comes to how storage and access rights,
payment accounts and other privileges and obligations can be transferred between
parties of various membership classes.

For instance, let's say a user joins the data coop through a service platform
that pays a significant amount for that user's storage space and access on the
data provider (for instance, for hi-res satellite imagery or other large media
files). What happens when the user decides to leave the service platform?

There are many ways to go about this, but some possible options that could be
given to the user at that time:

- Export and delete their data from the data provider.
- Transfer of payment authorization to another service or to the data coop
  itself, which could continue billing the user without any interruption of
  service or costly migrations.
- Offer free storage and access of their data in exchange for contributing it to
  the public domain, or participating in an anonymized public research project,
  with costs to the data coop offset by relevant research funding.
- Set up an application for "solidarity credits" to host a certain storage limit
  for a given period of time for reduced cost or free of charge.


[`/ecology`]: /posts/the-runrig-plan-appendix-ecology.md

### Three Layers of Autonomy (from `/about` WIP)
I think I need to re-evaluate whether the "data provider / service platform /
applications" paradigm still maps onto these other concepts. It's not so much
about the physical data provider, nor about the particular apps or services. The
boundaries between all three components can become quite fluid in practice, just
like any one person might fill multiple roles or member classes.

But there is a concept of federating the individual with the local with the
global that runs through everything. It applies equally in terms of data,
services, physical resources, and people, even where the boundaries between them
becomes blurry.

That's the thing: _a topology of federated autonomy & interdependence_.

|                | Individual       | Local              | Global              |
| -------------- | ---------------- | ------------------ | ------------------- |
| Runrig Slogan  | _libre_ software | design methodology | food & tech commons |
| Biz Model      | feat. dev. gigs  | web platform shop  | "1 Big Data Union"  |
| Legal Entities | tech consultancy | municipal platform | data trust          |
| Member Classes | data members     | service members    | worker members      |
| Tech Stack     | apps & plugins   | service platform   | data provider       |

It's nothing new, but still a minor revelation to see the way the Legal Entities
row and the Member Classes row are basically flipped in the way they correspond
to each other. The tech consultant would ideally be a co-operative, but can
still be an individual, like I am right now, as a worker member of a co-op, my
job could have an impact globally. That's just my subjective choice of how to
model it, I guess, but it still seems like a valuable insight. I guess it's
really about the way the data members, as individual users, are the most
granular class for joining the One "Big Data Union" or data trust, which by its
nature is global.

I'm tempted to add the physical, logical, and conceptual layers of data
independence in there too somehow, but that seems like too far a stretch for a
metaphor stretched thin enough as it is. Besides, I don't really understand them
well enough anyways. I do feel, however, like there's some kind of connection.

## ~~scratch~~
This is meant to reflect a preference for organic structures of computation and
interface design that enable active collaboration throughout the evolution of a
software system between users, engineers, designers, as well as other software
projects, adjacent communities, and non-users who may still interact with the
tools, so that they tools to their needs, as opposed to more mechanistic,
hierarchical, 


It is a __platform__ like many of the digital platforms we use today, such as Amazon, Facebook, Airbnb, or Netflix.

It is __municipalist__ in the specialized sense of Murray Bookchin's _libertarian municipalism_ or the _New Municipalism_ movements to arise in the last few decades in Catalonia, Bologna


> Men, in their struggle with Nature (i.e. in their struggle for freedom) enter
> into certain relations with each other to win that freedom. But men cannot
> change Nature without changing themselves. The full understanding of this
> mutual interpenetration of reflexive movement of men and Nature, mediated by
> the necessary and developing relations known as society, is the recognition of
> necessity, not only in Nature but in ourselves and therefore society. Viewed
> objectively this active subject-object relation is science, viewed
> subjectively it is art; but as consciousness emerging in active union with
> practice it is simply concrete living — the whole process of working, feeling,
> thinking and behaving like a human individual in one world of individuals and
> Nature.
> 
> — Christopher Caudwell, _Illusion & Reality_ (1937)

