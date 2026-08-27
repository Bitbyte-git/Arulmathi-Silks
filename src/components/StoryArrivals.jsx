const arrivals = [
  {
    name: 'Parrot Green Floral Bloom',
    price: 'Rs. 32,900',
    note: 'Pushpanjali Pure Silk',
    img: '/izhamathi-sarees/Pushpa/IZ-PA-2601-2.png',
    fallbackImg: '/izhamathi-sarees/Pushpa/IZ-PA-2.png',
    href: '/izhamathi-pattu/pushpanjali',
  },
  {
    name: 'Emerald Paisley Zari Saree',
    price: 'Rs. 28,500',
    note: 'Suvarna Thuli Silk',
    img: '/izhamathi-sarees/IZ-Green-1.png',
    fallbackImg: '/izhamathi-sarees/IZ-Green-2.png',
    href: '/izhamathi-pattu/suvarna-thuli',
  },
  {
    name: 'Bridal Red Temple Zari',
    price: 'Rs. 28,500',
    note: 'Vaibhava Thirumanam',
    img: '/Vaibhava-pattu/VB-TM-0101-1.png',
    fallbackImg: '/Vaibhava-pattu/VP-TM-Red1.png',
    href: '/vaibhava-pattu/thirumanam',
  },
  {
    name: 'Royal Magenta Lotus Silk',
    price: 'Rs. 18,600',
    note: 'Kaithirai Poigai Silk',
    img: '/kaithirai-pattu/KP-PP-1.png',
    fallbackImg: '/kaithirai-pattu/KT-PP-0101-1.png',
    href: '/kaithirai-pattu/poigai-pattu',
  },
  {
    name: 'Amber Mustard Gold Silk',
    price: 'Rs. 17,200',
    note: 'Ezhil Thanga Thorana',
    img: '/Ezhil-pattu/EZ-TT-0101-1.png',
    fallbackImg: '/Ezhil-pattu/EP-TT-2.png',
    href: '/ezhil-pattu/azhagu-pattu',
  },
  {
    name: 'Honey Amudha Soft Silk',
    price: 'Rs. 15,600',
    note: 'Mangai Amudha Pattu',
    img: '/Mangai-pattu/MG-AM-0101.png',
    fallbackImg: '/Mangai-pattu/MP-AP-1.png',
    href: '/mangai-pattu/amudha-pattu',
  },
]

const useFallbackImage = (event, fallbackImg) => {
  if (!fallbackImg) {
    return
  }

  const fallbackUrl = new URL(fallbackImg, window.location.origin).href

  if (event.currentTarget.src !== fallbackUrl) {
    event.currentTarget.src = fallbackImg
  }
}

export default function StoryArrivals() {
  return (
    <section id="about" className="section-reveal grid min-h-[520px] grid-cols-1 bg-[#0e0c1c] pt-5 lg:grid-cols-2">

      {/* OUR STORY */}
      <div className="relative overflow-hidden">
        <img
          src="/red-pose4.png"
          alt="Silk saree craftsmanship at Arulmathi"
          loading="lazy"
          decoding="async"
          className="story-promise-image w-full h-full min-h-[520px] object-cover object-top brightness-[0.92] lg:brightness-[0.62]"
        />
        {/* Gradient overlay + text */}
        <div className="story-promise-overlay absolute inset-0 bg-[linear-gradient(90deg,rgba(13,13,26,0.58)_0%,rgba(13,13,26,0.28)_48%,rgba(13,13,26,0.06)_100%),linear-gradient(180deg,rgba(13,13,26,0)_0%,rgba(13,13,26,0.32)_62%,rgba(13,13,26,0.62)_100%)] lg:bg-gradient-to-t lg:from-[#0d0d1a]/95 lg:via-[#0d0d1a]/40 lg:to-transparent flex flex-col justify-end p-6 sm:p-12">
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
        <div className="mobile-arrivals-grid mb-6 grid grid-cols-1 gap-3.5 pt-2.5 sm:grid-cols-2 xl:grid-cols-3">
          {arrivals.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="glow-card hover-lift bg-[#1e1b30] rounded-lg overflow-hidden cursor-pointer group transition-transform duration-300 block"
            >
              <div className="relative h-[260px] sm:h-[300px] lg:h-[340px] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                  decoding="async"
                  onError={(event) => useFallbackImage(event, item.fallbackImg)}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-400"
                />
              </div>
              <div className="story-arrival-card px-5 pt-4 pb-5">
                <p className="story-arrival-title font-serif text-[16px] font-medium leading-tight text-white mb-2 group-hover:text-[#d4a853] transition-colors">
                  {item.name}
                </p>
                <p className="story-arrival-note mb-2 font-sans text-[10px] uppercase tracking-[1.8px] text-white/46">
                  {item.note}
                </p>
                <p className="story-arrival-price font-sans text-[13px] text-[#c9933a] font-semibold">
                  {item.price}
                </p>
              </div>
            </a>
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
