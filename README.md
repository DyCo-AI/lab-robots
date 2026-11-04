# DyCo-AI Lab Robots

The public robot handbook for the **DyCo-AI Lab at Clemson University**.

**[Open the handbook](https://dyco-ai.github.io/lab-robots/)** ·
[Start here](docs/getting-started.md) · [Go2](docs/go2/index.md) ·
[G1](docs/g1/index.md) · [Contribute](CONTRIBUTING.md)

This repository owns onboarding, route selection, and links to the maintained
robot runbooks. Executable examples and detailed installation instructions live
in independent repositories:

Meet **Wobby (Go1)**, **Widget (Go2 EDU)**, and **Evan Wobbier (G1)**.

| Robot / path | Code and detailed runbooks |
| --- | --- |
| Go2 Ethernet / Jetson / ROS 2 | [go2-ros](https://github.com/DyCo-AI/go2-ros) |
| Go2 Windows 11 / Wi-Fi / Basic WebRTC | [go2-webRTC](https://github.com/DyCo-AI/go2-webRTC) |
| G1 Ubuntu / ROS 2 / diagnostics | [g1-ros2](https://github.com/DyCo-AI/g1-ros2) |
| Go1 | [go1_info](https://github.com/DyCo-AI/go1_info) — existing setup notes; requires lab repository access |

## Publishing and local preview

GitHub Pages publishes **main → /docs** using Jekyll. There is no separate
deployment branch or Node build. The site has a responsive sidebar, a page
finder, connection diagrams, and direct links to the source repositories.

With Ruby, Bundler, and the Gemfile dependencies installed:

```bash
bundle install
bundle exec jekyll serve --source docs --baseurl /lab-robots
```

Open `http://127.0.0.1:4000/lab-robots/`. For a build only, use
`bundle exec jekyll build --source docs`.

No passwords, AES keys, account recovery material, or full experiment recordings
belong in this public repository. Request credentials privately from the lab
maintainer. Proton Pass migration is planned; the shared vault is not yet live.

Developed by [Sriram Krishnamoorthy](https://github.com/sriram-2502) for lab
onboarding and handover. Lab-authored material uses the existing [MIT license](LICENSE).
See [sources](docs/sources.md) for linked media and upstream attribution.
