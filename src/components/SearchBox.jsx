import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiCalendar, FiChevronDown, FiMapPin, FiSearch, FiUsers } from 'react-icons/fi'
import { destinations } from '../data/content'

const localToday = () => {
  const now = new Date()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  return `${now.getFullYear()}-${month}-${day}`
}

const suggestionList = [
  ...destinations.map((item) => ({ label: item.name, hint: item.country })),
  { label: 'Bali', hint: 'Indonesia' },
  { label: 'Dubai', hint: 'United Arab Emirates' },
  { label: 'Paris', hint: 'France' },
  { label: 'Maldives', hint: 'Maldives' },
  { label: 'Swiss Alps', hint: 'Switzerland' },
  { label: 'Singapore', hint: 'Singapore' },
]

export default function SearchBox() {
  const today = localToday()
  const navigate = useNavigate()
  const [form, setForm] = useState({ destination: '', date: '', travelers: '2' })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [openSuggestions, setOpenSuggestions] = useState(false)
  const searchRef = useRef(null)

  const suggestions = useMemo(() => {
    const query = form.destination.trim().toLowerCase()
    if (!query) return suggestionList
    return suggestionList.filter(
      (item) => item.label.toLowerCase().includes(query) || item.hint.toLowerCase().includes(query),
    )
  }, [form.destination])

  useEffect(() => {
    const onPointerDown = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setOpenSuggestions(false)
      }
    }
    document.addEventListener('mousedown', onPointerDown)
    return () => document.removeEventListener('mousedown', onPointerDown)
  }, [])

  const update = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }))
    setError('')
    setSuccess('')
    if (field === 'destination') setOpenSuggestions(true)
  }

  const chooseDestination = (name) => {
    setForm((prev) => ({ ...prev, destination: name }))
    setOpenSuggestions(false)
    setError('')
    setSuccess('')
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if (!form.destination.trim()) {
      setError('Please enter a destination.')
      setOpenSuggestions(true)
      return
    }
    if (!form.date) {
      setError('Please choose a travel date.')
      return
    }
    if (form.date < today) {
      setError('Travel date cannot be in the past.')
      return
    }
    if (!form.travelers) {
      setError('Please select the number of travelers.')
      return
    }

    setError('')
    const count = form.travelers === '1' ? '1 traveler' : `${form.travelers === '5' ? '5+' : form.travelers} travelers`
    setSuccess(`Showing trips for ${form.destination} · ${form.date} · ${count}`)
    setOpenSuggestions(false)
    window.dispatchEvent(new CustomEvent('wanderly:search', { detail: { destination: form.destination } }))
    navigate('/destinations', { state: { query: form.destination } })
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="w-full rounded-3xl bg-card p-3 shadow-[0_20px_50px_rgba(10,52,64,0.18)] sm:p-4"
    >
      <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-[1.25fr_1fr_1fr_auto]">
        <label ref={searchRef} className="relative z-20 flex min-w-0 items-center gap-3 rounded-2xl bg-sand px-4 py-3">
          <FiMapPin className="shrink-0 text-gold" />
          <span className="min-w-0 flex-1">
            <span className="block text-[11px] font-bold uppercase tracking-[0.16em] text-muted">Destination</span>
            <input
              value={form.destination}
              onChange={update('destination')}
              onFocus={() => setOpenSuggestions(true)}
              placeholder="Where are you going?"
              autoComplete="off"
              className="w-full bg-transparent text-base font-semibold text-ink outline-none placeholder:text-muted/70 sm:text-sm"
            />
          </span>
          {openSuggestions && (
            <ul className="absolute left-0 right-0 top-[calc(100%+6px)] z-20 max-h-56 overflow-y-auto rounded-2xl border border-mist bg-card py-2 shadow-xl">
              {suggestions.length === 0 ? (
                <li className="px-4 py-2 text-sm text-muted">No matching destinations</li>
              ) : (
                suggestions.map((item) => (
                  <li key={item.label}>
                    <button
                      type="button"
                      onClick={() => chooseDestination(item.label)}
                      className="flex w-full items-center justify-between px-4 py-2.5 text-left text-sm font-semibold text-heading transition hover:bg-sand"
                    >
                      {item.label}
                      <span className="text-xs font-medium text-muted">{item.hint}</span>
                    </button>
                  </li>
                ))
              )}
            </ul>
          )}
        </label>

        <label className="flex min-w-0 cursor-pointer items-center gap-3 rounded-2xl bg-sand px-4 py-3">
          <FiCalendar className="shrink-0 text-gold" />
          <span className="min-w-0 flex-1">
            <span className="block text-[11px] font-bold uppercase tracking-[0.16em] text-muted">Travel date</span>
            <input
              type="date"
              min={today}
              value={form.date}
              onChange={update('date')}
              className="w-full min-w-0 cursor-pointer bg-transparent text-base font-semibold text-ink outline-none sm:text-sm"
            />
          </span>
        </label>

        <label className="flex min-w-0 cursor-pointer items-center gap-3 rounded-2xl bg-sand px-4 py-3">
          <FiUsers className="shrink-0 text-gold" />
          <span className="relative min-w-0 flex-1">
            <span className="block text-[11px] font-bold uppercase tracking-[0.16em] text-muted">Travelers</span>
            <select
              value={form.travelers}
              onChange={update('travelers')}
              className="w-full cursor-pointer appearance-none bg-transparent pr-6 text-base font-semibold text-ink outline-none sm:text-sm"
            >
              <option value="1">1 traveler</option>
              <option value="2">2 travelers</option>
              <option value="3">3 travelers</option>
              <option value="4">4 travelers</option>
              <option value="5">5+ travelers</option>
            </select>
            <FiChevronDown className="pointer-events-none absolute right-0 bottom-1 text-muted" />
          </span>
        </label>

        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gold px-6 py-3 text-sm font-bold text-ocean-dark transition hover:-translate-y-0.5 hover:bg-gold-light md:col-span-2 lg:col-span-1"
        >
          <FiSearch />
          Explore Now
        </button>
      </div>
      {error && (
        <p className="mt-3 px-1 text-sm font-medium text-red-600" role="alert">
          {error}
        </p>
      )}
      {success && <p className="mt-3 px-1 text-sm font-medium text-heading">{success}</p>}
    </form>
  )
}
