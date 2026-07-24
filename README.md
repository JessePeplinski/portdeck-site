# PortDeck Site

This repository contains the static marketing site for [PortDeck](https://github.com/JessePeplinski/portdeck), a native macOS menu-bar command center for local development services and read-only deployment-provider health.

The CLI/helper, Mac app, product documentation, release scripts, tags, and downloadable assets live in the main [`portdeck`](https://github.com/JessePeplinski/portdeck) repository.

## Local development

Requires Node.js 22.12 or newer and npm.

```bash
npm ci
npm run dev
```

The local site is served at `http://127.0.0.1:4321`.

## Verify the static build

```bash
npm ci
npm run build
```

Generated output is written to `dist/` and is not committed.

PortDeck Site is available under the [MIT License](LICENSE).
