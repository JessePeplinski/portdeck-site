export interface BetaRelease {
  version: string;
  publishedAt: string;
  summary: string;
  changes: string[];
  releaseUrl: string;
}

const releaseUrl = (version: string) =>
  `https://github.com/JessePeplinski/portdeck/releases/tag/${version}`;

export const betaReleases: BetaRelease[] = [
  {
    version: "v0.1.0-beta.12",
    publishedAt: "2026-07-28T16:32:13Z",
    summary: "Improved PortDeck icon legibility across macOS.",
    changes: [
      "Added a solid black rounded-square background behind the white PortDeck server mark.",
      "Improved contrast in Spotlight, Finder, Applications, and the drag-to-Applications DMG.",
      "Preserved the existing PortDeck mark and its readability at small sizes."
    ],
    releaseUrl: releaseUrl("v0.1.0-beta.12")
  },
  {
    version: "v0.1.0-beta.11",
    publishedAt: "2026-07-28T15:30:42Z",
    summary: "Sharpened PortDeck’s day-to-day menu-bar workflow.",
    changes: [
      "Added keyboard shortcuts for faster navigation and common actions.",
      "Simplified the Local view summary and status header.",
      "Added refresh controls that update providers when selected.",
      "Refined the header copy and visual treatment.",
      "Included the Hostinger read-only provider integration introduced after beta.9."
    ],
    releaseUrl: releaseUrl("v0.1.0-beta.11")
  },
  {
    version: "v0.1.0-beta.10",
    publishedAt: "2026-07-27T13:51:38Z",
    summary: "Added Hostinger as a first-class read-only provider.",
    changes: [
      "Used the installed official Hostinger CLI to show hosted website configuration state.",
      "Added handling for a missing CLI, authentication, rate limits, pagination, search, and retained snapshots.",
      "Kept the Hostinger runtime and credentials outside the PortDeck bundle."
    ],
    releaseUrl: releaseUrl("v0.1.0-beta.10")
  },
  {
    version: "v0.1.0-beta.9",
    publishedAt: "2026-07-27T12:02:02Z",
    summary: "Added one-click startup registration.",
    changes: [
      "Made Add to Startup register the installed PortDeck app directly with macOS.",
      "Fell back to Login Items only when direct registration failed.",
      "Isolated or cleaned up LaunchServices registrations for development and verification bundles."
    ],
    releaseUrl: releaseUrl("v0.1.0-beta.9")
  },
  {
    version: "v0.1.0-beta.8",
    publishedAt: "2026-07-27T11:36:16Z",
    summary: "Fixed launch-at-login setup when automatic app registration is unavailable.",
    changes: [
      "Opened macOS Login Items directly when PortDeck could not register itself automatically.",
      "Explained how to add PortDeck from the Applications folder."
    ],
    releaseUrl: releaseUrl("v0.1.0-beta.8")
  },
  {
    version: "v0.1.0-beta.7",
    publishedAt: "2026-07-27T11:13:37Z",
    summary: "Added native settings and launch-at-login controls.",
    changes: [
      "Added a native PortDeck Settings window.",
      "Added a signed-app launch-at-login toggle backed by macOS Login Items.",
      "Moved the likely-system-listeners preference out of the menu-bar footer.",
      "Removed the low-value Diagnostics and status JSON controls from the footer.",
      "Made Settings reliably appear in front of other apps."
    ],
    releaseUrl: releaseUrl("v0.1.0-beta.7")
  },
  {
    version: "v0.1.0-beta.6",
    publishedAt: "2026-07-24T18:59:09Z",
    summary: "Focused PortDeck on automatic discovery and read-only deployment health.",
    changes: [
      "Removed saved project profiles and the Projects tab.",
      "Removed project start, restart, port-switching, and saved lifecycle state.",
      "Kept automatic local project and worktree discovery with confirmed stop controls.",
      "Kept read-only deployment health across supported providers.",
      "Advanced the local status contract to schema 0.2."
    ],
    releaseUrl: releaseUrl("v0.1.0-beta.6")
  },
  {
    version: "v0.1.0-beta.5",
    publishedAt: "2026-07-24T14:35:50Z",
    summary: "Added a standard drag-to-Applications installer.",
    changes: [
      "Added a signed, notarized, and stapled DMG with PortDeck.app and an Applications shortcut.",
      "Kept the ZIP for Homebrew and fallback installs, with the same verified app in both containers.",
      "Restored native-app footer links for Jesse Peplinski, Pep Tech Studios, X, and Twitch.",
      "Added DMG checksum, Gatekeeper, quarantine, mount, content, and app-lifecycle verification."
    ],
    releaseUrl: releaseUrl("v0.1.0-beta.5")
  },
  {
    version: "v0.1.0-beta.4",
    publishedAt: "2026-07-24T13:48:40Z",
    summary: "Gave the app and marketing site one consistent visual identity.",
    changes: [
      "Replaced the terminal and window-stack icons with the final single-server mark.",
      "Applied the mark to the menu bar, popover header, Finder app bundle, favicon, and marketing site.",
      "Tuned the compact menu-bar rendering for stronger borders and better status-indicator spacing."
    ],
    releaseUrl: releaseUrl("v0.1.0-beta.4")
  },
  {
    version: "v0.1.0-beta.3",
    publishedAt: "2026-07-24T09:20:01Z",
    summary: "Cut the installed app from about 978 MiB to about 97 MiB.",
    changes: [
      "Resolved Convex, Supabase, Cloudflare Wrangler, Railway, Fly.io, and Netlify CLIs from existing installations instead of bundling them.",
      "Added in-app setup guidance for missing or unsupported provider CLIs.",
      "Kept Local and Projects self-contained with the bundled PortDeck helper and Node runtime.",
      "Stripped release binaries and added 110 MiB app and 45 MB ZIP size limits."
    ],
    releaseUrl: releaseUrl("v0.1.0-beta.3")
  },
  {
    version: "v0.1.0-beta.2",
    publishedAt: "2026-07-21T23:45:06Z",
    summary: "Fixed Vercel status in Finder-launched packaged builds.",
    changes: [
      "Let the external Vercel CLI resolve Node from its co-installed directory or PortDeck’s bundled runtime fallback.",
      "Refreshed the locked provider dependency tree to address the current sharp security advisory.",
      "Kept provider behavior and read-only boundaries unchanged."
    ],
    releaseUrl: releaseUrl("v0.1.0-beta.2")
  },
  {
    version: "v0.1.0-beta.1",
    publishedAt: "2026-07-21T21:30:40Z",
    summary: "Published the first direct-download PortDeck beta.",
    changes: [
      "Shipped a Developer ID-signed, Apple-notarized, and stapled app for Apple Silicon Macs.",
      "Added a companion SHA-256 checksum for the release ZIP.",
      "Opened public issue reporting for beta feedback."
    ],
    releaseUrl: releaseUrl("v0.1.0-beta.1")
  }
];
