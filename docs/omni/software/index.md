---
title: MBot Omni software
eyebrow: MBot Omni · Desktop setup
summary: "Set up the robot with its desktop. You join Wi-Fi through the robot desktop in NoMachine, then write code with VS Code."
needs: [Built robot, microSD card and reader, Laptop with VS Code and NoMachine, Charged battery]
---

## What "desktop setup" means

The robot runs Linux **with a desktop**, like a normal computer. You see that desktop on your laptop with **NoMachine**, a remote desktop app. You use it to join MWireless and for tools that open a window. For writing code, use **VS Code**, the same as on the Classic.

> **MBot Classic users:** the Classic uses the newer [server setup]({{ site.baseurl }}/docs/classic/software/), with no desktop.
{: .tip}

## The steps

<ul class="path-list">
  <li><a href="{{ '/docs/omni/software/flash-sd-card/' | relative_url }}"><span class="path-num">1</span><span><span class="path-title">Flash the SD card</span><span class="path-text">Copy the MBot Omni image onto the card.</span></span>{% include icon.html name="arrow-right" %}</a></li>
  <li><a href="{{ '/docs/omni/software/configure/' | relative_url }}"><span class="path-num">2</span><span><span class="path-title">Edit the config file</span><span class="path-text">Give the robot its name.</span></span>{% include icon.html name="arrow-right" %}</a></li>
  <li><a href="{{ '/docs/omni/software/first-boot/' | relative_url }}"><span class="path-num">3</span><span><span class="path-title">Turn on and connect</span><span class="path-text">Join the robot's hotspot and open its desktop in NoMachine.</span></span>{% include icon.html name="arrow-right" %}</a></li>
  <li><a href="{{ '/docs/omni/software/wifi/' | relative_url }}"><span class="path-num">4</span><span><span class="path-title">Join Wi-Fi</span><span class="path-text">Run the UM setup script on the robot desktop.</span></span>{% include icon.html name="arrow-right" %}</a></li>
  <li><a href="{{ '/docs/omni/software/vscode/' | relative_url }}"><span class="path-num">5</span><span><span class="path-title">Connect with VS Code</span><span class="path-text">Open the robot's files and terminal on your laptop.</span></span>{% include icon.html name="arrow-right" %}</a></li>
  <li><a href="{{ '/docs/omni/software/calibrate/' | relative_url }}"><span class="path-num">6</span><span><span class="path-title">Calibrate and flash</span><span class="path-text">Teach the control board your motors and load the firmware.</span></span>{% include icon.html name="arrow-right" %}</a></li>
  <li><a href="{{ '/docs/omni/software/drive/' | relative_url }}"><span class="path-num">7</span><span><span class="path-title">Test drive</span><span class="path-text">Drive from your browser, sideways too.</span></span>{% include icon.html name="arrow-right" %}</a></li>
</ul>

## What is on the robot

The tools you will use with the desktop setup, what each one does, and when to use it.

{% include features-table.html robot="omni" %}

> **Students:** your course may give you a ready image or extra steps. Check with course staff before you start.
{: .tip}
