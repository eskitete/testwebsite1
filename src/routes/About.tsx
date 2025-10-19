import { Section } from '@/components/Section'
import { Meta } from '@/lib/seo'

export default function About() {
  return (
    <>
      <Meta title="About" description="Meet the owner of ProFix Handyman. Certified, insured, and serving your neighborhood." />
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h1 className="heading text-3xl font-bold">About ProFix Handyman</h1>
            <p className="mt-3 text-neutral/80 dark:text-slate-300">
              Hi, I’m John from ProFix Handyman. With 10+ years of experience, I provide reliable, high-quality repairs and improvements for homeowners in College Station, Bryan, and Caldwell.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral/80 dark:text-slate-300">
              <li>Licensed & insured</li>
              <li>Background-checked</li>
              <li>OSHA-10 certified</li>
            </ul>
          </div>
          <div>
            <img src="/images/owner.jpg" alt="Owner portrait" className="mx-auto w-72 rounded-xl shadow" />
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="heading text-2xl font-semibold">Service Area</h2>
        <p className="mt-2 text-neutral/70 dark:text-slate-300">College Station, Bryan, Caldwell, and nearby communities.</p>
        <div className="mt-4 overflow-hidden rounded-xl">
          <iframe
            title="Service area map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d349879.564!!2d-96.7!3d30.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864684993a!2sCollege%20Station%2C%20TX!5e0!3m2!1sen!2sus!4v0000000000"
            width="100%"
            height="360"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <p className="mt-2 text-xs text-neutral/60 dark:text-slate-400">Map is illustrative. Update to your exact service area.</p>
      </Section>
    </>
  )
}
