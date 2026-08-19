import { useState } from 'react'

export default function SafeImage({ src, alt, className = '', eager = false }) {
  const [failed, setFailed] = useState(false)

  if (failed || !src) {
    return <div className={`bg-mist ${className}`} role="img" aria-label={alt} />
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => setFailed(true)}
    />
  )
}
