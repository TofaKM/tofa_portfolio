import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { blogPosts } from '@/data'
import BlogCard from '@/components/ui/BlogCard'
import SectionHeading from '@/components/ui/SectionHeading'
import { ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Articles on data engineering, full-stack development, and lessons from real projects.',
}

export default function BlogPage() {
  const allTags = Array.from(new Set(blogPosts.flatMap(p => p.tags)))
  const [featured, ...rest] = blogPosts

  return (
    <div className="min-h-screen">
      <section className="py-20 px-8 md:px-14">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            eyebrow="Writing"
            title="Articles & Insights"
            subtitle="Lessons from building real projects, learning data engineering, and the Nairobi tech scene."
            className="mb-6"
          />

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-12">
            {allTags.map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>

          {/* Featured post */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group card block overflow-hidden p-0 mb-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-52 md:h-full overflow-hidden rounded-t-xl md:rounded-t-none md:rounded-l-xl">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10" />
              </div>
              <div className="p-7 flex flex-col justify-center">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="tag">📌 Featured</span>
                  {featured.tags.slice(0, 2).map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
                <div className="flex items-start gap-2 mb-2">
                  <h2 className="font-serif font-semibold text-xl text-ink-900 group-hover:text-[#B8956A] transition-colors leading-snug flex-1">
                    {featured.title}
                  </h2>
                  <ArrowUpRight size={16} className="text-ink-300 group-hover:text-accent transition-colors shrink-0 mt-1" />
                </div>
                <p className="text-ink-500 text-[13.5px] font-sans leading-relaxed mb-5">{featured.excerpt}</p>
                <div className="flex items-center gap-3 text-[11px] text-ink-300 font-mono">
                  <span>{featured.date}</span>
                  <span>·</span>
                  <span>{featured.readTime}</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Rest of posts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {rest.map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
