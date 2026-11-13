---
layout: default
title: "Go2: Ethernet and ROS 2"
description: "Connect Windows to the Go2 Jetson over Ethernet, inspect software, and follow the ROS starter."
---

<span class="badge">Windows SSH → onboard Jetson</span>
# Go2: Ethernet and ROS 2

**[Open the go2-ros starter](https://github.com/DyCo-AI/go2-ros)**

Windows supplies the terminal and editor. After SSH, Python and ROS commands
execute on the Go2 EDU's onboard Jetson expansion computer.

<div class="diagram" role="img" aria-label="Windows laptop connects by Ethernet and SSH to the Go2 Jetson; ROS 2 sends high-level requests to the onboard locomotion controller.">
  <div class="node">Windows laptop<small>SSH / editor / Git</small></div><span class="arrow" aria-hidden="true">→</span>
  <div class="node">Ethernet → Jetson<small>Python / ROS 2</small></div><span class="arrow" aria-hidden="true">→</span>
  <div class="node">Go2 locomotion<small>Sport / DDS requests</small></div>
</div>

<figure class="half-width-figure">
  <img src="https://raw.githubusercontent.com/DyCo-AI/go2-ros/main/docs/assets/go2-jetson-ethernet.png" alt="Annotated Go2 EDU Ethernet connection at the Jetson expansion dock" loading="lazy" decoding="async">
  <figcaption>Annotated Ethernet connection at the Jetson expansion dock.</figcaption>
</figure>

## Start in this order

1. [Connect Ethernet and prepare SSH](https://github.com/DyCo-AI/go2-ros/blob/main/docs/SETUP.md).
2. [Identify the installed Jetson, Ubuntu, ROS, and NVIDIA software](https://github.com/DyCo-AI/go2-ros/blob/main/docs/SOFTWARE.md) with the read-only inventory tool.
3. Source the verified ROS 2 environment and confirm state/message imports.
4. Follow the starter's bounded velocity and stop checkout.
5. Add [optional ROS bag recording](https://github.com/DyCo-AI/go2-ros/blob/main/docs/RECORDING.md).

## Lab connection reference

| Item | Current notes |
| --- | --- |
| Windows Ethernet adapter | `192.168.123.222/24`; gateway and DNS blank |
| Jetson SSH | `unitree@192.168.123.18` |
| ROS baseline | Ubuntu 20.04, ROS 2 Foxy, CycloneDDS 0.10.2 |
| Jetson DDS interface | `eth0`; verify on this unit |
| State topic | `/lf/sportmodestate` |
| Exact JetPack/L4T | Inventory still needed |

Foxy is ROS 2; Noetic is ROS 1. A Noetic-only environment cannot run the ROS 2
example. Confirm the image before sourcing workspaces or changing packages.

## What a first motion example means

The starter provides a bounded forward velocity request with ramp and stop
handling. Its cruise-time argument excludes ramps and settling; it is not a
total-motion-duration limit. Follow the complete clearance, remote, and feedback
checks in the source runbook before using it.

![Go2 lab velocity demonstration](https://raw.githubusercontent.com/DyCo-AI/go2-ros/main/docs/assets/go2-velocity-demo.gif)
<p class="caption">Go2 velocity demonstration.</p>

## Next development steps

Wi-Fi SSH to the Jetson and a host-PC RL training/export/deployment workflow are
TODOs in the starter. Its current velocity interface uses Unitree's existing
walking controller. Read the [source roadmap and references](https://github.com/DyCo-AI/go2-ros#todo-wi-fi-ssh-and-host-pc-rl-development) before choosing a separate learning-control stack.
