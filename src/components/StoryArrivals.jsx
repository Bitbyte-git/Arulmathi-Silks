const arrivals = [
  {
    name: 'Maroon Muhurtham Silk',
    price: 'From Rs. 14,500',
    note: 'Zari border',
    img: '/red-pose5.png',
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
    img: '/red-pose2.png',
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
    img: '/red-pose3.png',
  },
]
export default function StoryArrivals() {
  return (
    <section id="about" className="section-reveal grid grid-cols-1 lg:grid-cols-2 bg-[#0e0c1c] min-h-[520px]">

      {/* OUR STORY */}
      <div className="relative overflow-hidden">
        <img
          src="/image9.png"
          alt="Silk saree craftsmanship at Arulmathi"
          className="w-full h-full min-h-[520px] object-cover object-top brightness-[0.55]"
        />
        {/* Gradient overlay + text */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d1a]/95 via-[#0d0d1a]/40 to-transparent flex flex-col justify-end p-6 sm:p-12">
          <p className="font-sans text-[10px] tracking-[2.5px] text-[#c9933a] font-medium uppercase mb-3">
            ARULMATHI PROMISE
          </p>
          <h2 className="font-serif text-[34px] sm:text-[38px] font-normal leading-[1.15] text-white mb-4">
            Sarees chosen<br />
            with care,<br />
            woven for<br />
            <em className="italic text-[#d4a853]">lasting memories.</em>
          </h2>
          <p className="font-sans text-[12px] leading-[1.8] text-white/65 font-light mb-6 max-w-[380px]">
            From bridal silks to festive drapes, every saree is selected for color, fall, border work, and the elegance it brings to your special day.
          </p>
          <a
            href="#collections"
            className="glow-cta inline-flex items-center gap-2.5 px-5 py-2.5 border border-white/45 font-sans text-[10px] tracking-[2px] font-medium text-white hover:border-[#c9933a] hover:text-[#c9933a] transition-all duration-300 self-start"
          >
            EXPLORE SILKS <i className="fas fa-arrow-right" />
          </a>
        </div>
      </div>

      {/* NEW ARRIVALS */}
      <div id="new-arrivals" className="bg-[#13121f] px-5 py-12 sm:px-8 lg:px-12 flex flex-col justify-center">
        <p className="font-sans text-[10px] tracking-[2.5px] text-[#c9933a] font-medium uppercase mb-3">
          NEW ARRIVALS
        </p>
        <h2 className="font-serif text-[34px] sm:text-[42px] font-normal leading-[1.15] text-white mb-3">
          Fresh Silks,<br />
          <em className="italic text-[#d4a853]">Ready to Drape</em>
        </h2>
        <p className="mb-7 max-w-[520px] font-sans text-[12px] leading-[1.8] text-white/55">
          New colors and zari combinations for engagement, reception, gifting and festive wardrobes.
        </p>

        {/* Product cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3.5 mb-6">
          {arrivals.map((item) => (
            <div
              key={item.name}
              className="glow-card hover-lift bg-[#1e1b30] rounded-lg overflow-hidden cursor-pointer group transition-transform duration-300"
            >
              <div className="relative h-[260px] sm:h-[200px] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
                />
              </div>
              <div className="px-3 pt-2.5 pb-3">
                <p className="font-serif text-[14px] font-medium text-white mb-0.5">
                  {item.name}
                </p>
                <p className="mb-1 font-sans text-[9px] uppercase tracking-[1.6px] text-white/40">
                  {item.note}
                </p>
                <p className="font-sans text-[12px] text-[#c9933a] font-medium">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        <a
          href="#shop"
          className="glow-text inline-flex items-center gap-2 font-sans text-[10px] tracking-[2px] font-medium text-white border-b border-white/30 pb-0.5 self-start hover:text-[#c9933a] hover:border-[#c9933a] transition-all duration-200"
        >
          SHOP NEW ARRIVALS <i className="fas fa-arrow-right" />
        </a>
      </div>
    </section>
  )
}


