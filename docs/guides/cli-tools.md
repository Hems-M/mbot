---
title: Command line tools
summary: "The mbot command checks background services and shows live robot data, all from a terminal. Works with no desktop."
redirect_from:
  - /docs/tutorials/mbot-cli-tool/
---

Type `mbot` in a terminal on the robot to see the tools. Press <kbd>Tab</kbd> after `mbot ` to list them.

```console
$ mbot
Usage: mbot {service|lcm-spy|lcm-msg} [args]
```
{: .no-copy}

| Tool | What it does | Use it when |
|---|---|---|
| [`mbot service`](#mbot-service) | Lists, starts, stops and shows logs for MBot services. | Something on the robot is not responding. |
| [`mbot lcm-spy`](#mbot-lcm-spy) | Prints live data channels (odometry, lidar, IMU). | You want to know if data is coming in. |
| [`mbot lcm-msg`](#mbot-lcm-msg) | Shows the layout of each message type. | You need to know what fields a message has. |

The tools come with `mbot_lcm_base`. If `mbot` is not found, open a new terminal and try again.

<div class="video"><iframe src="https://www.youtube-nocookie.com/embed/B150ZqKUrf4" title="MBot command line tools" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

## mbot service

```bash
mbot service {list|status|log|start|stop|restart|enable|disable} [service-name]
```

| Command | What it does |
|---|---|
| `mbot service list` | List all MBot services. |
| `mbot service status` | Status of all MBot services. |
| `mbot service status mbot-slam.service` | Status of one service. |
| `mbot service log mbot-start-network.service` | Show the log of one service. |
| `mbot service start <name>` | Start a service now. |
| `mbot service stop <name>` | Stop a service now. |
| `mbot service restart <name>` | Stop and start it again. |
| `mbot service enable <name>` | Start it automatically at boot (does not start it now). |
| `mbot service disable <name>` | Do not start it at boot (does not stop it now). |

**Example:** you are writing your own motion controller and want the built in one out of the way:

```bash
mbot service stop mbot-motion-controller.service
mbot service disable mbot-motion-controller.service
```

What each service does: [Background services]({{ site.baseurl }}/docs/guides/software-features/#background-services).

<div class="video"><iframe src="https://www.youtube-nocookie.com/embed/KTV3hlaVQY4" title="mbot service demo" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

## mbot lcm-spy

```bash
mbot lcm-spy [--channels CHANNELS] [--rate RATE] [--module MODULE]
```

| Option | Meaning |
|---|---|
| `--channels` | Comma separated channel names to print in full. |
| `--rate` | How often to print, in Hz. Default 1. |
| `--module` | Message module used to decode. Default `mbot_lcm_msgs`. |

| Question | Command |
|---|---|
| Is anything being sent? | `mbot lcm-spy` |
| What is the odometry right now? | `mbot lcm-spy --channels MBOT_ODOMETRY` |
| Are odometry and velocity both updating? | `mbot lcm-spy --channels MBOT_ODOMETRY,MBOT_VEL` |

Press <kbd>Ctrl</kbd>+<kbd>C</kbd> to quit.

<div class="video"><iframe src="https://www.youtube-nocookie.com/embed/9egBSuIqhUo" title="mbot lcm-spy demo" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

## mbot lcm-msg

```bash
mbot lcm-msg [--module MODULE] {show,list}
```

| Question | Command |
|---|---|
| Which message types exist? | `mbot lcm-msg list` |
| What is in `pose2D_t`? | `mbot lcm-msg show pose2D_t` |
| Show two at once | `mbot lcm-msg show pose3D_t,pose2D_t` |
| Did my new message type install? | `mbot lcm-msg list` |

<div class="video"><iframe src="https://www.youtube-nocookie.com/embed/zSHahiZNv_A" title="mbot lcm-msg demo" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
