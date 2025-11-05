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

:::

## Primary Objective
To sum up, here is our working definition for the type of Federated Municipal
Platform (FMP) that we propose to pilot for the Hudson Valley & New York City
Metro Area, as a collaboration between the [Catskills Agrarian Alliance] (CAA)
and Runrig, along with other [Float] participants that wish to collaborate:

> A federated municipal platform, or FMP, is a communally owned & controlled
> digital platform, enabling a regional foodshed or bioregion to manage its own
> land, resources, and labor according to its own needs. It can host a range of
> free software applications & services, from dedicated food & agricultural
> software to generic productivity apps, all determined by a local municipality
> of users. As a federated platform, it can simultaneously cooperate with other
> community-based platforms to share resources and contribute to global
> solidarity efforts.

Refer to the [FMP design doc] for more details on the specific architectural
and social attributes of a Federated Municipal Platform.

This specific deployment will be incredibly modest in comparison to that big
picture, but is intended to provide a kernel of infrastructure that the CAA can
own and control from the very start, then expand the platform to meet their
needs, all at their own pace. Runrig, other Float participants, and members of
the free software community will provide digital stewardship, consultation, and
other technical services along the way.

That "kernel of infrastructure" will in fact represent a small proportion of the
overall time/effort/budget that goes into this project, roughly 20-30% I would
estimate at the moment, while a greater proportion will go to a participatory
research / design / analytics clinic (30 - 40%), followed by some critical
service integrations with CAA's existing tech tools, as well as possible
integrations with tooling and services offered by other Float participants (30 -
40%), if the community finds them helpful.

[Float]: https://float.ag/
[FMP design doc]:
    https://www.runrig.org/posts/federated-municipal-platforms.html

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

## Development Goals for this initial funding

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

## Project Background & History
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
    https://www.runrig.org/posts/federated-municipal-platforms.html
[Technical Interview with Tianna Kennedy of the CAA]:
    https://www.youtube.com/watch?v=Lm6eFME6OpY
[The MAIA Project]: https://github.com/skywoman/multifarm-aggregation-info-arch/

## Seeking Collaborators!
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
