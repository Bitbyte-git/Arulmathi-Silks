import { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const [isStoryOpen, setIsStoryOpen] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    window.dispatchEvent(new CustomEvent('arulmathi:story-video', {
      detail: { isOpen: isStoryOpen },
    }))

    if (isStoryOpen) {
      videoRef.current?.play()
    } else {
      videoRef.current?.pause()
    }

    return () => {
      window.dispatchEvent(new CustomEvent('arulmathi:story-video', {
        detail: { isOpen: false },
      }))
    }
  }, [isStoryOpen])

  useEffect(() => {
    if (!isStoryOpen) return undefined

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        closeStory()
      }
    }

    window.addEventListener('keydown', closeOnEscape)

    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [isStoryOpen])

  useEffect(() => {
    // Ensure exact 35px gap below navbar on mobile by adjusting absolute wrapper top inline.
    const applyMobileHeroTop = () => {
      const heroInner = document.querySelector('.hero-inner')
      if (!heroInner) return

      if (window.innerWidth <= 640) {
        heroInner.style.top = `calc(var(--nav-height,126px) + 35px)`
      } else {
        heroInner.style.top = `calc(var(--nav-height,126px) + var(--hero-top-offset,10px) + 50px)`
      }
    }

    applyMobileHeroTop()
    window.addEventListener('resize', applyMobileHeroTop)
    return () => window.removeEventListener('resize', applyMobileHeroTop)
  }, [])

  const closeStory = () => {
    setIsStoryOpen(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 640 : false)

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 640)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <section
      id="home"
      data-nav-hero
      className="relative w-full min-h-[680px] overflow-visible md:overflow-hidden"
      style={{ minHeight: '100svh' }}
    >
      <picture>
        <source media="(max-width: 767px)" srcSet="/Images/mob-view.png" />
        <img
          src="/Images/heroimg-1600.jpg"
          srcSet="/Images/heroimg-960.jpg 960w, /Images/heroimg-1600.jpg 1600w"
          sizes="100vw"
          width="1600"
          height="900"
          alt="Woman wearing a traditional Arulmathi pure silk saree"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className={`hero-bg-image transition-opacity duration-500 ${isStoryOpen ? 'opacity-0' : 'opacity-100'}`}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transformOrigin: 'center center',
          }}
        />
      </picture>

      {isStoryOpen && (
        <div className="absolute inset-0 z-40 story-video-backdrop">
          <video
            ref={videoRef}
            src="/videos/AM-Hero-video.mp4"
            className="w-full h-full object-cover bg-black"
            playsInline
            autoPlay
            loop
            disablePictureInPicture
          />
          <button
            type="button"
            aria-label="Close story video"
            onClick={closeStory}
            className="absolute top-24 right-8 z-10 w-10 h-10 rounded-full bg-black/55 border border-white/50 text-white text-2xl leading-none flex items-center justify-center hover:border-[#c9933a] hover:text-[#c9933a] hover:bg-black/75 transition-colors"
          >
            &times;
          </button>
        </div>
      )}

      <div
        className={`absolute inset-0 transition-opacity duration-500 ${isStoryOpen ? 'opacity-20' : 'opacity-100'}`}
        style={{
          background: 'linear-gradient(to right, rgba(5,3,15,0.50) 0%, rgba(5,3,15,0.45) 35%, rgba(5,3,15,0.12) 60%, transparent 100%)',
        }}
      />

      <div
        className="absolute top-0 left-0 right-0 z-20 pointer-events-none"
        style={{
          height: 'calc(var(--nav-height, 74px) + 20px)',
          background: 'linear-gradient(to bottom, rgba(5,3,15,0.82) 0%, rgba(5,3,15,0.42) 52%, transparent 100%)',
        }}
      />

      <div
        className={`hero-inner absolute left-0 right-0 bottom-0 z-20 flex items-start transition-opacity duration-500 ${isStoryOpen ? 'pointer-events-none opacity-0' : 'opacity-100'}`}
        style={{
          top: isMobile
            ? 'calc(var(--nav-height, 74px) + 22px)'
            : 'calc(var(--nav-height, 120px) + var(--hero-top-offset, 10px) + 30px)',
        }}
      >
        <div
          className="hero-content w-full max-w-[340px] px-4 sm:max-w-[520px] sm:px-5 md:max-w-[760px] sm:pl-10 sm:pr-0 md:w-[74%] lg:w-[64%] lg:pl-16 xl:pl-20"
        >
          <p className="hero-eyebrow mb-3 sm:mb-5 font-sans text-[10.5px] sm:text-[11px] font-semibold uppercase leading-[1.6] tracking-[2.5px] text-[#c9933a] lg:text-[13px]">
            CRAFTED IN HERITAGE, DESIGNED FOR TODAY
          </p>

          {isMobile ? (
            <h1 className="mb-3 sm:mb-5 font-serif text-[30px] font-normal leading-[1.05] text-white sm:text-[40px] md:text-[58px] lg:text-[74px] xl:text-[82px]">
              Timeless <em className="italic text-[#d4a853]">in</em><br />
              <em className="italic text-[#d4a853]">Every Weave</em>
            </h1>
          ) : (
            <h1 className="mb-5 font-serif text-[32px] font-normal leading-[1.02] text-white sm:text-[40px] md:text-[58px] lg:text-[74px] xl:text-[82px]">
              Timeless
              <em className="italic text-[#d4a853]"> in Every</em><br />
              <em className="italic text-[#d4a853]">Weave</em>
            </h1>
          )}

          {isMobile ? (
            <p className="mb-4 sm:mb-5 max-w-[520px] font-sans text-[12.5px] font-light leading-[1.7] text-white/92 sm:text-[14px] lg:text-[16px]">
              Experience the richness of pure <br />
              silk sarees woven with tradition, <br />
              elegance, and a finish made <br />
              for every treasured occasion.
            </p>
          ) : (
            <p className="mb-5 max-w-[500px] font-sans text-[13px] font-light leading-[1.75] text-white/92 sm:text-[14px] lg:mb-6 lg:text-[16px]">
              Experience the richness of pure silk sarees woven with tradition,
              elegance, and a finish made for every treasured occasion.
            </p>
          )}

          <div className="mb-4 sm:mb-5 grid max-w-[500px] sm:max-w-[600px] grid-cols-1 gap-2 sm:gap-2.5 font-sans text-white/88 sm:grid-cols-3">
            <div className="border-l border-[#c9933a]/70 pl-4">
              <span className="block text-[16px] sm:text-[17px] font-serif text-[#d4a853] lg:text-[21px]">Pure Silk</span>
              <span className="mt-0.5 sm:mt-1 block text-[9px] font-semibold uppercase tracking-[1.6px] lg:text-[10px]">Handpicked drapes</span>
            </div>
            <div className="border-l border-[#c9933a]/70 pl-4">
              <span className="block text-[16px] sm:text-[17px] font-serif text-[#d4a853] lg:text-[21px]">Bridal Ready</span>
              <span className="mt-0.5 sm:mt-1 block text-[9px] font-semibold uppercase tracking-[1.6px] lg:text-[10px]">Temple zari finish</span>
            </div>
            <div className="border-l border-[#c9933a]/70 pl-4">
              <span className="block text-[16px] sm:text-[17px] font-serif text-[#d4a853] lg:text-[21px]">New Weaves</span>
              <span className="mt-0.5 sm:mt-1 block text-[9px] font-semibold uppercase tracking-[1.6px] lg:text-[10px]">Curated collections</span>
            </div>
          </div>

          <a
            href="#collections"
            className="glow-cta inline-flex items-center gap-3 border border-white/80 px-5 py-2.5 sm:px-6 sm:py-3 font-sans text-[11px] font-semibold tracking-[2px] text-white transition-all duration-300 hover:border-[#c9933a] hover:text-[#c9933a] lg:px-8 lg:py-4 lg:text-[12px]"
          >
            EXPLORE COLLECTION
            <span className="bg-[#c9933a] text-[#0d0d1a] w-6 h-6 rounded-full flex items-center justify-center text-[10px]">
              <i className="fas fa-arrow-right" />
            </span>
          </a>
        </div>


        <div className="absolute bottom-8 right-6 sm:bottom-10 sm:right-20 hidden lg:flex flex-col items-center gap-2.5 group">
          <button
            type="button"
            aria-label="Watch our story video"
            onClick={() => setIsStoryOpen(true)}
            className="story-play-button glow-round relative w-[58px] h-[58px] rounded-full bg-[#4b1a6e] text-white flex items-center justify-center shadow-[0_0_0_8px_rgba(75,26,110,0.4)] hover:bg-[#c9933a] hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#f3d18a] focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-300"
          >
            <span className="story-play-ping" aria-hidden="true" />
            <span className="story-play-shine" aria-hidden="true" />
            <i className="fas fa-play text-sm ml-0.5" />
          </button>
          <p className="story-label font-sans text-[9px] tracking-[2px] text-center text-white font-semibold leading-[1.6] uppercase drop-shadow-lg transition-colors duration-300 group-hover:text-[#f3d18a]">
            WATCH<br />OUR STORY
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9933a] to-transparent z-10" />
    </section>
  )
}
