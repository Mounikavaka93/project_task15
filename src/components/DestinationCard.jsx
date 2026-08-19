import { FiArrowUpRight, FiHeart } from 'react-icons/fi'
import { useWishlist } from '../context/WishlistContext'
import { formatPrice } from '../data/content'
import SafeImage from './SafeImage'

export default function DestinationCard({ destination, onExplore, eager = false }) {
  const { has, toggle } = useWishlist()
  const saved = has(destination.id)

  return (
    <article className="group min-w-0 overflow-hidden rounded-3xl bg-card shadow-[0_10px_30px_rgba(15,76,92,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,76,92,0.12)]">
      <div className="relative overflow-hidden">
        <SafeImage
          src={destination.image}
          alt={destination.name}
          eager={eager}
          className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <span className="absolute bottom-3 left-3 rounded-full bg-card/95 px-3 py-1 text-xs font-bold text-heading">
          From {formatPrice(destination.price)}
        </span>
        <button
          type="button"
          onClick={() => toggle(destination.id)}
          className={`absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full shadow-md transition ${
            saved ? 'bg-gold text-ocean-dark' : 'bg-card/90 text-heading hover:bg-gold'
          }`}
          aria-label={saved ? `Remove ${destination.name} from wishlist` : `Save ${destination.name} to wishlist`}
        >
          <FiHeart className={saved ? 'fill-current' : ''} />
        </button>
      </div>
      <div className="p-5">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">
          {destination.country} · {destination.category}
        </p>
        <h3 className="mt-1 font-display text-2xl font-semibold text-heading">{destination.name}</h3>
        <p className="mt-2 text-sm leading-6 text-muted">{destination.description}</p>
        <button
          type="button"
          onClick={() => onExplore(destination)}
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-ocean px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-ocean-dark"
        >
          Explore
          <FiArrowUpRight />
        </button>
      </div>
    </article>
  )
}
