# 🐉 Wyvern Drive Extension

[![Chrome Web Store](https://img.shields.io/badge/Chrome-Install-green?logo=googlechrome)](https://github.com/Zendevve/wyvern-extension/releases/latest)
[![License](https://img.shields.io/badge/license-MIT-blue)](./LICENSE)
[![Version](https://img.shields.io/badge/version-1.0.1-orange)](./CHANGELOG.md)

**The browser extension for [Wyvern Drive](https://wyverndrive.netlify.app) — free, unlimited cloud storage powered by Discord.**

This lightweight extension enables Wyvern Drive to download files from Discord's CDN by bypassing CORS restrictions. It's **required** for the web app to function properly.

---

## 🚀 Quick Install

### One-Click Installation (Recommended)

1. **[Download Latest Release →](https://github.com/Zendevve/wyvern-extension/releases/latest)**
2. Extract the ZIP file
3. Open **`chrome://extensions`** in Chrome (or `edge://extensions` in Edge)
4. Enable **Developer mode** (toggle in top-right corner)
5. Click **Load unpacked** button
6. Select the extracted folder
7. ✅ Done! The 🐉 icon should appear in your toolbar

---

## 📋 Table of Contents

- [Why This Extension?](#-why-this-extension)
- [Features](#-features)
- [Browser Support](#-browser-support)
- [Installation Guide](#-installation-guide)
- [Privacy & Security](#-privacy--security)
- [Troubleshooting](#-troubleshooting)
- [FAQ](#-faq)
- [Support](#-support)
- [License](#-license)

---

## 🤔 Why This Extension?

### The Problem

Modern browsers block cross-origin requests (CORS) for security. When Wyvern Drive tries to download your files from Discord's CDN, the browser says:

> ❌ **"Blocked by CORS policy"**

### The Solution

This extension acts as a **secure bridge** between Wyvern Drive and Discord, bypassing CORS restrictions **only** for Discord CDN domains.

```
Wyvern Drive  →  Extension  →  Discord CDN  →  Your Files
  (Web App)      (Bridge)        (Storage)
```

**Without Extension:** ❌ Downloads fail
**With Extension:** ✅ Downloads work perfectly

---

## ✨ Features

### Core Functionality
- 🔓 **CORS Bypass** — Downloads from Discord CDN without browser restrictions
- 📨 **Message Passing** — Secure communication with Wyvern Drive web app
- ⚡ **Zero Latency** — Operates instantly in the background
- 🔒 **Privacy First** — No tracking, no analytics, no data collection

### Security
- ✅ **Minimal Permissions** — Only accesses Discord domains
- ✅ **Open Source** — Review every line of code yourself
- ✅ **No Server** — Everything runs locally in your browser
- ✅ **No Storage** — Doesn't save any data

---

## 🌐 Browser Support

| Browser | Status | Notes |
|---------|--------|-------|
| **Chrome** | ✅ Supported | Recommended |
| **Edge** | ✅ Supported | Chromium-based |
| **Brave** | ✅ Supported | Chromium-based |
| **Opera** | ✅ Supported | Chromium-based |
| **Firefox** | ⏳ Planned | Coming soon |
| **Safari** | ❌ Not Supported | No Manifest V3 support |

> **Tested on:** Chrome 120+, Edge 120+

---

## 📦 Installation Guide

### Method 1: From GitHub Releases (Recommended)

**Step-by-step:**

1. Visit the **[Releases page](https://github.com/Zendevve/wyvern-extension/releases/latest)**

2. Download **`wyvern-extension-v1.0.1.zip`**

3. Extract the ZIP file to a permanent location
   ⚠️ **Don't delete this folder** — Chrome needs it to stay installed

4. Open your browser's extension page:
   - Chrome: `chrome://extensions`
   - Edge: `edge://extensions`
   - Brave: `brave://extensions`

5. **Enable Developer Mode:**
   - Look for the toggle switch in the top-right corner
   - Turn it **ON**

6. Click **"Load unpacked"** button (top-left)

7. Navigate to the extracted folder and click **"Select Folder"**

8. ✅ **Success!** The extension icon (🐉) should appear in your toolbar

### Method 2: From Source Code

```bash
# Clone this repository
git clone https://github.com/Zendevve/wyvern-extension.git
cd wyvern-extension

# Load the folder in Chrome as explained above
```

---

## 🔒 Privacy & Security

### What the Extension Can Access

✅ **Allowed Domains:**
- `cdn.discordapp.com` — Download your files
- `discord.com` — Webhook operations
- `localhost` — Local development (optional)

### What the Extension CANNOT Do

❌ **Blocked:**
- Access other websites (Google, Facebook, etc.)
- Read your browsing history
- Track your activity
- Send data to third parties
- Access your keyboard or webcam

### Open Source Transparency

Every line of code is public. Review it yourself:
```
wyvern-extension/
├── manifest.json   # Permissions declared here
├── background.js   # Main logic (70 lines)
└── content.js      # Web app bridge (40 lines)
```

**Total code:** ~110 lines. No obfuscation, no minification.

### Permissions Explained

| Permission | Why We Need It |
|------------|---------------|
| `host_permissions` | Access Discord CDN to download your files |
| `webRequest` | Intercept download requests from web app |
| `background` | Run download logic in the background |

**We do NOT request:**
- ❌ Tabs permission (can't see your browsing)
- ❌ Storage permission (doesn't save data)
- ❌ Cookies permission (can't track you)

---

## 🔧 Troubleshooting

### Extension Icon Not Showing?

1. Check if extension is enabled in `chrome://extensions`
2. Look for errors in extension details
3. Try reloading the extension (circular arrow button)
4. Restart Chrome

### Downloads Still Failing?

1. **Check extension is installed:** Look for 🐉 icon in toolbar
2. **Verify permissions:** Extension should have access to Discord domains
3. **Clear cache:** Sometimes helps with stale CORS policies
4. **Check Discord webhook:** Ensure it's valid and not rate-limited

### Extension Shows "Errors"?

1. Open `chrome://extensions`
2. Click "Details" on Wyvern Drive extension
3. Click "Errors" button to see details
4. [Open an issue](https://github.com/Zendevve/wyvern-extension/issues) with error details

### Updates Not Taking Effect?

1. Go to `chrome://extensions`
2. Find Wyvern Drive extension
3. Click the **reload icon** (🔄)
4. Refresh the Wyvern Drive web app

---

## ❓ FAQ

<details>
<summary><b>Is this extension safe to use?</b></summary>

Yes! The extension is:
- ✅ Open source (review the code)
- ✅ Minimal permissions (only Discord domains)
- ✅ No tracking or analytics
- ✅ No server-side components
- ✅ Locally operated

</details>

<details>
<summary><b>Why isn't this on the Chrome Web Store?</b></summary>

Submitting to the Web Store requires:
- $5 one-time developer fee
- Review process (7-14 days)
- Limitations on CORS bypass extensions

We prioritize open-source distribution for transparency. A Web Store listing may come in the future.

</details>

<details>
<summary><b>Can I use Wyvern Drive without the extension?</b></summary>

No. The extension is **required** for downloads due to browser CORS restrictions. However, you can:
- ✅ Upload files without the extension
- ✅ Browse your files
- ❌ Download files (blocked by CORS)

</details>

<details>
<summary><b>Does the extension work on mobile?</b></summary>

No. Mobile browsers (Chrome, Safari) don't support browser extensions. We recommend using the **Wyvern Drive PWA** (Progressive Web App) for mobile access.

</details>

<details>
<summary><b>Will this extension affect my other web browsing?</b></summary>

No. The extension **only** activates when:
1. You visit `wyverndrive.netlify.app`
2. A download request is made to Discord CDN

It's completely dormant otherwise.

</details>

<details>
<summary><b>How do I uninstall?</b></summary>

1. Go to `chrome://extensions`
2. Find "Wyvern Drive"
3. Click "Remove"
4. Confirm deletion

Your files in Discord are **not** affected — only the browser extension is removed.

</details>

---

## 🤝 Support

### Need Help?

- 📖 **[Web App Documentation](https://github.com/Zendevve/Wyvern-Drive/tree/master/docs)**
- 🐛 **[Report a Bug](https://github.com/Zendevve/wyvern-extension/issues/new?template=bug_report.md)**
- 💡 **[Request a Feature](https://github.com/Zendevve/wyvern-extension/issues/new?template=feature_request.md)**

### Community

- ⭐ **Star this repo** if you find it useful
- 💬 **Join discussions** in [Issues](https://github.com/Zendevve/wyvern-extension/issues)
- 🔀 **Fork and contribute** — PRs welcome!

### Sponsorship

If Wyvern Drive saves you money on cloud storage, consider:
- 💖 **[Sponsor on GitHub](https://github.com/sponsors/Zendevve)**
- ☕ **[Buy me a coffee](https://buymeacoffee.com/zendevve)**

Every contribution helps maintain and improve the project!

---

## 📝 Changelog

See [CHANGELOG.md](./CHANGELOG.md) for version history and updates.

**Latest Release:** `v1.0.1` — [View Release Notes →](https://github.com/Zendevve/wyvern-extension/releases/latest)

---

## 📄 License

Released under the [MIT License](./LICENSE).

**You are free to:**
- ✅ Use for personal or commercial projects
- ✅ Modify the code
- ✅ Distribute copies
- ✅ Create derivative works

**Conditions:**
- Include the original license and copyright notice

---

## 🔗 Related Projects

- **[Wyvern Drive Web App](https://github.com/Zendevve/Wyvern-Drive)** — Main application (private repo)
- **[Wyvern Drive Live](https://wyverndrive.netlify.app)** — Use the app now

---

<p align="center">
  <strong>Made with 💜 by <a href="https://github.com/Zendevve">Zendevve</a></strong><br>
  <sub>Free forever. Open source. Your storage, your control.</sub>
</p>

<p align="center">
  <a href="https://wyverndrive.netlify.app">
    <img src="https://img.shields.io/badge/Try%20Wyvern%20Drive-Live%20Demo-blueviolet?style=for-the-badge" alt="Try Wyvern Drive">
  </a>
</p>
