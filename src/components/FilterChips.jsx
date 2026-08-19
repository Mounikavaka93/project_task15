function chipValue(option) {
  return typeof option === 'object' && option !== null ? option.value : option
}

function chipLabel(option) {
  return typeof option === 'object' && option !== null ? option.label : option
}

export default function FilterChips({ options, value, onChange, ariaLabel }) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label={ariaLabel}>
      {options.map((option) => {
        const itemValue = chipValue(option)
        const active = value === itemValue
        return (
          <button
            key={String(itemValue)}
            type="button"
            onClick={() => onChange(itemValue)}
            className={`cursor-pointer rounded-full px-4 py-2 text-sm font-semibold transition ${
              active ? 'bg-ocean text-white' : 'bg-card text-muted ring-1 ring-mist hover:text-heading'
            }`}
          >
            {chipLabel(option)}
          </button>
        )
      })}
    </div>
  )
}
