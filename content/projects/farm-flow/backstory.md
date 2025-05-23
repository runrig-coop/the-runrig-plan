---
title: Farm Flow Backstory
subtitle: The project's origins & Runrig's initial assessments
description: Background on the Farm Flow project's origins, how Runrig became
    involved, and our initial assessments.
author: Jamie Gaehring
date: 2025-05-26
outline: [2, 4]
---

In the early spring of 2024, I was approached about consulting for a farmer-led
software project called Farm Flow. At first, I viewed the project as a software
generalist and independent contractor would. I consciously guarded myself
against becoming the proverbial "hammer that sees every problem as a nail," each
in desperate need of driving – that is, I did not want to force it into the
Runrig framework of software design. I said as much to the software's creator,
Matthew Fitzgerald of Fitzgerald Organics, on multiple occasions throughout the
course of our early evaluation. It was no accident, however, that the project's
underlying requirements and ultimate goals brought it into close alignment with
my own stated objectives for Runrig. I was introduced to Matthew through Samuel
Oslund of the 11th Hour Project, and no doubt Sam discerned the affinity between
our two projects far more readily than I had.[^sam]

[^sam]: The first time I ever tried to fully explain Runrig to anyone else was
on a short hike with Samuel on the last day of GOAT 2022. The last in a series
of momentous conversations, it came at the precise moment when Runrig started
taking definite shape in my own mind, and I attribute much of Runrig's essential
characteristics to Sam's astute guidance and constructive feedback.

### The Original Farm Flow Board
Farm Flow's first implementation was in physical form, a point I took to be one
of the strongest possible indicators for the effectiveness of any software
project, a credit to the soundness of its design. It stood as a roughly 72" by
48" whiteboard in Matthew's high-lofted equipment shed, prepared with a grid of
about 80 columns by 20 rows, give or take, meticulously etched out in black
permanent marker. The grid represented the farm's entire growing season of
planned field actions, with a column for every calendar day and a row for every
field or planting location. The dates and location names were written in magic
marker along the top and left-hand edges, respectively, so that the grid
contents could be erased and repurposed with each new season. Multi-colored
magnetic discs populated the grid cells at various intervals, demonstrating some
rather striking patterns, though their precise meaning was not immediately clear
to the untrained eye. The right-hand fringe of these discs were bounded by
raised magnetic pushpins (mimicking pushpin thumb-tacks in size and shape),
which were similarly colored but translucent and smaller in radius, so they
stood out less prominently than the discs. The pins represented actions that
were still only planned, while the discs represented those already completed. On
closer inspection, some discs were even stacked upon others within a single grid
cell; some actions, though not all, could be performed in the same day in the
same location, conditions permitting. Running intermittently in vertical lines
between the discs, you could make out faint numbers inscribed by a blue magic
marker within each of the individual cells. They indicated rainfall amounts in
decimal inches and rarely coincided with any placed discs, since the actions
they would have represented were prohibited by the rain (sometimes for several
days following, too). The rainfall quantities varied in magnitude as they ran up
and down the column, though only gradually, since the rows representing
geographic locations on the farm were grouped by proximity. In the wide open
space below the grid was a hand-written legend indicating the name of the
specific field action each color represented, alongside a collection of unused
discs and pins loosely clustered by color.

The key to the whole enterprise was that there was nothing at all arbitrary in
the arrangement of these field actions. Their precise timing and sequence were
determined by a set of standard operating procedures, or SOPs, which were the
product of ongoing development by this small team of farmers. The SOPs lived in
written form within folders filed into separate trays that hung from the back of
the whiteboard itself. The trays also held carbon-copy ticket books, which would
be filled out with specific quantities and target values to inform the execution
of a given operation at a particular time and place. Space was left on each
ticket for the entry of actual values achieved or observed, so that upon
completion the ticket could be stored in the appropriate folder for future
reference.

## Farm Flow: A Runrig Pilot App
Runrig's role in the development of Farm Flow was not only to produce a pilot
app for the board's digital incarnation, but to guide the establishment of a
maintainable software project for the long haul. Ideally it would bring
immediate value to Fitzgerald Organics and its operations from Day 1, but
without requiring Matthew to take on the additional fulltime job as project
manager.

### Phase #1: Low Fidelity Pilot
The first phase of the pilot application, accordingly, was meant to offer the
most critical functionality of the board visualization itself, which we
identified as Farm Flow's single greatest value proposition (the SOPs being a
close second). The goal was to get a functioning app into Matthew's hands that
could capture the same data points displayed on the board and persist that data.
Future iterations would improve on the finer points of design later on:

- Bare minimum for core CRUD operations
- Local-first, browser-based app hosted on [CDN]
- Import & export from a single JSON file

[CDN]: https://farm-flow-board.pages.dev/
