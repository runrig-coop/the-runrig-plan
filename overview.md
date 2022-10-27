# Overview
Two parts:

- one collectively owned data storage provider
- many federated cooperative service platforms

Service platforms mediate the data sharing agreement between users and the storage provider...

## Primary Goals & Responsibilities
The primary goal of Runrig is to enable all participants in a foodshed to collectively own and control the technology platforms mediating relations between farmers, distributors, drivers, wholesalers, retailers, commercial buyers and end consumers — all residing within a contiguous geographical region, or specializing within a niche sector of production and distribution that spans a more dispersed landscape.

Concerning infrastructure, these platforms must fulfill two primary responsibilities:

1. Storing data in [Solid](https://solidproject.org/) ["pods"](https://solidproject.org/users/get-a-pod) and managing their underlying databases for the various types of food producers, distributors and consumers.
2. Hosting the web-based applications and other software that can use the data in those pods to provide a variety of services, like aggregation, sales, auditing, etc.

To start off, we will provide a simple hosting service for farmers to store their crop plans and production data as it pertains to certain user scenarios. These scenarios will be selected for the purposes of prototyping specific solutions — e.g., surveys to asses whether the farms in a food hub are on target to match anticipated sales volumes — so that we can illustrate the need for such solutions, while simultaneously delivering the applications that meet the most immediate of those needs, and also testing the underlying architecture and services that can support them.

From the very beginning, this data will be conformant with both the [farmOS Data Model](https://farmos.org/model/), as well as the [Solid Protocol](https://solidproject.org/TR/protocol), so that even if we're unable to maintain this service long-term, users will have an easy migration path to a farmOS or Solid hosting provider (such as [Farmier](https://farmier.com/) or [Inrupt](https://start.inrupt.com/), respectively).

## Unique Advantages
If, however, we are able to secure the resources and commitment necessary for long-term maintenance and development, then...

