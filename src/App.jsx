import { lazy, Suspense, useEffect, useState } from 'react'
import DeferredNavbar from './components/DeferredNavbar'
import DeferredFooter from './components/DeferredFooter'

const HomePage = lazy(() => import('./components/HomePage'))
const IzhamathiPattu = lazy(() => import('./components/IzhamathiPattu'))
const SailaPattu = lazy(() => import('./components/SailaPattu'))
const SailaCollectionPage = lazy(() => import('./components/SailaCollectionPage'))
const SailaDesignDetail = lazy(() => import('./components/SailaDesignDetail'))
const AanchaliPattu = lazy(() => import('./components/AanchaliPattu'))
const AanchaliCollectionPage = lazy(() => import('./components/AanchaliCollectionPage'))
const AanchaliDesignDetail = lazy(() => import('./components/AanchaliDesignDetail'))
const MayuraPattu = lazy(() => import('./components/MayuraPattu'))
const MayuraCollectionPage = lazy(() => import('./components/MayuraCollectionPage'))
const MayuraDesignDetail = lazy(() => import('./components/MayuraDesignDetail'))
const VaibhavaPattu = lazy(() => import('./components/VaibhavaPattu'))
const VaibhavaCollectionPage = lazy(() => import('./components/VaibhavaCollectionPage'))
const VaibhavaDesignDetail = lazy(() => import('./components/VaibhavaDesignDetail'))
const NoolisaiPattu = lazy(() => import('./components/NoolisaiPattu'))
const NoolisaiCollectionPage = lazy(() => import('./components/NoolisaiCollectionPage'))
const NoolisaiDesignDetail = lazy(() => import('./components/NoolisaiDesignDetail'))
const SezhinoolPattu = lazy(() => import('./components/SezhinoolPattu'))
const SezhinoolCollectionPage = lazy(() => import('./components/SezhinoolCollectionPage'))
const SezhinoolDesignDetail = lazy(() => import('./components/SezhinoolDesignDetail'))
const VeloraPattu = lazy(() => import('./components/VeloraPattu'))
const VeloraCollectionPage = lazy(() => import('./components/VeloraCollectionPage'))
const VeloraDesignDetail = lazy(() => import('./components/VeloraDesignDetail'))
const EzhilPattu = lazy(() => import('./components/EzhilPattu'))
const EzhilCollectionPage = lazy(() => import('./components/EzhilCollectionPage'))
const EzhilDesignDetail = lazy(() => import('./components/EzhilDesignDetail'))
const KaithiraiPattu = lazy(() => import('./components/KaithiraiPattu'))
const KaithiraiCollectionPage = lazy(() => import('./components/KaithiraiCollectionPage'))
const KaithiraiDesignDetail = lazy(() => import('./components/KaithiraiDesignDetail'))
const VarnikaPattu = lazy(() => import('./components/VarnikaPattu'))
const VarnikaCollectionPage = lazy(() => import('./components/VarnikaCollectionPage'))
const VarnikaDesignDetail = lazy(() => import('./components/VarnikaDesignDetail'))
const MangaiPattu = lazy(() => import('./components/MangaiPattu'))
const MangaiCollectionPage = lazy(() => import('./components/MangaiCollectionPage'))
const MangaiDesignDetail = lazy(() => import('./components/MangaiDesignDetail'))
const CollectionDesigns = lazy(() => import('./components/CollectionDesigns'))
const SareeDetail = lazy(() => import('./components/SareeDetail'))
const AboutUs = lazy(() => import('./components/AboutUs'))
const ShopPage = lazy(() => import('./components/ShopPage'))
const ContactUs = lazy(() => import('./components/ContactUs'))
const CartPage = lazy(() => import('./components/CartPage'))

const normalizePath = (pathname) => {
  if (pathname.length > 1 && pathname.endsWith('/')) {
    return pathname.slice(0, -1)
  }

  return pathname
}

const defaultDescription = 'Discover handcrafted pure silk sarees from Arulmathi Silks in Salem, curated for weddings, festivals, gifting, and timeless celebrations.'

const getPageMetadata = (path) => {
  const routeName = path.split('/').filter(Boolean)[0]
  const collectionName = routeName
    ? routeName.replace(/-/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase())
    : null

  const fixedPages = {
    '/': ['Pure Silk Sarees in Salem | Arulmathi Silks', defaultDescription],
    '/shop': ['Shop Pure Silk Sarees | Arulmathi Silks', 'Shop curated pure silk sarees for weddings, festivals, receptions, gifting, and special occasions at Arulmathi Silks.'],
    '/about-us': ['About Arulmathi Silks | Silk Saree Store in Salem', 'Learn about Arulmathi Silks, our commitment to traditional craftsmanship, pure silk sarees, and thoughtful customer service in Salem.'],
    '/contact-us': ['Contact Arulmathi Silks | Salem Saree Store', 'Contact Arulmathi Silks for saree catalogue guidance, bridal selections, store timings, location, and customer assistance.'],
    '/cart': ['Your Saree Cart | Arulmathi Silks', 'Review the silk sarees selected in your Arulmathi Silks shopping cart.'],
  }

  if (fixedPages[path]) return fixedPages[path]

  return collectionName
    ? [`${collectionName} Collection | Arulmathi Silks`, `Explore ${collectionName} pure silk sarees, colors, zari work, designs, prices, and availability from Arulmathi Silks.`]
    : ['Arulmathi Silks | Pure Silk Sarees', defaultDescription]
}

export default function App() {
  const [path, setPath] = useState(() => normalizePath(window.location.pathname))

  useEffect(() => {
    const handleRouteChange = () => setPath(normalizePath(window.location.pathname))

    window.addEventListener('popstate', handleRouteChange)
    window.addEventListener('arulmathi:navigate', handleRouteChange)

    return () => {
      window.removeEventListener('popstate', handleRouteChange)
      window.removeEventListener('arulmathi:navigate', handleRouteChange)
    }
  }, [])

  useEffect(() => {
    const [title, description] = getPageMetadata(path)
    document.title = title

    const descriptionTag = document.querySelector('meta[name="description"]')
    const canonicalTag = document.querySelector('link[rel="canonical"]')
    const ogTitleTag = document.querySelector('meta[property="og:title"]')
    const ogDescriptionTag = document.querySelector('meta[property="og:description"]')
    const ogUrlTag = document.querySelector('meta[property="og:url"]')

    descriptionTag?.setAttribute('content', description)
    canonicalTag?.setAttribute('href', `${window.location.origin}${path}`)
    ogTitleTag?.setAttribute('content', title)
    ogDescriptionTag?.setAttribute('content', description)
    ogUrlTag?.setAttribute('content', `${window.location.origin}${path}`)
  }, [path])

  const pages = {
    '/izhamathi-pattu': <IzhamathiPattu />,
    '/saila-pattu': <SailaPattu />,
    '/Aanchali-pattu': <AanchaliPattu />,
    '/mayura-pattu': <MayuraPattu />,
    '/vaibhava-pattu': <VaibhavaPattu />,
    '/noolisai-pattu': <NoolisaiPattu />,
    '/sezhinool-pattu': <SezhinoolPattu />,
    '/velora-pattu': <VeloraPattu />,
    '/ezhil-pattu': <EzhilPattu />,
    '/kaithirai-pattu': <KaithiraiPattu />,
    '/varnika-pattu': <VarnikaPattu />,
    '/mangai-pattu': <MangaiPattu />,
    '/about-us': <AboutUs />,
    '/shop': <ShopPage />,
    '/contact-us': <ContactUs />,
    '/cart': <CartPage />,
  }

  const pathParts = path.split('/').filter(Boolean)
  const isHomePage = path === '/'

  // izhamathi-pattu dynamic routes
  // saila-pattu dynamic routes
  const dynamicPage =
    pathParts[0] === 'izhamathi-pattu' && pathParts.length === 2
      ? <CollectionDesigns collectionSlug={pathParts[1]} />
      : pathParts[0] === 'izhamathi-pattu' && pathParts.length === 3
        ? <SareeDetail collectionSlug={pathParts[1]} designSlug={pathParts[2]} />
        : pathParts[0] === 'saila-pattu' && pathParts.length === 2
          ? <SailaCollectionPage collectionSlug={pathParts[1]} />
          : pathParts[0] === 'saila-pattu' && pathParts.length === 3
            ? <SailaDesignDetail collectionSlug={pathParts[1]} designSlug={pathParts[2]} />
            : pathParts[0] === 'Aanchali-pattu' && pathParts.length === 2
              ? <AanchaliCollectionPage collectionSlug={pathParts[1]} />
              : pathParts[0] === 'Aanchali-pattu' && pathParts.length === 3
                ? <AanchaliDesignDetail collectionSlug={pathParts[1]} designSlug={pathParts[2]} />
                : pathParts[0] === 'mayura-pattu' && pathParts.length === 2
                  ? <MayuraCollectionPage collectionSlug={pathParts[1]} />
                  : pathParts[0] === 'mayura-pattu' && pathParts.length === 3
                    ? <MayuraDesignDetail collectionSlug={pathParts[1]} designSlug={pathParts[2]} />
                    : pathParts[0] === 'vaibhava-pattu' && pathParts.length === 2
                      ? <VaibhavaCollectionPage collectionSlug={pathParts[1]} />
                      : pathParts[0] === 'vaibhava-pattu' && pathParts.length === 3
                        ? <VaibhavaDesignDetail collectionSlug={pathParts[1]} designSlug={pathParts[2]} />
                        : pathParts[0] === 'noolisai-pattu' && pathParts.length === 2
                          ? <NoolisaiCollectionPage collectionSlug={pathParts[1]} />
                          : pathParts[0] === 'noolisai-pattu' && pathParts.length === 3
                            ? <NoolisaiDesignDetail collectionSlug={pathParts[1]} designSlug={pathParts[2]} />
                            : pathParts[0] === 'sezhinool-pattu' && pathParts.length === 2
                              ? <SezhinoolCollectionPage collectionSlug={pathParts[1]} />
                              : pathParts[0] === 'sezhinool-pattu' && pathParts.length === 3
                                ? <SezhinoolDesignDetail collectionSlug={pathParts[1]} designSlug={pathParts[2]} />
                                : pathParts[0] === 'velora-pattu' && pathParts.length === 2
                                  ? <VeloraCollectionPage collectionSlug={pathParts[1]} />
                                  : pathParts[0] === 'velora-pattu' && pathParts.length === 3
                                    ? <VeloraDesignDetail collectionSlug={pathParts[1]} designSlug={pathParts[2]} />
                                    : pathParts[0] === 'ezhil-pattu' && pathParts.length === 2
                                      ? <EzhilCollectionPage collectionSlug={pathParts[1]} />
                                      : pathParts[0] === 'ezhil-pattu' && pathParts.length === 3
                                        ? <EzhilDesignDetail collectionSlug={pathParts[1]} designSlug={pathParts[2]} />
                                        : pathParts[0] === 'kaithirai-pattu' && pathParts.length === 2
                                          ? <KaithiraiCollectionPage collectionSlug={pathParts[1]} />
                                          : pathParts[0] === 'kaithirai-pattu' && pathParts.length === 3
                                            ? <KaithiraiDesignDetail collectionSlug={pathParts[1]} designSlug={pathParts[2]} />
                                            : pathParts[0] === 'varnika-pattu' && pathParts.length === 2
                                              ? <VarnikaCollectionPage collectionSlug={pathParts[1]} />
                                              : pathParts[0] === 'varnika-pattu' && pathParts.length === 3
                                                ? <VarnikaDesignDetail collectionSlug={pathParts[1]} designSlug={pathParts[2]} />
                                                : pathParts[0] === 'mangai-pattu' && pathParts.length === 2
                                                  ? <MangaiCollectionPage collectionSlug={pathParts[1]} />
                                                  : pathParts[0] === 'mangai-pattu' && pathParts.length === 3
                                                    ? <MangaiDesignDetail collectionSlug={pathParts[1]} designSlug={pathParts[2]} />
                                                    : null

  return (
    <div className="min-h-screen bg-dark text-white overflow-x-hidden flex flex-col">
      <DeferredNavbar />
      <main className={`flex-1 ${isHomePage ? '' : 'site-page-offset'}`}>
        <Suspense fallback={<div className="min-h-screen bg-[#0d0d1a]" aria-label="Loading page" />}>
          {pages[path] || dynamicPage || <HomePage />}
        </Suspense>
      </main>
      <DeferredFooter />
    </div>
  )
}
