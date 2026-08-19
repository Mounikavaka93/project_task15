import { FiStar } from 'react-icons/fi'
import { formatPrice } from '../data/content'
import SafeImage from './SafeImage'

export default function PackageCard({ pack, onViewDetails }) {
  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-3xl bg-card shadow-[0_10px_30px_rgba(15,76,92,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,76,92,0.12)]">
      <div className="relative overflow-hidden">
        <SafeImage
          src={pack.image}
          alt={pack.name}
          className="aspect-[3/2] w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-bold text-ocean-dark">
          {pack.tag}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-3 text-sm">
          <span className="inline-flex items-center gap-1 font-bold text-gold">
            <FiStar className="fill-current" />
            {pack.rating.toFixed(1)}
          </span>
          <span className="text-right text-xs font-semibold text-muted">{pack.duration}</span>
        </div>
        <h3 className="mt-3 font-display text-2xl font-semibold text-heading">{pack.name}</h3>
        <p className="mt-1 text-sm text-muted">{pack.destination} · {pack.category}</p>
        <div className="mt-auto flex flex-wrap items-end justify-between gap-3 border-t border-mist pt-4">
          <p>
            <span className="block text-[11px] uppercase tracking-widest text-muted">From</span>
            <strong className="text-lg text-heading">{formatPrice(pack.price)}</strong>
          </p>
          <button
            type="button"
            onClick={() => onViewDetails(pack)}
            className="rounded-full bg-ocean px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-ocean-dark"
          >
            View Details
          </button>
        </div>
      </div>
    </article>
  )
}
