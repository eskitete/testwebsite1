import { motion, useReducedMotion } from 'framer-motion'

type Props = {
  children: React.ReactNode
  delay?: number
}

export function ScrollReveal({ children, delay = 0 }: Props) {
  const prefersReduced = useReducedMotion()
  return (
    <motion.div
      initial={prefersReduced ? false : { opacity: 0, y: 12 }}
      whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.35, delay, type: 'spring', stiffness: 120 }}
    >
      {children}
    </motion.div>
  )
}

