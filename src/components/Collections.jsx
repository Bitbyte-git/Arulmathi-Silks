import { useMemo, useState } from 'react'

const collections = [
  {
    name: 'Pastel Dreams',
    img: '/image9.png',
  },
  {
    name: 'Royal Traditions',
    img: '/image10.png',
  },
  {
    name: 'Golden Hour',
    img: '/image11.png',
  },
  {
    name: 'Modern Muse',
    img: '/3-pose2.png',
  },
]

export default function Collections() {
  const [activeIndex, setActiveIndex] = useState(0)

  const visibleCollections = useMemo(
    () => collections.map((_, index) => collections[(activeIndex + index) % collections.length]),
    [activeIndex]
  )

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + collections.length) % collections.length)
  }

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % collections.length)
  }

  return (
    <section id="collections" className="section-reveal relative bg-[#f5f0e8] py-16 px-16 flex items-center gap-12 rounded-t-3xl -mt-5 z-10">

      {/* Left text */}
      <div className="flex-shrink-0 w-48">
        <p className="font-sans text-[10px] tracking-[2.5px] text-gray-400 font-medium uppercase mb-2">
          EXPLORE OUR
        </p>
        <h2 className="font-serif text-[42px] font-normal leading-[1.1] text-[#1a1a2e] mb-3">
          Signature<br />Collections
        </h2>
        <p className="font-sans text-[12px] leading-[1.8] text-gray-500 font-light mb-6">
          Handpicked sarees that<br />celebrate every you.
        </p>
        <div className="flex gap-2.5">
          <button
            type="button"
            aria-label="Show previous collection"
            onClick={showPrevious}
            className="glow-round w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-[13px] text-gray-500 hover:bg-[#c9933a] hover:border-[#c9933a] hover:text-white transition-all duration-200"
          >
            <i className="fas fa-arrow-left" />
          </button>
          <button
            type="button"
            aria-label="Show next collection"
            onClick={showNext}
            className="glow-round w-9 h-9 rounded-full bg-[#c9933a] border border-[#c9933a] flex items-center justify-center text-[13px] text-white hover:bg-[#b8822e] transition-all duration-200"
          >
            <i className="fas fa-arrow-right" />
          </button>
        </div>
      </div>

      {/* Cards grid */}
      <div key={activeIndex} className="collections-carousel flex-1 grid grid-cols-4 gap-3.5">
        {visibleCollections.map((col, index) => (
          <div
            key={`${col.name}-${index}`}
            className="glow-card hover-lift rounded-xl overflow-hidden cursor-pointer group"
          >
            <div className="overflow-hidden h-[260px]">
              <img
                src={col.img}
                alt={col.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="bg-white px-3 py-3.5">
              <h3 className="font-serif text-[17px] font-medium text-[#1a1a2e] mb-1.5">
                {col.name}
              </h3>
              <a
                href="#shop"
                className="font-sans text-[9px] tracking-[1.5px] text-gray-500 flex items-center gap-1.5 hover:text-[#c9933a] transition-colors duration-200"
              >
                VIEW COLLECTION <i className="fas fa-arrow-right" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Next scroll button */}
      <button
        type="button"
        aria-label="Show next collection"
        onClick={showNext}
        className="glow-round absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0d0d1a] text-white flex items-center justify-center text-sm shadow-lg hover:bg-[#c9933a] transition-colors duration-200 z-10"
      >
        <i className="fas fa-arrow-right" />
      </button>
    </section>
  )
}
