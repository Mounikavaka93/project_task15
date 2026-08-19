import { useEffect } from 'react'
import { FiX } from 'react-icons/fi'

export default function Modal({ open, title, onClose, children, wide = false }) {
  useEffect(() => {
    if (!open) return undefined
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center p-3 sm:items-center sm:p-6">
      <button
        type="button"
        aria-label="Close dialog"
        className="absolute inset-0 bg-ocean-dark/55 backdrop-blur-[2px]"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className={`relative max-h-[90vh] w-full overflow-y-auto rounded-3xl bg-sand p-5 shadow-2xl sm:p-7 ${wide ? 'max-w-3xl' : 'max-w-lg'}`}
      >
        <div className="mb-5 flex items-start justify-between gap-4">
          <h3 id="modal-title" className="font-display text-2xl font-semibold text-heading">
            {title}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-card text-heading transition hover:bg-gold"
            aria-label="Close"
          >
            <FiX />
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}
