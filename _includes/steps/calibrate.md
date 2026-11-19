Every robot is a little different. **Calibration** measures your motors and saves the numbers on the control board. Then you load the **firmware**, the program the board runs every day. You do both from the terminal on the robot.

## 1. Get the firmware files

Choose your encoder{% if include.robot == "omni" %} and wheel size{% endif %}. The picker finds the right files for you.

{% include firmware-picker.html robot=include.robot %}

Download both files **onto the robot**. In the VS Code terminal (connected to the robot), run:

<pre class="code"><code data-fw-text="wget-main"># Choose your options in the firmware picker first</code></pre>

{% include encoder-help.html robot=include.robot %}

## 2. Calibrate

> **Put the robot on the floor**, with free space around it. It drives around during calibration. Never calibrate on a table. Use the same kind of floor you will use in class if you can.
{: .danger}

### Put the board in flashing mode

{% include steps/bootsel.md %}

### Flash the calibration file

<pre class="code"><code data-fw-text="flash-calib">sudo mbot-upload-firmware flash mbot_calibrate_&lt;your-robot&gt;.uf2</code></pre>

The Pico restarts by itself and starts calibrating. The robot spins on the spot, first one way and then the other. **Do not touch it** until it stops.

<div class="video"><iframe src="https://www.youtube-nocookie.com/embed/Fl2M0zanTJc" title="MBot calibration (shown on an MBot Omni)" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

> **Error: "No accessible RP2040 devices in BOOTSEL mode were found"**
>
> The board was not in flashing mode. Do the button steps again, then run the command again. Still failing? See [I can't flash the control board]({{ site.baseurl }}/docs/help/#cant-flash).
{: .warn}

## 3. Flash the firmware

The calibration numbers are now saved on the Pico. Load the everyday firmware:

1. Put the board in **flashing mode** again (hold RST and BOOTSEL, let go of RST, then BOOTSEL).
2. Run:
{: .steps}

<pre class="code"><code data-fw-text="flash-main">sudo mbot-upload-firmware flash mbot_&lt;your-robot&gt;.uf2</code></pre>

**It worked if** the command finishes with no errors.

> **When to calibrate again:** after you change a motor, a wheel or the control board, or when a new firmware version comes out.
{: .tip}

> **Older firmware versions** are on the [firmware releases page]({{ site.data.mbot.firmware_releases }}).
{: .tip}
