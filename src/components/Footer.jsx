import { Link } from 'react-router-dom'
import { FiFacebook, FiInstagram, FiMail, FiMapPin, FiPhone, FiTwitter } from 'react-icons/fi'
import { footerDestinations, footerLinks } from '../data/content'

export default function Footer() {
  return (
    <footer className="w-full bg-ocean-dark px-4 py-14 text-white/80">
      <div className="grid w-full gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="min-w-0">
          <Link to="/" className="font-display text-2xl font-semibold text-white transition hover:text-gold">
            Wanderly<span className="text-gold">.</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-7">
            Wanderly is a premium travel studio for people who want destinations with depth, packages with breathing room, and support that actually answers.
          </p>
          <div className="mt-5 flex gap-3 text-lg">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-gold hover:text-ocean-dark">
              <FiInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-gold hover:text-ocean-dark">
              <FiFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-gold hover:text-ocean-dark">
              <FiTwitter />
            </a>
          </div>
        </div>

        <div className="min-w-0">
          <h3 className="font-bold text-white">Quick Links</h3>
          <div className="mt-4 space-y-3 text-sm">
            {footerLinks.map((link) => (
              <Link key={link.to} to={link.to} className="block transition hover:text-gold">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="min-w-0">
          <h3 className="font-bold text-white">Popular Destinations</h3>
          <div className="mt-4 space-y-3 text-sm">
            {footerDestinations.map((place) => (
              <Link key={place} to="/destinations" className="block transition hover:text-gold">
                {place}
              </Link>
            ))}
          </div>
        </div>

        <div className="min-w-0">
          <h3 className="font-bold text-white">Contact</h3>
          <div className="mt-4 space-y-3 text-sm">
            <a href="mailto:hello@wanderly.travel" className="flex items-start gap-2 transition hover:text-gold">
              <FiMail className="mt-0.5 shrink-0 text-gold" />
              hello@wanderly.travel
            </a>
            <a href="tel:+14155550192" className="flex items-start gap-2 transition hover:text-gold">
              <FiPhone className="mt-0.5 shrink-0 text-gold" />
              +1 (415) 555-0192
            </a>
            <p className="flex items-start gap-2">
              <FiMapPin className="mt-0.5 shrink-0 text-gold" />
              210 Harbor Lane, San Francisco, CA
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12 w-full border-t border-white/10 pt-6 text-xs text-white/55">
        © 2026 Wanderly Travel Studio. All rights reserved.
      </div>
    </footer>
  )
}
