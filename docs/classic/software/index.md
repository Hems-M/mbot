---
title: MBot Classic software
eyebrow: MBot Classic · Server setup
summary: "Set up the robot with no desktop. You do everything from your laptop: a terminal over SSH and VS Code. No monitor, keyboard or NoMachine needed."
needs: [Built robot, microSD card and reader, Laptop with VS Code, Charged battery]
redirect_from:
  - /docs/setup/
---

## What "server setup" means

The robot runs Linux **without a desktop**. There are no windows on the robot. You control it from your laptop:

- a **terminal** on the robot over SSH, for commands
- **VS Code** on your laptop, connected to the robot, for code
- a **web browser**, for the MBot web app

With no desktop running, there is less to break and the robot uses less battery.

## The steps

<ul class="path-list">
  <li><a href="{{ '/docs/classic/software/flash-sd-card/' | relative_url }}"><span class="path-num">1</span><span><span class="path-title">Flash the SD card</span><span class="path-text">Copy the MBot image onto the card.</span></span>{% include icon.html name="arrow-right" %}</a></li>
  <li><a href="{{ '/docs/classic/software/configure/' | relative_url }}"><span class="path-num">2</span><span><span class="path-title">Edit the config file</span><span class="path-text">Give the robot its name.</span></span>{% include icon.html name="arrow-right" %}</a></li>
  <li><a href="{{ '/docs/classic/software/first-boot/' | relative_url }}"><span class="path-num">3</span><span><span class="path-title">Turn on and connect</span><span class="path-text">Join the robot's hotspot and open a terminal on it.</span></span>{% include icon.html name="arrow-right" %}</a></li>
  <li><a href="{{ '/docs/classic/software/wifi/' | relative_url }}"><span class="path-num">4</span><span><span class="path-title">Join Wi-Fi</span><span class="path-text">One command connects the robot to MWireless.</span></span>{% include icon.html name="arrow-right" %}</a></li>
  <li><a href="{{ '/docs/classic/software/vscode/' | relative_url }}"><span class="path-num">5</span><span><span class="path-title">Connect with VS Code</span><span class="path-text">Open the robot's files and terminal on your laptop.</span></span>{% include icon.html name="arrow-right" %}</a></li>
  <li><a href="{{ '/docs/classic/software/calibrate/' | relative_url }}"><span class="path-num">6</span><span><span class="path-title">Calibrate and flash</span><span class="path-text">Teach the control board your motors and load the firmware.</span></span>{% include icon.html name="arrow-right" %}</a></li>
  <li><a href="{{ '/docs/classic/software/drive/' | relative_url }}"><span class="path-num">7</span><span><span class="path-title">Test drive</span><span class="path-text">Drive from your browser to check everything works.</span></span>{% include icon.html name="arrow-right" %}</a></li>
</ul>

## How the robot gets online

This is what happens in steps 3 and 4:

1. The robot starts and looks for a Wi-Fi network it knows.
2. It finds none, so it makes its **own Wi-Fi hotspot**, called `<robot-name>-AP`.
3. You join that hotspot from your laptop and open a terminal on the robot with SSH.
4. You run `sudo mwireless-setup` and type your UM login once.
5. The robot joins **MWireless**, shows its new IP address on its screen, and remembers the login for next time.
{: .steps}

From then on, the robot joins MWireless by itself every time it starts.

## What is on the robot

The tools you will use with the server setup, what each one does, and when to use it.

{% include features-table.html robot="classic" %}

The full list, including the Omni tools, is on [What is on the robot]({{ site.baseurl }}/docs/guides/software-features/).

> **Students:** your course may give you a ready image or extra steps. Check with course staff before you start.
{: .tip}
