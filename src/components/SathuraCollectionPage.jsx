import { useEffect, useMemo, useState } from 'react'
import { getSathuraPattuCollection } from '../data/sathuraPattuProducts'

export default function SathuraCollectionPage({ collectionSlug }) {
  const collection = getSathuraPattuCollection(collectionSlug)
  const [heroSlide, setHeroSlide] = useState(0)

  const heroImages = useMemo(() => {
    if (!collection) return []
    return [...new Set([collection.heroImage, ...collection.designs.map((d) => d.image)])].filter(Boolean).slice(0, 4)
  }, [collection])

  useEffect(() => {
    if (heroImages.length <= 1) return undefined
    const timer = window.setInterval(() => {
      setHeroSlide((c) => (c + 1) % heroImages.length)
    }, 5200)
    return () => window.clearInterval(timer)
  }, [heroImages])

  if (!collection) {
    return (
      <section className="bg-[#f6efe4] px-5 py-32 text-[#1a1420] sm:px-8 lg:px-16">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-[#b57922]">Collection Not Found</p>
          <h1 className="mt-4 font-serif text-[44px] font-normal">This collection is not available.</h1>
          <a href="/sathura-pattu" className="mt-8 inline-flex items-center gap-3 rounded bg-[#b57922] px-5 py-3 font-sans text-[11px] font-bold uppercase tracking-[1.8px] text-white">
            Back to Sathura Pattu <i className="fas fa-arrow-right" />
          </a>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-[#f6efe4] text-[#1a1420]">
      {/* Hero */}
      <div className="relative isolate overflow-hidden bg-[#080711] px-5 pb-16 pt-10 text-white sm:px-8 lg:px-16">
        <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-[#c9933a]/75 to-transparent" />
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_18%,rgba(201,147,58,0.16),transparent_28%),radial-gradient(circle_at_80%_24%,rgba(77,42,112,0.22),transparent_30%),linear-gradient(135deg,#080711_0%,#0d0d1a_58%,#141020_100%)]" />
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[0.48fr_0.52fr] lg:items-center">
          <div>
            <a href="/sathura-pattu" className="inline-flex border-b border-[#c9933a] pb-1 font-sans text-[10px] font-bold uppercase tracking-[2.5px] text-[#c9933a] transition-colors hover:text-[#f0c36e]">
              <i className="fas fa-arrow-left mr-2" /> Sathura Pattu
            </a>
            <p className="mt-8 font-sans text-[10px] font-bold uppercase tracking-[3px] text-[#c9933a]">{collection.eyebrow}</p>
            <h1 className="mt-4 font-serif text-[46px] font-normal leading-[1.08] text-white sm:text-[62px] lg:text-[74px]">{collection.name}</h1>
            <p className="mt-5 max-w-[560px] font-sans text-[13px] leading-[1.9] text-white/62">{collection.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/16 bg-white/5 px-4 py-2 font-sans text-[10px] font-bold uppercase tracking-[1.6px] text-[#f0c36e] shadow-[0_0_18px_rgba(201,147,58,0.12)]">
                {collection.designs.length} Saree Designs Available
              </span>
              <span className="rounded-full border border-white/16 bg-white/5 px-4 py-2 font-sans text-[10px] font-bold uppercase tracking-[1.6px] text-[#f0c36e] shadow-[0_0_18px_rgba(201,147,58,0.12)]">
                Salem Bestseller
              </span>
            </div>
          </div>
          <div className="collection-hero-frame group relative overflow-hidden rounded-lg border border-[#c9933a]/24 bg-[#0d0d1a] shadow-[0_24px_70px_rgba(0,0,0,0.42),0_0_28px_rgba(201,147,58,0.14)]">
            <img
              key={heroSlide}
              src={heroImages[heroSlide] || collection.heroImage}
              alt={collection.name}
              className="collection-hero-image collection-hero-slide h-[420px] w-full object-cover object-top"
            />
            <div className="collection-hero-vignette absolute inset-0 pointer-events-none" />
            <div className="collection-hero-shine absolute inset-0 pointer-events-none" />
            <div className="collection-hero-lift absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-[#f0c36e]/70 to-transparent" />
          </div>
        </div>
      </div>

      {/* Designs grid */}
      <div className="px-5 py-14 sm:px-8 lg:px-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-[#b57922]">Available Saree Designs</p>
              <h2 className="mt-3 font-serif text-[38px] font-normal text-[#17131c] sm:text-[50px]">
                Sarees in <em className="italic text-[#b57922]">{collection.name}</em>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {collection.designs.map((design, index) => (
              <article
                key={design.slug}
                className="collection-card premium-saree-card overflow-hidden rounded-lg border border-[#e1c7a0] bg-[#fffaf2] shadow-[0_18px_44px_rgba(74,45,18,0.12)]"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div className="premium-saree-media group relative h-[290px] overflow-hidden bg-[#e8ddcf]">
                  <img
                    src={design.image}
                    alt={design.name}
                    className="premium-saree-image h-full w-full object-cover object-top transition-all duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 right-3 top-3 rounded bg-[#17131c]/86 px-3 py-1.5 font-sans text-[9px] font-bold uppercase leading-[1.5] tracking-[1px] text-[#f3d18a]">
                    {design.code}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="premium-saree-title font-serif text-[24px] font-normal leading-tight text-[#17131c]">{design.name}</h3>
                  <p className="mt-2 font-sans text-[12px] text-[#6b6470]">{design.color} | {design.fabric}</p>
                  <div className="mt-4 flex flex-wrap items-end gap-2 font-sans">
                    <span className="premium-saree-price text-[20px] font-bold leading-none text-[#17131c]">{design.price}</span>
                    <span className="text-[12px] text-[#8a8089] line-through">{design.oldPrice}</span>
                    <span className="rounded-full bg-[#eff7ed] px-2 py-1 text-[10px] font-bold uppercase tracking-[1px] text-[#24763a]">{design.discount}</span>
                  </div>
                  <p className="mt-2 font-sans text-[11px] font-semibold text-[#24763a]">
                    <i className="fas fa-circle-check mr-1 text-[10px]" /> {design.stock}
                  </p>
                  <a
                    href={`/sathura-pattu/${collection.slug}/${design.slug}`}
                    className="premium-saree-action mt-4 flex items-center justify-between border-t border-[#e6d4bd] pt-4 transition-colors hover:text-[#b57922]"
                  >
                    <span className="font-sans text-[10px] font-bold uppercase tracking-[2px] text-[#9a6720]">View Details</span>
                    <i className="premium-saree-arrow fas fa-arrow-right text-[#b57922]" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

