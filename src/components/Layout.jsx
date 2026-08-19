import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import AuthModal from './AuthModal'
import BackToTop from './BackToTop'
import Footer from './Footer'
import Navbar from './Navbar'
import WhatsAppButton from './WhatsAppButton'

export default function Layout({ authOpen, onAuthOpen, onAuthClose }) {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-screen bg-sand text-ink">
      <Navbar onAuthClick={onAuthOpen} />
      <main>
        <Outlet />
      </main>
      <Footer />
      <AuthModal open={authOpen} onClose={onAuthClose} />
      <WhatsAppButton />
      <BackToTop />
    </div>
  )
}
