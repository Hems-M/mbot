1. **Put the SD card in your laptop** (if you took it out after flashing).

   > If a message says the drive has a problem or asks to "fix" or "scan" it, **ignore it**. Close the message.
   {: .warn}

2. **Open the drive called `bootfs`** in File Explorer (Windows) or Finder (Mac).

   {% include gallery.html dir="/assets/images/setup/" files="sd_device.png" captions="The SD card shows up as bootfs" size="md" %}

3. **Open `mbot_config.txt`** with any text editor (Notepad, TextEdit, VS Code).

   {% include gallery.html dir="/assets/images/setup/" files="mbot_config.png,mbot_config_contents.png" captions="mbot_config.txt on the card|What the file looks like" size="md" %}

4. **Change the settings** in the table below, then **save** the file.
5. **Eject the SD card** before you pull it out. Pulling it out without ejecting can break the card.
6. **Put the SD card in the Raspberry Pi.** The slot is on the bottom, on the side opposite the USB ports.
{: .steps}

## The settings

The file has one setting per line, written as `name=value`, for example:

```ini
mbot_hostname=mbot-0000
mbot_ap_password={{ site.data.mbot.hotspot_password }}
new_wifi_ssid=HomeWifiSSID
new_wifi_password=HomeWifiPassword
```

| Setting | What to put | Needed? |
|---|---|---|
| `mbot_hostname` | Your robot's name. Course staff give you this. Make it match the label on your robot. Use letters, numbers and dashes. | **Yes** |
| `mbot_ap_password` | Password for the robot's hotspot. Default: `{{ site.data.mbot.hotspot_password }}` | Leave as is unless told to change it |
| `new_wifi_ssid` | Name of a normal Wi-Fi network, for example your home Wi-Fi | Only for home or phone hotspot Wi-Fi |
| `new_wifi_password` | Password for that Wi-Fi network | Only with `new_wifi_ssid` |
| `mbot_ip_list_url` | Web address of your course IP registry on GitHub, ending in `.git` | Only if your course uses one |
| `mbot_ip_list_user` | GitHub user the robot uses to post its IP | Only with the registry |
| `mbot_ip_list_token` | GitHub token for that user (used instead of a password) | Only with the registry |

> **MWireless is not set here.** University Wi-Fi needs your own login, so you set it up in the "Join Wi-Fi" step. If you are on campus, leave the Wi-Fi lines as they are.
{: .tip}

> **Students:** course staff may give you the values for your class. Use theirs.
{: .tip}
