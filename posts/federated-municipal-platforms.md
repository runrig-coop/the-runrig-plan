---
title: Federated Municipal Platforms
subtitle: A fundamental design pattern
description: A description.
author: Jamie Gaehring
date: 2025-08-26
outline: [2, 4]
---

> It would be fine if freedom were as easy as this, that man was naturally free.
> But it is not true. Freedom is the product, not of the instincts, but of
> social relations themselves. Freedom is secreted in the relation of man to
> man.
> 
> — Christopher Caudwell, _Studies in a Dying Culture_ (1937)

As a design methodology, the Runrig Plan prioritizes organic design elements
that can evolve and that are _necessarily_ enmeshed within a broader ecosystem
of digital and social technologies, the majority of which are outside the
designer's control. I've tried to distill this down to a simple maxim: _ecology
over architecture_. This is meant to inoculate against a tendency in software to
fixate on the latest "tech stack," whether that's blockchain, neural networks,
or whatever database happens to be the latest fad. I don't mean to eschew the
notion of architecture altogether; it just shouldn't represent a hard boundary,
demarcating the totality of the design space. Architecture must yield to the
greater ecology the system, which knows no bounds, and so become less
determinate, less mechanistic, more permeable. Good architecture must be able
and willing to float.

Federated municipal platforms are intended to be one such architectural pattern,
one that will play a central role in many of the systems I hope to build with
Runrig.

## Some Definitions
A __federated municipal platform__, or FMP, can be defined by reference to its
three constituent terms, working backwards from the last:

- As a __platform__, it will host a suite of software applications and network
  services, like so many of the "cloud" platforms we already interact with every
  day (e.g., Amazon, Facebook, Airbnb, Netflix). There may be only one such
  service visible to users, or it might be several distinct applications, but
  they should be closely integrated and able to communicate with each other. In
  this regard, it will be comparable to the way Google Calendar, Drive, and
  Gmail all function as separate apps but also as one integrated platform,
  simultaneously. Farmers, food workers, and other community members will access
  these services via dedicated mobile apps, browser-based web apps, possibly
  even remote sensors or on-board displays in tractors and other vehicles.

- As a __municipal__ platform, its user-members will share collective ownership
  and control of its services, along with certain responsibilities to maintain
  and improve it.[^userdata] How exactly those services and their maintenance
  are governed will be up to the user-members collectively, but should adhere to
  democratic principles or consensus procedures. Members will therefore have to
  get to know one another other, if they don't already, either remotely or in
  person. To keep this from becoming too unwieldy or over-bureaucratized, it
  will require at least a few 10s of members, perhaps 100s, but ideally not
  beyond a few 1,000s or at most 10,000s. Ideally all members will live and work
  within relatively close proximity to one another, so that the platform
  represents a regional demographic, foodshed, or bioregion. In the absence of
  geographic closeness, the membership ought to share some other material
  interest or concern – beyond the platform itself – to ensure their long-term
  commitment to each other's mutual success and well-being.

[^userdata]: Collective ownership and control does not apply to purely
  individual data, only the services and maintenance of those services. Each
  user's data will always be theirs and theirs alone, to share with only certain
  other members or the public or to keep it private, however they so choose.
  This applies on the organizational level, too, although some internal
  democratization would be encouraged and possibly facilitated by the platform.

- As a __federated__ platform, it will be capable of connecting with other
  platforms just like it. With some due diligence, it could even connect to
  platforms that are _not_ so like itself, such as traditional payment and
  e-commerce platforms (e.g., Shopify, Squarespace, PayPal) or corporate cloud
  storage services (e.g., iCloud, Dropbox, Airtable). Perhaps most importantly,
  this means users aren't restricted from joining more than one platform,
  switching between them, or leaving entirely. Their data can easily follow them
  with just a simple authorization process, whenever they choose. In other
  words, you're not forced to stay put or move to whatever app holds your data;
  your data will always come to you. Similarly, sharing your data doesn't force
  those you share it with to switch to your platform or preferred service.

With Runrig, I plan to work mostly within food and agricultural communities, so
I've defined the FMP in familiar terms like "foodshed" and "farmers." There's
nothing about this architecture, however, that couldn't be applied to more
generic community groups or for different types of activity.
