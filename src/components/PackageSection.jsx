import { useMemo, useState } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { FiCheck } from 'react-icons/fi'
import {
  formatPrice,
  matchesDuration,
  packageCategories,
  packageDurations,
  packages,
  parsePackageFilters,
} from '../data/content'
import FilterChips from './FilterChips'
import ImageCarousel from './ImageCarousel'
import Modal from './Modal'
import { FadeIn, MotionItem, Stagger } from './Motion'
import PackageCard from './PackageCard'

export default function PackageSection() {
  const location = useLocation()
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const [selected, setSelected] = useState(null)
  const [booked, setBooked] = useState('')
  const initial = parsePackageFilters(searchParams)
  const [category, setCategoryState] = useState(initial.category)
  const [duration, setDurationState] = useState(initial.duration)

  const onPackagesPage = location.pathname === '/packages'

  const writeParams = (nextCategory, nextDuration) => {
    if (!onPackagesPage) return
    const next = new URLSearchParams()
    if (nextCategory !== 'All') next.set('category', nextCategory)
    if (nextDuration !== 'all') next.set('duration', nextDuration)
    setSearchParams(next, { replace: true })
  }

  const setCategory = (value) => {
    if (!onPackagesPage) {
      navigate(value === 'All' ? '/packages' : `/packages?category=${encodeURIComponent(value)}`)
      return
    }
    setCategoryState(value)
    setDurationState('all')
    writeParams(value, 'all')
  }

  const setDuration = (value) => {
    const next = typeof value === 'object' && value !== null ? value.value : value
    setCategoryState('All')
    setDurationState(next)
    writeParams('All', next)
  }

  const filtered = useMemo(() => {
    const byDuration = packages.filter((pack) => matchesDuration(pack.days, duration))
    const combined = byDuration.filter((pack) => category === 'All' || pack.category === category)
    if (combined.length) return combined
    if (duration !== 'all') return byDuration
    return packages.filter((pack) => category === 'All' || pack.category === category)
  }, [category, duration])

  const heading =
    duration === 'short'
      ? 'Short trips (5 days)'
      : duration === 'week'
        ? 'Week-long trips (6–7 days)'
        : duration === 'long'
          ? 'Longer trips (8+ days)'
          : category === 'All'
            ? 'Tours with room to wander'
            : `${category} packages`

  return (
    <section id="packages" className="w-full bg-mist/70 px-4 py-16 lg:py-24">
      <div className="w-full">
        <FadeIn className="mb-8 max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-gold">Featured travel packages</p>
          <h2 className="font-display text-3xl font-semibold text-heading sm:text-5xl">{heading}</h2>
          <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
            Choose Beach, City, or Mountains — or pick a trip length. Short, week, and long always show matching tours.
          </p>
        </FadeIn>

        <div className="mb-8 flex flex-col gap-4">
          <FilterChips ariaLabel="Filter packages by category" options={packageCategories} value={category} onChange={setCategory} />
          <FilterChips ariaLabel="Filter packages by duration" options={packageDurations} value={duration} onChange={setDuration} />
        </div>

        {filtered.length ? (
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((pack) => (
              <MotionItem key={pack.id}>
                <PackageCard pack={pack} onViewDetails={setSelected} />
              </MotionItem>
            ))}
          </Stagger>
        ) : (
          <p className="rounded-3xl bg-card px-5 py-10 text-center text-sm text-muted">
            No packages match these filters.
            <button
              type="button"
              className="ml-2 font-semibold text-heading underline"
              onClick={() => {
                setCategoryState('All')
                setDurationState('all')
                writeParams('All', 'all')
              }}
            >
              Show all packages
            </button>
          </p>
        )}
      </div>

      <Modal
        open={Boolean(selected)}
        title={selected?.name}
        onClose={() => {
          setSelected(null)
          setBooked('')
        }}
        wide
      >
        {selected && (
          <div className="grid gap-6 md:grid-cols-2">
            <ImageCarousel
              key={selected.id}
              images={selected.images || [selected.image]}
              alt={selected.name}
              className="h-56 rounded-2xl md:h-72"
              autoPlay={false}
            />
            <div>
              <p className="text-sm font-semibold text-muted">{selected.destination}</p>
              <p className="mt-2 text-sm text-muted">{selected.duration} · {selected.category} · Rated {selected.rating.toFixed(1)}</p>
              <p className="mt-4 text-sm leading-7 text-ink">{selected.details}</p>
              <ul className="mt-5 space-y-2">
                {selected.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-heading">
                    <FiCheck className="text-gold" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <p className="text-xl font-bold text-heading">{formatPrice(selected.price)}</p>
                <button
                  type="button"
                  onClick={() => setBooked(`Your interest in ${selected.name} has been saved. A specialist will follow up shortly.`)}
                  className="rounded-full bg-gold px-5 py-3 text-sm font-bold text-ocean-dark transition hover:bg-gold-light"
                >
                  Book this package
                </button>
              </div>
              {booked && <p className="mt-3 text-sm font-medium text-heading">{booked}</p>}
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}
