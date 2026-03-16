'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react'
import Link from 'next/link'

const roles = ['Data Engineer', 'Full-Stack Developer', 'Python Developer', 'SQL Specialist', 'Problem Solver']

/* Stagger container */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}
const fade = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
}
const fadeSlim = {
  hidden: { opacity: 0, y: 12 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function HeroSection() {
  const [idx, setIdx] = useState(0)
  const [text, setText] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const cur = roles[idx]
    let t: NodeJS.Timeout
    if (typing) {
      if (text.length < cur.length) {
        t = setTimeout(() => setText(cur.slice(0, text.length + 1)), 65)
      } else {
        t = setTimeout(() => setTyping(false), 1800)
      }
    } else {
      if (text.length > 0) {
        t = setTimeout(() => setText(text.slice(0, -1)), 35)
      } else {
        setIdx(i => (i + 1) % roles.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(t)
  }, [text, typing, idx])

  return (
    <section className="min-h-screen flex items-center px-8 md:px-14 py-20 relative overflow-hidden">

      {/* ── Ambient background orbs ── */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: 480, height: 480,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(214,185,140,.18) 0%, transparent 70%)',
          right: '5%', top: '10%',
          filter: 'blur(60px)',
          willChange: 'transform',
        }}
        animate={{ y: [0, -28, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: 300, height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(184,149,106,.10) 0%, transparent 70%)',
          left: '8%', bottom: '15%',
          filter: 'blur(50px)',
          willChange: 'transform',
        }}
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* ── Subtle dot-grid texture ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(circle, #1F1F1F 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* ── Content ── */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto w-full"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Status badge */}
        <motion.div variants={fade} className="mb-10">
          <motion.div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E1D8] shadow-sm"
            whileHover={{ scale: 1.03, borderColor: '#D6B98C' }}
            transition={{ duration: 0.15 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[12px] text-ink-500 font-sans">Available · Nairobi, Kenya 🇰🇪</span>
          </motion.div>
        </motion.div>

        {/* Name — split character reveal */}
        <motion.h1
          variants={fade}
          className="font-serif font-bold leading-[1.05] tracking-tight text-ink-900 mb-5"
          style={{ fontSize: 'clamp(48px, 8vw, 82px)' }}
        >
          Tofa{' '}
          <motion.span
            className="italic relative inline-block"
            style={{ color: 'var(--accent-dark)' }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Kimani
            {/* Underline sweep */}
            <motion.span
              className="absolute bottom-1 left-0 h-[3px] rounded-full"
              style={{ background: 'var(--accent)', originX: 0 }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.55, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
          </motion.span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div variants={fadeSlim} className="flex items-center gap-3 mb-7 h-8">
          <motion.span
            className="h-px w-8 shrink-0"
            style={{ background: 'var(--accent)' }}
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          />
          <span className="text-[16px] text-ink-500 font-sans min-w-[220px]">
            {text}
            <motion.span
              className="inline-block w-px h-[1em] ml-0.5 align-middle"
              style={{ background: 'var(--accent)' }}
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.9, repeat: Infinity }}
            />
          </span>
        </motion.div>

        {/* Bio */}
        <motion.p
          variants={fadeSlim}
          className="text-[16px] text-ink-500 max-w-xl leading-relaxed mb-10 font-sans"
        >
          I ship{' '}
          <strong className="text-ink-700 font-medium">full-stack apps</strong> and{' '}
          <strong className="text-ink-700 font-medium">ETL pipelines</strong> — React &amp; Node.js on
          the front, Python &amp; MySQL doing the heavy lifting underneath. I've built real systems,
          cleaned genuinely messy health data during my government internship, and earned{' '}
          <strong className="text-ink-700 font-medium">4 certifications</strong> including Cisco &amp; ALX.
          Currently going deep on{' '}
          <strong className="text-ink-700 font-medium">Data Engineering, Big Data &amp; ML</strong>{' '}
          — because turning raw data into something useful never gets old.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={fadeSlim} className="flex flex-wrap items-center gap-3 mb-12">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/projects"
              className="px-5 py-2.5 rounded-xl text-[13.5px] font-medium font-sans text-white transition-all shadow-sm inline-flex items-center gap-2"
              style={{ background: 'var(--accent-dark)' }}
            >
              <Sparkles size={13} />
              View Projects
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/cv"
              className="px-5 py-2.5 rounded-xl text-[13.5px] font-medium font-sans text-ink-700 bg-white border border-[#E5E1D8] hover:border-[#D6B98C] transition-all inline-block"
            >
              Download CV
            </Link>
          </motion.div>

          <motion.div whileHover={{ x: 3 }} transition={{ duration: 0.15 }}>
            <Link
              href="/contact"
              className="px-5 py-2.5 text-[13.5px] font-medium font-sans text-ink-500 hover:text-ink-900 transition-colors inline-block"
            >
              Say Hello →
            </Link>
          </motion.div>
        </motion.div>

        {/* Socials */}
        <motion.div variants={fadeSlim} className="flex items-center gap-2 mb-16">
          {[
            { href: 'https://github.com/TofaKM',                   icon: Github,   label: 'GitHub' },
            { href: 'https://www.linkedin.com/in/tofa-mwangi',     icon: Linkedin, label: 'LinkedIn' },
            { href: 'mailto:mwangitofa@gmail.com',                 icon: Mail,     label: 'Email' },
          ].map(({ href, icon: Icon, label }, i) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 rounded-xl bg-white border border-[#E5E1D8] flex items-center justify-center text-ink-400 shadow-sm"
              whileHover={{ y: -4, scale: 1.1, borderColor: '#D6B98C', color: '#1F1F1F' }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.7 + i * 0.08 } }}
            >
              <Icon size={15} />
            </motion.a>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div variants={fadeSlim} className="flex items-center gap-10">
          {[
            { v: '4',   l: 'Certifications' },
            { v: 'BSc', l: 'KCA Uni' },
            { v: '2+',  l: 'Projects' },
          ].map(({ v, l }, i) => (
            <motion.div
              key={l}
              className="text-left"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.9 + i * 0.08 } }}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.15 }}
            >
              <div className="font-serif font-bold text-2xl" style={{ color: 'var(--accent-dark)' }}>{v}</div>
              <div className="text-[11px] text-ink-400 font-sans uppercase tracking-wider mt-0.5">{l}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="text-[9px] text-ink-300 uppercase tracking-widest font-sans">scroll</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={13} className="text-ink-300" />
        </motion.div>
      </motion.div>
    </section>
  )
}
