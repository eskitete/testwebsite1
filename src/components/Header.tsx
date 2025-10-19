import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Menu, Phone, Sun, Moon } from 'lucide-react'
import { useTheme } from '@/theme/ThemeProvider'
import { cn } from '@/lib/cn'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={cn('sticky top-0 z-50 w-full border-b border-neutral/10 backdrop-blur', scrolled ? 'bg-white/80 dark:bg-slate-900/70' : 'bg-white/40 dark:bg-slate-900/40')}>
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/favicon.svg" alt="ProFix Handyman logo" className="h-8 w-8" />
          <span className="heading text-lg font-semibold">ProFix Handyman</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                cn('text-sm text-neutral/80 hover:text-neutral dark:text-white/70 hover:dark:text-white', isActive && 'text-neutral dark:text-white font-medium')
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* TODO: Update business phone number */}
          <a href="tel:+15551234567" className="btn btn-primary hidden md:inline-flex"><Phone className="mr-2 h-4 w-4" /> Call Now</a>
          <button
            aria-label="Toggle theme"
            className="h-9 w-9 rounded-md border border-neutral/20 bg-white text-neutral hover:bg-neutral/5 dark:bg-slate-900 dark:text-white"
            onClick={() => setTheme(theme === 'dark' ? 'light' : theme === 'light' ? 'system' : 'dark')}
            title={`Theme: ${theme}`}
          >
            {theme === 'dark' ? <Moon className="m-auto h-4 w-4" /> : <Sun className="m-auto h-4 w-4" />}
          </button>
          <button className="md:hidden" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
            <Menu />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-neutral/10 bg-white/95 p-4 dark:bg-slate-900/95 md:hidden">
          <nav className="grid gap-2">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) => cn('rounded-md px-2 py-2', isActive ? 'bg-primary/10 text-primary' : 'text-neutral/80 hover:bg-neutral/5 dark:text-white/70 dark:hover:bg-white/5')}
                onClick={() => setOpen(false)}
              >
                {n.label}
              </NavLink>
            ))}
            <a className="btn btn-primary" href="/contact" onClick={() => setOpen(false)}>Get a Free Estimate</a>
          </nav>
        </div>
      )}
    </header>
  )
}
