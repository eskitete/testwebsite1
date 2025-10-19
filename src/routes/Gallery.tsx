import { Section } from '@/components/Section'
import { BeforeAfterSlider } from '@/components/BeforeAfterSlider'
import { Meta } from '@/lib/seo'
import { useState } from 'react'

const categories = ['All', 'Kitchens', 'Bathrooms', 'Outdoor', 'Repairs', 'Painting'] as const

const images = [
  { src: '/images/gallery/kitchen-1.jpg', alt: 'Kitchen cabinetry', cat: 'Kitchens' },
  { src: '/images/gallery/kitchen-2.jpg', alt: 'Kitchen backsplash', cat: 'Kitchens' },
  { src: '/images/gallery/bath-1.jpg', alt: 'Bathroom vanity', cat: 'Bathrooms' },
  { src: '/images/gallery/outdoor-1.jpg', alt: 'Deck repair', cat: 'Outdoor' },
  { src: '/images/gallery/repair-1.jpg', alt: 'Drywall patch', cat: 'Repairs' },
  { src: '/images/gallery/paint-1.jpg', alt: 'Interior painting', cat: 'Painting' },
  { src: '/images/gallery/outdoor-2.jpg', alt: 'Fence gate', cat: 'Outdoor' },
  { src: '/images/gallery/repair-2.jpg', alt: 'Door alignment', cat: 'Repairs' },
]

export default function Gallery() {
  const [filter, setFilter] = useState<(typeof categories)[number]>('All')
  const list = images.filter((i) => filter === 'All' || i.cat === filter)
  return (
    <>
      <Meta title="Gallery" description="See our recent handyman projects and transformations." />
      <Section>
        <h1 className="heading text-3xl font-bold">Gallery</h1>
        <p className="mt-2 text-neutral/70 dark:text-slate-300">Browse projects by category.</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full border px-3 py-1 text-sm ${filter === c ? 'bg-primary text-white border-primary' : 'border-neutral/20 hover:bg-neutral/5'}`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((img) => (
            <img key={img.src} src={img.src} alt={img.alt} className="card h-full w-full" />
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="heading text-2xl font-semibold">Before & After</h2>
        <div className="mt-6">
          <BeforeAfterSlider
            beforeSrc="/images/before-after/before.jpg"
            afterSrc="/images/before-after/after.jpg"
            alt="Cabinet repaint"
            initial={55}
            className="mx-auto max-w-3xl"
          />
        </div>
      </Section>
    </>
  )
}
