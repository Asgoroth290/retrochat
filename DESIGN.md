# retrochat
---

## Developer
> Jade Hogerhuis

## Project Goals
> retrochat is a chat app made by me.
> 
> A lot of this project will be reverse-engineered features existing in contemporary large-scale chat applications (*cough* Discord *cough*).
> This is purely an exploratory endeavor designed to help me familiarize myself with the logic and architecture of such an application. 

## Project Progression
> **Phase 1: Multi-user chatroom** 
> 
> No logs, just users sending messages to a chat room. Requires: 
> - a basic UI (so that we have the bones for a fuller application), not much more than what we'd get from printing to the terminal. *maybe* it scrolls.
> - a message API 
> - logic for real-time communication
> - Database for user identity/authentication

> **Phase 2: Message history**
> 
> We'll still be built on a single chatroom, but the history of the chatroom is persistent.
> - paging required (only loading certain amounts of messages at a time to reduce load on the server)
> - fully-fledged database that stores messages
> - editing messages is also now possible, and also requires real-time hooks

> **Phase 3: Servers & Channels**
> 
> Messages will be divided between "servers" composed of channels and user members who can send messages to channels (should I make up my own stupid naming system to make it distinct from discord? idk. what are you, a cop?).
> - The legacy history data will either be discarded or modified to be stored in a specific legacy server/channel.
> - Servers will have to have some kind of mechanism for joining them, i.e. invites of some nature. 
> - Restricting access to channels within a server to specific user groups, while standard, is not a goal here. 

> **Phase 4 & Beyond**
>
> If I ever get to this point, I'll either start optimizing for scaling (to the point that I can, given that actual scaling requires $$ after a certain point and this is not a project with $$), or just start adding more and more ~~discord~~ standard chat app features.

## Tech Stack
> To an extent, I will be mirroring Discord's tech stack so that I can keep scalability in mind & more easily directly refer to the dev blog posts from Discord to develop a better understanding of the logic that goes into developing and scaling a chat application, like being run as a background process for notifications. 
> 
> There's a few things that Discord uses that I'll be touching for the first time, e.g. Elixir (which supports highly-scalable management of concurrent users). I'll try to gain some basic familiarity with it, and then work on a more complex understanding as I go.
>
> For the frontend, I'll likely be using lanterna or jexer (java text-based GUI frameworks), mostly just because I like their respective clunky stylings. However, it would also may be limiting for certain advanced features. **I'll be starting with a React or Vue frontend to simplify functionality, then move on to reconstructing in a more fun GUI framework.**
> 
> Whatever I use, I want it to have a retro-style (although obviously I can also acheive that with css stylings in a modern web-client framework like React). 
>
> The database will be done with MongoDB, mostly because I like MongoDB and also because the schema will be adapting across phases, which a schema-less NoSQL solution like Mongo is flexible with, along with supporting the horizontal scaling required for larget-scale chat applications.
> -  While it is to my understanding that Mongo was not able to support Discord at the peak of its scaling, and that they eventually migrated from MongoDB to Cassandra, that is a late-term optimization (100 million stored messages!) that I don't need to focus on to acheive a cursory understanding of scalable chat applications.