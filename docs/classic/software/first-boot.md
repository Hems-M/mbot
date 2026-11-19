---
title: Turn on and connect
summary: "Start the robot, join its hotspot from your laptop, and open a terminal on the robot."
---

## 1. Turn the robot on

1. Check the SD card is in the Raspberry Pi.
2. Switch the battery **ON**.
3. **Wait a few minutes.** The first start is slow because the robot sets itself up.
{: .steps}

## 2. Join the robot's hotspot

The robot cannot join MWireless yet, so it makes its own Wi-Fi network.

1. On your laptop, open the Wi-Fi list.
2. Find the network called **`<robot-name>-AP`**, for example `mbot-rob550-07-AP`.
3. Join it. The password is **`{{ site.data.mbot.hotspot_password }}`** (or the `mbot_ap_password` you set in the config file).
{: .steps}

> **No hotspot yet?** It can take a few minutes to appear. Check with your phone's Wi-Fi list too.
{: .tip}

> While you are on the hotspot, **your laptop has no internet**. That is normal. You switch back in the next step.
{: .tip}

## 3. Open a terminal on the robot

1. Open a terminal on your laptop: **Terminal** on Mac or Linux, **PowerShell** on Windows.
2. Run:
   ```bash
   ssh {{ site.data.mbot.user }}@{{ site.data.mbot.hotspot_ip }}
   ```
3. The first time, it asks if you trust this computer. Type `yes` and press Enter.
4. Type the password: `{{ site.data.mbot.password }}`. Nothing shows while you type. That is normal.
{: .steps}

**It worked if** your prompt changes to something like `mbot@mbot-rob550-07:~$`. Every command you type now runs on the robot.

> **Did not connect?** Try the robot's name instead of the number: `ssh {{ site.data.mbot.user }}@<robot-name>.local`
{: .tip}

> **Using home Wi-Fi?** If you put your home Wi-Fi in the config file, the robot joins it and does **not** make a hotspot. Join your laptop to the same Wi-Fi, read the IP on the robot's screen, then skip to [Connect with VS Code]({{ site.baseurl }}/docs/classic/software/vscode/).
{: .tip}
