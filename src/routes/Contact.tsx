import { Section } from '@/components/Section'
import { ContactForm } from '@/components/ContactForm'
import { Meta, LocalBusinessJsonLd } from '@/lib/seo'
import { Phone } from 'lucide-react'

export default function Contact() {
  return (
    <>
      <Meta title="Contact" description="Get a free estimate from ProFix Handyman." />
      <LocalBusinessJsonLd name="ProFix Handyman" telephone="+1 (555) 123-4567" areaServed={["College Station", "Bryan", "Caldwell"]} />
      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h1 className="heading text-3xl font-bold">Contact Us</h1>
            <p className="mt-2 text-neutral/70 dark:text-slate-300">We’ll get back to you the same day whenever possible.</p>
            <div className="mt-4">
              <ContactForm />
            </div>
          </div>
          <div className="space-y-4">
            <div className="card p-4">
              <h2 className="font-semibold">Business Hours</h2>
              <p className="mt-2 text-sm text-neutral/70 dark:text-slate-300">Mon–Fri 8:00am–6:00pm, Sat 9:00am–1:00pm</p>
              <a href="tel:+15551234567" className="btn btn-primary mt-3 inline-flex"><Phone className="mr-2 h-4 w-4" /> Click to call</a>
            </div>
            <div className="overflow-hidden rounded-xl">
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d349879.564!!2d-96.7!3d30.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864684993a!2sCollege%20Station%2C%20TX!5e0!3m2!1sen!2sus!4v0000000000"
                width="100%"
                height="360"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
