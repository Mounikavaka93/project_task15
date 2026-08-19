import { FiStar } from 'react-icons/fi'

function Stars({ rating }) {
  const filled = Math.round(rating)
  return (
    <div className="flex text-gold" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <FiStar key={index} className={index < filled ? 'fill-current' : 'opacity-30'} />
      ))}
    </div>
  )
}

export default function TestimonialCard({ testimonial }) {
  return (
    <article className="flex h-full min-w-0 flex-col rounded-3xl bg-ocean p-6 text-white shadow-[0_16px_36px_rgba(10,52,64,0.18)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(10,52,64,0.28)]">
      <div className="flex items-center gap-3">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-gold/70"
        />
        <div className="min-w-0 flex-1">
          <p className="truncate font-bold">{testimonial.name}</p>
          <Stars rating={testimonial.rating} />
        </div>
      </div>
      <p className="mt-5 flex-1 text-sm leading-7 text-white/85">“{testimonial.review}”</p>
      <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-gold">Visited {testimonial.destination}</p>
    </article>
  )
}
