---
layout: default
title: "Go1 status"
description: "Find existing Go1 references while the unified onboarding path is prepared."
---

# Go1: existing resources

Go1 remains part of the lab's robot collection. Its unified handbook onboarding
is pending; use the existing material with the instructor and check its hardware
and software assumptions before running it.

- **[DyCo-AI/go1_info](https://github.com/DyCo-AI/go1_info): existing Go1 setup notes and the temporary starting point for Go1 onboarding.** The repository is currently private; request access from the lab maintainer if GitHub shows a 404 or an access prompt.
- [Simulation and CI learning path]({{ '/learning/' | relative_url }}): student-facing Python and gesture-navigation exercises.

The current CI hardware route uses Go2 WebRTC. The older Go1/external Jetson/ZED
hardware route needs separate verification and is under development. Do not
reuse the Go2 ROS messages, SDK interface, IP addresses, or credentials by assumption.
