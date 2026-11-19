## 1. Install the Remote Development extension

1. Install [VS Code](https://code.visualstudio.com/) on your laptop if you do not have it.
2. In VS Code, click the **Extensions** icon on the left bar.
3. Search for **Remote Development** and click **Install**.
{: .steps}

{% include gallery.html dir="/assets/images/programming/" files="install-remote-ext.jpg" captions="Install the Remote Development extension" size="one" %}

## 2. Add the robot

1. Click **Remote Explorer** on the left bar.
2. Next to **SSH**, click the **+** button.
3. Type this, with your robot's IP address, and press Enter:
   ```bash
   ssh {{ site.data.mbot.user }}@<robot-ip>
   ```
4. Choose the first (default) config file when asked.
{: .steps}

{% include gallery.html dir="/assets/images/programming/" files="remote-add-target.png,remote-ssh-command.png,remote-ssh-config.png" captions="Click + next to SSH|Type the ssh command|Pick the default config file" size="md" %}

## 3. Connect

1. In **Remote Explorer**, find your robot. Press the refresh button if it is not there.
2. Click the arrow icon next to it to connect in a new window.
3. If asked for the platform, choose **Linux**.
4. Type the password: `{{ site.data.mbot.password }}`
5. The first time takes a few minutes while VS Code sets itself up on the robot.
{: .steps}

{% include gallery.html dir="/assets/images/programming/" files="remote-connect-host.png,remote-platform-linux.png" captions="Connect to the robot|Choose Linux" size="md" %}

**It worked if** the robot's address shows in the bottom left corner of VS Code.

{% include gallery.html dir="/assets/images/programming/" files="remote-connected.png" captions="Connected" size="md" %}

## 4. Open a terminal

Click **Terminal > New Terminal**. This terminal runs **on the robot**. You type all robot commands here.

{% include gallery.html dir="/assets/images/programming/" files="remote-connect-vsc.png" captions="A terminal on the robot inside VS Code" size="one" %}

## Video

<div class="video"><iframe src="https://www.youtube-nocookie.com/embed/65J26m_rSxE" title="Connecting to the MBot with VS Code" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

> **Your IP changed?** When the robot's address changes (for example hotspot vs MWireless), add it again as a new host with the new address.
{: .tip}
