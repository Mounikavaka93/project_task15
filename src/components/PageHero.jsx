export default function PageHero({ eyebrow, title, copy }) {
  return (
    <section className="bg-ocean-dark px-4 py-14 text-white sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">{eyebrow}</p>
        <h1 className="mt-3 font-display text-4xl font-semibold leading-tight sm:text-6xl">{title}</h1>
        {copy && <p className="mt-4 max-w-xl text-sm leading-7 text-white/80 sm:text-base">{copy}</p>}
      </div>
    </section>
  )
}
