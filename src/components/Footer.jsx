const footerLinks = [
  {
    title: 'SHOP',
    links: ['Silk Sarees', 'Wedding Edit', 'Festive Wear', 'New Arrivals'],
  },
  {
    title: 'Arulmathi',
    links: ['Our Story', 'Craftsmanship', 'Journal', 'Contact'],
  },
  {
    title: 'CARE',
    links: ['Shipping', 'Returns', 'Saree Care', 'Secure Payment'],
  },
]

export default function Footer() {
  return (
    <footer id="journal" className="section-reveal relative overflow-hidden bg-[#0b0a16] px-16 pt-16 text-white">
      <div className="footer-weave absolute inset-0 opacity-35" />
      <div className="relative z-10 grid grid-cols-[1.25fr_1.5fr_1fr] gap-14 border-b border-white/10 pb-12">
        <div>
          <div className="mb-6 flex items-center gap-3">
            <i className="glow-icon fas fa-gem text-[#c9933a] text-xl" />
            <div className="flex flex-col leading-tight">
              <span className="font-serif text-[26px] font-semibold tracking-[4px] text-white">
                Arulmathi
              </span>
              <span className="font-sans text-[8px] tracking-[3px] text-[#c9933a] font-normal uppercase">
                SILK SAREES
              </span>
            </div>
          </div>
          <p className="max-w-[300px] font-sans text-[12px] leading-[1.9] text-white/58">
            Pure silk sarees woven with heritage, quiet luxury, and modern grace for every meaningful moment.
          </p>
          <div className="mt-7 flex gap-3">
            {['fab fa-instagram', 'fab fa-facebook-f', 'fab fa-pinterest-p'].map((icon) => (
              <a
                key={icon}
                href="#"
                className="footer-social"
                aria-label="Social link"
              >
                <i className={icon} />
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="mb-5 font-sans text-[10px] font-semibold tracking-[2.5px] text-[#c9933a]">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="footer-link">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div>
          <p className="mb-3 font-sans text-[10px] font-semibold tracking-[2.5px] text-[#c9933a]">
            STAY CONNECTED
          </p>
          <h2 className="mb-5 font-serif text-[32px] font-normal leading-[1.15]">
            Drapes, stories<br />
            and arrivals.
          </h2>
          <form className="glow-field flex overflow-hidden border border-white/20 bg-white/[0.04]">
            <input
              type="email"
              placeholder="Email address"
              className="min-w-0 flex-1 bg-transparent px-4 py-3 font-sans text-[12px] text-white outline-none placeholder:text-white/35"
            />
            <button
              type="submit"
              className="glow-round bg-[#c9933a] px-4 text-[#0d0d1a] transition-colors duration-300 hover:bg-[#f0c36e]"
              aria-label="Subscribe"
            >
              <i className="fas fa-arrow-right" />
            </button>
          </form>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-between py-5 font-sans text-[10px] tracking-[1.5px] text-white/38">
        <p>&copy; 2026 Arulmathi SILK SAREES</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-[#c9933a] transition-colors">PRIVACY</a>
          <a href="#" className="hover:text-[#c9933a] transition-colors">TERMS</a>
        </div>
      </div>
    </footer>
  )
}
