---
title: Runrig Design Patterns
author: Jamie Gaehring
date: 2025-12-31
outline: [2, 4]
---

:::warning HERE BE DRAGONS 🐉 

Still in a ___very___ rough state of draft...

:::

## List of Design Patterns
:::warning Draft Notice

- Based on errata from [FMP post](./federated-municipal-platforms.md).
- Refer to Roadmap, DWeb Slides, FF Pilot § RR Design Principles, etc.

:::

- __Fix, Improve, Extend, Fork (FIEF):__ Don't start a new greenfield project
  when an existing free software program can be fixed, improved, extended, or
  forked (in that order) to achieve the same end.
- __Data Portability as a First-Order Feature:__ 
- __Disposable Code, Durable Data:__ 
- __Glue Code & Bridge Services:__ Sometimes FIEF isn't enough if two or more
  brownfield projects could already achieve the necessary features but none of
  them have all the features, so create a bridge service
- __From Replaceable to Extensible:__ 
  - _Corollary: Glue code becomes configuration._
- __Iterative Social Process:__ Like an iterative software development process,
  social technologies should be designed and deployed by a swift succession of
  small, iterative changes. This will afford a tight feedback loop, early
  opportunities to reflect on newly acquired information from previous
  iterations, and the ability to adapt to new or changing requirements with
  ease. Social design iterations should match tempo with technology development
  iterations, roughly speaking.
- __Social Abstraction:__ <!-- incorporate heuristics from notes below -->

to work with existing software projects and brownfield applications to work on
classic [`wontfix`] issues

[`wontfix`]:
    https://github.com/search?type=issues&q=label%3Aenhancement+label%3Awontfix+is%3Aclosed

## Heuristics

:::warning DRAFT NOTICE

- From a late draft of ["Against Scale"](./against-scale.md)
- Maybe incorporate "local maxima in the fitness landscape" from [DWeb slides].

:::

[DWeb slides]: https://dweb.camp/p/foodweb__response-to-utility-proposal


### Distributing Control vs Scaling Production
1. __Low & Slow:__ _Favor low-tech solutions whenever possible and gradually
   adopt digital tools that the community controls and can maintain by its own
   means and resources, even at the earliest phases of organizing._

   When I work with farmers, I sometimes use a rubric for solving design
   problems that I call the "Clipboard \> Spreadsheet \> App Store" rule. Start
   off with a clipboard and see if that does the trick. Then try a plain old
   spreadsheet, sticking to standard formulae and data formats (avoid
   vendor-specific features like Excel scripts). Only when those fail should you
   reach more advanced software tailored to your situation – e.g., e-commerce,
   bookkeeping, or crop planning apps – let alone customized plugins or apps
   built from scratch. Feel free to substitute the clipboard with a notebook,
   whiteboard, wall calendar, or other non-digital communication tool of choice;
   likewise, the spreadsheet can be a stand-in for email, a _simple_ chat app
   (i.e., Signal, WhatsApp, or SMS; avoid more complex productivity suites like
   Slack or MS Teams if you can), or collaborative document editing tools
   (preferably free software like LibreOffice, Collabora, or EtherPad, but
   Google Docs, EverNote, or Notion are all fine if that's what people already
   have installed).

2. __Law of Parsimony:__ _Start within small communities and a small tech
   footprint, if possible, or select smaller working groups of early adopters
   within a larger community then expand outward._

   Making community control a prerequisite to technology adoption, as in the
   previous recommendation, will automatically limit the scale and functionality
   of the systems you can deploy. Independently running servers or maintaining
   peer-to-peer apps will present its own challenges, especially if you are not
   relying on any existing proprietary software or corporate cloud services.
   However, this should be seen as a healthy, _humanizing_ dose of parsimony,
   not a shortcoming. If the overall size and complexity exceeds the groups own
   capacity to reach a consensus about your abstraction model, or you can't take
   the necessary collective actions to implement the model, try to scaling down.

3. __Social Abstraction Design:__ _Socialize the design process with
   people in your community and be explicit about your abstractions, their
   social and ecological implications._
   
   Make a practice of this from the start, even if you're just deciding on how
   to label your spreadsheet columns or debating whether to use sewn or
   spiral-bound notebooks (please remember to kind to each other :wink:). As you
   come to know each other's preferences, strengths and weaknesses, you'll grow
   your shared capacity to innovate, adapt, and trust one another. 


### Rules of Thumb (earlier alt. ver.)
Digital technology can facilitate liberation at any step along the way, but
organizers would be wise to adopt only those technologies that they control and
they can maintain by their own means and under their own power, even at the
earliest phases of organizing. Community control as a prerequisite to adoption
would be an automatic limiting factor to both scale and functionality, because
maintaining technology independently does come at a cost, especially if you are
not relying on any existing proprietary software or corporate cloud services.
However, this should be seen as a healthy, _humanizing_ dose of parsimony, not a
shortcoming. After all, the costs are shared by the entire community, not each
individual left to their own devices. That spreads out the costs, of course, but
it also reduces or eliminates certain costs by pooling the community's
collective resources, both monetary and non-monetary. Someone might have
technical skills they can share towards the development or maintenance of some
technology. Others might have an old laptop they were about to throw out that
could be repurposed for a server. Meanwhile, someone else may have a little
extra time to perform a simple manual task that obviates the need to run some
little bit of costly technology altogether. These savings may not add up to
much, they may not be contributed uniformly among all members, and some people
may find it easier to toss a little extra cash in the pot, all of which is fine.
Pooling shared resources like this, however, does double duty of strengthening
social bonds and builds the collective capabilities, and if it saves a few
bucks, all the better! It all goes straight back into a virtuous cycle that
becomes less and less constrained by financial costs and more and more
autonomous over time.


1. __Tech Adoption: Low & Slow Is the Way to Go__

    Longer description...

2. __Collective Cost/Benefit: No Shared Gains w/o Shared Pains__

    Longer description...

3. __Social Abstraction: Hang Together or Hang Separately__

    Longer description...


These recommendations are geared toward users first and foremost, as active
participants in the development process, and so they may not resemble a typical
development methodology. Responsible developers, however would be wise to heed
them and incorporate these intuitions into their own design process.


### Social Abstractions
- Don't abstract away your social relations; use your social relations to
abstract away the concrete necessities under capitalism.
- Social relations _are_ already an abstraction; they rarely need to be further
abstracted.

