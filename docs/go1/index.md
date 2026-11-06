---
layout: default
title: "Go1 overview"
description: "Meet the lab's Unitree Go1 and find its connection, hardware, and legacy development resources."
---

<p class="eyebrow">Quadruped / Read-only checkout first</p>
# Wobby: Unitree Go1

**Wobby** is the lab's Unitree Go1 quadruped. It joined the lab in 2022 and
competed with team **Wobby Walkers** at the 2023 ICRA Quadruped Robot
Challenge, placing sixth overall in the final round.

The supported first-session path is deliberately read-only: place the robot in
damping, connect a Linux host over Ethernet, verify reachability, and inspect
an onboard computer over SSH. The historical controller stack is ROS 1-era and
requires a separately reviewed motion runbook.

<div class="cards">
  <a class="card" href="{{ '/go1/connection/' | relative_url }}"><strong>First connection</strong><span>Prepare Wobby, configure Ethernet, verify ping, and inspect an onboard computer without starting motion.</span></a>
  <a class="card" href="https://github.com/DyCo-AI/go1_info"><strong>Historical lab workspace</strong><span>Review the older ROS 1, perception, controller, and competition notes with the repository maintainer.</span></a>
</div>

## Current lab profile

| Component | Lab profile |
| --- | --- |
| Body | Unitree Go1, 12 actuated leg joints |
| Primary development path | Direct Ethernet from a Linux host |
| Software boundary | Historical Unitree Legged SDK and ROS 1 experiments |
| Optional payloads | ZED2i camera and Jetson AGX configurations; use only under an approved runbook |
| Battery planning estimate | About 20 minutes; workload and battery condition dependent |

Confirm Wobby's current hardware, firmware, endpoint inventory, and paired
remote with the maintainer before each checkout. Do not copy addresses,
credentials, or commands from Go2 or G1 documentation.

## Hardware and operating notes

- Power on with all four feet on a clear, level floor and keep the paired remote
  available for intervention.
- A fall while Ethernet is connected can load the cable and damage the robot
  port. A Wi-Fi adapter avoids the tether but can itself be damaged in a fall.
- External ZED2i cameras, Jetson AGX computers, and their mounts increase the
  hardware exposed during a fall. Start new controller tests without those
  payloads whenever possible.
- Use an approved external power supply only while the robot is stationary,
  stable, and supervised. Never run locomotion with a power tether attached.

## Reference documentation

- [Unitree Go1 EDU documentation](https://unitree-docs.readthedocs.io/en/latest/get_started/Go1_Edu.html)
- [Go1 operation guide](https://www.docs.quadruped.de/projects/go1/html/operation.html)
- [Trossen Robotics Go1 documentation](https://docs.trossenrobotics.com/unitree_go1_docs/)
- [Historical DyCo-AI Go1 notes](https://github.com/DyCo-AI/go1_info)
- [Wobby at the ICRA 2023 Quadruped Robot Challenge](https://www.youtube.com/watch?v=Vqp2fmUyKt8&list=PLhkxi2e2mJdc00o857554Solq4MgaqwZN&index=6)
- [ICRA 2023 challenge report](https://ieeexplore.ieee.org/document/10255505)

> **Replacement planning (reported August 2026):** Clemson's current purchase
> order process does not permit direct Unitree replacement purchases. Verify
> current policy and available spares with the lab manager before planning work.

## Current scope

Ethernet, ping, SSH inventory, and read-only inspection form the current
onboarding baseline. A bounded state reader, camera qualification, and reviewed
motion acceptance procedure remain to be validated on Wobby's current hardware
and firmware.
