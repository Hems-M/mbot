---
title: Network problems
eyebrow: Help
summary: "The robot is not on Wi-Fi, you cannot find its IP, or your laptop cannot connect."
redirect_from:
  - /docs/troubleshooting/networking/
---

## Which problem?

| What you see | Try this |
|---|---|
| No IP on the robot's screen | The robot is not on Wi-Fi. Join its hotspot `<robot-name>-AP` and set up Wi-Fi: [Classic]({{ site.baseurl }}/docs/classic/software/wifi/), [Omni]({{ site.baseurl }}/docs/omni/software/wifi/). |
| I do not know the IP | [Find your robot's IP]({{ site.baseurl }}/docs/guides/find-ip/) |
| No Wi-Fi I can use | [Use the robot's hotspot]({{ site.baseurl }}/docs/guides/wifi/#the-robots-hotspot) |
| The hotspot does not appear | Wait a few minutes. Check with your phone. Restart the robot. |
| SSH or VS Code cannot connect | Laptop and robot must be on the **same** network. MWireless and MGuest are different networks. |
| It worked yesterday, not today | The IP may have changed. Check the screen again. |
| MWireless stopped working after a password change | Run the Wi-Fi setup again with the new password. |

## MWireless on the Classic

```bash
sudo mwireless-setup --status     # is it set up and connected?
sudo mwireless-setup --diagnose   # what went wrong
```

- **Wrong password:** the tool tries once only, so your account is not locked. It turns the hotspot back on. Join it, SSH to `{{ site.data.mbot.hotspot_ip }}`, and run `sudo mwireless-setup` again.
- **Need help:** send the `--diagnose` output to course staff.

## Check the network services

Two services set up the network at start. Both run once and then finish, so `active (exited)`, or `inactive` with `status=0/SUCCESS`, is normal.

```bash
mbot service log mbot-start-network.service   # joins Wi-Fi or starts the hotspot
mbot service log mbot-publish-info.service    # shows the IP and posts it to the registry
```

They also write logs to `/var/log/mbot/`. See [Check a service]({{ site.baseurl }}/docs/help/software/#check-a-service).

## Still stuck?

If you can still reach the robot over the hotspot, save a log ([how]({{ site.baseurl }}/docs/help/software/#save-a-log)) and email [{{ site.help_email }}](mailto:{{ site.help_email }}).
