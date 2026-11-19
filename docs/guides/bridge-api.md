---
title: MBot Bridge API
summary: "Simple functions to drive the robot and read its sensors, in Python or C++."
redirect_from:
  - /docs/tutorials/bridge/
---

The API talks to the **MBot Bridge server** on the robot. On the full MBot images the server starts by itself (service `mbot-bridge.service`). Start it before you run your code if it is not running.

## Python

### Make a robot object

```python
from mbot_bridge.api import MBot

robot = MBot()          # make the robot object once
robot.drive(0.5, 0, 0)  # then call functions on it
```

> Call functions on **your object** (`robot.drive(...)`), not on the class (`MBot.drive(...)` does not work).
{: .tip}

### Send commands

| Function | What it does |
|---|---|
| `robot.drive(vx, vy, wz)` | Drive at a speed. `vx`, `vy` in meters per second, `wz` (turning) in radians per second. `vy` (sideways) only works on the Omni. |
| `robot.stop()` | Stop. Same as `drive(0, 0, 0)`. |
| `robot.reset_odometry()` | Set the odometry position back to zero. |
| `robot.drive_path(path)` | Follow a path. `path` is a list of `[x, y]` or `[x, y, theta]` points (meters, radians). Returns right away while the robot keeps moving. |

> **The robot keeps driving** after `drive()` until you call `stop()` or send a new speed.
{: .warn}

### Read data

| Function | Returns |
|---|---|
| `robot.read_lidar()` | `(ranges, thetas)`: distance of each lidar ray (meters) and its angle (radians). Empty lists if there is no scan. |
| `robot.read_odometry()` | `[x, y, theta]` from the wheel encoders, measured from where the robot started or was last reset. Empty list if no data. |
| `robot.read_slam_pose()` | `[x, y, theta]` from SLAM. Needs [mapping]({{ site.baseurl }}/docs/guides/mapping/) running and the robot localized. Empty list if no data. |
| `robot.read_hostname()` | The robot's name, as text. |

### Example

```python
import time
from mbot_bridge.api import MBot

robot = MBot()
robot.reset_odometry()

robot.drive(0.2, 0, 0)   # forward at 0.2 m/s
time.sleep(2)
robot.stop()

x, y, theta = robot.read_odometry()
print(f"Moved to x={x:.2f} m, y={y:.2f} m")

ranges, thetas = robot.read_lidar()
hits = [r for r in ranges if r > 0]   # rays that did not return have range 0
if hits:
    print(f"Closest object: {min(hits):.2f} m")
```

## C++

### Make a robot object

```cpp
#include <mbot_bridge/robot.h>

int main(int argc, const char *argv[])
{
    mbot_bridge::MBot robot;   // make the robot object once
    robot.drive(0.5, 0, 0);    // then call functions on it
}
```

### Send commands

| Function | What it does |
|---|---|
| `void drive(float vx, float vy, float wz)` | Drive at a speed (m/s and rad/s). `vy` only works on the Omni. |
| `void stop()` | Stop. Same as `drive(0, 0, 0)`. |
| `void resetOdometry()` | Set the odometry position back to zero. |
| `void drivePath(const std::vector<std::array<float, 3>>& path)` | Follow a path of `[x, y, theta]` points. Returns right away. |

### Read data

| Function | Returns |
|---|---|
| `void readLidarScan(std::vector<float>& ranges, std::vector<float>& thetas)` | Fills `ranges` and `thetas`. Both empty if there is no scan. |
| `std::vector<float> readOdometry()` | `[x, y, theta]` from the encoders. Empty if no data. |
| `std::vector<float> readSlamPose()` | `[x, y, theta]` from SLAM. Empty if no data. |

## Good to know

- **Lidar rays with range 0 did not come back** (nothing in range, or the light bounced away). Skip them.
- **Odometry drifts** over long drives. Use SLAM pose when you need an accurate position.
- **Websocket errors?** The bridge server is not running. Check `mbot service status mbot-bridge.service`.
