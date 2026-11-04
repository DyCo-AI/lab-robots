---
layout: default
title: "Go2 EDU"
description: "Choose Ethernet and onboard ROS 2, or Windows Wi-Fi and Basic WebRTC."
---

<p class="eyebrow">Quadruped / Two development paths</p>
# Widget: Unitree Go2 EDU

**Widget** is the lab's Go2 EDU quadruped.

The Go2 starters make high-level robot experiments accessible from a Windows
laptop. Choose Ethernet/Jetson/ROS for robot-side development and bags, or
Wi-Fi/WebRTC for a local Windows UI and high-level Python applications.

<div class="cards">
  <a class="card" href="{{ '/go2/ros/' | relative_url }}"><strong>Ethernet + ROS 2</strong><span>SSH into the Jetson. Inspect ROS state, run a bounded velocity example, and learn recording.</span></a>
  <a class="card" href="{{ '/go2/webrtc/' | relative_url }}"><strong>Wi-Fi + WebRTC</strong><span>Use the Basic Unitree UI on Windows 11. View camera/voxels and develop Python planning applications.</span></a>
</div>

## Which level of control?

Both starters request high-level motion from the Go2's existing locomotion
controller. They do not implement a joint/torque controller or deploy a learned
walking policy. Navigation, sensor inspection, and planning are natural next
steps; RL deployment and low-level MPC require a separate qualified workflow.

| Item | Ethernet / ROS 2 | Wi-Fi / WebRTC |
| --- | --- | --- |
| Host | Windows SSH client | Windows 11 browser / Python |
| Where user code runs | Onboard Jetson | Laptop |
| Connection target | Jetson `192.168.123.18` in current lab notes | Robot AP `192.168.12.1` |
| Credential | SSH access | Robot Wi-Fi and AES key |
| Main repository | [go2-ros](https://github.com/DyCo-AI/go2-ros) | [go2-webRTC](https://github.com/DyCo-AI/go2-webRTC) |

Addresses describe different interfaces. Do not use the WebRTC AP address as an
assumed Jetson SSH endpoint. Confirm the assigned unit before connecting.

## Build on the baseline

The lab starters stay small. The Clemson gesture-navigation project builds on
the Windows/WebRTC route, and the simulation playground introduces Python,
MediaPipe, and navigation before hardware. See [Courses and projects]({{ '/learning/' | relative_url }}).
