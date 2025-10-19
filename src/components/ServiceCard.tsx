import { cn } from '@/lib/cn'
import type { LucideIcon } from 'lucide-react'

type Props = {
  icon: LucideIcon
  title: string
  description: string
  className?: string
}

export function ServiceCard({ icon: Icon, title, description, className }: Props) {
  return (
    <div className={cn('card p-5 transition hover:shadow-lg', className)}>
      <div className="mb-3 inline-flex rounded-lg bg-primary/10 p-2 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="heading text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-neutral/70 dark:text-slate-300">{description}</p>
      <div className="mt-4">
        <a href="/contact" className="btn btn-primary">Request Quote</a>
      </div>
    </div>
  )
}
