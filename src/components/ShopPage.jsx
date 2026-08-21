import { useEffect, useRef } from 'react'

const whatsappUrl = 'https://wa.me/917010452034?text=Hello%20Arulmathi%20Silks%2C%20I%20need%20help%20selecting%20a%20saree.'

const collectionCards = [
  { title: 'Izhamathi Pattu', count: '2 Saree Designs', image: '/nav-1.png', href: '/izhamathi-pattu', desc: 'Heritage floral and golden butta silk sarees.' },
  { title: 'Saila Pattu', count: '6 Designs', image: '/nav-2.png', href: '/saila-pattu', desc: 'Soft vine-inspired silks for graceful occasions.' },
  { title: 'Aanchali Pattu', count: '9 Designs', image: '/nav-3.png', href: '/Aanchali-pattu', desc: 'Structured kattam patterns with festive richness.' },
  { title: 'Mayura Pattu', count: '9 Designs', image: '/nav-4.png', href: '/mayura-pattu', desc: 'Peacock-inspired drapes with elegant zari detail.' },
  { title: 'Vaibhava Pattu', count: '9 Designs', image: '/nav-5.png', href: '/vaibhava-pattu', desc: 'Grand bridal silks for auspicious celebrations.' },
  { title: 'Noolisai Pattu', count: '9 Designs', image: '/nav-6.png', href: '/noolisai-pattu', desc: 'Thread-inspired woven textures for festive wear.' },
  { title: 'Sezhinool Pattu', count: '9 Designs', image: '/nav-7.png', href: '/sezhinool-pattu', desc: 'Jewel-toned sarees with rich heritage motifs.' },
  { title: 'Velora Pattu', count: '9 Designs', image: '/nav-8.png', href: '/velora-pattu', desc: 'Refined silk sarees with polished festive appeal.' },
  { title: 'Ezhil Pattu', count: '9 Designs', image: '/nav-9.png', href: '/ezhil-pattu', desc: 'Graceful silk drapes with timeless traditional charm.' },
  { title: 'Kaithirai Pattu', count: '9 Designs', image: '/nav-10.png', href: '/kaithirai-pattu', desc: 'Nature-inspired motifs with soft luxury finishes.' },
  { title: 'Varnika Pattu', count: '1 Design', image: '/nav-11.png', href: '/varnika-pattu', desc: 'Color-rich pattu sarees for statement occasions.' },
  { title: 'Mangai Pattu', count: '9 Designs', image: '/nav-12.png', href: '/mangai-pattu', desc: 'Bold festive silks with ornate woven detailing.' },
]

const occasions = [
  { icon: 'fa-users', label: 'Weddings' },
  { icon: 'fa-fire-flame-simple', label: 'Festivals' },
  { icon: 'fa-ring', label: 'Engagement' },
  { icon: 'fa-champagne-glasses', label: 'Party Wear' },
  { icon: 'fa-landmark', label: 'Traditional' },
  { icon: 'fa-spa', label: 'Everyday Elegance' },
]

const trustItems = [
  { icon: 'fa-spa', title: 'Pure Silk Assured', text: 'We choose silk sarees with quality you can feel.' },
  { icon: 'fa-border-all', title: 'Handloom Heritage', text: 'Every saree is selected with respect for skilled weaving.' },
  { icon: 'fa-leaf', title: 'Rich Saree Colors', text: 'Drapes chosen for wedding, festive, and everyday grace.' },
  { icon: 'fa-shield-alt', title: 'Trusted Guidance', text: 'Support for selection, catalogue viewing, and store enquiries.' },
]

export default function ShopPage() {
  const shopHeroVideoRef = useRef(null)
  const shopHeroPlayCountRef = useRef(0)
  const storyVideoRef = useRef(null)
  const hasPlayedStoryVideoRef = useRef(false)

  useEffect(() => {
    const video = storyVideoRef.current

    if (!video) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasPlayedStoryVideoRef.current) return

        hasPlayedStoryVideoRef.current = true
        video.currentTime = 0
        video.play().catch(() => { })
      },
      { threshold: 0.45 },
    )

    observer.observe(video)

    return () => observer.disconnect()
  }, [])

  const replayStoryVideo = () => {
    const video = storyVideoRef.current

    if (!video) return

    video.muted = false
    video.volume = 1

    if (video.ended) {
      video.currentTime = 0
    }

    video.play().catch(() => { })
  }

  const replayShopHeroVideo = () => {
    const video = shopHeroVideoRef.current

    if (!video) return

    shopHeroPlayCountRef.current = 0
    video.currentTime = 0
    video.play().catch(() => { })
  }

  const handleShopHeroVideoEnded = (event) => {
    shopHeroPlayCountRef.current += 1

    if (shopHeroPlayCountRef.current < 3) {
      event.currentTarget.currentTime = 0
      event.currentTarget.play().catch(() => { })
      return
    }

    event.currentTarget.pause()
  }

  return (
    <section id="shop-page" className="bg-[#f6efe4] text-[#17131c]">
      <div
        className="relative isolate overflow-hidden bg-[#080b12] px-5 pt-0 text-white sm:px-8 lg:px-16"
        onClick={replayShopHeroVideo}
      >
        <video
          ref={shopHeroVideoRef}
          src="/Video-folder/AM-shop-video.mp4"
          aria-label="Pure silk sarees arranged for shopping"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-86"
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={handleShopHeroVideoEnded}
        />
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 -z-10 w-full bg-[linear-gradient(90deg,rgba(5,3,15,0.82)_0%,rgba(5,3,15,0.68)_30%,rgba(5,3,15,0.28)_54%,transparent_78%)]"
        />
        <div className="mx-auto grid min-h-[650px] max-w-7xl grid-cols-1 items-center py-16 md:min-h-[720px] lg:min-h-[780px] lg:grid-cols-[0.58fr_0.42fr]">
          <div className="max-w-[760px]">
            <p className="font-sans text-[14px] font-bold uppercase tracking-[4px] text-[#d2a24f] sm:text-[15px]">
              Shop Pure Silk Sarees
            </p>
            <h1 className="mt-6 font-serif text-[56px] font-normal leading-[1.04] text-white sm:text-[76px] lg:text-[92px]">
              Handpicked Elegance.<br />
              <em className="italic text-[#d2a24f]">Woven for You.</em>
            </h1>
            <p className="mt-7 max-w-[700px] font-sans text-[18px] leading-[1.9] text-white/82 sm:text-[20px]">
              Explore our exclusive range of pure silk sarees, handcrafted with tradition, chosen with care, and woven to perfection. Every saree tells a story of heritage, artistry, and trust.
            </p>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden px-5 py-14 sm:px-8 lg:px-16 lg:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(201,147,58,0.08),transparent_25%),radial-gradient(circle_at_88%_82%,rgba(201,147,58,0.07),transparent_25%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <p className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-[#a9762d]">Shop By Collection</p>
            <h2 className="mt-3 font-serif text-[38px] font-normal leading-[1.08] text-[#221824] sm:text-[50px]">Find Your Weave</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {collectionCards.map((item, index) => (
              <article key={item.title} className="shop-ref-rise overflow-hidden rounded-lg border border-[#e2cda8] bg-[#fbf7ef] shadow-[0_18px_42px_rgba(52,36,18,0.10)] transition-all duration-300 hover:-translate-y-1 hover:border-[#b9863c]/70 hover:shadow-[0_24px_54px_rgba(52,36,18,0.16)]" style={{ animationDelay: `${index * 80}ms` }}>
                <a href={item.href} className="group block">
                  <div className="h-[250px] overflow-hidden bg-[#e8ddcf]">
                    <img src={item.image} alt={item.title} className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="px-5 py-6">
                    <p className="font-sans text-[13px] font-bold uppercase tracking-[1.7px] text-[#a9762d]">{item.count}</p>
                    <h3 className="mt-2 font-serif text-[29px] font-normal leading-tight text-[#221824]">{item.title}</h3>
                    <p className="mt-3 min-h-[54px] font-sans text-[15px] leading-[1.7] text-[#5f5145]">{item.desc}</p>
                    <p className="mt-5 inline-flex items-center gap-2 font-sans text-[14px] font-bold uppercase tracking-[1.8px] text-[#9a6720] transition-colors group-hover:text-[#c9933a]">
                      View Collection <i className="fas fa-arrow-right text-[12px]" />
                    </p>
                  </div>
                </a>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-[#a9762d]">Shop By Occasion</p>
            <h2 className="mt-3 font-serif text-[36px] font-normal leading-[1.08] text-[#221824] sm:text-[48px]">Sarees for Every Moment</h2>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
            {occasions.map((item, index) => (
              <div key={item.label} className="shop-ref-rise flex flex-col items-center text-center" style={{ animationDelay: `${index * 70}ms` }}>
                <div className="flex h-[104px] w-[104px] items-center justify-center rounded-full border border-[#c99a51] bg-[#fbf7ef] text-[#b9863c] shadow-[0_8px_26px_rgba(52,36,18,0.06)]">
                  <i className={`fas ${item.icon} text-[34px]`} />
                </div>
                <p className="mt-4 font-sans text-[13px] text-[#221824]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#0d0d1a] px-5 py-10 sm:px-8 lg:px-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, index) => (
            <article key={item.title} className={`shop-ref-rise px-6 text-white ${index < trustItems.length - 1 ? 'lg:border-r lg:border-white/14' : ''}`} style={{ animationDelay: `${index * 80}ms` }}>
              <i className={`fas ${item.icon} text-[42px] text-[#d2a24f]`} />
              <h3 className="mt-4 font-serif text-[25px] font-normal text-[#d2a24f]">{item.title}</h3>
              <p className="mx-auto mt-3 max-w-[220px] font-sans text-[12px] leading-[1.75] text-white/74">{item.text}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-10 bg-[#f8f3eb] px-5 py-14 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-16 lg:py-20">
        <div className="mx-auto flex max-w-7xl flex-col justify-center lg:w-full">
          <p className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-[#a9762d]">Our Story</p>
          <h2 className="mt-4 font-serif text-[38px] font-normal leading-[1.1] text-[#221824] sm:text-[50px]">
            Rooted in Tradition.<br />Focused on You.
          </h2>
          <p className="mt-6 max-w-[520px] font-sans text-[13px] leading-[1.9] text-[#5f5145]">
            Arulmathi Silks began with a simple belief: that the beauty of pure silk lies in honest craftsmanship. From weaving to dyeing, every step is done with care, right here in Salem. When you shop with us, you support real people, real tradition, and a legacy that continues.
          </p>
          <a href="/about-us" className="glow-cta mt-7 inline-flex w-max items-center gap-3 rounded bg-[#b9863c] px-5 py-3 font-sans text-[11px] font-semibold text-white transition-colors hover:bg-[#d2a24f]">
            Know More About Us <i className="fas fa-arrow-right" />
          </a>
        </div>

        <div className="mx-auto w-full max-w-7xl overflow-hidden rounded-lg bg-[#e8ddcf] shadow-[0_18px_44px_rgba(52,36,18,0.12)]">
          <video
            ref={storyVideoRef}
            src="/Video-folder/shopvid.mp4"
            aria-label="Arulmathi Silks showroom story"
            className="h-full min-h-[420px] w-full object-cover object-top"
            muted
            playsInline
            preload="auto"
            onMouseEnter={replayStoryVideo}
            onClick={replayStoryVideo}
            onFocus={replayStoryVideo}
            onEnded={(event) => event.currentTarget.pause()}
          />
        </div>
      </div>

      <div className="bg-[#f1e6d7] px-5 py-8 sm:px-8 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 rounded-lg px-0 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#b9863c] text-[#b9863c]">
              <i className="fab fa-whatsapp text-[24px]" />
            </span>
            <div>
              <h3 className="font-serif text-[24px] font-normal text-[#221824]">Need Help Selecting?</h3>
              <p className="mt-1 font-sans text-[12px] text-[#6b5a49]">Our team is here to guide you through the collection.</p>
            </div>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex w-max items-center gap-3 rounded bg-[#b9863c] px-5 py-3 font-sans text-[11px] font-semibold text-white transition-colors hover:bg-[#d2a24f]">
            <i className="fab fa-whatsapp" /> Chat on WhatsApp <i className="fas fa-arrow-right" />
          </a>
        </div>
      </div>
    </section>
  )
}
