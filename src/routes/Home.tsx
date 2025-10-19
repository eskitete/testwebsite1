import { Hero } from '@/components/Hero'
import { Section } from '@/components/Section'
import { ServiceCard } from '@/components/ServiceCard'
import { TestimonialCard } from '@/components/TestimonialCard'
import { CTASection } from '@/components/CTASection'
import { ScrollReveal } from '@/components/ScrollReveal'
import { Meta, LocalBusinessJsonLd } from '@/lib/seo'
import { Hammer, Wrench, Paintbrush, Plug, DoorOpen, Droplets } from 'lucide-react'

export default function Home() {
  return (
    <>
      <Meta
        title="Home"
        description="Reliable handyman services in College Station, Bryan, and Caldwell. Free estimates. Licensed and insured."
      />
      <LocalBusinessJsonLd name="ProFix Handyman" telephone="+1 (555) 123-4567" areaServed={["College Station", "Bryan", "Caldwell"]} />
      <Hero />

      <Section>
        <h2 className="heading text-2xl font-semibold">Popular Services</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <ScrollReveal><ServiceCard icon={Hammer} title="Carpentry" description="Trim, shelving, framing, and custom woodwork." /></ScrollReveal>
          <ScrollReveal delay={0.05}><ServiceCard icon={Droplets} title="Plumbing" description="Leaks, fixtures, garbage disposals, and more." /></ScrollReveal>
          <ScrollReveal delay={0.1}><ServiceCard icon={Plug} title="Electrical" description="Outlets, switches, lighting, and troubleshooting." /></ScrollReveal>
          <ScrollReveal delay={0.15}><ServiceCard icon={Paintbrush} title="Drywall & Painting" description="Patches, repairs, and fresh paint finishes." /></ScrollReveal>
          <ScrollReveal delay={0.2}><ServiceCard icon={Wrench} title="Furniture Assembly" description="Fast, careful assembly and mounting." /></ScrollReveal>
          <ScrollReveal delay={0.25}><ServiceCard icon={DoorOpen} title="Doors & Windows" description="Repairs, weatherproofing, and replacements." /></ScrollReveal>
        </div>
      </Section>

      <Section>
        <div className="grid gap-5 md:grid-cols-3">
          <ScrollReveal><TestimonialCard name="A. Johnson" quote="They fixed everything in one visit. Highly recommend!" /></ScrollReveal>
          <ScrollReveal delay={0.05}><TestimonialCard name="M. Chen" quote="Professional and on time. Great value for the quality." /></ScrollReveal>
          <ScrollReveal delay={0.1}><TestimonialCard name="R. Patel" quote="Clean work and clear communication throughout the project." /></ScrollReveal>
        </div>
      </Section>

      <CTASection />
    </>
  )
}

