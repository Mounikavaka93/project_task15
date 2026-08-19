import { testimonials } from '../data/content'
import { FadeIn, MotionItem, Stagger } from './Motion'
import TestimonialCard from './TestimonialCard'

export default function Testimonials() {
  return (
    <section className="w-full bg-ocean-dark px-4 py-16 lg:py-24">
      <div className="w-full">
        <FadeIn>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-gold">Testimonials</p>
          <h2 className="font-display text-3xl font-semibold text-white sm:text-5xl">Travelers, in their own words</h2>
        </FadeIn>
        <Stagger className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <MotionItem key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </MotionItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
