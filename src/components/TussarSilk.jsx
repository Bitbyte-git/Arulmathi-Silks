import { useEffect, useState } from 'react'

const tussarSarees = [
  {
    name: 'Honey Gold Tussar Silk',
    detail: 'Natural textured sheen',
    price: 'From Rs. 12,800',
    img: '/Kathirai-pattu/KP-PP-1.png',
  },
  {
    name: 'Ivory Tussar Zari',
    detail: 'Subtle festive border',
    price: 'From Rs. 13,900',
    img: '/red-pose3.png',
  },
  {
    name: 'Rust Temple Tussar',
    detail: 'Earthy heritage tone',
    price: 'From Rs. 15,200',
    img: '/Velora-pattu/VP-VM-5.png',
  },
  {
    name: 'Sage Floral Tussar',
    detail: 'Soft woven detail',
    price: 'From Rs. 14,600',
    img: '/Saila-Pattu/SP-Blue-2.png',
  },
  {
    name: 'Plum Festive Tussar',
    detail: 'Rich occasion drape',
    price: 'From Rs. 16,400',
    img: '/Sezhinoo-pattu/SP-MV-Blue4.png',
  },
  {
    name: 'Crimson Tussar Silk',
    detail: 'Classic zari pallu',
    price: 'From Rs. 17,100',
    img: '/Vaibhava-pattu/VP-TM-Red1.png',
  },
  {
    name: 'Peach Tissue Tussar',
    detail: 'Light ceremonial glow',
    price: 'From Rs. 14,900',
    img: '/4-pose4.png',
  },
  {
    name: 'Blue Handloom Tussar',
    detail: 'Textured silk finish',
    price: 'From Rs. 15,800',
    img: '/3-pose3.png',
  },
]

const tussarHighlights = [
  'Natural silk texture with an airy, graceful festive drape',
  'Earth-led colors, subtle zari accents, and handloom-inspired character',
  'Curated for poojas, elegant gifting, office occasions, and celebrations',
]

const tussarHeroImages = [
  '/Kathirai-pattu/KP-PP-1.png',
  '/Saila-Pattu/SP-Blue-2.png',
  '/Velora-pattu/VP-VM-5.png',
  '/Sezhinoo-pattu/SP-MV-Blue4.png',
  '/Vaibhava-pattu/VP-TM-Red1.png',
]

export default function TussarSilk() {
  const [heroImageIndex, setHeroImageIndex] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setHeroImageIndex((current) => (current + 1) % tussarHeroImages.length)
    }, 3200)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <section id="tussar-silk" className="section-reveal bg-[#13121f]">
      <div className="relative overflow-hidden bg-[#13121f] px-5 pb-14 pt-10 text-white sm:px-8 lg:px-16 lg:pb-20 lg:pt-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(201,147,58,0.12),transparent_26%),radial-gradient(circle_at_86%_74%,rgba(75,26,110,0.20),transparent_28%)]" />
        <div className="footer-weave absolute inset-x-0 top-0 h-52 opacity-45" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[2.8px] text-[#c9933a]">
              Traditional Weaves
            </p>
            <h1 className="mt-4 font-serif text-[42px] font-normal leading-[1.02] text-white sm:text-[58px] lg:text-[68px]">
              Tussar<br />
              <em className="italic text-[#d4a853]">Silk Sarees</em>
            </h1>
            <p className="mt-5 max-w-[520px] font-sans text-[13px] leading-[1.9] text-white/72">
              Textured silk drapes with natural sheen, earthy colors, and refined zari details chosen for graceful celebrations and everyday elegance.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/#shop"
                className="glow-cta inline-flex items-center gap-3 border border-[#c9933a]/80 px-5 py-3 font-sans text-[11px] font-semibold uppercase tracking-[1.9px] text-[#d9a046] transition-colors hover:bg-[#c9933a] hover:text-[#13121f]"
              >
                Shop Tussar <i className="fas fa-arrow-right" />
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
                {tussarHeroImages.map((image, index) => (
                  <img
                    key={image}
                    src={image}
                    alt="Tussar silk saree in natural festive tones"
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
                  {tussarHighlights.map((item, index) => (
                    <li key={item} className="hero-weave-item flex gap-3 font-sans text-[12px] leading-[1.8] text-white/72" style={{ animationDelay: `${index * 120}ms` }}>
                      <i className="fas fa-chevron-right mt-1.5 text-[9px] text-[#c9933a]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="hero-box-gold rounded-lg border border-[#c9933a]/28 bg-[#d9a046] p-6 text-[#13121f] shadow-[0_14px_34px_rgba(61,42,27,0.12)]">
                <p className="font-serif text-[28px] leading-[1.05]">Earthy silk tones, handpicked for naturally graceful drape.</p>
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
                Featured Tussar
              </p>
              <h2 className="mt-2 font-serif text-[34px] font-normal text-[#1a1420] sm:text-[42px]">
                Textured silk picks
              </h2>
            </div>
            <a href="/#shop" className="glow-text font-sans text-[10px] font-semibold uppercase tracking-[2px] text-[#5e4c3c] transition-colors hover:text-[#9a6720]">
              View all sarees <i className="fas fa-arrow-right ml-2" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
            {tussarSarees.map((saree) => (
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