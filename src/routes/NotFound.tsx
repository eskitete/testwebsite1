import { Section } from '@/components/Section'
import { Meta } from '@/lib/seo'

export default function NotFound() {
  return (
    <>
      <Meta title="Page Not Found" />
      <Section>
        <div className="text-center">
          <h1 className="heading text-5xl font-bold">404</h1>
          <p className="mt-2">Sorry, we couldn’t find that page.</p>
          <a href="/" className="btn btn-primary mt-4 inline-flex">Go Home</a>
        </div>
      </Section>
    </>
  )
}

