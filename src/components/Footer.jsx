const shopLinks = [
  { label: 'Kanjivaram Silks', href: '#collections' },
  { label: 'Bridal Sarees', href: '#shop' },
  { label: 'Festive Drapes', href: '#shop' },
  { label: 'New Arrivals', href: '#new-arrivals' },
]

const careLinks = [
  { label: 'Silk Care', href: '/contact-us' },
  { label: 'Blouse Matching', href: '/contact-us' },
  { label: 'Catalogue Guidance', href: '/contact-us' },
  { label: 'Visit Store', href: '/contact-us' },
]

export default function Footer() {
  return (
    <footer id="contact-us" className="section-reveal relative mt-auto shrink-0 overflow-hidden bg-[#080711] px-5 pt-12 sm:px-8 lg:px-16 text-white">
      <div className="footer-weave absolute inset-0 opacity-25" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c9933a]/75 to-transparent" />

      <div className="relative z-10 grid grid-cols-1 gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1.15fr_1fr_1fr_1.05fr]">
        <div>
          <a href="#home" className="mb-5 flex h-[110px] w-[110px] items-center justify-center" aria-label="Arulmathi Silk Sarees home">
            <img
              src="/logo1.png"
              alt="Arulmathi Silk Sarees"
              className="h-full w-full object-contain drop-shadow-[0_0_24px_rgba(201,147,58,0.28)]"
            />
             <img
              src="/logo2.png"
              alt="Arulmathi Silk Sarees"
              className="h-full w-full object-contain drop-shadow-[0_0_24px_rgba(201,147,58,0.28)]"
            />
          </a>
          <p className="mt-3 max-w-[280px] font-sans text-[12px] leading-[1.8] text-white/58">
            Curated pure silk sarees for weddings, festivals, gifting and graceful everyday occasions.
          </p>
        </div>

        <div>
          <h3 className="mb-5 font-sans text-[10px] font-semibold tracking-[2.5px] text-[#c9933a]">SHOP</h3>
          <ul className="space-y-3">
            {shopLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="footer-link">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 font-sans text-[10px] font-semibold tracking-[2.5px] text-[#c9933a]">SERVICE</h3>
          <ul className="space-y-3">
            {careLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="footer-link">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 font-sans text-[10px] font-semibold tracking-[2.5px] text-[#c9933a]">CONNECT</h3>
          <div className="space-y-3 font-sans text-[12px] leading-[1.7] text-white/58">
            <p className="flex gap-3"><i className="fas fa-location-dot mt-1 text-[#c9933a]" />Silk saree boutique and bridal selection support.</p>
            <p className="flex gap-3"><i className="fas fa-phone mt-1 text-[#c9933a]" />Call for color matching and gift guidance.</p>
          </div>
          <a
            href="/contact-us"
            className="glow-cta mt-5 inline-flex max-w-[260px] items-center gap-3 rounded-lg border border-white/20 px-4 py-3 font-sans text-[11px] font-semibold uppercase tracking-[1.6px] text-white/72 transition-colors hover:border-[#c9933a] hover:text-[#c9933a]"
          >
            Contact for Catalogue <i className="fas fa-arrow-right" />
          </a>
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-4 py-5 font-sans text-[10px] tracking-[1.5px] text-white/38 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; 2026 Arulmathi Silk Sarees</p>
        <div className="flex flex-wrap gap-5">
          <a href="#collections" className="hover:text-[#c9933a] transition-colors">COLLECTIONS</a>
          <a href="#shop" className="hover:text-[#c9933a] transition-colors">OCCASIONS</a>
          <a href="#new-arrivals" className="hover:text-[#c9933a] transition-colors">ARRIVALS</a>
        </div>
        <div className="flex gap-3">
          {['fab fa-instagram', 'fab fa-facebook-f', 'fab fa-pinterest-p'].map((icon) => (
            <a key={icon} href="#" className="footer-social" aria-label="Social link">
              <i className={icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}



