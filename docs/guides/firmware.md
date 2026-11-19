---
title: Flash firmware
summary: "Load any firmware or test file onto the Pico on the control board. For first time setup, use the Calibrate and flash step for your robot instead."
redirect_from:
  - /docs/setup/firmware/
---

**Firmware** is the program that runs on the Pico, the small board on the MBot Control Board. Firmware files end in `.uf2`.

> **Setting up a new robot?** Follow Calibrate and flash for the [Classic]({{ site.baseurl }}/docs/classic/software/calibrate/) or the [Omni]({{ site.baseurl }}/docs/omni/software/calibrate/). It does calibration and firmware in the right order.
{: .tip}

## The firmware files

| File | What it does | When to use it |
|---|---|---|
| **Calibration** `mbot_calibrate_...uf2` | Spins the wheels to learn your motors. Saves the result on the Pico. | New robot, or after changing a motor, wheel or board. Always flash the firmware right after. |
| **Firmware** `mbot_classic_...uf2` / `mbot_omni_...uf2` | The everyday program. Drives the motors and reads the sensors. | After calibration, or when a new version comes out. |
| **Motor test** `mbot_..._motor_test.uf2` | Spins each motor back and forth, one at a time. | A wheel does not turn. See [Hardware problems]({{ site.baseurl }}/docs/help/hardware/#motor-test). |
| **Encoder test** `mbot_encoder_test.uf2` | Prints the encoder counts. | The robot drives crooked. See [Hardware problems]({{ site.baseurl }}/docs/help/hardware/#encoder-test). |

## 1. Get the file

{% include firmware-picker.html %}

Or download onto the robot from the terminal:

<pre class="code"><code data-fw-text="wget-main"># Choose your options in the firmware picker first</code></pre>
<pre class="code"><code data-fw-text="wget-tests">wget {{ site.data.mbot.firmware_releases }}/download/{{ site.data.mbot.firmware_version }}/mbot_encoder_test.uf2</code></pre>

All versions are on the [firmware releases page]({{ site.data.mbot.firmware_releases }}). If you built the firmware yourself, the file is in the `build` folder.

{% include encoder-help.html %}

## 2. Put the Pico in flashing mode

{% include steps/bootsel.md %}

## 3. Flash it

In a terminal on the robot, run (with your file name):

```bash
sudo mbot-upload-firmware flash <file-name>.uf2
```

The Pico restarts by itself and runs the new program.

> **Error: "No accessible RP2040 devices in BOOTSEL mode were found"**
>
> The Pico is not in flashing mode. Do the button steps again and run the command again. Still failing? See [I can't flash the control board]({{ site.baseurl }}/docs/help/#cant-flash).
{: .warn}

> **No `mbot-upload-firmware` command?** It comes with the MBot system tools. Install them from [mbot_sys_utils](https://github.com/mbot-project/mbot_sys_utils).
{: .tip}

## Flash from a laptop instead

You can also copy the file by hand, from a laptop plugged into the Pico with USB, or from the robot desktop in NoMachine (Omni only).

1. Put the Pico in **flashing mode** (see above).
2. The Pico shows up as a USB drive.
3. Drag the `.uf2` file onto that drive.
4. The Pico restarts by itself and runs the new program.
{: .steps}

{% include gallery.html dir="/assets/images/setup/" files="pop-up-plug-in.png" captions="The Pico shows up as a USB drive" size="one" %}
