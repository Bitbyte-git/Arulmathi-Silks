import { useEffect, useState } from 'react'

const mysoreSarees = [
  {
    name: 'Sandal Gold Mysore Silk',
    detail: 'Soft zari border',
    price: 'From Rs. 14,800',
    img: '/4-pose1.png',
  },
  {
    name: 'Royal Purple Mysore Drape',
    detail: 'Classic festive sheen',
    price: 'From Rs. 16,500',
    img: '/viol.png',
  },
  {
    name: 'Crimson Palace Silk',
    detail: 'Rich woven pallu',
    price: 'From Rs. 18,200',
    img: '/red-pose2.png',
  },
  {
    name: 'Ivory Gold Mysore',
    detail: 'Elegant occasion weave',
    price: 'From Rs. 15,900',
    img: '/red-pose3.png',
  },
  {
    name: 'Peacock Blue Silk',
    detail: 'Luminous zari finish',
    price: 'From Rs. 17,400',
    img: '/3-pose3.png',
  },
  {
    name: 'Rose Tissue Mysore',
    detail: 'Light festive shimmer',
    price: 'From Rs. 16,100',
    img: '/4-pose4.png',
  },
  {
    name: 'Emerald Soft Silk',
    detail: 'Graceful drape color',
    price: 'From Rs. 15,600',
    img: '/w4.png',
  },
  {
    name: 'Temple Red Mysore',
    detail: 'Heritage border detail',
    price: 'From Rs. 18,900',
    img: '/red-pose1.png',
  },
]

const mysoreHighlights = [
  'Soft silk finish with a smooth, lightweight festive drape',
  'Luminous zari borders inspired by Mysore heritage palettes',
  'Curated colors for weddings, gifting, temple visits, and celebrations',
]

const mysoreHeroImages = [
  '/4-pose1.png',
  '/viol.png',
  '/red-pose2.png',
  '/3-pose3.png',
  '/w4.png',
]

export default function MysoreSilk() {
  const [heroImageIndex, setHeroImageIndex] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setHeroImageIndex((current) => (current + 1) % mysoreHeroImages.length)
    }, 3200)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <section id="mysore-silk" className="section-reveal bg-[#13121f]">
      <div className="relative overflow-hidden bg-[#13121f] px-5 pb-14 pt-32 text-white sm:px-8 lg:px-16 lg:pb-20 lg:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(201,147,58,0.12),transparent_26%),radial-gradient(circle_at_86%_74%,rgba(75,26,110,0.20),transparent_28%)]" />
        <div className="footer-weave absolute inset-x-0 top-0 h-52 opacity-45" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[2.8px] text-[#c9933a]">
              Traditional Weaves
            </p>
            <h1 className="mt-4 font-serif text-[42px] font-normal leading-[1.02] text-white sm:text-[58px] lg:text-[68px]">
              Mysore<br />
              <em className="italic text-[#d4a853]">Silk Sarees</em>
            </h1>
            <p className="mt-5 max-w-[520px] font-sans text-[13px] leading-[1.9] text-white/72">
              Lustrous silk drapes with graceful zari, soft texture, and heritage-inspired colors chosen for celebrations, gifting, and elegant wardrobes.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/#shop"
                className="glow-cta inline-flex items-center gap-3 border border-[#c9933a]/80 px-5 py-3 font-sans text-[11px] font-semibold uppercase tracking-[1.9px] text-[#d9a046] transition-colors hover:bg-[#c9933a] hover:text-[#13121f]"
              >
                Shop Mysore <i className="fas fa-arrow-right" />
              </a>
              <a
                href="/#collections"
                className="inline-flex items-center gap-3 border border-white/20 px-5 py-3 font-sans text-[11px] font-semibold uppercase tracking-[1.9px] text-white/78 transition-colors hover:border-[#c9933a] hover:text-[#d9a046]"
              >
                Back to Collections
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-[0.92fr_1.08fr]">
            <div className="hero-box-image overflow-hidden rounded-lg border border-[#c9933a]/28 bg-[#0d0d1a] shadow-[0_24px_56px_rgba(0,0,0,0.32)]">
              <div className="relative h-[420px] w-full overflow-hidden">
                {mysoreHeroImages.map((image, index) => (
                  <img
                    key={image}
                    src={image}
                    alt="Mysore silk saree in luminous festive tones"
                    className={`absolute inset-0 h-full w-full object-cover object-top brightness-[0.82] transition-opacity duration-700 ${index === heroImageIndex ? 'opacity-100' : 'opacity-0'}`}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-between gap-4">
              <div className="hero-box-info rounded-lg border border-[#c9933a]/28 bg-[#1b1930]/78 p-6 shadow-[0_14px_34px_rgba(0,0,0,0.22)] backdrop-blur-sm">
                <p className="font-sans text-[10px] font-semibold uppercase tracking-[2.4px] text-[#c9933a]">
                  Weave Character
                </p>
                <ul className="mt-5 space-y-4">
                  {mysoreHighlights.map((item, index) => (
                    <li key={item} className="hero-weave-item flex gap-3 font-sans text-[12px] leading-[1.8] text-white/72" style={{ animationDelay: `${index * 120}ms` }}>
                      <i className="fas fa-chevron-right mt-1.5 text-[9px] text-[#c9933a]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="hero-box-gold rounded-lg border border-[#c9933a]/28 bg-[#d9a046] p-6 text-[#13121f] shadow-[0_14px_34px_rgba(61,42,27,0.12)]">
                <p className="font-serif text-[28px] leading-[1.05]">Soft royal colors, handpicked for luminous graceful drape.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-[#f5f0e8] px-5 py-14 text-[#1a1420] sm:px-8 lg:px-16 lg:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(201,147,58,0.13),transparent_24%),radial-gradient(circle_at_88%_78%,rgba(75,26,110,0.06),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="font-sans text-[10px] font-semibold uppercase tracking-[2.5px] text-[#9a6720]">
                Featured Mysore
              </p>
              <h2 className="mt-2 font-serif text-[34px] font-normal text-[#1a1420] sm:text-[42px]">
                Palace silk picks
              </h2>
            </div>
            <a href="/#shop" className="glow-text font-sans text-[10px] font-semibold uppercase tracking-[2px] text-[#5e4c3c] transition-colors hover:text-[#9a6720]">
              View all sarees <i className="fas fa-arrow-right ml-2" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
            {mysoreSarees.map((saree) => (
              <article key={saree.name} className="glow-card hover-lift overflow-hidden rounded-lg bg-white/75 text-[#1a1a2e] shadow-[0_14px_34px_rgba(61,42,27,0.12)]">
                <div className="h-[230px] overflow-hidden bg-[#e8ddcf] sm:h-[260px]">
                  <img src={saree.img} alt={saree.name} className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105" />
                </div>
                <div className="p-3">
                  <h3 className="font-serif text-[16px] font-medium leading-tight">{saree.name}</h3>
                  <p className="mt-1 font-sans text-[9px] uppercase tracking-[1.3px] text-[#7a6653]">{saree.detail}</p>
                  <p className="mt-2 font-sans text-[11px] font-semibold text-[#9a6720]">{saree.price}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}