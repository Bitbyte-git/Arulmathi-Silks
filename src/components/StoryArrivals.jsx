const arrivals = [
  {
    name: 'Maroon Muhurtham Silk',
    price: 'From Rs. 14,500',
    note: 'Zari border',
    img: '/w4.png',
  },
  {
    name: 'Mehendi Gold Soft Silk',
    price: 'From Rs. 13,800',
    note: 'Festive weave',
    img: '/w3.png',
  },
  {
    name: 'Peacock Blue Kanjivaram',
    price: 'From Rs. 15,200',
    note: 'Bridal favorite',
    img: '/w2.png',
  },
  {
    name: 'Rose Gold Tissue Silk',
    price: 'From Rs. 12,900',
    note: 'Soft shimmer',
    img: '/w3.png',
  },
  {
    name: 'Emerald Temple Silk',
    price: 'From Rs. 16,400',
    note: 'Temple border',
    img: '/w4.png',
  },
  {
    name: 'Ivory Zari Soft Silk',
    price: 'From Rs. 11,800',
    note: 'Elegant drape',
     img: '/w2.png',
  },
]
export default function StoryArrivals() {
  return (
    <section id="about" className="section-reveal grid min-h-[520px] grid-cols-1 bg-[#0e0c1c] pt-5 lg:grid-cols-2">

      {/* OUR STORY */}
      <div className="relative overflow-hidden">
        <img
          src="/image9.png"
          alt="Silk saree craftsmanship at Arulmathi"
          className="w-full h-full min-h-[520px] object-cover object-top brightness-[0.55]"
        />
        {/* Gradient overlay + text */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d1a]/95 via-[#0d0d1a]/40 to-transparent flex flex-col justify-end p-6 sm:p-12">
          <p className="font-sans text-[13px] tracking-[3px] text-[#c9933a] font-semibold uppercase mb-4">
            ARULMATHI PROMISE
          </p>
          <h2 className="font-serif text-[42px] sm:text-[52px] font-normal leading-[1.1] text-white mb-5">
            Sarees chosen<br />
            with care,<br />
            woven for<br />
            <em className="italic text-[#d4a853]">lasting memories.</em>
          </h2>
          <p className="font-sans text-[15px] leading-[1.85] text-white/70 font-light mb-7 max-w-[440px]">
            From bridal silks to festive drapes, every saree is selected for color, fall, border work, and the elegance it brings to your special day.
          </p>
          <a
            href="#collections"
            className="glow-cta inline-flex items-center gap-3 border border-white/45 px-6 py-3.5 font-sans text-[12px] font-semibold tracking-[2.2px] text-white transition-all duration-300 hover:border-[#c9933a] hover:text-[#c9933a] self-start"
          >
            EXPLORE SILKS <i className="fas fa-arrow-right" />
          </a>
        </div>
      </div>

      {/* NEW ARRIVALS */}
      <div id="new-arrivals" className="bg-[#13121f] px-5 py-12 sm:px-8 lg:px-12 flex flex-col justify-center">
        <p className="font-sans text-[13px] tracking-[3px] text-[#c9933a] font-semibold uppercase mb-4">
          NEW ARRIVALS
        </p>
        <h2 className="font-serif text-[42px] sm:text-[54px] font-normal leading-[1.1] text-white mb-4">
          Fresh Silks,<br />
          <em className="italic text-[#d4a853]">Ready to Drape</em>
        </h2>
        <p className="mb-8 max-w-[600px] font-sans text-[15px] leading-[1.85] text-white/62">
          New colors and zari combinations for engagement, reception, gifting and festive wardrobes.
        </p>

        {/* Product cards */}
        <div className="mobile-arrivals-grid mb-6 hidden grid-cols-1 gap-3.5 pt-2.5 sm:grid sm:grid-cols-2 xl:grid-cols-3">
          {arrivals.map((item) => (
            <div
              key={item.name}
              className="glow-card hover-lift bg-[#1e1b30] rounded-lg overflow-hidden cursor-pointer group transition-transform duration-300"
            >
              <div className="relative h-[260px] sm:h-[300px] lg:h-[340px] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-400"
                />
              </div>
              <div className="px-5 pt-4 pb-5">
                <p className="font-serif text-[23px] font-semibold leading-tight text-white mb-2">
                  {item.name}
                </p>
                <p className="mb-2 font-sans text-[12px] uppercase tracking-[2px] text-white/46">
                  {item.note}
                </p>
                <p className="font-sans text-[16px] text-[#c9933a] font-semibold">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        <a
          href="/shop"
          className="glow-text inline-flex items-center gap-3 border-b border-white/30 pb-1 font-sans text-[13px] font-bold tracking-[2.3px] text-white transition-all duration-200 self-start hover:text-[#c9933a] hover:border-[#c9933a]"
        >
          SHOP NEW ARRIVALS <i className="fas fa-arrow-right" />
        </a>
      </div>
    </section>
  )
}
