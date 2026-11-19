---
title: Join Wi-Fi
summary: "Connect the robot to MWireless with the UM setup script, inside NoMachine. You only do this once."
needs: [Your uniqname and UM password, NoMachine connected (step 3)]
---

## Which Wi-Fi?

| Where you are | What to do |
|---|---|
| **UM campus (MWireless)** | Follow the steps on this page. |
| **Home, or a phone hotspot** | Put the Wi-Fi name and password in `mbot_config.txt` ([step 2]({{ site.baseurl }}/docs/omni/software/configure/)) and restart the robot. Skip this page. |
| **No Wi-Fi at all** | Stay on the robot's hotspot and use `<robot-name>.local` as the address. |

## Join MWireless

1. In the NoMachine window, open a **terminal** on the robot desktop.
2. Run the UM setup script. It is already in the home folder:
   ```bash
   sh SecureW2_JoinNow.run
   ```
   Not there? Download it from the [MSetup website](https://cloud.securew2.com/public/92472/UMich-WiFi/?device=Linux) (choose **Join Now**).
3. Enter your UM uniqname and password when asked.
4. The robot leaves its hotspot and joins MWireless. **NoMachine disconnects.** This is expected.
5. Join your laptop back to **MWireless**.
6. Look at the robot's screen. It shows the robot's **new IP address**.
{: .steps}

**It worked if** an IP address shows on the robot's screen. The robot remembers the network and joins it by itself next time.

> **Typo in your login?** The robot cannot join, and you may need a monitor and keyboard to fix it. See below.
{: .warn}

## Fix it with a monitor and keyboard

Use this if the script did not work, or your network needs a login page or two step sign in.

1. Plug a monitor into the Raspberry Pi with a **micro HDMI to HDMI** cable. Plug in a USB keyboard and mouse.
2. Turn the robot on and wait for the desktop.
3. Join the network from the Wi-Fi menu or run the script again. Follow your network's Linux instructions.
4. Restart the robot.
{: .steps}

> If the saved login stops working later (for example after a password change), do these steps again.
{: .tip}
