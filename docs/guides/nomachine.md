---
title: Connect with NoMachine
summary: "NoMachine shows the robot's desktop on your laptop. Only the MBot Omni desktop setup has a desktop."
needs: [NoMachine on your laptop, Robot IP address]
redirect_from:
  - /docs/tutorials/no-machine/
---

> **MBot Classic (server setup) has no desktop**, so NoMachine does not apply. Use [VS Code]({{ site.baseurl }}/docs/guides/vscode/) or SSH instead.
{: .warn}

## When to use NoMachine

- To join MWireless with the SecureW2 JoinNow script.
- For tools that open a window on the robot, such as the desktop `lcm-spy`.

For writing code and running commands, VS Code is faster.

## Connect

1. Install NoMachine on your laptop from [nomachine.com](https://www.nomachine.com/).
2. Add a new connection. Give it a clear name. For **Host**, type the robot's IP address (or `<robot-name>.local` on the hotspot).
3. Connect and log in with username `{{ site.data.mbot.user }}` and password `{{ site.data.mbot.password }}`.
{: .steps}

{% include gallery.html dir="/assets/images/setup/" files="nomachine-add-host.jpg,nomachine-login.jpg" captions="Add the robot as a host|Log in" size="md" %}
