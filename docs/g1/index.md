---
layout: default
title: "G1 humanoid"
description: "Discover the G1 lab configuration and the current ROS 2 diagnostics development path."
---

<p class="eyebrow">Humanoid / Observation before actuation</p>
# Evan Wobbier: Unitree G1

**Evan Wobbier** is the lab's G1 humanoid.

**[Open the g1-ros2 workspace](https://github.com/DyCo-AI/g1-ros2)**

The current G1 entry point is a ROS 2 diagnostics workflow: connect an Ubuntu
host, inspect live state and sensors, and visualize them in Rerun. Motion tests
are separate, explicitly enabled, and still awaiting hardware acceptance.

![DyCo-AI Lab G1 on its development gantry](https://raw.githubusercontent.com/DyCo-AI/g1-ros2/main/docs/assets/unitree_g1_clemson.jpg)
<p class="caption">The lab's supported G1 development setup, from g1-ros2.</p>

## Current lab configuration

| Component | Profile documented by g1-ros2 |
| --- | --- |
| Body | G1, 29 body DOF |
| Hands | Left and right Dex3-1, seven motors per hand |
| LiDAR | Livox Mid360 |
| Camera | Unitree H264 front RGB; Intel RealSense D435i present |
| Onboard computer | NVIDIA Jetson Orin NX |
| Development host | Ubuntu 22.04, ROS 2 Humble, CycloneDDS |

The active joint model and command mask depend on the actual hardware and hip
clamp state. Do not assume this profile applies to another G1 variant.

<div class="cards">
  <a class="card" href="{{ '/g1/ros/' | relative_url }}"><strong>First connection</strong><span>Install the Ubuntu host, identify the Ethernet interface, and check ROS discovery.</span></a>
  <a class="card" href="{{ '/g1/sensors/' | relative_url }}"><strong>Sensors and Rerun</strong><span>Inspect the body, hands, camera, LiDAR, and IMUs before moving to control development.</span></a>
</div>

## Current scope

Network discovery and the combined sensor viewer are documented as working
baselines. The bounded Dex3 test is implemented and offline-tested, with
hardware acceptance pending. Automated readiness, synchronized recording/replay,
and native RealSense depth integration remain future or in-progress work.
Locomotion is outside the initial pilot.

G1 Wi-Fi/WebRTC onboarding is **not yet documented or qualified**. Its Wi-Fi
credentials and AES key still need to be obtained and verified privately.
Use the ROS/Ethernet path here; do not apply the Go2 setup to the G1 unchanged.
