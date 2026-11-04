---
layout: default
title: "Roadmap and handover"
description: "Track onboarding, private vault migration, per-robot qualification, and long-term maintenance."
---

# Keep the lab usable after handover

## Handbook

- [x] Separate the public handbook from executable starter repositories.
- [x] Add Go2 ROS/WebRTC and G1 ROS/sensor entry points.
- [ ] Have a new lab member follow each path and record missing prerequisites.
- [ ] Add a reviewed Go1 onboarding path and hardware inventory.
- [ ] Record per-unit firmware/software versions and the date of each hardware checkout.
- [ ] Assign a primary maintainer and backup for each robot and repository.

## Private access

- [ ] Migrate the local private inventory to **Proton Pass**, after confirming institutional approval and sharing capacity.
- [ ] Verify G1 Wi-Fi SSID/password and obtain its robot-specific AES key privately.
- [ ] Verify provisional robot credentials and assign maintainers to review access during student turnover.
- [ ] Document credential recovery and supported rotation procedures privately.

No shared vault is currently implied to be available. Until migration, students
request access directly from the instructor. Passwords, AES keys, and computer
service-tag/password inventories are excluded from this public handbook.

## Robot development

- **Go2 ROS:** Jetson Wi-Fi SSH, exact software inventory, and a separate host-PC RL deployment framework. Track implementation in [go2-ros](https://github.com/DyCo-AI/go2-ros).
- **Go2 WebRTC:** MATLAB integration and external Jetson sensor streaming. Track implementation in [go2-webRTC](https://github.com/DyCo-AI/go2-webRTC/blob/main/docs/ROADMAP.md).
- **G1:** Hardware acceptance for bounded motion, readiness reports, RealSense integration, and synchronized capture/replay. Track gates in [g1-ros2 pilots](https://github.com/DyCo-AI/g1-ros2/blob/main/docs/pilots/README.md).

Keep detailed implementation TODOs in the owning code repository. This page
tracks the lab-wide onboarding and handover work.
