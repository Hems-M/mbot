---
title: Wi-Fi and hotspot
summary: "How the robot gets on a network, and what to do in each place: campus, home, or no Wi-Fi at all."
redirect_from:
  - /docs/setup/networking/
---

Your laptop and the robot must be on the **same network** to talk to each other.

## Pick your network

| Network | Example | How to connect the robot |
|---|---|---|
| **University Wi-Fi with a login** | MWireless | Classic: [`sudo mwireless-setup`](#mwireless-on-the-classic). Omni: [JoinNow script in NoMachine](#mwireless-on-the-omni). |
| **Normal Wi-Fi with a password** | Home Wi-Fi, phone hotspot | [Put it in the config file](#home-wi-fi) |
| **No Wi-Fi** | Demo, outdoors | [Use the robot's hotspot](#the-robots-hotspot) |

> **Students:** your course may have its own Wi-Fi instructions. Check with course staff.
{: .tip}

## How the robot decides

Every time it starts, the robot:

1. Tries the Wi-Fi networks it knows (MWireless if you set it up, and the one in `mbot_config.txt`).
2. If none work, it starts its **own hotspot** called `<robot-name>-AP`.
3. Shows its IP address on the screen.
{: .steps}

## MWireless on the Classic

On the MBot Classic server setup, one command does it. Full steps: [Classic, Join Wi-Fi]({{ site.baseurl }}/docs/classic/software/wifi/).

```bash
sudo mwireless-setup            # join MWireless (asks for your uniqname and password)
sudo mwireless-setup --status   # is it set up and connected?
sudo mwireless-setup --diagnose # what went wrong
```

## MWireless on the Omni

On the MBot Omni desktop setup, run the UM script in a terminal inside NoMachine. Full steps: [Omni, Join Wi-Fi]({{ site.baseurl }}/docs/omni/software/wifi/).

```bash
sh SecureW2_JoinNow.run
```

## Home Wi-Fi

For a normal network with just a name and password:

1. Turn the robot off and take out the SD card.
2. Put it in your laptop and open the `bootfs` drive.
3. Open `mbot_config.txt` and set:
   ```ini
   new_wifi_ssid=YourWiFiName
   new_wifi_password=YourWiFiPassword
   ```
4. Save, eject the card, put it back in the robot and turn it on.
{: .steps}

> **Quick fix:** no usable Wi-Fi? Turn on your phone's hotspot and use its name and password here.
{: .tip}

## The robot's hotspot

If the robot cannot join any network, it makes its own. You can also just use the hotspot if you do not need internet on the robot, for example for a demo.

1. On your laptop, join **`<robot-name>-AP`**. It can take a few minutes to appear.
2. Password: **`{{ site.data.mbot.hotspot_password }}`**, or the `mbot_ap_password` in `mbot_config.txt`.
3. Connect to the robot at **`{{ site.data.mbot.hotspot_ip }}`** or **`<robot-name>.local`**.
{: .steps}

> While on the hotspot, your laptop has no internet. In VS Code or NoMachine, add the hotspot address as a **new** connection, separate from the Wi-Fi one.
{: .tip}
