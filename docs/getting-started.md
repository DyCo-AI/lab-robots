---
layout: default
title: "First lab session"
description: "Prepare your computer, request access, and complete a supervised first robot checkout."
---

# Your first lab session

## Before connecting

- Ask the instructor which robot, computer, and experiment you are assigned.
- Obtain the active SSH or Wi-Fi credentials privately. The public repositories contain no shared credential inventory. Proton Pass migration is planned.
- Install tools while you still have internet access. The Go2 direct Wi-Fi network may not provide internet.
- Read the robot's current hardware and operator runbook with a trained lab member. Identify the paired remote and intervention procedure before enabling motion.

## Choose where the software runs

| Path | Your computer | Robot-side computer / interface |
| --- | --- | --- |
| Go1 legacy development | Linux host configures the privately issued host CIDR and uses SSH | Direct Ethernet reaches the robot controller and a privately issued onboard SSH endpoint |
| Go2 ROS | Windows 11 provides SSH, editor, Git | Python and ROS 2 run on the onboard Jetson over Ethernet |
| G1 ROS | Ubuntu 22.04 runs ROS 2 Humble and Rerun | Ethernet connects to the robot LAN; optional SSH accesses the onboard Jetson separately |

## First checkout

Start with network and read-only feedback. On Go1, complete the Ethernet, ping,
and SSH inventory without launching the historical controller stack. On Go2,
confirm the selected robot, onboard Jetson, and ROS 2 state. On
G1, use the supported gantry setup and read-only ROS/Rerun runbook. G1
diagnostics do not require a motion test.

Move to motion only after the instructor has completed the robot-specific
preparation and approved a bounded test. Keep one command source active, clear
the workspace, and manage cables. A GUI Stop button depends on the software and
connection; learn the physical intervention procedure first.

## Keep a useful session record

Record robot identity, host/onboard OS, firmware where available, code commit,
connection path, observed stream freshness, and any errors. Keep full bags,
videos, and datasets on local or approved lab storage, outside Git. Share a small
reviewed image or clip and a concise report when needed. Check outputs for
credentials before publishing.

Continue to [Go1]({{ '/go1/' | relative_url }}),
[Go2]({{ '/go2/' | relative_url }}), or [G1]({{ '/g1/' | relative_url }}).
