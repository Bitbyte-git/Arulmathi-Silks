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
    image: '/Arulmathi-aboutus2.png',
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
    image: '/Arulmathi-about3.png',
    imageFirst: false,
    points: [
      { icon: 'fa-palette', label: 'Rich\nColors' },
      { icon: 'fa-check-circle', label: 'Selected\nQuality' },
      { icon: 'fa-clock', label: 'Long\nLasting' },
    ],
  },
]

const milestones = [
  { year: '2019', icon: 'fa-flag', title: 'The Beginning', text: 'Arulmathi Silks was established in Pachanampatti, Salem.' },
  { year: '2020', icon: 'fa-users', title: 'First Customers', text: 'Started serving local customers with pure silk sarees.' },
  { year: '2021', icon: 'fa-store', title: 'Wholesale Expansion', text: 'Grew as a saree manufacturer and wholesale supplier.' },
  { year: '2023', icon: 'fa-star', title: 'Trusted Choice', text: 'Built recognition through quality, catalogue support, and service.' },
  { year: '2024', icon: 'fa-award', title: 'Looking Ahead', text: 'Continuing the journey with the same trust and tradition.' },
]

export default function AboutUs() {
  return (
    <section id="about-us" className="bg-[#f6efe4] text-[#17131c]">
      <div className="relative isolate overflow-hidden bg-[#080b12] px-5 pt-[120px] text-white sm:px-8 lg:px-16">
        <img
          src="/Arulmathi-aboutus1.png"
          alt="Silk weaving and saree texture at Arulmathi Silks"
          className="absolute inset-y-0 right-0 -z-20 h-full w-full object-cover object-top opacity-62 lg:w-[58%]"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#080b12_0%,rgba(8,11,18,0.97)_42%,rgba(8,11,18,0.58)_70%,rgba(8,11,18,0.18)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-36 bg-gradient-to-t from-[#080b12] to-transparent" />

        <div className="mx-auto grid min-h-[560px] max-w-7xl grid-cols-1 items-center py-14 lg:grid-cols-[0.62fr_0.38fr]">
          <div className="max-w-[640px]">
            <p className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-[#d2a24f]">
              About Arulmathi Silks
            </p>
            <h1 className="mt-5 font-serif text-[42px] font-normal leading-[1.08] text-white sm:text-[58px] lg:text-[70px]">
              Crafted in Tradition.<br />
              Trusted for <em className="italic text-[#d2a24f]">Generations.</em>
            </h1>
            <p className="mt-6 max-w-[480px] font-sans text-[13px] leading-[1.9] text-white/78">
              Arulmathi Silks is a saree manufacturer and wholesaler based in Pachanampatti, Salem. Since 2019, we have been shaping pure silk sarees that carry tradition, quality, and trust in every thread.
            </p>

            <div className="mt-10 grid max-w-[560px] grid-cols-1 gap-5 sm:grid-cols-3">
              {heroBadges.map((badge, index) => (
                <div key={badge.title} className="about-ref-rise flex items-start gap-3" style={{ animationDelay: `${index * 100}ms` }}>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center text-[#d2a24f]">
                    <i className={`fas ${badge.icon} text-[26px]`} />
                  </span>
                  <span>
                    <span className="block font-sans text-[11px] font-semibold text-[#d2a24f]">{badge.title}</span>
                    <span className="mt-1 block font-sans text-[11px] leading-[1.55] text-white/70">{badge.text}</span>
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
                    <img src={panel.image} alt={panel.title} className="h-full w-full object-cover object-top" />
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
                    <img src={panel.image} alt={panel.title} className="h-full w-full object-cover object-top" />
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
            <img src="/ownerpic.png" alt="Arulmathi Silks founder promise" className="h-full w-full object-cover object-top" />
          </div>
          <div className="flex flex-col justify-center bg-[radial-gradient(circle_at_88%_18%,rgba(210,162,79,0.12),transparent_28%)] p-8 text-white sm:p-12 lg:p-16">
            <p className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-[#d2a24f]">Our Story</p>
            <h2 className="mt-4 font-serif text-[36px] font-normal leading-[1.1] sm:text-[48px]">
              A Personal Promise of Quality
            </h2>
            <p className="mt-6 max-w-[560px] font-sans text-[13px] leading-[1.95] text-white/75">
              Arulmathi Silks was started with a simple belief: to make pure silk sarees accessible without compromising on quality. What began as a small step in 2019 is today a trusted textile name for saree customers and wholesale buyers.
            </p>
            <p className="mt-7 font-serif text-[28px] italic text-[#d2a24f]">Arulmathi Silks</p>
            <p className="mt-1 font-sans text-[12px] text-[#d2a24f]">Founder-led textile promise</p>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden px-5 py-14 sm:px-8 lg:px-16 lg:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_10%,rgba(201,147,58,0.10),transparent_24%),radial-gradient(circle_at_86%_80%,rgba(201,147,58,0.08),transparent_26%)]" />
        <div className="relative mx-auto max-w-7xl text-center">
          <p className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-[#a9762d]">Our Milestones</p>
          <h2 className="mt-3 font-serif text-[38px] font-normal leading-[1.1] text-[#221824] sm:text-[50px]">
            Growth Rooted in Trust
          </h2>
          <div className="mx-auto mt-4 h-px w-28 bg-gradient-to-r from-transparent via-[#b9863c] to-transparent" />

          <div className="relative mt-12 grid grid-cols-1 gap-8 md:grid-cols-5">
            <div className="absolute left-[10%] right-[10%] top-8 hidden h-px bg-[#b9863c]/55 md:block" />
            {milestones.map((item, index) => (
              <article key={item.year} className="about-ref-rise relative" style={{ animationDelay: `${index * 110}ms` }}>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#b9863c] bg-[#f6efe4] text-[#b9863c] shadow-[0_0_0_10px_rgba(246,239,228,0.9)]">
                  <i className={`fas ${item.icon} text-[24px]`} />
                </div>
                <p className="mt-5 font-sans text-[16px] font-bold text-[#221824]">{item.year}</p>
                <h3 className="mt-2 font-sans text-[13px] font-bold text-[#221824]">{item.title}</h3>
                <p className="mx-auto mt-2 max-w-[170px] font-sans text-[11px] leading-[1.65] text-[#6b5a49]">{item.text}</p>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-12 inline-flex items-center gap-4 rounded-lg border border-[#c8ad82] bg-[#fbf7ef] px-10 py-5 text-left shadow-[0_12px_32px_rgba(52,36,18,0.08)]">
            <i className="fas fa-users text-[30px] text-[#b9863c]" />
            <div>
              <p className="font-serif text-[38px] leading-none text-[#b9863c]">1000+</p>
              <p className="mt-1 font-sans text-[12px] text-[#5f5145]">Happy Customers and Counting</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
