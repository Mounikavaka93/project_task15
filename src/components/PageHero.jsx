export default function PageHero({ eyebrow, title, copy }) {
  return (
    <section className="w-full bg-ocean-dark px-4 py-14 text-white lg:py-20">
      <div className="w-full">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">{eyebrow}</p>
        <h1 className="mt-3 font-display text-4xl font-semibold leading-tight sm:text-6xl">{title}</h1>
        {copy && <p className="mt-4 max-w-xl text-sm leading-7 text-white/80 sm:text-base">{copy}</p>}
      </div>
    </section>
  )
}
