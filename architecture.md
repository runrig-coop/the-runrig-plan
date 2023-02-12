# Architecture
```md
**DRAFT NOTES**  
Provisional outline:
- Data Provider
- Service Platforms
- Local-fist & Self-hosted Applications

This page is still in a very early stage of draft, mostly scattered notes, links and references.
```

## Data Provider
### Storage Provisioning
It may also be helpful to structure storage costs in a way that a platform or
service on a platform can provision a block of storage for multiple users on a
Solid server, so they can build that cost into their own fees and/or shared
costs.

This is actually quite similar to how the private Solid provider, use.id,
designs their Provisioning API:[^use.id] [^provisioning]

```
# @name provisioning
#
# Registers a new WebID, if it does not already exist, and creates a new WebID profile for it.
# Value for Slug is used for creating the WebID -- here: https://dev.use.id/tom
#
# Responds with 201 Created, a Location header to the new WebID, and the contents of the WebID profile as a body.
# Responds with 409 Conflict if the WebID already exists.
#
```
```http
POST /provision HTTP/1.1
Host: https://dev.use.id
Authorization: DPoP <api-token>
DPoP: <dpop-proof>
Content-Type: application/json
Slug: tom

{
    "email": "tom-stevens@email.com",
    "password": "passwd1234"
}
```

other considerations...
- one person, one pod?
- use of homomorphic encryption and synthetic data?
- auth flows

### Why Solid?
As described in Solid Project's
documentation:

> One of the core ideas behind Solid is to make __data__ independent from
> __applications__, so that one can be in control of his/her own data and share
> it with the apps of his/her choice. For this to be possible, the same piece of
> data must be understood __consistently__ from one app to another. This
> requires agreeing on the meaning of the data, as conveyed by its description.
> Therefore, to make data reusable, it should be described with vocabularies
> that are widely used and known.[^vocabularies]

## Service Platforms
### Distributed, Federated Services & Applications
When it comes to hosting services and applications, I think it makes sense to
host and operate that software on a smaller, regional scale and in a more
distributed manner, compared to how data for that software will be hosted and
stored. This is the second of the "primary responsibilities" listed above.

Mostly, this will be done to allow greater localized control of the actual
applications and services they host, which may require additional storage for
more sensitive information like billing, payments and personnel data. They
should also be empowered to modify and extend their software as befits their
particular needs. Likewise, they should be granted a high level of local
autonomy in determining how costs are shared, how prices are set, and how the
overall governance of their regional platform is administered. However, they
will still benefit from services and resources that are shared nationally and
globally, such as Solid pod storage. By the same token, they will also be
obliged to contribute finances or resources globally and abide by the terms set
by those broader governing bodies, though ideally any restrictions would be kept
minimal and enforcement rarely called for in practice.

It might be helpful to illustrate this with a stack diagram, like the ones used
for illustrating architecture of the Linux kernel and similar technology
systems:

![Stack diagram of the Linux
kernel](https://upload.wikimedia.org/wikipedia/commons/9/99/Linux_kernel_and_OpenGL_video_games.svg)

## References
[^use.id]: use.id. ["use.id for Business"](https://get.use.id/business).
[^provisioning]: Van den Briel, Abel. _use.id Forum_. ["Design of the
Provisioning API - Feedback
welcome"](https://forum.use.id/t/design-of-the-provisioning-api-feedback-welcome/40)
(login required). Jan 31, 2022. Further in that forum post it states that
"`<api-token>` is an access token, retrieved from the [client credentials
flow](https://forum.use.id/t/how-to-access-use-ids-api-with-your-apps-webid/62)"
and that
"[`<dpop-proof>`](https://forum.use.id/t/how-to-create-a-dpop-proof-header/63)
is unique per request". Another commenter, identified as use.id staff, cautions
that sending passwords is not intended for production use and is only provided
as a temporary example while passwordless flow is still being implemented, but
as of April 2022, that system was not ready for testing.
[^vocabularies]: Solid Project. ["Vocabularies
    overview"](https://solidproject.org/developers/vocabularies).
