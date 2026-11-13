---
layout: default
title: "Roadmap"
description: "Track robot onboarding, documentation, per-robot qualification, and maintenance tasks."
---

# Robot documentation roadmap

## Handbook

- [x] Separate the public handbook from executable starter repositories.
- [x] Add Go2 ROS and G1 ROS/sensor entry points.
- [ ] Have a new lab member follow each path and record missing prerequisites.
- [x] Add an initial Go1 Ethernet, ping, SSH, and hardware-inventory path from
  the historical lab notes.
- [ ] Verify the current Go1 onboard endpoints, firmware, remote procedure, and
  read-only state interface on Wobby.
- [ ] Record per-unit firmware/software versions and the date of each hardware checkout.
- [ ] Assign a primary maintainer and backup for each robot and repository.

## Private access

- [x] Designate [Proton Pass](https://proton.me/pass) as the lab password manager.
- [ ] Verify provisional robot credentials and assign maintainers to review access during student turnover.
- [ ] Document credential recovery and supported rotation procedures privately.

Students request vault access or credential help from a senior PhD student or
Dr. Umesh Vaidya. Passwords and computer service-tag/password inventories are
excluded from this public handbook.

## Robot development

- **Go2 ROS:** Jetson Wi-Fi SSH, exact software inventory, and a separate host-PC RL deployment framework. Track implementation in [go2-ros](https://github.com/DyCo-AI/go2-ros).
- **Go2 D1 arm:** Inventory the supplied arm, document power and software
  interfaces, define its safe workspace, and qualify a bounded acceptance test
  before student use.
- **G1:** Hardware acceptance for bounded motion, readiness reports, RealSense integration, and synchronized capture/replay. Track gates in [g1-ros2 pilots](https://github.com/DyCo-AI/g1-ros2/blob/main/docs/pilots/README.md).

Keep detailed implementation TODOs in the owning code repository. This page
tracks lab-wide robot documentation, validation, and maintenance work.
