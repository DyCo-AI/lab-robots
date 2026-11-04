---
layout: default
title: "Courses and projects"
description: "Connect the lab starters to Clemson CI, simulation, and independent student projects."
---

# From simulation to a robot experiment

The lab starters support a progression from accessible Python examples to
physical robot projects. The Clemson Creative Inquiry gesture-navigation work
is one application; basic onboarding remains reusable across research and courses.

## Creative Inquiry: gesture navigation

| Resource | Responsibility |
| --- | --- |
| [CI course repository](https://github.com/DyCo-AI/go1_gesture_tracking) | Course website, weekly expectations, and assignment information |
| [go1-mujoco-playground](https://github.com/sriram-2502/go1-mujoco-playground) | Student code, Python/MediaPipe exercises, simulation, and hardware learning instructions |
| [Go2 gesture-navigation instructor reference](https://github.com/sriram-2502/go2-webrtc-gesture-nav) | Clemson dashboard and reference hardware integration |
| [Lab Basic WebRTC](https://github.com/DyCo-AI/go2-webRTC) | Small, independent robot connection and UI baseline |

Start with simulation, learn to extract gestures and map them to bounded
commands, then validate the same ideas against the hardware interface. The
current physical course setup uses **Go2 and WebRTC on Windows 11**. Go1 remains
in the course naming and simulation history; its physical adapter is separate work.

Students can bring their own gesture pipeline from previous weeks and use the
instructor reference to understand the transport and UI integration. Create a
personal or team GitHub repository to track code development and experiments.
Follow the course's current team-branch README submission policy for official
weekly work; a development repository does not replace those submissions.

Keep full recordings local and summarize each run with results and small reviewed
media. Request the assigned robot's AES key privately from the instructor.

## Research and future teaching

The same baseline can support modeling, estimation, planning, and control
experiments. The Go2 WebRTC path suits high-level Windows/Python development;
MATLAB bridges are planned. Joint-level control and learned-policy deployment
need a separate stack and hardware qualification. Choose interfaces by the
experiment's control level rather than by the visual dashboard alone.
