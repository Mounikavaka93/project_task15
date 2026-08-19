import { heroSlides } from '../data/content'
import { useEffect, useState } from 'react'
import SearchBox from './SearchBox'

export default function HeroSection() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % heroSlides.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="relative isolate">
      <div className="absolute inset-0 overflow-hidden bg-ocean-dark">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroSlides[index].image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-dark/80 via-ocean-dark/55 to-sand" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 py-16 sm:px-6 sm:py-20 lg:min-h-[92vh] lg:justify-end lg:px-8 lg:pb-16 lg:pt-24">
        <div className="max-w-3xl text-white">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-gold">Premium travel studio</p>
          <h1 className="font-display text-[2rem] font-semibold leading-[1.1] sm:text-5xl lg:text-7xl">
            Explore the World, One Journey at a Time
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-7 text-white/85 sm:text-base">
            Discover handpicked destinations, exclusive travel packages, and unforgettable tours designed for curious travelers who want more than a checklist.
          </p>
        </div>
        <div className="mt-8 w-full max-w-5xl">
          <SearchBox />
        </div>
        <div className="mt-6 flex gap-2">
          {heroSlides.map((slide, slideIndex) => (
            <button
              key={slide.image}
              type="button"
              onClick={() => setIndex(slideIndex)}
              className={`h-1.5 rounded-full transition ${slideIndex === index ? 'w-8 bg-gold' : 'w-3 bg-white/50'}`}
              aria-label={slide.caption}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
