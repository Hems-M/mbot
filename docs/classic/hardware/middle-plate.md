---
title: Middle plate
summary: "Build the battery holder, mount the Raspberry Pi 5 and attach the camera."
redirect_from:
  - /docs/hardware/classic/assembly/mbot-classic-middle-plate/
---

When you finish, your middle plate looks like this:

{% include gallery.html dir="/assets/images/hardware/classic/assembly/middlePlate/" files="0-middle-finish.jpg" captions="Finished middle plate" size="one" %}

## 1. Build the battery holder

| Part | Qty |
|---|---|
| Middle acrylic plate | 1 |
| Battery slot pieces (U shaped) | 4 |
| Zip ties | 4 |
{: .parts}

Zip tie the U shaped pieces to the plate to make a slot for the battery.

{% include gallery.html dir="/assets/images/hardware/classic/assembly/middlePlate/" files="1-battery-slot1.jpg,1-battery-slot2.jpg" captions="Zip tie the pieces|Finished battery slot" size="md" %}

## 2. Mount the standoffs and the Raspberry Pi 5

| Part | Qty | Note |
|---|---|---|
| Raspberry Pi 5 | 1 | |
| M2.5 x 8 mm nylon standoffs | 4 | Grey, the shortest |
| M2.5 x 6 mm screws | 8 | For the nylon standoffs |
| M2.5 x 30 mm standoffs | 4 | Second shortest |
| M2.5 x 6 mm screws | 8 | For the 30 mm standoffs |
| 2.5" aluminum standoffs | 4 | The longest |
| M2.5 x 8 mm screws | 4 | For the 2.5" standoffs |

The picture shows where each standoff goes:

{% include gallery.html dir="/assets/images/hardware/classic/assembly/middlePlate/" files="1-middle-detail.png" captions="Green: nylon standoffs hold the Pi 5 on its holder. Blue: 30 mm standoffs join the holder to the plate. Red: 2.5 inch aluminum standoffs (the longest)." size="one" %}

1. **Green boxes:** fix the Pi 5 to its holder with the grey nylon standoffs.
2. **Blue boxes:** join the Pi holder to the middle plate with the 30 mm standoffs.
3. **Red boxes:** screw in the long 2.5" aluminum standoffs.
{: .steps}

Check your work against these views. The camera is not on yet. You add it in the next step.

{% include gallery.html dir="/assets/images/hardware/classic/assembly/middlePlate/" files="1-middle-back.png,1-middle-front.png,1-middle-left.png,1-middle-right.png,1-middle-top.png,1-middle-bottom.png" captions="Back|Front|Left|Right|Top|Bottom" %}

## 3. Attach the camera

| Part | Qty |
|---|---|
| Camera mount (3D printed) | 1 |
| Camera | 1 |
| Camera cable, 15 to 22 pin (one narrow end, one wide end) | 1 |
| Clear spacer for the camera | 1 |
| M2 x 6 mm screws | 4 |
| M2.5 x 8 mm screws | 2 |
| M2.5 threaded inserts | 2 |
{: .parts}

> The **camera mount** and the **OLED mount** are both white and look alike. They are different parts. Use the camera mount here.
{: .warn}

1. Heat the two threaded inserts with a soldering iron and press them into the camera mount.
2. Screw the mount **under** the middle plate, with the screw slot facing up.
3. Put the clear spacer between the camera and the mount. It protects the parts on the back of the camera.
{: .steps}

{% include gallery.html dir="/assets/images/hardware/classic/assembly/middlePlate/" files="2-camera-mount1.png,2-camera-mount2.png" alt="Camera mount under the middle plate" size="md" %}

### Plug in the camera cable

The **wide end** goes into the camera. The **narrow end** goes into the Pi. You can use either camera port on the Pi.

1. Gently pull up the plastic clip on the port.
2. Slide in the cable. Check that the metal contacts face the right way (see the photos).
3. Push the clip back down to lock the cable.
4. Screw the camera to the mount with the four M2 x 6 mm screws.
{: .steps}

{% include gallery.html dir="/assets/images/hardware/classic/assembly/middlePlate/" files="2-camera-cable1.png,2-camera-cable2.png,2-camera-cable3.png" captions="Lift the clip|Insert the cable|Close the clip" size="md" %}

> **Only have M2 x 8 mm screws?** They work, but the top two can push against the middle plate. Do not overtighten them.
{: .tip}

Cable photos: [Arducam guide](https://docs.arducam.com/Nvidia-Jetson-Camera/Jetvariety-Camera/Quick-Start-Guide/).

> **Done:** the middle plate is ready. Next, build the top plate.
{: .tip}
