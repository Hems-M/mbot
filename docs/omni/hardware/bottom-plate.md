---
title: Bottom plate
summary: "Build the wheels, mount the motors and attach the control board."
---

When you finish, your bottom plate looks like this:

{% include gallery.html dir="/assets/images/hardware/omni/bottomPlate/" files="bottom-finish.jpg" captions="Finished bottom plate" size="one" %}

## 1. Prepare the control board and wheels

| Part | Qty |
|---|---|
| MBot Control Board | 1 |
| Raspberry Pi Pico | 1 |
| Omni wheel sets | 3 |
{: .parts}

1. Press the Pico onto the control board.
{: .steps}

{% include gallery.html dir="/assets/images/hardware/omni/bottomPlate/" files="1-assemble-parts-1.png,1-assemble-parts-2.png" alt="Pico on the control board" size="md" %}

Lay out the parts for one wheel. The wheels in this guide are **96 mm** across.

{% include gallery.html dir="/assets/images/hardware/omni/bottomPlate/" files="1-assemble-parts-3.png" captions="Parts for one omni wheel" size="md" %}

Build each wheel:

1. Push four long screws through the holes in one wheel. It does not matter which way the wheel faces.
2. Stack a spacer on the screws, then the second wheel.
3. Put the coupler on top and tighten everything.
4. With a hex key, start two short screws in the side of the coupler. Later they hold the wheel on the motor shaft.
{: .steps}

{% include gallery.html dir="/assets/images/hardware/omni/bottomPlate/" files="1-assemble-parts-4.png,1-assemble-parts-5.png,1-assemble-parts-6.png,1-assemble-parts-7.png" alt="Building an omni wheel" %}

## 2. Attach the motor mounts

| Part | Qty |
|---|---|
| Motor mounts (3D printed) | 3 |
| M2.5 threaded inserts | as needed |
| M2.5 x 8 mm screws | 12 |
{: .parts}

1. Look at the bottom of each motor mount. If the holes have no metal threaded inserts, add them: heat an insert with a soldering iron, push it in until it sits flat, and let it cool.
2. Screw the mounts to the bottom plate. **The slot on each mount faces inward.**
{: .steps}

{% include gallery.html dir="/assets/images/hardware/omni/bottomPlate/" files="2-put-motor-mounts-1.png,2-put-motor-mounts-2.png,2-put-motor-mounts-3.png" captions="Threaded inserts|Mounts on the plate|Slots face inward" %}

## 3. Attach the control board

| Part | Qty |
|---|---|
| M2.5 x 8 mm nylon standoffs | 4 |
| M2.5 x 6 mm screws | 4 |
| Jumper cap | 1 |
{: .parts}

1. Screw the four standoffs into the holes on the control board.
2. **Put on the jumper cap.** Find the three pins next to each other. The robot uses 12 V, so put the cap over the pins marked **VM and 12V**.
3. Screw the control board to the bottom plate.
{: .steps}

{% include gallery.html dir="/assets/images/hardware/omni/bottomPlate/" files="3-put-control-board-1.png" captions="Standoffs on the board" size="md" %}

{% include gallery.html dir="/assets/images/hardware/classic/assembly/bottomPlate/" files="6-jumper-cap1.jpg,6-jumper-cap2.jpg,6-jumper-cap3.jpg" captions="Jumper cap|The three pins|Cap on VM and 12V" %}

{% include gallery.html dir="/assets/images/hardware/omni/bottomPlate/" files="3-put-control-board-2.png,3-put-control-board-3.png" alt="Control board on the bottom plate" size="md" %}

## 4. Attach the motors

| Part | Qty |
|---|---|
| Motors with 48 resolution encoders | 3 |
| M2.5 x 5 mm screws | 6 |
{: .parts}

1. Line up the unthreaded holes on the motor with the holes in the mount.
2. Fix it with two M2.5 x 5 mm screws.
3. Repeat for all three motors.
{: .steps}

{% include gallery.html dir="/assets/images/hardware/omni/bottomPlate/" files="4-put-motor.png" captions="Motor in its mount" size="md" %}

## 5. Attach the wheels

1. Slide each wheel onto a motor shaft.
2. **Leave a small gap** between the coupler and the screw heads on the motor mount.
3. Tighten the two screws on the coupler.
{: .steps}

{% include gallery.html dir="/assets/images/hardware/omni/bottomPlate/" files="5-put-wheels-1.png,5-put-wheels-2.png,5-put-wheels-3.png" captions="Leave a small gap|Tighten the coupler|All three wheels" %}

## 6. Plug in the motors

Pass the motor wires through the cut out in the plate. Plug each one into the control board:

| Wheel | Slot |
|---|---|
| Right wheel | **M0** |
| Back wheel | **M1** |
| Left wheel | **M2** |

> **The white wire goes on the pin marked GND** for every motor.
{: .warn}

{% include gallery.html dir="/assets/images/hardware/omni/bottomPlate/" files="6-connect-motors.png" captions="Motor cables in M0, M1, M2" size="one" %}

## 7. Add the standoffs

| Part | Qty |
|---|---|
| 4-40 x 1.5" aluminum standoffs | 4 |
| 4-40 x 3/8" screws | 4 |
{: .parts}

Screw the four standoffs to the top of the bottom plate. The two at the back are not in line with each other. That is on purpose.

{% include gallery.html dir="/assets/images/hardware/omni/bottomPlate/" files="bottom-finish1.jpg,bottom-finish2.jpg" captions="Top view|Underneath" size="md" %}

> **Done:** the bottom plate is ready. Next, build the middle plate.
{: .tip}
