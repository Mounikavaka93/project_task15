export default function FeatureCard({ icon, title, description }) {
  return (
    <article className="group rounded-3xl border border-mist bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_16px_36px_rgba(15,76,92,0.08)]">
      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gold text-xl text-ocean-dark transition duration-300 group-hover:scale-110">
        {icon}
      </span>
      <h3 className="mt-5 text-lg font-bold text-heading">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-muted">{description}</p>
    </article>
  )
}
