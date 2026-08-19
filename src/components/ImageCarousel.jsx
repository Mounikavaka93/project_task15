import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

export default function ImageCarousel({ images = [], alt = 'Travel photo', className = '', autoPlay = true, interval = 5000 }) {
  const [index, setIndex] = useState(0)
  const reduce = useReducedMotion()
  const slides = images.length ? images : []

  useEffect(() => {
    if (!autoPlay || reduce || slides.length < 2) return undefined
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % slides.length)
    }, interval)
    return () => clearInterval(timer)
  }, [autoPlay, interval, reduce, slides.length])

  if (!slides.length) return null

  const go = (direction) => {
    setIndex((current) => (current + direction + slides.length) % slides.length)
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.img
          key={slides[index]}
          src={slides[index]}
          alt={`${alt} ${index + 1}`}
          className="absolute inset-0 h-full w-full object-cover"
          initial={reduce ? false : { opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={reduce ? undefined : { opacity: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        />
      </AnimatePresence>

      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(-1)}
            className="absolute left-3 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-card/85 text-heading shadow-md transition hover:bg-gold"
            aria-label="Previous image"
          >
            <FiChevronLeft />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            className="absolute right-3 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-card/85 text-heading shadow-md transition hover:bg-gold"
            aria-label="Next image"
          >
            <FiChevronRight />
          </button>
          <div className="absolute bottom-3 left-0 right-0 z-10 flex justify-center gap-2">
            {slides.map((src, slideIndex) => (
              <button
                key={`${src}-${slideIndex}`}
                type="button"
                onClick={() => setIndex(slideIndex)}
                className={`h-2 rounded-full transition ${slideIndex === index ? 'w-6 bg-gold' : 'w-2 bg-white/70'}`}
                aria-label={`Go to image ${slideIndex + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
