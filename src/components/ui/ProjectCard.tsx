'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'
import { Project } from '@/types'

export default function ProjectCard({ project: p, index = 0 }: { project: Project; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.48, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -4 }}
      className="card group cursor-default"
    >
      {/* Image */}
      <div className="relative h-44 -mx-6 -mt-6 mb-5 overflow-hidden rounded-t-xl">
        <Image
          src={p.image}
          alt={p.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
        {p.featured && (
          <span className="absolute top-3 left-3 tag text-[10px] z-10">⭐ Featured</span>
        )}
        <div className="absolute bottom-3 right-3 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
          {[
            { href: p.github, Icon: Github,      label: 'GitHub' },
            { href: p.demo,   Icon: ExternalLink, label: 'Demo' },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank" rel="noopener noreferrer"
              className="w-7 h-7 rounded-lg bg-white/90 backdrop-blur flex items-center justify-center text-ink-700 hover:text-ink-900 transition-colors shadow-sm"
              aria-label={label}
            >
              <Icon size={12} />
            </a>
          ))}
        </div>
      </div>

      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="font-serif font-semibold text-[15px] text-ink-900 leading-snug group-hover:text-[#B8956A] transition-colors">
          {p.title}
        </h3>
        <ArrowUpRight size={14} className="text-ink-300 group-hover:text-[#D6B98C] transition-colors shrink-0 mt-0.5" />
      </div>
      <p className="text-ink-500 text-[13px] leading-relaxed mb-4 font-sans">{p.description}</p>

      <div className="flex flex-wrap gap-1.5">
        {p.tech.slice(0, 4).map(t => (
          <span key={t} className="tag">{t}</span>
        ))}
        {p.tech.length > 4 && <span className="tag">+{p.tech.length - 4}</span>}
      </div>
    </motion.div>
  )
}
