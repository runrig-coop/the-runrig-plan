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

## Phase #1: Low Fidelity Pilot
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
