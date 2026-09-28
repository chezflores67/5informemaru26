# Base44 Dev Environment

## Project Overview
Static HTML PWA — a single `index.html` (inline CSS + JS, Chart.js via CDN) with `manifest.json`, `sw.js`, and `logochico.png`. No build system, no backend, no database.

## Setup
- Served via **Vite** dev server (`vite.config.js`, `package.json`) on port 3000 with live reload.
- `docker-compose.base44.yml` runs `node:22-slim`, installs vite on startup, and bind-mounts the repo.
- No secrets required.

## Verification
- `docker compose -f docker-compose.base44.yml up -d --build`
- Curl `http://localhost:3000/` — should return the HTML page.
- Edits to `index.html` hot-reload in the preview automatically.

## Notes
- The repo has no original build tooling; `package.json` and `vite.config.js` were added by Base44 to provide a dev server.
- `allowedHosts: true` in vite config + `__VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS` env var handle the preview proxy host.
