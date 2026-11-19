---
title: Wiring
summary: "Stack the three plates and plug in every cable. After this step the robot is ready for software."
redirect_from:
  - /docs/hardware/classic/assembly/mbot-wiring/
---

When you finish, your robot looks like this:

{% include gallery.html dir="/assets/images/hardware/classic/assembly/wiring/" files="0-mbot.jpg" captions="Finished MBot Classic" size="one" %}

## 1. Stack the plates

| Part | Qty |
|---|---|
| Screen cable (from the top plate step) | 1 |
| 4-40 x 3/8" thumb screws | 8 |
{: .parts}

1. Put the middle plate on the bottom plate. Fix it with thumb screws into the standoffs.
2. Plug the **6 pin** end of the screen cable into the Raspberry Pi pins. The **red wire goes on pin 1**. Pin 1 is the number inside the circle on the pin drawing, not the number printed on the side. Pins 7 and 11 stay empty.
3. Plug the **4 pin** end into the OLED screen. Match the pin labels.
4. Put the top plate on the middle plate. Fix it with thumb screws.
{: .steps}

{% include gallery.html files="https://pinout-ai.s3.eu-west-2.amazonaws.com/raspberry-pi-5-gpio-pinout-diagram.webp" captions="Raspberry Pi 5 pin numbers (pinout-ai.com)" size="one" %}

{% include gallery.html dir="/assets/images/hardware/classic/assembly/" files="topPlate/oled-cable.svg,wiring/1-final-assemble3.png,wiring/1-final-assemble4.png" captions="Wire order|6 pin end on the Pi|4 pin end on the screen" size="md" %}

## 2. Plug in the cables

| Part | Qty |
|---|---|
| 12 V battery (power bank) | 1 |
| "Y" power cable with round barrel plugs | 1 |
| USB-C cables | 2 |
{: .parts}

| Cable | From | To | Why |
|---|---|---|---|
| "Y" power cable | Battery | Control board barrel jack | Powers the control board and motors |
| USB-C cable 1 | Battery (USB-A) | Pi 5 power port (USB-C, on the side) | Powers the Raspberry Pi |
| USB-C cable 2 | Pi USB port (USB-A) | Pico on the control board (USB-C) | Lets the Pi talk to the control board |
| Lidar micro USB | Lidar USB board | Pi USB port | Sends lidar data to the Pi |

{% include gallery.html files="https://cdn.shopify.com/s/files/1/0254/1191/1743/files/5047-5048_description-raspberry-pi-5-features.jpg?v=1695822743" captions="Raspberry Pi 5 ports. The USB-C power port is on the side." size="one" %}

Your wiring should look like this:

{% include gallery.html dir="/assets/images/hardware/classic/assembly/wiring/" files="2-final-wiring1.png" captions="All cables connected" size="one" %}

> **Your MBot Classic is built.** Next, set up the software.
{: .tip}
