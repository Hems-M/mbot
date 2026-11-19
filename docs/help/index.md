---
title: Common problems
eyebrow: Help
summary: "Find your problem in the table, then follow the fix. Most problems are a cable, the battery, or a missed step."
redirect_from:
  - /docs/troubleshooting/
---

## Find your problem

| What you see | Go to |
|---|---|
| Wheels do not turn at all | [My robot is not driving](#not-driving) |
| Robot drives in a curve or wobbles | [My robot drives crooked](#crooked) |
| "No accessible RP2040 devices in BOOTSEL mode were found" | [I can't flash the control board](#cant-flash) |
| Driving or odometry works, then stops, then works again | [The control board keeps disconnecting](#disconnecting) |
| Robot is not on Wi-Fi, or shows no IP | [Network problems]({{ site.baseurl }}/docs/help/network/) |
| Map is not made, or localization switches off | [Mapping is not working](#mapping) |
| Pi does not start, red light flashing | [The Pi will not start]({{ site.baseurl }}/docs/help/hardware/#pi-will-not-start) |

More detail: [Hardware problems]({{ site.baseurl }}/docs/help/hardware/) · [Software problems]({{ site.baseurl }}/docs/help/software/) · [Network problems]({{ site.baseurl }}/docs/help/network/)

<a id="not-driving"></a>
## My robot is not driving

The wheels do not turn at all when you [drive with the web app]({{ site.baseurl }}/docs/guides/drive/).

1. **Did you flash the firmware?** The robot only drives after calibrate and flash ([Classic]({{ site.baseurl }}/docs/classic/software/calibrate/), [Omni]({{ site.baseurl }}/docs/omni/software/calibrate/)). The flash command must finish **with no errors**. Errors? See [I can't flash the control board](#cant-flash).
2. **Are the cables in?** You need both:
   - a USB cable from the Raspberry Pi (USB-A) to the Pico on the control board (USB-C)
   - the "Y" power cable from the battery to the control board barrel jack
3. **Is the battery on and charged?**
{: .steps}

> **Still not driving?** Check that `/dev/mbot_tty` exists (`ls /dev/mbot_tty`), and check `mbot-lcm-serial.service` for errors (see [Check a service]({{ site.baseurl }}/docs/help/software/#check-a-service)). You may need a new USB cable or a new Pico. See [Check the control board]({{ site.baseurl }}/docs/help/hardware/#control-board).
{: .tip}

<a id="crooked"></a>
## My robot drives crooked

The robot will not drive perfectly straight, but it should be close. If it curves a lot or one wheel is much faster or slower, see [Hardware problems]({{ site.baseurl }}/docs/help/hardware/). The most common causes are a loose motor, a wheel rubbing on a screw, or a bad encoder.

<a id="cant-flash"></a>
## I can't flash the control board

You see this error when you run `mbot-upload-firmware`:

```text
No accessible RP2040 devices in BOOTSEL mode were found.
```
{: .no-copy}

The firmware **did not** flash. Check:

1. **Is the Pico in flashing mode?** Hold RST and BOOTSEL, let go of RST, then BOOTSEL. The buttons are small, so press firmly and in the right order. Do it **before every flash**.
2. **Is the USB cable in?** It must go from the Pico to a Raspberry Pi USB port. The control board must have power too.
3. **Hold BOOTSEL longer.** After you let go of RST, keep holding BOOTSEL for 5 to 10 seconds.
{: .steps}

> **Still failing?** Try another USB cable. If nothing works, the Pico may need to be replaced.
{: .tip}

<a id="disconnecting"></a>
## The control board keeps disconnecting

This is for problems that **come and go**: sometimes you can drive, sometimes not. If it never works, see [My robot is not driving](#not-driving).

**Signs:**
- Odometry stops now and then.
- The robot sometimes stops responding to drive commands.
- The robot keeps driving at the last speed and you cannot stop it.

**Most likely cause: a low or old battery.** Swap in a fully charged battery. If the battery is several years old, replace it.

> This happens more on robots with a **Raspberry Pi 5**, which uses more power, especially while the motors drive and the lidar spins.
{: .tip}

**To confirm it:** watch the control board channels (IMU, encoders, odometry). If they stop updating while the problem happens, the board is dropping out.

- Terminal (any robot): `mbot lcm-spy`. Check that the count keeps going up.
- Browser: `http://<robot-ip>/spy`, if the LCM monitor is installed ([install it](https://github.com/mbot-project/mbot_lcm_monitor/?tab=readme-ov-file#installing-from-the-latest-release-recommended)).

<a id="mapping"></a>
## Mapping is not working

Localization switches on and then straight off again, or no map is made. Check in this order:

1. **Is the lidar plugged in and spinning?** Mapping needs the lidar.
2. **Can you drive the robot?** If not, odometry is probably not working either, and mapping needs it. Fix driving first.
3. **Restart the robot.** This fixes a program that got stuck.
4. **Check the services and logs.** See [Software problems]({{ site.baseurl }}/docs/help/software/#check-a-service). This also shows how to save a log for course staff.
5. **Check the data.** Run `mbot lcm-spy`. Do you see lidar and odometry channels coming in?
{: .steps}

## Still stuck?

Email [{{ site.help_email }}](mailto:{{ site.help_email }}) with your robot name, what you tried, and a log file ([how to save one]({{ site.baseurl }}/docs/help/software/#save-a-log)). You can also [report a problem on GitHub]({{ site.issues_url }}).
