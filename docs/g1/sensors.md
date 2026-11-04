---
layout: default
title: "G1: sensors and diagnostics"
description: "Inspect the G1 camera, LiDAR, IMUs, body, and tactile hands; understand recording status."
---

# G1: sensors and diagnostics

The read-only Rerun bridge brings together the live model, front camera, Mid360
point cloud, IMUs, and Dex3 state. Follow the [bring-up runbook](https://github.com/DyCo-AI/g1-ros2/blob/main/docs/bringup/README.md)
after host/network preparation.

![G1 combined Rerun view with live model and sensor diagnostics](https://raw.githubusercontent.com/DyCo-AI/g1-ros2/main/docs/assets/g1_rerun_overview.png)
<p class="caption">Combined diagnostics screenshot from the lab's g1-ros2 repository.</p>

## What to check

| Stream | Look for | Detailed guide |
| --- | --- | --- |
| Body joints and primary IMU | Fresh `/lf/lowstate` and updating model pose | [Rerun](https://github.com/DyCo-AI/g1-ros2/blob/main/docs/rerun/README.md) |
| Mid360 point cloud and IMU | Updating points and timestamps, correct frame | [LiDAR](https://github.com/DyCo-AI/g1-ros2/blob/main/docs/lidar/README.md) |
| Front RGB | Changing Unitree H264 multicast frames | [Camera](https://github.com/DyCo-AI/g1-ros2/blob/main/docs/camera/README.md) |
| Body, secondary, and LiDAR IMUs | Fresh plots and plausible orientation | [IMUs](https://github.com/DyCo-AI/g1-ros2/blob/main/docs/imus/README.md) |
| Left/right Dex3 | Fresh joint state and tactile response | [Dex3](https://github.com/DyCo-AI/g1-ros2/blob/main/docs/dex3/README.md) |
| RealSense depth | Separate investigation; disabled in default bring-up | [Camera status](https://github.com/DyCo-AI/g1-ros2/blob/main/docs/camera/README.md) |

Check each source independently. A visible model does not establish that the
camera, tactile data, or point cloud is fresh. Keep the hands untouched during
initial tactile baseline acquisition, as described in the source runbook.

## Recording and replay status

Manual ROS topic recording is documented in the [workspace README](https://github.com/DyCo-AI/g1-ros2#saving-data).
The unified MCAP/Rerun recording and offline replay acceptance workflow is still
planned. It is not yet a one-command, validated capture/replay feature.

Keep raw bags and `.rrd` files outside Git. Record hardware/firmware, code commit,
selected streams, timestamps, frame assumptions, and calibration details with
each run. Review the [pilot acceptance roadmap](https://github.com/DyCo-AI/g1-ros2/blob/main/docs/pilots/README.md)
before treating development captures as accepted datasets.
