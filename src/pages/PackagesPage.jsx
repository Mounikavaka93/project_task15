import { useSearchParams } from 'react-router-dom'
import Newsletter from '../components/Newsletter'
import PackageSection from '../components/PackageSection'
import PageHero from '../components/PageHero'
import { parsePackageFilters } from '../data/content'

export default function PackagesPage() {
  const [params] = useSearchParams()
  const { category, duration } = parsePackageFilters(params)

  const title =
    duration === 'short'
      ? 'Short trips (5 days)'
      : duration === 'week'
        ? 'Week-long trips (6–7 days)'
        : duration === 'long'
          ? 'Longer trips (8+ days)'
          : category === 'All'
            ? 'Tours with room to wander'
            : `${category} packages`

  const copy =
    duration !== 'all'
      ? 'Matching tours by trip length. Switch filters anytime.'
      : category === 'All'
        ? 'Open Beach, City, or Mountains — or pick Short, Week, or Long.'
        : `Showing ${category.toLowerCase()} packages. Switch categories anytime.`

  return (
    <>
      <PageHero eyebrow="Tours & packages" title={title} copy={copy} />
      <PackageSection />
      <Newsletter />
    </>
  )
}
