---
title: Hudson-NYC Pilot FMP
subtitle: A proposal to pilot a Federated Municipal Platform for the Hudson
    Valley & NYC Metro Area
description: Part of the Float Participatory Funding Project
author: Jamie Gaehring
date: 2025-12-01
drafted: 2025-10-31
---

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
