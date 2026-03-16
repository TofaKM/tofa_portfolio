import type { Metadata } from 'next'
import { workExperience, education } from '@/data'
import SectionHeading from '@/components/ui/SectionHeading'
import TimelineSection from '@/components/sections/TimelineSection'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Tofa Kimani — Data Engineer and Full-Stack Developer from Nairobi, Kenya.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 px-8 md:px-14">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <p className="text-[11px] uppercase tracking-[.2em] font-medium font-sans mb-4"
                 style={{ color: 'var(--accent-dark)' }}>
                About Me
              </p>
              <h1
                className="font-serif font-bold text-5xl md:text-6xl text-ink-900 leading-tight mb-6"
                style={{ letterSpacing: '-.02em' }}
              >
                Hey, I'm{' '}
                <span className="italic" style={{ color: 'var(--accent-dark)' }}>Tofa</span>
              </h1>
              <div className="space-y-4 text-ink-500 leading-relaxed text-[14.5px] font-sans">
                <p>
                  I'm a <strong className="text-ink-700 font-medium">Data Engineer & Full-Stack Developer</strong> based in
                  Nairobi, Kenya. I recently graduated with a BSc in Applied Computing from KCA University and I'm currently
                  building deeper data engineering skills through the ALX Data Engineering Program.
                </p>
                <p>
                  My journey started with a fascination for how systems work — how data moves, transforms, and becomes useful.
                  That curiosity drove me through Computer Science at KCA, through an IT internship at the Social Health Authority
                  in Nanyuki, and into hands-on project work building real applications.
                </p>
                <p>
                  I built <strong className="text-ink-700 font-medium">Chap Mall</strong> — a full-stack e-commerce platform —
                  as my most significant project to date. It taught me more about real-world software than any classroom.
                </p>
                <p>
                  My <strong className="text-ink-700 font-medium">philosophy</strong>: clean data and clean code are two sides
                  of the same coin.
                </p>
              </div>

              {/* Fact grid */}
              <div className="grid grid-cols-2 gap-3 mt-7">
                {[
                  { l: 'Location',  v: 'Nairobi, Kenya 🇰🇪' },
                  { l: 'Status',    v: '✅ Open to Opportunities' },
                  { l: 'Degree',    v: 'BSc Applied Computing' },
                  { l: 'Focus',     v: 'Data Engineering & Dev' },
                ].map(({ l, v }) => (
                  <div key={l} className="card py-3 px-4">
                    <div className="text-[10px] text-ink-300 font-mono uppercase tracking-wider mb-1">{l}</div>
                    <div className="text-[12.5px] font-medium text-ink-900 font-sans">{v}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Avatar block */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Decorative ring */}
                <div
                  className="absolute -inset-6 rounded-3xl border opacity-30"
                  style={{ borderColor: 'var(--accent)' }}
                />
                <div
                  className="relative w-[260px] h-[260px] rounded-3xl border-2 flex items-center justify-center shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, #F1EEE8, #E9E4DB)',
                    borderColor: 'var(--border)',
                  }}
                >
                  <span
                    className="font-serif font-bold text-8xl"
                    style={{ color: 'var(--accent-dark)', opacity: .35 }}
                  >
                    TK
                  </span>
                </div>

                {/* Floating badges */}
                <div
                  className="absolute -bottom-4 -left-6 card px-3.5 py-2 shadow-md"
                  style={{ background: 'white' }}
                >
                  <div className="text-[9px] text-ink-300 font-mono uppercase tracking-wider">certifications</div>
                  <div className="font-serif font-bold text-xl" style={{ color: 'var(--accent-dark)' }}>4 ✓</div>
                </div>
                <div
                  className="absolute -top-4 -right-6 card px-3.5 py-2 shadow-md"
                  style={{ background: 'white' }}
                >
                  <div className="text-[9px] text-ink-300 font-mono uppercase tracking-wider">university</div>
                  <div className="font-serif font-bold text-xl" style={{ color: 'var(--accent-dark)' }}>KCA 🎓</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-8 md:mx-14 divider" />

      {/* Philosophy */}
      <section className="py-20 px-8 md:px-14" style={{ background: 'var(--sidebar-bg)' }}>
        <div className="max-w-5xl mx-auto">
          <SectionHeading eyebrow="Philosophy" title="How I think about building" className="mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: '🎯', t: 'Data Quality First',    d: 'Garbage in, garbage out. I obsess over clean, well-structured data before building anything on top of it. Schema design and validation aren\'t afterthoughts — they\'re the foundation.' },
              { icon: '⚡', t: 'Ship and Learn',         d: 'The fastest way to learn is to build real things. I\'d rather have a working v1 that teaches me something than a perfect design that never ships.' },
              { icon: '📖', t: 'Readable Over Clever',  d: 'Code is read far more than it\'s written. I write for the next developer (often future me) — clear names, simple structures, honest comments where needed.' },
            ].map(({ icon, t, d }) => (
              <div key={t} className="card hover:border-[#D6B98C]/50">
                <div className="text-2xl mb-4">{icon}</div>
                <h3 className="font-serif font-semibold text-[14px] text-ink-900 mb-2.5">{t}</h3>
                <p className="text-ink-500 text-[13px] leading-relaxed font-sans">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TimelineSection work={workExperience} education={education} />
    </div>
  )
}
