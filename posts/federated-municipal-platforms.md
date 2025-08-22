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
for multiple, [liberatory] software applications and services, ranging from
agricultural software like [farmOS] or a delivery app [CoopCycle], to generic
productivity apps like [Etherpad] or [Grist]. It all depends on what its
community of users decide. An FMP can also run headless bridge services, or
"webhooks," that integrates its users' data and work flows with other
community-based platforms, such as the [Open Food Network], or with proprietary
platforms like Shopify. That way users don't have to double- or triple-enter
data every time their product catalog is updated. Naturally, an FMP can also
"federate" with other FMPs to afford even more seamless integration with its
neighbors and promote collaboration between dispersed or divergent communities.

[farmOS]: https://farmos.org/
[CoopCycle]: https://coopcycle.org/
[Etherpad]: https://etherpad.org/
[Grist]: https://www.getgrist.com/
[Open Food Network]: https://openfoodnetwork.org/

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
  democratic principles or consensus procedures. Members will therefore have to
  get to know one another other, if they don't already, either remotely or in
  person. To keep this from becoming too unwieldy or over-bureaucratized, it
  will require at least a few 10s of members, perhaps 100s, but ideally not
  beyond a few 1,000s or at most 10,000s. Ideally all members will live and work
  within relatively close proximity to one another, so that the platform
  represents a regional demographic, foodshed, or bioregion. In the absence of
  geographic closeness, the membership ought to share some other material
  interest or concern – beyond the platform itself – to ensure their long-term
  commitment to each other's mutual success and well-being.

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

### Political Implications
These terms import a neutral surface-level meaning that speaks directly to their
functional definitions, but I chose them deliberately because they carry further
implications, deriving from a pointedly political context. I spell these out
here because I don't want the point to be confused, but feel free to skip to the
next section if you just want get on with the nuts and bolts of how FMPs work.

The system as a whole borrows heavily from the concept of [platform
cooperatives], popularized by Trebor Scholz and Nathan Schneider in their book
[_Ours to Hack and to Own: The Rise of Platform Cooperativism_]. But whereas
platform co-ops are typically businesses, cooperatively owned by individual
workers, FMPs are intended to represent a broader base of membership, comprised
of workers, consumers, producers, and others people from the community, with
both individual and institutional members. I expect an FMP to be held together
principally on the strength of its social bonds, if not an outright political
agenda. Even multi-stakeholder cooperatives tend to rely more on shared economic
and commercial interests, at least in practice if not in theory. To be sure,
commerce will be a key function of the FMP, and so it risks being "economized"
in just the same way as the [7 Cooperative Principles]; however, membership and
participation in an FMP should not be predicated on a person or group entering
into a formal professional relationship with other members, so long as they
demonstrate their commitment to the community.

In this respect, FMPs skew a bit closer to the "civic platforms" put forth in
James Muldoon's [_Platform Socialism_]. Muldoon takes inspiration from two
socialist construction projects from the early 20th century, namely G. D. H.
Cole's theory of guild socialism and Otto Neurath's model for economic planning.
A wider membership base, established not only upon economic but also social and
political relations, will hopefully afford more opportunities for more
civic-minded programs of development. A common critique of co-ops is that, while
they may foster egalitarianism internally, successful ones must still compete in
capital-dominated markets, and so they tend to reproduce capitalist forms of
oppression externally.  If a wider membership base can be encouraged, even among
people who seldom if ever login to the platform, my hope is that can go a long
ways to mitigate the risk of co-op co-optation. It should go without saying that
FMP are intended to take an explicitly adversarial stance to [platform
capitalism], with the ultimate aim being the demise of capitalism as a whole.

Ultimately, that's why the FMP is also a _municipalist_ platform, in the sense
of Murray Bookchin's [libertarian municipalism] and more recent [municipalist
projects] such as [Barcelona En Comú]. As a municipality, it might also echo the
far more radical [Municipios Autónomos Rebeldes Zapatistas], or MAREZs, which
from 1994 to 2023 represented the smallest unit of local self-governance in the
autonomous regions of Chiapas.[^marez]

[^marez]: This last reference to the Zapatistas is a stretch, I admit, but I
    mean it more as an homage than a strict comparison. While I don't equate
    FMPs or Runrig to MAREZs or the EZLN, I would certainly welcome any positive
    associations. The same goes for the Spanish CNT-FAI and the DAANES of
    Rojava, referenced in the following paragraph.

Municipalism should not be mistaken for provincialism, however, which is why the
FMP must also be a federated or even _federalist_ platform, in the sense of
[the long-held anarchist principle], although it should more closely resemble
the explicitly internationalist projects that have developed out of that
tradition. These range from the syndicalist [CNT-FAI] project of federalized
communes during the Spanish Revolution to the [Democratic Autonomous
Administration of North and East Syria] (DAANES, a.k.a. Rojava), inspired by
Abdullah Öcalan's program of [Democratic Confederalism]. Of course, all this
should complement the technical sense of a _federated server architecture_. This
pattern has come to give its name to the [Fediverse], most famously represented
by the alternative social media application, [Mastodon], and the [myriad others]
that support some variant of the [ActivityPub] protocol.

[liberatory]: https://www.gnu.org/philosophy/free-sw.html
[platform cooperatives]: https://platform.coop
[_Ours to Hack and to Own: The Rise of Platform Cooperativism_]:
    https://nathanschneider.info/books/ours-to-hack/
[7 Cooperative Principles]: https://ica.coop/en/whats-co-op/co-operative-identity-values-principles
[_Platform Socialism_]:
    https://www.techwontsave.us/episode/97_envisioning_platform_socialism_w_james_muldoon
[platform capitalism]:
    https://blogs.lse.ac.uk/lsereviewofbooks/2017/02/24/lse-lit-fest-2017-platform-capitalism-by-nick-srnicek/
[municipalist]:
    https://www.opendemocracy.net/en/can-europe-make-it/which-municipalism-lets-be-choosy/
[libertarian municipalism]:
    https://social-ecology.org/wp/1999/08/thoughts-on-libertarian-municipalism/
[municipalist projects]:
    https://www.opendemocracy.net/en/can-europe-make-it/which-municipalism-lets-be-choosy/
[Barcelona En Comú]: https://barcelonaencomu.cat/
[Municipios Autónomos Rebeldes Zapatistas]:
    https://es.wikipedia.org/wiki/Municipios_Aut%C3%B3nomos_Rebeldes_Zapatistas
[the long-held anarchist principle]:
    https://theanarchistlibrary.org/library/what-do-anarchists-mean-by-federalism
[Pierre-Joseph Proudhon]:
    https://theanarchistlibrary.org/library/pierre-joseph-proudhon-the-principle-of-federation
[CNT-FAI]: https://libcom.org/tags/federacion-anarquista-iberica-fai
[Democratic Autonomous Administration of North and East Syria]:
    https://rojavainformationcenter.org/2023/12/aanes-social-contract-2023-edition/
[Democratic Confederalism]:
    https://ocalanbooks.com/#/book/democratic-confederalism
[Fediverse]: https://fediverse.info/
[Mastodon]: https://joinmastodon.org/
[myriad others]: https://delightful.coding.social/delightful-fediverse-clients/
[ActivityPub]: https://activitypub.rocks/
