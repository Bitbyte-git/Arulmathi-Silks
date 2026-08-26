import { useEffect, useState } from 'react'

const DEFERRED_SITE_LOAD_EVENT = 'arulmathi:deferred-site-load'
const DEFAULT_DELAY = 8000

let hasReleasedDeferredLoad = false

const releaseDeferredLoad = () => {
  if (hasReleasedDeferredLoad) return

  hasReleasedDeferredLoad = true
  window.dispatchEvent(new Event(DEFERRED_SITE_LOAD_EVENT))
}

export default function useDeferredSiteLoad(delay = DEFAULT_DELAY) {
  const [canLoadDeferredContent, setCanLoadDeferredContent] = useState(hasReleasedDeferredLoad)

  useEffect(() => {
    if (hasReleasedDeferredLoad) {
      setCanLoadDeferredContent(true)
      return undefined
    }

    const release = () => releaseDeferredLoad()
    const markReady = () => setCanLoadDeferredContent(true)
    const timeoutId = window.setTimeout(release, delay)
    const events = ['scroll', 'wheel', 'touchstart', 'pointerdown', 'keydown']

    events.forEach((eventName) => {
      window.addEventListener(eventName, release, { once: true, passive: true })
    })
    window.addEventListener(DEFERRED_SITE_LOAD_EVENT, markReady, { once: true })

    return () => {
      window.clearTimeout(timeoutId)
      events.forEach((eventName) => {
        window.removeEventListener(eventName, release)
      })
      window.removeEventListener(DEFERRED_SITE_LOAD_EVENT, markReady)
    }
  }, [delay])

  return canLoadDeferredContent
}

