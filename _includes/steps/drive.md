Every MBot runs a small web app. You open it in your laptop's browser and drive with the keyboard. This is the quickest way to check that motors, encoders and firmware all work.

> **Put the robot on the floor** on a flat surface. Never drive it on a table.
{: .danger}

1. **Turn the robot on** and wait for it to start.
2. **Find the IP address** on the robot's screen. See [Find your robot's IP]({{ site.baseurl }}/docs/guides/find-ip/) for other ways.
3. **Open the web app.** Your laptop must be on the same network as the robot. Type the IP address into your browser's address bar, for example `http://10.1.2.3`.
4. **Turn on Drive Mode** in the side panel.
5. **Drive with the keyboard** using the keys below.
{: .steps}

| Key | Moves the robot |
|---|---|
| <kbd>W</kbd> / <kbd>S</kbd> | Forward / backward |
| <kbd>Q</kbd> / <kbd>E</kbd> | Turn left / turn right |
{%- if include.robot != "classic" %}
| <kbd>A</kbd> / <kbd>D</kbd> | Slide left / right (Omni only) |
{%- endif %}

{% include gallery.html dir="/assets/images/tutorials/" files="drive-web-app.png" captions="Drive Mode in the web app side panel" size="one" %}

**It worked if** the robot drives where you tell it and goes roughly straight. It will not be perfectly straight, but it should be close.

> **Not driving, or driving crooked?** See [My robot is not driving]({{ site.baseurl }}/docs/help/#not-driving) and [My robot drives crooked]({{ site.baseurl }}/docs/help/#crooked).
{: .warn}
