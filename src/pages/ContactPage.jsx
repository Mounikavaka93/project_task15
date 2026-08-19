import { useState } from 'react'
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import PageHero from '../components/PageHero'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const empty = { name: '', email: '', message: '' }

export default function ContactPage() {
  const [form, setForm] = useState(empty)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [success, setSuccess] = useState('')

  const update = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }))
    setSuccess('')
    if (submitted) {
      setErrors(validate({ ...form, [field]: event.target.value }))
    }
  }

  const validate = (values) => {
    const next = {}
    if (!values.name.trim()) next.name = 'Name is required.'
    if (!values.email.trim()) next.email = 'Email address is required.'
    else if (!emailPattern.test(values.email.trim())) next.email = 'Enter a valid email, like name@example.com.'
    if (!values.message.trim()) next.message = 'Please enter a message.'
    else if (values.message.trim().length < 10) next.message = 'Message should be at least 10 characters.'
    return next
  }

  const onSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    const nextErrors = validate(form)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return
    setSuccess('Thanks — a Wanderly specialist will get back to you shortly.')
    setForm(empty)
    setSubmitted(false)
  }

  const inputClass = (field) =>
    `w-full rounded-2xl bg-card px-4 py-3 text-sm outline-none ring-1 transition focus:ring-gold ${
      errors[field] ? 'ring-red-500' : 'ring-mist'
    }`

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us where you want to go"
        copy="Share a few details and we’ll help you shape the trip. Support is available 24/7."
      />
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-24">
        <div>
          <h2 className="font-display text-3xl font-semibold text-heading">Get in touch</h2>
          <p className="mt-4 text-sm leading-7 text-muted">
            Prefer to skip the form? Email, call, or visit — we answer around the clock.
          </p>
          <div className="mt-8 space-y-4 text-sm">
            <a href="mailto:hello@wanderly.travel" className="flex items-start gap-3 text-heading transition hover:text-gold">
              <FiMail className="mt-0.5 text-gold" />
              hello@wanderly.travel
            </a>
            <a href="tel:+14155550192" className="flex items-start gap-3 text-heading transition hover:text-gold">
              <FiPhone className="mt-0.5 text-gold" />
              +1 (415) 555-0192
            </a>
            <p className="flex items-start gap-3 text-heading">
              <FiMapPin className="mt-0.5 text-gold" />
              210 Harbor Lane, San Francisco, CA
            </p>
          </div>
        </div>

        <form onSubmit={onSubmit} noValidate className="space-y-4 rounded-3xl bg-card p-5 shadow-[0_10px_30px_rgba(15,76,92,0.06)] sm:p-8">
          <div className="space-y-1.5">
            <label htmlFor="contact-name" className="px-1 text-xs font-bold uppercase tracking-widest text-muted">
              Name
            </label>
            <input
              id="contact-name"
              value={form.name}
              onChange={update('name')}
              className={inputClass('name')}
              placeholder="Your name"
            />
            {errors.name && <p className="px-1 text-xs font-medium text-red-600">{errors.name}</p>}
          </div>
          <div className="space-y-1.5">
            <label htmlFor="contact-email" className="px-1 text-xs font-bold uppercase tracking-widest text-muted">
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              value={form.email}
              onChange={update('email')}
              className={inputClass('email')}
              placeholder="you@example.com"
            />
            {errors.email && <p className="px-1 text-xs font-medium text-red-600">{errors.email}</p>}
          </div>
          <div className="space-y-1.5">
            <label htmlFor="contact-message" className="px-1 text-xs font-bold uppercase tracking-widest text-muted">
              Message
            </label>
            <textarea
              id="contact-message"
              value={form.message}
              onChange={update('message')}
              rows={5}
              className={inputClass('message')}
              placeholder="Where would you like to go?"
            />
            {errors.message && <p className="px-1 text-xs font-medium text-red-600">{errors.message}</p>}
          </div>
          <button type="submit" className="w-full rounded-full bg-gold py-3 text-sm font-bold text-ocean-dark transition hover:bg-gold-light">
            Send message
          </button>
          {success && <p className="text-sm font-medium text-heading">{success}</p>}
        </form>
      </section>
    </>
  )
}
