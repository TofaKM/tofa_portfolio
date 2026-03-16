'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowUpRight } from 'lucide-react'
import { BlogPost } from '@/types'

export default function BlogCard({ post, index = 0 }: { post: BlogPost; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.46, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -4 }}
    >
      <Link href={`/blog/${post.slug}`} className="card block overflow-hidden group">
        <div className="relative h-40 -mx-6 -mt-6 mb-5 overflow-hidden rounded-t-xl">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/15" />
          <div className="absolute bottom-3 left-3 flex gap-1.5 z-10">
            {post.tags.slice(0, 2).map(t => (
              <span key={t} className="tag text-[10px]">{t}</span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 text-[11px] text-ink-300 font-mono mb-2.5">
          <span className="flex items-center gap-1"><Calendar size={10} />{post.date}</span>
          <span className="flex items-center gap-1"><Clock size={10} />{post.readTime}</span>
        </div>

        <div className="flex items-start justify-between gap-2 mb-1.5">
          <h3 className="font-serif font-semibold text-[15px] text-ink-900 group-hover:text-[#B8956A] transition-colors leading-snug">
            {post.title}
          </h3>
          <ArrowUpRight size={14} className="text-ink-300 group-hover:text-[#D6B98C] transition-colors shrink-0 mt-0.5" />
        </div>
        <p className="text-ink-500 text-[13px] leading-relaxed line-clamp-2 font-sans">{post.excerpt}</p>
      </Link>
    </motion.article>
  )
}
