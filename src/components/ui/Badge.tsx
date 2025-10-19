import { cn } from '@/lib/cn'

type Props = {
  children: React.ReactNode
  className?: string
}

export function Badge({ children, className }: Props) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20',
        className,
      )}
    >
      {children}
    </span>
  )
}

