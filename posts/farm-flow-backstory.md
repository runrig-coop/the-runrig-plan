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
software project called Farm Flow. At first, I viewed the project the way a
software generalist and independent contractor would. I consciously guarded
myself against becoming the proverbial "hammer that sees every problem as a
nail" – that is, I did not want to force Farm Flow into Runrig's model for
software design. I said as much to the software's creator, Matthew Fitzgerald of
Fitzgerald Organics, on multiple occasions throughout the course of our early
evaluation. It was no accident, however, that the project's underlying
requirements and ultimate goals brought it into close alignment with my own
stated objectives for Runrig. I was introduced to Matthew through Samuel Oslund
of the 11th Hour Project, and no doubt Sam discerned the affinity between our
two projects far more readily than I had.[^sam]

[^sam]: The first time I ever tried to fully explain Runrig to anyone else was
on a short hike with Samuel on the last day of GOAT 2022. The last in a series
of momentous conversations, it came at the precise moment when Runrig started
taking definite shape in my own mind, and I attribute much of Runrig's essential
characteristics to Sam's astute guidance and constructive feedback.

## The Original Farm Flow Board
Farm Flow's first implementation was in physical form, which was a credit to the
soundness of its design, by my estimate, since it had already demonstrated its
effectiveness before any attempt was made to digitize it. I took it to be a
positive indicator for its potential as a software project, too, so long as a
compelling case could be made for how that might improve upon the physical
design or introduce new affordances.

![](/whiteboard_2024-06-09-a.jpg "The original Farm Flow whiteboard")

The physical implementation was a large whiteboard standing roughly 72" wide x
48" high in Matthew's equipment hangar. It was prepared with a grid of about 80
columns by 20 rows, give or take, meticulously etched out in black permanent
marker. The grid represented the farm's entire growing season of planned field
actions, with a column for every calendar day and a row for every field or
planting location. The dates and location names were written in magic marker
along the top and left-hand edges, respectively, so that the grid contents could
be erased and reassigned with each new season.

Multi-colored magnetic discs populated the grid cells at various intervals,
demonstrating some rather striking patterns, though their precise meaning was
not immediately clear to the untrained eye. The rightmost extent of these discs
– i.e., the column corresponding to the current date – was hemmed in by an array
of magnetic pins, mimicking pushpin thumb-tacks in size and shape. The pins were
similarly colored as the discs but translucent and about half their radius, so
they stood out less prominently than the discs. The pins represented actions
that were still only planned, while the discs represented those already
completed. On closer inspection, some discs were even stacked upon others within
a single grid cell; clearly some actions, if not all, could be performed on the
same day in the same location, conditions permitting. In the wide open space
below the grid was a hand-written legend indicating the name of the specific
field action each color represented, alongside a collection of unused discs and
pins clustered by color.

Some of the columns were occupied by a line of numbers, one or two digits
faintly inscribed with a blue magic marker in each of the grid cells. These
indicated rainfall amounts in decimal inches. They rarely coincided with any
placed discs, since the actions they would have represented were prohibited by
the rain (sometimes for several days following, too). The rainfall quantities
varied in magnitude as they ran up and down the column, though only gradually,
since the rows representing geographic locations on the farm were grouped by
proximity.

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

That's the best synopsis I can give in just two paragraphs and it woefully
oversimplifies the system as Matthew conceived it prior to my involvement. For
more details, he gave an excellent [presentation on Farm Flow] to the OpenTEAM
HCD Working Group in 2024 that covers the data analysis and layout of the board.

[presentation on Farm Flow]: https://share.mayfirst.org/s/Bj5FknFttsib2LD

## A Previous Attempt
Prior to our introduction, Matthew had commissioned another software team
through Upwork. They produced a fairly generic client-server web application,
with an SQL database and multi-user access control, plus an iOS app with basic
form views for updating the activities and locations. The web dashboard offered
several visualizations of the farm locations and activities, but these didn't
correspond at all to the unique visual language of the original whiteboard, nor
did it capture or display the most critical datapoints and processes in the
SOPs.

This initial prototype was far from a trivial accomplishment; even as typical as
those features are, they still entail plenty of complexity to develop and
deploy, which I certainly do appreciate. It's also hard to conceive of a final
version of Farm Flow that would _not_ require similar functionality for network
connectivity, remote persistence, multi-device access, and permission-based
collaboration; outside of those typical requirements, however, the application
achieved none of what actually makes Farm Flow unique. In the end, nothing from
that effort proved salvageable, since communication with their team was always
intermittent at best and the source code was never forthcoming. 

:::warning DRAFT NOTICE

This documents is still in draft; please check back soon to read more!

:::
