import { $ } from './dom-utils'

// Ce fichier est généré au build par le plugin parcel-plugin-sw-cache

const path = window.location.pathname //window.location.pathname returns the path and filename of the current page
const swName = `${window.location}sw.js` // The window.location object can be used to get the current page address (URL) and to redirect the browser to a new page.

window.isUpdateAvailable = new Promise(function (resolve, reject) {
  // lazy way of disabling service workers while developing
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register(swName, { scope: path })
      .then((registration) => {
        registration.onupdatefound = () => {
          const installingWorker = registration.installing
          installingWorker.onstatechange = () => {
            switch (installingWorker.state) {
              case 'installed':
                if (navigator.serviceWorker.controller) {
                  // new update available
                  resolve(true)
                } else {
                  // no update available
                  resolve(false)
                }
                break
            }
          }
        }
      })
      .catch((err) => console.error('[SW ERROR]', err)) // eslint-disable-line no-console
  }
})

window.isUpdateAvailable.then((isAvailable) => {
  $('#reload-btn').addEventListener('click', () => window.location.reload())
  $('#update-alert').classList.remove('d-none')
})
