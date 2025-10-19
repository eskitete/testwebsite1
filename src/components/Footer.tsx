import { Link } from 'react-router-dom'
import { Facebook, Instagram, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="mt-auto border-t border-neutral/10 bg-white dark:bg-slate-950">
      <div className="container grid gap-8 py-12 md:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <img src="/favicon.svg" alt="ProFix Handyman" className="h-7 w-7" />
            <span className="heading text-lg font-semibold">ProFix Handyman</span>
          </div>
          <p className="text-sm text-neutral/70 dark:text-slate-400">Licensed & insured. Free estimates. Same-week availability.</p>
          <p className="mt-3 text-sm">
            <a href="tel:+15551234567" className="inline-flex items-center gap-2 hover:underline">
              <Phone className="h-4 w-4" /> +1 (555) 123-4567
            </a>
          </p>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services" className="hover:underline">Services</Link></li>
            <li><Link to="/gallery" className="hover:underline">Gallery</Link></li>
            <li><Link to="/pricing" className="hover:underline">Pricing</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold">Service Areas</h3>
          <ul className="space-y-2 text-sm">
            <li>College Station</li>
            <li>Bryan</li>
            <li>Caldwell</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold">Follow</h3>
          <div className="flex gap-3">
            <a href="#" aria-label="Facebook" className="rounded-md border border-neutral/20 p-2 hover:bg-neutral/5 dark:border-slate-700 dark:hover:bg-white/5"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="rounded-md border border-neutral/20 p-2 hover:bg-neutral/5 dark:border-slate-700 dark:hover:bg-white/5"><Instagram className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-neutral/10 py-6 text-center text-xs text-neutral/60 dark:text-slate-500">
        © <span id="year">{new Date().getFullYear()}</span> ProFix Handyman. All rights reserved. MIT Licensed.
      </div>
    </footer>
  )
}
