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
> To an extent, I will be 