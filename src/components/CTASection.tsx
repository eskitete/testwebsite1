import { Section } from './Section'

export function CTASection() {
  return (
    <Section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-secondary/10 via-transparent to-accent/10" />
      <div className="rounded-2xl border border-neutral/10 bg-white p-8 text-center shadow-sm dark:bg-slate-900">
        <h2 className="heading text-2xl font-semibold">Ready to start your project?</h2>
        <p className="mt-2 text-neutral/70 dark:text-slate-300">Get a free, no-obligation estimate today.</p>
        <div className="mt-5 flex justify-center gap-3">
          <a href="/contact" className="btn btn-primary">Get a Free Estimate</a>
          {/* TODO: Update business phone number */}
          <a href="tel:+15551234567" className="btn btn-outline">Call Now</a>
        </div>
      </div>
    </Section>
  )
}
