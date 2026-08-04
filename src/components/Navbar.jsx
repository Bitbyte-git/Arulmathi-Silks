import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'COLLECTIONS', href: '/#collections' },
  { label: 'SHOP', href: '/shop' },
  { label: 'NEW ARRIVALS', href: '/#new-arrivals' },
  { label: 'ABOUT US', href: '/about-us' },
  { label: 'CONTACT US', href: '/contact-us' },
]

const collectionRoutes = {
  'Kanchipuram Silk': '/izhamathi-pattu',
  'Banarasi Silk': '/banarasi-silk',
  'Mysore Silk': '/mysore-silk',
  'Tussar Silk': '/tussar-silk',
  'Chettinad Cotton': '/chettinad-cotton',
  'Ilkal Sarees': '/ilkal-sarees',
  'Bridal Silks': '/bridal-silks',
}
const collectionColumns = [
  {
    icon: 'fa-spa',
    title: 'Traditional Weaves',
    links: ['Kanchipuram Silk', 'Banarasi Silk', 'Mysore Silk', 'Tussar Silk', 'Chettinad Cotton', 'Ilkal Sarees'],
  },
  {
    icon: 'fa-gem',
    title: 'Bridal Collections',
    links: ['Bridal Silks', 'Muhurtham Sarees', 'Reception Sarees', 'Engagement Silks', 'Temple Collection', 'Zari Woven Silks'],
  },
  {
    icon: 'fa-seedling',
    title: 'Modern Styles',
    links: ['Designer Sarees', 'Contemporary Silks', 'Printed Silks', 'Pastel Collection', 'Handloom Collection', 'Fusion Drapes'],
  },
  {
    icon: 'fa-sun',
    title: 'Daily & Festive',
    links: ['Soft Silk', 'Cotton Sarees', 'Linen Sarees', 'Festive Collection', 'Office Wear', 'Daily Wear'],
  },
]
const megaCollections = [
  { number: '01', title: 'IZHAMATHI PATTU', count: '8 SAREE DESIGNS', icon: 'fa-landmark', href: '/izhamathi-pattu' },
  { number: '02', title: 'SAILA PATTU', count: '38 DESIGNS', icon: 'fa-seedling', href: '/saila-pattu' },
  { number: '03', title: 'SATHURA PATTU', count: '15 DESIGNS', icon: 'fa-clover', href: '/#collections' },
  { number: '04', title: 'MAYURA PATTU', count: '42 DESIGNS', icon: 'fa-fan', href: '/#collections' },
  { number: '05', title: 'VAIBHAVA PATTU', count: '18 DESIGNS', icon: 'fa-border-all', href: '/#collections' },
  { number: '06', title: 'NOOLISAI PATTU', count: '26 DESIGNS', icon: 'fa-feather-pointed', href: '/banarasi-silk' },
  { number: '07', title: 'SEZHINOOL PATTU', count: '11 DESIGNS', icon: 'fa-gem', href: '/bridal-silks' },
  { number: '08', title: 'VELORA PATTU', count: '19 DESIGNS', icon: 'fa-spa', href: '/#collections' },
  { number: '09', title: 'EZHIL PATTU', count: '20 DESIGNS', icon: 'fa-star', href: '/#collections' },
  { number: '10', title: 'KAITHIRAI PATTU', count: '25 DESIGNS', icon: 'fa-briefcase', href: '/#collections' },
  { number: '11', title: 'VARNIKA PATTU', count: '30 DESIGNS', icon: 'fa-sun', href: '/#collections' },
  { number: '12', title: 'MANGAI PATTU', count: '22 DESIGNS', icon: 'fa-fire-flame-curved', href: '/#collections' },
]
const shoppingSteps = [
  { icon: 'fa-bag-shopping', title: '1. CHOOSE DESIGN', text: 'Browse Pushpanjali and Suvarna Thuli' },
  { icon: 'fa-table-cells-large', title: '2. EXPLORE SAREES', text: 'View available saree designs in each family' },
  { icon: 'fa-eye', title: '3. VIEW DETAILS', text: 'Check product details, price & availability' },
  { icon: 'fa-cart-shopping', title: '4. PLACE ORDER', text: 'Add to cart and secure your order' },
]

const trustItems = [
  { icon: 'fa-shield-halved', title: 'PURE QUALITY', text: 'Assured Authenticity' },
  { icon: 'fa-users', title: 'TRUSTED BY THOUSANDS', text: 'Happy Customers' },
  { icon: 'fa-globe', title: 'WORLDWIDE SHIPPING', text: 'Safe & Secure Delivery' },
  { icon: 'fa-arrows-rotate', title: 'EASY RETURNS', text: 'Hassle Free Returns' },
  { icon: 'fa-lock', title: 'SECURE PAYMENTS', text: '100% Safe Transactions' },
]

const searchItems = [
  { title: 'Izhamathi Pattu', type: 'Collection', href: '/izhamathi-pattu', keywords: 'pushpanjali suvarna thuli floral woven golden butta silk saree designs red gold cream navy green' },
  { title: 'Pushpanjali', type: 'Design', href: '/izhamathi-pattu/pushpanjali', keywords: 'pushpanjali floral woven silk design saree ruby pastel rose emerald flower zari' },
  { title: 'Saila Pattu', type: 'Collection', href: '/saila-pattu', keywords: 'saila pattu malar kodi thanga mayil silk saree vine motif peacock zari green pastel festive' },
  { title: 'Suvarna Thuli', type: 'Design', href: '/izhamathi-pattu/suvarna-thuli', keywords: 'suvarna thuli golden butta silk design saree champagne cream navy sage gold' },
  { title: 'Banarasi Silk', type: 'Collection', href: '/banarasi-silk', keywords: 'banarasi brocade katan zari festive silk saree wine gold violet ivory emerald crimson peach blue' },
  { title: 'Mysore Silk', type: 'Collection', href: '/mysore-silk', keywords: 'mysore soft silk sandal palace zari saree purple crimson ivory peacock rose emerald temple' },
  { title: 'Tussar Silk', type: 'Collection', href: '/tussar-silk', keywords: 'tussar handloom honey gold natural silk saree ivory rust sage plum crimson peach blue' },
  { title: 'Chettinad Cotton', type: 'Collection', href: '/chettinad-cotton', keywords: 'chettinad cotton karaikudi checks daily saree temple red mustard indigo sage maroon ivory peacock' },
  { title: 'Ilkal Sarees', type: 'Collection', href: '/ilkal-sarees', keywords: 'ilkal kasuti regional cotton silk saree red sandal indigo maroon plum ivory copper emerald' },
  { title: 'Bridal Silks', type: 'Collection', href: '/bridal-silks', keywords: 'bridal wedding muhurtham reception silk saree crimson temple red antique gold violet ivory peacock blue' },
  { title: 'Shop By Collection', type: 'Page', href: '/shop', keywords: 'shop catalogue collections sarees view browse all' },
  { title: 'New Arrivals', type: 'Section', href: '/#new-arrivals', keywords: 'new arrivals latest fresh sarees maroon mehendi peacock rose emerald ivory' },
  { title: 'Wedding Sarees', type: 'Occasion', href: '/shop', keywords: 'wedding bridal marriage sarees muhurtham' },
  { title: 'Festive Drapes', type: 'Occasion', href: '/shop', keywords: 'festival festive pooja traditional sarees' },
  { title: 'Ruby Floral Zari', type: 'Saree', href: '/izhamathi-pattu/pushpanjali/ruby-floral-zari', keywords: 'ruby red floral zari pushpanjali silk' },
  { title: 'Peacock Blue Bridal Silk', type: 'Saree', href: '/bridal-silks', keywords: 'peacock blue bridal kanjivaram silk' },
  { title: 'Champagne Golden Butta', type: 'Saree', href: '/izhamathi-pattu/suvarna-thuli/champagne-golden-butta', keywords: 'champagne golden butta suvarna thuli silk saree' },
  { title: 'Wine Banarasi Brocade', type: 'Saree', href: '/banarasi-silk', keywords: 'wine banarasi brocade silk' },
  { title: 'Sandal Gold Mysore Silk', type: 'Saree', href: '/mysore-silk', keywords: 'sandal gold mysore silk' },
  { title: 'Honey Gold Tussar Silk', type: 'Saree', href: '/tussar-silk', keywords: 'honey gold tussar silk' },
  { title: 'Karaikudi Checks Cotton', type: 'Saree', href: '/chettinad-cotton', keywords: 'karaikudi checks cotton chettinad' },
  { title: 'Kasuti Red Ilkal Saree', type: 'Saree', href: '/ilkal-sarees', keywords: 'kasuti red ilkal saree' },
]
const normalizeSearchText = (value) => value
  .toLowerCase()
  .replace(/sarees/g, 'saree')
  .replace(/silks/g, 'silk')
  .replace(/[^a-z0-9\s]/g, ' ')
  .replace(/\s+/g, ' ')
  .trim()

const getEditDistance = (first, second) => {
  const distances = Array.from({ length: first.length + 1 }, (_, row) => [row])

  for (let column = 1; column <= second.length; column += 1) {
    distances[0][column] = column
  }

  for (let row = 1; row <= first.length; row += 1) {
    for (let column = 1; column <= second.length; column += 1) {
      distances[row][column] = first[row - 1] === second[column - 1]
        ? distances[row - 1][column - 1]
        : Math.min(
          distances[row - 1][column - 1],
          distances[row][column - 1],
          distances[row - 1][column],
        ) + 1
    }
  }

  return distances[first.length][second.length]
}

const getSearchWordScore = (queryWord, targetWords, targetText) => {
  if (!queryWord) return 0
  if (targetWords.includes(queryWord)) return 18
  if (targetText.includes(queryWord)) return queryWord.length > 2 ? 14 : 5

  const bestScore = targetWords.reduce((score, targetWord) => {
    if (targetWord.startsWith(queryWord)) return Math.max(score, 12)
    if (queryWord.startsWith(targetWord) && targetWord.length > 3) return Math.max(score, 9)

    if (queryWord.length >= 3 && targetWord.length >= 3) {
      const distance = getEditDistance(queryWord, targetWord)
      if (distance <= 1) return Math.max(score, 10)
      if (distance <= 2) return Math.max(score, 7)
      if (queryWord.length >= 6 && distance <= 3) return Math.max(score, 4)
    }

    return score
  }, 0)

  return bestScore
}

const getSearchResultScore = (item, query) => {
  if (!query) return 1

  const targetText = normalizeSearchText(`${item.title} ${item.type} ${item.keywords}`)
  const targetWords = targetText.split(' ')
  const queryWords = query.split(' ').filter(Boolean)
  const totalScore = queryWords.reduce((score, queryWord) => score + getSearchWordScore(queryWord, targetWords, targetText), 0)
  const matchedWords = queryWords.filter((queryWord) => getSearchWordScore(queryWord, targetWords, targetText) > 0).length

  if (matchedWords === 0) return 0

  return totalScore + matchedWords * 4
}

export default function Navbar() {
  const [isHeroSection, setIsHeroSection] = useState(true)
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [routePath, setRoutePath] = useState(() => window.location.pathname)

  useEffect(() => {
    const updateNavbar = () => {

      const hero = document.getElementById('home')
      if (!hero) {
        setIsHeroSection(false)
        return
      }

      const heroBottom = hero.offsetTop + hero.offsetHeight
      setIsHeroSection(window.scrollY < heroBottom - 92)
    }

    updateNavbar()
    window.addEventListener('scroll', updateNavbar, { passive: true })
    window.addEventListener('resize', updateNavbar)
    window.addEventListener('popstate', updateNavbar)
    window.addEventListener('arulmathi:navigate', updateNavbar)

    return () => {
      window.removeEventListener('scroll', updateNavbar)
      window.removeEventListener('resize', updateNavbar)
      window.removeEventListener('popstate', updateNavbar)
      window.removeEventListener('arulmathi:navigate', updateNavbar)
    }
  }, [])

  useEffect(() => {
    const updateRoutePath = () => setRoutePath(window.location.pathname)

    window.addEventListener('popstate', updateRoutePath)
    window.addEventListener('arulmathi:navigate', updateRoutePath)

    return () => {
      window.removeEventListener('popstate', updateRoutePath)
      window.removeEventListener('arulmathi:navigate', updateRoutePath)
    }
  }, [])

  useEffect(() => {
    if (!isCollectionsOpen && !isSearchOpen) return undefined
    const closeOnEscape = (e) => {
      if (e.key === 'Escape') {
        setIsCollectionsOpen(false)
        setIsSearchOpen(false)
      }
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [isCollectionsOpen, isSearchOpen])

  useEffect(() => {
    if (!isSearchOpen) return undefined

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setIsSearchOpen(false)
      }
    }

    window.addEventListener('keydown', closeOnEscape)

    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [isSearchOpen])

  const normalizedSearch = normalizeSearchText(searchQuery)
  const rankedSearchItems = normalizedSearch
    ? searchItems
      .map((item, index) => ({ ...item, searchScore: getSearchResultScore(item, normalizedSearch), originalIndex: index }))
      .filter((item) => item.searchScore > 0)
      .sort((first, second) => second.searchScore - first.searchScore || first.originalIndex - second.originalIndex)
    : searchItems

  const visibleSearchItems = (normalizedSearch && rankedSearchItems.length === 0 ? searchItems : rankedSearchItems)
    .slice(0, normalizedSearch ? 10 : 6)

  const navigateToSearchResult = (href) => {
    setIsSearchOpen(false)
    setSearchQuery('')

    if (href.startsWith('/#')) {
      window.history.pushState({}, '', href)
      window.dispatchEvent(new Event('arulmathi:navigate'))
      window.setTimeout(() => {
        document.querySelector(href.slice(1))?.scrollIntoView({ behavior: 'smooth' })
      }, 0)
      return
    }

    window.history.pushState({}, '', href)
    window.dispatchEvent(new Event('arulmathi:navigate'))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const hasTransparentHeroNav = routePath === '/'
  const isIzhamathiRoute = routePath.startsWith('/izhamathi-pattu') || routePath === '/kanchipuram-silk'
  const isSailaRoute = routePath.startsWith('/saila-pattu')

  const navSurfaceClass = hasTransparentHeroNav && isHeroSection
    ? 'nav-over-hero border-white/10 bg-transparent shadow-none backdrop-blur-0'
    : 'nav-scrolled border-[#c9933a]/20 shadow-[0_12px_32px_rgba(13,13,26,0.22)]'

  const navigateTo = (href) => {
    setIsCollectionsOpen(false)
    if (href.startsWith('/#')) {
      window.history.pushState({}, '', href)
      window.dispatchEvent(new Event('arulmathi:navigate'))
      window.setTimeout(() => {
        document.querySelector(href.slice(1))?.scrollIntoView({ behavior: 'smooth' })
      }, 0)
      return
    }
    window.history.pushState({}, '', href)
    window.dispatchEvent(new Event('arulmathi:navigate'))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex min-h-[92px] items-center justify-between gap-5 border-b px-4 py-3 transition-all duration-300 sm:px-8 lg:px-16 ${navSurfaceClass}`}
      onMouseLeave={() => setIsCollectionsOpen(false)}
    >
      <a href="/" className="flex min-w-[202px] shrink-0 items-center gap-1" aria-label="Arulmathi Silk Sarees home">
        <img
          src="/arulmathi-logo-final-nav.png"
          alt=""
          aria-hidden="true"
          className="block h-[58px] w-[52px] object-contain drop-shadow-[0_0_16px_rgba(201,147,58,0.4)]"
        />
        <img
          src="/arulmathi-font-nav-tight.png"
          alt="Arulmathi Silk Sarees"
          className="block h-[48px] w-[112px] object-contain drop-shadow-[0_0_16px_rgba(201,147,58,0.32)]"
        />
      </a>

      {/* Nav links */}
      <ul className="hidden lg:flex gap-9 xl:gap-12">
        {navLinks.map((item) => {
          const isCollections = item.label === 'COLLECTIONS'
          const isActive = item.href === routePath

          if (isCollections) {
            return (
              <li key={item.label}
                onMouseEnter={() => setIsCollectionsOpen(true)}
                onFocus={() => setIsCollectionsOpen(true)}
              >
                <button
                  type="button"
                  aria-expanded={isCollectionsOpen}
                  aria-controls="mega-collections-menu"
                  onClick={() => setIsCollectionsOpen((v) => !v)}
                  className={`nav-link-glow font-sans text-[11px] tracking-[2.5px] font-medium transition-colors duration-200 flex items-center gap-1 ${isCollectionsOpen || isIzhamathiRoute ? 'text-[#c9933a] after:scale-x-100' : 'text-white/78 hover:text-[#c9933a]'}`}
                >
                  COLLECTIONS
                  <i className={`fas fa-chevron-up text-[9px] transition-transform duration-200 ${isCollectionsOpen ? 'rotate-0' : 'rotate-180'}`} />
                </button>
              </li>
            )
          }

          return (
            <li key={item.label}>
              <a
                href={item.href}
                className={`nav-link-glow font-sans text-[11px] tracking-[2.5px] font-medium transition-colors duration-200 ${isActive ? 'text-[#c9933a] after:scale-x-100' : 'text-white/78 hover:text-[#c9933a]'}`}
                onClick={(e) => {
                  if (item.href.startsWith('#')) {
                    e.preventDefault()
                    navigateTo(item.href)
                  }
                }}
              >
                {item.label}
              </a>
            </li>
          )
        })}
      </ul>

      {/* Mega menu */}
      {isCollectionsOpen && (
        <div
          id="mega-collections-menu"
          onMouseEnter={() => setIsCollectionsOpen(true)}
          className="absolute left-0 right-0 top-full z-50"
          style={{
            background: '#ffffff',
            borderTop: '2px solid #b8882a',
            borderBottom: '2px solid #b8882a',
            boxShadow: '0 20px 60px rgba(90,50,10,0.25)',
            overflow: 'hidden',
          }}
        >
          {/* Botanical left decoration */}
          <div className="absolute left-0 top-0 bottom-0 w-24 pointer-events-none opacity-20"
            style={{ background: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 400\'%3E%3Cpath d=\'M20 400 Q10 300 30 200 Q50 100 20 0\' stroke=\'%23b8882a\' stroke-width=\'1.5\' fill=\'none\'/%3E%3Ccircle cx=\'30\' cy=\'200\' r=\'4\' fill=\'%23b8882a\'/%3E%3Cpath d=\'M30 200 Q60 160 80 140\' stroke=\'%23b8882a\' stroke-width=\'1\' fill=\'none\'/%3E%3Cpath d=\'M30 200 Q55 230 70 260\' stroke=\'%23b8882a\' stroke-width=\'1\' fill=\'none\'/%3E%3C/svg%3E") no-repeat center/contain' }}
          />
          {/* Faded saree model - right edge */}
          <div className="absolute right-0 top-0 bottom-0 w-48 pointer-events-none"
            style={{ background: 'linear-gradient(to left, rgba(184,136,42,0.12) 0%, transparent 100%)', zIndex: 0 }}
          />

          {/* Inner content */}
          <div className="relative" style={{ zIndex: 1, padding: '28px 48px 32px' }}>

            {/* Header */}
            <div className="text-center mb-5">
              <p className="font-sans text-[11px] font-semibold tracking-[4px] text-[#8b5e1a] mb-1 flex items-center justify-center gap-3">
                EXPLORE OUR
              </p>
              <h2 className="font-serif text-[32px] font-semibold leading-[1.1] text-[#3d1f00]">
                12 <span style={{ fontStyle: 'italic' }}>Exclusive</span> Collections
              </h2>
              {/* Gold lotus divider */}
              <div className="flex items-center justify-center gap-3 mt-2">
                <span className="w-16 h-px bg-gradient-to-r from-transparent to-[#b8882a]" />
                <i className="fas fa-spa text-[#b8882a] text-[14px]" />
                <span className="w-16 h-px bg-gradient-to-l from-transparent to-[#b8882a]" />
              </div>
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-6 gap-4 mb-0">
              {megaCollections.map((col, idx) => {
                const cardImages = [
                  '/nav1.png', '/w2.png', '/3-pose2.png', '/w4.png',
                  '/image10.png', '/w3.png', '/4-pose1.png', '/viol.png',
                  '/3-pose3.png', '/w5.png', '/red-pose2.png', '/4-pose4.png',
                ]
                const isMegaActive = (col.href === '/izhamathi-pattu' && isIzhamathiRoute) || (col.href === '/saila-pattu' && isSailaRoute)
                return (
                  <a
                    key={col.number}
                    href={col.href}
                    onClick={(e) => { e.preventDefault(); navigateTo(col.href) }}
                    className="group cursor-pointer"
                    style={{ textDecoration: 'none' }}
                  >
                    <div
                      className="relative overflow-hidden transition-all duration-300 group-hover:shadow-[0_8px_28px_rgba(90,50,10,0.28)] group-hover:-translate-y-1"
                      style={{
                        borderRadius: '10px',
                        background: '#fff',
                        border: '1px solid rgba(184,136,42,0.25)',
                        boxShadow: '0 2px 12px rgba(90,50,10,0.1)',
                      }}
                    >
                      {/* Saree image */}
                      <div className="overflow-hidden" style={{ height: '110px' }}>
                        <img
                          src={cardImages[idx % cardImages.length]}
                          alt={col.title}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    </div>
                    {/* Card text below image box */}
                    <div className="pt-2 px-0.5">
                      <p className={`inline-block border-b pb-0.5 font-sans text-[10px] font-bold tracking-[0.5px] leading-[1.3] mb-0.5 transition-colors ${isMegaActive ? 'border-[#b8882a] text-[#b8882a]' : 'border-transparent text-[#3d1f00] group-hover:border-[#b8882a] group-hover:text-[#b8882a]'}`}>
                        {col.title}
                      </p>
                      <p className="font-sans text-[8.5px] text-[#8b6020] font-medium tracking-[0.5px]">
                        {col.count} <i className="fas fa-arrow-right text-[7px] ml-0.5" />
                      </p>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>

        </div>
      )}

      {/* Search dropdown */}
      {isSearchOpen && (
        <div className="absolute left-4 right-4 top-[92px] z-40 rounded-b-lg border border-[#c9933a]/35 bg-[#0d0d1a] p-4 shadow-[0_28px_70px_rgba(0,0,0,0.62)] sm:left-auto sm:right-8 sm:w-[440px] lg:right-16">
          <div className="flex items-center gap-3 rounded-lg border border-[#c9933a]/35 bg-[#171527] px-4 py-3">
            <i className="fas fa-search text-[13px] text-[#c9933a]" />
            <input
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' && visibleSearchItems[0]) {
                  navigateToSearchResult(visibleSearchItems[0].href)
                }
              }}
              autoFocus
              placeholder="Search sarees, collections, colors..."
              className="min-w-0 flex-1 bg-transparent font-sans text-[13px] text-white outline-none placeholder:text-white/62"
            />
            <button
              type="button"
              aria-label="Close search"
              onClick={() => { setIsSearchOpen(false); setSearchQuery('') }}
              className="text-white/50 transition-colors hover:text-[#c9933a]"
            >
              <i className="fas fa-times" />
            </button>
          </div>
          <div className="mt-3 max-h-[360px] overflow-y-auto pr-1">
            {visibleSearchItems.length > 0 ? (
              <ul className="space-y-2">
                {visibleSearchItems.map((item) => (
                  <li key={`${item.type}-${item.title}`}>
                    <button
                      type="button"
                      onClick={() => navigateToSearchResult(item.href)}
                      className="group flex w-full items-center justify-between gap-4 rounded-lg border border-white/12 bg-[#171527] px-4 py-3 text-left shadow-[0_10px_24px_rgba(0,0,0,0.20)] transition-colors hover:border-[#c9933a]/55 hover:bg-[#211d30]"
                    >
                      <span>
                        <span className="block font-serif text-[18px] leading-tight text-white group-hover:text-[#f0c36e]">{item.title}</span>
                        <span className="mt-1 block font-sans text-[10px] uppercase tracking-[1.6px] text-[#d2a24f]/78">{item.type}</span>
                      </span>
                      <i className="fas fa-arrow-right text-[11px] text-[#c9933a] transition-transform group-hover:translate-x-1" />
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="rounded-lg border border-white/8 bg-[#171527] px-4 py-5 text-center font-sans text-[12px] text-white/70">
                No matching sarees or collections found.
              </div>
            )}
          </div>
        </div>
      )}

      {/* Icons */}
      <div className="flex items-center gap-4 sm:gap-6 text-white/85">
        <button
          type="button"
          aria-label="Search sarees and collections"
          onClick={() => setIsSearchOpen((v) => !v)}
          className={`hover:text-[#c9933a] transition-colors text-base ${isSearchOpen ? 'text-[#c9933a]' : ''}`}
        >
          <i className="fas fa-search" />
        </button>
        <a href="/contact-us" aria-label="Account">
          <i className="far fa-user cursor-pointer hover:text-[#c9933a] transition-colors text-base" />
        </a>
        <a href="/#collections" aria-label="Wishlist">
          <i className="far fa-heart cursor-pointer hover:text-[#c9933a] transition-colors text-base" />
        </a>

      </div>
    </nav>
  )
}




















