---
layout: default
title: "Go2 EDU overview"
description: "Connect to the Go2 EDU over Ethernet and begin onboard ROS 2 development."
---

<p class="eyebrow">Quadruped / Ethernet and ROS 2</p>
# Widget: Unitree Go2 EDU

**Widget** is the lab's **GO2-EDU-U7** quadruped. The lab unit was supplied
with a **D1 arm**; its integration and safe operating procedure are not yet
qualified in this handbook.

The supported handbook path connects a host to Widget over Ethernet, accesses
the onboard Jetson, verifies ROS 2 state, and records bags before any bounded
motion test.

<div class="cards">
  <a class="card" href="{{ '/go2/ros/' | relative_url }}"><strong>Startup, Ethernet + ROS 2</strong><span>Start Widget, connect to the Jetson, inspect ROS state, run a bounded velocity example, record data, and shut down.</span></a>
</div>

## Which level of control?

The bounded example requests high-level motion from the Go2's existing
locomotion controller. It does not implement a joint/torque controller or
deploy a learned walking policy. Low-level control requires a separate,
qualified workflow.

| Item | Current path |
| --- | --- |
| Host | Computer with Ethernet and an SSH client |
| Where ROS 2 code runs | Onboard Jetson |
| Connection target | Jetson `192.168.123.18` in the current lab notes |
| Access | Private lab SSH credential |
| Main repository | [go2-ros](https://github.com/DyCo-AI/go2-ros) |

Confirm the assigned robot and endpoint against the current lab network record.
Do not publish credentials in this handbook or a code repository.

## Main research tools

The current Go2 stack has two maintained entry points: the ROS 2 baseline for
robot-side development and the WebRTC gesture-navigation project. Start with
`go2-ros` when the work requires Jetson access, ROS topics, motion commands, or
data recording.

| Repository | Role in the Go2 stack |
| --- | --- |
| [go2-ros](https://github.com/DyCo-AI/go2-ros) | Ethernet and SSH setup, onboard Jetson software inspection, ROS 2 state access, bounded velocity tests, and ROS bag recording. |
| [go2-gesture-nav](https://github.com/sriram-2502/go2-gesture-nav) | WebRTC-based gesture tracking and navigation on Go2, developed for the CI: Mission Control course. |

## Hardware and operating notes

- Treat **about two hours** as a lab planning estimate for battery runtime, not
  a guaranteed specification. Payload, motion, compute load, and battery health
  change the result.
- Go2 has been robust in lab use, but protect its integrated LiDAR and the
  undocumented D1 arm from impacts.
- A fall can load an attached Ethernet cable and damage the robot port. A Wi-Fi
  adapter removes the tether but remains exposed to impact. Keep adapters and
  cables out of the fall envelope.
- Use a compatible external power supply only for stationary development. Do not
  run locomotion while connected to a power tether.

## Reference documentation

- [Unitree developer documentation](https://support.unitree.com/home/en/developer)
- [Go2 controller guide](https://www.docs.quadruped.de/projects/go2/html/controller.html)
- [Unitree SDK2](https://github.com/unitreerobotics/unitree_sdk2)
- [DyCo-AI Go2 ROS workspace](https://github.com/DyCo-AI/go2-ros)

> **Replacement planning (reported August 2026):** Clemson's current purchase
> order process does not permit direct Unitree replacement purchases. Verify
> current policy and available spares with the lab manager before planning work.

## Build on the baseline

After the read-only checks pass, follow the bounded motion and recording steps
in [`go2-ros`](https://github.com/DyCo-AI/go2-ros). Keep additional controller
work in its owning repository and link its validated runbook from this page.
