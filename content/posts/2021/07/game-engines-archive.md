---
title: "Game Engines [ARCHIVE]"
date: 2021-07-12T10:01:29-07:00
draft: false
tags: [archive, gamedev, "game engines", godot]
---
**PLEASE NOTE: this is an archive from my original blog. It was my only post.**

```txt
Before we begin: A game engine is a tool which is used to create games. It
usually has a user interface and a scripting language (a specialized programming
language unique to the engine) of some sort.  
A game _framework_ is a library of code which can be added to your code so it's
easier to make a game. These generally require substantially more knowledge and
coding skill.
```

So, as many of you know, [I like to make games.](https://intangiblematter.itch.io)
A lot. I've published four games (as
of writing) and have created several more. However, my choice of game engine
hasn't always been consistent. The first engine I tried to use was, as is many
people's first choice, Unity. My time with this engine was short, and I had a
great deal of trouble trying to grock how it works.

### My Issues With [Unity](https://unity,com)

![](/media/game-engines-2021-07-12/unity.svg)Unity is a great engine... for some
people. It's very powerful, and it's become the industry standard for games, if
there is one. It's been used for many well-known and well-regarded games.
Including one of my favourites, [Hollow Knight](https://www.hollowknight.com/).
However, Unity is signifcantly better optimized for 3D games than 2D games
because when Unity was first released in 2005, many people were still writing
their own game engines. However, this meant that if you were an indie developer
without a major studio, you were more likely to make a 2D game than a 3D one
because it's much easier to create a 2D engine. Unity picked up steam by
focussing on 3D. Because Unity based itself on filling a gap in the market, it
gained a large amount of success and is now responsible for around 45% of games
being released\[1\]

However, despite all of these remarkable achievements, Unity never clicked for
me. I had a few major issues that come to mind, with my first one being how
Unity is designed for 3D games, not 2D. That's not to say it can't do 2D, it
does it perfectly well (See Hollow Knight or Thomas Was Alone,) but its
implementation of 2D... leaves a lot to be desired. How Unity Engine implemented
2D was it took its 3D engine and locked the camera into a fixed perspective.
_There we go boss, 2D engine is done!_ Now, this sounds like a perfectly fine
implementation on paper. It even has some benefits! For example, you can import
a 3D model and it'll fit with everything else just fine! However, in practice,
this makes it difficult to create 2D games for a variety of reasons. The main
ones I ran into were having to use 3D physics and the lack of a distinct type of
measurement unit. These, combined with many other issues, such as the need to
import many different packages to achieve some extremely basic functionality (If
you want text to look nice, add a package called TextMeshPro.)

But the thing that prevented me from really using this engine was the choice of
scripting language- C#. Now, C# isn't a difficult language- if you have
experience coding. But 12 year old me in 2018 was not an experienced coder. He
was fresh out of [Scratch](https://scratch.mit.edu) and taking a
[Codecademy](https://codecademy.com) Python course. All of this proved to be a
little much but in the end I did learn some basics of Game Engine functionality.
But all of this kept me off Unity no matter how many times I tried to come back
over the next year.

Then, in March 2020, the world went into lockdown.

With nothing better to do, I browsed Reddit. Then, one day, on r/gamedev I saw a
post that Clickteam Fusion: standard edition (an engine I had been eyeing for a
while but had never gotten due to the over $100 price tag) had a free 3-month
trial so people had something to do during the pandemic.

### [Fusion 2.5](https://clickteam.com) Isn't Jazz, Disappointingly

![](/media/game-engines-2021-07-12/fusion.svg) Clickteam Fusion 2.5 is a
remarkably powerful engine. It is also an extremely easy to use engine. On top
of all this, it is an extremely frustrating engine. Knowing the first two, I
excitedly downloaded it in near the end of March, and started creating my first
game with it. This is where I discovered the Engine's strengths and weaknesses.
On the one hand, all you need to do to create game logic is to create a new row
in its spreadsheet-style event editor, set up what triggers that row, and then
set up what happens when that row is triggered. And you can do all of this with
just your mouse. Not a single line of code needs to be written. And this works
great... for extremely simple games. Because the minute you want to start adding
enemy AI, or even multiple enemies for the plyer to collide with, you need to
duplicate many rows of events, and change one thing each time. Now do this for
everything in every level and it starts to get tiring. The biggest game I made
with the engine was a birthday gift for my mom. A small 2D platformer where you
need to collect the letters of "HAPPY BIRTHDAY" while exploring a small map.
While doing this, I discoveredone of the most annoying things about fusion- no
tilemaps. A tilemap is essentially a little sheet of tiles which can be selected
and placed in a level. From this tilemap you can select any tile, and place it.
Every tile is stored in the one object, and this keeps things clean and easy to
manage. Clickteam Fusion 2.5 does not have these. So when I started creating a
large level, I had to create a new object for each unique type of tile. So this
got messy, and it got messy _FAST._ The game turned out simple and cute and fun.
It is with this engine that I entered my first game jam and published my first
game, [Pack the Pack](https://intangiblematter.itch.io/pack-the-pack/) for the
LebGameDev Quarantine Jam. From this I started to work on my next game. One
which I never finished because around this time I watched some 
[videos by Miziziziziziziziziziz](https://www.youtube.com/watch?v=mtIW9h1-bxk&list=PLmugv6_kd0qMgc7Bd2gO7cbfrdBIQrdpV)
or however the fuck many "iz"s he has in his name. And his engine of choice was
a little open source project called Godot.

### Waiting For [Godot](https://godotengine.org)

![](/media/game-engines-2021-07-12/godotc.svg) As my time with the free version
of Fusion grew shorter, its outdated interface, high costs, and complications
all began to make themselves more and more present. Because of this, I began to
look for other engines. Thinking on what engine I could use that wasn't Fusion
or Unity, I thought of what free engines I'd heard of, and remembered Godot. I
looked into it, downloaded it, and looked at some of the built-in demo projects.
After thoroughly misunderstanding the interface, I found a short 15-minute
tutorial by [Heartbeast](https://www.youtube.com/c/uheartbeast) which let me
make a simple 2D platformer in about 20 lines of code. This taught me the basics
of Godot's node system which, while hard to understand at first, makes creating
complex objects really simple due to the engine prioritizing the Object Oriented
model of Composition over Inheritance. Godot has a scripting language called
GDScript, a pythonic scripting language designed specifically for the engine.
Everything I've looked for in a game engine appears here in Godot, and it does
it all well. I've released 3 games with it so far, and development with the
engine is just fast, easy, and streamlined. None of these things done to make
development easier come at the price of efficiency or safety, though. Godot has
a dedicated 2D engine which uses pixels as its units of measurement. This makes
it so that there are less issues with physics types and creating 2D games
efficiently. This is great for me, who definitively prefers 2D games and
creating 2D games to 3D ones.

Godot is also a comparatively new engine, so it hasn't had any hits releaseed
with it just yet. It does. however, have a strong community and many people
working on making the engine better. It has many small features that make it a
pleasure to work with, and it makes several of the more frustrating bits of game
development, such as input, a breeze. For these reasons and more, I have been
working with Godot as my engine of choice for over a year and plan to continue
using it for the forseeable future. Godot doesn't make everything extremely
easy, though. For example, while it isn't difficult to do drawing with code in
Godot, the engine is definitely better optimized for using sprites. So, when
looking at other engines, I found a little Lua-based project called LÖVE2D.

### All You Need Is [LÖVE](https://love2d.org)

![](/media/game-engines-2021-07-12/lovec.svg)LÖVE is an open source game engine
with no GUI, working exclusively through Lua scripts. LÖVE makes many of the
things that are difficult in Godot extremely easy. I wrote my first program
(without a tutorial) in LÖVE in 60 lines of code, which functioned perfectly on
the first try. And it was all readable. LÖVE's strenghts are in its simplicity
and its efficiency. However, it also complicates many of the integral parts of
game development, such as scaling and input, which Godot simplifies. So, as of
writing I have settled on a system where when I create games I use Godot, and
when I just make live graphics projects I use LÖVE. I find this to be effective
for me because it allows me to use the strengths of each engine, while largely
avoiding the weaknesses.

