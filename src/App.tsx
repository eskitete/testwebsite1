import { Suspense, lazy } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

const Home = lazy(() => import('./routes/Home'))
const Services = lazy(() => import('./routes/Services'))
const Gallery = lazy(() => import('./routes/Gallery'))
const About = lazy(() => import('./routes/About'))
const Pricing = lazy(() => import('./routes/Pricing'))
const Contact = lazy(() => import('./routes/Contact'))
const NotFound = lazy(() => import('./routes/NotFound'))

const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.main
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    transition={{ duration: 0.2, ease: 'easeOut' }}
    className="min-h-[70vh]"
  >
    {children}
  </motion.main>
)

export default function App() {
  const location = useLocation()
  return (
    <div className="flex min-h-full flex-col">
      <Header />
      <AnimatePresence mode="wait" initial={false}>
        <Suspense fallback={<div className="container py-16">Loading…</div>}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
            <Route path="/gallery" element={<PageTransition><Gallery /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/pricing" element={<PageTransition><Pricing /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
          </Routes>
        </Suspense>
      </AnimatePresence>
      <Footer />
    </div>
  )
}
