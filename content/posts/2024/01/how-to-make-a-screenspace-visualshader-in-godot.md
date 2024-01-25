---
title: "How to Make a Screenspace Visualshader in Godot"
date: 2024-01-25T11:10:12-08:00
draft: false
tags: [tutorial, godot, shaders, unhinged, technical, programming]
---
[*Click here to skip to the instructions.*](#the-actual-tutorial-bit-finally)

So Godot Engine has a really cool shader system, allowing you to do stuff like
change the way lighting works in both 2D *and* 3D using nothing but shaders,
and it additionally has a *powerful* VisualShader system. VisualShaders, for
those who don't know, are shaders that use a Shader Graph system instead of pure
code. I'm not huge on node-based programming systems, so I usually elect to
(poorly) write a shader myself, but I'm working on a game jam with a larger team
than I ever have before right now, and they wanted to use the [ShaderV addon](https://github.com/arkology/ShaderV)
because of how many cool things it has.

So I took the two shaders I'd written with code based on code from the plugin,
and converted them to VisualShaders.

Or, I started to anyways. It ended up being harder than expected.

In Godot 4, the `SCREEN_TEXTURE` variable isn't declared by default. Instead,
you need to write a single line of code to access the screen texture
(`uniform sampler2D SCREEN_TEXTURE : hint_screen_texture;`). This is fine in
code, but VisualShaders don't have this hint type.

So how do you get it?

It's actually simple but also hellish. I'm going to set it to a variable because
that makes it reusable, but if you only need to use it once it's easy enough to
just plug the output directly into where it needs to go.

## The Actual Tutorial Bit Finally

### Step 1

![The VisualShader GlobalExpression node set up](/media/2024/01/visualshader/global.png)

Make a new GlobalExpression node in the graph and insert the following code:
```glsl
uniform sampler2D SCREEN_TEXTURE : hint_screen_texture;
```

This gives us access to the screen texture using the SCREEN_TEXTURE variable.

### Step 2

![The VisualShader Expression node set up](/media/2024/01/visualshader/expression.png)

Make a new Expression node in the graph, give it an output parameter of type Vec4
(or Vec3 if you only want `.rgb`) and give it *this* code:
```glsl
color = texture(SCREEN_TEXTURE, SCREEN_UV);
```

This gets the colour of the screen texture at the correct coordinates.

### Step 3

![The final shader, low detail](/media/2024/01/visualshader/final.png)
Access it as you need!

Anyways, hope that this helps you save time so you don't spend an hour hacking
at this like I did!
