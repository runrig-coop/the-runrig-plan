---
title: In Defense of Copyleftism
subtitle: The inversion of control
description: Le logiciel libre est mort, vive le logiciel libre!
author: Jamie Gaehring
date: 2025-09-30
outline: [2, 4]
---

## Deciding on a Development Model
As I said above, I didn't presume Runrig's model of development would be the
ideal fit for Farm Flow's stated aims, at least not before a careful evaluation.
Given Matthew's previous track record with third-party developers, I wanted to
take special care to recommend a development model that best suited his goals,
even if I turned out not to be the best contractor for the job. At the time,
funding was provided by [Mad Agriculture], an organization that supports
regenerative agriculture and cooperative models of land management and
financing. Both they and Matthew wanted to ensure that the project remained
farmer-owned and controlled. Matthew also sought to earn some additional revenue
from the project, so long as it didn't become a second or third fulltime job;
running a farm is already two fulltime jobs, at least, and Matthew decidedly
wanted to keep farming. On my end, I made clear that I only do work by contract
if it is licensed as free and open source software, preferably the GNU Affero
General Public License (AGPL). Other prospective funding partners also expressed
interest in the project being free and open source.

Under most standard development models, retaining ownership and control of the
software will incur at least one of the following two expenses:

1. Lots of your own time and expertise to design and engineer the software
   yourself, or
2. Lots of money to pay someone else to do it for you.

More often than not, it's some combination of the two, with the money coming
from venture capital and the expertise coming from overworked startup employees
who've been promised a share in the future equity. If you want to recoup any of
those costs, let alone if you'd like there to be some sizeable equity leftover
for anyone once all those liabilities have been paid down, you may be inclined
to reach for two additional mechanisms to guarantee a stable revenue stream:

3. A proprietary license on at least some portion of the source code, plus
4. A reliable means of securing that source code so it cannot be illicitly
   copied or reverse engineered.

The necessary security can be achieved by running the proprietary code behind a
server that users cannot access directly, or by compiling the code to a binary
format before distributing it, plus some digital rights management (DRM)
software mixed in for good measure. There are other ways, but those are the most
common. Users can subscribe to the service in the former case, or purchase a
license and install the binaries in the latter, but either way, they will never
see the source code, let alone be able to modify it.

At a glance, a subscription model may seem like the most feasible means of
yielding revenue from a software project, particularly one that includes some
sort of web-based server. A proprietary license is not essential to such a
model, because even if users can self-host a server that's licensed as free
software, few of them will actually want to. Selling managed hosting or support
has been a viable means of driving a profit for open source software since [Red
Hat] and [WordPress] pioneered the strategy over two decades ago. A free
license, however, will naturally limit your margins, since someone is pretty
sure to offer a competing service if you get too greedy and start charging
subscription rates too far in excess of the costs of providing that service.

A proprietary license eliminates that ceiling, at least in theory. Red Hat and
WordPress remain profitable, but only because they're able to work within those
margins. Support services are the entirety of their business model and open
source is their key selling point. It's harder to imagine a significant revenue
stream for open source support if you're not providing that support fulltime.
You can hire engineers to do the lion's share of the work for you, but still,
the margins are essentially capped. Again, if you overcharge for subscriptions
or under-compensate your workers to maintain the service, you could end up with
your workers or customers being poached, if not outright revolt on all fronts.
Either way, your fulltime job will most assuredly become that of a product
manager, just to have a fighting chance of keeping the margins viable and the
pitchforks at bay.[^fief]

[^fief]: Not to put too fine a point on it, but I summed this up by telling
Matthew that it would be hard to create a source of passive income out of Farm
Flow without one of us exploiting the other. There's a long history of rentier
relations in both agriculture and technology. In agriculture it is called
feudalism. More recently, Yanis Varoufakis has made a compelling case that we
are entering a new era of what he calls [_Technofeudalism_].

All the same, I made the case that _even with a proprietary license_, an
outsized contribution of Matthew's own time and money would be necessary to
preserve the level of ownership and control he wanted. So although it would
probably never be the source of passive income he hoped for, I recommended that
a _fully_ free – i.e., ["copyleft"] – license like the AGPL was still his best bet
for getting the most value from the software while still retaining control of
its development.

[Mad Agriculture]: https://madagriculture.org/
[Red Hat]:
    https://www.redhat.com/en/resources/red-hat-enterprise-linux-subscription-guide
[WordPress]: https://wordpress.com/support/com-vs-org/
[_Technofeudalism_]:
    https://www.yanisvaroufakis.eu/2024/02/04/technofeudalism-a-video-essay-summarising-the-book/
["copyleft"]: https://www.gnu.org/licenses/copyleft.en.html

## The Case for Free Software
In any software project, the more components you have to build from scratch the
more time and money you'll need to invest just to reach parity with competing
applications in terms of basic functionality and feature richness. Right off the
bat, this will divert resources away from implementing the unique features that
represent you core value proposition. Furthermore, that doesn't begin to account
for the long-term cost of maintenance, which will be even higher for proprietary
portions of the code, since you'll have to cover that cost entirely on your own.
Throw in marketing and other overhead costs and you can see where that can
quickly outstrip the budget for a small, community-driven software project.

As a proprietary project, you're a small fish in a big pond left to fend for
yourself. You're up against the vast resources of Silicon Valley and it becomes
an uphill battle just to break even. If you create a distinct product lucrative
enough to compete, venture capital will eventually get wise to what you're
selling and want a piece. That'll happen as soon as you start earning any kind
of profit worthy of notice, especially if that entails taking away a share of
their users. Unless you're ready to go toe-to-toe, pound-for-pound with Big
Tech, you run the risk of being out-gunned, undercut, and bought out, all in
quick succession. At that point, you've wound up exactly in the same predicament
you originally intended to avoid: someone else owns your IP (or the knock-off
version that just put you out of business), and now you're just another paying
subscriber – take it or leave it. Maybe you accept VC investment yourself,
giving you enough of an edge to survive or cash out while you're still ahead;
however, that more or less amounts to the same loss of control, unless you're
incredibly shrewd, and even then, it means you probably haven't sat on a tractor
in a _very_ long time.

As a free software project – or more to the point, as a _part of a free software
community_ – you can potentially start way out in front of where you'd be if you
had gone the proprietary route. At the risk of sugarcoating it a bit, it's like
everyone is first to market, because everyone gets to use each other's stuff and
improve on each other's efforts. There's still a ton of hard work required and
plenty of caveats to doing it right, but if you're willing to really lean into
the cooperative process and engage with the larger community, the rewards can be
manifold.

From a purely economical perspective, you've drastically reduced the amount of
time and money you need for up front feature parity, as well as long-term
maintenance. Of course, a lot of boilerplate code is open source and not
copyleft, so those tools and components would be available to proprietary
projects, too, not just other free and open source projects. But this is where
leaning into a _fully free_ software development model, with a copyleft license
like the GPL or AGPL, can really start to pay off. To start off, you gain access
to additional free software as an eligible licensee for those components that
are also copyleft. The most critical part, however, comes from thinking _not
only_ in terms of simple economic benefits – though don't get me wrong, I'm not
ruling those out either! – but rather in terms of the community's total social,
political, and ecological benefits, which are no less tangible and can have far
greater impact.

The GNU Affero General Public License is a free software license that ensures
everyone can use the software however they see fit, so long as any derivative
works they create can also be used freely by everyone else. This is intended to
create a virtuous cycle that perpetually enriches the software commons. It is a
commitment that all contributors make to one another: namely, that they will
seek to build on each other's work and cooperate for the mutual benefit of all,
rather than competing against each other, keeping their work siloed, and
reduplicating each other's efforts in the process.

The AGPL also ensures every contributor that they will never be prohibited from
later accessing their own contributions. As outlined above, this is an easy trap
to fall into with proprietary software, even as its current owner, but this
often goes overlooked. Luckily, as the developer of software licensed under the
AGPL, the code that you author and deploy for one client is code you can offer
to deploy, improve, and extend for your next client. As the sponsor of software
licensed under the AGPL, you're free to hire someone else to audit, modify, or
improve the software at any time, whether or not you or they were involved in
its original development. Users who share their expertise on forums to help
other users, or who volunteer their time to documenting and submitting bug
reports and feature proposals, will never lose access to the software they
worked to make better. By choosing to work together, contributing openly and
freely to the same platform, they can all exercise greater control over the
project’s direction. Collaboration and openness only amplifies each others
efforts, it never diminishes it.
