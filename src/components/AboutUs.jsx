import { useState } from 'react'

const heroBadges = [
  { icon: 'fa-spa', title: 'Pure Silk', text: 'Handpicked and tested' },
  { icon: 'fa-hands-holding-circle', title: 'Crafted', text: 'By skilled artisans' },
  { icon: 'fa-award', title: 'Trusted', text: 'By saree buyers' },
]

const craftPanels = [
  {
    number: '01',
    tag: 'Real Weaving',
    title: 'Woven with Heritage',
    text: 'Our sarees are selected with respect for traditional looms, fine borders, zari detail, and the skill passed through generations of textile families.',
    image: '/Images/Arulmathi-aboutus2.png',
    imageFirst: true,
    points: [
      { icon: 'fa-border-all', label: 'Traditional\nLooms' },
      { icon: 'fa-hands', label: 'Skilled\nArtisans' },
      { icon: 'fa-dharmachakra', label: 'Intricate\nDesigns' },
    ],
  },
  {
    number: '02',
    tag: 'Natural Tones',
    title: 'Dyed with Character',
    text: 'Every shade is chosen to feel rich, wearable, and occasion-ready, from bridal silks to festive sarees and wholesale catalogue selections.',
    image: '/Images/Arulmathi-about3.png',
    imageFirst: false,
    points: [
      { icon: 'fa-palette', label: 'Rich\nColors' },
      { icon: 'fa-check-circle', label: 'Selected\nQuality' },
      { icon: 'fa-clock', label: 'Long\nLasting' },
    ],
  },
]

const milestones = [
  { year: '1985', icon: 'fa-flag', title: 'The Beginning', text: 'The idea was born, beginning our legacy with a clear promise for silk quality.', image: '/Images/Arulmathi-aboutus1.png' },
  { year: '1989', icon: 'fa-handshake', title: 'Wholesale Begins', text: 'Started wholesale operations and built strong relationships with textile buyers.', image: '/Images/Arulmathi-shop2.png' },
  { year: '1991', icon: 'fa-border-all', title: '12 Own Handlooms', text: 'Expanded to in-house handlooms, giving our sarees a more consistent finish.', image: '/Images/Arulmathi-aboutus2.png' },
  { year: '1996', icon: 'fa-table-cells-large', title: '2,000 Handlooms', text: 'Reached a wider handloom network while protecting traditional weaving quality.', image: '/Images/Arulmathi-about3.png' },
  { year: '2001', icon: 'fa-industry', title: 'Silk Manufacturing', text: 'Built complete silk manufacturing support for dependable catalogue production.', image: '/Images/Arulmathi-shop3.png' },
  { year: '2006', icon: 'fa-person-dress', title: '2,000 Sarees Monthly', text: 'Reached steady monthly production and strengthened our supply capability.', image: '/Images/circle5.png' },
  { year: '2011', icon: 'fa-shirt', title: '4,000 Sarees Monthly', text: 'Expanded monthly saree sales with richer colors, motifs, and zari combinations.', image: '/Images/circle1.png' },
  { year: '2016', icon: 'fa-store', title: 'Retail Begins', text: 'Started retail operations so more families could experience our collections directly.', image: '/Images/Arulmathi-shop1.png' },
  { year: '2021', icon: 'fa-users', title: 'Trusted Customers', text: 'Reached a growing customer family through quality, support, and reliable service.', image: '/Images/ownerpic.png' },
  { year: '2026', icon: 'fa-gem', title: 'Trend Adoption', text: 'Moving with trends and creating sarees for modern preferences.', image: '/Images/circle2.png', featured: true },
]

const timelineRows = [
  { key: 'top', start: 0, items: milestones.slice(0, 5), path: 'M20 70 C145 18 205 122 330 70 S525 18 665 70 S885 122 1025 70 S1220 18 1480 70' },
  { key: 'bottom', start: 5, items: milestones.slice(5), path: 'M20 70 C145 122 225 18 350 70 S565 122 720 70 S950 18 1100 70 S1280 122 1480 70' },
]

function MilestoneWave({ rowKey, path, activePosition }) {
  const pathId = `milestone-wave-${rowKey}`
  const activeOffset = -activePosition * 295
  const hasActiveSegment = activePosition >= 0

  return (
    <svg className="milestone-wave-svg" viewBox="0 0 1500 140" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <filter id={`milestone-glow-${rowKey}`} x="-20%" y="-80%" width="140%" height="260%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path id={pathId} d={path} fill="none" stroke="transparent" />
      <path className="timeline-wave-base" d={path} fill="none" />
      <path className="timeline-wave" d={path} fill="none" />
      <path className="timeline-wave-highlight" d={path} fill="none" />
      <path className="timeline-wave-active" d={path} fill="none" style={{ opacity: hasActiveSegment ? 1 : 0, strokeDashoffset: hasActiveSegment ? activeOffset : 0 }} filter={`url(#milestone-glow-${rowKey})`} />
      {[0, 1, 2, 3].map((particle) => (
        <circle key={particle} className="timeline-wave-particle" r={particle % 2 === 0 ? 4 : 3}>
          <animateMotion dur={`${7 + particle}s`} begin={`${particle * -1.4}s`} repeatCount="indefinite">
            <mpath href={`#${pathId}`} />
          </animateMotion>
        </circle>
      ))}
    </svg>
  )
}

export default function AboutUs() {
  const initialMilestoneIndex = milestones.findIndex((item) => item.year === '2026')
  const [selectedMilestoneIndex, setSelectedMilestoneIndex] = useState(initialMilestoneIndex)
  const [hoveredMilestoneIndex, setHoveredMilestoneIndex] = useState(null)
  const activeMilestoneIndex = hoveredMilestoneIndex
  const activeRow = activeMilestoneIndex === null ? -1 : activeMilestoneIndex < 5 ? 0 : 1
  const activePosition = activeMilestoneIndex === null ? -1 : activeMilestoneIndex % 5

  return (
    <section id="about-us" className="bg-[#f6efe4] text-[#17131c]">
      <div className="relative isolate overflow-hidden bg-[#080b12] px-5 pt-0 text-white sm:px-8 lg:px-16">
        <img
          src="/Images/Arulmathi-aboutus1.png"
          alt="Silk weaving and saree texture at Arulmathi Silks"
          className="absolute inset-0 right-0 -z-20 h-full w-full object-cover object-center opacity-82 md:object-contain md:object-right"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#080b12_0%,rgba(8,11,18,0.95)_36%,rgba(8,11,18,0.48)_64%,rgba(8,11,18,0.08)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-36 bg-gradient-to-t from-[#080b12] to-transparent" />

        <div className="mx-auto grid min-h-[650px] max-w-7xl grid-cols-1 items-center py-16 md:min-h-[720px] lg:min-h-[780px] lg:grid-cols-[0.6fr_0.4fr]">
          <div className="max-w-[780px]">
            <p className="font-sans text-[14px] font-bold uppercase tracking-[4px] text-[#d2a24f] sm:text-[15px]">
              About Arulmathi Silks
            </p>
            <h1 className="mt-6 font-serif text-[56px] font-normal leading-[1.04] text-white sm:text-[76px] lg:text-[92px]">
              Crafted in Tradition.<br />
              Trusted for <em className="italic text-[#d2a24f]">Generations.</em>
            </h1>
            <p className="mt-7 max-w-[710px] font-sans text-[18px] leading-[1.9] text-white/82 sm:text-[20px]">
              Arulmathi Silks is a saree manufacturer and wholesaler based in Pachanampatti, Salem. Our journey carries decades of silk tradition, quality, and trust in every thread.
            </p>

            <div className="mt-11 grid max-w-[680px] grid-cols-1 gap-6 font-sans sm:grid-cols-3">
              {heroBadges.map((badge, index) => (
                <div key={badge.title} className="about-ref-rise flex items-start gap-3" style={{ animationDelay: `${index * 100}ms` }}>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center text-[#d2a24f]">
                    <i className={`fas ${badge.icon} text-[32px]`} />
                  </span>
                  <span>
                    <span className="block text-[16px] font-semibold text-[#d2a24f]">{badge.title}</span>
                    <span className="mt-1 block text-[14px] leading-[1.6] text-white/72">{badge.text}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden px-5 py-14 sm:px-8 lg:px-16 lg:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(201,147,58,0.10),transparent_24%),radial-gradient(circle_at_86%_70%,rgba(201,147,58,0.08),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-9 text-center">
            <p className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-[#a9762d]">Our Craft</p>
            <h2 className="mt-3 font-serif text-[38px] font-normal leading-[1.1] text-[#221824] sm:text-[50px]">
              The Art Behind Every Saree
            </h2>
          </div>

          <div className="overflow-hidden rounded-lg border border-[#d6c6ad] bg-[#fbf7ef] shadow-[0_20px_54px_rgba(52,36,18,0.10)]">
            {craftPanels.map((panel, index) => (
              <article key={panel.number} className="about-ref-rise grid grid-cols-1 border-b border-[#d6c6ad] last:border-b-0 lg:grid-cols-2" style={{ animationDelay: `${index * 130}ms` }}>
                {panel.imageFirst && (
                  <div className="h-[330px] overflow-hidden lg:h-[380px]">
                    <img src={panel.image} alt={panel.title} loading="lazy" decoding="async" className="h-full w-full object-cover object-top" />
                  </div>
                )}

                <div className="flex min-h-[330px] flex-col justify-center p-7 sm:p-10 lg:p-12">
                  <p className="font-sans text-[10px] font-bold uppercase tracking-[2.8px] text-[#b37a2d]">
                    <span className="mr-2 font-serif text-[22px] font-normal text-[#c7974f]">{panel.number}</span>{panel.tag}
                  </p>
                  <h3 className="mt-4 font-serif text-[34px] font-normal leading-[1.08] text-[#221824] sm:text-[42px]">{panel.title}</h3>
                  <p className="mt-5 max-w-[560px] font-sans text-[13px] leading-[1.9] text-[#5f5145]">{panel.text}</p>
                  <div className="mt-8 grid grid-cols-3 gap-5">
                    {panel.points.map((point) => (
                      <div key={point.label} className="text-center text-[#9d6f2c]">
                        <i className={`fas ${point.icon} text-[28px]`} />
                        <p className="mt-3 whitespace-pre-line font-sans text-[11px] leading-[1.45] text-[#5f5145]">{point.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {!panel.imageFirst && (
                  <div className="h-[330px] overflow-hidden lg:h-[380px]">
                    <img src={panel.image} alt={panel.title} loading="lazy" decoding="async" className="h-full w-full object-cover object-top" />
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#07110d] px-5 py-12 sm:px-8 lg:px-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 overflow-hidden rounded-lg border border-[#d2a24f]/35 bg-[rgba(13,13,26,1)] shadow-[0_28px_70px_rgba(0,0,0,0.46),0_0_0_1px_rgba(210,162,79,0.10)] lg:grid-cols-[0.42fr_0.58fr]">
          <div className="min-h-[360px] overflow-hidden">
            <img src="/Images/founderimg.png" alt="Arulmathi Silks founder promise" className="h-full w-full object-cover object-top" />
          </div>
          <div className="flex flex-col justify-center bg-[radial-gradient(circle_at_88%_18%,rgba(210,162,79,0.12),transparent_28%)] p-8 text-white sm:p-12 lg:p-16">
            <p className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-[#d2a24f]">Our Story</p>
            <h2 className="mt-4 font-serif text-[36px] font-normal leading-[1.1] sm:text-[48px]">
              A Personal Promise of Quality
            </h2>
            <p className="mt-6 max-w-[560px] font-sans text-[13px] leading-[1.95] text-white/75">
              Arulmathi Silks was shaped by a simple belief: to make pure silk sarees accessible without compromising on quality. What began as a family textile journey is today a trusted name for saree customers and wholesale buyers.
            </p>
            <p className="mt-7 font-serif text-[28px] italic text-[#d2a24f]">Arulmathi Silks</p>
            <p className="mt-1 font-sans text-[12px] text-[#d2a24f]">Founder-led textile promise</p>
          </div>
        </div>
      </div>

      <div className="milestone-legacy relative overflow-visible px-5 py-14 sm:px-8 lg:px-16 lg:py-20">
        <div className="relative mx-auto max-w-[1480px] text-center">
          <p className="font-sans text-[10px] font-bold uppercase tracking-[5px] text-[#b98335]">+40 Years of Legacy</p>
          <h2 className="mt-3 font-serif text-[42px] font-normal leading-[1.04] text-[#221824] sm:text-[58px] lg:text-[68px]">
            Woven Through Time
          </h2>
          <div className="mx-auto mt-5 flex w-40 items-center justify-center gap-3 text-[#b98335]">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#c7974f]" />
            <span className="h-2 w-2 rotate-45 bg-[#b98335]" />
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#c7974f]" />
          </div>

          <div className="milestone-timeline mt-12">
            {timelineRows.map((row, rowIndex) => {
              const rowActivePosition = activeRow === rowIndex ? activePosition : -1

              return (
                <div key={row.key} className={`milestone-row milestone-row-${row.key} relative ${rowIndex === 0 ? '' : 'mt-12 lg:mt-16'}`}>
                  <MilestoneWave rowKey={row.key} path={row.path} activePosition={rowActivePosition} />
                  <div className="milestone-node-grid">
                    {row.items.map((item, index) => {
                      const absoluteIndex = row.start + index
                      const isActive = absoluteIndex === activeMilestoneIndex
                      const isSelected = absoluteIndex === selectedMilestoneIndex
                      const popupAlign = index === 0 ? 'popup-align-left' : index === row.items.length - 1 ? 'popup-align-right' : 'popup-align-center'

                      return (
                        <div
                          key={item.year}
                          className={`about-ref-rise milestone-wrapper ${isActive ? 'is-active' : ''} ${isSelected ? 'is-selected' : ''} ${popupAlign}`}
                          style={{ animationDelay: `${absoluteIndex * 90}ms` }}
                          onMouseEnter={() => setHoveredMilestoneIndex(absoluteIndex)}
                          onMouseLeave={() => setHoveredMilestoneIndex(null)}
                        >
                          <button
                            type="button"
                            className="milestone-node"
                            aria-pressed={isSelected}
                            aria-label={`Show milestone ${item.year}: ${item.title}`}
                            onFocus={() => setHoveredMilestoneIndex(absoluteIndex)}
                            onBlur={() => setHoveredMilestoneIndex(null)}
                            onClick={() => setSelectedMilestoneIndex(absoluteIndex)}
                          >
                            <span className="milestone-icon mx-auto">
                              <span className="milestone-ring milestone-ring-one" />
                              <span className="milestone-ring milestone-ring-two" />
                              <i className={`fas ${item.icon}`} />
                            </span>
                            <span className="milestone-year">{item.year}</span>
                            <span className="milestone-title">{item.title}</span>
                            <span className="milestone-text">{item.text}</span>
                          </button>

                          {isActive && (
                            <div className="milestone-detail-card" role="status">
                              <div className="milestone-content">
                                <p className="font-serif text-[28px] leading-none text-[#b98335]">{item.year}</p>
                                <h3 className="mt-2 font-serif text-[24px] leading-tight text-[#221824]">{item.title}</h3>
                                <div className="mt-4 h-px w-12 bg-[#b98335]" />
                                <p className="milestone-description milestone-preview-text mt-5 font-sans text-[12px] leading-[1.75] text-[#6b5a49]">{item.text}</p>
                                <span className="mt-7 inline-flex items-center gap-3 border-b border-dotted border-[#b98335]/70 pb-1 font-sans text-[11px] font-semibold text-[#b98335]">
                                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#b98335] text-white">
                                    <i className="fas fa-arrow-right text-[9px]" />
                                  </span>
                                  Explore milestone
                                </span>
                              </div>
                              <img className="milestone-image" src={item.image} alt={`${item.title} silk milestone`} loading="lazy" decoding="async" />
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>

          <div className="milestone-trust-badge about-ref-rise group">
            <span className="trust-border-stars" aria-hidden="true">
              <span />
              <span />
            </span>
            <span className="trust-badge-icon">
              <i className="fas fa-users" />
            </span>
            <div className="text-left">
              <p className="trust-badge-years">40 + Years</p>
              <p className="trust-badge-text">Crafted with Trust</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
