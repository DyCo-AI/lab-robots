---
layout: default
title: "Lab guidelines"
description: "Practical standards for safe, professional, and reproducible robotics work in the DyCo-AI Lab."
---

# Lab guidelines

Good lab work should be safe to run, easy to reproduce, and straightforward for
the next student to continue. Treat the robots, computers, batteries, data, and
shared workspace as research infrastructure rather than personal equipment.

## Track code and data

- Keep all project code under version control. Use a repository in the
  [DyCo-AI GitHub organization](https://github.com/DyCo-AI) whenever possible.
- Track datasets and model artifacts with Hugging Face. Use an approved private
  repository until the data has been reviewed for publication.
- Never commit passwords, tokens, SSH keys, private network details, or large
  datasets to Git.
- Record the robot, operating-system and firmware versions, environment or
  dependency lockfile, code commit, dataset revision, launch command, and known
  limitations for every experiment.
- Document errors and failed trials, not only successful results. A clear
  failure record can save the next researcher days of repeated debugging.

## Make the work reproducible

For robot demos, course projects, and publications:

1. Create a maintained GitHub repository with installation and run instructions.
2. Publish a concise project page with GitHub Pages when the work is ready to
   share.
3. Record a short video, ideally about five minutes, that explains the problem,
   method, setup, result, and limitations in plain language.
4. Link the exact code commit and dataset revision used for each reported result.
5. Include enough configuration and calibration information for another student
   to repeat the experiment.

## Take care of the lab

- Use the lab professionally. Personal projects or unrelated work in the lab are
  discouraged unless they have prior approval.
- Keep tools, remotes, chargers, cables, computers, and robot accessories in
  their labeled locations. Leave the workspace cleaner than you found it.
- Check batteries before a session and recharge them promptly using the approved
  charger and charging area. Follow the manufacturer and lab storage procedure,
  and do not leave charging batteries unattended.
- Do not remove robots, computers, tools, batteries, or other equipment from the
  lab without prior consent from Dr. Umesh Vaidya and the lab managers.
- Report broken, damaged, or missing equipment promptly. Repair it within your
  training and authorization, or seek help and arrange replacement in a timely
  manner. Do not quietly return a damaged system to the shelf.

## Operate robots safely

- Power on Go1 and Go2 only when all four feet are touching the ground on a
  stable, clear surface.
- Power on and operate the G1 humanoid with the approved gantry support in place.
  Inspect the support and attachment points before enabling motion.
- Run every new controller in the lab first. Begin with the lowest-risk test:
  simulation when available, then read-only communication, then a bounded motion
  test at conservative limits.
- Have a second trained person monitor initial experiments with new controllers.
  The observer should know the approved stop and intervention procedure, keep
  people clear, and help isolate power or commands if the robot behaves
  unexpectedly. Do not attempt to catch a falling robot.
- Keep one command source active, maintain a clear test area, secure loose
  cables, and confirm the physical intervention procedure before motion.
- Obtain prior approval from lab leadership and the appropriate department
  contact before moving a robot to the lobby, outdoors, or anywhere outside the
  lab, including for off-road experiments.

## Follow the network policy

As of **August 2026**, Unitree robots are blocked from directly accessing the
Clemson network under current university guidance. Do not attempt to bypass this
restriction.

Develop from a host computer whenever possible. If software must run on an
onboard computer:

1. Confirm its operating system, CPU architecture, ROS version, and available
   storage.
2. Download the required packages and dependencies on an approved host with
   internet access.
3. Verify versions and checksums, then transfer the files over the robot's direct
   Ethernet connection with `scp`.
4. Record exactly what was installed and how to remove or reproduce it.
5. Avoid replacing vendor services or system packages unless the change has been
   reviewed and a recovery path is documented.

## Before leaving

- Stop active controllers and recording processes cleanly.
- Save and label useful data; remove temporary files that consume shared storage.
- Push code and notes while the session is still fresh.
- Return robots to their approved powered-down state and batteries to the
  designated charging or storage area.
- Return every tool, remote, cable, and safety accessory to its labeled location.
- Report anything that is broken, missing, unusually hot, swollen, unstable, or
  otherwise unsafe.

## Contacts

| Role | Contact |
| --- | --- |
| Faculty lead | **Umesh Vaidya** — [uvaidya@clemson.edu](mailto:uvaidya@clemson.edu) |
| Technician Lab Manager | **Austin Breazeale** — [breazea@clemson.edu](mailto:breazea@clemson.edu) |

Ask before guessing when equipment, permissions, or safety procedures are
unclear. Then have fun, build ambitious systems, and leave a trail that makes
the next experiment easier.

Continue to [Go1]({{ '/go1/' | relative_url }}),
[Go2]({{ '/go2/' | relative_url }}), or [G1]({{ '/g1/' | relative_url }}).
