import { useEffect, useState, useRef } from 'react'

import {
  CART_UPDATED_EVENT,
  clearCart,
  createWhatsAppOrderUrl,
  formatINR,
  getCartCount,
  getCartItems,
  getCartTotal,
  removeCartItem,
} from '../utils/cart'

const navLinks = [
  { label: 'COLLECTIONS', href: '/#collections' },
  { label: 'SHOP', href: '/shop' },
  { label: 'NEW ARRIVALS', href: '/#collections' },
  { label: 'ABOUT US', href: '/about-us' },
  { label: 'CONTACT US', href: '/contact-us' },
]

const normalizePath = (pathname) => {
  if (pathname.length > 1 && pathname.endsWith('/')) {
    return pathname.slice(0, -1)
  }

  return pathname
}

const collectionRoutePrefixes = [
  '/izhamathi-pattu',
  '/saila-pattu',
  '/Aanchali-pattu',
  '/mayura-pattu',
  '/vaibhava-pattu',
  '/noolisai-pattu',
  '/sezhinool-pattu',
  '/velora-pattu',
  '/ezhil-pattu',
  '/kaithirai-pattu',
  '/varnika-pattu',
  '/mangai-pattu',
]
const megaCollections = [
  { number: '01', title: 'இழமதி பட்டு', count: '2 SAREE DESIGNS', icon: 'fa-landmark', href: '/izhamathi-pattu' },
  { number: '02', title: 'சைலா பட்டு', count: '6 DESIGNS', icon: 'fa-seedling', href: '/saila-pattu' },
  { number: '03', title: 'ஆஞ்சலி பட்டு', count: '9 DESIGNS', icon: 'fa-clover', href: '/Aanchali-pattu' },
  { number: '04', title: 'மயூரா பட்டு', count: '9 DESIGNS', icon: 'fa-fan', href: '/mayura-pattu' },
  { number: '05', title: 'வைபவ பட்டு', count: '9 DESIGNS', icon: 'fa-border-all', href: '/vaibhava-pattu' },
  { number: '06', title: 'நூலிசை பட்டு', count: '9 DESIGNS', icon: 'fa-feather-pointed', href: '/noolisai-pattu' },
  { number: '07', title: 'செழிநூல் பட்டு', count: '9 DESIGNS', icon: 'fa-gem', href: '/sezhinool-pattu' },
  { number: '08', title: 'வெலோரா பட்டு', count: '9 DESIGNS', icon: 'fa-spa', href: '/velora-pattu' },
  { number: '09', title: 'எழில் பட்டு', count: '9 DESIGNS', icon: 'fa-star', href: '/ezhil-pattu' },
  { number: '10', title: 'கைத்திரை பட்டு', count: '9 DESIGNS', icon: 'fa-briefcase', href: '/kaithirai-pattu' },
  { number: '11', title: 'வர்ணிகா பட்டு', count: '1 DESIGN', icon: 'fa-sun', href: '/varnika-pattu' },
  { number: '12', title: 'மங்கை பட்டு', count: '9 DESIGNS', icon: 'fa-fire-flame-curved', href: '/mangai-pattu' },
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
  { title: 'Izhamathi Pattu', type: 'Collection', href: '/izhamathi-pattu', keywords: 'izhamathi izhamati izhamthi pattu pushpanjali suvarna thuli floral flower golden gold butta traditional classic kanchi kanjivaram silk saree red cream navy green' },
  { title: 'Saila Pattu', type: 'Collection', href: '/saila-pattu', keywords: 'saila saila pattu Suvarneela thanga mayil floral vine peacock soft elegant celebration festive silk saree pastel green pink gold' },
  { title: 'Aanchali Pattu', type: 'Collection', href: '/Aanchali-pattu', keywords: 'Aanchali pattu kattam square geometric structured checks pattern festive silk saree green orange blue gold' },
  { title: 'Mayura Pattu', type: 'Collection', href: '/mayura-pattu', keywords: 'mayura mayil peacock inspired zari elegant motif festive party silk saree teal peacock blue pink gold' },
  { title: 'Vaibhava Pattu', type: 'Collection', href: '/vaibhava-pattu', keywords: 'vaibhava vaibava pattu bridal bride wedding marriage muhurtham reception grand heavy rich silk saree red maroon gold auspicious' },
  { title: 'Noolisai Pattu', type: 'Collection', href: '/noolisai-pattu', keywords: 'noolisai nool pattu thread inspired woven texture festive lightweight silk saree blue purple pink gold' },
  { title: 'Sezhinool Pattu', type: 'Collection', href: '/sezhinool-pattu', keywords: 'sezhinool sezhinol pattu jewel toned heritage motif rich traditional festive silk saree violet purple green gold' },
  { title: 'Velora Pattu', type: 'Collection', href: '/velora-pattu', keywords: 'velora veloura pattu refined polished premium festive elegant silk saree rose pink blue gold' },
  { title: 'Ezhil Pattu', type: 'Collection', href: '/ezhil-pattu', keywords: 'ezhil elil pattu graceful heritage traditional classic soft gifting silk saree blue brown gold' },
  { title: 'Kaithirai Pattu', type: 'Collection', href: '/kaithirai-pattu', keywords: 'kaithirai kaithri pattu nature lotus vine leaf floral motif silk saree green olive gold' },
  { title: 'Varnika Pattu', type: 'Collection', href: '/varnika-pattu', keywords: 'varnika varnika pattu color colourful rich statement occasion modern festive silk saree vibrant red blue purple gold' },
  { title: 'Mangai Pattu', type: 'Collection', href: '/mangai-pattu', keywords: 'mangai mangai pattu bold festive ornate woven detailed silk saree red magenta gold occasion' },
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
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState(() => getCartItems())
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileCollectionsOpen, setIsMobileCollectionsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [routePath, setRoutePath] = useState(() => normalizePath(window.location.pathname))
  const [isStoryVideoOpen, setIsStoryVideoOpen] = useState(false)

  useEffect(() => {
    const updateStoryVideoState = (event) => {
      const isOpen = Boolean(event.detail?.isOpen)
      setIsStoryVideoOpen(isOpen)

      if (isOpen) {
        setIsCollectionsOpen(false)
        setIsSearchOpen(false)
        setIsCartOpen(false)
        setIsMobileMenuOpen(false)
        setIsMobileCollectionsOpen(false)
      }
    }

    window.addEventListener('arulmathi:story-video', updateStoryVideoState)
    return () => window.removeEventListener('arulmathi:story-video', updateStoryVideoState)
  }, [])

  useEffect(() => {
    const updateNavbar = () => {
      if (routePath !== '/') {
        setIsHeroSection(false)
        return
      }

      const hero = document.querySelector('[data-nav-hero]') || document.getElementById('home')
      if (!hero) {
        setIsHeroSection(false)
        return
      }

      const heroBottom = hero.offsetTop + hero.offsetHeight
      setIsHeroSection(window.scrollY < heroBottom - 68)
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
  }, [routePath])

  useEffect(() => {
    const updateRoutePath = () => setRoutePath(normalizePath(window.location.pathname))

    window.addEventListener('popstate', updateRoutePath)
    window.addEventListener('arulmathi:navigate', updateRoutePath)

    return () => {
      window.removeEventListener('popstate', updateRoutePath)
      window.removeEventListener('arulmathi:navigate', updateRoutePath)
    }
  }, [])

  useEffect(() => {
    if (!isCollectionsOpen && !isSearchOpen && !isCartOpen && !isMobileMenuOpen) return undefined
    const closeOnEscape = (e) => {
      if (e.key === 'Escape') {
        setIsCollectionsOpen(false)
        setIsSearchOpen(false)
        setIsCartOpen(false)
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [isCollectionsOpen, isSearchOpen, isCartOpen, isMobileMenuOpen])

  useEffect(() => {
    const updateCart = () => setCartItems(getCartItems())

    updateCart()
    window.addEventListener(CART_UPDATED_EVENT, updateCart)
    window.addEventListener('storage', updateCart)

    return () => {
      window.removeEventListener(CART_UPDATED_EVENT, updateCart)
      window.removeEventListener('storage', updateCart)
    }
  }, [])

  useEffect(() => {
    document.body.classList.toggle('mobile-menu-open', isMobileMenuOpen)

    return () => document.body.classList.remove('mobile-menu-open')
  }, [isMobileMenuOpen])

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
    .slice(0, 12)

  const navigateToSearchResult = (href) => {
    setIsSearchOpen(false)
    setSearchQuery('')
    setIsMobileMenuOpen(false)

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

  const isCollectionRoute = collectionRoutePrefixes.some((prefix) => routePath === prefix || routePath.startsWith(`${prefix}/`))

  const navSurfaceClass = routePath !== '/'
    ? 'nav-page-surface'
    : isHeroSection
      ? 'nav-over-hero border-white/10 bg-transparent shadow-none backdrop-blur-0'
      : 'nav-scrolled border-[#c9933a]/20 shadow-[0_12px_32px_rgba(13,13,26,0.22)]'

  const navigateTo = (href) => {
    setIsCollectionsOpen(false)
    setIsCartOpen(false)
    setIsMobileMenuOpen(false)
    setIsMobileCollectionsOpen(false)
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

  const navRef = useRef(null)
  const cartCount = getCartCount(cartItems)
  const cartTotal = getCartTotal(cartItems)

  const placeOrder = () => {
    if (cartItems.length === 0) return
    window.open(createWhatsAppOrderUrl(cartItems), '_blank', 'noopener,noreferrer')
  }

  useEffect(() => {
    const nav = navRef.current
    if (!nav || typeof ResizeObserver === 'undefined') return undefined

    const observer = new ResizeObserver(([entry]) => {
      const height = Math.round(entry.borderBoxSize?.[0]?.blockSize || entry.contentRect.height)
      if (height > 0) document.documentElement.style.setProperty('--nav-height', `${height}px`)
    })

    observer.observe(nav)
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 grid min-h-[68px] grid-cols-[auto_1fr_auto] items-center gap-4 border-b px-4 py-2 transition-all duration-300 sm:px-8 lg:px-16 ${navSurfaceClass} ${isStoryVideoOpen ? 'pointer-events-none -translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}
      aria-hidden={isStoryVideoOpen}
      onMouseLeave={() => setIsCollectionsOpen(false)}
    >
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={isMobileMenuOpen}
        onClick={() => {
          setIsSearchOpen(false)
          setIsMobileMenuOpen((value) => !value)
        }}
        className={`mobile-menu-toggle lg:hidden ${isMobileMenuOpen ? 'is-active' : ''}`}
      >
        <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`} />
      </button>

      <a href="/" className="nav-brand-logo flex shrink-0 items-center" aria-label="Arulmathi Silk Sarees home">
        <span className="nav-brand-mark">
          <img
            src="/logo1-346.png"
            alt=""
            aria-hidden="true"
            width="346"
            height="205"
          />
        </span>
        <span className="nav-brand-wordmark">
          <img
            src="/Arulmathi-logobg-288.png"
            alt="Arulmathi Silk Sarees"
            width="288"
            height="288"
          />
        </span>
      </a>

      {/* Nav links */}
      <ul className="nav-menu hidden lg:flex">
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
                  className={`nav-link-glow font-sans text-[10px] tracking-[1.6px] font-medium transition-colors duration-200 flex items-center gap-1 ${isCollectionsOpen || isCollectionRoute ? 'is-active text-[#c9933a] after:scale-x-100' : 'text-white/78 hover:text-[#c9933a]'}`}
                >
        COLLECTIONS
                  <i className={`fas fa-chevron-up text-[8px] transition-transform duration-200 ${isCollectionsOpen ? 'rotate-0' : 'rotate-180'}`} />
                </button>
              </li>
            )
          }

          return (
            <li key={item.label} onMouseEnter={() => setIsCollectionsOpen(false)} onFocus={() => setIsCollectionsOpen(false)}>
              <a
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={`nav-link-glow font-sans text-[10px] tracking-[1.6px] font-medium transition-colors duration-200 ${isActive ? 'is-active text-[#c9933a] after:scale-x-100' : 'text-white/78 hover:text-[#c9933a]'}`}
                onClick={(e) => {
                  if (item.href.startsWith('#') || item.href.startsWith('/#')) {
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
            maxHeight: 'calc(100vh - var(--nav-height, 126px) - 10px)',
            overflowY: 'auto',
            overflowX: 'hidden',
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
          <div className="relative" style={{ zIndex: 1, padding: '14px 34px 16px' }}>

            {/* Header */}
            <div className="text-center mb-3">
              <p className="font-sans text-[11px] font-bold tracking-[4px] text-[#8b5e1a] mb-1.5 flex items-center justify-center gap-3">
                EXPLORE OUR
              </p>
              <h2 className="font-serif text-[30px] font-medium leading-[1.05] text-[#3d1f00]">
                12 <span style={{ fontStyle: 'italic' }}>Exclusive</span> Collections
              </h2>
              {/* Gold lotus divider */}
              <div className="flex items-center justify-center gap-3 mt-1.5">
                <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#b8882a]" />
                <i className="fas fa-spa text-[#b8882a] text-[11px]" />
                <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#b8882a]" />
              </div>
            </div>

            {/* Cards grid */}
            <div className="mb-0 grid grid-cols-6 justify-items-center gap-x-3 gap-y-3">
              {megaCollections.map((col, idx) => {
                const cardImages = [
                  '/nav-1.png', '/nav-2.png', '/nav-3.png', '/nav-4.png',
                  '/nav-5.png', '/nav-6.png', '/nav-7.png', '/nav-8.png',
                  '/nav-9.png', '/nav-10.png', '/nav-11.png', '/nav-12.png',
                ]
                const isMegaActive = routePath === col.href || routePath.startsWith(`${col.href}/`)
                return (
                  <a
                    key={col.number}
                    href={col.href}
                    onClick={(e) => { e.preventDefault(); navigateTo(col.href) }}
                    className="group w-full max-w-[136px] cursor-pointer"
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
                      <div className="h-[116px] overflow-hidden">
                         <img
                           src={cardImages[idx % cardImages.length]}
                           alt={col.title}
                           loading="lazy"
                           decoding="async"
                           className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    </div>
                    {/* Card text below image box */}
                    <div className="pt-2 px-0.5">
                      <p className={`tamil-collection-name inline-block border-b pb-0.5 text-[11px] font-normal leading-[1.35] mb-0.5 transition-colors ${isMegaActive ? 'border-[#b8882a] text-[#b8882a]' : 'border-transparent text-[#3d1f00] group-hover:border-[#b8882a] group-hover:text-[#b8882a]'}`}>
                        {col.title}
                      </p>
                      <p className="font-sans text-[9px] text-[#8b6020] font-semibold tracking-[0.7px]">
                        {col.count} <i className="fas fa-arrow-right text-[8px] ml-1" />
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
        <div
          className="absolute left-0 right-0 top-[calc(100%+14px)] z-40 rounded-[14px] border border-[#c9933a]/45 bg-[#0d0d1a] p-4 shadow-[0_24px_60px_rgba(0,0,0,0.58)] sm:left-auto sm:right-0 sm:w-[min(560px,calc(100vw-64px))] lg:w-[600px]"
          onMouseLeave={() => { setIsSearchOpen(false); setSearchQuery('') }}
        >
          <div className="flex h-[74px] items-center gap-5 rounded-[12px] border border-[#c9933a]/45 bg-[#171527] px-6">
            <i className="fas fa-search shrink-0 text-[24px] leading-none text-[#f5f0e8]" />
            <input
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' && visibleSearchItems[0]) {
                  navigateToSearchResult(visibleSearchItems[0].href)
                }
              }}
              autoFocus
              placeholder="Search collections..."
              className="h-full min-w-0 flex-1 bg-transparent font-sans text-[18px] leading-none text-white outline-none placeholder:text-white/62 sm:text-[19px]"
            />
            <button
              type="button"
              aria-label="Close search"
              onClick={() => { setIsSearchOpen(false); setSearchQuery('') }}
              className="flex h-10 w-10 shrink-0 items-center justify-center text-[27px] leading-none text-[#f5f0e8]/78 transition-colors hover:text-[#c9933a]"
            >
              <i className="fas fa-times" />
            </button>
          </div>
          <div className="mt-4 max-h-[min(430px,52vh)] overflow-y-auto pr-1">
            {visibleSearchItems.length > 0 ? (
              <ul className="space-y-2.5">
                {visibleSearchItems.map((item) => (
                  <li key={`${item.type}-${item.title}`}>
                    <button
                      type="button"
                      onClick={() => navigateToSearchResult(item.href)}
                      className="group flex min-h-[72px] w-full items-center justify-between gap-5 rounded-[12px] border border-white/18 bg-[#171527] px-5 py-3 text-left shadow-[0_10px_24px_rgba(0,0,0,0.20)] transition-colors hover:border-[#c9933a]/65 hover:bg-[#211d30]"
                    >
                      <span className="min-w-0">
                        <span className="block truncate font-serif text-[22px] leading-tight text-white group-hover:text-[#f0c36e] sm:text-[24px]">{item.title}</span>
                        <span className="mt-1.5 block font-sans text-[11px] font-semibold uppercase tracking-[2px] text-[#d2a24f]/82">{item.type}</span>
                      </span>
                      <i className="fas fa-arrow-right shrink-0 text-[24px] text-[#f5f0e8] transition-transform group-hover:translate-x-1 group-hover:text-[#c9933a]" />
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="rounded-[12px] border border-white/12 bg-[#171527] px-5 py-5 text-center font-sans text-[15px] text-white/70">
                No matching collections found.
              </div>
            )}
          </div>
        </div>
      )}

      {/* Cart dropdown */}
      {isCartOpen && (
        <div
          className="absolute left-4 right-4 top-[calc(100%+14px)] z-40 rounded-[14px] border border-[#c9933a]/45 bg-[#0d0d1a] p-4 text-white shadow-[0_24px_60px_rgba(0,0,0,0.58)] sm:left-auto sm:right-0 sm:w-[min(520px,calc(100vw-64px))]"
          onMouseEnter={() => setIsCartOpen(true)}
          onMouseLeave={() => setIsCartOpen(false)}
        >
          <div className="flex items-center justify-between gap-4 border-b border-white/12 pb-3">
            <div>
              <p className="font-sans text-[10px] font-bold uppercase tracking-[2.4px] text-[#c9933a]">Shopping Bag</p>
              <h3 className="mt-1 font-serif text-[24px] font-normal text-white">{cartCount} Saree{cartCount === 1 ? '' : 's'}</h3>
            </div>
            {cartItems.length > 0 && (
              <button type="button" onClick={clearCart} className="font-sans text-[10px] font-bold uppercase tracking-[1.6px] text-white/58 hover:text-[#c9933a]">
                Clear
              </button>
            )}
          </div>

          {cartItems.length === 0 ? (
            <div className="py-8 text-center">
              <i className="fas fa-bag-shopping text-[28px] text-[#c9933a]" />
              <p className="mt-3 font-sans text-[13px] text-white/68">No sarees added yet.</p>
            </div>
          ) : (
            <>
              <div className="mt-4 max-h-[320px] space-y-3 overflow-y-auto pr-1">
                {cartItems.map((item) => {
                  const itemUrl = item.url || '/cart'

                  return (
                    <div key={item.id} className="grid grid-cols-[64px_1fr_auto] gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-3">
                      <button type="button" onClick={() => navigateTo(itemUrl)} className="h-16 w-16 overflow-hidden rounded bg-white/10">
                        <img src={item.image} alt={item.name} loading="lazy" decoding="async" className="h-full w-full object-cover object-top transition-transform duration-300 hover:scale-105" />
                      </button>
                    <div className="min-w-0">
                      <button type="button" onClick={() => navigateTo(itemUrl)} className="block max-w-full truncate text-left font-serif text-[17px] leading-tight text-white hover:text-[#c9933a]">{item.name}</button>
                      <p className="mt-1 font-sans text-[10px] uppercase tracking-[1.4px] text-[#c9933a]">{item.code}</p>
                      <p className="mt-1 font-sans text-[11px] text-white/62">{item.collectionName} | {item.color}</p>
                      <p className="mt-1 font-sans text-[11px] text-white/72">Qty {item.quantity} x {item.price}</p>
                    </div>
                    <button type="button" aria-label={`Remove ${item.name}`} onClick={() => removeCartItem(item.id)} className="h-8 w-8 rounded-full text-white/58 hover:bg-white/10 hover:text-[#c9933a]">
                      <i className="fas fa-times" />
                    </button>
                  </div>
                  )
                })}
              </div>

              <div className="mt-4 border-t border-white/12 pt-4">
                <div className="flex items-center justify-between font-sans text-[13px]">
                  <span className="text-white/70">Estimated total</span>
                  <strong className="text-[16px] text-white">{formatINR(cartTotal)}</strong>
                </div>
                <button type="button" onClick={placeOrder} className="mt-4 inline-flex w-full items-center justify-center gap-3 rounded bg-[#25d366] px-5 py-3 font-sans text-[11px] font-bold uppercase tracking-[1.8px] text-[#07140b] transition-colors hover:bg-[#5af08c]">
                  Place Order on WhatsApp <i className="fab fa-whatsapp text-[14px]" />
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="mobile-nav-panel lg:hidden">
          <div className="mobile-nav-panel-header">
            <span>Menu</span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <i className="fas fa-times" />
            </button>
          </div>

          <div className="mobile-nav-links">
            {navLinks.map((item) => {
              const isCollections = item.label === 'COLLECTIONS'

              if (isCollections) {
                return (
                  <div key={item.label} className="mobile-nav-group">
                    <button
                      type="button"
                      className="mobile-nav-link"
                      aria-expanded={isMobileCollectionsOpen}
                      onClick={() => setIsMobileCollectionsOpen((value) => !value)}
                    >
                      <span>COLLECTIONS</span>
                      <i className={`fas fa-chevron-down transition-transform ${isMobileCollectionsOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isMobileCollectionsOpen && (
                      <div className="mobile-collection-list">
                        {megaCollections.map((collection) => (
                          <a
                            key={collection.title}
                            href={collection.href}
                            onClick={(event) => {
                              event.preventDefault()
                              navigateTo(collection.href)
                            }}
                            className="mobile-collection-link"
                          >
                            <span>
                              <strong>{collection.title}</strong>
                              <small>{collection.count}</small>
                            </span>
                            <i className="fas fa-arrow-right" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`mobile-nav-link ${item.href === routePath ? 'is-active' : ''}`}
                  onClick={(event) => {
                    if (item.href.startsWith('/#')) {
                      event.preventDefault()
                      navigateTo(item.href)
                      return
                    }

                    setIsMobileMenuOpen(false)
                  }}
                >
                  <span>{item.label}</span>
                  <i className="fas fa-arrow-right" />
                </a>
              )
            })}
          </div>
        </div>
      )}

      {/* Icons */}
      <div className="flex items-center justify-end gap-4 text-white/85 sm:gap-6">
        <button
          type="button"
          aria-label="Search sarees and collections"
          onClick={() => { setIsCartOpen(false); setIsSearchOpen((v) => !v) }}
          className={`hover:text-[#c9933a] transition-colors text-base ${isSearchOpen ? 'text-[#c9933a]' : ''}`}
        >
          <i className="fas fa-search" />
        </button>
        <button
          type="button"
          aria-label="Open shopping bag"
          onClick={() => navigateTo('/cart')}
          onMouseEnter={() => { setIsSearchOpen(false); setIsCartOpen(true) }}
          className={`relative hover:text-[#c9933a] transition-colors text-base ${isCartOpen ? 'text-[#c9933a]' : ''}`}
        >
          <i className="fas fa-bag-shopping" />
          {cartCount > 0 && (
            <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#c9933a] px-1 font-sans text-[9px] font-bold leading-none text-[#0d0d1a]">
              {cartCount}
            </span>
          )}
        </button>
        <a href="/contact-us" aria-label="Contact Us">
          <i className="fas fa-phone cursor-pointer hover:text-[#c9933a] transition-colors text-base" />
        </a>
      </div>
    </nav>
  )
}




