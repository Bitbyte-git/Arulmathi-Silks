import { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const [isStoryOpen, setIsStoryOpen] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    if (isStoryOpen) {
      videoRef.current?.play()
      return
    }

    videoRef.current?.pause()
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

  const closeStory = () => {
    setIsStoryOpen(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <section
      id="home"
      data-nav-hero
      className="relative w-full min-h-[680px] overflow-hidden"
      style={{ minHeight: '100svh' }}
    >
      <picture>
        <source media="(max-width: 767px)" srcSet="/mobileview-herobg.png" />
        <img
          src="/heroimage.png"
          alt="Hero Model"
          className={`hero-bg-image transition-opacity duration-500 ${isStoryOpen ? 'opacity-0' : 'opacity-100'}`}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top center',
            transform: 'translateY(clamp(42px, 4vw, 72px)) scale(1.12)',
            transformOrigin: 'center center',
          }}
        />
      </picture>

      {isStoryOpen && (
        <div className="absolute inset-0 z-40 story-video-backdrop" onClick={closeStory}>
          <video
            ref={videoRef}
            src="/video-ad.mp4"
            className="w-full h-full object-cover bg-black"
            controls
            playsInline
            autoPlay
            onClick={(event) => event.stopPropagation()}
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
          background: 'linear-gradient(to right, rgba(5,3,15,0.82) 0%, rgba(5,3,15,0.65) 35%, rgba(5,3,15,0.15) 60%, transparent 100%)',
        }}
      />

      <div
        className="absolute top-0 left-0 right-0 z-20"
        style={{
          height: '126px',
          background: 'linear-gradient(to bottom, rgba(5,3,15,0.82) 0%, rgba(5,3,15,0.42) 52%, transparent 100%)',
        }}
      />

      <div
        className={`absolute inset-0 z-20 flex items-center transition-opacity duration-500 ${isStoryOpen ? 'pointer-events-none opacity-0' : 'opacity-100'}`}
        style={{ paddingTop: '106px' }}
      >
        <div
          className="w-full max-w-[760px] px-5 sm:pl-10 sm:pr-0 md:w-[74%] lg:w-[64%] lg:pl-16 xl:pl-20"
          style={{ transform: 'translateY(10px)' }}
        >
          <p className="mb-5 font-sans text-[11px] font-semibold uppercase leading-[1.8] tracking-[3.2px] text-[#c9933a] lg:text-[13px]">
            CRAFTED IN HERITAGE, DESIGNED FOR TODAY
          </p>

          <h1 className="mb-6 font-serif text-[54px] font-normal leading-[1.02] text-white sm:text-[66px] lg:text-[88px] xl:text-[96px]">
            Timeless
            <em className="italic text-[#d4a853]"> in Every</em><br />
            <em className="italic text-[#d4a853]">Weave</em>
          </h1>

          <p className="mb-7 max-w-[560px] font-sans text-[15px] font-light leading-[1.9] text-white/92 lg:text-[18px]">
            Experience the richness of pure silk sarees woven with tradition,
            elegance, and a finish made for every treasured occasion.
          </p>

          <div className="mb-9 grid max-w-[640px] grid-cols-1 gap-3 font-sans text-white/88 sm:grid-cols-3">
            <div className="border-l border-[#c9933a]/70 pl-4">
              <span className="block text-[18px] font-serif text-[#d4a853] lg:text-[24px]">Pure Silk</span>
              <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[1.8px] lg:text-[11px]">Handpicked drapes</span>
            </div>
            <div className="border-l border-[#c9933a]/70 pl-4">
              <span className="block text-[18px] font-serif text-[#d4a853] lg:text-[24px]">Bridal Ready</span>
              <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[1.8px] lg:text-[11px]">Temple zari finish</span>
            </div>
            <div className="border-l border-[#c9933a]/70 pl-4">
              <span className="block text-[18px] font-serif text-[#d4a853] lg:text-[24px]">New Weaves</span>
              <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[1.8px] lg:text-[11px]">Curated collections</span>
            </div>
          </div>

          <a
            href="#collections"
            className="glow-cta inline-flex items-center gap-4 border border-white/80 px-8 py-4 font-sans text-[12px] font-semibold tracking-[2.4px] text-white transition-all duration-300 hover:border-[#c9933a] hover:text-[#c9933a] lg:px-10 lg:py-5 lg:text-[13px]"
          >
            EXPLORE COLLECTION
            <span className="bg-[#c9933a] text-[#0d0d1a] w-7 h-7 rounded-full flex items-center justify-center text-[11px]">
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
