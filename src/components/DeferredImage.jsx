import { useEffect, useRef, useState } from 'react'

export default function DeferredImage({ src, alt, ...props }) {
  const imageRef = useRef(null)
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    const image = imageRef.current
    if (!image) return undefined

    const loadImage = () => setShouldLoad(true)
    const rect = image.getBoundingClientRect()
    const isAlreadyNearViewport =
      rect.top < window.innerHeight + 320 &&
      rect.bottom > -320 &&
      rect.left < window.innerWidth + 320 &&
      rect.right > -320

    if (isAlreadyNearViewport) {
      loadImage()
      return undefined
    }

    if (!('IntersectionObserver' in window)) {
      loadImage()
      return undefined
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        loadImage()
        observer.disconnect()
      }
    }, { rootMargin: '320px 320px' })

    observer.observe(image)
    const fallbackTimer = window.setTimeout(loadImage, 2500)

    return () => {
      observer.disconnect()
      window.clearTimeout(fallbackTimer)
    }
  }, [src])

  return (
    <img
      ref={imageRef}
      src={shouldLoad ? src : undefined}
      alt={alt}
      loading="lazy"
      decoding="async"
      {...props}
    />
  )
}

