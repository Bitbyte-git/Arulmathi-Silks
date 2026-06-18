const arrivals = [
  {
    name: 'Wine Velvet',
    price: '₹14,500',
    img: '/red-pose5.png',
  },
  {
    name: 'Mehnon Gold',
    price: '₹13,800',
    img: '/w3.png',
  },
  {
    name: 'Peacock Royale',
    price: '₹15,200',
    img: '/w2.png',
  },
]

export default function StoryArrivals() {
  return (
    <section id="about" className="section-reveal grid grid-cols-2 bg-[#0e0c1c] min-h-[520px]">

      {/* ── OUR STORY ── */}
      <div className="relative overflow-hidden">
        <img
          src="/image9.png"
          alt="Our Story"
          className="w-full h-full min-h-[520px] object-cover object-top brightness-[0.55]"
        />
        {/* Gradient overlay + text */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d1a]/95 via-[#0d0d1a]/40 to-transparent flex flex-col justify-end p-12">
          <p className="font-sans text-[10px] tracking-[2.5px] text-[#c9933a] font-medium uppercase mb-3">
            OUR STORY
          </p>
          <h2 className="font-serif text-[38px] font-normal leading-[1.15] text-white mb-4">
            Rooted in<br />
            Tradition,<br />
            Woven for<br />
            <em className="italic text-[#d4a853]">Generations.</em>
          </h2>
          <p className="font-sans text-[12px] leading-[1.8] text-white/60 font-light mb-6">
            Every saree tells a story — of heritage,<br />
            artistry and timeless beauty.
          </p>
          <a
            href="#"
            className="glow-cta inline-flex items-center gap-2.5 px-5 py-2.5 border border-white/45 font-sans text-[10px] tracking-[2px] font-medium text-white hover:border-[#c9933a] hover:text-[#c9933a] transition-all duration-300 self-start"
          >
            KNOW OUR JOURNEY <i className="fas fa-arrow-right" />
          </a>
        </div>
      </div>

      {/* ── NEW ARRIVALS ── */}
      <div id="new-arrivals" className="bg-[#13121f] px-12 py-12 flex flex-col justify-center">
        <p className="font-sans text-[10px] tracking-[2.5px] text-[#c9933a] font-medium uppercase mb-3">
          NEW ARRIVALS
        </p>
        <h2 className="font-serif text-[42px] font-normal leading-[1.15] text-white mb-7">
          Fresh Weaves,<br />
          <em className="italic text-[#d4a853]">Just In</em>
        </h2>

        {/* Product cards */}
        <div className="grid grid-cols-3 gap-3.5 mb-6">
          {arrivals.map((item) => (
            <div
              key={item.name}
              className="glow-card hover-lift bg-[#1e1b30] rounded-xl overflow-hidden cursor-pointer group transition-transform duration-300"
            >
              <div className="relative h-[200px] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
                />
                <button className="glow-round absolute top-2.5 right-2.5 w-[30px] h-[30px] rounded-full bg-white/90 text-gray-700 flex items-center justify-center text-[13px] hover:bg-[#c9933a] hover:text-white transition-all duration-200">
                  <i className="far fa-heart" />
                </button>
              </div>
              <div className="px-3 pt-2.5 pb-3">
                <p className="font-serif text-[14px] font-medium text-white mb-0.5">
                  {item.name}
                </p>
                <p className="font-sans text-[12px] text-[#c9933a] font-medium">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        <a
          href="#"
          className="glow-text inline-flex items-center gap-2 font-sans text-[10px] tracking-[2px] font-medium text-white border-b border-white/30 pb-0.5 self-start hover:text-[#c9933a] hover:border-[#c9933a] transition-all duration-200"
        >
          SHOP NEW ARRIVALS <i className="fas fa-arrow-right" />
        </a>
      </div>
    </section>
  )
}
