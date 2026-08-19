import { useState } from 'react'
import { FadeIn } from './Motion'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const onSubmit = (event) => {
    event.preventDefault()
    setSuccess('')
    if (!email.trim()) {
      setError('Email is required.')
      return
    }
    if (!emailPattern.test(email.trim())) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setSuccess('You’re subscribed. Watch your inbox for the next dispatch.')
    setEmail('')
  }

  return (
    <section className="relative isolate overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=70)',
        }}
      />
      <div className="absolute inset-0 bg-ocean-dark/75" />
      <FadeIn className="relative mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-white/10 px-5 py-12 text-center backdrop-blur-md sm:px-10">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-gold">Newsletter</p>
        <h2 className="font-display text-3xl font-semibold text-white sm:text-5xl">Ideas for your next departure</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/80">
          Monthly destination notes, package launches, and a few local secrets — no spam, just reasons to pack a bag.
        </p>
        <form onSubmit={onSubmit} noValidate className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row">
          <label className="sr-only" htmlFor="newsletter-email">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value)
              setError('')
              setSuccess('')
            }}
            placeholder="Enter your email"
            autoComplete="email"
            className="min-w-0 flex-1 rounded-full border border-white/20 bg-card px-5 py-3 text-base text-ink outline-none placeholder:text-muted sm:text-sm"
          />
          <button
            type="submit"
            className="rounded-full bg-gold px-6 py-3 text-sm font-bold text-ocean-dark transition hover:bg-gold-light"
          >
            Subscribe
          </button>
        </form>
        {error && <p className="mt-3 text-sm font-medium text-red-200">{error}</p>}
        {success && <p className="mt-3 text-sm font-medium text-gold-light">{success}</p>}
      </FadeIn>
    </section>
  )
}
