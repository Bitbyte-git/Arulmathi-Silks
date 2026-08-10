import { useEffect, useMemo, useRef, useState } from 'react'

const occasions = [
  {
    label: 'BRIDAL',
    img: '/circle5.png',
  },
  {
    label: 'FESTIVE',
    img: '/d3.png',
  },
  {
    label: 'RECEPTION',
    img: '/d1.png',
  },
  {
    label: 'POOJA',
    img: '/d4.png',
  },
  {
    label: 'GIFTING',
    img: '/d5.png',
  },
  {
    label: 'LIGHTWEIGHT',
    img: '/d6.png',
  },
  {
    label: 'DESIGNER',
    img: '/d1.png',
  },
  {
    label: 'ENGAGEMENT',
    img: '/circle1.png',
  },
  {
    label: 'HOUSEWARMING',
    img: '/circle2.png',
  },
  {
    label: 'HALDI',
    img: '/circle3.png',
  },
  {
    label: 'SANGEET',
    img: '/circle4.png',
  },
  {
    label: 'EVERYDAY',
    img: '/circle8.png',
  },
]

export default function Occasions() {
  const scrollerRef = useRef(null)
  const animationRef = useRef(null)
  const lastFrameRef = useRef(null)
  const scrollRemainderRef = useRef(0)
  const [isPaused, setIsPaused] = useState(false)

  const carouselItems = useMemo(() => [...occasions, ...occasions], [])

  useEffect(() => {
    const scroller = scrollerRef.current
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!scroller || prefersReducedMotion) {
      return undefined
    }

    const speed = 0.032

    const animate = (timestamp) => {
      if (lastFrameRef.current === null) {
        lastFrameRef.current = timestamp
      }

      const delta = timestamp - lastFrameRef.current
      lastFrameRef.current = timestamp

      if (!isPaused) {
        const loopPoint = scroller.scrollWidth / 2
        const movement = delta * speed + scrollRemainderRef.current
        const wholePixels = Math.trunc(movement)
        scrollRemainderRef.current = movement - wholePixels

        if (wholePixels !== 0) {
          scroller.scrollLeft += wholePixels
        }

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
      lastFrameRef.current = null
      scrollRemainderRef.current = 0
    }
  }, [isPaused])

  return (
    <section id="shop" className="section-reveal bg-[#f5f0e8] px-5 py-12 sm:px-8 lg:px-16 lg:py-16 flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-12">

      {/* Left heading */}
      <div className="flex-shrink-0 w-full lg:w-72">
        <p className="font-sans text-[10px] tracking-[2.5px] text-gray-400 font-medium uppercase mb-2">
          SHOP BY OCCASION
        </p>
        <h2 className="font-serif text-[34px] sm:text-[38px] font-normal leading-[1.2] text-[#1a1a2e] mb-4">
          For Every Moment,<br />
          A{' '}
          <em className="italic text-[#c9933a]">Perfect Drape</em>
        </h2>
        <p className="mb-5 max-w-[320px] font-sans text-[12px] leading-[1.8] text-gray-500">
          Find sarees by celebration, from grand bridal silks to easy festive pieces that feel special all day.
        </p>
      </div>

      {/* Auto-scroll occasion circles */}
      <div className="occasion-carousel relative w-full min-w-0 flex-1 overflow-hidden py-2">
        <div
          ref={scrollerRef}
          className="occasion-scroll flex gap-7 overflow-x-auto py-4 pr-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          {carouselItems.map((o, index) => (
            <div
              key={`${o.label}-${index}`}
              className="occasion-pop occasion-item flex w-[118px] min-w-[118px] flex-col items-center gap-3 cursor-pointer group"
              style={{ animationDelay: `${(index % occasions.length) * 180}ms` }}
            >
              <div className="occasion-circle glow-orbit w-[112px] h-[112px] rounded-full overflow-hidden border-2 border-[#c9933a]/30 bg-white/60 shadow-[0_10px_26px_rgba(111,83,40,0.12)] group-hover:border-[#c9933a] group-hover:scale-110 transition-all duration-300">
                <img
                  src={o.img}
                  alt={o.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <p className="font-sans text-[9px] tracking-[2px] font-semibold text-gray-500 uppercase text-center group-hover:text-[#c9933a] transition-colors duration-300">
                {o.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


