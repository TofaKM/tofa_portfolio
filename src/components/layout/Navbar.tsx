'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/skills', label: 'Skills' },
  { href: '/blog', label: 'Blog' },
  { href: '/cv', label: 'CV' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 36)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  useEffect(() => setOpen(false), [pathname])

  return (
    <>
      <motion.header
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: .6, ease: [.25,.46,.45,.94] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'py-3 bg-[#06060f]/80 backdrop-blur-2xl border-b border-[#1c1c35]' : 'py-5 bg-transparent'}`}
      >
        <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg relative">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#00e5ff] to-[#a855f7]" />
              <div className="absolute inset-[1.5px] rounded-[6px] bg-[#06060f] flex items-center justify-center">
                <span className="text-[11px] font-bold g-cyan" style={{ fontFamily: 'var(--font-display)' }}>TK</span>
              </div>
            </div>
            <span className="font-semibold text-white/90 group-hover:text-white transition-colors text-sm" style={{ fontFamily: 'var(--font-display)' }}>
              Tofa Kimani
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-1">
            {links.map(l => {
              const active = pathname === l.href
              return (
                <li key={l.href}>
                  <Link href={l.href}
                    className={`relative px-3.5 py-2 text-[13px] rounded-lg transition-all ${active ? 'text-[#00e5ff]' : 'text-[#8b8aaa] hover:text-white'}`}
                    style={{ fontFamily: 'var(--font-display)', fontWeight: 500 }}
                  >
                    {active && (
                      <motion.span layoutId="nav-bg" className="absolute inset-0 rounded-lg bg-[#00e5ff]/10 border border-[#00e5ff]/20"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }} />
                    )}
                    <span className="relative">{l.label}</span>
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="hidden md:block">
            <Link href="/contact"
              className="px-4 py-2 rounded-lg text-[13px] font-semibold bg-gradient-to-r from-[#00e5ff] to-[#a855f7] text-[#06060f] hover:opacity-90 transition-opacity"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Hire Me
            </Link>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-[#8b8aaa] hover:text-white transition-colors" aria-label="Menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: .28 }}
            className="fixed inset-x-0 top-0 z-40 pt-20 pb-8 px-6" style={{ background: 'rgba(6,6,15,.97)' }}
          >
            <ul className="flex flex-col gap-1">
              {links.map((l, i) => (
                <motion.li key={l.href} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * .04 }}>
                  <Link href={l.href}
                    className={`flex items-center px-4 py-3 rounded-xl text-lg font-medium transition-all ${pathname === l.href ? 'text-[#00e5ff] bg-[#00e5ff]/10' : 'text-[#8b8aaa] hover:text-white hover:bg-white/5'}`}
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {l.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
