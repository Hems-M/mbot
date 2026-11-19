---
title: MBot Classic
summary: "A two wheel robot with a Raspberry Pi 5. Build it with the Hardware steps, then set it up with the Software steps."
toc: false
redirect_from:
  - /docs/hardware/classic/
---

<div class="cards cards-2">
  <a class="card" href="{{ '/docs/classic/hardware/' | relative_url }}">
    <span class="card-icon">{% include icon.html name="tool" %}</span>
    <span class="tag">5 steps</span>
    <span class="card-title">Hardware</span>
    <p class="card-text">Parts list, then build the bottom, middle and top plates and connect the cables.</p>
    <span class="card-go">Build the robot {% include icon.html name="arrow-right" %}</span>
  </a>
  <a class="card" href="{{ '/docs/classic/software/' | relative_url }}">
    <span class="card-icon">{% include icon.html name="terminal" %}</span>
    <span class="tag">7 steps</span>
    <span class="card-title">Software (server setup)</span>
    <p class="card-text">No desktop on the robot. Flash the SD card, join Wi-Fi from a terminal, calibrate and drive.</p>
    <span class="card-go">Set up the software {% include icon.html name="arrow-right" %}</span>
  </a>
</div>

## What is on the MBot Classic

{% include gallery.html dir="/assets/images/hardware/classic/assembly/wiring/" files="0-mbot.jpg" captions="A finished MBot Classic" size="one" %}

| Part | What it does |
|---|---|
| Raspberry Pi 5 | The main computer. Runs Linux and your code. |
| MBot Control Board with Pico | Drives the motors and reads the encoders and IMU. Talks to the Pi over USB. |
| 2 motors with encoders | Turn the wheels. The encoders count how far each wheel turned. |
| RPLidar A1 | Spinning laser that measures distance all around the robot. |
| Camera | Sees in front of the robot. |
| OLED screen | Shows the robot name and IP address. |
| 12 V battery | Powers the Pi (USB-C) and the control board (barrel cable). |

Want to know about the board? See [The control board]({{ site.baseurl }}/docs/guides/control-board/).
