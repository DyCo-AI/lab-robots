---
layout: default
title: "G1 humanoid"
description: "Discover the G1 lab configuration and the current ROS 2 diagnostics development path."
---

<p class="eyebrow">Humanoid / Observation before actuation</p>
# Evan Wobbier: Unitree G1

**Evan Wobbier** is the lab's G1 humanoid.

The lab procurement record identifies this robot as a **G1 EDU Ultimate B**.
Its current configuration has **29 body DOF** and left and right **Dex3-1
hands**. Confirm the unit label, installed hardware, hip-clamp state, and active
joint mask before commanding it; catalog names and controller configurations
can differ.

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

## Operator and hardware notes

- The lab has not observed a G1 crash as of November 2026. This is not evidence
  that a new controller is safe: deploy incrementally and use the gantry for
  startup and initial tests.
- Do not attempt to catch a falling humanoid; use the gantry and defined stop
  procedure for new controller tests.
- Use a compatible external power supply only for stationary development with
  the robot secured and the cable managed. Do not walk or run a motion test
  while tethered to external power.
- Use **about two hours** only as a lab planning estimate for battery runtime.
  Actual runtime depends on payload, motion, compute load, and battery health.

## Reference documentation

- [Unitree G1 developer documentation](https://support.unitree.com/home/en/G1_developer)
- [G1 hardware overview](https://docs.quadruped.de/projects/g1/html/g1_overview.html)
- [Unitree Robotics repositories](https://github.com/unitreerobotics)
- [DyCo-AI G1 ROS 2 workspace](https://github.com/DyCo-AI/g1-ros2)

> **Replacement planning (reported August 2026):** Clemson's current purchase
> order process does not permit direct Unitree replacement purchases. Verify
> current policy and available spares with the lab manager before planning work;
> do not assume a replacement battery, sensor, or actuator can be obtained
> quickly.

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

Use the ROS 2/Ethernet path documented here. Do not apply network addresses,
credentials, message types, or launch commands from another Unitree model to
the G1 unchanged.
