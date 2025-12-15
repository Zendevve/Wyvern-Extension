# 🐉 Wyvern Drive

**Free, unlimited cloud storage using Discord as a backend.**

Wyvern Drive is a web-based file manager that stores your files securely in Discord channels through webhook attachments. This repository contains the browser extension required for the web app to function.

## 🌐 Use Wyvern Drive

**[Open Wyvern Drive →](https://wyverndrive.netlify.app)**

## 📦 Extension Installation

The extension is required to download files from Discord's CDN (bypasses CORS restrictions).

### Chrome / Edge / Brave (Chromium-based browsers)

1. Download the latest release: **[wyvern-extension.zip](https://github.com/Zendevve/wyvern-extension/releases/latest)**
2. Extract the ZIP file
3. Open `chrome://extensions` (or `edge://extensions` for Edge)
4. Enable **Developer mode** (toggle in top-right)
5. Click **Load unpacked**
6. Select the extracted folder
7. Done! The 🐉 icon should appear in your toolbar

### Firefox (Coming Soon)

Firefox support is planned for a future release.

## ✨ Features

- **Unlimited Storage** - Store as many files as you want using Discord
- **End-to-End Encryption** - Optional AES-256-GCM encryption for sensitive files
- **Photo Timeline** - Google Photos-like gallery view with date grouping
- **Offline Support** - Access your file list even without internet
- **File Sharing** - Generate shareable links for files
- **Multiple Webhooks** - Spread storage across multiple Discord channels
- **PWA Support** - Install as a standalone app on desktop/mobile

## 🔒 Privacy & Security

- **Your files, your webhooks** - We don't store your webhook URLs on our servers
- **Client-side encryption** - Encryption happens in your browser, we never see your keys
- **Open source extension** - Review the code yourself

<details>
<summary><b>What data does the extension access?</b></summary>

The extension only:
- Communicates with `cdn.discordapp.com` and `discord.com` to fetch your files
- Listens for download requests from the Wyvern Drive web app

It does NOT:
- Track your browsing
- Access any other websites
- Send data to third parties
- Store any personal information

</details>

## 📝 Changelog

See [CHANGELOG.md](./CHANGELOG.md) for version history and feature updates.

## 🤝 Support the Project

If you find Wyvern Drive useful, consider:
- ⭐ Starring this repository
- 🐛 Reporting bugs via [Issues](https://github.com/Zendevve/wyvern-extension/issues)
- 💖 [Sponsoring on GitHub](https://github.com/sponsors/Zendevve)

## 📄 License

The browser extension is released under the [MIT License](./LICENSE).

---

<p align="center">
  Made with 💜 by <a href="https://github.com/Zendevve">Zendevve</a>
</p>
