---
title: In Defense of Copyleftism
subtitle: The inversion of control
description: Le logiciel libre est mort, vive le logiciel libre!
author: Jamie Gaehring
date: 2025-09-30
outline: [2, 4]
---

In the late 1990s, even as Linux was becoming the _de facto_ operating system of
the world wide web, software developers were still having a hard time convincing
their bosses and investors that _free software_ was good for business. Instead
of understanding it to mean _free_ as in "free speech," the way Richard Stallman
and the Free Software Foundation always intended it, the higher-ups only ever
heard _free_ as in "free lunch."

To make it an easier pill to swallow, developers like Eric S. Raymond rebranded
it as _open source_ software. Open source is a nebulous term, almost willfully
unintuitive to non-specialists, yet it has a vaguely positive ring to it that's
pleasing to the ear and distinct enough to pass muster with the marketing
department. By most accounts, the rebrand succeeded in making open source
software more appealing to Silicon Valley founders and funders. To the general
public's ears, however, open source sounds even more obscure and alienating than
free software ever was. People may still appreciate open source as a positive
good when examples are laid out and its benefits are explained, but they rarely
feel qualified to advocate on its behalf or demand open source alternatives for
their own personal use.

On the other hand, people of all stripes know what "freedom" is. Goodness knows,
if you set out trying to inform somebody in America in 2025 what freedom is or
is not, you're far more likely to be told, _"You're wrong!"_ than to hear them
say, "I don't understand." If they have any experience using software – and who
doesn't these days? – then they're also perfectly well equipped to tell you
whether one particular piece software makes them free or not, or whether this
software respects their freedom more than that software.

To that effect, there is a growing interest in software that fosters greater
freedom by granting ownership and control to users at both the individual and
community level. By my own estimation, that call is especially loud today among
farming associations and food policy makers, and it grows louder every day. When
we advocate for the adoption of _open source_ software, however, the message
still seems to gets lost. For this very practical reason, as well as the ideals
that set free software apart, we need more than just open source software. In
this critical moment, we must champion software freedom explicitly.

## A Russian Reversal
As a personal aside, I had zero interest in technology before I realized that
_open source software_ could also mean _software freedom_. I was a confirmed
Luddite all throughout my late teens and most of my twenties. Technology first
demanded I have a cell phone, then a smartphone, and that I keep them with me at
all times ready to respond to calls, text messages, emails, social media, chat
notifications. I had to pay to upgrade phones every 2 years, if not sooner. The
hardware was expensive and fragile, while the software was buggy, intrusive,
laden with ads, malware, and numerous [dark patterns]. When some piece of tech
didn't work for me, that was my problem. Certainly none of the companies who
developed, sold, or administered the technology seemed obliged to help me. After
a while it began to feel like a bad Yakov Smirnoff joke (a.k.a. a [Russian
reversal]): _"In Soviet Russia, you don't use app, app uses you!"_ – except
dystopian ironies of this sort are only really possible in late capitalist
America.[^final-straw]

![](./img/smirnoff-what-a-country.gif)

[^final-straw]: For me, the final straw came when a computer salesperson tried
  to bait-and-switch me into buying a Windows PC that I really couldn't afford,
  but which I badly needed in order to keep my job, find housing (I faced a
  pending eviction at the time), and maintain my relationships with remote
  friends and family. In a fit of pique and largely out of spite, I determined
  instead to build my own computer out of parts and install it with Linux. I was
  seriously pessimistic I could make it work; it seemed just as likely it would
  be my last futile attempt to cope with modernity, before I bugged out entirely
  for the Pine Barrens or upstate somewhere to become a hermit. Yet the whole
  process was surprisingly easy to pull off – almost _disappointingly_ so. Up to
  that moment, it had never occurred to me that technology could actually _work
  for me_, rather than making me work for it with my limited time and money. If
  it didn't work for me, I could find or build something else that did. There
  was a vast pool of common resources out there to draw upon, and most
  importantly, a thriving community that offered all the support I would ever
  need. It was quite the revelation.

If you've ever felt, like I did, that you were no longer a _user of_ some
software application but were instead being _used by_ it, it's very likely that
the offending app included at least a one or two software libraries that would
be considered open source. That does not mean the same libraries were _free
software_. The software developer, as the _direct_ user of those libraries, may
have enjoyed some degree of freedom to use them as they alone saw fit, but if
they could use them to make an app that restricted your freedom as the _end_
user, then the libraries themselves should not be considered _free software_.

Legalists might call it a paradox or a contradiction, but if we take seriously
Fannie Lou Hamer's admonition that "nobody's free until everybody's free," and
if a software license claims to enshrine the freedom of all its users, then the
one freedom it _must prohibit_ is the licensee's ability to curtail another
person's freedom to use the very same software as they see fit. This is the
"viral" licensing requirement often described as _copyleft_, and it is more or
less what distinguishes open source from free software. When a software library
is licensed as copyleft, any software application that incorporates it is
legally obliged to adopt a compatible copyleft license as well.

Don't worry if the technical distinction between a library and an application
eludes you, because you don't need to understand what libraries the developer
used, how exactly they used them, or even if the libraries could be considered
open source or not; you _know_ if some piece of software encroaches on your
freedom, and your testament is all that's needed to deem it unfree. The tangle
of licensing agreements matters if you take the issue to court, but most of us
will never do that. The ultimate determination of freedom is a personal
assessment and a moral choice, not a mere technical evaluation or legal opinion.
Insofar as one person's freedom should not encroach upon another's, free
software constitutes a social project, too, as Richard Stallman pointed out [way
back in 1998]:

> For the Open Source movement, the issue of whether software should be open
> source is a practical question, not an ethical one. As one person put it,
> "Open source is a development methodology; free software is a social
> movement." For the Open Source movement, nonfree software is a suboptimal
> solution. For the Free Software movement, nonfree software is a social problem
> and free software is the solution.

In other words, it's all about social control, or who _controls_ versus who _is
controlled_, a distinction I think Smirnoff would grasp almost immediately.

[dark patterns]: https://en.wikipedia.org/wiki/Dark_pattern
[Russian reversal]: https://en.wikipedia.org/wiki/In_Soviet_Russia
[way back in 1998]:
    https://www.gnu.org/philosophy/free-software-for-freedom.html

## Free as in Pragmatic
Putting ideals aside for one moment, the task of developing, maintaining, and
deploying free software does incur costs, of course, like any software project.
If not managed carefully, those can grow quite high and rather quickly at that.
But to better explain the practical and economical merits of free software, I
want to pay careful attention to its philosophical and ethical foundations, what
are referred to as the [Four Freedoms] by Stallman and the Free Software
Foundation (FSF) he helped to found. I believe a great deal of pragmatism can be
gleaned from these ideals, but only if we evaluate free software's costs and
benefits on its own terms, looking at what each of its enumerated freedoms
actually requires:

1. The freedom to run the program as you wish, for any purpose.[^zeroth]
2. The freedom to study how the program works, and change it so it does your
   computing as you wish.
3. The freedom to redistribute copies so you can help others.
4. The freedom to distribute copies of your modified versions to others.

[^zeroth]: As noted by the Free Software Foundation: "The reason they are
    numbered 0, 1, 2 and 3 is historical. Around 1990 there were three freedoms,
    numbered 1, 2 and 3. Then we realized that the freedom to run the program
    needed to be mentioned explicitly. It was clearly more basic than the other
    three, so it properly should precede them. Rather than renumber the others,
    we made it freedom 0."

All four can be associated with certain costs, from the cost of the hardware and
electricity to run the software to the human expertise and labor necessary to
study and change it. Yet they remain freedoms because they also impart
socioeconomic value: the freedom to use the software to achieve something of
value as you see fit. That can be a use value, something of immediate use to
you, or it can be of value for the purpose of exchange, if it is some liberty
that can be transferred somehow to others. I say "some liberty" and "transferred
somehow," but the significance of its exchange value depends critically on what
constitutes that value in the first place, as well as the precise means by which
it can be transferred. Accordingly, I argue that while it is possible to derive
some form of exchange value from any of the Four Freedoms and its associated
costs, only the first two freedom present clear _use values_ to ordinary users.

When it comes to assessing the economic feasibility of free software, there is a
tendency to place undue emphasis on the Second and Third Freedoms concerning
distribution. The fear is that by granting users the freedom to
distribute your software, all the value you could hope to exchange will walk out
the door with it, and thereby all your potential revenue. This assumes the
software's commodity value – whatever that comprises and however you intend to
earn revenue from it – is somehow inextricably linked to the precise thing being
distributed, whether that's the source code or an executable program or software
embedded on some device. The exchange value, it follows, can thus only be
realized by controlling its distribution. When software's distribution is
controlled by a proprietary license, its exchange value can be realized in a
fairly straightforward manner: namely, a state authority grants the intellectual
property holder exclusive rights to copy and distribute the software (for a fee
or other conditions), with the full force of law to back those rights up.

It is a mistake, however, to assume software's value must be tied to its
distribution or that no other form of value can be realized without a license or
patent. Software – like so many other forms of economic activity that _do not_
depend on IP law to vouchsafe their profitability – can still generate value
by lowering the relative costs to produce and consume it, while also maximizing
the value its users derive from it. As I indicated above, managing those
tradeoffs is no mean feat. Even among proprietary software companies, so long as
they're _not_ a gigantic monopoly, _not_ wholly subsidized by venture capital,
and they _do_ actually turn a profit, then they probably remain competitive in
large part because of how they optimize value for costs.

The reason is pretty simple: people don't want to run their own servers. Of the
hundreds if not thousands of servers we all interact with every day, there are
probably a dozen or more that I'd find it really hard to do without. Don't get
me wrong, when it comes to the apps I use most frequently, I would love for them
to all be [local-first software], where servers weren't technically required.
But it's nice to sync my data between devices and share documents or media with
other people. Most people don't know how to run those servers on their own. I
could probably get by running a few, but I don't trust myself well enough for my
most sensitive data. Even expert DevOps engineers, who may run some of their own
personal services, typically draw a line somewhere. I don't know of anyone who
would advocate against using any and all servers we don't have full control
over, at least anyone who hasn't disavowed digital technology completely. So
long as the Internet continues to exist, there will be a need for people willing
to run servers for other people. If they're any good at it, those other people
may even be willing to pay them money in exchange for doing it.


[Four Freedoms]:
    https://www.gnu.org/philosophy/free-sw.html#four-freedoms
[local-first software]: https://www.inkandswitch.com/local-first-software/


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

## A Closing Provocation
It is not enough that the source code be made available for free/_gratis_,
assuming you know how to read it; everyone deserves free/_libre_ software
applications to provide the information and services they depend upon. Public
domain and non-restrictive licenses only amount to more free labor for Big Tech.
Today, we need copyleft licenses, across the board and without reservation. Call
it what you will, but we have to be clear: software that merely _permits_ will
no longer suffice; _we demand software that liberates!_
