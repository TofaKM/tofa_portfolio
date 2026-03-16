import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import FeaturedProjects from '@/components/sections/FeaturedProjects'
import SkillsPreview from '@/components/sections/SkillsPreview'
import Testimonials from '@/components/sections/Testimonials'
import BlogCard from '@/components/ui/BlogCard'
import SectionHeading from '@/components/ui/SectionHeading'
import { blogPosts } from '@/data'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Tofa Kimani Mwangi — Data Engineer & Developer',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Thin divider */}
      <div className="mx-8 md:mx-14 divider" />

      <FeaturedProjects />
      <SkillsPreview />

      {/* Blog preview */}
      <section className="py-24 px-8 md:px-14">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <SectionHeading
              eyebrow="Writing"
              title="Recent articles"
              subtitle="Lessons from building real projects and learning data engineering."
            />
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[13px] font-medium font-sans shrink-0 hover:gap-3 transition-all"
              style={{ color: 'var(--accent-dark)' }}
            >
              All articles <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {blogPosts.map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* CTA */}
      <section className="py-24 px-8 md:px-14">
        <div className="max-w-5xl mx-auto">
          <div className="card text-center py-16 px-8">
            <p className="text-[10px] font-semibold uppercase tracking-[.2em] font-sans mb-5"
               style={{ color: 'var(--accent-dark)' }}>
              Let's Work Together
            </p>
            <h2 className="font-serif font-semibold text-4xl md:text-5xl text-ink-900 leading-tight mb-5">
              Got a project in{' '}
              <span className="italic" style={{ color: 'var(--accent-dark)' }}>mind?</span>
            </h2>
            <p className="text-ink-500 text-[15px] font-sans mb-9 max-w-lg mx-auto leading-relaxed">
              I'm open to data engineering roles, full-stack opportunities, and interesting collaborations. Let's build something great.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="px-7 py-3 rounded-xl font-medium text-[13.5px] font-sans text-white hover:opacity-90 transition-opacity shadow-sm"
                style={{ background: 'var(--accent-dark)' }}
              >
                Start a Conversation
              </Link>
              <Link
                href="/cv"
                className="px-7 py-3 rounded-xl font-medium text-[13.5px] font-sans text-ink-600 border border-[#E5E1D8] hover:border-[#D6B98C] hover:text-ink-900 transition-all"
              >
                View My CV
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
