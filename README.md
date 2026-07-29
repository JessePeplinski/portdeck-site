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

## Sparkle beta appcast

The application release workflow generates a signed `appcast-beta.xml` from the final verified, Developer ID-signed and notarized GitHub DMG. Publish that file at:

`https://portdeck.vercel.app/appcast-beta.xml`

The feed and GitHub release are one release unit: do not publish an appcast item until its referenced notarized ZIP exists, and do not change feed signatures or enclosure URLs by hand. Beta.13 is the first Sparkle-enabled build; beta.14 is the first required in-place update proof.

PortDeck Site is available under the [MIT License](LICENSE).
