'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import {
  Home, User, Briefcase, Zap, BookOpen,
  FileText, Mail, Github, Linkedin, Menu, X, MapPin,
} from 'lucide-react'

const navLinks = [
  { href: '/',         label: 'Home',     icon: Home },
  { href: '/about',    label: 'About',    icon: User },
  { href: '/projects', label: 'Projects', icon: Briefcase },
  { href: '/skills',   label: 'Skills',   icon: Zap },
  { href: '/blog',     label: 'Blog',     icon: BookOpen },
  { href: '/cv',       label: 'CV',       icon: FileText },
  { href: '/contact',  label: 'Contact',  icon: Mail },
]

const socials = [
  { href: 'https://github.com/TofaKM',                   icon: Github,   label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/tofa-mwangi',     icon: Linkedin, label: 'LinkedIn' },
  { href: 'mailto:mwangitofa@gmail.com',                 icon: Mail,     label: 'Email' },
]

/* ── stagger variants ── */
const sidebarVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.035, delayChildren: 0.05 },
  },
}
const itemVariants = {
  hidden: { opacity: 0, x: -14 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] } },
}
const navItemVariants = {
  hidden: { opacity: 0, x: -10 },
  show: (i: number) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.32, delay: i * 0.045, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

function SidebarContent({ onClose, animate = true }: { onClose?: () => void; animate?: boolean }) {
  const pathname = usePathname()
  const reduced = useReducedMotion()

  const Wrap = animate && !reduced ? motion.div : 'div'
  const wrapProps = animate && !reduced
    ? { variants: sidebarVariants, initial: 'hidden', animate: 'show' }
    : {}

  return (
    <Wrap
      className="flex flex-col h-full"
      style={{ background: 'var(--sidebar-bg)' }}
      {...wrapProps}
    >
      {/* ── Profile section ── */}
      <motion.div
        variants={itemVariants}
        className="px-6 pt-8 pb-6"
      >
        {/* Avatar — real photo with ring + shimmer */}
        <div className="relative mb-4 w-fit group">
          {/* Outer animated ring — CSS rotate on a pseudo-conic gradient, GPU only */}
          <div
            className="absolute -inset-[3px] rounded-[18px] pointer-events-none ring-spin"
            style={{
              background: 'conic-gradient(from 0deg, var(--accent), var(--accent-dark), var(--accent), var(--accent-dark), var(--accent))',
            }}
          />
          {/* Photo container */}
          <motion.div
            className="relative w-[68px] h-[68px] rounded-2xl overflow-hidden border-2 border-white z-10"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <Image
              src="/profile.jpg"
              alt="Tofa Kimani Mwangi"
              fill
              className="object-cover object-top"
              sizes="68px"
              priority
            />
            {/* Hover shimmer */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0, x: '-100%' }}
              whileHover={{ opacity: 1, x: '100%' }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
              }}
            />
          </motion.div>

          {/* Online badge */}
          <motion.div
            className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-white z-20"
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        {/* Name + role */}
        <h2 className="font-serif font-semibold text-[15px] text-ink-900 leading-tight">
          Tofa Kimani
        </h2>
        <p className="text-xs text-ink-500 mt-0.5 leading-snug font-sans">
          Data Engineer &amp; Full-Stack Dev
        </p>
        <div className="flex items-center gap-1.5 mt-1.5 text-ink-300">
          <MapPin size={10} />
          <span className="text-[11px] text-ink-400 font-sans">Nairobi, Kenya 🇰🇪</span>
        </div>

        {/* Availability pill */}
        <motion.div
          className="inline-flex items-center gap-1.5 mt-3 px-2.5 py-1 rounded-full bg-white border border-[#E5E1D8]"
          whileHover={{ scale: 1.03, borderColor: '#D6B98C' }}
          transition={{ duration: 0.15 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] text-ink-500 font-medium font-sans">Open to work</span>
        </motion.div>
      </motion.div>

      {/* ── Divider ── */}
      <motion.div variants={itemVariants} className="mx-6 divider" />

      {/* ── Navigation ── */}
      <nav className="flex-1 px-3 py-4 overflow-y-auto">
        <ul className="space-y-0.5">
          {navLinks.map(({ href, label, icon: Icon }, i) => {
            const active = pathname === href
            return (
              <motion.li
                key={href}
                custom={i}
                variants={navItemVariants}
              >
                <Link
                  href={href}
                  onClick={onClose}
                  className={`
                    group relative flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13.5px] font-sans
                    transition-colors duration-150 overflow-hidden
                    ${active
                      ? 'nav-active'
                      : 'text-ink-500 hover:bg-[#EAE6DE] hover:text-ink-900'
                    }
                  `}
                >
                  {/* Hover background fill animation */}
                  {!active && (
                    <motion.span
                      className="absolute inset-0 rounded-lg pointer-events-none"
                      style={{ background: 'rgba(214,185,140,0.12)' }}
                      initial={{ scaleX: 0, originX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                    />
                  )}

                  {/* Icon */}
                  <motion.span
                    whileHover={!active ? { rotate: [0, -8, 8, 0], scale: 1.15 } : {}}
                    transition={{ duration: 0.35 }}
                    className="relative z-10 shrink-0"
                  >
                    <Icon
                      size={15}
                      className={active
                        ? 'transition-colors'
                        : 'text-ink-300 group-hover:text-ink-600 transition-colors'
                      }
                      style={active ? { color: 'var(--accent-dark)' } : {}}
                    />
                  </motion.span>

                  <span className="relative z-10 flex-1">{label}</span>

                  {/* Active dot — shared layout animation */}
                  {active && (
                    <motion.span
                      layoutId="sidebar-active-pill"
                      className="ml-auto w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: 'var(--accent)' }}
                      transition={{ type: 'spring', stiffness: 420, damping: 28 }}
                    />
                  )}

                  {/* Active left-edge indicator */}
                  {active && (
                    <motion.span
                      layoutId="sidebar-active-bar"
                      className="absolute left-0 top-1 bottom-1 w-[3px] rounded-full"
                      style={{ background: 'var(--accent-dark)' }}
                      transition={{ type: 'spring', stiffness: 420, damping: 28 }}
                    />
                  )}
                </Link>
              </motion.li>
            )
          })}
        </ul>
      </nav>

      {/* ── Divider ── */}
      <motion.div variants={itemVariants} className="mx-6 divider" />

      {/* ── Socials + footer ── */}
      <motion.div variants={itemVariants} className="px-6 py-5">
        <p className="text-[10px] uppercase tracking-widest text-ink-300 font-medium mb-3 font-sans">Connect</p>
        <div className="flex items-center gap-2">
          {socials.map(({ href, icon: Icon, label }, i) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-8 h-8 rounded-lg border border-[#E5E1D8] bg-white flex items-center justify-center text-ink-400 transition-colors duration-150"
              whileHover={{ y: -3, scale: 1.1, borderColor: '#D6B98C', color: '#1F1F1F' }}
              whileTap={{ scale: 0.92 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.55 + i * 0.07 } }}
            >
              <Icon size={13} />
            </motion.a>
          ))}
        </div>
        <p className="text-[10px] text-ink-300 mt-4 font-sans">
          © {new Date().getFullYear()} Tofa Kimani
        </p>
      </motion.div>
    </Wrap>
  )
}

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => setMounted(true), [])
  useEffect(() => setMobileOpen(false), [pathname])
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      {/* ── Desktop fixed sidebar ── */}
      <aside
        className="hidden md:flex flex-col fixed left-0 top-0 h-screen z-40 border-r"
        style={{ width: 'var(--sidebar-w)', borderColor: 'var(--border)' }}
      >
        {mounted && <SidebarContent animate />}
      </aside>

      {/* ── Mobile hamburger ── */}
      <motion.button
        onClick={() => setMobileOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 w-10 h-10 rounded-xl border border-[#E5E1D8] bg-[#F1EEE8] flex items-center justify-center text-ink-700 shadow-sm"
        aria-label="Open menu"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
      >
        <Menu size={18} />
      </motion.button>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="sidebar-overlay md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              key="drawer"
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: 'spring', stiffness: 340, damping: 32 }}
              className="fixed left-0 top-0 h-screen z-50 md:hidden border-r"
              style={{ width: 'var(--sidebar-w)', borderColor: 'var(--border)' }}
            >
              <motion.button
                onClick={() => setMobileOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-white border border-[#E5E1D8] flex items-center justify-center text-ink-500"
                aria-label="Close menu"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
              >
                <X size={14} />
              </motion.button>
              <SidebarContent onClose={() => setMobileOpen(false)} animate={false} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
