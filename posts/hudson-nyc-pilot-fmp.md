---
title: Hudson-NYC Pilot FMP
subtitle: A proposal to pilot a Federated Municipal Platform for the Hudson
    Valley & NYC Metro Area
description: Part of the Float Participatory Funding Project
author: Jamie Gaehring
date: 2025-11-20
drafted: 2025-10-31
---

::: info

The following proposal was originally planned for submission to the inaugural
round of [Float], a funding lab for open agroecological technologies. The theme
for the round was _Bridging Tech and Food Sovereignty Movements_.

:::

[Float]: https://float.ag/

## Summary

::: details INSTRUCTIONS

> - __Project Team:__ Names of the individual(s) that will steward the project.
>   You will share about their affiliations and qualifications later.
> - __Collaborating Projects/Organizations:__ If applicable, existing projects
>   or organizations that will collaborate to accomplish this project.
> - __Project Title:__ Provide a clear and concise title for your project.

:::

::: warning FIXME

Decide on team / collabs

:::

- __Project Title__: "Piloting a Federated Municipal Platform for the Hudson
  Valley & NYC Metro Area"
- __Project Team__: Jamie Gaehring, and others TBD

### Problem Statement

Small-to-midsize farms, regional food hubs, and grassroots food organizations
face distinct challenges if they wish to cooperate with one another on the
shared task of agricultural production and food distribution in their region,
while making the most of modern information technologies like we've all grown
accustomed to using nowadays.

Taken separately, these groups can seldom afford the same enterprise-grade,
proprietary software packages or white-label services available to larger
producers and distributors, such as the specialized ERP or CRM software often
required at their scale. Taken together, communities are confronted by
coordination costs that explode as participation rises, compounded by the lower
quality of generic alternatives offered by proprietary cloud platforms (for
little to no cost besides surrendering control their data or privacy), varying
and unequal access to technology or to the expertise needed to use it
effectively, incompatible data formats and exchange protocols that can lead to
vendor lock-in and information silos, until widespread digital coordination
across a large, contiguous foodshed or bioregion can seem all but unattainable.

### Project Statement

Under the stewardship of the [Catskills Agrarian Alliance], or __CAA__, and
[Runrig], we propose to pilot a novel design for community-controlled digital
platforms, wih the first deployment in the Hudson Valley and New York City Metro
Area.

A [federated municipal platform], or __FMP__, is a communally owned & controlled
digital platform, enabling a regional foodshed or bioregion to manage its own
land, resources, and labor according to its own needs. It can host a range of
free software applications & services, from dedicated food & agricultural
software to generic productivity apps, all determined by a local municipality of
users. As a federated platform, it can simultaneously cooperate with other
community-based platforms to share resources and contribute to global solidarity
efforts.

For this pilot, Runrig will work in close partnership with the CAA to deploy an
FMP that will serve the farms, producers, and similarly aligned grassroots
organizations participating in the CAA's programs, spanning the Hudson Valley
and New York City metro area.

[Runrig]: https://www.runrig.org/
[Catskills Agrarian Alliance]: https://www.catskillsagrarianalliance.org/
[federated municipal platform]: /posts/federated-municipal-platforms.html

### Theme & Values Alignment

In keeping with Float's values, goals, and its theme for this participatory
funding round, __Bridging Tech & Food Sovereignty__, the object of this project
is to facilitate the adoption of liberatory software and development
methodologies to an already robust food sovereignty network represented by the
CAA. From its origins, Runrig has been a project to bridge the unfortunate
divide between these two movements, a history we've documented in the essay,
["Hedgerows in the Sky: Concerning knowledge enclosures and how they may be
truly leveled"]. This proposal represents an opportunity to bring those designs
into practice in a truly bottom-up approach that centers the contiguous
communities of technology users and food producers and consumers of a particular
locale.

["Hedgerows in the Sky: Concerning knowledge enclosures and how they may be
    truly leveled"]: /posts/hedgerows

### Shared Learnings

Runrig's [design methodologies] generally – and the FMP architecture
specifically – strive to overcome the shortcomings of contemporary open source
practices, going beyond what limited gains might be achieved by this or that
software license and confronting the broader social and ecological challenges to
the development of sustainable, ethical, and liberatory technologies. FMPs
represent the culmination of nearly a decade working with free software for food
and agriculture, conducted entirely out in the open and well documented as
matter of public record.

While the constituent parts of the FMP's software architecture are all tried and
tested methods, they have yet to be practiced in concert with one another or in
combination with the _deliberately collaborative social tools & techniques_ that
are essential to activating new efficiencies and realizing their full potential
for mass organization.

We hope that the element of participation in Float's own funding approach,
coupled with the design primitives and methods of Runrig's FMP architecture and
CAA's community organizing work, can unlock these new possibilities to be shared
among this rounds cohort of practitioners and the wider free software and
farming communities.

[design methodologies]: ../pages/plan.md#why-a-new-methodology

### Future Goals of the Project

The second stage of this pilot project is meant to be a highly generative phase
of design and discovery. The expectation is that some portion of that generated
output will yield immediate gains for the FMP membership when it is implemented
in the third phase; however, the far greater share of that design schema should
provide a framework for many further iterations and years to come.

The FMP architecture also represents a design pattern that can be reproduced in
other regions and with other communities, but it is nevertheless just one of
[three layers] in the total scheme envisioned in the [Runrig Plan]. Ultimately,
FMPs are intended to be the intermediate, _regional_ layer that rests upon a
broader, _global_ substrate of cooperative data infrastructure, while more
decentralized, _local_ applications can be tailored to suit more individualized
use cases.

[three layers]: ./federated-municipal-platforms#two-other-layers
[Runrig Plan]: ../pages/plan

### Project Background & History

::: warning DRAFT NOTE

Project background not required here, but leftover for ref from Hylo
chat... _however,_ some of this may be useful for the [Team
Expertise](#team-expertise) section below.

:::

Here are some helpful links for background on the origins of this project:

- [Catskills Agrarian Alliance]: The CAA will be the main farming community
      partner & beneficiary of the proposed project.
- [Federated Municipal Platforms: A fundamental design pattern]: A blog post
  from a few weeks ago outlining the general FMP concept.
- [Technical Interview with Tianna Kennedy of the CAA]: From Sep 2022, the early
      origins of all this stems from a series of technical interviews Tianna and
      I participated in with the Skywoman group.
- [The MAIA Project]: All document from that project, including notes &
      materials from that interview.

[Catskills Agrarian Alliance]: https://www.catskillsagrarianalliance.org/
[Federated Municipal Platforms: A fundamental design pattern]:
    /posts/federated-municipal-platforms.html
[Technical Interview with Tianna Kennedy of the CAA]:
    https://www.youtube.com/watch?v=Lm6eFME6OpY
[The MAIA Project]: https://github.com/skywoman/multifarm-aggregation-info-arch/

## Project Details

### Project Description

For the first phase of the proposed pilot, Runrig will deploy a self-hosted
no-code database, such as [Grist], [NocoDB], or [BaseRow], which are all free
software alternatives to proprietary services like Airtable or Notion. In
previous mutual aid work with the CAA, Runrig has cleaned and aggregated 10
years of the CAA's historical data from disparate data sources into a compact
SQLite file, which can now be used to seed the database with little additional
effort. SQL queries that Runrig has already prepared can be incorporated into
the user-friendly GUI of the no-code database so that CAA staff can run those
analytics with fresh data as it comes in. All this will allow the CAA to better
integrate and contextualize that historical data with their ongoing multi-farm
CSA, wholesale distribution network, and community organizing initiatives.

Following this, Runrig will conduct a series of participatory design and
research clinics with the CAA, along with the 40+ farms and producers who
participate in the CAA's programs. During these clinics, FMP members will begin
curating a suite of free software tools that can coordinate their collective
operations, unify information workflows between the disparate third-party
services they already use, and learn about free software options that can
simplify individual members' own data management tasks while sharing the costs
of maintenance collectively. In the course of cleaning the CAA's historical
data, Runrig also prepared a pseudonymized copy of the data that can be used in
future mutual aid work by data analysts in the regional community who have
volunteered to produce a more rigorous analysis to aid in the CAA's operations.

In the final phase, we will begin the implementation of that suite, targeting
the features that will afford the greatest early return of value to the FMP's
total membership, while also looking ahead to future applications and
enhancements they can sustain as a community in the long term. To give a sense
of implementation targets, the CAA has expressed interest in adopting CRM
software, which could be as simple as implementing the [Grist CRM template],
installing another _libre_ server on the FMP, such as [Frappe CRM] or [EspoCRM],
or at the very least preparing their historical data to import to an external
service. We'll also look at ways to automate synchronization between the no-code
database and CSAware, a 3rd party service the CAA currently uses to manage its
CSA subscriptions, pick-up sites, and payments. Along the way, we'll try
wherever we can to achieve compliance with data standards and protocols like the
[DFC Standard] or [Common Farm Conventions], which will open up future avenues
for data portability and service integrations with other external platforms like
Open Food Network or Shopify, that already support such standards.

[Grist]: https://www.getgrist.com/
[NocoDB]: https://www.nocodb.com/
[BaseRow]: https://baserow.io/
[Grist CRM template]: https://support.getgrist.com/lightweight-crm/
[Frappe CRM]: https://frappe.io/crm
[EspoCRM]: https://www.espocrm.com/
[DFC Standard]: https://dfc-standard.org/
[Common Farm Conventions]:
    https://our-sci.gitlab.io/conventions/common_farm_conventions/wiki/

### Measurable Outputs

Any amount of time that the CAA saves on repetitive copy-n-paste tasks – as they
do currently whenever they need to merge and compare recent subscriptions with
their historical data – will represent an immediate gain. As a corollary, that
should also show an improvement in their reporting, in terms of the granularity
and frequency of what they're able to report to institutional partners, as well
as transparency with their membership. The most valuable indicator we hope to
observe will be higher levels of engagement from their producer partners, such
as participation in collective decision-making processes, governance, and
oversight.

### Anticipated Challenges

An FMP offers an abundance of options and a wide range of latitude in the kind
of features and applications it can incorporate; ambitions must be tempered
somewhat for this initial phase, while keeping the greater vision in sight so we
can continue to home in on it for the long term.

It also cannot be understated how so much of this design is intended as a form
of _social technology_, not just digital technology. As such, much depends upon
the overall commitment and mutual trust of the project's many participants and
stakeholders. That is why such a large proportion of the time and budget – at
least half – will be dedicated to participatory design and discovery work.

### Team Expertise

::: details INSTRUCTIONS

> Describe your expertise, extra special gifts, and affiliations of the Project
> Team (up to 200 words).

:::

::: warning TODO

200 words; see [Project Background & History](#project-background-history).

:::

## Project Impacts

### Anticipated Impacts

The particular applications and services that comprise this pilot deployment may
represent a modest improvement to the existing capabilities of the CAA and its
partners; however, the deployment itself represents something of far greater
significance: it will be a kernel of shared infrastructure that can serve as
the nucleation site for the further development of both digital tooling and
socioeconomic organizing models.

As a federated platform, the long-term goal for this Hudson-NYC FMP is to
redirect the flow of data away from proprietary systems its members do not
control and towards the FMP itself, passing into and through it as a [unified
data pipeline] that they wholly and democratically control. To employ the
language of `PUSH` vs `PULL` modes of data exchange, initial efforts to redirect
data flow may resemble a `PULL` operation, where data generated by external
sources is pulled into the FMP for additional processing, backups, and
integration with internal data sets. Over time, the further development of
applications and features hosted by the FMP itself will allow for more of that
data to be generated internally, only sending it out to other systems when
strictly necessary in the form of a `PUSH` operation – e.g., for marketing
purposes to popular e-commerce or social media platforms. Eventually, links to
external platforms may be closed altogether, if they are [proprietary and
competitive in nature], while links to other [cooperative or free software
platforms] can remain open to foster a wider network of collaboration.

The tighter social and technological cohesion that such infrastructure can
provide will also afford new pathways for the sustainable development of free
software and other appropriate technologies. This includes projects like Runrig
itself, which is still in the embryonic stage of forming a workers cooperative
that would specifically serve FMPs like the one proposed for the pilot region,
but in other cities and farming communities. It is intended to benefit other
organizations and projects participating in this initial Float funding round,
too, like Our Sci's [Common Farm Conventions] project and the Open Food
Network's work to integrate the [DFC Standard] with Shopify and other e-commerce
sites.

In the overarching vision for the [Runrig Plan], these combined efforts will
enable even greater infrastructure projects, beyond what can be achieved by one
or even several FMPs, like [a supranational or global network of data trusts]
that can host FMP data sources and non-FMP data, all while enshrining similar
democratic controls over its management, or the implementation of [local-first
and peer-to-peer applications] that can afford greater individual autonomy
without sacrificing collective autonomy.

[unified data pipeline]: ./federated-municipal-platforms#unified-data-pipeline
[proprietary and competitive in nature]:
    ./federated-municipal-platforms#fmp-x21d4-unfree-software-adversarial-interop
[cooperative or free software platforms]:
    ./federated-municipal-platforms#fmp-x21d4-free-software-fixing-wontfix-issues
[Common Farm Conventions]:
    https://our-sci.gitlab.io/conventions/common_farm_conventions/wiki/
[Runrig Plan]: ../pages/plan
[a supranational or global network of data trusts]:
    ./federated-municipal-platforms#global-data-provider
[local-first and peer-to-peer applications]:
    ./federated-municipal-platforms#local-first-applications


### Key Beneficiaries

::: details INSTRUCTIONS

> Who specifically benefits, and how? (up to 200 words)

:::

::: warning TODO

200 words

:::

### Unintended Consequences

::: details INSTRUCTIONS

> What if you are wrong? What are potential consequences - downsides, risks, or
> possible harms that could result from implementing or attempting to implement
> this project? (up to 200 words)

:::

::: warning TODO

Notes from internal comms w/ team members and stakeholders:

> - Not meant to move your data or workflows away from your existing tools like
>   CSAware, just make those workflows run more smoothly & effectively; e.g.:
>   - Less data entry, esp. repetitive copy'n'paste tasks
>   - But also an escape hatch for when you do need to leave other platforms
>     like CSAware
> - Whenever possible, the platform's data will be redundant and synced with
>   your pre-existing data sources (e.g., CSAware) to make data migration a
>   non-issue.
> - Your platform data is always portable, from Day 1; i.e., you can:
>   - Hit `EJECT` button (metaphorically) to walk away easily w/ your data
>     safely in tow, or
>   - Hit `ABORT` to shut it down securely & delete entirely if you just don't
>     want or need it any more.

:::

## Project Plan

### Key Milestones and Deliverables

The pilot will be conducted in three staged phases.

#### Phase 1: Instantiate Platform & Deploy No-code DB
- _Time Range:_ __Jan 5 - Feb 13__
- _Duration:_ __6 weeks__

Deploy a self-hosted, [_libre_], no-code database that will enable the CAA to
manage and contextualize their 10 years of historical data with their ongoing
operations.

#### Phase 2: Participatory Design & Research Series
- _Time Range:_ __Feb 16 - Apr 24__
- _Duration:_ __10 weeks__

A series of participatory design and research clinics with various segments of
the FMP membership – i.e., the CAA and its partners – to devise a roadmap and
iterative course of development for the next two years, leading to the curation
of a suite of free software tools, integrations, and extensions for their
collective decision making and the coordinated management of shared resources.

#### Phase 3: Application & Integration Development
- _Time Range:_ __Apr 27 - Jun 30__
- _Duration:_ __9 weeks__

Targeted implementation and deployment of a select few applications and features
among that suite, which promise to yield the greatest early return of value in
the short time allowed to benefit the FMP's total membership.

[_libre_]: https://www.gnu.org/philosophy/free-sw.html
[Project Description]: #project-description

### Budget

::: details INSTRUCTIONS

> Provide a detailed budget for your project. 

:::

::: warning TODO

Estimate line item costs

:::

| #   | Description                                                    |  Cost |
| --- | :------------------------------------------------------------- | ----: |
| 1   | VPS provisioning & hosting fees for first 2 years of operation |     $ |
| 2   | Initial platform configuration & deployment                    |     $ |
| 3   | No-code database deployment & seeding                          |     $ |
| 4   | Hosting & performance of design & research series              |     $ |
| 5   | Stipends for equitable FMP member participation                |     $ |
| 6   | Application & feature development                              |     $ |
| 7   | Preparation of 2-year roadmap and community guidance documents |     $ |
|     | __TOTAL__                                                      | __$__ |

### Budget Narrative

::: details INSTRUCTIONS

> Explain how the requested funds will be used to achieve your objectives (up to
> 100 words).

:::

::: warning TODO

- design & discovery
- social tech
- compensating ppl for their time (equity)

:::

### Additional Resourcing

::: details INSTRUCTIONS

> To help inform future Float funding rounds, beyond funding, what other
> resources or support would be helpful for your project's success? (e.g.,
> technical expertise, community feedback, mentorship) (up to 100 words)

:::

::: warning TODO

100 words

:::


## Participation

### Overall Involvement

::: details INSTRUCTIONS

> In 2-3 sentences, describe the overall level of the project team members’
> involvement in the Float community.

:::

::: warning TODO

200 words

:::

### Peer Feedback Involvement

::: details INSTRUCTIONS

> In 3-5 sentences, please describe, in a general way, the sort of feedback
> project team members have been able to provide to other projects, if they have
> had the opportunity to do so.

:::

::: warning TODO

3-5 sentences

:::


### Project Peer Feedback

::: details INSTRUCTIONS

> If applicable, describe the feedback you have received from other Float
> participants, and how this has affected the shape of your project and/or
> proposal (up to 100 words).

:::

::: warning TODO

100 words

:::

### Openness to Collaboration

::: details INSTRUCTIONS

> If your project is looking for collaborators, in general or with particular
> skills or aptitudes, please say so here (up to 100 words).

:::

::: warning FIXME

Below is leftover from Hylo chat notes; adapt it to proposal instructions.

:::

If you want to collaborate on the proposal process, you can open a [GitHub
issue] or a pull request against the [`draft/hudson-nyc-pilot-fmp`] branch.
Updates to that branch will be reflected on the [Preview Page], but will remain
unlisted to web crawlers unless/until it ever gets pushed to the `main` branch
for deployment to www.runrig.org.

I hope that's not too cumbersome, but it's my accustomed workflow when I draft
articles and open docs with Runrig collaborators. Figured why not take the same
open approach with this funding proposal?

[GitHub issue]: https://github.com/runrig-coop/the-runrig-plan/issues
[`draft/hudson-nyc-pilot-fmp`]:
    https://github.com/runrig-coop/the-runrig-plan/blob/draft/hudson-nyc-pilot-fmp/posts/hudson-nyc-pilot-fmp.md
[Preview Page]:
    https://runrig-org-git-draft-hudson-nyc-pilot-fmp-runrig.vercel.app/posts/hudson-nyc-pilot-fmp.html

## Discovery Round

### Participation in discovery round

If not selected for this round, we absolutely wish to be included in the
"Discovery" co-budgeting round, which is set to follow.
