---
layout: default
title: "Welcome"
description: "Choose a robot and find its connection, sensor, and development guides."
---

<div class="landing-hero">
  <div>
    <p class="eyebrow">DyCo-AI · Clemson University</p>
    <h1>Connect, inspect, and maintain the lab robots.</h1>
    <p class="lead">Robot-specific startup, networking, ROS, sensor, diagnostics, and maintenance guides for the DyCo-AI Lab.</p>
    <p class="robot-rollcall"><strong>Wobby</strong> / Go1<br><strong>Widget</strong> / Go2 EDU<br><strong>Evan Wobbier</strong> / G1</p>
    <a class="start-button" href="{{ '/getting-started/' | relative_url }}">Read the lab guidelines →</a>
  </div>
  <figure class="hero-media">
    <img src="{{ '/assets/lab-robots-showcase.gif' | relative_url }}" alt="Looping lab showcase of Widget, the Go2, and Wobby, the Go1, in front of Evan Wobbier, the G1 humanoid." width="320" height="568" fetchpriority="high">
    <figcaption>Wobby, Widget, and Evan Wobbier in our lab robot showcase.</figcaption>
  </figure>
</div>

<div class="cards robot-cards">
  <article class="card robot-card">
    <div class="robot-card-heading">
      <a href="{{ '/go1/' | relative_url }}"><strong>Wobby / Go1</strong></a>
      <span class="robot-spawned">Spawned in 2022</span>
    </div>
    <div class="robot-card-copy">
      <p>Wobby is a Unitree Go1: a 12-actuator quadruped used in the lab for legged locomotion, perception, and control research.</p>
      <p>In 2023, Wobby traveled to the ICRA Quadruped Robot Challenge with team <strong>Wobby Walkers</strong>, placing sixth overall in the final round. The team name stuck, and so did Wobby's name.</p>
      <p class="robot-links"><a href="https://www.youtube.com/watch?v=Vqp2fmUyKt8&amp;list=PLhkxi2e2mJdc00o857554Solq4MgaqwZN&amp;index=6">Watch Wobby at ICRA QRC</a><a href="https://ieeexplore.ieee.org/document/10255505">Read the challenge report</a><a href="{{ '/go1/' | relative_url }}">Open the Go1 guide</a></p>
    </div>
  </article>
  <article class="card robot-card">
    <div class="robot-card-heading">
      <a href="{{ '/go2/' | relative_url }}"><strong>Widget / Go2 EDU</strong></a>
      <span class="robot-spawned">Spawned in 2026</span>
    </div>
    <div class="robot-card-copy">
      <p>Widget is Wobby's younger brother: a Unitree Go2 EDU quadruped with newer onboard sensing and computing.</p>
      <p>The lab uses Widget for Ethernet and Jetson-based ROS 2 development, state inspection, bounded motion tests, and data recording.</p>
      <p>Widget also supports gesture navigation over WebRTC for the <strong>CI: Mission Control</strong> course.</p>
      <p class="robot-links"><a href="https://dyco-ai.github.io/go1_gesture_tracking/">CI: Mission Control</a><a href="https://github.com/sriram-2502/go2-gesture-nav">Go2 Gesture Navigation</a></p>
    </div>
  </article>
  <article class="card robot-card">
    <div class="robot-card-heading">
      <a href="{{ '/g1/' | relative_url }}"><strong>Evan Wobbier / G1</strong></a>
      <span class="robot-spawned">Spawned in 2026</span>
    </div>
    <div class="robot-card-copy">
      <p>Evan Wobbier is the tallest sibling: a Unitree G1 humanoid configured with 29 body degrees of freedom and left and right Dex3 tactile hands.</p>
      <p>Its lab setup includes a Livox Mid360 LiDAR, front camera, IMUs, and an NVIDIA Jetson Orin NX, with ROS 2 and Rerun used for diagnostics.</p>
      <p class="robot-links"><a href="{{ '/g1/' | relative_url }}">Open the G1 guide</a></p>
    </div>
  </article>
</div>

## New to the robots?

1. Read the [lab guidelines]({{ '/getting-started/' | relative_url }}) for professional conduct, equipment care, safety, and reproducible research practices.
2. Choose the robot and connection path that match your experiment.
3. Follow the linked code repository for installation and detailed operation.
4. Record what actually worked on your assigned unit before extending the example.

## Pick a starting point

| Your goal | Start here |
| --- | --- |
| Connect to the Go2 Jetson and use ROS 2 for state, bounded velocity requests, and bags | [Go2 Ethernet / ROS 2]({{ '/go2/ros/' | relative_url }}) |
| Inspect the G1 body, hands, and sensors from Ubuntu | [G1 ROS 2]({{ '/g1/ros/' | relative_url }}) |
| Connect to Go1 over Ethernet and inspect its onboard computers | [Go1 first connection]({{ '/go1/connection/' | relative_url }}) |

This handbook is the lab's entry point. Code and full runbooks remain in their
own repositories so improvements carry forward without duplicated instructions.
Feature status here reflects those repositories, reviewed **November 6, 2026**;
it does not substitute for a checkout on the assigned hardware.

## Keep the runbooks current

Record the robot identity, software revision, connection path, and observed
result during each checkout. Update the owning runbook when hardware, firmware,
networking, or launch procedures change.

## Lab highlights

<div class="lab-gallery">
  <figure class="lab-photo">
    <img src="{{ '/assets/dyco-ai-lab.webp' | relative_url }}" alt="DyCo-AI lab members working together around quadruped robots in the Clemson robotics lab." width="1200" height="800" loading="lazy" decoding="async">
    <figcaption><strong>NSF grant, 2025.</strong></figcaption>
  </figure>
  <figure class="lab-photo">
    <img src="{{ '/assets/icra-qrc-london-2023.png' | relative_url }}" alt="Participants and quadruped robots at the ICRA 2023 Quadruped Robot Challenge in London, with Wobby identified in the arena." width="902" height="641" loading="lazy" decoding="async">
    <figcaption><strong>Wobby Walkers at ICRA 2023.</strong> Sixth overall in the final round. <a href="https://www.youtube.com/watch?v=Vqp2fmUyKt8&amp;list=PLhkxi2e2mJdc00o857554Solq4MgaqwZN&amp;index=6">Watch the run</a> or <a href="https://ieeexplore.ieee.org/document/10255505">read the report</a>.</figcaption>
  </figure>
</div>
