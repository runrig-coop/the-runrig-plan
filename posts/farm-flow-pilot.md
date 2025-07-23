---
title: The Farm Flow Pilot
subtitle: A maintainable development framework & portable data model
description: The history of Farm Flow's development as a Runrig pilot
    application, with all that entails, including a portable data model.
author: Jamie Gaehring
date: 2025-05-26
outline: [2, 4]
---

Runrig's role in the development of Farm Flow was not only to produce a pilot
app for the board's digital incarnation, but to guide the establishment of a
maintainable software project for the long haul. Ideally it would bring
immediate value to Fitzgerald Organics and its operations from Day 1, but
without requiring Matthew to take on the additional fulltime job as project
manager.

## Planned Development Cycle

1. __Low Fidelity Board__: Begin with a low fidelity board that meets the
   minimal requirements for representing Farm Flow’s core data points. Support
   all essential CRUD operations in terms of both user interactivity and data
   persistence between sessions. The goal is to take the shortest path to
   enabling connectivity through LiteFarm integration (Phase 2), while
   deferring final design decisions until practical data and user feedback can
   influence the process (Phase 3).

2. __Connectivity & LiteFarm Integration__: Integrate the board’s interface,
   data model, and storage with LiteFarm’s servers. Users must be able to
   authenticate securely with LiteFarm and synchronize their data upon all CRUD
   operations. Ensure that data is smoothly synchronized at the start and end
   of each session and that the sync status is effectively communicated to the
   user. Once this is achieved, LiteFarm can be effectively used to capture
   practical data from the field from mobile devices, while also providing a
   supplemental dashboard for reviewing data from desktop or mobile screens.

3. __High Fidelity Board__: Make final design decisions and bring significant
   enhancements to the visual display and general usability. Design details
   such as animated transitions and responsiveness to different screen sizes
   will be fine-tuned, with attention given to the overall user experience
   (UX). This will be the point at which to settle on a consistent theme and
   design elements, such as color palette, typography, and spacing. This will
   hopefully indicate a path towards a distinct brand for Farm Flow in its
   continued development.

## Phase #1: Low Fidelity Pilot
A demo of the browser-based app is available at [farm-flow-board.pages.dev]. You
will need to import a data file to get started, which can be downloaded as JSON
from the project's GitHub repository: [`crop-2023.json`]. This demo should
considered experimental and highly unstable; it will not be provided with
ongoing support.

[farm-flow-board.pages.dev]: https://farm-flow-board.pages.dev/
[`crop-2023.json`]:
    https://github.com/runrig-coop/farm-flow-board/blob/main/public/crop-2023.json


## Architecture & Design
### Runrig Design Principles
The Farm Flow board has been developed in accordance to several of Runrig's
design principles, most notably:

- Identify the __core competency__ of the application that will most immediately
  add value to the user's existing workflow, without reproducing functionality
  that already exists in other applications.
- Adapt the application to function as a __middleware__ or "glue service" that
  can augment existing FOSS applications and services, while still remaining
  relatively independent and agnostic of the host application's service
  architecture.
- Maintain __data independence__ and separate the domain model from the service
  architecture as much as possible. Ensure that __data portability__ is a
  first-order feature from the very first iteration.

### TypeScript, Vue.js, and HTML Canvas
The application uses TypeScript for its versatility in browser, server, and
desktop environments. This first pilot is implemented as a single-page
application (SPA) that can be deployed to any CDN service, such as those
provided by Vercel, Netlify or Cloudflare. Browser-based persistence is provided
by [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
and fully offline-first functionality could be introduced easily by dropping in
[a "zero-config" plugin](https://vite-pwa-org.netlify.app/).

[Vue](https://vuejs.org/) was chosen as the frontend framework along with
[Vite](https://vite.dev/) for tooling, partly out of preference and familiarity,
but also because they provide first-class support for both consuming and
generating [web components](https://vuejs.org/guide/extras/web-components.html).
This affords an easy escape hatch to port Farm Flow to other applications as a
component library without the need to manually port the Vue components and
reactive state to other frameworks, such as React or Svelte.

The core rendering logic for the board itself has been implemented with the
browser's native [Canvas
API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API), without the
use of Vue components or reactive state whenever possible. This is again to make
it easier to port this core rendering logic to other JavaScript frameworks, such
as React or Svelte. Because the Canvas API is part of the greater [WebGL
API](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API), which itself
conforms closely to [OpenGL](https://www.khronos.org/opengl/), there is also the
possibility of porting this logic to other languages that support native desktop
SDKs and other environments.

### farmOS Data Model
In the interest of promoting data portability and interoperability with other
existing services, Farm Flow has loosely adopted the [farmOS Data
Model](https://farmos.org/model/) to structure its internal state and on-devise
database (IndexedDB). Adoption of the farmOS Data Model has been taking hold in
more and more projects beyond the farmOS ecosystem itself, particularly with its
adoption by members of the [OpenTEAM community](https://openteam.community).

The farmOS Data Model extends Drupal's Entity-Relationship Model, which includes
a two-tiered inheritance model of _entities_ and _bundles_. Entities are the
higher, functional tier of classification, including _assets_, _logs_, _users_,
etc. Bundles are lower, categorical tier, with _land_, _products_, _animals_,
_equipment_ being examples in the _asset_ family of entities. Accordingly, they
"bundle" together relevant fields such as the _manufacturer_ and _serial number_
in the case of equipment, or _birthdate_ and _sex_ in the case of animals. All
resources must be classified by both _entity_ and _bundle_. The combination of
_entity_ and _bundled_ is considered that resource's _type_, and is represented
as a JSON string by the entity name (singular) followed by two dashes (`"--"`)
then the bundle name – for example, `"asset--equipment"`, `"log--harvest"`, or
`"taxonomy_term--season"`. 

For the time being, Farm Flow only employs a small subset of the entities and
bundles that come with a standard farmOS installation, which are listed below.
Non-standard entities, which have not been implemented as farmOS modules but
otherwise conform to specifications, are denoted with asterisks (\*).

- Assets
  - Land (aka, location)
  - Plant (a specific planting or succession)
- Logs
  - Activity
  - Harvest
  - Input
  - Seeding
- Plans
  - Farm Flow Board\*
- Taxonomy Terms
  - Plant (crop or varietal)
  - Standard Operation Procedures\*

All of these resources must have at least two fields: an `id` string represented
by a UUID (v4), and a `type`, which is a JSON string structured in the
`"{type}--{bundle}"` format. On their own, the `id` and `type` fields form a
compete _identifier_ that can be used to indicate a relationship to another
resource.

We're ignoring many of the other fields included in each of these bundles by
default, since they're not needed in this application and can be derived from
defaults at a later time, if at some point full integration with a
farmOS-compliant system becomes desirable. Their approximate type definitions
are provide below in abbreviated form. For the most up-to-date and complete
definitions, see [`/src/data/resources.ts`](./src/data/resources.ts).

#### Assets: land (location) and plant

```ts
interface LocationResource {
  id: UUID;
  type: 'asset--land';
  name: string;
}

interface PlantResource {
  id: UUID;
  type: 'asset--plant';
  crop: CropIdentifier | null;
  location: LocationIdentifier | null;
}
```

#### Logs: activity, harvest, input, and seeding
```ts
interface LogResource {
  id: UUID;
  type: |
    'log--activity' |
    'log--harvest' |
    'log--input' |
    'log--seeding';
  name: string;
  date: Date,
  location: LocationIdentifier | null,
  operation: OperationIdentifier | null,
  plant: PlantIdentifier | null,
  notes: string,
}
```
#### Plans: Farm Flow Board

```ts
interface BoardInfo {
  id: UUID;
  type: 'plan--farm_flow_board';
  name: string;
  dateRange: [Date, Date],
  crops: PlantIdentifier[],
}
```

#### Taxonomy Terms: plant (crop) and operation (SOP)

```ts
interface CropTerm {
  id: UUID;
  type: 'taxonomy_term--plant';
  name: string;
}

interface OperationTerm {
  id: UUID;
  type: 'taxonomy_term--standard_operating_procedure';
  name: string;
}
```


:::warning DRAFT NOTICE

This documents is still in draft; please check back soon to read more!

:::

