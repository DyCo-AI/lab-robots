---
layout: default
title: "Go2: Windows and WebRTC"
description: "Run the Basic camera and voxel UI locally on Windows, then build high-level Python experiments."
---

<span class="badge">Windows 11 · Basic UI · No ROS on the laptop</span>
# Go2: Wi-Fi and WebRTC

**[Open the go2-webRTC starter](https://github.com/DyCo-AI/go2-webRTC)**

Use this path for camera/voxel inspection and Windows-based high-level planning,
navigation, and mapping experiments. The robot's built-in locomotion controller
continues to handle walking. Onboard mapping/SLAM availability must be checked
against the assigned robot's firmware.

<div class="diagram" role="img" aria-label="Windows browser or Python client connects over the robot Wi-Fi by WebRTC to Go2 video, state, and high-level motion interfaces.">
  <div class="node">Windows 11<small>Browser / Python</small></div><span class="arrow" aria-hidden="true">↔</span>
  <div class="node">Robot Wi-Fi<small>WebRTC · AES access</small></div><span class="arrow" aria-hidden="true">↔</span>
  <div class="node">Go2<small>Video / state / motion</small></div>
</div>

![Upstream Basic Unitree UI showing Go2 camera, model, and voxels](https://raw.githubusercontent.com/DyCo-AI/go2-webRTC/main/docs/assets/go2-camera-voxels.png)
<p class="caption">Upstream legion1581/unitree_ui screenshot, reproduced by the starter with MIT attribution. This is a reference UI image, not a Clemson hardware capture. See <a href="https://github.com/DyCo-AI/go2-webRTC/blob/main/SOURCES.md">sources</a>.</p>

## Start in this order

1. Clone the starter and [install/build the pinned Basic UI](https://github.com/DyCo-AI/go2-webRTC/blob/main/docs/SETUP.md) while internet is available.
2. Launch the local UI and open `http://127.0.0.1:5173/` in Chrome.
3. Connect the laptop to the **assigned Go2 Wi-Fi hotspot**, rather than Clemson campus Wi-Fi. Campus routing/firewall rules do not provide this direct robot connection.
4. Select Go2 and Access Point (Direct), with robot IP **`192.168.12.1`**. Enter the instructor-issued AES key when prompted.
5. Check fresh state, changing camera frames, and available voxel/LiDAR streams before any motion experiment.

The lab site is documentation, not the robot dashboard. The Basic UI runs
locally on your laptop. Keep one active controller/client and follow the
starter's standing, stop, and intervention checks before issuing motion.

## Python and future MATLAB applications

The starter includes [connection and bounded velocity Python examples](https://github.com/DyCo-AI/go2-webRTC/blob/main/docs/PYTHON.md).
The Python client prompts privately for the AES key or uses its documented
environment variable; entering a key in the UI does not automatically configure
Python. MATLAB integration is a future bridge, not an included client.

## Demonstration

![Go2 built-in backflip action in a lab WebRTC demonstration](https://raw.githubusercontent.com/DyCo-AI/go2-webRTC/main/docs/assets/go2-backflip-01.gif)
<p class="caption">Lab-supplied WebRTC action demonstration. Built-in action footage is for illustration, not a first-session exercise. <a href="https://github.com/DyCo-AI/go2-webRTC/releases/tag/v0.1.0">Full silent clips</a>.</p>

## Scope and next steps

The Basic starter uses upstream Unitree UI. The Clemson MediaPipe/gesture panel
is a separate [instructor project]({{ '/learning/' | relative_url }}).
Low-level torque control, fast joint-level MPC, and learned-policy deployment
require other interfaces and qualification.

The [starter roadmap](https://github.com/DyCo-AI/go2-webRTC/blob/main/docs/ROADMAP.md)
tracks external Jetson camera/LiDAR drivers and a custom Wi-Fi/WebRTC sensor
bridge. External ROS topics do not automatically appear in the existing robot
WebRTC stream. Clear cached UI credentials on shared computers after use.
