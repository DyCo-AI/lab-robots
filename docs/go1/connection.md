---
layout: default
title: "Go1 first connection"
description: "Connect a Linux host to the lab Go1, verify Ethernet and SSH, and understand the legacy ROS 1 stack."
---

# Wobby: Unitree Go1 EDU

**Wobby** is the lab's Go1 EDU quadruped.

This page is the safe first-session path extracted from the lab's historical
[`go1_info`](https://github.com/DyCo-AI/go1_info) notes. It covers physical
preparation, wired reachability, and read-only inspection. The controller and
planning notes in `go1_info` are older ROS 1 experiments; they are not an
approved first-session motion procedure.

## Reference documentation

- [Unitree Go1 EDU documentation](https://unitree-docs.readthedocs.io/en/latest/get_started/Go1_Edu.html)
- [Go1 operation guide](https://www.docs.quadruped.de/projects/go1/html/operation.html)
- [Trossen Robotics Go1 documentation](https://docs.trossenrobotics.com/unitree_go1_docs/)
- [Historical DyCo-AI Go1 notes](https://github.com/DyCo-AI/go1_info)

> Work with a trained lab member. Put the Go1 on a clear, level surface, keep
> its paired remote available, and learn how to return it to damping before
> enabling any program that can publish commands.

## Hardware and operating notes

- Use **about 20 minutes** as a conservative lab planning estimate for battery
  runtime. Actual runtime depends on gait, payload, compute load, battery age,
  and condition.
- Go1 has been robust in lab use, but a fall while Ethernet is connected can
  load the cable and break the robot port. A Wi-Fi adapter avoids the tether but
  can itself be damaged in a fall.
- External ZED2i cameras, Jetson AGX computers, and their mounts substantially
  increase the hardware exposed during a fall. Begin new controllers without
  those payloads whenever the experiment permits.
- Use an approved external power supply only while the robot is stationary,
  stable, and supervised. Never run locomotion with a power tether attached.

> **Replacement planning (reported August 2026):** Clemson's current purchase
> order process does not permit direct Unitree replacement purchases. Verify
> current policy and available spares with the lab manager before planning work.

## What you need

- A Linux computer with an Ethernet port or USB-to-Ethernet adapter.
- A direct Ethernet cable to the Go1 development port.
- The current host CIDR, robot IP, onboard SSH IP, and SSH credential from the
  lab maintainer. Per-robot network inventory and credentials are not stored on
  this public site.
- Access to [`DyCo-AI/go1_info`](https://github.com/DyCo-AI/go1_info) if you
  need the historical ROS 1, camera, or competition notes.

## 1. Power on and enter damping

Use a clear, level floor with no person, cable, or object inside the leg
workspace. The archived Unitree quick guide records this startup sequence:

1. Install a charged battery and place all four limbs flat on the ground.
2. On the battery, press the power button once, then press it again and hold.
3. Move clear. The Go1 starts and may stand automatically. Wait about one
   minute for the head light to flash before using the remote.
4. Power the paired remote with one short press followed by one long press.
5. With the trained operator ready, press `L2 + B` to place the robot in
   **damping / low-power mode**. The robot lowers itself, so keep hands and feet
   outside its workspace.

For this first checkout, do not press `Start` to unlock walking or fast-run
control. The quick guide records `L2 + A` as the lock/stand/lie control, but
students should not explore controller combinations without the trained
operator.

## 2. Connect Ethernet

Connect the host directly to Wobby. Identify the interface that changes state
when the cable is inserted:

```bash
ip -brief link
nmcli device status
```

Set all three values for the assigned Go1 before running the network commands:

```bash
export GO1_INTERFACE=enp3s0
export GO1_HOST_CIDR=REPLACE_WITH_LAB_HOST_CIDR
export GO1_ROBOT_IP=REPLACE_WITH_LAB_ROBOT_IP

sudo ip address replace "${GO1_HOST_CIDR}" dev "${GO1_INTERFACE}"
sudo ip link set "${GO1_INTERFACE}" up
ip -4 address show dev "${GO1_INTERFACE}"
```

This `ip` configuration is temporary and disappears after the interface or
computer restarts. The host and robot must have different addresses.

## 3. Verify the robot network

Use the issued robot/controller address for the reachability check:

```bash
ping -c 4 "${GO1_ROBOT_IP}"
```

Continue only if replies arrive with `0% packet loss`. If ping fails, recheck
the cable, interface name, host address, and robot power before changing
software.

## 4. Inspect an onboard computer over SSH

The Go1 has separate robot-control and onboard-computer endpoints. The current
onboard SSH address and credential are private lab inventory: obtain both from
the instructor for the assigned unit. Do not assume the robot/controller
address is also the SSH endpoint.

Set the issued address for the current terminal, then connect:

```bash
export GO1_SSH_IP=REPLACE_WITH_LAB_SSH_IP
ssh unitree@"${GO1_SSH_IP}"
```

After login, identify the machine before running anything:

```bash
hostname
uname -a
cat /etc/os-release
ip -brief address
```

Exit with `exit`. A successful SSH login is the end of the first checkout; it
does not authorize starting a controller.

## 5. Understand the software boundary

The archived Go1 workflow predates the lab's current Go2 and G1 ROS 2 stacks.
It uses Unitree Legged SDK, `unitree_ros_to_real`, and ROS 1-era packages. The
historical custom controller also expects:

```bash
export ROBOT_TYPE=go1
```

Do not launch `legged_unitree_hw`, switch ROS controllers, publish `cmd_vel`,
stop vendor camera processes, or update firmware during onboarding. Those
actions can move the robot or disrupt stock services and require a separately
reviewed runbook for Wobby's current firmware and hardware.

## First-session pass criteria

- The Go1 is stable in damping mode with the paired remote available.
- The host shows the instructor-issued CIDR on the correct Ethernet interface.
- `ping -c 4 "${GO1_ROBOT_IP}"` reports `0% packet loss`.
- The instructor-issued SSH endpoint opens with the private lab credential.
- The student records the endpoint, hostname, OS, kernel, and current
  `go1_info` commit without starting a motion or camera process.

## Shut down

Disconnect SSH with `exit`. With the trained operator, put the robot in its
stable proning state before switching it off. The archived quick guide specifies
one short battery-button press followed by one long press for shutdown; the
remote uses the same short-then-long sequence. Do not power off while the Go1
is standing or while a controller process is active.

## Next steps

- Review the private [`go1_info`](https://github.com/DyCo-AI/go1_info)
  repository with its maintainer before using the legacy ROS 1 stack.
- Before commanding motion, add a reviewed Go1 runbook that identifies the
  active command source, remote intervention procedure, bounded test, and stop
  criteria for Wobby's current firmware.
