import { lazy, Suspense, useEffect, useRef, useState } from 'react'

const Footer = lazy(() => import('./Footer'))

export default function DeferredFooter() {
  const markerRef = useRef(null)
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    const marker = markerRef.current
    if (!marker) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px' },
    )

    observer.observe(marker)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={markerRef} className="min-h-[320px] bg-[#0d0d1a]">
      {shouldRender ? (
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      ) : null}
    </div>
  )
}
