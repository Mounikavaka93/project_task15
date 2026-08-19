import { useState } from 'react'
import { stats } from '../data/content'
import { FadeIn } from './Motion'

export default function AboutSection() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section id="about" className="w-full bg-card px-4 py-16 lg:py-24">
      <div className="grid w-full items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <FadeIn>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=800&q=70"
              alt="Travelers walking along a coastal path"
              className="aspect-[4/3] w-full rounded-[2rem] object-cover"
            />
            <div className="absolute bottom-4 right-4 rounded-2xl bg-gold px-5 py-4 text-ocean-dark shadow-lg">
              <p className="font-display text-3xl font-bold">12 yrs</p>
              <p className="text-xs font-bold uppercase tracking-widest">crafting journeys</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-gold">Travel experience</p>
          <h2 className="font-display text-3xl font-semibold leading-tight text-heading sm:text-5xl">
            Designed for the stories you’ll tell later
          </h2>
          <p className="mt-5 text-sm leading-7 text-muted sm:text-base">
            Wanderly is an independent travel studio helping people explore the world with more intention and less friction. We plan the logistics, partner with local experts, and leave space for the unexpected — the part of travel that actually stays with you.
          </p>
          {expanded && (
            <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
              Every package is reviewed by a specialist, stays are chosen for character as much as comfort, and support stays available around the clock. Whether you are booking a first international trip or a once-in-a-decade getaway, we keep the process calm, clear, and human.
            </p>
          )}
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            className="mt-6 rounded-full bg-ocean px-5 py-3 text-sm font-semibold text-white transition hover:bg-ocean-dark"
          >
            {expanded ? 'Show less' : 'Learn More'}
          </button>

          <div className="mt-8 grid grid-cols-2 gap-4 border-t border-mist pt-6 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl font-semibold text-heading">{stat.value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
