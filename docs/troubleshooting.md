---
layout: default
title: "Troubleshooting"
description: "Find the right network, ROS, and sensor runbook for common onboarding problems."
---

# Start with the connection

| Problem | First check | Next guide |
| --- | --- | --- |
| Go1 ping fails | Direct Ethernet, assigned host CIDR and robot IP, correct interface, and robot power | [Go1 first connection]({{ '/go1/connection/' | relative_url }}) |
| Go1 SSH fails after ping passes | Use the assigned onboard endpoint rather than assuming the robot/controller address; verify the private credential | [Go1 first connection]({{ '/go1/connection/' | relative_url }}) |
| Go2 SSH fails | Ethernet link, host static address, Jetson `.18` endpoint, and port 22 | [Go2 ROS setup](https://github.com/DyCo-AI/go2-ros/blob/main/docs/SETUP.md) |
| Go2 ROS imports fail | ROS 2 environment and built Unitree messages; Noetic alone is insufficient | [Software inventory](https://github.com/DyCo-AI/go2-ros/blob/main/docs/SOFTWARE.md) |
| G1 ping fails | Supported development state, host interface, unique IP, and route | [G1 network](https://github.com/DyCo-AI/g1-ros2/blob/main/docs/network/README.md) |
| G1 ping works but topics are absent | CycloneDDS interface/URI, RMW, sourced message and lab workspaces | [G1 bring-up](https://github.com/DyCo-AI/g1-ros2/blob/main/docs/bringup/README.md) |
| Camera or LiDAR is missing | Inspect its individual stream; connectivity alone does not qualify sensing | [G1 sensor guides]({{ '/g1/sensors/' | relative_url }}) |

Avoid disabling security controls as a general workaround. Identify the relevant
interface, route, and specific protocol first.

When asking for help, include robot identity, connection path, host OS, code
commit, the exact failing step, and redacted output. Do not include credentials
or unreviewed screenshots of configuration pages.
