import { Section } from '@/components/Section'
import { ServiceCard } from '@/components/ServiceCard'
import { Meta } from '@/lib/seo'
import { Hammer, Wrench, Paintbrush, Plug, DoorOpen, Droplets } from 'lucide-react'

export default function Services() {
  return (
    <>
      <Meta title="Services" description="From carpentry to electrical, ProFix Handyman handles it all." />
      <Section>
        <h1 className="heading text-3xl font-bold">Services</h1>
        <p className="mt-2 text-neutral/70 dark:text-slate-300">Quality repairs and improvements for every corner of your home.</p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard icon={Hammer} title="Carpentry" description="Trim, shelving, framing, and custom woodwork." />
          <ServiceCard icon={Droplets} title="Plumbing" description="Leaks, fixtures, garbage disposals, and more." />
          <ServiceCard icon={Plug} title="Electrical" description="Outlets, switches, lighting, and troubleshooting." />
          <ServiceCard icon={Paintbrush} title="Drywall & Painting" description="Patches, repairs, and fresh paint finishes." />
          <ServiceCard icon={Wrench} title="Furniture Assembly" description="Fast, careful assembly and mounting." />
          <ServiceCard icon={DoorOpen} title="Doors & Windows" description="Repairs, weatherproofing, and replacements." />
        </div>
      </Section>
    </>
  )
}
