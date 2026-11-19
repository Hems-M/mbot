---
title: Robot basics
summary: "The default login, how to turn the robot on and off, and how to look after the battery."
redirect_from:
  - /docs/basics
---

## Login

| | Default |
|---|---|
| Username | `{{ site.data.mbot.user }}` |
| Password | `{{ site.data.mbot.password }}` |
| Hotspot Wi-Fi password | `{{ site.data.mbot.hotspot_password }}` |

> **Students:** your course may use a different password. Check with course staff.
{: .tip}

## Turn the robot on

1. Check the cables are plugged in (see the wiring step for your robot).
2. Switch the power bank to **ON**.
3. The red light on the Raspberry Pi turns on. Wait 1 to 2 minutes for the robot to start.
{: .steps}

## Turn the robot off

Always shut down the Raspberry Pi first. Pulling the power while it runs can damage the SD card.

1. In a terminal on the robot, run:
   ```bash
   sudo shutdown now
   ```
2. Wait until the lidar stops spinning.
3. Switch the power bank to **OFF**.
{: .steps}

## Battery care

- **Charge:** plug the battery into its charger and switch the battery **ON**. The charger light is red while charging and green when full.
- **Store:** switch the battery **OFF**.
- **Charge right away:** empty batteries take a long time to charge, so plug them in as soon as you are done.
- **Replace:** when a full battery shows only three of five green lights, it is time for a new one.

> **Save battery:** when you do not need the lidar, unplug its micro USB cable. The spinning lidar uses a lot of power.
{: .tip}
