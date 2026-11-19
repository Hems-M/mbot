---
title: MBot Omni
summary: "A three wheel robot that can drive in any direction, with a Raspberry Pi 4. Build it with the Hardware steps, then set it up with the Software steps."
toc: false
redirect_from:
  - /docs/hardware/omni/
---

<div class="cards cards-2">
  <a class="card" href="{{ '/docs/omni/hardware/' | relative_url }}">
    <span class="card-icon">{% include icon.html name="tool" %}</span>
    <span class="tag">6 steps</span>
    <span class="card-title">Hardware</span>
    <p class="card-text">Parts list and motor cables, then build the bottom, middle and top plates and connect the cables.</p>
    <span class="card-go">Build the robot {% include icon.html name="arrow-right" %}</span>
  </a>
  <a class="card" href="{{ '/docs/omni/software/' | relative_url }}">
    <span class="card-icon">{% include icon.html name="monitor" %}</span>
    <span class="tag">7 steps</span>
    <span class="card-title">Software (desktop setup)</span>
    <p class="card-text">Flash the SD card, join Wi-Fi through the robot desktop in NoMachine, calibrate and drive.</p>
    <span class="card-go">Set up the software {% include icon.html name="arrow-right" %}</span>
  </a>
</div>

## What is on the MBot Omni

{% include gallery.html dir="/assets/images/hardware/omni/" files="omni.jpg" captions="A finished MBot Omni" size="one" %}

| Part | What it does |
|---|---|
| Raspberry Pi 4 (in a heatsink case) | The main computer. Runs Linux, a desktop, and your code. |
| MBot Control Board with Pico | Drives the motors and reads the encoders and IMU. Talks to the Pi over USB. |
| 3 motors with encoders | Each turns one omni wheel. The encoders count how far each wheel turned. |
| 3 omni wheels | Wheels with small rollers, so the robot can slide sideways. |
| RPLidar A1 | Spinning laser that measures distance all around the robot. |
| Camera (5 MP) | Sees in front of the robot. |
| OLED screen | Shows the robot name and IP address. |
| 12 V battery | Powers the Pi (USB-C) and the control board (barrel cable). |
