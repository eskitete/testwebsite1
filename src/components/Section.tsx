import { cn } from '@/lib/cn'

type Props = {
  children: React.ReactNode
  className?: string
  id?: string
}

export function Section({ children, className, id }: Props) {
  return (
    <section id={id} className={cn('py-12 md:py-16', className)}>
      <div className="container">{children}</div>
    </section>
  )
}

