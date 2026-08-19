import { useSearchParams } from 'react-router-dom'
import DestinationSection from '../components/DestinationSection'
import Newsletter from '../components/Newsletter'
import PageHero from '../components/PageHero'

export default function DestinationsPage() {
  const [params] = useSearchParams()
  const category = params.get('category') || 'All'

  return (
    <>
      <PageHero
        eyebrow="Destinations"
        title={category === 'All' ? 'Places worth the journey' : `${category} destinations`}
        copy={
          category === 'All'
            ? 'Open Beach, City, or Mountains to see matching places.'
            : `Showing ${category.toLowerCase()} places. Switch categories anytime.`
        }
      />
      <DestinationSection />
      <Newsletter />
    </>
  )
}
