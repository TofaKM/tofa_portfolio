import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import { blogPosts } from '@/data'

interface Props { params: { slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find(p => p.slug === params.slug)
  if (!post) return {}
  return { title: post.title, description: post.excerpt }
}

export async function generateStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }))
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find(p => p.slug === params.slug)
  if (!post) notFound()

  return (
    <div className="min-h-screen">
      <article className="py-20 px-8 md:px-14">
        <div className="max-w-5xl mx-auto">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-ink-400 hover:text-ink-900 transition-colors text-[13px] font-sans mb-12"
          >
            <ArrowLeft size={14} /> Back to Blog
          </Link>

          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-5">
              {post.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
            <h1
              className="font-serif font-bold text-3xl md:text-4xl text-ink-900 leading-tight mb-5"
              style={{ letterSpacing: '-.02em' }}
            >
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-[11px] text-ink-300 font-mono">
              <span className="flex items-center gap-1.5"><Calendar size={11} />{post.date}</span>
              <span className="flex items-center gap-1.5"><Clock size={11} />{post.readTime}</span>
            </div>
          </div>

          {/* Cover image */}
          <div className="relative h-64 rounded-2xl overflow-hidden mb-12 border border-[#E5E1D8]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover"
              priority
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(248,246,242,.4), transparent)' }}
            />
          </div>

          {/* Content */}
          <div className="space-y-4 max-w-3xl">
            {post.content.split('\n').map((line, i) => {
              if (line.startsWith('# '))  return <h1  key={i} className="font-serif font-bold text-2xl text-ink-900 mt-10">{line.slice(2)}</h1>
              if (line.startsWith('## ')) return <h2  key={i} className="font-serif font-semibold text-xl mt-8" style={{ color: 'var(--accent-dark)' }}>{line.slice(3)}</h2>
              if (line.startsWith('### ')) return <h3 key={i} className="font-serif font-semibold text-lg text-ink-900 mt-6">{line.slice(4)}</h3>
              if (line.startsWith('- '))  return <li  key={i} className="text-ink-500 text-[14px] font-sans ml-4 list-disc leading-relaxed">{line.slice(2)}</li>
              if (line.trim() === '')     return <div key={i} className="mb-2" />
              return <p key={i} className="text-ink-500 text-[14.5px] font-sans leading-relaxed">{line}</p>
            })}
          </div>

          {/* Footer */}
          <div className="divider my-12" />
          <div className="flex items-center justify-between">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-ink-400 hover:text-ink-900 transition-colors text-[13px] font-sans"
            >
              <ArrowLeft size={14} /> More Articles
            </Link>
            <Link
              href="/contact"
              className="text-[13px] font-sans hover:underline"
              style={{ color: 'var(--accent-dark)' }}
            >
              Questions? Say hi →
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
