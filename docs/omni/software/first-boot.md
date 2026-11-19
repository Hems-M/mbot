---
title: Turn on and connect
summary: "Start the robot, join its hotspot, and open the robot desktop with NoMachine."
needs: [NoMachine on your laptop]
---

## 1. Turn the robot on

1. Check the SD card is in the Raspberry Pi.
2. Switch the battery **ON**.
3. **Wait a few minutes.** The first start is slow because the robot sets itself up.
{: .steps}

## 2. Join the robot's hotspot

The robot cannot join MWireless yet, so it makes its own Wi-Fi network.

1. On your laptop, open the Wi-Fi list.
2. Find the network called **`<robot-name>-AP`**.
3. Join it. The password is **`{{ site.data.mbot.hotspot_password }}`** (or the `mbot_ap_password` you set in the config file).
{: .steps}

> **No hotspot yet?** It can take a few minutes to appear. Check with your phone's Wi-Fi list too. While you are on the hotspot, your laptop has no internet. That is normal.
{: .tip}

## 3. Open the robot desktop in NoMachine

1. Install **NoMachine** on your laptop from [nomachine.com](https://www.nomachine.com/) if you do not have it.
2. In NoMachine, add a new connection. Give it a clear name. For **Host**, type `<robot-name>.local`.
3. Connect. Log in with username `{{ site.data.mbot.user }}` and password `{{ site.data.mbot.password }}`.
{: .steps}

{% include gallery.html dir="/assets/images/setup/" files="nomachine-add-host.jpg,nomachine-login.jpg" captions="Add the robot as a host|Log in" size="md" %}

**It worked if** you see the Raspberry Pi desktop in the NoMachine window.

> **Using home Wi-Fi?** If you put your home Wi-Fi in the config file, the robot joins it and does **not** make a hotspot. Join your laptop to the same Wi-Fi, read the IP on the robot's screen, and use that IP as the NoMachine host. Then skip to [Connect with VS Code]({{ site.baseurl }}/docs/omni/software/vscode/).
{: .tip}
