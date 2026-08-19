import { useState } from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import Modal from './Modal'

const empty = {
  name: '',
  email: '',
  password: '',
  confirm: '',
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const namePattern = /^[A-Za-z][A-Za-z\s'.-]{1,49}$/

function validateField(mode, field, form) {
  const name = form.name.trim()
  const email = form.email.trim()

  if (field === 'name') {
    if (mode !== 'signup') return ''
    if (!name) return 'Full name is required.'
    if (name.length < 2) return 'Enter at least 2 characters.'
    if (!namePattern.test(name)) return 'Use letters, spaces, hyphens, or apostrophes only.'
    return ''
  }

  if (field === 'email') {
    if (!email) return 'Email address is required.'
    if (email.length > 80) return 'Email must be 80 characters or fewer.'
    if (!emailPattern.test(email)) return 'Enter a valid email, like name@example.com.'
    return ''
  }

  if (field === 'password') {
    if (!form.password) return 'Password is required.'
    if (/\s/.test(form.password)) return 'Password cannot contain spaces.'
    if (form.password.length < 8) return 'Password must be at least 8 characters.'
    if (mode === 'signup' && !/[A-Za-z]/.test(form.password)) return 'Include at least one letter.'
    if (mode === 'signup' && !/\d/.test(form.password)) return 'Include at least one number.'
    return ''
  }

  if (field === 'confirm') {
    if (mode !== 'signup') return ''
    if (!form.confirm) return 'Please confirm your password.'
    if (form.confirm !== form.password) return 'Passwords do not match.'
    return ''
  }

  return ''
}

function validateForm(mode, form) {
  const fields = mode === 'signup' ? ['name', 'email', 'password', 'confirm'] : ['email', 'password']
  const next = {}
  fields.forEach((field) => {
    const message = validateField(mode, field, form)
    if (message) next[field] = message
  })
  return next
}

function FieldError({ id, message }) {
  if (!message) return null
  return (
    <p id={id} className="px-1 text-xs font-medium text-red-600" role="alert">
      {message}
    </p>
  )
}

export default function AuthModal({ open, onClose }) {
  const [mode, setMode] = useState('login')
  const [form, setForm] = useState(empty)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [success, setSuccess] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  const resetMessages = () => {
    setErrors({})
    setTouched({})
    setSubmitted(false)
    setSuccess('')
  }

  const update = (field) => (event) => {
    const value = event.target.value
    const nextForm = { ...form, [field]: value }
    setForm(nextForm)
    setSuccess('')
    if (submitted || touched[field]) {
      setErrors((current) => {
        const next = { ...current }
        const message = validateField(mode, field, nextForm)
        if (message) next[field] = message
        else delete next[field]
        if (field === 'password' && (submitted || touched.confirm)) {
          const confirmMessage = validateField(mode, 'confirm', nextForm)
          if (confirmMessage) next.confirm = confirmMessage
          else delete next.confirm
        }
        return next
      })
    }
  }

  const markTouched = (field) => () => {
    setTouched((current) => ({ ...current, [field]: true }))
    setErrors((current) => {
      const message = validateField(mode, field, form)
      const next = { ...current }
      if (message) next[field] = message
      else delete next[field]
      return next
    })
  }

  const switchMode = (nextMode) => {
    setMode(nextMode)
    setForm(empty)
    setShowPassword(false)
    setShowConfirm(false)
    resetMessages()
  }

  const onSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    setSuccess('')
    const nextErrors = validateForm(mode, form)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return

    if (mode === 'signup') {
      setSuccess(`Welcome to Wanderly, ${form.name.trim()}. Your account is ready.`)
    } else {
      setSuccess('You’re signed in. Start exploring your next journey.')
    }
  }

  const inputClass = (field) =>
    `w-full rounded-2xl bg-card px-4 py-3 text-sm outline-none ring-1 transition focus:ring-gold ${
      errors[field] ? 'ring-red-500' : 'ring-mist'
    }`

  const showError = (field) => (submitted || touched[field] ? errors[field] : '')

  return (
    <Modal
      open={open}
      title={mode === 'login' ? 'Welcome back' : 'Create your account'}
      onClose={() => {
        setForm(empty)
        setShowPassword(false)
        setShowConfirm(false)
        resetMessages()
        onClose()
      }}
    >
      <div className="mb-5 grid grid-cols-2 rounded-full bg-mist p-1 text-sm font-semibold">
        <button
          type="button"
          onClick={() => switchMode('login')}
          className={`rounded-full py-2 transition ${mode === 'login' ? 'bg-ocean text-white' : 'text-muted'}`}
        >
          Login
        </button>
        <button
          type="button"
          onClick={() => switchMode('signup')}
          className={`rounded-full py-2 transition ${mode === 'signup' ? 'bg-ocean text-white' : 'text-muted'}`}
        >
          Sign Up
        </button>
      </div>

      <form onSubmit={onSubmit} noValidate className="space-y-3">
        {mode === 'signup' && (
          <div className="space-y-1.5">
            <label htmlFor="auth-name" className="px-1 text-xs font-bold uppercase tracking-widest text-muted">
              Full name
            </label>
            <input
              id="auth-name"
              value={form.name}
              onChange={update('name')}
              onBlur={markTouched('name')}
              placeholder="Jane Traveler"
              autoComplete="name"
              aria-invalid={Boolean(showError('name'))}
              aria-describedby={showError('name') ? 'auth-name-error' : undefined}
              className={inputClass('name')}
            />
            <FieldError id="auth-name-error" message={showError('name')} />
          </div>
        )}

        <div className="space-y-1.5">
          <label htmlFor="auth-email" className="px-1 text-xs font-bold uppercase tracking-widest text-muted">
            Email address
          </label>
          <input
            id="auth-email"
            type="email"
            value={form.email}
            onChange={update('email')}
            onBlur={markTouched('email')}
            placeholder="you@example.com"
            autoComplete="email"
            aria-invalid={Boolean(showError('email'))}
            aria-describedby={showError('email') ? 'auth-email-error' : undefined}
            className={inputClass('email')}
          />
          <FieldError id="auth-email-error" message={showError('email')} />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="auth-password" className="px-1 text-xs font-bold uppercase tracking-widest text-muted">
            Password
          </label>
          <div className="relative">
            <input
              id="auth-password"
              type={showPassword ? 'text' : 'password'}
              value={form.password}
              onChange={update('password')}
              onBlur={markTouched('password')}
              placeholder={mode === 'signup' ? 'At least 8 characters' : 'Enter your password'}
              autoComplete={mode === 'signup' ? 'new-password' : 'current-password'}
              aria-invalid={Boolean(showError('password'))}
              aria-describedby={showError('password') ? 'auth-password-error' : mode === 'signup' ? 'auth-password-hint' : undefined}
              className={`${inputClass('password')} pr-12`}
            />
            <button
              type="button"
              onClick={() => setShowPassword((value) => !value)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted transition hover:text-heading"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
          {mode === 'signup' && !showError('password') && (
            <p id="auth-password-hint" className="px-1 text-xs text-muted">
              Use 8+ characters with at least one letter and one number.
            </p>
          )}
          <FieldError id="auth-password-error" message={showError('password')} />
        </div>

        {mode === 'signup' && (
          <div className="space-y-1.5">
            <label htmlFor="auth-confirm" className="px-1 text-xs font-bold uppercase tracking-widest text-muted">
              Confirm password
            </label>
            <div className="relative">
              <input
                id="auth-confirm"
                type={showConfirm ? 'text' : 'password'}
                value={form.confirm}
                onChange={update('confirm')}
                onBlur={markTouched('confirm')}
                placeholder="Re-enter your password"
                autoComplete="new-password"
                aria-invalid={Boolean(showError('confirm'))}
                aria-describedby={showError('confirm') ? 'auth-confirm-error' : undefined}
                className={`${inputClass('confirm')} pr-12`}
              />
              <button
                type="button"
                onClick={() => setShowConfirm((value) => !value)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted transition hover:text-heading"
                aria-label={showConfirm ? 'Hide confirm password' : 'Show confirm password'}
              >
                {showConfirm ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
            <FieldError id="auth-confirm-error" message={showError('confirm')} />
          </div>
        )}

        <button type="submit" className="w-full rounded-full bg-gold py-3 text-sm font-bold text-ocean-dark transition hover:bg-gold-light">
          {mode === 'login' ? 'Login' : 'Create account'}
        </button>
      </form>

      {success && (
        <p className="mt-3 text-sm font-medium text-heading" role="status">
          {success}
        </p>
      )}
    </Modal>
  )
}
