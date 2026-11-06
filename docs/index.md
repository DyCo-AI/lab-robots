---
layout: default
title: "Welcome"
description: "Choose a robot and find its connection, sensor, and development guides."
---

<div class="landing-hero">
  <div>
    <p class="eyebrow">DyCo-AI · Clemson University</p>
    <h1>Meet the robots.<br>Build your first experiment.</h1>
    <p class="lead">A practical starting point for students joining the lab: understand your robot, connect to it, inspect its sensors, and build on a maintained example.</p>
    <p class="robot-rollcall"><strong>Wobby</strong> / Go1<br><strong>Widget</strong> / Go2 EDU<br><strong>Evan Wobbier</strong> / G1</p>
    <a class="start-button" href="{{ '/getting-started/' | relative_url }}">Start your first lab session →</a>
  </div>
  <figure class="hero-media">
    <img src="{{ '/assets/lab-robots-showcase.gif' | relative_url }}" alt="Looping lab showcase of Widget, the Go2, and Wobby, the Go1, in front of Evan Wobbier, the G1 humanoid." width="320" height="568" fetchpriority="high">
    <figcaption>Wobby, Widget, and Evan Wobbier in our lab robot showcase.</figcaption>
  </figure>
</div>

<div class="cards robot-cards">
  <a class="card" href="{{ '/go1/' | relative_url }}"><strong>Wobby / Go1</strong><span>Connect a Linux host over Ethernet, verify the robot and onboard computers, then review the legacy ROS 1 development stack.</span></a>
  <a class="card" href="{{ '/go2/' | relative_url }}"><strong>Widget / Go2 EDU</strong><span>Choose Windows 11 + WebRTC for high-level applications, or Ethernet + Jetson + ROS 2 for robot-side work.</span></a>
  <a class="card" href="{{ '/g1/' | relative_url }}"><strong>Evan Wobbier / G1</strong><span>Use Ubuntu 22.04 + ROS 2 Humble to inspect the live model, camera, LiDAR, IMUs, and Dex3 hands in Rerun.</span></a>
</div>

## New to the lab?

1. Read [First lab session]({{ '/getting-started/' | relative_url }}) for access, preparation, and the supervised first checkout.
2. Choose the robot and connection path that match your experiment.
3. Follow the linked code repository for installation and detailed operation.
4. Record what actually worked on your assigned unit before extending the example.

## Pick a starting point

| Your goal | Start here |
| --- | --- |
| Use a Windows laptop to view Go2 camera and voxels, then develop high-level Python planning | [Go2 WebRTC]({{ '/go2/webrtc/' | relative_url }}) |
| SSH from Windows into the Go2 Jetson and use ROS 2 for velocity requests and bags | [Go2 Ethernet / ROS 2]({{ '/go2/ros/' | relative_url }}) |
| Inspect the G1 body, hands, and sensors from Ubuntu | [G1 ROS 2]({{ '/g1/ros/' | relative_url }}) |
| Build gesture navigation after simulation exercises | [Courses and projects]({{ '/learning/' | relative_url }}) |
| Connect to Go1 over Ethernet and inspect its onboard computers | [Go1 first connection]({{ '/go1/' | relative_url }}) |

This handbook is the lab's entry point. Code and full runbooks remain in their
own repositories so improvements carry forward without duplicated instructions.
Feature status here reflects those repositories, reviewed **November 6, 2026**;
it does not substitute for a checkout on the assigned hardware.

## Learning together in the lab

Our goal is to make robotics approachable: start with a clear example, ask
questions, and turn a first connection into an experiment you can explain and
build on. This handbook helps each new group carry that work forward.

<figure class="lab-photo">
  <img src="{{ '/assets/dyco-ai-lab.webp' | relative_url }}" alt="DyCo-AI lab members working together around quadruped robots in the Clemson robotics lab." width="1200" height="800" loading="lazy" decoding="async">
  <figcaption>Hands-on robot development in the DyCo-AI Lab at Clemson University.</figcaption>
</figure>
