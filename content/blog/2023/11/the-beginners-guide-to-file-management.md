---
title: "The Beginner's Guide to File Management"
date: 2023-11-15T02:57:11-08:00
draft: true
tags: [tutorial, files, general]
---

So, it has come to my attention as of late that most people my age and younger
were never taught how to properly organize their files. As someone born in 2006,
I grew up on Windows XP, so I was forced to learn how to organize files, or else
my entire computer would be a mess. I got more training later through my life
thanks to my dad's (who I called 'Lala') excellent file organization, and the
face that in order to be effective in game development you *need* an effective
folder structure. I've used all the major operating systems,
and have now finally settled on Linux ([Pop!_OS](https://pop.system76.com/) specifically is my current distro of choice.)
This guide should apply to all operating systems, or any system where you
organize files, really. Anything from Google Drive to that 2008 Thinkpad
you still have sitting around.\
This isn't a recipe blog, so let's just get into it.

## The Basics

Your computer almost *definitely* comes with a preexisting structure for your
folders and files. The exact folders vary between OSes, as do the place they're
stored by default, but generally you'll have the following:

- Desktop
- Documents
- Downloads
- Music
- Pictures
- Public/Shared
- Videos

And this is a perfectly good base! But most people don't bother organizing much
*inside* of the folders, if they do at all. This is one of the first key errors
that people make in organizing files. One of the first key things to remember
is that

### Folder Organization is *Recursive*

For those of you who don't know what "recursive" means, it's basically just
something that can be applied to itself. Every folder you make is likely to
have more than one *kind* of thing that needs to go in there. As an example,
let's take a `Pictures` folder. You have many different kinds of pictures that
you need to save. For the sake of simplicity, let's say you have three
basic categories:

1. Stock photos
2. Personal photos
3. Funny memes

So obviously you want to start by splitting up your Pictures folder into
these three different categories, but what about inside each of *those* folders?
Well, let's say that you have stock photos of people in offices, and stock photos
of people looking happy in nature. This lends itself well to splitting too! We
can make a `Nature` folder in the `Stock` folder, and we can make an `Office`
folder in the `Stock` folder. Look at that! Now you can find that photo of all
your red-headed coworkers laughing at your awkward teenage photos you forgot
to take off of Instagram!

![red haired-office people looking at a computer](https://images.unsplash.com/photo-1603201667141-5a2d4c673378?q=80&w=2096&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)
{{<caption "Look at them laugh. Look at them.">}}

But say that you have a *lot* of photos of nature. Most of them are of the beach
or of forests, but not all of them are. The three folders I'd recommend here are
`forest`, `beach`, and `other`. The first two are quite obvious, but the `other`
folder is a *special* case that I [wrote more about elsewhere in this guide.](#the-other-folder)

Hopefully now you can see how recursively organizing your folders helps to make
your file system *much* cleaner.

### Naming is *Critical*

You can have folders each with a very specific purpose, but that won't count
for *anything* if your naming scheme is bad. Every folder should have a clear,
distinct, and concise name. These three properties are listed in order of
importance. A clear name is *always* more important than having a distinct name,
and while having a concise name is *important*, sometimes you have to bite the
bullet and name your folder `Cats without red fur` because the way you've
set up your folders thus far means that you need to have this long name. This
happens sometimes, but when it does it's frequently an indication of failing to
organize your folders well enough that you could just have a folder named
`Red Fur - without` in your `Cats` folder. If you find yourself in a folder
where you have a lot of things with long names, and those things can be
split into further folders at all, it's time to reorganize!

### Lumping vs. Splitting

![xkcd 2518: Lumpers and Splitters](https://imgs.xkcd.com/comics/lumpers_and_splitters.png)

In general there are two methods of categorizing for your folders: Lumping and
Splitting. Lumping is where you group things based on commonalities, whereas
splitting is where you split things into groups based on their differences. In
general, I recommend using Lumping for top-level folders, and splitting once
you reach a certain sub-level. Take the Stock photo example from earlier.
They're all *lumped* together as Stock photos, then they're *split* into nature
and office photos, whereupon they can be further split.

This is just a rule of thumb, though. Sometimes it makes more sense to lump
things together in subfolders instead, or maybe you've got some files where it
just feels more natural to split them at the top level than it does to lump
them. Everything in this guide is a rule of thumb, there are always exceptions,
but you get better at telling where to use exceptions as you get better at the
basics.

## Systems

### The `Other` Folder

This is a tool in your arsenal which should be used *extremely* sparingly. I
only recommend its usage in the event that there are a few outliers in a folder
where things are otherwise well-organized. This folder exists as a
*preventative measure* to stop your higher-level folders getting filled up with
random files that don't quite work in any of your existing folders. If your
`Other` folder starts to take up more than about a screen when you view it,
*you need to go through and organize it into more folders.*

### The Date System

Sometimes you have something that you add files to with some regularity, but
the files might just be a large dump of something, or something else where it's
otherwise impractical to organize them as described elsewhere. This is where I
recommend *The Date System*, where you organize things based on the date they
were created/imported/whatever. The date system works like this:

```txt
YYYY
|- MM
   |- DD
   |- DD
|- MM
YYYY
|- MM
```

You start with a broader folder for the year, written as four numbers. Then in
each year you have folders for each month (that you need, if you didn't add
anything in February, don't add `02`) written as their numerical value. You
*can* write the months as their names, but I recommend using numbers so that
they all stay nicely ordered.

Then, depending on frequency, you can have folders for days.

I use this system for everything from my blog to my schoolwork. It makes is
*extremely* easy to find what I've been working on, as it's usually in the
latest month folder, and it also means that I don't worry about getting my
assignments from March jumbled in with those from October.

Another good use for the Date system is when importing photos. You may pull
the pictures off your camera several times a year, so it makes it *way* easier
to find the pictures from a certain dump when you have them named in this way.

There's a slight variation I recommend in the event that you don't add new files
frequently, and usually as big batches, and that's based on [ISO Standard 8601](https://www.iso.org/iso-8601-date-and-time-format.html),
where a date is written as `YYYY-MM-DD`. I usually use this for photo dumps.

YYYY/MM/DD
