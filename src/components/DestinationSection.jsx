import { useEffect, useMemo, useState } from 'react'
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { useWishlist } from '../context/WishlistContext'
import { destinationCategories, destinations, formatPrice } from '../data/content'
import DestinationCard from './DestinationCard'
import FilterChips from './FilterChips'
import ImageCarousel from './ImageCarousel'
import Modal from './Modal'
import { FadeIn, MotionItem, Stagger } from './Motion'

export default function DestinationSection() {
  const location = useLocation()
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const [selected, setSelected] = useState(null)
  const [query, setQuery] = useState(location.state?.query || '')
  const { showSaved, setShowSaved, has } = useWishlist()

  const category = searchParams.get('category') || 'All'
  const onDestinationsPage = location.pathname === '/destinations'

  const setCategory = (value) => {
    setShowSaved(false)
    if (!onDestinationsPage) {
      navigate(value === 'All' ? '/destinations' : `/destinations?category=${encodeURIComponent(value)}`)
      return
    }
    const next = new URLSearchParams(searchParams)
    if (value === 'All') next.delete('category')
    else next.set('category', value)
    setSearchParams(next, { replace: true })
  }

  useEffect(() => {
    const incoming = location.state?.query
    if (incoming) {
      setQuery(incoming)
      setShowSaved(false)
    }
  }, [location.state, setShowSaved])

  useEffect(() => {
    const onSearch = (event) => {
      const value = event.detail?.destination || ''
      setQuery(value)
      setShowSaved(false)
    }
    window.addEventListener('wanderly:search', onSearch)
    return () => window.removeEventListener('wanderly:search', onSearch)
  }, [setShowSaved])

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase()
    return destinations.filter((item) => {
      const matchesCategory = category === 'All' || item.category === category
      const matchesQuery =
        !needle ||
        item.name.toLowerCase().includes(needle) ||
        item.country.toLowerCase().includes(needle) ||
        item.region.toLowerCase().includes(needle) ||
        item.category.toLowerCase().includes(needle)
      const matchesSaved = !showSaved || has(item.id)
      return matchesCategory && matchesQuery && matchesSaved
    })
  }, [category, has, query, showSaved])

  return (
    <section id="destinations" className="w-full px-4 py-16 lg:py-24">
      <FadeIn className="mb-8 max-w-2xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-gold">Popular destinations</p>
        <h2 className="font-display text-3xl font-semibold text-heading sm:text-5xl">
          {category === 'All' ? 'Places worth the journey' : `${category} destinations`}
        </h2>
        <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
          Open Beach, City, or Mountains to see matching places. You can also search or view your wishlist.
        </p>
      </FadeIn>

      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <FilterChips ariaLabel="Filter destinations by category" options={destinationCategories} value={category} onChange={setCategory} />
        <div className="flex flex-wrap items-center gap-2">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search destinations"
            className="min-w-0 flex-1 rounded-full bg-card px-4 py-2.5 text-sm text-ink outline-none ring-1 ring-mist sm:min-w-56"
          />
          <button
            type="button"
            onClick={() => setShowSaved((value) => !value)}
            className={`rounded-full px-4 py-2.5 text-sm font-semibold transition ${
              showSaved ? 'bg-gold text-ocean-dark' : 'bg-card text-muted ring-1 ring-mist'
            }`}
          >
            Wishlist
          </button>
        </div>
      </div>

      {filtered.length ? (
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((destination, index) => (
            <MotionItem key={destination.id}>
              <DestinationCard destination={destination} onExplore={setSelected} eager={index < 2} />
            </MotionItem>
          ))}
        </Stagger>
      ) : (
        <p className="rounded-3xl bg-card px-5 py-10 text-center text-sm text-muted">
          No {category === 'All' ? '' : `${category.toLowerCase()} `}destinations match these filters.
          <button
            type="button"
            className="ml-2 font-semibold text-heading underline"
            onClick={() => {
              setQuery('')
              setShowSaved(false)
              setCategory('All')
            }}
          >
            Show all places
          </button>
        </p>
      )}

      <Modal open={Boolean(selected)} title={selected?.name} onClose={() => setSelected(null)} wide>
        {selected && (
          <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
            <ImageCarousel
              key={selected.id}
              images={selected.images || [selected.image]}
              alt={selected.name}
              className="h-56 rounded-2xl md:h-72"
              autoPlay={false}
            />
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">
                {selected.country} · {selected.category}
              </p>
              <p className="mt-3 text-sm leading-7 text-muted">{selected.description}</p>
              <p className="mt-5 text-lg font-bold text-heading">Starting from {formatPrice(selected.price)}</p>
              <Link
                to={`/packages?category=${encodeURIComponent(selected.category)}`}
                onClick={() => setSelected(null)}
                className="mt-6 inline-flex rounded-full bg-ocean px-5 py-3 text-sm font-semibold text-white transition hover:bg-ocean-dark"
              >
                Browse {selected.category.toLowerCase()} tours
              </Link>
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}
