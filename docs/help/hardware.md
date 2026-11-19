---
title: Hardware problems
eyebrow: Help
summary: "Fixes for wheels, motors, encoders, the control board and the Raspberry Pi."
redirect_from:
  - /docs/troubleshooting/hardware/
---

## Which problem?

| What you see | Most likely cause | Go to |
|---|---|---|
| One wheel too **slow**, robot curves | Loose motor, wheel rubbing, or bad motor | [Check the wheels and motors](#wheels-and-motors), then the [motor test](#motor-test) |
| One wheel too **fast**, robot curves | Encoder not counting | [Check the encoders](#encoders) |
| No wheel turns | Control board or cables | [Check the control board](#control-board) |
| Pi does not start, red light flashes | Boot problem on the SD card | [The Pi will not start](#pi-will-not-start) |

> After you fix anything here, **calibrate again** ([Classic]({{ site.baseurl }}/docs/classic/software/calibrate/), [Omni]({{ site.baseurl }}/docs/omni/software/calibrate/)).
{: .tip}

### Why a fast wheel means a bad encoder

During calibration, the robot spins each wheel and reads its encoder. If the encoder does not count, calibration thinks the wheel is not moving and turns that motor up very high. The result is one wheel that is much too fast:

<div class="video"><iframe src="https://www.youtube-nocookie.com/embed/4Az8Z5rkhyI" title="MBot Omni with a bad encoder: the back wheel spins too fast" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

A good calibration spins the robot on the spot, first one way and then the other ([video](https://youtu.be/Fl2M0zanTJc)). Anything else points to a hardware problem.

<a id="control-board"></a>
## Check the control board

1. **USB:** a cable from a Raspberry Pi USB port to the USB-C port on the Pico.
2. **Power:** the barrel cable from the battery to the control board.
3. **Try another USB cable**, then calibrate again.
{: .steps}

If the cable is good and you **cannot flash** the calibration file, **or** calibration does not spin the wheels, replace the control board. A new board needs calibrating and flashing.

<a id="wheels-and-motors"></a>
## Check the wheels and motors

> **Unplug the lidar USB cable** from the Raspberry Pi before you start.
{: .warn}

1. **Motor tight in its mount?** Motors can work loose. If one moves, take the wheel off and tighten the motor screws.
2. **Gap between wheel and screws?** The wheel hub must not touch the motor mount screws. If it does, loosen the hub, pull the wheel out a little, and tighten again.
3. **Motor cable wires in their housing?** A wire can slip out of the black connector. Push it back in. Check every motor.
4. **Omni wheel screws tight?** Check the four screws that hold each pair of omni wheels together (Omni only).
{: .steps}

{% include gallery.html dir="/assets/images/hardware/debug/" files="loosemotor.gif,motorscrews.jpg,wheelspacing.png,loosewireharness.png,wheelscrews.jpg" captions="Loose motor|Motor screws|Leave a gap|Wire slipped out of the housing|Omni wheel screws" size="md" %}

<a id="motor-test"></a>
## Run the motor test

This test spins each motor back and forth, one at a time.

1. Get the **motor test** file for your robot from the [firmware picker]({{ site.baseurl }}/docs/guides/firmware/).
2. Turn the robot **upside down**.
3. [Flash]({{ site.baseurl }}/docs/guides/firmware/) the motor test file.
4. Watch each wheel.
{: .steps}

{% include gallery.html dir="/assets/images/hardware/debug/" files="mbotmotortest.gif" captions="The motor test: each wheel spins in turn" size="one" %}

**A motor does not spin?** Check its cable. If the cable is fine, replace the motor and run the test again.

<a id="encoders"></a>
## Check the encoders

If all motors spin but the robot still drives badly, an encoder may be faulty.

### Look at the encoder

The encoder board on the back of a motor can bend, so the magnet rubs on the board. The board should be flat, with a small gap between the magnet and the board. Use pliers to gently pull the magnet away if needed.

{% include gallery.html dir="/assets/images/hardware/debug/" files="bentencoder.png" captions="A bent encoder: the magnet touches the board" size="md" %}

<a id="encoder-test"></a>
### Run the encoder test

1. Get `mbot_encoder_test.uf2` from the [firmware picker]({{ site.baseurl }}/docs/guides/firmware/).
2. Turn the robot **upside down** and [flash]({{ site.baseurl }}/docs/guides/firmware/) the file.
3. In a terminal on the robot (VS Code or SSH), run:
   ```bash
   minicom -D /dev/mbot_tty
   ```
4. You see six numbers. The **first three** are how much each encoder changed just now. The **last three** are the total count for each encoder.
5. Turn each wheel by hand, one at a time. Its total should go **up** one way and **down** the other way.
6. Quit minicom with <kbd>Ctrl</kbd>+<kbd>A</kbd>, then <kbd>X</kbd>.
{: .steps}

{% include gallery.html dir="/assets/images/hardware/debug/" files="minicomencoder.png,minicomencodervalues.png" captions="minicom running the encoder test|The six numbers" size="md" %}

**A number does not change?** That encoder is bad. Check its cable first. If that does not help, replace the motor and encoder. [Video of a working test](https://photos.app.goo.gl/475CXuh7fRVHMS9d8).

### Check the counts are right

This matters for encoders with the sensor on the board (resolution 20 or 40). It is very unlikely with the 48 resolution encoder.

1. Press **RST** on the Pico to set the counts to zero.
2. Turn each wheel **exactly one turn**. A piece of tape on the wheel helps you see one full turn.
3. Compare the totals. They should be about the same.
{: .steps}

If one is **lower**, its magnet may be too far from the sensor. Gently push the black magnet closer to the board, **without touching it**, and test again.

{% include gallery.html dir="/assets/images/setup/" files="encoder-48.jpg,encoder-40.jpg,encoder-20.jpg" captions="48: sensor sticks up|40: blue board|20: green board" %}

<a id="pi-will-not-start"></a>
## The Pi will not start (red light flashing)

The **STAT** light next to the SD slot flashes **4 long, then 5 short**. This means a firmware error. It can happen when the SD card had another system on it before. ([All light codes](https://www.raspberrypi.com/documentation/computers/configuration.html#led-warning-flash-codes))

You need a laptop and an SD card reader. This fix is for the **Raspberry Pi 5**.

1. Install **Raspberry Pi Imager** from [raspberrypi.com/software](https://www.raspberrypi.com/software/).
2. In Imager choose:
   - Device: **Raspberry Pi 5**
   - Operating system: **Misc utility images > Bootloader (Pi 5 family) > SD Card Boot**
   - Storage: **your SD card**
3. Write it, put the card in the Pi, and turn it on.
4. **It worked if** the green light keeps blinking (or a connected monitor turns fully green).
5. Turn the robot off and [flash the MBot image]({{ site.baseurl }}/docs/classic/software/flash-sd-card/) onto the card again.
{: .steps}

> Always check the SD card has the right MBot image before you start the robot.
{: .tip}
