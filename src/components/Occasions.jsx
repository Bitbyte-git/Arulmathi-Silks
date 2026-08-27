import { useMemo, useState } from 'react'

const occasions = [
  {
    label: 'BRIDAL',
    img: '/circle5.png',
    href: '/vaibhava-pattu',
  },
  {
    label: 'FESTIVE',
    img: '/d3.png',
    href: '/izhamathi-pattu',
  },
  {
    label: 'RECEPTION',
    img: '/d1.png',
    href: '/saila-pattu',
  },
  {
    label: 'POOJA',
    img: '/d4.png',
    href: '/kaithirai-pattu',
  },
  {
    label: 'GIFTING',
    img: '/d5.png',
    href: '/mangai-pattu',
  },
  {
    label: 'LIGHTWEIGHT',
    img: '/d6.png',
    href: '/noolisai-pattu',
  },
  {
    label: 'DESIGNER',
    img: '/d1.png',
    href: '/sezhinool-pattu',
  },
  {
    label: 'ENGAGEMENT',
    img: '/circle1.png',
    href: '/Aanchali-pattu',
  },
  {
    label: 'HOUSEWARMING',
    img: '/circle2.png',
    href: '/velora-pattu',
  },
  {
    label: 'HALDI',
    img: '/circle3.png',
    href: '/ezhil-pattu',
  },
  {
    label: 'SANGEET',
    img: '/circle4.png',
    href: '/mayura-pattu',
  },
  {
    label: 'EVERYDAY',
    img: '/circle8.png',
    href: '/varnika-pattu',
  },
]

export default function Occasions() {
  const [isPaused, setIsPaused] = useState(false)

  const carouselItems = useMemo(() => [...occasions, ...occasions], [])

  const handleNavigate = (event, href) => {
    event.preventDefault()
    window.history.pushState({}, '', href)
    window.dispatchEvent(new Event('popstate'))
    window.dispatchEvent(new Event('arulmathi:navigate'))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section id="shop" className="section-reveal bg-[#12121F] px-5 py-12 sm:px-8 lg:px-16 lg:py-16 flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-12">

      {/* Left heading */}
      <div className="flex-shrink-0 w-full lg:w-96">
        <p className="font-sans text-[14px] tracking-[3.2px] text-[#c9933a] font-semibold uppercase mb-3">
          SHOP BY OCCASION
        </p>
        <h2 className="font-serif text-[46px] sm:text-[58px] font-normal leading-[1.08] text-[#F5F0E8] mb-5">
          For Every Moment,<br />
          A{' '}
          <em className="italic text-[#c9933a]">Perfect Drape</em>
        </h2>
        <p className="mb-6 max-w-[380px] font-sans text-[16px] leading-[1.85] text-[#F5F0E8]/68">
          Find sarees by celebration, from grand bridal silks to easy festive pieces that feel special all day.
        </p>
      </div>

      {/* Auto-scroll occasion circles */}
      <div className="occasion-carousel relative w-full min-w-0 flex-1 overflow-hidden py-2">
        <div
          className={`occasion-scroll flex w-max gap-7 py-4 pr-7 ${isPaused ? 'is-paused' : ''}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          onPointerDown={() => setIsPaused(true)}
          onPointerUp={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {carouselItems.map((o, index) => (
            <a
              key={`${o.label}-${index}`}
              href={o.href}
              onClick={(e) => handleNavigate(e, o.href)}
              className="occasion-pop occasion-item flex w-[154px] min-w-[154px] flex-col items-center gap-3 cursor-pointer group no-underline text-inherit"
              style={{ animationDelay: `${(index % occasions.length) * 180}ms` }}
              aria-label={`Explore ${o.label} Sarees Collection`}
            >
              <div className="occasion-circle glow-orbit w-[146px] h-[146px] rounded-full overflow-hidden border-2 border-[#c9933a]/42 bg-[#F5F0E8]/10 shadow-[0_18px_38px_rgba(0,0,0,0.28)] group-hover:border-[#c9933a] group-hover:scale-110 transition-all duration-300">
                <img
                  src={o.img}
                  alt={o.label}
                  loading={index < occasions.length ? 'eager' : 'lazy'}
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <p className="font-sans text-[13px] tracking-[2.2px] font-bold text-[#F5F0E8]/68 uppercase text-center group-hover:text-[#c9933a] transition-colors duration-300">
                {o.label}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
