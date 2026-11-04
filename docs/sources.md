---
layout: default
title: "Sources and media"
description: "Find the maintained source runbooks, media attribution, and official references."
---

# Sources and media

The handbook summarizes the lab's public starter repositories, reviewed
**November 4, 2026**. Detailed procedures and current feature status live in the
linked sources. Vendor documentation remains authoritative for robot operation
and firmware-specific behavior.

## Lab repositories

The lab logo, `assets/dyco-ai-lab-logo.png`, is copied unchanged from
[`docs/_images/lab-logo.png` in the Creative Inquiry course website](https://github.com/DyCo-AI/go1_gesture_tracking/blob/main/docs/_images/lab-logo.png).
It is used for the handbook sidebar, mobile header, and browser tab icon.

- [DyCo-AI/go2-ros](https://github.com/DyCo-AI/go2-ros): Ethernet/Jetson setup, ROS baseline, annotated lab photograph, and velocity GIF.
- [DyCo-AI/go2-webRTC](https://github.com/DyCo-AI/go2-webRTC): Windows Basic UI, Python examples, backflip GIF, and upstream screenshot attribution.
- [DyCo-AI/g1-ros2](https://github.com/DyCo-AI/g1-ros2): G1 profile, network addresses, ROS/Rerun status, lab robot photograph, and combined diagnostics screenshot.

The landing animation, `assets/lab-robots-showcase.gif`, is an optimized looping
export of the instructor-supplied `robot_showcase.mp4`. It shows Wobby (Go1),
Widget (Go2), and Evan Wobbier (G1). The GIF preserves the approximately
3.1-second showcase at 320 × 568, 8 frames per second, and 64 palette colors.
It loops automatically and contains no audio or source metadata. The original
video remains local and excluded from Git. The earlier static WebP remains
available in the assets folder as a lightweight still reference.

The closing landing-page photograph, `assets/dyco-ai-lab.webp`, is an optimized
1200 × 800 WebP (quality 76) copy of the instructor-supplied `lab-photo.jpg`. Source metadata is
removed; the full-resolution original remains local. The photo is supplied for
this lab handbook and depicts hands-on work in the lab.

Other images are linked from their owning repositories rather than copied into
this handbook. The Go2 Basic screenshot originates from
[legion1581/unitree_ui](https://github.com/legion1581/unitree_ui), under its MIT
license; the starter retains the notice in
[SOURCES.md and its linked license](https://github.com/DyCo-AI/go2-webRTC/blob/main/SOURCES.md).
It depicts the upstream UI, not a Clemson field capture. The lab supplied the
robot photographs and motion clips. Each owning repository retains its media
context and notices; no external media ownership is claimed here.

## Official development references

- [Unitree G1 developer documentation](https://support.unitree.com/home/en/G1_developer/about_G1).
- [Unitree ROS 2](https://github.com/unitreerobotics/unitree_ros2).
- [Unitree SDK2](https://github.com/unitreerobotics/unitree_sdk2).
- [Unitree SDK2 Python](https://github.com/unitreerobotics/unitree_sdk2_python).
- [GitHub Pages publishing](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

The handbook uses an original lightweight Jekyll layout with local styles and
JavaScript. It requires no remote documentation theme or external font service.
