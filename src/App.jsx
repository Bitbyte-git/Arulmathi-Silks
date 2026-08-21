import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Collections from './components/Collections'
import KanchipuramSilk from './components/KanchipuramSilk'
import SailaPattu from './components/SailaPattu'
import SailaCollectionPage from './components/SailaCollectionPage'
import SailaDesignDetail from './components/SailaDesignDetail'
import AanchaliPattu from './components/AanchaliPattu'
import AanchaliCollectionPage from './components/AanchaliCollectionPage'
import AanchaliDesignDetail from './components/AanchaliDesignDetail'
import MayuraPattu from './components/MayuraPattu'
import MayuraCollectionPage from './components/MayuraCollectionPage'
import MayuraDesignDetail from './components/MayuraDesignDetail'
import VaibhavaPattu from './components/VaibhavaPattu'
import VaibhavaCollectionPage from './components/VaibhavaCollectionPage'
import VaibhavaDesignDetail from './components/VaibhavaDesignDetail'
import NoolisaiPattu from './components/NoolisaiPattu'
import NoolisaiCollectionPage from './components/NoolisaiCollectionPage'
import NoolisaiDesignDetail from './components/NoolisaiDesignDetail'
import SezhinoolPattu from './components/SezhinoolPattu'
import SezhinoolCollectionPage from './components/SezhinoolCollectionPage'
import SezhinoolDesignDetail from './components/SezhinoolDesignDetail'
import VeloraPattu from './components/VeloraPattu'
import VeloraCollectionPage from './components/VeloraCollectionPage'
import VeloraDesignDetail from './components/VeloraDesignDetail'
import EzhilPattu from './components/EzhilPattu'
import EzhilCollectionPage from './components/EzhilCollectionPage'
import EzhilDesignDetail from './components/EzhilDesignDetail'
import KaithiraiPattu from './components/KaithiraiPattu'
import KaithiraiCollectionPage from './components/KaithiraiCollectionPage'
import KaithiraiDesignDetail from './components/KaithiraiDesignDetail'
import VarnikaPattu from './components/VarnikaPattu'
import VarnikaCollectionPage from './components/VarnikaCollectionPage'
import VarnikaDesignDetail from './components/VarnikaDesignDetail'
import MangaiPattu from './components/MangaiPattu'
import MangaiCollectionPage from './components/MangaiCollectionPage'
import MangaiDesignDetail from './components/MangaiDesignDetail'
import CollectionDesigns from './components/CollectionDesigns'
import SareeDetail from './components/SareeDetail'
import BanarasiSilk from './components/BanarasiSilk'
import MysoreSilk from './components/MysoreSilk'
import TussarSilk from './components/TussarSilk'
import ChettinadCotton from './components/ChettinadCotton'
import IlkalSarees from './components/IlkalSarees'
import BridalSilks from './components/BridalSilks'
import AboutUs from './components/AboutUs'
import ShopPage from './components/ShopPage'
import ContactUs from './components/ContactUs'
import CartPage from './components/CartPage'
import FeaturesBar from './components/FeaturesBar'
import StoryArrivals from './components/StoryArrivals'
import Occasions from './components/Occasions'
import Footer from './components/Footer'

function HomePage() {
  return (
    <>
      <Hero />
      <Collections />
      <StoryArrivals />
      <FeaturesBar />
      <Occasions />
    </>
  )
}

const normalizePath = (pathname) => {
  if (pathname.length > 1 && pathname.endsWith('/')) {
    return pathname.slice(0, -1)
  }

  return pathname
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

  const pages = {
    '/izhamathi-pattu': <KanchipuramSilk />,
    '/kanchipuram-silk': <KanchipuramSilk />,
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
    '/banarasi-silk': <BanarasiSilk />,
    '/mysore-silk': <MysoreSilk />,
    '/tussar-silk': <TussarSilk />,
    '/chettinad-cotton': <ChettinadCotton />,
    '/ilkal-sarees': <IlkalSarees />,
    '/bridal-silks': <BridalSilks />,
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
      <Navbar />
      <main className={`flex-1 ${isHomePage ? '' : 'site-page-offset'}`}>
        {pages[path] || dynamicPage || <HomePage />}
      </main>
      <Footer />
    </div>
  )
}
