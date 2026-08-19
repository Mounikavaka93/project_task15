import { FiHeadphones, FiLock, FiShield, FiTag } from 'react-icons/fi'
import { features } from '../data/content'
import FeatureCard from './FeatureCard'
import { FadeIn, MotionItem, Stagger } from './Motion'

const icons = {
  price: <FiTag />,
  partners: <FiShield />,
  support: <FiHeadphones />,
  booking: <FiLock />,
}

export default function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <FadeIn className="mb-10 max-w-2xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-gold">Why choose us</p>
        <h2 className="font-display text-3xl font-semibold text-heading sm:text-5xl">Travel that feels looked after</h2>
        <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
          From the first search to the flight home, Wanderly is built around clarity, care, and a better kind of itinerary.
        </p>
      </FadeIn>
      <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <MotionItem key={feature.id}>
            <FeatureCard
              icon={icons[feature.id]}
              title={feature.title}
              description={feature.description}
            />
          </MotionItem>
        ))}
      </Stagger>
    </section>
  )
}
