const occasions = [
  {
    label: 'WEDDING',
    img: '/d2.png',
  },
  {
    label: 'FESTIVE',
    img: '/d3.png',
  },
  {
    label: 'PARTY',
    img: '/d1.png',
  },
  {
    label: 'OFFICE',
    img: '/d4.png',
  },
  {
    label: 'EVERYDAY',
    img: '/d5.png',
  },
    {
    label: 'SIMPLE',
    img: '/d6.png',
  },
  {
    label: 'MODERN',
    img: '/d1.png',
  },
]

export default function Occasions() {
  return (
    <section id="shop" className="section-reveal bg-[#f5f0e8] px-16 py-16 flex items-center gap-12">

      {/* Left heading */}
      <div className="flex-shrink-0 w-64">
        <p className="font-sans text-[10px] tracking-[2.5px] text-gray-400 font-medium uppercase mb-2">
          SHOP BY OCCASION
        </p>
        <h2 className="font-serif text-[38px] font-normal leading-[1.2] text-[#1a1a2e] mb-4">
          For Every Moment,<br />
          A{' '}
          <em className="italic text-[#c9933a]">Perfect Drape</em>
        </h2>
        <i className="glow-icon fas fa-gem text-[#c9933a] text-xl" />
      </div>

      {/* Occasion circles */}
      <div className="flex-1 flex items-center gap-6">
        {occasions.map((o) => (
          <div
            key={o.label}
            className="occasion-pop flex flex-col items-center gap-2.5 cursor-pointer group"
          >
            <div className="glow-orbit w-[100px] h-[100px] rounded-full overflow-hidden border-2 border-[#c9933a]/30 group-hover:border-[#c9933a] group-hover:scale-105 transition-all duration-300">
              <img
                src={o.img}
                alt={o.label}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-sans text-[9px] tracking-[2.5px] font-semibold text-gray-500 uppercase">
              {o.label}
            </p>
          </div>
        ))}

        {/* Next button
        <button className="w-10 h-10 rounded-full bg-[#0d0d1a] text-white flex items-center justify-center text-sm shadow-md hover:bg-[#c9933a] transition-colors duration-200 flex-shrink-0 ml-2">
          <i className="fas fa-arrow-right" />
        </button> */}
      </div>
    </section>
  )
}
