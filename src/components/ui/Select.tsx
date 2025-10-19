import { cn } from '@/lib/cn'
import { forwardRef } from 'react'

type Props = React.SelectHTMLAttributes<HTMLSelectElement>

export const Select = forwardRef<HTMLSelectElement, Props>(({ className, children, ...props }, ref) => (
  <select
    ref={ref}
    className={cn(
      'w-full rounded-md border border-neutral/20 bg-white px-3 py-2 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-neutral/50 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-100',
      className,
    )}
    {...props}
  >
    {children}
  </select>
))
Select.displayName = 'Select'
