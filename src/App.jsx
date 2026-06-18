import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Collections from './components/Collections'
import FeaturesBar from './components/FeaturesBar'
import StoryArrivals from './components/StoryArrivals'
import Occasions from './components/Occasions'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-dark text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Collections />
      <FeaturesBar />
      <StoryArrivals />
      <Occasions />
      <Footer />
    </div>
  )
}
