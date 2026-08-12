import { useEffect, useMemo, useRef, useState } from 'react'
import { getSathuraPattuCollection, getSathuraPattuDesign } from '../data/sathuraPattuProducts'

const colorMap = {
  'Rose Pink': '#d87591', Coral: '#d75b48', Ivory: '#f1eadc', 'Champagne Gold': '#d7b46a',
  'Peacock Blue': '#0f6070', 'Teal Blue': '#0c6b76', Emerald: '#0f6a46', 'Midnight Navy': '#111c3a',
  'Bottle Green': '#154a33', 'Mint Gold': '#abc493', Sage: '#9aaa87',
  'Cream Gold': '#e8d9b6', Beige: '#d8c3a7',
  'Royal Violet': '#4b247c', 'Black Gold': '#17130f', Peacock: '#0a6972',
  'Golden Sand': '#d2a24f', Marigold: '#e8a020', 'Copper Gold': '#b46a32', 'Peach Gold': '#dda06e',
}

const assuranceItems = [
  { icon: 'fa-certificate', title: 'Authentic Silk', text: 'Quality checked before catalogue confirmation.' },
  { icon: 'fa-truck-fast', title: 'Shipping Support', text: 'Store team confirms delivery options after enquiry.' },
  { icon: 'fa-shirt', title: 'Blouse Matching', text: 'Blouse and fall guidance available on request.' },
  { icon: 'fa-headset', title: 'Selection Help', text: 'Get color, occasion, and drape support before buying.' },
]

export default function SathuraDesignDetail({ collectionSlug, designSlug }) {
  const collection = getSathuraPattuCollection(collectionSlug)
  const design = getSathuraPattuDesign(collectionSlug, designSlug)

  const galleryImages = useMemo(() => {
    if (!collection || !design) return []
    return [...new Set(design.images || [design.image])].filter(Boolean)
  }, [collection, design])

  const [selectedImage, setSelectedImage] = useState(() => design?.image || '')
  const [selectedColor, setSelectedColor] = useState(() => design?.color || '')
  const [quantity, setQuantity] = useState(1)
  const [openPanel, setOpenPanel] = useState('Top highlights')
  const zoomFrameRef = useRef(null)
  const zoomImageRef = useRef(null)
  const zoomStateRef = useRef({ isZoomed: false, raf: null })

  const resetZoom = () => {
    const image = zoomImageRef.current
    if (!image) return
    zoomStateRef.current.isZoomed = false
    image.style.transformOrigin = '50% 50%'
    image.style.transform = 'scale(1)'
  }

  const applyZoom = (clientX, clientY, scale = 2.55) => {
    const frame = zoomFrameRef.current
    const image = zoomImageRef.current
    if (!frame || !image) return
    const rect = frame.getBoundingClientRect()
    const x = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100))
    const y = Math.max(0, Math.min(100, ((clientY - rect.top) / rect.height) * 100))
    zoomStateRef.current.isZoomed = true
    if (zoomStateRef.current.raf) window.cancelAnimationFrame(zoomStateRef.current.raf)
    zoomStateRef.current.raf = window.requestAnimationFrame(() => {
      image.style.transformOrigin = `${x}% ${y}%`
      image.style.transform = `scale(${scale})`
    })
  }

  const handleZoomEnter = (e) => { if (e.pointerType !== 'touch') applyZoom(e.clientX, e.clientY) }
  const handleZoomMove = (e) => { if (e.pointerType !== 'touch' || zoomStateRef.current.isZoomed) applyZoom(e.clientX, e.clientY) }
  const handleZoomLeave = (e) => { if (e.pointerType !== 'touch') resetZoom() }
  const handleZoomClick = (e) => {
    const isTouch = e.pointerType === 'touch' || window.matchMedia('(hover: none)').matches
    if (!isTouch) return
    if (zoomStateRef.current.isZoomed) { resetZoom(); return }
    applyZoom(e.clientX, e.clientY, 2.15)
  }

  const moveGalleryImage = (direction) => {
    if (!galleryImages.length) return
    const current = Math.max(0, galleryImages.indexOf(selectedImage || design?.image))
    setSelectedImage(galleryImages[(current + direction + galleryImages.length) % galleryImages.length])
  }

  useEffect(() => { setSelectedImage(design?.image || ''); setSelectedColor(design?.color || '') }, [design])
  useEffect(() => { resetZoom() }, [selectedImage])
  useEffect(() => () => { if (zoomStateRef.current.raf) window.cancelAnimationFrame(zoomStateRef.current.raf) }, [])

  if (!collection || !design) {
    return (
      <section className="bg-[#f6efe4] px-5 py-32 text-[#1a1420] sm:px-8 lg:px-16">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-[#b57922]">Design Not Found</p>
          <h1 className="mt-4 font-serif text-[44px] font-normal">This saree design is not available.</h1>
          <a href="/sathura-pattu" className="mt-8 inline-flex items-center gap-3 rounded bg-[#b57922] px-5 py-3 font-sans text-[11px] font-bold uppercase tracking-[1.8px] text-white">
            Back to Sathura Pattu <i className="fas fa-arrow-right" />
          </a>
        </div>
      </section>
    )
  }

  const unitPrice = Number((design.price || '').replace(/[^0-9]/g, '')) || 0
  const formattedTotal = (unitPrice * quantity).toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 })

  const specs = [
    ['Product Code', design.code],
    ['Collection', collection.name],
    ['Selected Color', selectedColor],
    ['Fabric', design.fabric],
    ['Zari Work', design.zari],
    ['Blouse', design.blouse],
    ['Occasion', design.occasion],
    ['Price', design.price],
    ['MRP', design.oldPrice],
    ['Offer', design.discount],
    ['Availability', design.stock],
  ]

  const detailPanels = [
    {
      title: 'Top highlights',
      content: [
        'Pure silk saree curated for premium festive and wedding use.',
        `${design.zari} with refined pallu and border finish.`,
        `Recommended for ${design.occasion}.`,
        'Catalogue support available for blouse matching, color selection, and store enquiry.',
      ],
    },
    {
      title: 'About this item',
      content: [
        design.details,
        `Main color: ${selectedColor}. Sub-color options can be confirmed before purchase.`,
        'This is a catalogue-assisted purchase page. No online payment is collected here.',
      ],
    },
    {
      title: 'Additional Information',
      content: [
        `Product code: ${design.code}`,
        `Price: ${design.price}. MRP: ${design.oldPrice}. Current offer: ${design.discount}.`,
        'Shipping, pickup, blouse stitching guidance, and gifting support can be discussed with the catalogue team.',
      ],
    },
    {
      title: 'Style',
      content: [
        `Fabric: ${design.fabric}`,
        `Blouse: ${design.blouse}`,
        'Suggested styling: antique gold jewellery, traditional hair accessories, and a structured blouse finish.',
      ],
    },
    { title: 'Item details', content: specs.map(([label, value]) => `${label}: ${value}`) },
  ]

  const relatedDesigns = collection.designs.filter((d) => d.slug !== design.slug)

  return (
    <section className="bg-[#080711] text-white">
      <div className="relative isolate overflow-hidden px-5 pb-12 pt-10 sm:px-8 lg:px-16">
        <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-[#c9933a]/75 to-transparent" />
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_16%_18%,rgba(201,147,58,0.14),transparent_28%),radial-gradient(circle_at_78%_16%,rgba(77,42,112,0.22),transparent_30%),linear-gradient(135deg,#080711_0%,#0d0d1a_58%,#141020_100%)]" />

        <div className="mx-auto max-w-7xl">
          <a href={`/sathura-pattu/${collection.slug}`} className="inline-flex border-b border-[#c9933a] pb-1 font-sans text-[10px] font-bold uppercase tracking-[2.5px] text-[#c9933a] transition-colors hover:text-[#f0c36e]">
            <i className="fas fa-arrow-left mr-2" /> {collection.name}
          </a>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[0.54fr_0.46fr] lg:items-start">
            {/* Gallery */}
            <div className="grid gap-4 lg:grid-cols-[82px_1fr]">
              <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col lg:overflow-visible">
                {galleryImages.map((img) => (
                  <button
                    key={img}
                    type="button"
                    onClick={() => setSelectedImage(img)}
                    className={`h-20 w-20 shrink-0 overflow-hidden rounded border bg-[#eadfce] transition-all ${selectedImage === img ? 'border-[#c9933a] shadow-[0_0_18px_rgba(201,147,58,0.28)]' : 'border-white/12 opacity-72 hover:opacity-100'}`}
                    aria-label="View image"
                  >
                    <img src={img} alt="Saree thumbnail" className="h-full w-full object-cover object-top" />
                  </button>
                ))}
              </div>
              <div
                ref={zoomFrameRef}
                className="relative order-1 cursor-zoom-in overflow-hidden rounded-lg border border-[#c9933a]/24 bg-[#eadfce] shadow-[0_24px_70px_rgba(0,0,0,0.46),0_0_28px_rgba(201,147,58,0.12)] touch-none lg:order-2"
                onPointerEnter={handleZoomEnter}
                onPointerMove={handleZoomMove}
                onPointerLeave={handleZoomLeave}
                onPointerDown={handleZoomClick}
                onDoubleClick={resetZoom}
              >
                <img
                  key={selectedImage || design.image}
                  ref={zoomImageRef}
                  src={selectedImage || design.image}
                  alt={design.name}
                  className="h-[560px] w-full select-none object-cover object-top transition-[opacity,transform] duration-300 ease-out will-change-transform"
                  draggable="false"
                  style={{ transform: 'scale(1)', transformOrigin: '50% 50%' }}
                />
                <button type="button" onPointerDown={(e) => e.stopPropagation()} onClick={(e) => { e.stopPropagation(); moveGalleryImage(-1) }} className="absolute left-5 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#fffaf2]/94 text-[#9a6720] shadow-[0_12px_28px_rgba(0,0,0,0.26)] transition hover:bg-[#17131c] hover:text-[#f3d18a]" aria-label="Previous image"><i className="fas fa-chevron-left text-[15px]" /></button>
                <button type="button" onPointerDown={(e) => e.stopPropagation()} onClick={(e) => { e.stopPropagation(); moveGalleryImage(1) }} className="absolute right-5 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#fffaf2]/94 text-[#9a6720] shadow-[0_12px_28px_rgba(0,0,0,0.26)] transition hover:bg-[#17131c] hover:text-[#f3d18a]" aria-label="Next image"><i className="fas fa-chevron-right text-[15px]" /></button>
              </div>
            </div>

            {/* Product info */}
            <div className="rounded-lg border border-[#e1c7a0] bg-[#fffaf2] p-5 text-[#17131c] shadow-[0_18px_44px_rgba(0,0,0,0.22)] lg:p-7">
              <p className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-[#b57922]">{collection.name}</p>
              <h1 className="mt-3 font-serif text-[38px] font-normal leading-[1.08] sm:text-[50px]">{design.name}</h1>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <span className="rounded bg-[#17131c] px-4 py-2 font-sans text-[10px] font-bold uppercase tracking-[1px] text-[#f3d18a]">Code: {design.code}</span>
                <span className="font-sans text-[11px] font-semibold text-[#2f7a38]"><i className="fas fa-circle-check mr-1" /> {design.stock}</span>
              </div>
              <div className="mt-5 rounded-lg border border-[#ead7bc] bg-white/70 p-4 font-sans">
                <div className="flex flex-wrap items-end gap-3">
                  <span className="text-[34px] font-bold leading-none text-[#17131c]">{design.price}</span>
                  <span className="pb-1 text-[15px] text-[#7a6f79] line-through">{design.oldPrice}</span>
                  <span className="mb-1 rounded-full bg-[#eff7ed] px-3 py-1 text-[11px] font-bold uppercase tracking-[1px] text-[#24763a]">{design.discount}</span>
                </div>
                <p className="mt-2 text-[12px] text-[#5f5660]">Inclusive of catalogue taxes. Final invoice confirmed by store.</p>
              </div>

              <p className="mt-5 font-sans text-[13px] leading-[1.85] text-[#5f5660]">{design.details}</p>

              {/* Quantity + summary */}
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-[150px_1fr]">
                <div>
                  <p className="font-sans text-[10px] font-bold uppercase tracking-[2.4px] text-[#9a6720]">Quantity</p>
                  <div className="mt-3 inline-flex items-center rounded border border-[#dfc49a] bg-white">
                    <button type="button" className="h-10 w-10 text-[#9a6720]" onClick={() => setQuantity((v) => Math.max(1, v - 1))}>-</button>
                    <span className="w-10 text-center font-sans text-[13px] font-bold">{quantity}</span>
                    <button type="button" className="h-10 w-10 text-[#9a6720]" onClick={() => setQuantity((v) => v + 1)}>+</button>
                  </div>
                </div>
                <div className="rounded-lg border border-[#ead7bc] bg-white/60 p-4">
                  <p className="font-sans text-[10px] font-bold uppercase tracking-[2.2px] text-[#9a6720]">Order Summary</p>
                  <div className="mt-2 flex justify-between font-sans text-[12px] text-[#514853]"><span>Unit price</span><strong>{design.price}</strong></div>
                  <div className="mt-1 flex justify-between font-sans text-[12px] text-[#514853]"><span>Quantity</span><strong>{quantity}</strong></div>
                  <div className="mt-3 flex justify-between border-t border-[#e5ceb0] pt-3 font-sans text-[13px] text-[#17131c]"><span>Estimated total</span><strong>{formattedTotal}</strong></div>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <a href="/contact-us" className="glow-cta inline-flex items-center justify-center gap-3 rounded bg-[#b57922] px-5 py-3 font-sans text-[11px] font-bold uppercase tracking-[1.8px] text-white transition-colors hover:bg-[#d9a046]">Add to Bag <i className="fas fa-bag-shopping" /></a>
                <a href="/contact-us" className="inline-flex items-center justify-center gap-3 rounded border border-[#17131c] px-5 py-3 font-sans text-[11px] font-bold uppercase tracking-[1.8px] text-[#17131c] transition-colors hover:bg-[#17131c] hover:text-white">Buy Now Enquiry <i className="fas fa-bolt" /></a>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {assuranceItems.map((item) => (
                  <div key={item.title} className="rounded-lg border border-[#ead7bc] bg-white/54 p-3 text-center">
                    <i className={`fas ${item.icon} text-[20px] text-[#b57922]`} />
                    <p className="mt-2 font-sans text-[10px] font-bold text-[#17131c]">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detail accordion + buy guide */}
      <div className="relative overflow-hidden bg-[rgba(246,239,228,1)] px-5 py-12 text-[#17131c] sm:px-8 lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(201,147,58,0.12),transparent_24%),linear-gradient(135deg,rgba(246,239,228,1),#f0dfc8)]" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-[0.52fr_0.48fr]">
          <section className="saree-info-card rounded-lg border border-[#d9b77d] bg-[#fffaf2]/92 shadow-[0_20px_50px_rgba(116,73,28,0.12)]">
            {detailPanels.map((panel) => {
              const isOpen = openPanel === panel.title
              return (
                <div key={panel.title} className="saree-accordion-row border-b border-[#e5ceb0] last:border-b-0">
                  <button type="button" onClick={() => setOpenPanel(isOpen ? '' : panel.title)} className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left transition-colors hover:bg-[#f4e2cb]">
                    <span className="font-serif text-[24px] font-normal text-[#17131c]">{panel.title}</span>
                    <i className={`fas fa-chevron-down text-[13px] text-[#b57922] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5">
                      <ul className="space-y-3">
                        {panel.content.map((item) => (
                          <li key={item} className="flex gap-3 font-sans text-[12px] leading-[1.8] text-[#514853]">
                            <i className="fas fa-check mt-1.5 text-[10px] text-[#b57922]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )
            })}
          </section>

          <aside className="saree-buy-card rounded-lg border border-[#d4a863] bg-[#f9ead5]/94 p-6 shadow-[0_20px_50px_rgba(116,73,28,0.14)]">
            <p className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-[#b57922]">How to Buy</p>
            <h2 className="mt-3 font-serif text-[34px] font-normal text-[#17131c]">Store Assisted Purchase</h2>
            <div className="mt-6 space-y-4">
              {['Choose design, color, and quantity', 'Check price, offer, and estimated total', 'Add to bag or start buy-now enquiry', 'Store confirms shipping and completes the order'].map((step, i) => (
                <div key={step} className="saree-buy-step flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#b57922] bg-[#fff8ef] font-sans text-[10px] font-bold text-[#9a6720]">{i + 1}</span>
                  <p className="font-sans text-[12px] leading-[1.7] text-[#514853]">{step}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-lg border border-[#d4a863] bg-[#fffaf2]/72 p-4">
              <p className="font-sans text-[10px] font-bold uppercase tracking-[2px] text-[#b57922]">Payment Note</p>
              <p className="mt-2 font-sans text-[12px] leading-[1.75] text-[#514853]">Select color and quantity, add to bag or enquire — our store team confirms invoice, shipping, and payment instructions.</p>
            </div>
          </aside>
        </div>

        {/* Related designs */}
        {relatedDesigns.length > 0 && (
          <div className="relative mx-auto mt-14 max-w-7xl">
            <p className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-[#b57922]">More from this collection</p>
            <h2 className="mt-3 font-serif text-[38px] font-normal text-[#17131c]">Other Sarees in {collection.name}</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedDesigns.slice(0, 3).map((item) => (
                <a key={item.slug} href={`/sathura-pattu/${collection.slug}/${item.slug}`} className="group overflow-hidden saree-info-card rounded-lg border border-[#d9b77d] bg-[#fffaf2]/92 shadow-[0_20px_50px_rgba(116,73,28,0.12)] transition-transform hover:-translate-y-1">
                  <div className="h-[310px] overflow-hidden bg-[#eadfce]">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-[21px] font-normal leading-tight text-[#17131c]">{item.name}</h3>
                    <p className="mt-2 font-sans text-[12px] text-[#6b6470]">{item.color} | {item.fabric}</p>
                    <div className="mt-3 flex flex-wrap items-end gap-2 font-sans">
                      <span className="text-[18px] font-bold leading-none text-[#17131c]">{item.price}</span>
                      <span className="text-[11px] text-[#8a8089] line-through">{item.oldPrice}</span>
                      <span className="rounded-full bg-[#eff7ed] px-2 py-1 text-[9px] font-bold uppercase tracking-[1px] text-[#24763a]">{item.discount}</span>
                    </div>
                    <div className="mt-4 flex items-center justify-between border-t border-[#e5ceb0] pt-4">
                      <span className="font-sans text-[10px] font-bold uppercase tracking-[2px] text-[#b57922]">View Saree</span>
                      <i className="fas fa-arrow-right text-[#b57922]" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

