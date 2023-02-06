# Ecology
_Provisional outline for "Ecology" page:_

- Intellectual Usufruct Rights
  - Service-level agreements
  - Copyfair licensing
  - Fiduciary obligations
  - Grant/revoke proxy rights
- Economic model
  - Storage provisioning
  - Sliding-scale hosting & services
- Governance & Methodology
  - Data cooperatives
  - ...

## Intellectual Usufruct Rights
There is prevalent yet false impression about data, that it is a form of intellectual property, and that ownership or certain legal entitlements pertain to data the same way they do to creative works, software and real property. Feist v Rural Telephone, GDPR, etc, etc.

...like collective land management, but for network infrastructure and compute resources; or water rights, but for the flow of data; _ejidos electrónicos_.

## Data Cooperatives & Fiduciary Obligations (from earlier notes)
In [an article](https://coop.exchange/blog/430124ff-621a-11ea-b711-06ceb0bf34bd/data-co-ops-4-examples-and-new-ideas) from Coop Exchange about data coops, they describe the [Driver's Seat Cooperative](https://driversseat.co/)'s mission:

> Drivers Seat Data Cooperative allows drivers using platforms like Uber or Lyft to track their driving and pay to figure out the optimal times to make money based on their schedule, where they should drive when it is slow, etc. They can choose to share the data with city agencies to help with transportation planning. The drivers own the cooperative and it enables them to get more money for work they are already doing.

This got me to think again about the whole concept, especially as it relates to Rohan Clarke and [Regen Farmers Mutual](https://regenfarmersmutual.com/). Looking on [the Wikipedia page](https://en.wikipedia.org/wiki/Data_cooperative), it had a great little diagram:

![Data Cooperative Key Aspects](https://upload.wikimedia.org/wikipedia/commons/4/42/Data_Cooperative_Key_Aspects_2.0.png)
Follwing some references from the same Wikipedia article, I found a couple of good scholarly articles. Chief among them, ["Data Cooperatives: Towards a Foundation for Decentralized Personal Data Management"](https://arxiv.org/abs/1905.08819) by Thomas Hardjono and Alex Pentland is most pertinent to the fiduciary obligations of data coops specifically, as the abstract indicates:

> Data cooperatives with fiduciary obligations to members provide a promising direction for the empowerment of individuals through their own personal data. A data cooperative can manage, curate and protect access to the personal data of citizen members. Furthermore, the data cooperative can run internal analytics in order to obtain insights regarding the well-being of its members. Armed with these insights, the data cooperative would be in a good position to negotiate better services and discounts for its members. Credit Unions and similar institutions can provide a suitable realization of data cooperatives.

The article even goes into some specifics on the technical architecture and how to use the MIT "Open Algorithms" paradigm (abbreviated as OPAL) in the implementation of data coops. The authors, together with Alexander Lipton, are also the authors of [_Building the New Economy: Data as Capital_](https://wip.mitpress.mit.edu/new-economy). In this article, however, they give a concise description of 3 "key aspects" of data coops, which I believe is the source of the diagram above:

> - _Individual members own and control their personal data_: The individual as a _member_ of the data cooperative has unambiguous legal ownership of (the copies of) their data. Each member can collect copies of their data through various means, either automatically using electronic means (e.g. passive data-traffic copying software on their devices) or by manually uploading data files to the cooperative. This data is collected into the member’s personal data store (PDS) [3]. The member is able to add, subtract or remove data from their personal data store, and even suspend access to their data store. A member may posses multiple personal data repositories.  
> 
>   The member has the option to maintain their personal data store at the cooperative, or host it elsewhere (e.g. private data server, cloud provider, etc). In the case where the member chooses to host the personal data store at the cooperative, the cooperative has the task of protecting the data (e.g. encryption for data loss prevention) and optionally curating the data sets for the benefit of the member (e.g. placing into common format, providing informative graphical reporting, etc.).
> - _Fiduciary obligations to members_: The data cooperative has a legal fiduciary obligation first and foremost to its members. The organization is member-owned and member-run, and it must be governed by rules (bylaws) agreed to by all the members.
> 
>   A key part of this governance rules is to establish clear policies regarding the usage or access to data belonging to its members. These policies have direct influence on the work-flow of data access within the cooperative’s infrastructure, which in turn has impact on how data privacy is enforced within the organization.
> - _Direct benefit to members_: The goal of the data cooperative is to benefit its members first and foremost. The goal is not to “monetize” their data, but instead to perform on-going analytics to understand better the needs of the members and to share insights among the members.

The references section is also a goldmine, with several other articles by the same authors. Also among those references is a pretty good article from UC Davis on the legal aspects of information fiduciaries in general, coops or not, titled ["Information Fiduciaries and the First Amendment"](https://lawreview.law.ucdavis.edu/issues/49/4/Lecture/49-4_Balkin.pdf).

## Standards and Tools
We've come to believe what we're told about data standards and shared
ontologies: that they are great in theory, but in the real world things are too
complex and you either end up having a standard that's too specific and
opinionated that it doesn't work for everyone, or too broad and generalized that
it's just not very useful. The Semantic Web itself has endured a great deal of
criticism along these lines over it's 20-year history.

![standards](https://imgs.xkcd.com/comics/standards.png)

But the unspoken assumption here is that those standards have to survive "trial
by market", where the kind of close coordination required to produce and
maintain a practicable, living standard is all but prohibited by the
profit-seeking, competitive demands of the market. Even as proprietary software
giants like Microsoft and Oracle become cozier with open source technologies and
a general appreciation of the "commons" pervades the industry, control of the
actual data and services generated by those open source tools remains heavily
restricted and privatized. After all, without the privatized control of some
utility or the enclosure of some asset, where would the capital accumulation
come from?

Attempts to take back ownership and control of "Software-as-a-Service" have
largely struggled, I would argue, because we've sought too narrowly to
redistribute those rights piecemeal to individual users, rather than seeking
_common ownership_. Certainly, there are great benefits to individual control in
many contexts, but we handicap our projects by limiting ourselves to those
alternatives exclusively. Taken to the extreme, this would necessitate everyone
have their own server rack in the garage (or at least a Raspberry Pi in the
closet), each of us rolling our own servers independently from one another. 

My fear, however, is that if we're too predisposed to self-hosting, we will
needlessly alienate people who may not want to use a particular piece of
software or hardware, but may wish to participate in the social and economic
activities that such software and hardware facilitate. We would do well to
regard Ivan Illich's criteria for "convivial" tools:

> Tools foster conviviality to the extent to which they can be easily used, by
> anybody, as often or as seldom as desired, for the accomplishment of a purpose
> chosen by the user. The use of such tools by one person does not restrain
> another from using them equally. They do not require previous certification of
> the user. Their existence does not impose any obligation to use them. They
> allow the user to express his meaning in action. (22)

While promising new paradigms like software "appliances"[^RedHat] might
eventually offer the option of plug-and-play personal servers, achieving both
autonomous _and ubiquitous_ computing in the same stroke, they would still leave
critical issues unaddressed. The data and computing capabilities of several
billion humans are today at the whim of just a few dozen technocratic
billionaires. Any serious challenge to these proprietary platforms, and all the
coercive force at their disposal, must come from a base of organized,
community-driven political power, built around shared resources. Now is not the
time to retreat into isolation, each of us behind our own firewall.

Common ownership of our platforms is a far more effective means towards that
end, but also an end in itself...


## References
[^RedHat]: Congden, Lee. ["What is a Software
    Appliance?"](https://www.redhat.com/en/blog/what-is-a-software-appliance)
    _The Red Hat Blog_. Jan 25, 2008.

