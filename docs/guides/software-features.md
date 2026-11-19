---
title: What is on the robot
summary: "Every tool on the MBot, in one place: what it does, when to use it, and which setup has it."
---

**How to read the tables:** the grey text under each tool name is the command or place you use it. The **Setup** column shows which robot setup has the tool.

<p><span class="badge badge-classic">Classic</span> MBot Classic server setup (no desktop) &nbsp; <span class="badge badge-omni">Omni</span> MBot Omni desktop setup</p>

## The two setups side by side

{% include compare-table.html %}

## All tools

{% include features-table.html %}

## Background services

These programs start by themselves when the robot turns on. If something stops working, check its service. See [Check a service]({{ site.baseurl }}/docs/help/software/#check-a-service) for how.

{% include services-table.html %}

## Which tool do I use?

| I want to... | Use |
|---|---|
| Type commands on the robot | SSH, or the terminal in VS Code |
| Write and run code | VS Code Remote-SSH |
| Get the robot on campus Wi-Fi | `sudo mwireless-setup` (Classic), SecureW2 JoinNow in NoMachine (Omni) |
| Change the robot name or home Wi-Fi | `mbot_config.txt` on the SD card |
| Check the robot quickly works | The MBot web app |
| See if sensor data is coming in | `mbot lcm-spy`, or `http://<robot-ip>/spy` |
| See if a background program is running | `mbot service status` |
| Load firmware | `sudo mbot-upload-firmware flash <file>.uf2` |
| Get help from course staff | Save `sudo journalctl -b` to a file and send it |
