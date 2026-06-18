const features = [
  { icon: 'fa-leaf', title: 'PURE SILK', desc: '100% authentic pure silk' },
  { icon: 'fa-hands', title: 'HANDWOVEN', desc: 'Crafted by skilled weavers' },
  { icon: 'fa-seedling', title: 'SUSTAINABLE', desc: 'Eco-friendly dyes & processes' },
  { icon: 'fa-shield-alt', title: 'SECURE PAYMENT', desc: 'Safe & hassle-free transactions' },
  { icon: 'fa-truck', title: 'WORLDWIDE DELIVERY', desc: 'Delivered with care, wherever you are' },
]

export default function FeaturesBar() {
  return (
    <div className="section-reveal bg-[#1a1830] flex items-center justify-between px-16 py-7 gap-5">
      {features.map((f, i) => (
        <div
          key={f.title}
          className={`feature-pop flex items-center gap-3.5 flex-1 px-4 ${
            i < features.length - 1 ? 'border-r border-white/[0.08]' : ''
          }`}
          style={{ animationDelay: `${i * 80}ms` }}
        >
          <i className={`glow-icon fas ${f.icon} text-[22px] text-[#c9933a] flex-shrink-0`} />
          <div>
            <strong className="block font-sans text-[10px] tracking-[1.5px] font-semibold text-white mb-0.5">
              {f.title}
            </strong>
            <p className="font-sans text-[10px] text-gray-500 leading-[1.5] font-light">
              {f.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
