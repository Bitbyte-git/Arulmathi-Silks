import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Collections from './components/Collections'
import KanchipuramSilk from './components/KanchipuramSilk'
import SailaPattu from './components/SailaPattu'
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
import FeaturesBar from './components/FeaturesBar'
import StoryArrivals from './components/StoryArrivals'
import Occasions from './components/Occasions'
import Footer from './components/Footer'

function HomePage() {
  return (
    <>
      <Hero />
      <Collections />
      <FeaturesBar />
      <StoryArrivals />
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
    '/banarasi-silk': <BanarasiSilk />,
    '/mysore-silk': <MysoreSilk />,
    '/tussar-silk': <TussarSilk />,
    '/chettinad-cotton': <ChettinadCotton />,
    '/ilkal-sarees': <IlkalSarees />,
    '/bridal-silks': <BridalSilks />,
    '/about-us': <AboutUs />,
    '/shop': <ShopPage />,
    '/contact-us': <ContactUs />,
  }

  const pathParts = path.split('/').filter(Boolean)
  const dynamicPage = pathParts[0] === 'izhamathi-pattu' && pathParts.length === 2
    ? <CollectionDesigns collectionSlug={pathParts[1]} />
    : pathParts[0] === 'izhamathi-pattu' && pathParts.length === 3
      ? <SareeDetail collectionSlug={pathParts[1]} designSlug={pathParts[2]} />
      : null

  return (
    <div className="min-h-screen bg-dark text-white overflow-x-hidden flex flex-col">
      <Navbar />
      <main className="flex-1">
        {pages[path] || dynamicPage || <HomePage />}
      </main>
      <Footer />
    </div>
  )
}
