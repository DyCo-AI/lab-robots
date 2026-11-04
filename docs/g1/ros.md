---
layout: default
title: "G1: ROS 2 first connection"
description: "Prepare Ubuntu, connect the G1 LAN, and distinguish robot discovery from onboard Jetson SSH."
---

<span class="badge">Ubuntu 22.04 · ROS 2 Humble · Ethernet</span>
# G1: first connection

The development PC runs ROS 2 Humble, CycloneDDS, and the lab Rerun bridge.
SSH to the onboard Jetson is a separate path for approved onboard diagnostics.

<div class="diagram" role="img" aria-label="Ubuntu host with ROS 2 Humble and Rerun connects over Ethernet to the G1 robot LAN; separate SSH accesses its auxiliary Jetson.">
  <div class="node">Ubuntu host<small>ROS 2 Humble / Rerun</small></div><span class="arrow" aria-hidden="true">↔</span>
  <div class="node">Ethernet / DDS<small>Robot LAN</small></div><span class="arrow" aria-hidden="true">↔</span>
  <div class="node">G1 state + sensors<small>Separate Jetson SSH</small></div>
</div>

## Follow the maintained runbooks

1. Complete the [host installation guide](https://github.com/DyCo-AI/g1-ros2/blob/main/docs/install/README.md), including the pinned dependencies and ROS message builds.
2. With a trained operator, follow [hardware preparation](https://github.com/DyCo-AI/g1-ros2/blob/main/docs/hardware/README.md) and the supported gantry/development-mode procedure.
3. Follow [network setup](https://github.com/DyCo-AI/g1-ros2/blob/main/docs/network/README.md). Identify the real PC interface rather than copying an interface name blindly.
4. Source ROS, the Unitree message workspace, and lab packages. Set CycloneDDS to the robot-facing interface.
5. Complete [whole-robot read-only bring-up](https://github.com/DyCo-AI/g1-ros2/blob/main/docs/bringup/README.md) and then [sensor checks]({{ '/g1/sensors/' | relative_url }}).

## Know which address you are using

| Item | Current lab value | Purpose |
| --- | --- | --- |
| Development host | `192.168.123.222/24` | Unique host Ethernet address |
| G1 primary robot endpoint | `192.168.123.161` | Robot LAN reachability check |
| Auxiliary PC 2 / Jetson | `192.168.123.164` | Optional `unitree` SSH login |
| Example host interface | `enp0s31f6` | Replace if your PC uses another interface |

The `.161` and `.164` endpoints have different roles. Confirm the route and
ping before launching diagnostics. Do not assign either robot address to the
PC, and avoid duplicate `.222` hosts on one robot LAN.

The host uses **Humble**. The onboard login runbook describes a **Foxy / Noetic**
selection on the Jetson; those are separate environments. Foxy is ROS 2,
Noetic is ROS 1. Check the actual shell and do not source both together.

## A useful first-session result

Record a passing route/ping check, fresh `/lf/lowstate`, live sensor observations,
host interface, code commit, and hardware/clamp configuration. Do not interpret
successful discovery or a running viewer as permission to enable motion.

For any later actuator test, read the [teleoperation runbook](https://github.com/DyCo-AI/g1-ros2/blob/main/docs/teleop/README.md)
and its hardware gates with the instructor. This handbook does not enable motion.
