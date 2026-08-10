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
    <section id="home" data-nav-hero className="relative w-full min-h-[680px]" style={{ minHeight: '100svh' }}>
      <img
        src="/hero-fix.png"
        alt="Hero Model"
        className={`transition-opacity duration-500 ${isStoryOpen ? 'opacity-0' : 'opacity-100'}`}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'top center',
        }}
      />

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
        <div className="w-full px-5 sm:pl-10 sm:pr-0 md:w-[70%] lg:w-[60%] lg:pl-16">
          <p className="font-sans text-[10px] tracking-[2.5px] text-[#c9933a] font-semibold leading-[1.8] mb-4 uppercase">
            CRAFTED IN HERITAGE, DESIGNED FOR TODAY
          </p>

          <h1 className="font-serif text-[46px] sm:text-[56px] lg:text-[68px] font-normal leading-[1.05] text-white mb-5">
            Timeless
            <em className="italic text-[#d4a853]"> in Every</em><br />
            <em className="italic text-[#d4a853]">Weave</em>
          </h1>

          <p className="font-sans text-[13px] leading-[1.8] text-white/90 font-light mb-8">
            Experience the richness of pure silk sarees<br />
            woven with tradition and elegance.
          </p>

          <a
            href="#collections"
            className="glow-cta inline-flex items-center gap-3 px-7 py-3.5 border border-white/80 font-sans text-[11px] tracking-[2px] font-medium text-white hover:border-[#c9933a] hover:text-[#c9933a] transition-all duration-300"
          >
            EXPLORE COLLECTION
            <span className="bg-[#c9933a] text-[#0d0d1a] w-7 h-7 rounded-full flex items-center justify-center text-[11px]">
              <i className="fas fa-arrow-right" />
            </span>
          </a>
        </div>

        <div className="absolute bottom-8 right-6 sm:bottom-10 sm:right-20 flex flex-col items-center gap-2.5 group">
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



