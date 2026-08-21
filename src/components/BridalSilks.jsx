const bridalSilks = [
  {
    name: 'Crimson Muhurtham Silk',
    detail: 'Grand bridal zari border',
    price: 'From Rs. 28,500',
    img: '/Vaibhava-pattu/VP-TM-Red1.png',
  },
  {
    name: 'Temple Red Bridal Drape',
    detail: 'Heirloom pallu finish',
    price: 'From Rs. 31,200',
    img: '/red-pose4.png',
  },
  {
    name: 'Antique Gold Bridal Silk',
    detail: 'Reception-ready glow',
    price: 'From Rs. 26,900',
    img: '/Velora-pattu/VP-VM-5.png',
  },
  {
    name: 'Royal Violet Wedding Silk',
    detail: 'Meenakari festive tone',
    price: 'From Rs. 29,800',
    img: '/Sezhinoo-pattu/SP-MV-Blue4.png',
  },
  {
    name: 'Ivory Zari Bridal Silk',
    detail: 'Soft ceremonial shimmer',
    price: 'From Rs. 24,700',
    img: '/red-pose3.png',
  },
  {
    name: 'Peacock Blue Bridal Silk',
    detail: 'Contrast korvai border',
    price: 'From Rs. 27,400',
    img: '/Kathirai-pattu/KP-PP-2.png',
  },
]

const bridalMoments = [
  'Muhurtham-ready reds, maroons, golds, and jewel tones',
  'Heavy zari borders, statement pallu work, and heirloom motifs',
  'Personalized curation for wedding, reception, and gifting rituals',
]

const bridalStats = [
  { value: '60+', label: 'bridal shades' },
  { value: '3', label: 'ceremony edits' },
  { value: '1:1', label: 'drape styling' },
]

export default function BridalSilks() {
  return (
    <section id="bridal-silks" className="section-reveal bg-[#13121f]">
      <div className="relative overflow-hidden bg-[#13121f] px-5 pb-10 pt-10 text-white sm:px-8 lg:min-h-[calc(100vh-120px)] lg:px-16 lg:pb-12 lg:pt-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_22%,rgba(201,147,58,0.17),transparent_27%),radial-gradient(circle_at_78%_22%,rgba(77,42,112,0.26),transparent_30%),radial-gradient(circle_at_86%_76%,rgba(201,147,58,0.10),transparent_24%),linear-gradient(135deg,#13121f_0%,#0d0d1a_54%,#18111f_100%)]" />
        <div className="footer-weave absolute inset-x-0 top-0 h-44 opacity-30" />

        <div className="relative mx-auto grid max-w-[1540px] grid-cols-1 gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-12 xl:gap-16">
          <div className="max-w-[560px] lg:pb-6">
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[3px] text-[#c9933a]">
              Bridal Collections
            </p>
            <h1 className="mt-4 font-serif text-[52px] font-normal leading-[0.98] text-white sm:text-[78px] lg:text-[92px] xl:text-[104px]">
              Bridal<br />
              <em className="italic text-[#d4a853]">Silks</em>
            </h1>
            <p className="mt-6 max-w-[520px] font-sans text-[13px] leading-[1.95] text-white/76 sm:text-[14px]">
              Wedding silks curated for muhurtham, reception, engagement, and heirloom moments, with luminous zari, royal color stories, and graceful drape support.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/#shop"
                className="glow-cta inline-flex items-center gap-3 border border-[#c9933a]/80 px-5 py-3 font-sans text-[11px] font-semibold uppercase tracking-[1.9px] text-[#d9a046] transition-colors hover:bg-[#c9933a] hover:text-[#13121f]"
              >
                Shop Bridal Silks <i className="fas fa-arrow-right" />
              </a>
              <a
                href="/#collections"
                className="inline-flex items-center gap-3 border border-white/20 px-5 py-3 font-sans text-[11px] font-semibold uppercase tracking-[1.9px] text-white/78 transition-colors hover:border-[#c9933a] hover:text-[#d9a046]"
              >
                Back to Collections
              </a>
            </div>

            <div className="mt-8 border-t border-white/16 pt-6">
              <div className="grid max-w-[560px] grid-cols-1 gap-4 sm:grid-cols-3">
                {bridalStats.map((stat) => (
                  <div key={stat.label} className="flex items-center gap-3 border-white/14 sm:border-r sm:last:border-r-0">
                    <span className="font-serif text-[30px] leading-none text-[#d9a046]">{stat.value}</span>
                    <span className="font-sans text-[9px] uppercase tracking-[1.5px] text-white/62">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="hidden h-[620px] grid-cols-12 grid-rows-8 gap-3 lg:grid xl:h-[700px]">
              <div className="hero-box-image col-start-5 col-end-10 row-start-1 row-end-3 overflow-hidden rounded-lg border border-[#c9933a]/40 bg-[#0d0d1a] shadow-[0_24px_70px_rgba(0,0,0,0.42)]">
                <img src="/Vaibhava-pattu/VP-TM-Red1.png" alt="Bridal silk portrait" className="h-full w-full object-cover object-top brightness-[0.86]" />
              </div>

              <div className="hero-box-image col-start-1 col-end-4 row-start-2 row-end-4 overflow-hidden rounded-lg border border-[#c9933a]/34 bg-[#0d0d1a] shadow-[0_18px_44px_rgba(0,0,0,0.34)]">
                <img src="/red-pose2.png" alt="Golden bridal silk detail" className="h-full w-full object-cover object-center brightness-[0.76]" />
              </div>

              <div className="hero-box-image col-start-10 col-end-12 row-start-2 row-end-5 overflow-hidden rounded-lg border border-[#c9933a]/34 bg-[#0d0d1a] shadow-[0_18px_44px_rgba(0,0,0,0.34)]">
                <img src="/red-pose5.png" alt="Temple bridal textile detail" className="h-full w-full object-cover object-center brightness-[0.78]" />
              </div>

              <div className="hero-box-image col-start-4 col-end-9 row-start-3 row-end-8 overflow-hidden rounded-lg border border-[#c9933a]/42 bg-[#0d0d1a] shadow-[0_28px_80px_rgba(0,0,0,0.50)]">
                <img src="/red-pose4.png" alt="Bridal silk saree in rich wedding tones" className="h-full w-full object-cover object-top brightness-[0.88]" />
              </div>

              <div className="hero-box-image col-start-1 col-end-4 row-start-4 row-end-6 overflow-hidden rounded-lg border border-[#c9933a]/34 bg-[#0d0d1a] shadow-[0_18px_44px_rgba(0,0,0,0.34)]">
                <img src="/red-pose3.png" alt="Bridal silk ceremony setting" className="h-full w-full object-cover object-center brightness-[0.78]" />
              </div>

              <div className="hero-box-image col-start-9 col-end-12 row-start-5 row-end-7 overflow-hidden rounded-lg border border-[#c9933a]/34 bg-[#0d0d1a] shadow-[0_18px_44px_rgba(0,0,0,0.34)]">
                <img src="/Velora-pattu/VP-VM-5.png" alt="Antique gold bridal silk" className="h-full w-full object-cover object-top brightness-[0.82]" />
              </div>

              <div className="hero-box-gold col-start-1 col-end-4 row-start-6 row-end-8 self-center rounded-lg border border-[#c9933a]/58 bg-[#171325]/94 p-5 text-white shadow-[0_20px_54px_rgba(0,0,0,0.38)]">
                <p className="font-sans text-[13px] leading-[1.55]">Crafted for<br /><em className="font-serif text-[20px] text-[#d9a046]">Life's Finest</em><br />Moments</p>
              </div>

              <div className="hero-box-info col-start-9 col-end-12 row-start-7 row-end-9 rounded-lg border border-[#c9933a]/46 bg-[#13121f]/90 p-4 shadow-[0_22px_62px_rgba(0,0,0,0.42)] backdrop-blur-md xl:p-5">
                <div className="overflow-hidden rounded-md border border-white/12">
                  <img src="/4-pose1.png" alt="Bridal silks for ceremony" className="h-[125px] w-full object-cover object-top brightness-[0.86] xl:h-[150px]" />
                </div>
                <p className="mt-3 font-sans text-[13px] font-semibold leading-[1.55] text-white">Timeless Heritage.<br />Endless Grace.</p>
                <span className="mt-3 block h-[2px] w-10 bg-[#d9a046]" />
              </div>
            </div>

            <div className="grid gap-4 lg:hidden">
              <div className="hero-box-image overflow-hidden rounded-lg border border-[#c9933a]/34 bg-[#0d0d1a] shadow-[0_26px_70px_rgba(0,0,0,0.42)]">
                <img src="/red-pose4.png" alt="Bridal silk saree in rich wedding tones" className="h-[440px] w-full object-cover object-top brightness-[0.88]" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-lg border border-[#c9933a]/24 bg-[#0d0d1a]">
                  <img src="/Vaibhava-pattu/VP-TM-Red1.png" alt="Muhurtham red bridal silk" className="h-[180px] w-full object-cover object-top brightness-[0.84]" />
                </div>
                <div className="overflow-hidden rounded-lg border border-[#c9933a]/24 bg-[#0d0d1a]">
                  <img src="/Velora-pattu/VP-VM-5.png" alt="Antique gold bridal silk" className="h-[180px] w-full object-cover object-top brightness-[0.88]" />
                </div>
              </div>
              <div className="hero-box-info rounded-lg border border-[#c9933a]/28 bg-[#1b1930]/78 p-5 shadow-[0_14px_34px_rgba(0,0,0,0.22)] backdrop-blur-sm">
                <p className="font-sans text-[10px] font-semibold uppercase tracking-[2.4px] text-[#c9933a]">Bridal Notes</p>
                <ul className="mt-4 space-y-3">
                  {bridalMoments.map((item, index) => (
                    <li key={item} className="hero-weave-item flex gap-3 font-sans text-[12px] leading-[1.8] text-white/72" style={{ animationDelay: `${index * 120}ms` }}>
                      <i className="fas fa-chevron-right mt-1.5 text-[9px] text-[#c9933a]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-[#f5f0e8] px-5 py-12 text-[#1a1420] sm:px-8 lg:px-16 lg:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(201,147,58,0.13),transparent_24%),radial-gradient(circle_at_88%_78%,rgba(75,26,110,0.06),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="font-sans text-[10px] font-semibold uppercase tracking-[2.5px] text-[#c9933a]">
                Featured Bridal
              </p>
              <h2 className="mt-2 font-serif text-[34px] font-normal text-[#1a1420] sm:text-[42px]">
                Wedding silk picks
              </h2>
            </div>
            <a href="/#shop" className="glow-text font-sans text-[10px] font-semibold uppercase tracking-[2px] text-[#5e4c3c] transition-colors hover:text-[#c9933a]">
              View all sarees <i className="fas fa-arrow-right ml-2" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {bridalSilks.map((saree) => (
              <article key={saree.name} className="glow-card hover-lift overflow-hidden rounded-lg bg-white/75 text-[#1a1a2e] shadow-[0_14px_34px_rgba(61,42,27,0.12)]">
                <div className="h-[230px] overflow-hidden bg-[#e8ddcf] sm:h-[260px]">
                  <img src={saree.img} alt={saree.name} className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105" />
                </div>
                <div className="p-3">
                  <h3 className="font-serif text-[16px] font-medium leading-tight">{saree.name}</h3>
                  <p className="mt-1 font-sans text-[9px] uppercase tracking-[1.3px] text-[#7a6653]">{saree.detail}</p>
                  <p className="mt-2 font-sans text-[11px] font-semibold text-[#c9933a]">{saree.price}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
