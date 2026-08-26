import { useEffect, useRef, useState } from 'react'

export default function DeferredImage({ src, alt, ...props }) {
  const imageRef = useRef(null)
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    const image = imageRef.current
    if (!image) return undefined

    if (!('IntersectionObserver' in window)) {
      setShouldLoad(true)
      return undefined
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShouldLoad(true)
        observer.disconnect()
      }
    })

    observer.observe(image)
    return () => observer.disconnect()
  }, [])

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

