export function DestinationSkeleton() {
  return (
    <div className="overflow-hidden rounded-3xl bg-card">
      <div className="skeleton aspect-[4/3] w-full" />
      <div className="space-y-3 p-5">
        <div className="skeleton h-3 w-20 rounded-full" />
        <div className="skeleton h-7 w-40 rounded-full" />
        <div className="skeleton h-4 w-full rounded-full" />
        <div className="skeleton h-4 w-3/4 rounded-full" />
        <div className="skeleton h-9 w-24 rounded-full" />
      </div>
    </div>
  )
}

export function PackageSkeleton() {
  return (
    <div className="overflow-hidden rounded-3xl bg-card">
      <div className="skeleton aspect-[3/2] w-full" />
      <div className="space-y-3 p-5">
        <div className="skeleton h-4 w-28 rounded-full" />
        <div className="skeleton h-7 w-48 rounded-full" />
        <div className="skeleton h-4 w-36 rounded-full" />
        <div className="mt-4 flex justify-between">
          <div className="skeleton h-8 w-20 rounded-full" />
          <div className="skeleton h-8 w-28 rounded-full" />
        </div>
      </div>
    </div>
  )
}

export function TestimonialSkeleton() {
  return (
    <div className="rounded-3xl bg-ocean/80 p-6">
      <div className="flex items-center gap-3">
        <div className="skeleton h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <div className="skeleton h-4 w-28 rounded-full" />
          <div className="skeleton h-3 w-20 rounded-full" />
        </div>
      </div>
      <div className="mt-5 space-y-2">
        <div className="skeleton h-4 w-full rounded-full" />
        <div className="skeleton h-4 w-5/6 rounded-full" />
        <div className="skeleton h-4 w-2/3 rounded-full" />
      </div>
    </div>
  )
}
