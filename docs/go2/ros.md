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

Follow each session in this order:

1. [Start the robot](#startup-procedure) in a stable mode.
2. [Connect and inspect](#connection-and-inspection) over Ethernet and SSH.
3. [Shut down safely](#shutdown-procedure) before leaving.

## Startup procedure

1. Place Widget prone on a flat, nonslip surface. Keep its body horizontal and
   make sure no leg, joint, or foot is trapped under the body.
2. On the robot battery, press the power button once briefly, then press it
   again and hold for at least two seconds.
3. Wait about two minutes. The head indicator flashes green during startup and
   becomes steady green when startup is complete.
4. Turn on the paired remote: press its power button once briefly, then press it
   again and hold for at least two seconds.
5. Press `L2 + B` to confirm damping mode.
6. Press `L2 + A` to stand. After Widget is stable, press `START` once only if
   the default walking gait and joystick control are needed.

> **Startup complete:** Widget is powered, the remote is connected, and the
> robot is stable in the intended mode.

| Action | Remote control |
| --- | --- |
| Damping mode | `L2 + B` |
| Stand / lower | `L2 + A` |
| Unlock default gait | `START` |

## Connection and inspection

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

## Shutdown procedure

1. Stop active motion and controller scripts. Confirm that the commanded
   velocity is zero and the robot is stationary.
2. Stop ROS processes and leave each SSH session with `exit`.
3. Move Widget to a flat, clear, stable area and remove tension from attached
   cables.
4. Press `L2 + A` to lower the robot from standing.
5. Press `L2 + B` to enter damping mode. Confirm that Widget is fully prone and
   stable before switching off the battery.
6. On the robot battery, press the power button once briefly, then press it
   again and hold for at least two seconds.
7. Turn off the remote with the same short press followed by a press and hold
   of at least two seconds.

> **Shutdown complete:** Widget is prone, the robot and remote are powered off,
> and the Ethernet cable and equipment are stored without strain.

Do not switch off the battery while Widget is standing. Without active motor
control, the robot can drop abruptly.

## Next development steps

Wi-Fi SSH to the Jetson and a host-PC RL training/export/deployment workflow are
TODOs in the starter. Its current velocity interface uses Unitree's existing
walking controller. Read the [source roadmap and references](https://github.com/DyCo-AI/go2-ros#todo-wi-fi-ssh-and-host-pc-rl-development) before choosing a separate learning-control stack.

## Operating references

- [Official Unitree Go2 user manual](https://marketing.unitree.com/article/en/Go2/User_Manual.html)
- [Official Unitree Go2 handheld remote manual](https://marketing.unitree.com/article/en/Go2/Handheld_Remote_Control.html)
- [Lab Go2 setup runbook](https://github.com/DyCo-AI/go2-ros/blob/main/docs/SETUP.md)
