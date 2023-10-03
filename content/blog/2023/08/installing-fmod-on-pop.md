---
title: "Installing Fmod Studio on Pop!_OS"
date: 2023-08-03T01:27:58-07:00
draft: false
tags: [linux, fmod, tutorial]
---

So, as a game developer, I *love* FMOD. Advanced sound is always so cool to me!
However, when installing FMOD Studio on Pop!_OS, you'll run into an issue.

```bash
$ dpkg -i fmodstudio<version>.deb
Package pulseaudio is not installed
```

So, even though it requires a *bit* of editing files that you probably
shouldn't, it's actually quite easy!

First, run `dpkg -i --force-all fmodstudio<version>.deb`. This installs FMOD
Studio, and FMOD Studio will run just fine! There's an issue, though.
When you next try to install something with `apt` you'll discover that it
won't allow you to install anything, because a dependency is unresolved.

To solve this, you need to edit `/var/lib/dpkg/status` as sudo. Find the
entry for `fmodstudio`, and remove `pulseaudio` from `Depends`.

And boom! FMOD Studio running on Pop!_OS without any issues anywhere!

Or you could install the AppImage, but that's not as fun...

