import { Section } from '@/components/Section'
import { Meta } from '@/lib/seo'
import { useState } from 'react'

function Tier({ name, price, features }: { name: string; price: string; features: string[] }) {
  return (
    <div className="card p-6">
      <h3 className="heading text-xl font-semibold">{name}</h3>
      <div className="mt-2 text-3xl font-bold">{price}</div>
      <ul className="mt-4 space-y-2 text-sm text-neutral/70 dark:text-slate-300">
        {features.map((f) => (
          <li key={f}>• {f}</li>
        ))}
      </ul>
      <a href="/contact" className="btn btn-primary mt-5 w-full">Request Estimate</a>
    </div>
  )
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-neutral/10 py-3">
      <button className="flex w-full items-center justify-between text-left" onClick={() => setOpen((v) => !v)}>
        <span className="font-medium">{q}</span>
        <span>{open ? '−' : '+'}</span>
      </button>
      {open && <p className="mt-2 text-sm text-neutral/70 dark:text-slate-300">{a}</p>}
    </div>
  )
}

export default function Pricing() {
  return (
    <>
      <Meta title="Pricing" description="Transparent pricing for handyman services." />
      <Section>
        <h1 className="heading text-3xl font-bold">Pricing</h1>
        <p className="mt-2 text-neutral/70 dark:text-slate-300">Straightforward tiers for common needs. Final quotes depend on scope.</p>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <Tier name="Basic Repair" price="$99+" features={["Minor fixes", "1–2 hours", "Materials billed separately"]} />
          <Tier name="Standard Fix" price="$299+" features={["Multi-room", "Half-day", "Includes basic materials"]} />
          <Tier name="Premium Remodel" price="Custom" features={["Full-room", "Multi-day", "Dedicated project plan"]} />
        </div>
      </Section>

      <Section>
        <h2 className="heading text-2xl font-semibold">FAQ</h2>
        <div className="mt-4 rounded-xl border border-neutral/10 bg-white p-4 dark:bg-slate-900">
          <FAQItem q="How fast can you schedule?" a="Most jobs are scheduled within the same week." />
          <FAQItem q="Are estimates free?" a="Yes, we offer free remote or onsite estimates." />
          <FAQItem q="Are you insured?" a="Yes, fully insured for your peace of mind." />
          <FAQItem q="Which areas do you serve?" a="College Station, Bryan, Caldwell, and nearby communities." />
        </div>
      </Section>
    </>
  )
}
