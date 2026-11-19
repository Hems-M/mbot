---
title: Find your robot's IP
summary: "Your robot's IP address is how your laptop finds it on the network. Here are three ways to get it."
redirect_from:
  - /docs/tutorials/get-ip/
---

An IP address looks like four numbers with dots, for example `10.1.2.3`. You need it for SSH, VS Code and the web app.

> **The IP can change.** Check it each time you start working.
{: .tip}

| Your robot has... | Get the IP from |
|---|---|
| A screen (OLED) | [The screen](#from-the-screen). Easiest. |
| An IP registry set up by your course | [The registry](#from-the-ip-registry) |
| Neither | [The SD card](#from-the-sd-card) |
| You are on the robot's hotspot | It is always `{{ site.data.mbot.hotspot_ip }}`, or use `<robot-name>.local` |

## From the screen

The OLED screen on the robot shows the IP address once the robot is on the network.

{% include gallery.html dir="/assets/images/tutorials/" files="mbot-oled-ip.jpg" captions="The IP address on the robot's screen" size="md" %}

## From the IP registry

Your course may have an IP registry: a GitHub repository where each robot posts its address. Course staff give you the link. It is also in the `mbot_ip_list_url` line of `mbot_config.txt`.

1. Open the registry and go to the `data` folder.
2. Open the file named after your robot: `data/<robot-name>.json`. The name matches the label on your robot.
3. Read the IP address in the file.
{: .steps}

{% include gallery.html dir="/assets/images/setup/" files="get_ip.png" captions="The robot's IP in the registry" size="one" %}

## From the SD card

Use this only if you have no screen and no registry. It is the slowest way.

1. Turn the robot on and wait 1 to 2 minutes for it to join Wi-Fi.
2. Shut it down (`sudo shutdown now` if you can, then switch it off).
3. Take out the SD card and put it in your laptop.
4. Open the file `ip_out.txt` on the card and write down the IP.
5. Put the card back and turn the robot on.
{: .steps}

## Fixed IP addresses

If your network allows it, you can give each robot a fixed (static) IP and connect by name. Many large networks, including **MWireless**, do not allow this.
