The Pico must be in **flashing mode** (called BOOTSEL mode) before every flash.

1. Find the two small buttons on the control board: **RST** (reset) and **BOOTSEL** (boot select).
2. Press and hold **both** buttons.
3. Let go of **RST** first.
4. Then let go of **BOOTSEL**.
{: .steps}

{% include gallery.html dir="/assets/images/setup/" files="bootsel-location.png" captions="Where to find RST and BOOTSEL" size="one" %}

The Pico stays in flashing mode until you flash it or reset it, so you can run the flash command right after.
