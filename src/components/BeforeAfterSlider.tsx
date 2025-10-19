import { useId, useMemo, useState } from 'react'
import { cn } from '@/lib/cn'

export type BeforeAfterSliderProps = {
  beforeSrc: string
  afterSrc: string
  alt?: string
  initial?: number // 0..100
  className?: string
}

export function clampPercent(v: number) {
  return Math.max(0, Math.min(100, v))
}

export function BeforeAfterSlider({ beforeSrc, afterSrc, alt, initial = 50, className }: BeforeAfterSliderProps) {
  const [value, setValue] = useState(() => clampPercent(initial))
  const id = useId()
  const clipStyle = useMemo(() => ({ width: `${value}%` }), [value])

  return (
    <div className={cn('relative overflow-hidden rounded-xl', className)} aria-label={alt}>
      <img src={afterSrc} alt={alt ? `${alt} (after)` : 'After'} className="block h-auto w-full select-none" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden" style={clipStyle} aria-hidden>
        <img src={beforeSrc} alt={alt ? `${alt} (before)` : 'Before'} className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-x-0 bottom-3 flex items-center justify-center">
        <input
          id={id}
          type="range"
          min={0}
          max={100}
          value={value}
          aria-label="Before after slider"
          onChange={(e) => setValue(clampPercent(Number(e.target.value)))}
          className="w-3/4 accent-primary"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="animate-pulse rounded-full bg-primary/80 px-2 py-1 text-xs text-white shadow-md">Drag</div>
      </div>
    </div>
  )
}

