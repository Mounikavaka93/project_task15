import { useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { FiCompass, FiHeart, FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'
import { useWishlist } from '../context/WishlistContext'
import { navLinks } from '../data/content'

export default function Navbar({ onAuthClick }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { isDark, toggleTheme } = useTheme()
  const { count, setShowSaved } = useWishlist()
  const navigate = useNavigate()
  const location = useLocation()

  const closeMenu = () => setOpen(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    closeMenu()
  }, [location.pathname])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) closeMenu()
    }
    const onKey = (event) => {
      if (event.key === 'Escape') closeMenu()
    }
    window.addEventListener('resize', onResize)
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('keydown', onKey)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const openWishlist = () => {
    closeMenu()
    setShowSaved(true)
    navigate('/destinations')
  }

  const linkClass = ({ isActive }) =>
    `group relative py-1 transition hover:text-heading ${isActive ? 'text-heading' : ''}`

  return (
    <header
      className={`sticky top-0 z-50 border-b transition duration-300 ${
        scrolled ? 'border-mist bg-sand shadow-sm' : 'border-transparent bg-sand'
      }`}
    >
      <nav className="relative z-50 mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex min-w-0 items-center gap-2 text-heading" onClick={closeMenu}>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold text-lg text-ocean-dark">
            <FiCompass />
          </span>
          <span className="font-display text-2xl font-semibold tracking-tight">
            Wanderly<span className="text-gold">.</span>
          </span>
        </NavLink>

        <div className="hidden items-center gap-5 text-sm font-semibold text-muted xl:gap-7 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={linkClass}>
              {({ isActive }) => (
                <>
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-gold transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="grid h-11 w-11 place-items-center rounded-full border border-mist bg-card text-heading transition hover:bg-gold"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <FiSun /> : <FiMoon />}
          </button>
          <button
            type="button"
            onClick={openWishlist}
            className="relative grid h-11 w-11 place-items-center rounded-full border border-mist bg-card text-heading transition hover:bg-gold"
            aria-label="Saved destinations"
          >
            <FiHeart className={count ? 'fill-current text-gold' : ''} />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-ocean px-1 text-[10px] font-bold text-white">
                {count}
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={onAuthClick}
            className="hidden rounded-full bg-ocean px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-ocean-dark lg:inline-flex"
          >
            Login / Sign Up
          </button>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-mist bg-card text-xl text-heading transition hover:bg-gold lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {open && (
        <button
          type="button"
          aria-label="Close menu overlay"
          className="fixed inset-0 top-[4.25rem] z-30 bg-ocean-dark/40 lg:hidden"
          onClick={closeMenu}
        />
      )}

      <div
        id="mobile-menu"
        inert={!open}
        className={`absolute left-0 right-0 z-40 origin-top border-b border-mist bg-sand px-4 shadow-lg transition duration-200 lg:hidden ${
          open ? 'visible scale-y-100 opacity-100' : 'pointer-events-none invisible scale-y-95 opacity-0'
        }`}
      >
        <div className="mx-auto max-h-[calc(100svh-4.5rem)] max-w-7xl overflow-y-auto py-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={closeMenu}
              className={({ isActive }) =>
                `block rounded-xl border-b border-mist/80 px-2 py-3.5 text-base font-semibold transition hover:bg-mist hover:text-heading ${
                  isActive ? 'text-heading' : 'text-muted'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <button
            type="button"
            onClick={() => {
              closeMenu()
              onAuthClick()
            }}
            className="my-4 w-full rounded-full bg-ocean py-3 text-sm font-semibold text-white transition hover:bg-ocean-dark"
          >
            Login / Sign Up
          </button>
        </div>
      </div>
    </header>
  )
}
