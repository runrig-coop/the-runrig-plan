---
title: Federated Municipal Platforms
subtitle: A fundamental design pattern
description: A federated municipal platform, or FMP, is a communally owned &
    controlled digital platform, enabling a regional foodshed or bioregion to
    manage its own land, resources, and labor according to its own needs. It can
    host a range of free software applications & services, from dedicated food &
    agricultural software to generic productivity apps, all determined by a
    local municipality of users. As a federated platform, it can simultaneously
    cooperate with other community-based platforms to share resources and
    contribute to global solidarity efforts.
author: Jamie Gaehring
date: 2025-10-09
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
greater ecology of the system, which knows no bounds; so it must become less
determinate, less mechanistic, more permeable; good architecture must be able to
float.

The __federated municipal platform__ is intended to be one such architectural
pattern, one that will play a central role in many of the systems I hope to
build with Runrig.

## A Note to the Reader
This article should serve primarily as a design document, and so the reader is
encouraged to move between various top-level sections of the page to their
specific areas of interest. My hope is you'll be able to get a concise overview
of the architecture even if you only read the first section of definitions,
although without reading further, you may not be convinced of its benefits nor
fully apprised of the means by which it aims to achieve them. Hopefully those
details will emerge and convince you the further you go.

The document is intended for a general audience, so that a thorough-going
knowledge of food sovereignty, software design, or political theory is not
strictly required. Footnotes will sometimes offer helpful background for
beginners on concepts like server federation, or alternately, they may provide
technical details that may only appeal to specialists; hopefully the difference
will be readily apparent.

## Some Definitions
In brief, a federated municipal platform, or __FMP__, is a communally owned and
controlled digital platform, enabling a regional foodshed or bioregion to manage
its own land, resources, and labor according to its own needs.[^food] It can
host a range of free (or [_libre_]) software applications and services, from
dedicated food and agricultural software like [farmOS], [CORE-POS], or
[CoopCycle], to generic productivity apps like [Etherpad], [Nextcloud], [Grist],
all of which will be determined by a local municipality of users. As a federated
platform, it can join a network of FMPs, or similarly community-based
platforms,such as the [Open Food Network] and [GrownBy]. Within this cooperative
network, platform members can then exchange local knowledge and resources with
like-minded people in distant food communities, and contribute to global
solidarity efforts, all without corporate intermediaries and rent-seekers.
Webhooks or bridge services can still automate communications with proprietary
platforms, like Shopify or Stripe, so that users don't have to double- or
triple-enter information every time their product catalog is updated or
inventories rise and fall. Critically, however, even in such cases when FMPs may
interact with external, proprietary systems like corporate clouds, the data
still originates with the community that produces it, and thus it always remains
under their complete control.

[^food]: With Runrig, I plan to work mostly within food and agricultural
    communities, so I've defined the FMP in familiar terms like "foodshed" and
    "farmers." There's nothing about this architecture, however, that couldn't
    be applied to more generic community groups or for different types of
    economic or social activity.

To illustrate its finer details, a federated municipal platform can be dissected
into its three constituent terms, then inspected more closely by defining what
it means to be a _platform_, to be _municipal_, and to be _federated_.

[_libre_]: https://www.gnu.org/philosophy/free-sw.html
[farmOS]: https://farmos.org/
[CORE-POS]: https://www.core-pos.com/
[CoopCycle]: https://coopcycle.org/
[Etherpad]: https://etherpad.org/
[Nextcloud]: https://nextcloud.com/
[Grist]: https://www.getgrist.com/
[Open Food Network]: https://openfoodnetwork.org/
[GrownBy]: https://grownby.com/

### Platform
As a __platform__, an FMP will host a suite of software applications and network
services, like so many of the "cloud" platforms we already interact with every
day (e.g., Amazon, Facebook, Airbnb, Netflix). There may be only one such
service visible to users, or it might be several distinct applications, but they
should be closely integrated and able to communicate with each other. In this
regard, it will be comparable to the way Google Calendar, Drive, Docs, Sheets,
and Gmail all function as separate apps in their own right, while they are
simultaneously integrated as single, cohesive platform. Farmers, food workers,
and other community members will access these services via dedicated mobile
apps, browser-based web apps, possibly even remote sensors or on-board displays
in tractors and other vehicles.

### Municipal
As a __municipal__ platform, FMP user-members will share collective ownership
and control of its services, along with certain responsibilities to maintain and
improve it.[^userdata] How exactly those services and their maintenance are
governed will be up to the user-members collectively, but they should adhere to
democratic principles or some sort of consensus procedure. Members will
therefore have to get to know one another, if they don't already, either
remotely or in person. To keep this from becoming too unwieldy or
over-bureaucratized, it will require at bare minimum a few 10s of members,
perhaps 100s, but ideally not beyond a few 1,000s or at most 10,000s. Ideally
all members will live and work within relatively close proximity to one another,
so that the platform represents a regional demographic, foodshed, or bioregion.
In the absence of geographic closeness, the membership ought to share some other
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
As a __federated__ platform,[^fedi] each FMP will be capable of connecting with
other platforms just like it. With some due diligence, it could even connect to
platforms that are _not_ so much like itself, like standard payment processors
(PayPal, Cash App, Stripe), proprietary sales platforms (e.g., Shopify, Clover
POS, Squarespace), or corporate cloud storage services (e.g., iCloud, Dropbox,
Airtable). Perhaps most importantly, this means users aren't restricted from
joining more than one platform, switching between them, or leaving the platform
entirely. Their data can easily follow them with just a simple authorization
process, whenever they choose. In other words, you're not forced to stay put or
move to whatever app has hold of your data; your data will always come with you.
Similarly, sharing your data doesn't force those you share it with to switch to
your platform or preferred service.

[^fedi]: Here I mean the technical sense of a _federated server architecture_.
    Simply put, that's when servers communicate with other servers as peers, in
    what can almost be called a peer-to-peer (P2P) architecture, as opposed to
    the more conventional client-server architecture.
    
    Some familiar examples of user-facing P2P applications are BitTorrent, Apple
    Airdrop, or even Bluetooth; these can offer some helpful intuitions about
    federation for anyone not as accustomed to working with servers. In each of
    those P2P examples, the peer devices – or "nodes" as they're called – run
    the same identical software. The software may resemble client software in
    the way that end users interact with it directly, but it is no longer
    client software in the truest sense, since each copy of the software is
    capable of negotiating a connection with any other copy of itself, without
    the intercession of a distinct server.
    
    Federated servers are likewise conceived of as a network of peer nodes, but
    are server nodes in a decentralized _network of servers_, wherein no single
    server is distinguished as authoritative over the others. Typically, they
    are still thought of as clientless or "headless" servers, in that they don't
    need to take commands from any type of graphical interface or other form of
    direct user input, nor do they act as "clients" to other servers or vice
    versa. The federated software that runs on one server is, once again,
    _identical_ to the software that runs on every other federated peer. A
    federated server may still continue to act in the role of a traditional
    server with traditional clients, but those clients are distinct from their
    federated peers.
    
    Federation, in this sense, is the pattern that gives its name to the
    [Fediverse], most famously represented by Mastodon, the alternative social
    media app, along with the myriad other [federated apps] and [federated
    services] that support some variant of the [ActivityPub] protocol. Note that
    a common (if not essential) feature of nearly all federated applications is
    an agreed upon protocol or standard for sharing data. That is the contract
    that federated servers make with each other in order to cooperate while
    remaining independent.
    
    As a more mundane example, an email server presents an ideal case of
    federation combined with the client-server architecture, where the server
    hosts clients but can also federate with other servers. For instance, you
    could access your [Proton] email account through the iOS client app on your
    phone to send an email to a friend's [Roundcube] email address on their own
    self-hosted server. Proton's email server _federates_, in essence, with your
    friend's Roundcube server, via the standard email protocol that both servers
    share. Then your friend can view the email you sent from their browser,
    using Roundcube's web client or an independent Android client on their
    phone, like [Thunderbird].

[Fediverse]: https://fediverse.info/
[federated apps]: https://delightful.coding.social/delightful-fediverse-clients/
[federated services]:
    https://delightful.coding.social/delightful-fediverse-experience/
[ActivityPub]: https://activitypub.rocks/
[Proton]: https://proton.me
[Roundcube]: https://roundcube.net/
[Thunderbird]: https://www.thunderbird.net/en-US/mobile/

## Political Implications
These terms import a relatively neutral surface-level meaning, which speaks
directly to their function. Granted, other terms might denote more or less the
same functionality, but I chose these three terms purposely, because they add
further political connotations I wish to imply as well. I'll make those politics
explicit here because I don't want my intentions to be misconstrued. You can
feel free nonetheless to skip to the [next section], if you just want get on
with the nuts and bolts of how FMPs work.

Perhaps the closest parallel encapsulating most of what I'm trying to infer with
these concepts – although not so much as a _digital_ platform, to my knowledge,
but as a _political_ platform – is Cooperation Jackson in Mississippi. Kali
Akuno, one of their founders and a frequent spokesperson, rejects what he calls
"entities that exist to press for benefits within the capitalist system," or
what I allude to below as _economism_ or _utopianism_. Cooperation Jackson
strives towards a form of [dual power] by establishing a revolutionary base of
socio-economic power, not as a form of escapism but as a direct challenge to the
existing capitalist order. I would recommend that FMPs endorse the five __Basic
Principles of Class Struggle or Class Conscious Cooperatives__, as laid out by
Akuno in his [2023 May Day proclamation].

### What Kind of Platform?
The FMP borrows much of its underlying socioeconomic model from [platform
cooperatives]. In recent years, social theorists like Trebor Scholz, Nathan
Schneider, and others have proposed platform cooperativism as a way to
counteract the dominant paradigm of _platform capitalism_. The latter form is
well represented by the likes of Amazon, Google, Facebook, Uber, etc., platforms
we're accustomed to interacting with on a daily basis. To find a real-world
exemplar of a platform co-op, we can look to [Up&Go]. They're a workers' co-op
of professional home cleaners, who own and operate the web platform where their
customers register, schedule services, and pay for everything on the same site.
Platform co-ops are most often thought of as business platforms of this sort,
although other examples exist, like the social media site [social.coop].

A common critique of co-ops, particularly those engaged in commerce, is that
even when they promote virtuous behavior _internally_, such as egalitarianism or
free association among fellow workers, they still must survive within markets
dominated by capital interests. In order to succeed, therefore, co-ops can be
impelled to reproduce capitalistic forms of exploitation _externally_, even if
they don't intend it. To guard against such tendencies, some co-ops pledge to
uphold the [7 Cooperative Principles] to maintain solidarity with other co-ops,
trade unions, and the community at large; however, adherence to these principles
is strictly voluntary in most jurisdictions, with little or no enforcement.

### A Municipalist Platform
In contrast, FMPs should skew a bit closer to the "civic platforms" put forth in
James Muldoon's [_Platform Socialism_]. Muldoon takes inspiration from two early
20th century projects of socialist construction, namely G. D. H. Cole's theory
of guild socialism and Otto Neurath's model of economic planning. A wider
membership base for FMPs, established not only upon commerce but other equally
important social relations, will hopefully afford opportunities for more
civic-minded programs to develop. To be sure, commerce will be a key function of
the FMP, and so it risks being co-opted or "economized" in just the same way as
co-ops; however, membership and participation in an FMP should not be predicated
on a person or group entering into a formal professional relationship with other
members, so long as they demonstrate their commitment to the community.

Ultimately, that's why the FMP is also a municipal or _municipalist_ platform,
in the sense of Murray Bookchin's [libertarian municipalism] or the [New
Municipalism] movement exemplified by groups like [_Barcelona En Comú_] and
[Fearless Cities]. Membership should be extended even to people who may seldom
login to the platform itself, if ever at all, but who still maintain strong
social bonds with the rest of the group or play a role in the community. This
will require some combination of careful vetting, targeted recruitment, popular
education, and continually active engagement between members to ensure it
remains an inclusive body while not falling prey by moneyed interests or bad
faith actors.

In the long run, only constant vigilance can fully safeguard against this and
other forms of moral co-optation, but expanding the sphere of participation can
at least mitigate the risk of this form of "co-op co-optation" by market forces
specifically. That said, a platform might be a municipalist cooperative, like
Cooperation Jackson, and I welcome that. I differentiate to spur greater
vigilance, but I nevertheless full-heartedly endorse co-operatives that maintain
that spirit.

### A Federalist Platform
Likewise, municipalism should not be mistaken for provincialism, and so the FMP
must be a federated – or even a _federalist_ – platform too. I say _federalist_
not in the republican sense, as Alexander Hamilton might have used it, but in
the long-held [anarchist sense of federalism].

I would only qualify that I don't have in mind the more "utopian" aspects of
federalism, often associated with mid-19th century thinkers like Pierre-Joseph
Proudhon or James Guillaume. Rather, I would point to much later anarchist
projects of the 20th and 21st century, which certainly developed out of utopian
socialism but explicitly positioned themselves internationalist in nature, or
even outright counter-utopian.[^cnt-fai] Specifically, I would point to the
[Democratic Confederalism] of Abdullah Öcalan, which forms the theoretical and
constitutional basis for the [DAANES] of Northeast Syria, a.k.a. Rojava. Their
program is emphatically internationalist, while also firmly rooted in social
ecology and the municipalist principles of Bookchin, who significantly
influenced Öcalan's ideas.

This sense of federalism harmonizes quite well with the sense of federated
server architecture, which I see as a gradated and flexible blend of distributed
computing and central coordination.[^fedi] Federation enjoys the benefits of a
large, cohesive network, while allowing a tremendous amount of flexibility
through localized fine controls. So long as some key protocols are observed,
groups of varying size and configuration can still unite their efforts and share
resources, without sacrificing any of their diversity.

[^cnt-fai]: Starting at least as early as the Spanish Civil War,
    anarcho-syndicalists of the [CNT-FAI] established federated communes as a
    part of their revolutionary fight against fascism, supported by the
    International Brigades and a host of left-wing tendencies ranging from
    libertarian socialists to Trotskyists.

    Incidentally, the epigraph for this document, which I first came across in
    the middle of drafting it, comes from Christopher Caudwell, an English
    literary critic, Marxist philosopher, and anti-fascist soldier in the
    British Battalion of the International Brigades. Before those lines could be
    published, Caudwell was killed at the Battle of Jarama in 1937, defending a
    hill from Franco's forces so that his comrades could escape to fight another
    day.

    At the moment I write this, with the dust starting to settle on Gaza City,
    with ICE brownshirts storming America's cities, his words echo in my ears as
    an ever-present call for international solidarity. Even more, his deeds
    stand before me as a reminder that lasting freedom will always be contingent
    upon a correspondingly steadfast solidarity: _none_ of us can enjoy true
    freedom unless it is universally shared. It's the same sentiment you can
    find in the words of [Fannie Lou Hamer] or [Mikhail Bakunin], only put to
    action. Or as Caudwell himself told a friend in 1936 before joining the
    Spanish People's Army, "their struggle, if they fail, will certainly be ours
    to-morrow, and, believing as I do, it seems clear where my duty lies."

[next section]: #social-architecture-software-ecology
[dual power]: https://blacksocialists.us/dual-power-map
[2023 May Day proclamation]:
    https://cooperationjackson.org/announcementsblog/buildingclassconsciouscoops
[platform cooperatives]: https://platform.coop
[social.coop]: https://wiki.social.coop/wiki/Main_Page
[Up&Go]: https://colab.coop/work/upandgo/
[7 Cooperative Principles]:
    https://ica.coop/en/whats-co-op/co-operative-identity-values-principles
[_Platform Socialism_]:
    https://www.techwontsave.us/episode/97_envisioning_platform_socialism_w_james_muldoon
[libertarian municipalism]:
    https://social-ecology.org/wp/1999/08/thoughts-on-libertarian-municipalism/
[New Municipalism]:
    https://www.opendemocracy.net/en/can-europe-make-it/which-municipalism-lets-be-choosy/
[Fearless Cities]: https://www.fearlesscities.com/
[_Barcelona En Comú_]: https://barcelonaencomu.cat/
[anarchist sense of federalism]:
    https://theanarchistlibrary.org/library/what-do-anarchists-mean-by-federalism
[DAANES]:
    https://rojavainformationcenter.org/2023/12/aanes-social-contract-2023-edition/
[Democratic Confederalism]:
    https://ocalanbooks.com/#/book/democratic-confederalism
[CNT-FAI]: https://libcom.org/tags/federacion-anarquista-iberica-fai
[Fannie Lou Hamer]:
    https://stjamesaustin.org/wp-content/uploads/2021/02/Until-I-Am-Free-You-Are-Not-Free-Either-by-FLH.pdf
[Mikhail Bakunin]:
    https://theanarchistlibrary.org/library/michail-bakunin-man-society-and-freedom#:~:text=I%20am%20truly%20free%20only%20when%20all%20human%20beings,its%20necessary%20premise%20and%20confirmation


## Social Architecture, Software Ecology
From a technical standpoint, very little about this architecture is brand
spanking new. Prior art exists in separate examples from federated social media,
platform cooperatives, and digital democracy tools like [Decidem], [Polis], and
[DemocraciaOS]. I'll compare FMPs with existing solutions in greater detail
below, but let it suffice to say that a lack of novelty is not only acknowledged
but intended. What I hope distinguishes FMPs is the combination of these
patterns with an organizing model that will make essential software services
accessible and affordable – specifically for the food and farming communities
that need them most – while also being sustainable for the IT professionals,
like myself, who ultimately design, build, deploy, and maintain those services.

Federated municipal platforms are meant to serve as a _social architecture_,
blending digital and social technologies through a comprehensive approach to
design. To borrow from Ivan Illich, FMPs will favor digital or social components
that can be said to be _convivial tools_:

> Tools foster conviviality to the extent to which they can be easily used, by
> anybody, as often or as seldom as desired, for the accomplishment of a purpose
> chosen by the user. The use of such tools by one person does not restrain
> another from using them equally. They do not require previous certification of
> the user. Their existence does not impose any obligation to use them. They
> allow the user to express his meaning in action.[^illich-21]

[^illich-21]: Ivan Illich, _Tools for Conviviality_ (Harper & Row, 1973), 22.
    Famously, Illich's definition of _tools_ included "all rationally designed
    devices," such as hand tools, kitchen utensils, industrial machinery,
    industrial factories themselves, interstate highway highways, and telephone
    networks. He even included "productive systems for intangible commodities
    such as those which produce 'education,' 'health,' 'knowledge,' or
    'decisions,'" by which he may was likely inferring universities, hospitals,
    research labs, and public or private administration offices, respectively.

Finally, in a nod to the organic origins of cybernetics, the FMP is designed to
promote a bottom-up _software ecology_, rather than constructing a top-down
software architecture – once again, putting "ecology over architecture."

[Decidem]: https://decidim.org/
[Polis]: https://pol.is/home
[DemocraciaOS]: https://democraciaos.org/en/

### Unified Data Pipeline
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

#### FMP &#x21D4; Free Software: Fixing `wontfix` Issues
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

#### FMP &#x21D4; Unfree Software: Adversarial Interop
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

Whether the tactic is one of adversarial interoperability (e.g., via reverse
engineering and web-scraping) or benevolent data portability (e.g., via plugins
and app stores), the long-term strategy in _all cases_ of interop with unfree
software should be a migration path away from the proprietary platform towards a
free software alternative, eventually. Users shouldn't be forced into that
migration, but they should encouraged. Offering a more gradual migration process
should only help with that encouragement.

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

It is for this reason that localized control of the FMP is required. To be
effective, control must be exercised through an explicit governing structure,
stipulating how decisions are made about its administration and development.

#### Tradeoffs: Scale vs Scope
I hope I haven't oversold what an FMP can do in practice, as if there's no limit
to the degree it can be customized or the number of applications and services it
can host. In theory, that's true enough of most computers today, insofar as they
are considered [Turing complete], but there are always tradeoffs.

Of course, the first trade-offs you're likely to encounter come in terms of the
material cost to operate the FMP. There's the cost of the hardware, electricity,
and the necessary labor to keep it all running. I'll refer to these as operating
or administrative costs. On top of that, FMP members might want to sponsor new
features, plugins, or other forms of customization, which we'll call the
development costs. If you choose to forgo all development, those costs can be
mostly eliminated. When it comes to administrative costs, however, the slope of
cost-savings will inevitably bottom out in a long tail before ever hitting zero.

Then again, the rising slope of administrative costs also tends to level out as
usage increases, so long as it is carefully managed. Therefore, if an FMP can
recruit more members and development costs remain constant, it can contribute to
further cost reductions per member. This is what many startups hope to achieve
when they talk about _scalability_, but as I discussed in [my previous article],
the gains can be illusory at best and may obscure the more extractive methods of
modern platform capitalism.

The reason for scalability's shortcomings is the same reason an FMP is forced to
consider yet another trade-off at this point: increasing membership may only
increase administrative costs at a diminishing rate, but it will likely increase
the demand for more features and application development. Development costs
hardly ever remain constant, especially "at scale," and they can vary farm more
than administration costs. In fact, if the functionality expected by users only
ever _diverges_ as their numbers increase, costs may even rise exponentially.

The primary cost-savings of an FMP, unlike cloud capitalist platforms, is that
its members can actively promote the _convergence_ of feature expectations. If
there is sufficient cohesion, and members can agree on a relatively fixed scope
of functionality the FMP will address – i.e., its set of applications, services,
and customizations – then that can go a very long ways to keeping even
development costs low. The only limiting factor is their ability to reach
_consensus on the scope of functionality_ that the FMP will cover.

In other words, it's all about governance. No one-size-fits-all solution exists,
and each FMP will need to determine the scope of what it is feasible, what kind
of economic activities it will facilitate, and what aspects of food production
and distribution it will manage. To do that, members will first need to decide
on what governance structure or consensus process they will adopt. The more the
membership's needs and wants overlap with each other, the fewer distinct
applications and features will need to be developed and maintained, and the
lower per member cost of development and administration will fall.

Also, by choosing the operational scope carefully, the costs can be further
offset by other resources that can be distributed and shared. Beyond the compute
resources needed for the platform itself, the FMP can facilitate the management
of [common-pool resources (CPR)], such as trucking and cold storage, in order to
lower costs. Similarly, the overall value can increase by pooling resources such
as marketing outlets and agronomic knowledge.

[Turing complete]: https://en.wikipedia.org/wiki/Turing_completeness
[my previous article]: /posts/against-scale.md
[common-pool resources (CPR)]:
    https://en.wikipedia.org/wiki/Common-pool_resource

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
depend heavily upon the specific context. As I stated [above](#municipal), an
FMP will likely require at bare minimum a few 10s of members to be effective,
perhaps 100s, but ideally not beyond several 1,000s or at most a few 10,000s. In
contrast to the billions of users most venture capital startups aspire to, such
differences of scale seem trivial, but they still represent three orders of
magnitude. It may not matter much when it comes to _managing the scale of
administrative costs_, but it matters a whole lot in terms of _governing the
scope of development costs_.

So again, there's no one-size-fits-all solution here, but geography can at least
provide a helpful starting point.

#### Resource Allocation
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

#### Tool-kits & Guidelines
There are too many governance models, funding methods, and facilitation tools to
address all options here in full. And as I keep saying, plenty of latitude ought
to be given to FMP members to decide what works best for them. However, without
trying to sway the form of governance an FMP might choose, there are still three
resources I recommend to anyone organizing on democratic principles, whatever
the nature of their project:

- __[Enspiral]:__ This cooperative from Aotearoa, New Zealand develops [Loomio],
  free and open source software for online voting, proposal submissions,
  transparency, and more. They also make the participatory budgeting tool,
  [Cobudget], and publish their [Enspiral Handbook] for others to learn from
  their experience as a cooperative and a self-governing community.

  Voting tools – including but not limited to the ones that Enspiral offers –
  could also be hosted on the FMP, although in many cases that probably won't be
  necessary. For example, I would recommend most groups use Loomio's cloud
  service, since it supports their cooperative and customization ought not be
  required.

- __[Community Rule]:__ A beautifully designed "governance toolkit" by Nathan
  Schneider. You can start with a [rule template] – e.g., Do-ocracy, Consensus,
  Elected Board, or Benevolent Dictator – or mix-and-match [rules from the
  library], then publish and share your own unique set of rules. There's also a
  PDF version of the [Community Rule book] that you can print and share for
  free. It can be helpful to look at the different configurations as an ongoing
  decision process, where communities continue to grow, shrink, change, reflect,
  always evolve, and periodically reset.

- __["The Tyranny of Structurelessness"]:__ This classic essay by Jo Freeman was
  first published in 1971. Based on her experience in the women's liberation
  movement, Freeman argues for the adoption of _explicit_ governing structures,
  even when in radically decentralized or horizontalized groups, because
  otherwise _implicit_ governing structures tend to form, with or without
  anyone's intention. Unspoken hierarchies of that sort can be especially
  difficult to address once they've formed, can lead to internal strife, and
  wind up perpetuating many of the inequities such "structureless" groups claim
  to oppose.

  Freeman gives examples of certain governance mechanisms, like sortition and
  the role of spokesperson, but she isn't prescriptive about governance
  structure or what mechanisms work best. In her conclusion, she offers seven
  "Principles of Democratic Structuring" that are well worth reviewing in their
  own right, though I recommend reading the essay in its entirety. I view them
  as the necessary _traits_ of democratic structure, without stipulating its
  final form.[^joreen]

<!-- TODO: connect the li w/ fn -->

[^joreen]: Again, I encourage anyone who's not already familiar with it to read
    ["The Tyranny of Structurelessness"] in its entirety, but here in paraphrase
    are her seven "Principles of Democratic Structuring" for reference:

    1. __Delegation of Specific Authority:__ The group selects members to be
      granted the authority to perform specific tasks on behalf of the group,
      instead of people self-selecting.
    2. __Accountability of Delegates:__ Once selected, delegates are held
      accountable to the group to exercise that authority as the group
      determines, not the delegate.
    3. __Sufficient Distribution of Authority:__ Delegate tasks to as many group
      members as it is reasonable, so authority is exercised through
      consultation with others, and so more people have a chance how to learn
      how to perform those tasks.
    4. __Periodic Rotation of Authority:__ Delegates should be responsible for a
      task long enough to gain competence and satisfaction from its performance,
      but not so long that they become possessive or unwilling to relinquish
      responsibility.
    5. __Rational Allocation of Authority:__ Ability, interest, and reliability
      with regard to the specific task should be the main criteria for selecting
      delegates, not popularity. Group members can learn new skills by
      apprenticing with a delegate, but not being thrust into the delegate
      position alone.
    6. __Equal Diffusion of Information:__ Information should be spread to
      everyone equally and frequently through proper group channels, not the
      rumor mill.
    7. __Equal Access to Resources:__ Equipment, information, and skills that
      the group needs to function should be shared equally among members. If
      full equality of access is not practical to achieve from the start, then
      members must be willing to teach, learn, and share whatever they can so
      they may fully realize it eventually.

[Enspiral]: https://www.enspiral.com/
[Loomio]: https://www.loomio.com/
[Cobudget]: https://cobudget.com/
[Enspiral Handbook]: https://handbook.enspiral.com/
[Community Rule]: https://communityrule.info/
[rule template]: https://communityrule.info/templates/
[rules from the library]: https://communityrule.info/library/
[Community Rule book]: https://communityrule.info/book/
["The Tyranny of Structurelessness"]:
    https://www.jofreeman.com/joreen/tyranny.htm

### Technical Support
A final component in this social architecture is the role of software developers
and other tech workers, designers, managers, etc. Technical consultants
specializing in Runrig FMPs could offer any of the services listed below:

- Initial platform deployment along with basic applications and services.
- Ongoing hosting, maintenance, and system administration for the platform,
  available on a monthly or annual basis.
- Sponsored development of new features, plugins, middleware, or other forms of
  platform customization.
- Remote help desk for added technical support to platform members and community
  administrators.
- On-site technical assistance in the form of on-demand calls or continuing
  support services.
- Facilitation of participatory design, research, or education projects to meet
  the community's strategic goals.
- General software consultation and technology assessments, a la carte.

Note, too, how many of the services above correspond to specific points of
governance I outlined earlier regarding [resource allocation].

Technical support may be provided remotely, but if the support workers also live
within the community they serve, they may be eligible – in this one case – for
membership in the FMP itself – of course, with some reasonable provisions to
preclude any conflicts of interest. In all other cases, it must be stressed,
support workers _will not_ be offered membership in the FMP, nor be granted
rights enjoyed exclusively by FMP members, even if the consultants constitute
their own worker cooperative with distinct membership rights thereof.

This is yet another topic I will need to expand upon in a future article, but I
intend FMPs and Runrig's other methodologies to make free software development
more sustainable for independent developers like myself. There's no reason this
can't go hand-in-hand with developing software tools that respect users' freedom
while offering better design and functionality than what's currently available
to food communities as free software – even in comparison to the most cutting
edge proprietary offerings.

[resource allocation]: #resource-allocation

#### Where to Find Support
As a distinctly community-led formation, there is no firm requirement that I or
anyone directly connected to Runrig to take part in the establishment of an
instance of a _federated municipal platform_. The FMP is a set of design
patterns and an architectural framework, which anyone is free to replicate.

In fact, if a community has members with the technical knowledge and experience
to deploy an FMP themselves, they're welcome to do so. In a wide enough
geographical expanse, there ought to be someone with the bit DevOps experience
needed to get it up and running. They could do it for hire or on the basis of
mutual aid. If someone lacks the experience but is sufficiently motivated to
learn, there are people like myself in the wider free software community who
would willingly offer guidance so they could introduce that knowledge and
expertise into their regional community.

Nevertheless, remote tech support should be available to provide the expertise
to anyone who needs it. In fact, remote support is no less encouraged than local
support, so long as it is done _for hire_, meaning the community retains full
ownership of the servers, and a license [recommended by the Free Software
Foundation] is applied to any original software.

As I stated above, the platform's social architecture is designed to be
[_municipalist_] in nature, not merely provincial. Likewise, FMPs should form a
[_federation_] of platforms, where each regional FMP can connect to adjacent and
overlapping regions and even further afield. __Regional sovereignty must go hand
in hand with international solidarity__, because _none of us are free until
everybody's free_, to once again paraphrase Fannie Lou Hamer.

The free software community, as a global, virtual network of activists and
practitioners, should be seen as an ideal gateway for establishing _social
connectivity_ with other platforms in distant regions, in addition to the
digital network connectivity that allows them to federate. Employing free
software engineers and designers from abroad is an excellent way for FMPs to
cross-pollinate, share what they've learned, and open up direct channels for
dialogue with like-minded communities around the world.

I am working to organize a Runrig worker cooperative, comprised of
technologists, designers, and advisors. This will complement the digital commons
Runrig is building for free software and design artifacts as a dedicated team of
people to steward that commons, while also making it easier for others to
benefit from its use. 

[_municipalist_]: #a-municipalist-platform
[_federation_]: #a-federalist-platform

#### Tech Worker Cooperatives
Some local activists and I have begun a project to start an FMP here, first, in
our own community of the Hudson Valley and New York City Metro Area. We'll then
be able to provide the service to other regions who need that support. If you're
interested in joining as a worker member, or would like to discuss starting an
FMP in your region – or if you're our neighbor in the HV/NYC region and want to
pitch in on this one! – don't hesitate to [email me].

Likewise, I encourage other independent software developers and existing
cooperatives to seek out partnerships with food workers, farmers, produce
distributors, delivery drivers, food rescue organizations, and mutual aid groups
to establish an FMP in their own community. If there ever becomes enough demand
(🤞🏻), there may be opportunities to offer support contracts to multiple FMPs,
as well as for the [two other layers] mentioned above.

[email me]: mailto:jamie@runrig.org
[two other layers]: #two-other-layers
