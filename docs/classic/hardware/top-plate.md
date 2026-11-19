---
title: Top plate
summary: "Mount the lidar and the OLED screen, and make the screen cable."
redirect_from:
  - /docs/hardware/classic/assembly/mbot-classic-top-plate/
---

When you finish, your top plate looks like this:

{% include gallery.html dir="/assets/images/hardware/classic/assembly/topPlate/" files="0-top-finish.jpg" captions="Finished top plate" size="one" %}

## 1. Mount the lidar

### Attach the lidar USB board

| Part | Qty |
|---|---|
| RPLidar kit | 1 |
| M2 x 8 mm screws | 2 |
| M2 nuts | 2 |
{: .parts}

1. Pass the lidar cable through one of the square holes in the plate.
2. Plug the cable into the small USB board.
3. Screw the USB board to the **underside** of the plate with the M2 screws and nuts.
{: .steps}

{% include gallery.html dir="/assets/images/hardware/classic/assembly/topPlate/" files="1-lidar-usb1.jpg,1-lidar-usb2.jpg,1-lidar-usb3.jpg" alt="Lidar USB board under the top plate" %}

### Attach the lidar

| Part | Qty |
|---|---|
| M2.5 x 8 mm screws | 4 |
{: .parts}

Screw the lidar to the **top** of the plate.

{% include gallery.html dir="/assets/images/hardware/classic/assembly/topPlate/" files="1-attach-lidar1.jpg,1-attach-lidar2.jpg" alt="Lidar on top of the plate" %}

### Plug in the USB cable

| Part | Qty |
|---|---|
| 9" micro USB cable | 1 |
| Zip tie | 1 |
{: .parts}

Plug the micro USB cable into the lidar USB board. Hold it in place with a zip tie and cut off the extra.

{% include gallery.html dir="/assets/images/hardware/classic/assembly/topPlate/" files="1-plug-usb1.jpg,1-plug-usb2.jpg" alt="Lidar USB cable with zip tie" %}

## 2. Mount the OLED screen

| Part | Qty |
|---|---|
| OLED screen | 1 |
| OLED mount (3D printed) | 1 |
| M2 x 8 mm screws | 4 |
| M2.5 x 8 mm screws | 2 |
| M2.5 threaded inserts | 2 |
{: .parts}

> Use the **OLED mount**, not the camera mount. They look alike.
{: .warn}

1. Heat the two threaded inserts with a soldering iron and press them into the OLED mount.
2. Screw the screen to the mount with four M2 x 8 mm screws.
3. Screw the mount to the **right side** of the robot with two M2.5 x 8 mm screws.
{: .steps}

{% include gallery.html dir="/assets/images/hardware/classic/assembly/topPlate/" files="2-oled-mount1.jpg,2-oled-mount2.jpg,2-oled1.jpg,2-oled2.jpg" captions="Inserts|Inserts in place|Screen on mount|Mount on robot" %}

## 3. Make the screen cable

| Part | Qty |
|---|---|
| Jumper wires: black, red, yellow, blue | 4 |
| Crimp connector housings (one 4 pin, one 6 pin) | 2 |
{: .parts}

This cable connects the OLED screen to the Raspberry Pi. One end (4 pin) plugs into the screen. The other end (6 pin) plugs into the Pi.

**Color and order matter.** Make yours look exactly like the drawing. In the 6 pin connector, **pins 7 and 11 stay empty**.

{% include gallery.html dir="/assets/images/hardware/classic/assembly/topPlate/" files="3-jumper-wires1.jpg,oled-cable.svg" captions="Finished cable|Wire order" size="md" %}

> **Do not plug it in yet.** You connect it in the wiring step.
{: .tip}
