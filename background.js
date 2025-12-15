/**
 * Wyvern Drive Extension - Background Service Worker
 * Handles CORS bypass for Discord attachment downloads
 */

// Track ongoing operations to prevent service worker termination
let activeOperations = 0

// Keep service worker alive during operations
function keepAlive() {
  activeOperations++
  // Chrome keeps service worker alive while there are pending promises
  return () => {
    activeOperations--
  }
}

// Listen for messages from content scripts
chrome.runtime.onMessage.addListener(
  (request, sender, sendResponse) => {
    if (request.type !== 'DOWNLOAD' || !request.url) {
      return false // Ignore unknown messages
    }

    const url = request.url

    // Validate URL is from Discord
    if (!url.includes('discord.com') && !url.includes('discordapp.com')) {
      sendResponse({ error: 'Invalid URL - must be Discord' })
      return true
    }

    // Mark operation as active
    const releaseKeepAlive = keepAlive()

    // Fetch the file and return as data URL
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`)
        }
        return response.blob()
      })
      .then(blob => {
        // Convert blob to data URL for transfer
        return new Promise((resolve, reject) => {
          const reader = new FileReader()
          reader.onloadend = () => resolve(reader.result)
          reader.onerror = () => reject(new Error('Failed to read file'))
          reader.readAsDataURL(blob)
        })
      })
      .then(dataUrl => {
        sendResponse({ data: dataUrl })
      })
      .catch(error => {
        console.error('Wyvern Drive fetch error:', error)
        sendResponse({ error: error.message })
      })
      .finally(() => {
        releaseKeepAlive()
      })

    // Return true to indicate async response
    return true
  }
)

// Log when extension is loaded
console.log('🐉 Wyvern Drive extension loaded')

