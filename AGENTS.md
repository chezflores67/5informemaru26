# Base44 Dev Environment

## What this is
A static single-page PWA ("5to Informe Chihuahua 2025") — one `index.html`
(~240 KB, self-contained HTML/CSS/JS), a `manifest.json`, a `sw.js` service
worker, and `logochico.png`. No backend, no build step, no package manager.

## Running it
`docker compose -f docker-compose.base44.yml up -d` serves the repo root via
nginx:alpine on host port 3000. The source is bind-mounted read-only, so edits
to `index.html` (or any file) appear on reload — call `reload_preview` after
edits since nginx has no live-reload watcher.

## Verification
`curl -s http://localhost:3000/ | head` should return the `<!DOCTYPE html>`
of the informe page.

## Notes
- `index.html` loads Chart.js from a CDN (`cdnjs.cloudflare.com`) — the
  preview needs network access for charts to render.
- `manual_app_chihuahua.pdf` is linked for download but is not present in the
  repo; the link will 404 until that file is added.
- No secrets or external credentials are required.
