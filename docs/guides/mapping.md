---
title: Mapping and localization
summary: "Build a map of the room with the lidar, then let the robot find itself on that map. Done from the MBot web app."
needs: [Robot IP address, Lidar plugged in]
redirect_from:
  - /docs/tutorials/mapping/
---

This uses **SLAM** (simultaneous localization and mapping). The robot builds the map while it works out where it is.

> **Check SLAM is installed.** In a terminal on the robot, run `mbot service status mbot-slam.service`. If it is not found or not active, mapping will not work on this robot.
{: .tip}

## 1. Open the web app

Type your robot's IP into your browser. When the robot is working, you see a green **Connected** sign.

{% include gallery.html dir="/assets/images/tutorials/mapping/" files="mapp_starting.png" captions="The web app, connected" size="one" %}

## 2. Turn on mapping

1. Turn **Localization Mode** on. The saved map shows on the right. It may be blank if you never made one.
2. Put the robot in the room you want to map.
3. Turn **Mapping Mode** on. A message asks "This will overwrite the current map. Are you sure?" Click **OK**.
{: .steps}

{% include gallery.html dir="/assets/images/tutorials/mapping/" files="mapping_mode.png" captions="Mapping Mode on" size="one" %}

> **Localization keeps switching off?** Check the lidar is spinning, then restart the robot.
{: .warn}

## 3. Drive around

Turn on **Drive Mode** and drive slowly around the room until the map has no gaps.

- **Go slow.** Give the robot time to see each area before you move on.
- **Drive smoothly.** Forward and backward works best. Avoid fast or jerky turns.
- **Do not bump into anything.** If you do, click **Reset Map** and start again.

| Good map | Bad map |
|---|---|
| ![Good map: clean edges, matches the room]({{ '/assets/images/tutorials/mapping/good_map.png' | relative_url }}) | ![Bad map: blurry, shifted edges]({{ '/assets/images/tutorials/mapping/bad_map.png' | relative_url }}) |
| Walls are sharp and match the room. No gaps. | Walls are blurry or doubled. Reset and try again. |

## 4. Save and reuse the map

1. Turn **Mapping Mode** off. The map is saved on the robot as `~/current.map`.
2. Next time, turn **Localization Mode** on to use the same map. Check the robot shows up in the right place.
3. To keep a copy on your laptop, click **Download Map**.
{: .steps}

## Video

<div class="video"><iframe src="https://www.youtube-nocookie.com/embed/LzMrtliWKR8" title="Mapping with the MBot web app" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
