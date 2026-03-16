'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ExternalLink, Github } from 'lucide-react'
import { projects } from '@/data'
import SectionHeading from '@/components/ui/SectionHeading'

export default function FeaturedProjects() {
  const featured = projects.filter(p => p.featured)
  return (
    <section className="py-24 px-8 md:px-14">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionHeading
            eyebrow="Selected Work"
            title="Projects I've shipped"
            subtitle="Full-stack applications and data projects from scratch to production."
          />
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-[13px] font-medium font-sans shrink-0 hover:gap-3 transition-all"
            style={{ color: 'var(--accent-dark)' }}
          >
            All projects <ArrowRight size={14} />
          </Link>
        </div>

        <div className="space-y-5">
          {featured.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .5, delay: i * .1 }}
              className="card group overflow-hidden p-0"
            >
              <div className={`grid grid-cols-1 md:grid-cols-5 ${i % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                {/* Image */}
                <div className={`relative h-52 md:h-auto md:col-span-2 overflow-hidden rounded-t-xl md:rounded-t-none ${i % 2 === 1 ? 'md:col-start-4 md:rounded-r-xl' : 'md:rounded-l-xl'}`}>
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: 'rgba(214,185,140,.12)' }}
                  />
                </div>

                {/* Content */}
                <div className={`p-7 md:col-span-3 flex flex-col justify-center ${i % 2 === 1 ? 'md:col-start-1' : ''}`}>
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="tag capitalize">{p.category}</span>
                    <span className="text-[11px] text-ink-300 font-mono">{p.year}</span>
                  </div>
                  <h3 className="font-serif font-semibold text-xl text-ink-900 mb-2.5 group-hover:text-[#B8956A] transition-colors leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-ink-500 text-[13.5px] leading-relaxed mb-5 font-sans">{p.longDescription}</p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {p.tech.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                  <div className="flex gap-2.5">
                    <a
                      href={p.demo}
                      target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-[12.5px] font-medium font-sans text-white hover:opacity-90 transition-opacity shadow-sm"
                      style={{ background: 'var(--accent-dark)' }}
                    >
                      <ExternalLink size={12} /> Live Demo
                    </a>
                    <a
                      href={p.github}
                      target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-[#E5E1D8] text-ink-500 text-[12.5px] font-medium font-sans hover:text-ink-900 hover:border-[#D6B98C] transition-all"
                    >
                      <Github size={12} /> Source
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
