---
title: Build a new image (advanced)
summary: "Start from the MBot base image and install the MBot code yourself. For staff and advanced users."
redirect_from:
  - /docs/setup/new-image/
---

> **Students: you do not need this.** Your course gives you a ready image. Start with the software steps for your robot.
{: .warn}

{% assign v = site.data.mbot.versions %}

The base image is Raspberry Pi OS 12 (Bookworm) with the MBot system tools from [mbot_sys_utils](https://github.com/mbot-project/mbot_sys_utils/blob/main/README.md). It has no MBot code. Login: `{{ site.data.mbot.user }}` / `{{ site.data.mbot.password }}`.

## 1. Flash and configure

1. Download the [MBot base image]({{ site.data.mbot.images.base }}) and flash it with Balena Etcher, the same as in [Flash the SD card]({{ site.baseurl }}/docs/omni/software/flash-sd-card/).
2. Edit `mbot_config.txt` on the `bootfs` drive: set `mbot_hostname`, and home Wi-Fi or IP registry details if you use them. See [Edit the config file]({{ site.baseurl }}/docs/classic/software/configure/).
3. Put the card in the Pi, turn it on and wait a few minutes. The first start is slow.
4. Get the IP from the screen or the registry, and [connect with VS Code]({{ site.baseurl }}/docs/guides/vscode/).
{: .steps}

> **Setting up a class fleet?** Use a naming pattern like `mbot-fleetname-XX`, and fill in `XX` for each robot.
{: .tip}

## 2. Install the MBot code

Run these in a VS Code terminal on the robot.

### Get the code

```bash
mkdir ~/mbot_ws && cd ~/mbot_ws
git clone https://github.com/mbot-project/mbot_lcm_base.git
git clone https://github.com/mbot-project/rplidar_lcm_driver.git
git clone https://github.com/mbot-project/mbot_bridge.git
```

### What to install

| Part | What it gives you | Needed? |
|---|---|---|
| MBot LCM base | Message types, and the serial server that talks to the control board | **Yes** |
| MBot Bridge | Bridge server plus the Python and C++ API | **Yes** |
| Web app | Drive and map from the browser | **Yes** |
| RPLidar driver | Lidar data | **Yes** |
| LCM monitor | Live channels in the browser at `/spy` | Optional |
| MBot autonomy | SLAM and the motion controller (compiled programs) | Optional |

### MBot LCM base

```bash
cd ~/mbot_ws/mbot_lcm_base/
git checkout {{ v.lcm_base }}
./scripts/install.sh
```

### MBot Bridge

```bash
cd ~/mbot_ws/mbot_bridge/
git checkout {{ v.mbot_bridge }}
./scripts/install.sh
```

### Web app

```bash
cd ~/mbot_ws/
wget https://github.com/mbot-project/mbot_web_app/releases/download/{{ v.web_app }}/mbot_web_app-{{ v.web_app }}.tar.gz
tar -xvzf mbot_web_app-{{ v.web_app }}.tar.gz
cd mbot_web_app-{{ v.web_app }}/
./install_nginx.sh
./install_python_deps.sh
./deploy_app.sh --no-rebuild
```

**Check:** type the robot's IP in your browser. The web app opens. You can then delete the downloaded folder and `.tar.gz` file.

### RPLidar driver

```bash
cd ~/mbot_ws/rplidar_lcm_driver/
./scripts/install.sh
```

### Optional: LCM monitor

{% assign lm = v.lcm_monitor | remove_first: 'v' %}
```bash
cd ~/mbot_ws/
wget https://github.com/mbot-project/mbot_lcm_monitor/releases/download/{{ v.lcm_monitor }}/mbot_lcm_monitor-{{ lm }}.tar.gz
tar -xvzf mbot_lcm_monitor-{{ lm }}.tar.gz
cd mbot_lcm_monitor-{{ lm }}/
./deploy_app.sh --no-rebuild
```

Then follow the printed steps (also in `README.txt` in that folder) to set up NGINX.

### Optional: MBot autonomy

{% assign ma = v.mbot_autonomy | remove_first: 'v' %}
```bash
cd ~/mbot_ws/
wget https://github.com/mbot-project/mbot_autonomy_bins/archive/refs/tags/{{ v.mbot_autonomy }}.tar.gz
tar -xvzf {{ v.mbot_autonomy }}.tar.gz
cd mbot_autonomy_bins-{{ ma }}
./install.sh -t DIFF    # MBot Classic. Use OMNI for the MBot Omni.
```

## 3. Change the password

Everyone knows the default password. Pick a new one for your fleet:

```bash
passwd
```

Type the current password, then the new one twice. You should see `passwd: password updated successfully`.

## 4. Test it

[Calibrate and flash]({{ site.baseurl }}/docs/classic/software/calibrate/), then [drive with the web app]({{ site.baseurl }}/docs/guides/drive/).
