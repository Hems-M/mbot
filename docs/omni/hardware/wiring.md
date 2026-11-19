---
title: Final wiring
summary: "Make the screen cable, stack the three plates and plug in every cable. After this step the robot is ready for software."
---

## 1. Make the screen cable

| Part | Qty |
|---|---|
| Jumper wires: black, red, yellow, blue | 4 |
| Crimp connector housings (one 4 pin, one 6 pin) | 2 |
{: .parts}

This cable connects the OLED screen to the Raspberry Pi. One end (4 pin) plugs into the screen. The other end (6 pin) plugs into the Pi.

**Color and order matter.** Make yours look exactly like the drawing. In the 6 pin connector, **pins 7 and 11 stay empty**.

{% include gallery.html dir="/assets/images/hardware/classic/assembly/topPlate/" files="3-jumper-wires1.jpg,oled-cable.svg" captions="Finished cable|Wire order" size="md" %}

## 2. Stack the plates

| Part | Qty |
|---|---|
| Top, middle and bottom plates | 1 each |
| 4-40 thumb screws | 8 |
| USB-C cables | 2 |
| Battery with power cable | 1 |
| Screen cable | 1 |
{: .parts}

{% include gallery.html dir="/assets/images/hardware/omni/wiring/" files="2-components.jpg" captions="Everything you need for this step" size="md" %}

1. Plug the **6 pin** end of the screen cable into the Pi pins. The **red wire goes on pin 1** (the number inside the circle on the drawing, not the number on the side). Pins 7 and 11 stay empty.
2. Put the middle plate on the bottom plate. Fix it with thumb screws into the standoffs.
3. Plug the **4 pin** end into the OLED screen. Match the labels: **black wire on GND**. Slide the battery into its slot.
4. Put the top plate on the middle plate. Fix it with thumb screws.
{: .steps}

{% include gallery.html files="https://pinout-ai.s3.eu-west-2.amazonaws.com/raspberry-pi-5-gpio-pinout-diagram.webp" captions="Raspberry Pi pin numbers (the Pi 4 uses the same layout)" size="one" %}

{% include gallery.html dir="/assets/images/hardware/omni/wiring/" files="2-plug-jumper-wire.jpg,2-middle-to-bottom.jpg,2-jumper-to-oled.jpg,2-top-to-middle.jpg" captions="6 pin end on the Pi|Middle on bottom|4 pin end on the screen|Top on middle" size="md" %}

## 3. Plug in the cables

| Cable | From | To | Why |
|---|---|---|---|
| Lidar micro USB | Lidar USB board | Pi USB port | Sends lidar data to the Pi |
| USB-C cable 1 | Pi USB port (USB-A) | Pico on the control board (USB-C) | Lets the Pi talk to the control board |
| USB-C cable 2 | Battery (USB-A) | Pi 4 power port (USB-C) | Powers the Raspberry Pi |
| Power cable | Battery barrel plug | Control board barrel jack | Powers the control board and motors |

{% include gallery.html dir="/assets/images/hardware/omni/wiring/" files="3-lidar-to-pi.jpg,3-pico-to-pi.jpg,3-pi-to-battery.jpg,3-pico-to-battery1.jpg,3-pico-to-battery2.jpg" captions="Lidar to Pi|Pi to Pico|Battery to Pi|Battery to control board|Barrel plug in" size="md" %}

> **Your MBot Omni is built.** Next, set up the software.
{: .tip}
