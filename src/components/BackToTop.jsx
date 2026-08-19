import { useEffect, useState } from 'react'
import { FiArrowUp } from 'react-icons/fi'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-24 right-4 z-40 grid h-12 w-12 place-items-center rounded-full bg-ocean text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-ocean-dark sm:right-6"
      aria-label="Back to top"
    >
      <FiArrowUp />
    </button>
  )
}
