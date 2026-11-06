---
layout: default
title: "Go2 EDU"
description: "Connect to the Go2 EDU over Ethernet and begin onboard ROS 2 development."
---

<p class="eyebrow">Quadruped / Ethernet and ROS 2</p>
# Widget: Unitree Go2 EDU

**Widget** is the lab's Go2 EDU quadruped.

The supported handbook path connects a host to Widget over Ethernet, accesses
the onboard Jetson, verifies ROS 2 state, and records bags before any bounded
motion test.

<div class="cards">
  <a class="card" href="{{ '/go2/ros/' | relative_url }}"><strong>Ethernet + ROS 2</strong><span>SSH into the Jetson. Inspect ROS state, run a bounded velocity example, and learn recording.</span></a>
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

Confirm the assigned robot and current endpoint with the maintainer before
connecting. Do not publish credentials in this handbook or a code repository.

## Build on the baseline

After the read-only checks pass, follow the bounded motion and recording steps
in [`go2-ros`](https://github.com/DyCo-AI/go2-ros). Keep additional controller
work in its owning repository and link its validated runbook from this page.
