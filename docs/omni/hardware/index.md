---
title: MBot Omni hardware
summary: "Build the MBot Omni in six steps. Each plate is built on its own, then stacked."
needs: [Screwdrivers and hex keys, Soldering iron for threaded inserts]
redirect_from:
  - /docs/hardware/omni/assembly/
---

## The steps

<ul class="path-list">
  <li><a href="{{ '/docs/omni/hardware/parts/' | relative_url }}"><span class="path-num">1</span><span><span class="path-title">Parts and design files</span><span class="path-text">Parts list, CAD and laser cut files. Skip this if you have a kit.</span></span>{% include icon.html name="arrow-right" %}</a></li>
  <li><a href="{{ '/docs/omni/hardware/motor-cables/' | relative_url }}"><span class="path-num">2</span><span><span class="path-title">Motor cables</span><span class="path-text">Make the three motor cables. The wire order matters.</span></span>{% include icon.html name="arrow-right" %}</a></li>
  <li><a href="{{ '/docs/omni/hardware/bottom-plate/' | relative_url }}"><span class="path-num">3</span><span><span class="path-title">Bottom plate</span><span class="path-text">Wheels, motors and control board.</span></span>{% include icon.html name="arrow-right" %}</a></li>
  <li><a href="{{ '/docs/omni/hardware/middle-plate/' | relative_url }}"><span class="path-num">4</span><span><span class="path-title">Middle plate</span><span class="path-text">Raspberry Pi 4, camera and battery holder.</span></span>{% include icon.html name="arrow-right" %}</a></li>
  <li><a href="{{ '/docs/omni/hardware/top-plate/' | relative_url }}"><span class="path-num">5</span><span><span class="path-title">Top plate</span><span class="path-text">Lidar and OLED screen.</span></span>{% include icon.html name="arrow-right" %}</a></li>
  <li><a href="{{ '/docs/omni/hardware/wiring/' | relative_url }}"><span class="path-num">6</span><span><span class="path-title">Final wiring</span><span class="path-text">Screen cable, stack the plates and plug in every cable.</span></span>{% include icon.html name="arrow-right" %}</a></li>
</ul>

## Before you start

- Each step starts with a **parts table**. Lay those parts out before you begin.
- Click any photo to see it larger.
- Use motors with the **48 resolution** encoder (it comes already attached). Not sure which you have? See [Which encoder do I have?]({{ site.baseurl }}/docs/omni/software/calibrate/#which-encoder)
- The wheels in this guide are **96 mm**. You need to know your wheel size when you flash the firmware.
