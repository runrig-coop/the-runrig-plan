# Roadmap for 2024
This roadmap is being presented in order to provide a more intentional,
structured exposition of Runrig's short and long term goals. It is not, however,
meant to be a static declaration of Runrig's purpose or motivations. It's a
starting point, not just for the year 2024 but for each and every time we come
together in community, and only for as long as we collectively choose not to
plot another course.

Here's the TL;DR of what's covered:

- Acknowledgement of [some mistakes I've made] (and hopefully learned from) over
  the last year.
- A tentative [3-phase organizing model or "business plan"], or at least some
  targets to nudge Runrig towards being more sustainable and not strictly
  volunteer based.
- An outline of [specific project, goals and stuff we can build in 2024], in
  service of the previous point.
- A new schedule and format for [workshops and other community building
  activities].

Feel free to jump to the sections most relevant to your interests.

There will be a live-streamed & recorded presentation that covers this roadmap
and what else lies ahead for Runrig in 2024 on __Friday, Jan 5, 2pm Eastern
Time__. See the [event page] for calendar options and the call link, or find the
live-stream and recording on the [Runrig YouTube Channel].

I'm also seeking feedback, suggestions, and other comments on this and Runrig
more generally, which can be posted on the [GitHub Discussion] for this this
roadmap.

[some mistakes I've made]: #lessons-learned-in-2023
[3-phase organizing model or "business plan"]: #three-phase-business-plan
[specific project, goals and stuff we can build in 2024]: #projects-for-2024
[workshops and other community building activities]: #building-community
[event page]: https://events.nixnet.services/events/a25c39b9-35dc-46c2-aab7-fd06cabc4a97
[GitHub Discussion]: https://github.com/orgs/runrig-coop/discussions/7

## Lessons Learned in 2023
Runrig got started in late-2022 first as a series of private journal entries and
one-on-one conversations with friends, then as a private GitHub repo labeled
`draft-proposal`, which for convenience sake I eventually made public. For me it
was an exercise in articulating the kind of tools I wanted to build, the
principles that would guide that work, and the overall culture of care I wished
to surround it all. Ultimately, I was just trying to answer the question: What
would I want an ag-tech worker's co-op to look like, based on my own experiences
working in agriculture, food service and open source software?

For the past year, Runrig has remained in that same exploratory state. Designs
have evolved, plans have changed, and by its very nature as a method of simple
exploration, it has been anything but stagnant. Yet having never committed to a
firm course of action, I struggle to see how its fundamental disposition has
progressed at all beyond those early drafts and conversations from one year ago.
All may be flux, but it still feels like stepping into the same river.

I've hesitated to center the initial concept and motivations for Runrig out of a
concern that mine or anyone else's perspective might come to dominate and push
out other deserving voices. While I wasn't exactly wrong in that impulse to make
this an open and shared space, I was wrong about what it means to be truly open
and sharing. I was reluctant to fully commit myself and take ownership of the
project, because I knew how hard it can be to let go of that control as others
come onboard and take a shared interest in its success. Avoiding all ownership
and control, however, was no better a response than ignoring their perils
entirely. The hardest thing, I realize now, is to accept accountability and be
willing to commit to stewarding Runrig towards its next phase — call that
"ownership," if you will — even while acknowledging that at some point I may
have to let go of that control and either share or wholly cede its ownership to
others. I hope when that time comes, I can do so willingly and joyfully, just
like so many of my peers and antecedents have gifted me the dearly earned fruits
of their own past labors.

With that in mind, I want to continue building those relationships, grounded in
trust, which are so necessary to make this more than just a vanity project or
wayward social experiment. And to do that, I intend to refocus my efforts
towards developing the infrastructure and resources required to follow through
on my commitments and solidify those relationships. While I still hope Runrig
can provide a space for others and myself to play with new ideas and
experiments, for at least the next year I've laid out a more concrete path of
development, which follows below. Likewise, while I want our workshops to remain
free and open to new projects and discussions, I'll strive to provide more
intentionality, structure and focus to those events, which I believe will go a
long way to making them more welcoming and inclusive to all.

I'm also making a conscious effort to use the first-person singular here. (Hi,
it's Jamie! 👋🏻🦤). I just learned that the really hardcore grammatical term
for that is _clusivity_, where "we" is _inclusive_ and "I" is _exclusive_. I
like to strive for inclusivity always, but this whole process — from a year ago
to five minutes ago when I looked that up — has me realizing that sometimes the
first step in bringing more people into unity can be to step forward and
introduce yourself, as your totally unique self, before stepping back into your
role within the larger group. Not always, but sometimes, like now. Plus, that
whole "royal we" thing, grammatically inclusive or not, can come across pretty
authoritarian and not at all welcoming. I know that's all a bit off-topic, but
despite wishing otherwise and acknowledging just how many awesome people have
contributed to this already, Runrig is still 90% just Jamie talking into the
void, at least most weeks. And that's cool, but to make this a space where
others not only feel welcome but have a sense of shared ownership, I think that
takes a little more candor than I've been offering to date.

<!-- TODO: rephrase this as "organizing model"? -->
## Three-Phase Business Plan
In the preliminary draft of ["Appendix: Ecology" § "Main
Legal Entities Constituting the Runrig System"] in _The Runrig Plan_, I outlined 3 types of legal
entities and 3 cooperative membership classes:

1. A __worker cooperative__ of engineers, designers and system administrators
   (aka, _worker members_), responsible for the building out and maintaining
   platform cooperatives' core services and end user applications.
2. __Platform cooperatives__ customized to meet the needs of each regional
   foodshed, providing a home platform for farmers and food workers (aka,
   _service members_) to access Runrig's network-based services and to host
   other FOSS cloud services.
3. A __data cooperative__ or __data trust__, whose members are users of the
   global data provider, which in turn serves as a centralized repository of all
   users data. These _data members_  retain full control over how their own data
   is accessed, modified and shared, but in addition they enjoy governance
   rights over the management and administration of the provider's
   infrastructure, development, pricing, etc.

["Appendix: Ecology" § "Main Legal Entities Constituting the Runrig System"]:
    https://www.runrig.org/ecology.html#main-legal-entities-constituting-the-runrig-system

I've re-ordered them here to reflect the order in which they will most likely be
incorporated. The worker cooperative, of which I myself hope to become a
worker-member, would likely come first since it's needed to build the
infrastructure for the rest. The latter two may develop in parallel, depending
upon needs, but for now I think its safe to say individual platform cooperatives
represent less complexity to implement, and so those I've ordered second with
the data co-op or trust third.

It seems sensible that the Runrig worker cooperative, as the leading cusp of
this triangular cooperative arrangement, would adopt a business plan to be
implemented in three corresponding phases:

- _Phase One:_ __Middleware, a.k.a. "glue services"__
  - Targeted interventions that can catch the spillover of [`wontfix`] issues or
    otherwise unfulfilled feature requests from more mature FOSS projects, while
    also providing reusable [middleware] and extensions to connect previously
    incompatible APIs and services.
- _Phase Two:_ __The One-stop Platform Co-op Shop™️__
  - Technical assistance and consulting for the deployment and administration of
    platform cooperatives. This is analogous to the classic "web dev shop,"
    particularly the diverse community of Drupal developers and consultants.
    These shops have proven that such an ecosystem can not only be sustained by
    free and open source software, even licensed under the "copyleft" GPL, but
    that it can positively thrive on account of the virtuous cycles that arise
    from the software commons and a precompetitive community of practice. The
    same potential exists for the semantic web and platform co-ops. To help
    foster its emergence, Runrig can provide a wide range of solutions: from
    fully managed hosting and technical support, to the hands-off delivery of
    complete systems that farms and food businesses can run for themselves; from
    crowdfunded feature enhancements and major upgrades for core libraries and
    services, to the same kind of small integrations of _Phase One_ and special
    plugins that may only suit one client's needs; everything from the turnkey
    to the bespoke.
- _Phase Three:_ __One Big Data Co-op__ 🐈‍⬛
  - Communally owned and controlled infrastructure for food sovereignty in the
    form of a cooperatively owned [data cooperative or trust]. This
    infrastructure is essentially what's termed the _data provider_ in _The
    Runrig Plan_ (see ["Three Layers of Autonomy"]). The most potential may lie
    in the form of a large Solid Pod Provider or other Linked Data Platform, but
    there may also be benefits to hosting FOSS alternatives to more conventional
    cloud services.[^cloud] To be clear, complete ownership, governance, and
    control of these utilities will belong the co-op members — ie, the farmers,
    food workers, small businesses and end consumers who store their data there
    — not to Runrig. However, Runrig can be contracted to administer, maintain
    and further develop that infrastructure on behalf of its members. There may
    be other peripheral services required to deploy such infrastructure and
    optimize its connections to the platform services of _Phase Two_.

[`wontfix`]:
    https://github.com/search?type=issues&q=label%3Aenhancement+label%3Awontfix+is%3Aclosed
[middleware]: https://www.redhat.com/en/topics/middleware/what-is-middleware
[data cooperative or trust]:
    https://www.adalovelaceinstitute.org/report/legal-mechanisms-data-stewardship/

[^cloud]: Examples may include Nextcloud for file sharing and storage
    (equivalent to Dropbox or Google Drive), NocoDB or Anytype as a low-code
    database/knowledge-base (Airtable, Notion, Obsidian), or Keycloak for
    identity and access management (Okta or Auth0). With time and concerted
    organizing, it may even become feasible to collectivize the kinds of cloud
    computing services dominated today by Amazon, Microsoft and Google, with
    FOSS alternatives like Ceph or Minio taking the place of Amazon S3 or Azure
    Blob as object storage services. After that there's the actual metal those
    services run on — the storage devices, networking hardware and server
    facilities — although I admit I'm getting way too far ahead of myself at
    that point. Importantly, however, even the smaller scale services like
    Nextcloud and Keycloak, while feasible to run on regional platform instances
    in _Phase Two_, will enjoy greater efficiencies by being managed on a global
    scale of the _Phase Three_ data provider and provisioning resources out to
    the more 

Preliminary to _Phase One_ and the legal incorporation of the worker
cooperative, it seems wise to delineate a _Phase Zero_, while we're still an
entirely volunteer effort and prior to any financial transactions:

- _Phase Zero:_ __Reference Implementations__
  - Before taking any contracts or pursuing grants for the following phases,
    build out one or two reference implementations or proofs-of-concept to test
    the viability of the model at each phase of development; namely: 
    - [Local Applications & Middleware](#local-applications--middleware) (_Phase
      One_)
    - [Integrations with Third-party Apps &
      Services](#integration-with-third-party-apps--services) (_Phase Two_)
    - [Hosting & Data Services](#hosting--data-services) (_Phase Three_).

Of course, at such an early stage the reference implementations for the data
provider may need to be scaled back considerably, or merely a proof-of-concept
using an already available service, such as [Inrupt].

[Inrupt]: https://www.inrupt.com/

The overall intention behind this three-phase plan is to provide a path for
iterative development across the entire stack. The fact that Runrig's smallest,
most rudimentary components are at the same time its most atomic and
self-contained components is no accident: this is precisely what is meant by
["Three Layers of Autonomy"] in _The Runrig Plan_ and why I think it offers
unique advantages that cannot be achieved by your average VC-funded, proprietary
tech startup.

["Three Layers of Autonomy"]:
    https://www.runrig.org/overview.html#three-layers-of-autonomy

## Projects for 2024
In the interest of getting Runrig past _Phase Zero_ of the business plan, the
main goal for 2024 is to build the reference implementations for the remaining
phases. By no means is it intended to complete all of the implementations listed
below; just one or two can be selected for each proposed phase, while the others
can wait until funding is secured for that phase. I list them all here for
context and to give a better sense of the potential for the years ahead.

### Local Applications & Middleware
__Reference implementations for _Phase One_:__
- [Early Warning System]
- Furlong (providional name for a potential [system tray utility])
- [Projection Engine]
  - Dynamic Yield Coefficients (possible standalone lib)

Implementation of the Early Warning System is already well underway, as a part
of the [Crop Plan Auditing System] we modelled for the [Richland Gro-Op] (RGO).
The underlying Tauri app we've built could also be adapted to a general purpose
system tray utility, that could provide notifications and link to third-party
applications as a part of _Phase Two_.

Another concept we explored as a part of the Crop Plan Auditing System was the
Dynamic Yield Coefficient, or DYC. It's fairly straight-forward, just a ratio
expressing how many pounds of produce a given variety yields per bed-foot (or
row-foot) planted. The challenge is in allowing the crop plan manager to adjust
that ratio manually while ensuring that changes are propagated to all relevant
computed data based on that ratio. In RGO's case, that propagation is achieved
via spreadsheet cells and formulae, a fairly brittle system, but something we
hoped to ameliorate by integrating her crop plan with a NocoDB instance or some
other syncing mechanism.

Conceptually, this is all very closely related to an earlier NSF grant proposal
that was never awarded for the Projection API, although I believe in our
scenario it would be better termed the [Projection Engine]. This could
essentially be a set of libraries for running constrained optimizations on crop
plan data, something David Wright and I discussed might also be aided by his
[Rust port] of [ProcessScheduler]. These utilities and the Projection Engine
might not prove very useful in isolation, but could be incredibly powerful if we
integrate with Qrop/Binjel or Open Food Network in _Phase Two_.

[Early Warning System]: https://github.com/runrig-coop/early-warning-system/
[system tray utility]:
    https://github.com/runrig-coop/early-warning-system/discussions/20
[Crop Plan Auditing System]:
    https://github.com/runrig-coop/open-design-workshops/blob/f1cab5354f6726b361894687e42692c062054448/rgo-crop-plan-auditing/README.md
[Richland Gro-Op]: https://richlandgro-op.com/
[Projection Engine]:
    https://docs.google.com/document/d/1MVad6LtQJ3Ocmgx1wyTtYEdpAgsHNMb0sVu5lQl3ee8/
[Rust port]: https://github.com/Wright4TheJob/ProcessScheduler-rs
[ProcessScheduler]: https://github.com/tpaviot/ProcessScheduler

### Integrations with Third-party Apps & Services
__Integrations with the following applications for _Phase Two_:__

- [Qrop]/[Binjel]
- farmOS, Field Kit & Survey Stack
- Open Food Network
- [NocoDB]/Airtable

Binjel (soon to supersede Qrop) is a desktop crop planning application sponsored
by the French cooperative [L'Atelier Paysan], and from the looks of it, they
intend to provide cloud services once Binjel is ready for general release.
They're both licensed under the GPL/AGPL and are very well designed. Because
Qrop is a desktop app running a simple SQLite database, it should be possible to
integrate it with the Early Warning System.

[Qrop]: https://qrop.frama.io/
[Binjel]: https://brinjel.com/
[L'Atelier Paysan]: https://latelierpaysan.org/

Integration with farmOS and Field Kit, of course, should be fairly
straight-forward. With [farmOS.js] we could stand up a really simple Node server
to provide networked storage, or we can try adapting the [farmOS Data Model] to
the Solid Protocol to provide network availability. Or both! Survey Stack can
also provide some nice integrations without too much additional effort, since it
also incorporates the farmOS.js client and modelling libraries.

[farmOS.js]: https://github.com/farmOS/farmOS.js
[farmOS Data Model]: https://farmos.org/model/

I'm likewise very keen to seek integrations with Open Food Network, though this
may not have any immediate advantages and I'm far less familiar with their API
than I am with farmOS.

If a clear need arises, we can also try to connect the Early Warning System or
other local applications to Airtable's REST API, or a [NocoDB] instance. In the
latter case, we could just try connecting to [NocoDB Cloud], their hosted
service, or our own instance, if we get one deployed as a part of _Phase Three_.

[NocoDB]: https://www.nocodb.com/
[NocoDB Cloud]: https://nococloud.dev/

### Hosting & Data Services
__Proofs-of-concept for _Phase Three_ hosting solutions:__

- [NocoDB hosting]
- [Solid Pods]
- Collaboration w/ [Co-op Cloud]

The potential of NocoDB is something that has appealed to me since a round of
discussions with Tianna Kennedy of 607 CSA and the Catskills Agrarian Alliance.
As a part of Skywoman's [MAIA Project], we investigated a range of tech
solutions but concluded that her team was already such a well-oiled machine that
they really needed the full power of a spreadsheet application that they had
full control over. Their one and only complaint was due to the brittleness of
connecting many separate files each with potentially dozens of sheets, made all
the more challenging when it came to importing new data from third-party
applications.

One solution I proposed, but never really explored was what I called the
"source-n-sink" spreadsheets or tables. It could work with spreadsheets, but
seemed ideal to use with a more robust "no-code" database like Airtable, Notion
or NocoDB. Here are my original notes:

> 3 part deliverable:
> - Script\* for querying orders from ecommerce platforms (eg, Squarespace) and
>   dump the raw data into a "Source Table" in Airtable. Immutable, append-only.
> - Airtable template(s) for "Sink Table(s)", which Tianna and others can use,
>   change, manipulate, etc, but which draw on the raw "Source Tables" without
>   changing them.
> - SOP for 607 CSA and other farms who want to replicate the process.
>
> \* = It's possible this script could be based on or integrated with Chris's
> [`eddie` scripts].

[`eddie` scripts]: https://github.com/skywoman/eddie

I've come to think more that this kind of solution could also provide a sort of
stop-gap to the kinds of challenges that Richland Gro-Op faces as well.

Ultimately, it's probably best to get as much data into more portable, semantic
formats, like the kinds supported by the Solid Project. We could test on
existing Solid [pod providers] like [Inrupt], or stand up our own [Community
Solid Server (CSS)] for testing.

Last but not least, all of these hosting scenarios could be greatly facilitated
by collaborating with [Co-op Cloud], who's lightyears ahead of us already in
creating public interest infrastructure and what they call the [configuration
commons]. They're really awesome people and tightly aligned with every single
one of Runrig's core values. It would be to our great detriment not to seek a
partnership with them and use their infrastructure wherever we can. They already
have a [NocoDB recipe] and a [farmOS recipe] as a part of their configuration
library, and we could surely contribute more as we find our way through _Phase
Three_.

[NocoDB hosting]:
    https://docs.nocodb.com/getting-started/self-hosted/installation
[Solid Pods]: https://solidproject.org/users/get-a-pod
[MAIA Project]: https://github.com/skywoman/multifarm-aggregation-info-arch
[pod providers]:
    https://solidproject.org/users/get-a-pod#get-a-pod-from-a-pod-provider
[Inrupt]: https://www.inrupt.com/
[Community Solid Server (CSS)]: https://communitysolidserver.github.io
[Co-Op Cloud]: https://coopcloud.tech/
[configuration commons]: https://coopcloud.tech/blog/federation-proposal/
[NocoDB recipe]: https://recipes.coopcloud.tech/nocodb
[farmOS recipe]: https://recipes.coopcloud.tech/farmos


## Building Community
It may be necessary to articulate a concrete program such as this in order to
achieve Runrig's far-reaching goals, but I hope it will also invite new
relationships, reinforce existing bonds, and strengthen the collaborative
muscles required to make this a truly democratic and sustainable project.

### Workshops & Mutual Aid
The Open Design Workshops so far have been held biweekly on weekend afternoons.
While the consistency has been nice, I'd like to try alternating the days and
times a bit to provide more varied opportunities for people coming from
different timezones or who have a recurring obligation that might conflict with
a single time and day of the week. We can always change it, but for now I'm
scheduling it as 3 one-hour sessions each month:

| N<sup>th</sup> Day of the Month | Office Hrs    | Workshop     |
| :------------------------------ | ------------- | ------------ |
| First Friday                    | 7:30 - 8am ET | 8am - 9am ET |
| Second Sunday                   | 1:30 - 2pm ET | 2pm - 3pm ET |
| Third Thursday                  | 5:30 - 6pm ET | 6pm - 7pm ET |

I am hoping the alliteration (plus how earlier days in the month correspond to
earlier times of day) will make it _slightly_ easier to remember, but of course
I'll also keep a list of upcoming events posted here, as well as on the [GOAT
Community Calendar] (via Google Calendar). I'm also trying out [NixNix Events],
a federated instance of [Mobilizon], a social event planner made by [Framasoft]
that supports the ActivityPub protocol. So you'll find all workshops posted in
the [Runrig Workshops Group].

The workshop format will be a little different as well. Instead of 2-hour
free-form events, there will be a one hour workshop and/or livestream event with
a set agenda, preceded by "office hours," where people can join half an hour
early for more informal chat or to give-n-get a little Mutual Aid Tech Support
(MATS). I'd like to see this kind of mutual aid work eventually have a greater
share of the time, but it's an experiment and we'll just have to see how it
plays out.

The workshop portion will be structured as a live-coding web stream, a report
out on recent progress, or presentation on planned work for the future,
depending on what projects we're working on and where they're at. In the
beginning I suspect they'll be me talking and coding mostly, but as more people
join we can shift to make it more participatory. I'll always try to leave time
for introductions and check-ins/outs, and the main body of the agenda can always
be adapted with group feedback in the time between one workshop and the next,
based on what we're working on and who plans to attend. I'll try to post these
to the [Runrig YouTube Channel], too, so if people want to watch later they can.

[GOAT Community Calendar]: https://goatech.org/calendar/
[NixNix Events]: https://events.nixnet.services/
[Mobilizon]: https://joinmobilizon.org/
[Framasoft]: https://framasoft.org/
[Runrig Workshops Group]: https://events.nixnet.services/@runrig_workshops
[Runrig YouTube Channel]: http://www.youtube.com/@RunrigCoop

### Education, Training & Research
Along with the mutual aid work, I want to expand this to do events with more of
a [popular education] component. I'd love Runrig to become a forum for regular
skills-sharing sessions and technical training for those who have an interest in
technology and who want to learn more, but also for community organizers and
food producers to teach us techies and each other on the work their doing and
how others can replicate democratic food distribution systems in their own
communities. I believe it's also important to make space for political
education, to really ground Runrig as a project for collective liberation,
whether that takes the form of a book club movie watch parties, or some kind of
trivia or game nights.

I've spoken with a few people about the idea of expanding _The Runrig Plan_ into
a robust design methodology, akin the [Agile Manifesto] or the [Toyota
Production System], but in conscious opposition to the capitalistic assumptions
underpinning those philosophies. That kind of thing seems ripe for some form of
[Action Research] (or [PAR] or [CBPR]). I've never done anything like that
before personally, so it would have to be a truly self-organizing group effort,
both for what we're trying to learn and how we're trying to learn it.

That will all take more than a year to come to fruition, but for now I think
it's sufficient to look out for those opportunities when and where they arise.
There are good reasons, after all, why "Education, Training, and Information"
are together one of the International Cooperative Alliance's [Seven Cooperative
Principles]:

> Cooperatives provide education and training for their members, elected
> representatives, managers, and employees so they can contribute effectively to
> the development of their co-operatives. They inform the general public -
> particularly young people and opinion leaders - about the nature and benefits
> of co-operation.

### Documentation & Communication
In a similar way, I hope within a year or two to be able to walk through Luis
Razeto's [_How to Create a Solidarity Enterprise: A Theoretical-Practical
Manual_](https://geo.coop/articles/how-create-solidarity-enterprise) with my
fellow worker-members in preparation for incorporating the Runrig workers'
co-op. Given our skill-sets with design and web development, it could be an
opportunity to create a more interactive tool for completing the exercises and
business planning steps in the manual, which we could gift back to the
community. How we publish our own documentation could share some of that
infrastructure as well, presenting an opportunity to create new tools for
garnering user feedback and for more members of the community to take an active
role in the development of their technology.

Finally, with these other efforts to provide more structured events and
documentation, it's important to maintain regular communication, so I hope to
start sending out newsletters on a monthly or bi-monthly schedule with general
updates on what's been going on and what's coming up. The newsletters will also
be published to runrig.org, as yet another form of documentation, for folks who
are dropping by for the first time, or for those who prefer not to subscribe.

[popular education]:
    https://labornotes.org/2017/04/interview-organizing-learn-learning-organize
[Agile Manifesto]: https://agilemanifesto.org/
[Toyota Production System]:
    https://global.toyota/en/company/vision-and-philosophy/production-system/
[Action Research]: https://en.wikiversity.org/wiki/Action_research
[CBPR]: https://www.detroiturc.org/about-cbpr/what-is-cbpr
[PAR]: https://highlanderpar.org/resources/
[Seven Cooperative Principles]:
    https://www.ica.coop/en/cooperatives/cooperative-identity
[_How to Create a Solidarity Enterprise: A Theoretical-Practical Manual_]:
    https://geo.coop/articles/how-create-solidarity-enterprise
