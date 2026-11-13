---
layout: default
title: "Go1 EDU overview"
description: "Meet the lab's Unitree Go1 EDU and find its connection, hardware, and legacy development resources."
---

<p class="eyebrow">Quadruped / Read-only checkout first</p>
# Wobby: Unitree Go1 EDU

**Wobby** is the lab's Unitree Go1 EDU quadruped. It joined the lab in 2022 and
competed with team **Wobby Walkers** at the 2023 ICRA Quadruped Robot
Challenge, placing sixth overall in the final round.

The supported first-session path is deliberately read-only: place the robot in
damping, connect a Linux host over Ethernet, verify reachability, and inspect
an onboard computer over SSH. The historical controller stack is ROS 1-era and
requires a separately reviewed motion runbook.

<div class="cards">
  <a class="card" href="{{ '/go1/connection/' | relative_url }}"><strong>First connection</strong><span>Prepare Wobby, configure Ethernet, verify ping, and inspect an onboard computer without starting motion.</span></a>
  <a class="card" href="https://github.com/DyCo-AI/go1_info"><strong>Lab workspace</strong><span>Review the ROS 1 perception, controller, and competition notes with the repository maintainer.</span></a>
</div>

## Current lab profile

| Component | Lab profile |
| --- | --- |
| Body | Unitree Go1 EDU, 12 actuated leg joints |
| Primary development path | Direct Ethernet from a Linux host |
| Software boundary | Historical Unitree Legged SDK and ROS 1 experiments |
| Optional payloads | ZED2i camera and Jetson AGX configurations; use only under an approved runbook |
| Battery planning estimate | About 20 minutes; workload and battery condition dependent |

Confirm Wobby's current hardware, firmware, endpoint inventory, and paired
remote with the maintainer before each checkout. Do not copy addresses,
credentials, or commands from Go2 or G1 documentation.

## External perception and compute setup

For social-navigation experiments, Wobby carries a ZED 2i stereo camera,
Wi-Fi antennas, an NVIDIA Jetson AGX Xavier, and a dedicated external battery
in custom mounting hardware. See the
[hardware description](https://github.com/sriram-2502/go1_density_social_nav/blob/main/docs/hardware.md)
and [Go1 Density Social Navigation](https://github.com/sriram-2502/go1_density_social_nav)
for the complete setup and software pipeline.

<div class="hardware-stack-gallery">
  <figure class="hardware-stack-photo">
    <img src="https://raw.githubusercontent.com/sriram-2502/go1_density_social_nav/main/docs/assets/images/go1_front.png" alt="Front view of Wobby with labels identifying the ZED 2i camera, Wi-Fi antennas, external battery, and 3D-printed housing." loading="lazy" decoding="async">
    <figcaption>Front view</figcaption>
  </figure>
  <figure class="hardware-stack-diagram">
    <img src="https://raw.githubusercontent.com/sriram-2502/go1_density_social_nav/main/docs/assets/images/go1_stack.png" alt="System architecture connecting the ZED 2i and Jetson AGX perception stack, host laptop density planner, and onboard Unitree locomotion controller." loading="lazy" decoding="async">
    <figcaption>Perception, planning, and locomotion architecture</figcaption>
  </figure>
  <figure class="hardware-stack-photo">
    <img src="https://raw.githubusercontent.com/sriram-2502/go1_density_social_nav/main/docs/assets/images/go1_back.png" alt="Rear view of Wobby with labels identifying the Jetson AGX Xavier and external battery pack." loading="lazy" decoding="async">
    <figcaption>Rear view</figcaption>
  </figure>
</div>

## Main research tools

The legacy Go1 research stack combines OCS2-based legged control with ROS and
Gazebo planning and terrain simulation. The three DyCo-AI repositories below
are private; request access from the maintainer. These are research codebases,
not approved first-session hardware launch procedures.

| Repository | Role in the Go1 stack |
| --- | --- |
| [robot_planner](https://github.com/DyCo-AI/robot_planner) | Converts general planners into dynamically feasible quadruped reference trajectories for the OCS2 locomotion stack. |
| [legged_autonomy](https://github.com/DyCo-AI/legged_autonomy) | Integration workspace for locomotion, planning, mapping, terrain perception, and high-level decisions. |
| [legged_locomotion](https://github.com/DyCo-AI/legged_locomotion) | OCS2 and `ros_control` NMPC/WBC stack for Go1 simulation and separately reviewed hardware experiments. |
| [terrain_champ](https://github.com/AndrewZheng-1011/terrain_champ) | CHAMP and Gazebo terrain simulator used to collect joint-state and ground-reaction-force data across terrain and gait conditions. |
| [Quad_ConvexMPC](https://github.com/AndrewZheng-1011/Quad_ConvexMPC) | MATLAB/CasADi LTV-MPC reference implementation for quadruped locomotion and gait tracking. |

## Related publications

1. Joseph Moyalan, Andrew Zheng, Sriram S. K. S. Narayanan, and Umesh Vaidya,
   "[Off-Road Navigation of Legged Robots Using Linear Transfer Operators](https://arxiv.org/abs/2305.02938),"
   *IFAC-PapersOnLine*, vol. 56, no. 3, pp. 613-618, 2023. Recipient of the
   **ASME Dynamic Systems and Control Division Best Robotics Paper Award** at
   MECC 2023 in Lake Tahoe, Nevada.
2. Andrew Zheng and Sriram S. K. S. Narayanan,
   "[Optimal Control for Quadruped Locomotion Using LTV MPC](https://arxiv.org/abs/2212.05154),"
   arXiv:2212.05154, 2022. Developed as a Fall 2022 Optimal Control course
   project at Clemson University.
3. Sriram S. K. S. Narayanan, Andrew Zheng, and Umesh Vaidya,
   "[Safe Motion Planning for Quadruped Robots Using Density Functions](https://arxiv.org/abs/2312.09173),"
   in *2023 Ninth Indian Control Conference (ICC)*, IEEE, 2023.

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

## Known issues and maintenance

- **Stock perception interfaces:** The Go1's onboard camera is not exposed as a
  straightforward OpenCV/`cv2` capture source in the current lab workflow, so
  it is inconvenient for custom vision development. The onboard LiDAR path is
  also not qualified in the current perception stack; LiDAR data should be
  handled as point clouds with ROS/PCL/Open3D tools rather than OpenCV.
- **External perception path:** The lab added a ZED 2i camera and NVIDIA Jetson
  AGX capability for visual perception and social-navigation experiments. See
  [Go1 Density Social Navigation](https://github.com/sriram-2502/go1_density_social_nav)
  for the implemented camera, compute, planning, and control pipeline.
- [ ] **Repair and validate the LAN port.** Do not force a loose connector or
  depend on the damaged port during a motion test.
- [ ] **Repair the front-left motor wire.** A qualified maintainer must inspect
  and replace or solder the wire, verify continuity and insulation, and complete
  a supervised low-load acceptance test before normal motion experiments.

## Reference documentation

- [Unitree Go1 EDU documentation](https://unitree-docs.readthedocs.io/en/latest/get_started/Go1_Edu.html)
- [Go1 operation guide](https://www.docs.quadruped.de/projects/go1/html/operation.html)
- [Trossen Robotics Go1 documentation](https://docs.trossenrobotics.com/unitree_go1_docs/)
- [DyCo-AI Go1 lab workspace](https://github.com/DyCo-AI/go1_info)
- [Wobby at the ICRA 2023 Quadruped Robot Challenge](https://www.youtube.com/watch?v=Vqp2fmUyKt8&list=PLhkxi2e2mJdc00o857554Solq4MgaqwZN&index=6)
- [ICRA 2023 challenge report](https://ieeexplore.ieee.org/document/10255505)

> **Replacement planning (reported August 2026):** Clemson's current purchase
> order process does not permit direct Unitree replacement purchases. Verify
> current policy and available spares with the lab manager before planning work.

## Current scope

Ethernet, ping, SSH inventory, and read-only inspection form the current
onboarding baseline. Stock camera/LiDAR qualification, the two hardware repairs
above, a bounded state reader, and a reviewed motion acceptance procedure remain
to be completed on Wobby's current hardware and firmware.
