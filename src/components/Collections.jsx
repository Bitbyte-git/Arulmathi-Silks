import { useEffect, useMemo, useRef, useState } from 'react'

const collections = [
  {
    name: 'சைலா பட்டு',
    desc: 'Floral vine and peacock-inspired silks for elegant celebrations.',
    img: '/saila-pattu/SP-SN-0101-3.png',
    fallbackImg: '/saila-pattu/SP-Blue-2.png',
    href: '/saila-pattu',
  },
  {
    name: 'ஆஞ்சலி பட்டு',
    desc: 'Geometric kattam silk designs with structured festive character.',
    img: '/aanchali-pattu/SP-Green-1.png',
    href: '/Aanchali-pattu',
  },
  {
    name: 'வைபவ பட்டு',
    desc: 'Grand bridal and muhurtham silks for auspicious moments.',
    img: '/vaibhava-pattu/VB-TM-0101-1.png',
    fallbackImg: '/vaibhava-pattu/VP-TM-Red1.png',
    href: '/vaibhava-pattu',
  },
  {
    name: 'நூலிசை பட்டு',
    desc: 'Thread-inspired woven silks with refined festive texture.',
    img: '/noolisai-pattu/NP-NK-1.png',
    href: '/noolisai-pattu',
  },
  {
    name: 'செழிநூல் பட்டு',
    desc: 'Jewel-toned silk sarees with rich heritage motifs.',
    img: '/sezhinool-pattu/SP-MV-Blue4.png',
    href: '/sezhinool-pattu',
  },
  {
    name: 'எழில் பட்டு',
    desc: 'Graceful heritage silks with soft festive drape appeal.',
    img: '/ezhil-pattu/EZ-TT-0101-1.png',
    fallbackImg: '/ezhil-pattu/EP-TT-1.png',
    href: '/ezhil-pattu',
  },
  {
    name: 'கைத்திரை பட்டு',
    desc: 'Nature-inspired silk sarees with lotus and vine motifs.',
    img: '/kaithirai-pattu/KP-PP-2.png',
    href: '/kaithirai-pattu',
  },
]

export default function Collections() {
  const scrollerRef = useRef(null)
  const animationRef = useRef(null)
  const lastFrameRef = useRef(null)
  const resumeTimerRef = useRef(null)
  const scrollRemainderRef = useRef(0)
  const isPausedRef = useRef(false)
  const [isPaused, setIsPaused] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  const carouselItems = useMemo(() => [...collections, ...collections], [])

  const updatePaused = (value) => {
    isPausedRef.current = value
    setIsPaused(value)
  }

  useEffect(() => {
    const scroller = scrollerRef.current
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isMobileViewport = window.matchMedia('(max-width: 767px)').matches

    // detect touch/hover capability to disable hover effects on touch devices
    const hoverQuery = window.matchMedia('(hover: none)')
    const updateIsTouch = () => setIsTouchDevice(hoverQuery.matches)
    updateIsTouch()
    hoverQuery.addEventListener?.('change', updateIsTouch)

    if (!scroller || prefersReducedMotion || isMobileViewport || hoverQuery.matches) {
      hoverQuery.removeEventListener?.('change', updateIsTouch)
      return undefined
    }

    const speed = 0.035

    // pause auto-scroll when page is hidden to avoid jumps when user returns
    const onVisibility = () => {
      if (document.hidden) {
        updatePaused(true)
      } else {
        // resume after a short delay so layout settles
        if (resumeTimerRef.current) window.clearTimeout(resumeTimerRef.current)
        resumeTimerRef.current = window.setTimeout(() => updatePaused(false), 500)
      }
    }
    document.addEventListener('visibilitychange', onVisibility)

    const animate = (timestamp) => {
      if (lastFrameRef.current === null) {
        lastFrameRef.current = timestamp
      }

      const delta = Math.min(timestamp - lastFrameRef.current, 32)
      lastFrameRef.current = timestamp

      if (!isPausedRef.current) {
        const loopPoint = scroller.scrollWidth / 2
        const movement = delta * speed + scrollRemainderRef.current

        scroller.scrollLeft += movement
        scrollRemainderRef.current = 0

        if (scroller.scrollLeft >= loopPoint) {
          scroller.scrollLeft -= loopPoint
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      document.removeEventListener('visibilitychange', onVisibility)
      if (resumeTimerRef.current) {
        window.clearTimeout(resumeTimerRef.current)
      }
      lastFrameRef.current = null
      scrollRemainderRef.current = 0
      hoverQuery.removeEventListener?.('change', updateIsTouch)
    }
  }, [])

  const scrollByCard = (direction) => {
    const scroller = scrollerRef.current

    if (!scroller) {
      return
    }

    const firstCard = scroller.querySelector('[data-collection-card]')
    const cardWidth = firstCard?.getBoundingClientRect().width || 280
    const gap = parseFloat(window.getComputedStyle(scroller).columnGap || '16') || 16
    const scrollDistance = cardWidth + gap
    const loopPoint = scroller.scrollWidth / 2

    if (direction < 0 && scroller.scrollLeft <= scrollDistance) {
      scroller.scrollLeft += loopPoint
    }

    if (direction > 0 && scroller.scrollLeft >= loopPoint - scrollDistance) {
      scroller.scrollLeft -= loopPoint
    }

    updatePaused(true)
    scroller.scrollBy({ left: direction * scrollDistance, behavior: 'smooth' })

    if (resumeTimerRef.current) {
      window.clearTimeout(resumeTimerRef.current)
    }

    resumeTimerRef.current = window.setTimeout(() => updatePaused(false), 1100)
  }

  const showPrevious = () => scrollByCard(-1)
  const showNext = () => scrollByCard(1)

  return (
    <section id="collections" className="section-reveal relative bg-[#13121f] px-5 py-12 sm:px-8 lg:px-16 lg:py-16 flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12 rounded-t-3xl z-10">

      {/* Left text */}
      <div className="flex-shrink-0 w-full lg:w-72">
        <p className="font-sans text-[13px] tracking-[3px] text-[#c9933a] font-semibold uppercase mb-3">
          CURATED DRAPES
        </p>
        <h2 className="collections-section-title font-serif text-[34px] sm:text-[42px] lg:text-[44px] font-normal leading-[1.08] text-white mb-4">
          Signature<br />Silk Collections
        </h2>
        <p className="collections-section-copy font-sans text-[14px] leading-[1.75] text-white/70 font-light mb-7 max-w-[300px]">
          Handpicked sarees for weddings, poojas, festive gifting, and graceful everyday wear.
        </p>
        <div className="flex gap-2.5">
          <button
            type="button"
            aria-label="Show previous collection"
            onClick={showPrevious}
            className="glow-round w-9 h-9 rounded-full border border-white/25 flex items-center justify-center text-[13px] text-white/70 hover:bg-[#c9933a] hover:border-[#c9933a] hover:text-white transition-all duration-200"
          >
            <i className="fas fa-arrow-left" />
          </button>
          <button
            type="button"
            aria-label="Show next collection"
            onClick={showNext}
            className="glow-round w-9 h-9 rounded-full bg-[#c9933a] border border-[#c9933a] flex items-center justify-center text-[13px] text-white hover:bg-[#b8822e] transition-all duration-200"
          >
            <i className="fas fa-arrow-right" />
          </button>
        </div>
      </div>

      {/* Smooth auto-scroll cards */}
      <div className="collections-carousel relative w-full flex-1 overflow-hidden">
        <div
          ref={scrollerRef}
          className="collections-scroll flex gap-4 overflow-x-auto py-1 pr-12"
          onMouseEnter={() => !isTouchDevice && updatePaused(true)}
          onMouseLeave={() => !isTouchDevice && updatePaused(false)}
          onFocus={() => updatePaused(true)}
          onBlur={() => updatePaused(false)}
          onPointerDown={() => {
            updatePaused(true)
            if (resumeTimerRef.current) window.clearTimeout(resumeTimerRef.current)
          }}
          onPointerUp={() => {
            if (resumeTimerRef.current) window.clearTimeout(resumeTimerRef.current)
            resumeTimerRef.current = window.setTimeout(() => updatePaused(false), 1400)
          }}
          onTouchStart={() => {
            updatePaused(true)
            if (resumeTimerRef.current) window.clearTimeout(resumeTimerRef.current)
          }}
          onTouchEnd={() => {
            if (resumeTimerRef.current) window.clearTimeout(resumeTimerRef.current)
            resumeTimerRef.current = window.setTimeout(() => updatePaused(false), 1400)
          }}
        >
          {carouselItems.map((col, index) => (
            <div
              key={`${col.name}-${index}`}
              data-collection-card
              className={`collection-card glow-card ${isTouchDevice ? '' : 'hover-lift'} w-[78vw] min-w-[78vw] sm:w-[320px] sm:min-w-[320px] lg:w-[292px] lg:min-w-[292px] xl:w-[306px] xl:min-w-[306px] rounded-[15px] overflow-hidden cursor-pointer group bg-white`}
              style={{ animationDelay: `${(index % collections.length) * 130}ms` }}
            >
              <a
                href={col.href}
                aria-label={`View ${col.name} collection`}
                className="collection-card-media block overflow-hidden h-[330px] sm:h-[380px] lg:h-[390px] bg-[#eee8df]"
              >
                <img
                  src={col.img}
                  alt={col.name}
                  loading={index < collections.length ? 'eager' : 'lazy'}
                  decoding="async"
                  onError={(event) => {
                    if (col.fallbackImg && event.currentTarget.src !== new URL(col.fallbackImg, window.location.origin).href) {
                      event.currentTarget.src = col.fallbackImg
                    }
                  }}
                  className="collection-card-image w-full h-full object-cover object-top"
                />
              </a>
              <div className="bg-white px-6 py-5">
                <h3 className="collection-card-title tamil-collection-name font-serif text-[19px] sm:text-[21px] font-normal leading-tight text-[#1a1a2e] mb-3">
                  {col.name}
                </h3>
                <p className="collection-card-copy mb-5 font-sans text-[13px] leading-[1.6] text-gray-500">
                  {col.desc}
                </p>
                <a
                  href={col.href}
                  className="collection-card-link font-sans text-[10px] font-bold tracking-[1.6px] text-gray-500 flex items-center gap-3 hover:text-[#c9933a] transition-colors duration-200"
                >
                  VIEW COLLECTION <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Next scroll button */}
      <button
        type="button"
        aria-label="Show next collection"
        onClick={showNext}
        className="glow-round hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0d0d1a] text-white items-center justify-center text-sm shadow-lg hover:bg-[#c9933a] transition-colors duration-200 z-10"
      >
        <i className="fas fa-arrow-right" />
      </button>
    </section>
  )
}
