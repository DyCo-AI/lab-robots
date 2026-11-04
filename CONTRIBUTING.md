# Maintaining the handbook

Edit Markdown files under `docs/`. Add navigation entries to
`docs/_data/navigation.yml`; the page finder searches those entries. Use
`{{ '/path/' | relative_url }}` in site links so the
`/lab-robots` project prefix is retained. In Markdown source, use ordinary
relative file links when linking directly on GitHub, or Liquid links for Pages.

1. Check the current robot code repository and vendor guidance.
2. Update the overview here; put executable commands and detailed procedures in
   the robot's code repository to keep one maintained runbook.
3. Identify the host OS, onboard computer, transport, robot variant, and feature
   status. A screenshot or successful build is not hardware acceptance evidence.
4. Build locally and inspect desktop and narrow layouts. Check every changed
   link and any externally hosted image.
5. Push a reviewed change to `main`; check the Pages deployment before sharing it.

Keep large data local. Public examples must be small, reviewed, and free of
credentials. Never copy the local private inventory into this repository.
Preserve existing licenses and credit linked upstream media.
