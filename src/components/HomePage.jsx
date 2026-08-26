import { lazy, Suspense } from 'react'
import Hero from './Hero'
import useDeferredSiteLoad from '../hooks/useDeferredSiteLoad'

const Collections = lazy(() => import('./Collections'))
const FeaturesBar = lazy(() => import('./FeaturesBar'))
const StoryArrivals = lazy(() => import('./StoryArrivals'))
const Occasions = lazy(() => import('./Occasions'))

export default function HomePage() {
  const canLoadDeferredContent = useDeferredSiteLoad()

  return (
    <>
      <Hero />
      {canLoadDeferredContent ? (
        <Suspense fallback={<div className="min-h-[420px] bg-[#13121f]" aria-hidden="true" />}>
          <Collections />
          <StoryArrivals />
          <FeaturesBar />
          <Occasions />
        </Suspense>
      ) : (
        <div id="collections" className="min-h-[420px] bg-[#13121f]" aria-hidden="true" />
      )}
    </>
  )
}
