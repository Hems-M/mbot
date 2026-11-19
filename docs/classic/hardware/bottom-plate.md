---
title: Bottom plate
summary: "Mount the caster, motors and wheels, then add the control board."
redirect_from:
  - /docs/hardware/classic/assembly/mbot-classic-bottom-plate/
---

When you finish, your bottom plate looks like this:

{% include gallery.html dir="/assets/images/hardware/classic/assembly/bottomPlate/" files="8-finish2.jpg" captions="Finished bottom plate" size="one" %}

## 1. Mount the caster

The caster is the small metal ball that holds up the back of the robot.

| Part | Qty |
|---|---|
| Metal ball | 1 |
| Bottom acrylic plate | 1 |
| 1/8" spacer | 1 |
| 1/16" spacer | 1 |
| M2 hex nuts | 2 |
| M2 x 12 mm screws | 2 |
| Caster housing | 1 |
{: .parts}

1. Stack **both** spacers on top of each other. Together they match the height of the wheels.
2. Put the ball in the caster housing and place it on the spacers.
3. Fix it to the plate with the two M2 x 12 mm screws and nuts.
{: .steps}

> **Use the M2 x 12 mm screws.** Do not use the screws that come with the caster. They are too short.
{: .warn}

{% include gallery.html dir="/assets/images/hardware/classic/assembly/bottomPlate/" files="1-caster1.jpg,1-caster2.jpg,1-caster3.jpg" alt="Mounting the caster" %}

## 2. Mount the motor brackets

| Part | Qty |
|---|---|
| Motor mount (3D printed) | 2 |
| M2.5 threaded inserts | 8 |
| M2.5 x 8 mm screws | 8 |
{: .parts}

1. Look at the two holes on the bottom of each motor mount. If they have no metal threaded inserts, add them:
   - Heat an insert with a soldering iron until it is warm enough to melt into the plastic.
   - Push it in until it sits flat with the surface. Let it cool before you go on.
2. Screw the mounts to the bottom plate. **The slot on each mount faces inward.**
{: .steps}

{% include gallery.html dir="/assets/images/hardware/classic/assembly/bottomPlate/" files="2-bracket1.jpg,2-bracket2.jpg,2-bracket3.jpg" alt="Mounting the motor brackets" %}

## 3. Mount the motors

| Part | Qty |
|---|---|
| Motors (encoder already attached) | 2 |
| M2.5 x 5 mm screws | 4 |
{: .parts}

1. Line up the unthreaded holes on the motor with the holes in the mount.
2. Turn the motor so the **wires face the back** of the robot.
3. Screw it in with two M2.5 x 5 mm screws. Repeat for the other motor.
{: .steps}

> This guide is for motors with **48 resolution** encoders. Your robot may have a different encoder. See [Which encoder do I have?]({{ site.baseurl }}/docs/classic/software/calibrate/#which-encoder)
{: .warn}

{% include gallery.html dir="/assets/images/hardware/classic/assembly/bottomPlate/" files="3-motor-mount.jpg" captions="Motor in the mount, wires to the back" size="md" %}

## 4. Add the short standoffs

| Part | Qty |
|---|---|
| 4-40 x 1.5" aluminum standoffs | 4 |
| 4-40 x 3/8" screws | 4 |
{: .parts}

Screw the four standoffs to the plate as shown.

{% include gallery.html dir="/assets/images/hardware/classic/assembly/bottomPlate/" files="4-bottom-standoff1.jpg,4-bottom-standoff2.jpg" alt="Adding the standoffs" %}

## 5. Attach the wheels

| Part | Qty |
|---|---|
| Scooter wheels, 84 x 24 mm | 2 |
| Wheel adapters | 2 |
| M3 x 20 mm screws | 6 |
| Set screws | 2 |
| Hex key (2 mm) | 1 |
{: .parts}

> **Use M3 x 20 mm screws.** The M3 x 14 mm screws that come with the wheel adapter are too short.
{: .warn}

{% include gallery.html dir="/assets/images/hardware/classic/assembly/bottomPlate/" files="5-assemblewheel1.jpg" captions="Wheel parts" size="md" %}

1. Press the machined wheel adapter into one side of the wheel. Part of it should stick out.
2. Press the flat metal piece into the other side. Line up the three holes.
3. Put in the three M3 x 20 mm screws to hold it together.
4. With the 2 mm hex key, screw a set screw into the wheel adapter.
5. Slide the wheel onto the motor shaft and tighten the set screw.
{: .steps}

{% include gallery.html dir="/assets/images/hardware/classic/assembly/bottomPlate/" files="5-assemblewheel2.jpg" captions="Putting the wheel together" size="one" %}

> **Leave a small gap** between the wheel and the screw heads on the motor mount. If the wheel touches the screws it rubs, adds friction, and can jam the motor.
{: .warn}

{% include gallery.html dir="/assets/images/hardware/classic/assembly/bottomPlate/" files="5-attach-wheel1.jpg,5-attach-wheel2.jpg" alt="Wheel on the motor with a small gap" %}

## 6. Prepare the control board

| Part | Qty |
|---|---|
| MBot Control Board | 1 |
| MBot Pico+ | 1 |
| M2.5 x 8 mm nylon standoffs | 4 |
| M2.5 x 6 mm screws | 4 |
| Jumper cap | 1 |
{: .parts}

1. **Put on the jumper cap.** Find the three pins next to each other (second photo). The robot uses 12 V, so put the cap over the pins marked **VM and 12V**.
2. Press the Pico onto the board.
3. Screw the four nylon standoffs onto the board.
{: .steps}

{% include gallery.html dir="/assets/images/hardware/classic/assembly/bottomPlate/" files="6-jumper-cap1.jpg,6-jumper-cap2.jpg,6-jumper-cap3.jpg" captions="Jumper cap|The three pins|Cap on VM and 12V" %}

{% include gallery.html dir="/assets/images/hardware/classic/assembly/bottomPlate/" files="6-pico-standoff1.jpg,6-pico-standoff2.jpg,6-pico-standoff3.jpg" captions="Pico on the board|Standoffs|Standoffs on" %}

## 7. Plug in the motors

1. **Left** wheel motor goes to slot **M0**.
2. **Right** wheel motor goes to slot **M1**.
3. The **white wire** goes on the pin marked **GND**.
{: .steps}

{% include gallery.html dir="/assets/images/hardware/classic/assembly/bottomPlate/" files="7-motor-wire.jpg" captions="Left motor in M0, right motor in M1, white wire on GND" size="md" %}

## 8. Attach the control board

| Part | Qty |
|---|---|
| M2.5 x 6 mm screws | 4 |
{: .parts}

Screw the control board onto the bottom plate.

{% include gallery.html dir="/assets/images/hardware/classic/assembly/bottomPlate/" files="8-finish1.jpg" captions="Control board on the bottom plate" size="md" %}

> **Done:** the bottom plate is ready. Next, build the middle plate.
{: .tip}
