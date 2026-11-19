---
title: Software problems
eyebrow: Help
summary: "Find out which program on the robot is not working, read its log, and save a log file for course staff."
redirect_from:
  - /docs/troubleshooting/software/
---

## How the robot's software runs

When the robot starts, it runs its programs in the background as **services**. If something does not respond, the matching service has usually stopped or shows an error.

{% include services-table.html %}

<a id="check-a-service"></a>
## Check a service

**Quick way**, with the MBot tool:

```bash
mbot service status                          # all MBot services
mbot service status mbot-lcm-serial.service  # one service
mbot service log mbot-lcm-serial.service     # its log
```

**Standard Linux way**, works on any robot:

```bash
sudo systemctl status mbot-lcm-serial.service
sudo journalctl -b -u mbot-lcm-serial.service
```

| You see | It means |
|---|---|
| `active (running)` | The service is running. Good. |
| `inactive (dead)` or `failed` | The service stopped. Read the log for the reason. |
| `active (exited)`, or `inactive` with `status=0/SUCCESS` | Normal for **network** services. They run once at start, then finish. |

The `-b` flag shows only messages since the last start.

> **Network services** (`mbot-start-network`, `mbot-publish-info`) also write extra logs in `/var/log/mbot/`. Look there for Wi-Fi and IP problems.
{: .tip}

<a id="save-a-log"></a>
## Save a log for course staff

When you ask for help, send the full system log. In a terminal on the robot:

```bash
sudo journalctl -b > ~/out.txt
```

Then download `out.txt` to your laptop: in VS Code, right click the file in the file list and choose **Download**. Send it with a short description of the problem.

## Watch the live data

The robot programs send data on named **channels** (for example `MBOT_ODOMETRY`). If a channel is missing, the program that sends it is the one with the problem.

| Way | How | Works on |
|---|---|---|
| Terminal | `mbot lcm-spy` ([guide]({{ site.baseurl }}/docs/guides/cli-tools/#mbot-lcm-spy)) | Every robot. Best for the Classic server setup. |
| Browser | `http://<robot-ip>/spy` | Robots with the LCM monitor installed ([install it](https://github.com/mbot-project/mbot_lcm_monitor/?tab=readme-ov-file#installing-from-the-latest-release-recommended)) |
| Desktop window | `lcm-spy` in a terminal inside NoMachine | Omni desktop setup only |

{% include gallery.html dir="/assets/images/debug/" files="lcm-spy.png,lcm-spy-details.png" captions="Desktop lcm-spy: list of channels|Double click a channel to see its data" size="md" %}

> **Desktop lcm-spy shows no message types?** Your `CLASSPATH` is probably not set. See the [mbot_lcm_base](https://github.com/mbot-project/mbot_lcm_base) README.
{: .tip}
