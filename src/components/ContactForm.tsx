import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from './ui/Input'
import { Textarea } from './ui/Textarea'
import { Select } from './ui/Select'
import { Button } from './ui/Button'
import { track } from '@/lib/analytics'

export const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Enter a valid email').or(z.string().length(0)),
  phone: z.string().min(7, 'Enter a valid phone number').or(z.string().length(0)),
  service: z.string().min(1, 'Choose a service'),
  message: z.string().min(10, 'Please provide a brief message'),
}).refine((d) => d.email.length > 0 || d.phone.length > 0, {
  message: 'Provide at least email or phone',
  path: ['email'],
})

export type ContactFormValues = z.infer<typeof contactSchema>

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', phone: '', service: '', message: '' },
  })

  async function onSubmit(values: ContactFormValues) {
    track('contact_submit', values)
    try {
      // Simple stub. In production, implement /api/contact as a serverless function or use Formspree/EmailJS.
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      if (!res.ok) throw new Error('Network error')
      reset()
      alert('Thank you! We will contact you soon.')
    } catch (e) {
      // Dev fallback: mimic success so UX can be verified locally.
      if (import.meta.env.DEV) {
        console.warn('POST /api/contact not implemented. Simulating success.')
        reset()
        alert('Thank you! (Simulated) We will contact you soon.')
      } else {
        alert('Sorry, something went wrong. Please try again later.')
      }
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium">Name</label>
          <Input placeholder="Your name" {...register('name')} aria-invalid={!!errors.name} />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">Email</label>
          <Input placeholder="you@example.com" type="email" {...register('email')} aria-invalid={!!errors.email} />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">Phone</label>
          <Input placeholder="(555) 123-4567" type="tel" {...register('phone')} aria-invalid={!!errors.phone} />
          {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>}
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">Service</label>
          <Select defaultValue="" {...register('service')} aria-invalid={!!errors.service}>
            <option value="" disabled>
              Select a service
            </option>
            <option>Carpentry</option>
            <option>Plumbing</option>
            <option>Electrical</option>
            <option>Drywall & Painting</option>
            <option>Furniture Assembly</option>
            <option>Doors & Windows</option>
          </Select>
          {errors.service && <p className="mt-1 text-xs text-red-600">{errors.service.message}</p>}
        </div>
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium">Message</label>
        <Textarea rows={5} placeholder="How can we help?" {...register('message')} aria-invalid={!!errors.message} />
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>}
      </div>
      <div className="flex items-center gap-3">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending…' : 'Send Message'}
        </Button>
        {isSubmitSuccessful && <span className="text-sm text-green-700">Submitted!</span>}
      </div>
      <p className="text-xs text-neutral/60 dark:text-slate-400">
        We respect your privacy. By submitting, you agree to our contacting you about your request.
      </p>
      {/* TODO: Connect to Formspree/EmailJS or implement /api/contact serverless function. */}
    </form>
  )
}
