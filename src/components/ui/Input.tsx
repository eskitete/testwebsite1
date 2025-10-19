import { cn } from '@/lib/cn'
import { forwardRef } from 'react'

type Props = React.InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, Props>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      'w-full rounded-md border border-neutral/20 bg-white px-3 py-2 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-neutral/50 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-100 dark:placeholder:text-slate-400',
      className,
    )}
    {...props}
  />
))
Input.displayName = 'Input'
