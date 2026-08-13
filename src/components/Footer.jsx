const shopLinks = [
  { label: 'Izhamathi Pattu', href: '/izhamathi-pattu' },
  { label: 'Saila Pattu', href: '/saila-pattu' },
  { label: 'Sathura Pattu', href: '/sathura-pattu' },
  { label: 'Vaibhava Pattu', href: '/vaibhava-pattu' },
]

const careLinks = [
  { label: 'Silk Care', href: '/contact-us' },
  { label: 'Blouse Matching', href: '/contact-us' },
  { label: 'Catalogue Guidance', href: '/contact-us' },
  { label: 'Visit Store', href: '/contact-us' },
]

const socialLinks = [
  {
    label: 'Instagram',
    icon: 'fab fa-instagram',
    href: 'https://www.instagram.com/arulmathisilksofficial?igsh=ZHBwcXJldGwxcjNh',
  },
  {
    label: 'Facebook',
    icon: 'fab fa-facebook-f',
    href: 'https://www.facebook.com/share/1EG2rWiHwa/',
  },
  {
    label: 'LinkedIn',
    icon: 'fab fa-linkedin-in',
    href: 'https://www.linkedin.com/in/arulmathi-silks-987769424?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  },
]

export default function Footer() {
  return (
    <footer id="contact-us" className="section-reveal relative mt-auto shrink-0 overflow-hidden bg-[#F5F0E8] px-5 pt-12 text-[#2d1811] sm:px-8 lg:px-16">
      <div className="footer-weave absolute inset-0 opacity-60" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c9933a]/75 to-transparent" />

      <div className="relative z-10 grid grid-cols-1 gap-10 border-b border-[#2d1811]/12 pb-10 lg:grid-cols-[1.2fr_0.9fr_0.9fr_1.15fr] lg:items-start">
        <div>
          <a href="#home" className="mb-5 flex h-[140px] w-[240px] items-center justify-center" aria-label="Arulmathi Silk Sarees home">
            <img
              src="/logowobg.png"
              alt="Arulmathi Silk Sarees"
              className="h-full w-auto max-w-full object-contain drop-shadow-[0_0_24px_rgba(201,147,58,0.28)]"
            />
          </a>
          <p className="mt-3 max-w-[340px] font-sans text-[16px] leading-[1.8] text-[#2d1811]/68">
            Curated pure silk sarees for weddings, festivals, gifting and graceful everyday occasions.
          </p>
        </div>

        <div className="flex flex-col items-start">
          <h3 className="mb-5 font-sans text-[15px] font-bold tracking-[3px] text-[#c9933a]">SHOP</h3>
          <ul className="space-y-3">
            {shopLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="footer-link">{link.label}</a>
              </li>
            ))}
          </ul>
          <a
            href="/shop"
            className="mt-5 inline-flex w-full max-w-[260px] items-center justify-between gap-3 rounded-lg border border-[#2d1811]/18 px-4 py-3 font-sans text-[13px] font-bold uppercase tracking-[1.6px] text-[#2d1811]/76 transition-colors hover:border-[#c9933a] hover:text-[#9b6118]"
          >
            View All Collections <i className="fas fa-arrow-right text-[12px]" />
          </a>
        </div>

        <div className="flex flex-col items-start">
          <h3 className="mb-5 font-sans text-[15px] font-bold tracking-[3px] text-[#c9933a]">SERVICE</h3>
          <ul className="space-y-3">
            {careLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="footer-link">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-start">
          <h3 className="mb-5 font-sans text-[15px] font-bold tracking-[3px] text-[#c9933a]">CONNECT</h3>
          <div className="space-y-3 font-sans text-[16px] leading-[1.75] text-[#2d1811]/68">
            <p className="flex gap-3"><i className="fas fa-location-dot mt-1 text-[#c9933a]" />Silk saree boutique and bridal selection support.</p>
            <p className="flex gap-3"><i className="fas fa-phone mt-1 text-[#c9933a]" />Call for color matching and gift guidance.</p>
          </div>
          <a
            href="/contact-us"
            className="glow-cta mt-5 inline-flex max-w-[320px] items-center gap-3 rounded-lg border border-[#2d1811]/22 px-5 py-4 font-sans text-[14px] font-bold uppercase tracking-[1.8px] text-[#2d1811]/82 transition-colors hover:border-[#c9933a] hover:text-[#9b6118]"
          >
            Contact for Catalogue <i className="fas fa-arrow-right" />
          </a>
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-4 py-5 font-sans text-[14px] font-semibold tracking-[1.5px] text-[#2d1811]/54 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p>&copy; 2026 Arulmathi Silk Sarees</p>
          <p className="mt-1 text-[12px] tracking-[0.6px] text-[#2d1811]/48">
            Designed, Developed, Hosted and Maintained by{' '}
            <a href="https://bitbytetech.org/" target="_blank" rel="noreferrer" className="text-[#9b6118] transition-colors hover:text-[#c9933a]">
              Bit Byte Technologies
            </a>
          </p>
        </div>
        <div className="flex flex-wrap gap-5">
          <a href="#collections" className="transition-colors hover:text-[#9b6118]">COLLECTIONS</a>
          <a href="#shop" className="transition-colors hover:text-[#9b6118]">OCCASIONS</a>
          <a href="#new-arrivals" className="transition-colors hover:text-[#9b6118]">ARRIVALS</a>
        </div>
        <div className="flex gap-3">
          {socialLinks.map((item) => (
            <a key={item.label} href={item.href} className="footer-social" aria-label={item.label} target="_blank" rel="noreferrer">
              <i className={item.icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
