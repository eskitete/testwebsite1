import { cn } from '@/lib/cn'
import { forwardRef } from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'outline'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    const variantClass =
      variant === 'secondary' ? 'btn btn-secondary' : variant === 'outline' ? 'btn btn-outline' : 'btn btn-primary'
    return <button ref={ref} className={cn(variantClass, className)} {...props} />
  },
)
Button.displayName = 'Button'

