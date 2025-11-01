---
title: Data Independence
author: Jamie Gaehring
date: 2025-12-31
outline: [2, 4]
---

:::warning HERE BE DRAGONS 🐉 

Still in a ___very___ rough state of draft...

The introduction, like many of the sections that follow, is based on personal
notes from 22 Feb 2025, copied here w/o any further review or revision.


:::

A traditional database management system (DBMS) is said to maintain _data
independence_ if the way data is saved to (and later retrieved from) a physical
storage medium can be decoupled from the way that data is processed by
applications and services and ultimately conceptualized by their end users. The
process of storing and retrieving is referred to as the _physical layer_, and it
typically involves reading from and writing to a disk drive, RAM storage, or a
file system. Accordingly, the application data processes are called the _logical
layer_, and they might come in the form of structured queries, binary encoding,
stream processing, displaying data on a monitor, or loading it into a common
office application from file. Sometimes a _conceptual layer_ is also added
between these two as an extra layer of indirection.

To restate the general principle, if changes are made to the physical layer –
whether that's in order to improve performance or data integrity, etc. – the
user or application developer should not have to know anything about those
changes, nor modify any behavior in the logical layer, yet they should be able
to continue reading and writing to the database without incident.

## Traditional Data Independence

:::warning Draft Notice

This section is based on personal notes from 22 Feb 2025, copied here w/o any
further review or revision.

:::

Data independence is as old a concept as databases. It was a key motivator for
E. F. Codd's seminal paper from 1970 [on the relational model]. Later academics
have been [quick to point out] that even SQL and its various implementations
don't meet all of Codd's criteria perfectly, but for the most part, modern
database engines provide sufficient data independence. Application developers
don't have to pay much mind to how data is physically stored on disk, at least
within the typical performance range.

There are, however, occasional attempts to extend the relational model beyond
databases and apply concepts like data independence more broadly in the realm of
systems design. A strong argument for this can be found in the paper by Moseley
and Marks, ["Out of the Tar Pit"], which has been influential in the resurgence
of functional programming paradigms since its publication in 2006\. The
relational model and data independence play a key role in their argument for how
to manage complexity in large applications, so it bears excerpting here at
length:

> The relational model [Cod70] has — despite its origins — nothing
> _intrinsically_ to do with databases. Rather it is an elegant approach to
> _structuring_ data, a means for _manipulating_ such data, and a mechanism for
> maintaining _integrity_ and consistency of state. These features are
> applicable to state and data in any context.
> 
> In addition to these three broad areas [Cod79, section 2.1] [Dat04, p109], a
> fourth strength of the relational model is its insistence on a clear
> separation between the logical and physical layers of the system. This means
> that the concerns of designing a logical model (minimizing the complexity) are
> addressed separately from the concerns of designing an efficient physical
> storage model and mapping between that and the logical model. This principle
> is called _data independence_ and is a crucial part of the relational model
> [Cod70, section 1.1].

To date, I haven't come across these principles being _explicitly_ put into
practice for small-scale distributed systems, like peer-to-peer networks,
federated social media, or local-first design. I don't doubt the type of
wide-column, NoSQL datastores like Cassandra and Bigtable have taken all these
points into consideration, but while they surely can distribute data and
data-processing jobs across nodes all around the globe, it's for the purpose of
_centralizing power and social control_. They make little effort to distribute
data to actual humans, let alone real control over that data. They're also, as
far as I can tell, largely focused on the physical layer of DBMS, not the
conceptual or logical layers that touch application development and user space.

### Relevant Literature
- E. F. Codd. 1970. [A relational model of data for large shared data banks].
  _Commun. ACM 13_, 6 (June 1970), 377–387.
  https://doi.org/10.1145/362384.362685
- Peter Pin-Shan Chen. 1976. [The entity-relationship model—toward a unified
  view of data]. _ACM Trans. Database Syst. 1_, 1 (March 1976), 9–36.
  https://doi.org/10.1145/320434.320440
- Hugh Darwen and C. J. Date. ["The Third Manifesto"] SIGMOD Rec. 24, 1 (March
  1995), 39–49. https://doi.org/10.1145/202660.202667
- C. J. Date. [_Introduction to Database Systems, 8th Edition_], (2004).
- Ben Moseley & Peter Marks. ["Out of the Tar Pit"], 2006.


[on the relational model]: https://dl.acm.org/doi/10.1145/362384.362685
[quick to point out]: https://dl.acm.org/doi/abs/10.1145/202660.202667
["Out of the Tar Pit"]:
    https://github.com/papers-we-love/papers-we-love/blob/main/design/out-of-the-tar-pit.pdf
[A relational model of data for large shared data banks]:
    https://dl.acm.org/doi/10.1145/362384.362685
[_Introduction to Database Systems, 8th Edition_]:
    ./2025-02-22_CJ%20Date%20on%20Data%20Independence.md
["The Third Manifesto"]: https://dl.acm.org/doi/abs/10.1145/202660.202667
[The entity-relationship model—toward a unified view of data]:
    https://dl.acm.org/doi/10.1145/320434.320440


## DBMS != a Service Architecture

:::warning Draft Notice

This section is based on personal notes from 22 Feb 2025, copied here w/o any
further review or revision.

:::

But what about services and distributed systems? Practically everything is a
service nowadays – or a microservice, if such a distinction has much meaning. To
my knowledge, this represents a distinct topology at the physical layer that
goes unaddressed in terms of data independence. From what I've read, the network
presents a boundary that the data independence model never cares to traverse.
Once data hits the network, other paradigms like Representational State Transfer
(REST) or Service-Oriented Architecture (SOA) tend to prevail, but these tend
not to include a rigorous distinction of the physical layer of storage. They
also tend to come with implicit assumptions that may disallow data independence,
like co-locating services with the data they handle or imposing a strict
client-server distinction. Meanwhile, frontend clients, with their capacity for
storing and processing data offline and collaboratively, are steadily becoming
less like clients at all and more like self-sufficient nodes in a peer network.
They persist data concurrently that must be reconciled with other nodes on the
network, and so each each device must be considered part of that physical layer
as well. What assumptions of a traditional DBMS no longer apply to these new
service-oriented, distributed systems?

How do even the Big Data solutions fail to separate the logical layer from the
physical layer when so much is still contingent on individual services being
colocated with the data they operate on? Is that even a fair description or a
reasonable question to ask?

## Extending Data Independence

:::warning Draft Notice

This section is based on personal notes from 22 Feb 2025, copied here w/o any
further review or revision.

:::

__Separate the service architecture from the domain model__: this seems to me
like a higher level of data independence that encompasses more than just
localized data storage and application design. In the direction of database
systems, or the physical layer, this level of data independence goes further to
include network infrastructure and partitions due to geographic separation as
well as access control. At the other end, it extends the conceptual and logical
layers to include the expectations of domain experts and, ultimately, end users.

```
                 |====== Classical =======|
                 |== Data Independence ===|
                 ↓                        ↓
| Service Arch <= Storage/DBMS | Query/API => Domain Model |
↑                                                          ↑
|======== Extended Boundaries of Data Independence ========|
```

To restate the principles of data independence once again, but within this
broader framework, ... 

sufficiently that the service implementation can be changed to suit various
network topologies and hardware configurations without fundamentally altering
the domain model.

At the same time, full separation must freely accommodate shifts in how domain
experts conceptualize the data model as well as the end user's choice of
interface or platform ... 

By "interface or platform" I mean the widest range of options available to users
for how they interact with data and services: from their choice of device, its
chip architecture and operating system to what app they use to open a given file
type; whether they prefer web-based or native apps; or whether they prefer to
collaborate and share data through email, Slack, SMS, Git servers, social media,
or secure chat apps like Signal. Consider the kinds of files that can be shared
across a diversity of platforms such as Google Drive, Dropbox, rsync, Network
Area Storage (NAS), WebDAV, iCloud, Samba Share, FTP, AirDrop, GitHub,
BitTorrent, OneDrive, etc. Then consider the prolific range of applications that
could read and write to all those file types and then the infinite forms of
interaction between users that such sharing can facilitate. As system designers
at _all_ levels – and this includes designers of hardware, software, frontends,
backends, whatever DevOps means nowadays, and everything in between – we must
learn to design for the _General Purpose User_, or [Turing Complete User], an
inversion of the concept of a [universal Turing machine], first articulated by
Olia Lialina in 2012:

> General Purpose Users can write an article in their e-mail client, layout
> their business card in Excel and shave in front of a web cam. They can also
> find a way to publish photos online without flickr, tweet without twitter,
> like without facebook, make a black frame around pictures without instagram,
> remove a black frame from an instagram picture and even wake up at 7:00
> without a “wake up at 7:00” app.
> 
> [...]
>
> __There is nothing one user can do, that another can’t given enough time and
> respect.__

These considerations may seem a far remove from the ordinary sphere of data
independence, which tends not to extend beyond the design of databases whose
main users are applications developers and sysadmins. We should recall, however,
that this principle dates back to a time when multiplexing mainframe terminals
and database queries _were_ the primary platform and user interface. It is
perhaps symptomatic of the 

[Turing Complete User]:
    https://www.contemporary-home-computing.org/turing-complete-user/
[universal Turing machine]:
    https://en.wikipedia.org/wiki/Universal_Turing_machine


## ER Model vs Merkle Trees and DHTs

:::warning Draft Notice

This section is based on personal notes from 22 Feb 2025, copied here w/o any
further review or revision.

:::

What if instead of the Entity Relationship (ER) Model we used something like a
Name-Value Model or Identifier-Value Model, akin to what Rich Hickey describes
in his talk, ["Are We There Yet?"] and the [Hash Array Mapped Trie] (HAMT) that
he used in the [Clojure implementation] of [persistent data structures]? HAMT
was first described by Phil Bagwell in his highly regard 2000 paper, ["Ideal
Hash Trees"], which I still need to read.

According to Wikipedia, there's also this thing called a [Concurrent Hash Trie]
(or Ctrie, not to be confused w/ C-trie), which boasts:

> Ctries support a lock-free, linearizable, constant-time snapshot operation,
> based on the insight obtained from persistent data structures. This is a
> breakthrough in concurrent data-structure design, since existing concurrent
> data-structures do not support snapshots.

The "snapshot" aspect is appealing, given how much emphasis Hickey gives to the
metaphor in describing Whitehead's Process Philosophy. But is immutability what
a distributed system like the ones I'm describing above would actually need or
want? All of these other implementations are meant for in-memory data structures
or for optimizing many write operations, things like language interpreters and
[Software Transactional Memory] (another concept Hickey mentions in his talk);
that's really not much like the problem I'm hoping to solve. So is there a way
to simplify that functionality w/o breaking it? What I should be aiming for is a
model tailored to low-power, distributed environment that can run across a small
regional network, preferably even more localized by mesh networks and P2P
connections, not a data center running trillions of operations per second on
petabytes of data.

A trie (or tree) of some sort seems to me more and more like the kind of
structure that is wanted here, and there's certainly precedent for structures
like [Merkle Trees] in distributed systems. In fact, given the ubiquity of
Merkle tree implementations – they find their way into a vast array of popular
applications including Git, BitTorrent, Nix, IPFS, Hypercore, etc. – it seems
like the best first approach to get up and running quickly, if a tree of some
sort is indeedsuitable, given the availability of mature libraries in multiple
languages, the accessibility of literature and learning resources. Another
closely related structure, though not exactly a tree, are [Distributed Hash
Tables (DHTs)], which flatten the Merkle tree to a lookup table of common
resources that could be dumped into SQL and replicated more readily.


["Are We There Yet?"]:
    https://github.com/matthiasn/talk-transcripts/blob/master/Hickey_Rich/AreWeThereYet.md
[Hash Array Mapped Trie]: https://en.wikipedia.org/wiki/Hash_array_mapped_trie
[Clojure implementation]:
    https://github.com/clojure/clojure/blob/clojure-1.12.0/src/jvm/clojure/lang/PersistentHashMap.java
["Ideal Hash Trees"]: https://lampwww.epfl.ch/papers/idealhashtrees.pdf
[persistent data structures]:
    https://en.wikipedia.org/wiki/Persistent_data_structure
[Software Transactional Memory]:
    https://en.wikipedia.org/wiki/Software_transactional_memory
[Merkle Trees]: https://en.wikipedia.org/wiki/Merkle_tree
[Distributed Hash Tables (DHTs)]:
    https://en.wikipedia.org/wiki/Distributed_hash_table
[Concurrent Hash Trie]: https://en.wikipedia.org/wiki/Merkle_tree


## A Note on Data Independence

:::warning Draft Notice

This section is based on errata from [FMP § "Two Other Layers"]. It was
originally meant to summarize some concepts from earlier personal notes to
conclude that section with some more context for the technical benefits of the
global data provider and local-first apps.

:::

[FMP § "Two Other Layers"]: ./federated-municipal-platforms.md#two-other-layers

Those with a background in systems design and data architecture should note the
central role that standards and protocols play in connecting these two layers
with the FMP, as well as in federated communication between multiple FMPs and
other third-party platforms.

This gets to another critical aspect of the FMP's social architecture, but also
the Runrig Plan more generally: __data independence__.

To achieve data independence, a system for storing and retrieving persistent
data should maintain a formal separation between the physical representation of
the data, such as its address in memory or location on a physical disk, and the
logical representation of data, such as the form of an SQL query statement. As a
rule of thumb, good data independence means that if the model for the physical
layer changes, it should not force a breaking change in how the logical layer
must be subsequently modelled – i.e., migrating your data from a floppy disk to
a solid-state drive won't require you to rewrite all your SQL queries. 

Data independence is as old a concept as databases. It was a major concern of
[E. F. Codd's seminal paper] from 1970, where he established the relational
model that has informed every database that ever supported some variant of
SQL[^sql] in the past 50 years. In fact, it was a concern of many data
scientists of the 60s and 70s; however, in most realms of system design today,
it is regarded as a more-or-less solved problem. Modern hardware and database
engines are just expected to provide data independence on a fundamental level,
which most software developers never have to worry about.

But when Codd was establishing these principles, databases were typically kept
in one place, even if it spanned several shelves or rooms worth of magnetic tape
spools, colocated with the only computers that accessed them. Disk access was
many orders of magnitude slower than anything modern drives are capable of
today. That was the main limiting factor for any physical representation of the
data and the models employed for its storage and retrieval. Distributed
computing was a problem of time-sharing on a single, gargantuan mainframe
computer, via many separate user terminals. Whatever latencies or
inconsistencies may have arisen from the physical distance between users, or the
process interrupts required by time-sharing, those were still negligible
compared to the constraints of accessing the physical medium of storage.

So when data scientists spoke of the physical layer, they mainly restricted
their attention to the database itself: the disks or tape comprising its storage
medium, the physical mechanisms that spun up and aligned the medium to where an
electronic sensor could accurately read its data into memory or transmit it
elsewhere, plus the programs and subroutines that modelled and controlled all
those physical operations.

not sharded databases spread out across every continent with edge servers
negotiating transactions between the database and any person with a smartphone.

[^sql]: Later academics have been [quick to point out] that even SQL and its
    various implementations don't meet all of Codd's criteria perfectly, but for
    the most part, modern database engines provide sufficient data independence.

[E. F. Codd's seminal paper]: https://dl.acm.org/doi/10.1145/362384.362685
[quick to point out]: https://dl.acm.org/doi/abs/10.1145/202660.202667

