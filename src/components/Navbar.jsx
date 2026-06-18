const navLinks = [
  { label: 'COLLECTIONS', href: '#collections' },
  { label: 'SHOP', href: '#shop' },
  { label: 'NEW ARRIVALS', href: '#new-arrivals' },
  { label: 'ABOUT US', href: '#about' },
  { label: 'JOURNAL', href: '#journal' },
]

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-16 py-4 border-b border-white/10" style={{ background: 'transparent' }}>
      <a href="#home" className="flex items-center gap-3">
        <i className="glow-icon fas fa-gem text-[#c9933a] text-xl" />
        <div className="flex flex-col leading-tight">
          <span className="font-serif text-[22px] font-semibold tracking-[4px] text-white">Arulmathi</span>
          <span className="font-sans text-[8px] tracking-[3px] text-[#c9933a] font-normal uppercase">SILK SAREES</span>
        </div>
      </a>

      <ul className="flex gap-9">
        {navLinks.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="nav-link-glow font-sans text-[11px] tracking-[2px] font-medium text-white/75 hover:text-[#c9933a] transition-colors duration-200"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-6 text-white/85">
        <a href="#collections" aria-label="Search collections">
          <i className="fas fa-search cursor-pointer hover:text-[#c9933a] transition-colors text-base" />
        </a>
        <a href="#journal" aria-label="Account and contact">
          <i className="fas fa-user cursor-pointer hover:text-[#c9933a] transition-colors text-base" />
        </a>
        <a href="#shop" className="relative cursor-pointer" aria-label="Shopping bag">
          <i className="fas fa-shopping-bag hover:text-[#c9933a] transition-colors text-base" />
          <span className="absolute -top-2 -right-2 bg-[#c9933a] text-[#0d0d1a] text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
            0
          </span>
        </a>
      </div>
    </nav>
  )
}
