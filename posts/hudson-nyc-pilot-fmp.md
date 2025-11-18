---
title: Hudson-NYC Pilot FMP
subtitle: A proposal to pilot a Federated Municipal Platform for the Hudson
    Valley & NYC Metro Area
description: Part of the Float Participatory Funding Project
author: Jamie Gaehring
date: 2025-12-01
drafted: 2025-10-31
outline: [2, 4]
---

::: warning HERE BE DRAGONS 🐉

This proposal is still VERY rough, just some notes I've cobbled together from
exchanges with colleagues & stakeholders. I'll work on adapting it to the Float
Proposal Template over the next couple days.

From the [Float] proposal template:

> The theme for Float’s pilot round is __Bridging Tech and Food Sovereignty
> Movements__.
> 
> Funded activities should be accomplished over the course of four months,
> between December 2025 and the end of March 2026. 

:::

[Float]: https://float.ag/

## Summary

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
proprietary software packages or bespoke, white-label services available to
larger producers and distributors, such as the specialized ERP or CRM software
often required at their scale. Taken together, communities are confronted by
coordination costs that explode as participation rises, compounded by the lower
quality of generic alternatives offered by proprietary cloud platforms (for
little to no cost, perhaps, except surrendering the right to control their own
data or privacy), varying and unequal access to technology or to the training
needed to use it effectively, incompatible data formats and exchange protocols
that can lead to vendor lock-in and information silos, until widespread digital
coordination across a large, contiguous foodshed or bioregion can seem all but
unattainable.

### Project Statement
Under the stewardship of the [Catskills Agrarian Alliance] (CAA) and [Runrig],
we propose to pilot a novel design for community-controlled digital platforms in
the Hudson Valley and New York City Metro Area.

A [federated municipal platform], or FMP, is a software architecture and social
technology meant to enable a regional foodshed or bioregion to manage its own
land, resources, and labor according to its own needs. For the proposed pilot
Runrig will deploy a self-hosted, _libre_, no-code database, which will allow
CAA to better integrate and contextualize their 10 years of historical data with
their ongoing multi-farm CSA, wholesale distribution network, and community
organizing initiatives.

Following this, Runrig will conduct a participatory design and research clinic
with the CAA, along with the 40+ farms and producers who participate in the
CAA's programs. During the clinic, FMP members will begin curating a suite of
free software tools that can coordinate their collective operations, unify
information workflows between the disparate third-party services they already
use, and learn about free software options that can simplify individual members'
own data management tasks while sharing the costs of maintenance collectively.

In the final phase, we will begin implementation of that suite, targeting the
features that will afford the greatest early return of value to the FMP's total
membership, while also looking ahead to future applications and enhancements
they can sustain in the long term as a community.

[federated municipal platform]: /posts/federated-municipal-platforms.html
[Runrig]: https://www.runrig.org/
[Catskills Agrarian Alliance]: https://www.catskillsagrarianalliance.org/

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

A key element of Runrig, as a larger program, is [The Runrig Plan], an
alternative design methodology for the sustainable and ethical development of
free software and other appropriate technologies. Runrig is committed to
providing thorough documentation, a spirit of openness, and _jeu libre_ (or
"free play") throughout the proposed project, in accordance to the principles
expressed there:

> Continuous experimentation and free play, _jeu libre_, when practiced
> throughout the lifecycle of a project like Runrig, can have tremendous
> potential that cannot be overstated. The evolution of a software system is
> only one factor in the evolution of the broader social and natural systems in
> which it is embedded. Experiments may succeed, or they may fail; _ad hoc_
> measures may eventually find wider adoption as a general solution, or they'll
> only ever serve a tiny niche of user scenarios; freely sharing some bit of
> knowledge or a particular technique may be recognized and reciprocated, or
> that datum will merely fade into the background hum of information and
> culture. Regardless, each one of these outcomes will be metabolized within an
> open system of communal stewardship. The small lessons and incremental
> progress each one marks will be contributed back to the whole, always in one
> form or another, so that it continues to nurture and expand the commons.

That is why this very proposal, once submitted, will also be included in the
plan as a record of its success or failure.

[The Runrig Plan]: ../pages/plan.md

### Future Goals of the Project

::: details TODO

From the Float proposal template:

> If you receive additional funding, through Float or from another source, how
> would you deploy it. And, what are the long-term dreams for the project? (up
> to 100 words)

:::


### Project Background & History

::: warning DRAFT NOTE

Project background not required here, but leftover for ref from Hylo chat.

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

::: warning DRAFT NOTE

The following notes will be incorporated into the template sections further
below.

:::

- A pilot FMP stewarded by CAA & Runrig (see "Development Goals" below for
  more details)
- Think of it like a "digital backbone" for safely integrating data from other
  platforms (e.g., CSAware, Shopify, etc) and safely sharing it w/ CAA members &
  partner orgs
- Not meant to move your data or workflows away from your existing tools like
  CSAware, just make those workflows run more smoothly & effectively; e.g.:
  - Less data entry, esp. repetitive copy'n'paste tasks
  - But also an escape hatch for when you do need to leave other platforms
    like CSAware
- Whenever possible, the platform's data will be redundant and synced with
  your pre-existing data sources (e.g., CSAware) to make data migration a
  non-issue.
- Your platform data is always portable, from Day 1; i.e., you can:
  - Hit `EJECT` button (metaphorically) to walk away easily w/ your data
    safely in tow, or
  - Hit `ABORT` to shut it down securely & delete entirely if you just don't
    want or need it any more.

### Grist Database (or a similarly free Airtable-like clone)

- Host historical data for 607 CSA Orders (2015-24) in a web-based, free &
  open source "no-code database" akin to Airtable; examples:
  - [Grist] (Jamie's recommendation)
  - [NocoDB]
  - [BaseRow]
- Create member accounts for CAA/607 team members to securely access the
  specific data they need
- Segment data so it can granted separate permissions and pseudonymized for
  non-CAA/607 partners w/o sharing personally identifying information (PII)
  or other private data.
- Create dedicated views and tables to meet the operational needs of CAA/607
  team members.
- Add user-friendly utilities for running member retention analytics, but
  also for modifying/adjusting the analysis.

[Grist]: https://www.getgrist.com/
[NocoDB]: https://www.nocodb.com/
[BaseRow]: https://baserow.io/

### Data Analytics Hackathon/PAR

::: warning TODO

Point out how this is "generative" for reproducing the conditions for more
refined feature development – the engine that keeps filling the bucket, keeps
the cycle going.

:::

- Develop further analytics utilities & scripts that can be incorporated
  into the Grist database.
- Conduct a more comprehensive review in the style of a hackathon or as
  Participatory Action Research (or PAR, a la Paolo Freire) to identify
  areas of greatest need and potential improvement to food sovereignty
  initiatives in the region.
- Use pseudonymized data and its derivatives, which we can open up to
  collaboration with other trusted members of the community.

### Data Integrations / Webhooks

- Automate synchronization and other operations between Grist and CSAware to
  reduce the need for duplication of data entry efforts and other repetitive
  tasks.
- Explore other options like the [DFC Standard] or [Common Farm Conventions]
  to leverage existing utilities for sharing data with other external
  platforms like Open Food Network, Shopify, soil labs, etc.
- Find ways to bring other interested partners online and how to port their
  existing data from the services they currently use.

[DFC Standard]: https://dfc-standard.org/
[Common Farm Conventions]:
    https://our-sci.gitlab.io/conventions/common_farm_conventions/wiki/


### Project Description

::: details TODO

From the Float proposal template:

> Describe your project in detail (up to 400 words).

:::

### Measurable Outputs

::: details TODO

From the Float proposal template:

> Describe the measurable outputs, if any, which could serve as a reasonable
> proxy for project success, or describe why this is difficult for this project
> specifically (up to 100 words).

:::

### Anticipated Challenges

::: details TODO

From the Float proposal template:

> Share any anticipated challenges that could keep the project from
> accomplishing aims, and how you plan to mitigate them (up to 200 words).

:::

### Team Expertise

::: details TODO

From the Float proposal template:

> Describe your expertise, extra special gifts, and
> affiliations of the Project Team (up to 200 words).

:::

## Project Impacts

### Anticipated Impacts

::: details TODO

From the Float proposal template:

> Describe the project’s anticipated impacts across interdependent scales
> (individuals, farmers, and users; communities and territories; ecosystems;
> economies - up to 400 words).

:::

### Key Beneficiaries

::: details TODO

From the Float proposal template:

> Who specifically benefits, and how? (up to 200 words)

:::

### Unintended Consequences

::: details TODO

From the Float proposal template:

> What if you are wrong? What are potential consequences - downsides, risks, or
> possible harms that could result from implementing or attempting to implement
> this project? (up to 200 words)

:::

## Project Plan

That "kernel of infrastructure" will in fact represent a small proportion of the
overall time/effort/budget that goes into this project (I'd est. ~20-30%, atm),
while a greater proportion will go to a participatory research / design /
analytics clinic (~30-40%), followed by some critical service integrations with
CAA's existing tech tools, as well as possible integrations with tooling and
services offered by other Float participants (~30-40%), if the community finds
them helpful.

### Key Milestones and Deliverables

::: details TODO

From the Float proposal template:

> Provide a clear timeline for your project with key milestones and deliverables
> (up to 200 words).

:::

### Budget

::: details TODO

From the Float proposal template:

> Provide a detailed budget for your project. 

:::

### Budget Narrative

::: details TODO

From the Float proposal template:

> Explain how the requested funds will be used to achieve your objectives (up to
> 100 words).

:::

### Additional Resourcing

::: details TODO

From the Float proposal template:

> To help inform future Float funding rounds, beyond funding, what other
> resources or support would be helpful for your project's success? (e.g.,
> technical expertise, community feedback, mentorship) (up to 100 words)

:::


## Participation

### Overall Involvement

::: details TODO

From the Float proposal template:

> In 2-3 sentences, describe the overall level of the project team members’
> involvement in the Float community.

:::

### Peer Feedback Involvement

::: details TODO

From the Float proposal template:

> In 3-5 sentences, please describe, in a general way, the sort of feedback
> project team members have been able to provide to other projects, if they have
> had the opportunity to do so.

:::


### Project Peer Feedback

::: details TODO

From the Float proposal template:

> If applicable, describe the feedback you have received from other Float
> participants, and how this has affected the shape of your project and/or
> proposal (up to 100 words).

:::

### Openness to Collaboration

::: details TODO

From the Float proposal template:

> If your project is looking for collaborators, in general or with particular
> skills or aptitudes, please say so here (up to 100 words).

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

::: details TODO

From the Float proposal template:

> If your proposal is not selected, would you like it to be automatically
> included in the “Discovery” co-budgeting round, which is set to follow?

:::
