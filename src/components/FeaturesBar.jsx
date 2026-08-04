const features = [
  { icon: 'fa-certificate', title: 'AUTHENTIC SILK', desc: 'Carefully selected pure silk sarees' },
  { icon: 'fa-hands', title: 'WEAVER CRAFT', desc: 'Details inspired by traditional looms' },
  { icon: 'fa-ribbon', title: 'BRIDAL READY', desc: 'Wedding, muhurtham and trousseau edits' },
  { icon: 'fa-shield-alt', title: 'TRUSTED GUIDANCE', desc: 'Helpful support for every selection' },
  { icon: 'fa-box-open', title: 'CATALOGUE READY', desc: 'Collections arranged for easy viewing' },
]

export default function FeaturesBar() {
  return (
    <div className="section-reveal bg-[#1a1830] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 px-5 sm:px-8 lg:px-16 py-7 gap-5">
      {features.map((f, i) => (
        <div
          key={f.title}
          className={`feature-pop flex items-center gap-3.5 flex-1 px-4 ${
            i < features.length - 1 ? 'lg:border-r lg:border-white/[0.08]' : ''
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

