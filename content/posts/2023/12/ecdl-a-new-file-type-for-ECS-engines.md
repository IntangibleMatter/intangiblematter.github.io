---
title: "ECDL a New File Type for ECS Engines"
date: 2023-12-23T14:39:25-08:00
draft: true
tags: []
toc: true
---

ECDL, Or Entity Component Definition Language, is a new Markup Language
(Technically two) designed for Defining Entities and Components in Entity
Component Systems, but more specifically the new engine I've started work on
both against my better judgment and the advice of friends. ECDL can be split
into two different markup languages that write quite similarly. Let' start with
what I consider the simpler of the two.

## EDL - Entity Definition Language

EDL, or Entity Definition Language, is used for, well, defining entities. It
should be quite familiar to anyone who's worked with TOML or INI-style files
before, as it's heavily inspired by them, and could honestly have probably just
been written as TOML files but uhhh... Fuck that, I'm gonna make my own.

Entities in ECSs are just collections of components with a unique ID. But seeing
how the IDs are irrelevant in the actual definition of Entities, we only need to
worry about the Components. Here's just about the most simple EDL File possible.

```toml
# object.edl

Object

[transform]
position = vec2(0,0)
```

So let's break that down. It
