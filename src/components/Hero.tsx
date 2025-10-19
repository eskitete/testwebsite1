import { motion, useReducedMotion } from 'framer-motion'
import { Badge } from './ui/Badge'

export function Hero() {
  const reduced = useReducedMotion()
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-transparent">
      <div className="container grid gap-8 py-16 md:grid-cols-2 md:py-20">
        <div className="flex flex-col justify-center">
          <div className="mb-4 flex gap-2">
            <Badge>Insured</Badge>
            <Badge>Free Estimates</Badge>
            <Badge>24/7 Emergency</Badge>
          </div>
          <motion.h1
            className="heading text-4xl font-bold md:text-5xl"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={reduced ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            Reliable Handyman Services—Done Right the First Time.
          </motion.h1>
          <p className="mt-4 text-lg text-neutral/80 dark:text-slate-300">
            Licensed & insured. Same-week availability. Free estimates.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="/contact" className="btn btn-primary">Get a Free Estimate</a>
            <a href="tel:+15551234567" className="btn btn-outline">Call Now</a>
          </div>
        </div>
        <motion.div
          className="relative"
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={reduced ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <img src="/images/hero.jpg" alt="ProFix Handyman working on tools" className="mx-auto w-4/5 max-w-md rounded-xl shadow" />
        </motion.div>
      </div>
    </div>
  )
}
