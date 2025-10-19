import { Star } from 'lucide-react'

type Props = {
  name: string
  quote: string
  rating?: number
}

export function TestimonialCard({ name, quote, rating = 5 }: Props) {
  return (
    <div className="card p-5">
      <div className="mb-2 flex gap-1 text-accent">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <blockquote className="text-sm text-neutral/80 dark:text-slate-300">“{quote}”</blockquote>
      <div className="mt-3 text-sm font-medium">— {name}</div>
    </div>
  )
}
