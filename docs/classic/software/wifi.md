---
title: Join Wi-Fi
summary: "Connect the robot to MWireless with one command. You only do this once."
needs: [Your uniqname and UM password, SSH terminal on the robot (step 3)]
---

## Which Wi-Fi?

| Where you are | What to do |
|---|---|
| **UM campus (MWireless)** | Follow the steps on this page. |
| **Home, or a phone hotspot** | Put the Wi-Fi name and password in `mbot_config.txt` ([step 2]({{ site.baseurl }}/docs/classic/software/configure/)) and restart the robot. Skip this page. |
| **No Wi-Fi at all** | Stay on the robot's hotspot. Use `{{ site.data.mbot.hotspot_ip }}` as the robot's address. You will not have internet on the robot. |

## Join MWireless

1. In the SSH terminal on the robot (from step 3), run:
   ```bash
   sudo mwireless-setup
   ```
   If it asks for a password first, that is the robot password: `{{ site.data.mbot.password }}`
2. Type your **uniqname** when asked. Only the uniqname, not the full email.
3. Type your **UM password** when asked. Nothing shows while you type.
4. The robot turns off its hotspot and joins MWireless. **Your SSH window stops responding.** This is expected: the hotspot you were on is gone. Close the window.
5. Join your laptop back to **MWireless**.
6. Look at the robot's screen. After a short wait it shows the robot's **new IP address**. Write it down.
{: .steps}

**It worked if** the screen shows an IP address and you can connect with it:

```bash
ssh {{ site.data.mbot.user }}@<new-robot-ip>
```

The robot saves your login, so it joins MWireless by itself every time it starts. Run `sudo mwireless-setup` again only if you change your UM password.

## Check the connection

| Command | What it tells you |
|---|---|
| `sudo mwireless-setup --status` | Whether the robot is set up for MWireless and connected. |
| `sudo mwireless-setup --diagnose` | Details on what went wrong. Send this output to course staff if you need help. |

## If it did not work

> **Wrong password?** The tool tries **only once**, so a typo does not lock your UM account. Then it turns the hotspot back on. Join `<robot-name>-AP` again, connect with `ssh {{ site.data.mbot.user }}@{{ site.data.mbot.hotspot_ip }}`, and run `sudo mwireless-setup` again.
{: .warn}

- **No IP on the screen after a few minutes:** restart the robot. If the hotspot comes back, connect to it and run `sudo mwireless-setup --diagnose`.
- **The robot is on MWireless but SSH does not connect:** check your laptop is on **MWireless** too (not MGuest, not the hotspot).
- More fixes: [Network problems]({{ site.baseurl }}/docs/help/network/).
