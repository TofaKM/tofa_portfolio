'use client'
import { motion } from 'framer-motion'
import { skills } from '@/data'
import SectionHeading from '@/components/ui/SectionHeading'

const catCfg = {
  frontend: { label: 'Frontend',          emoji: '🎨', accent: '#B8956A' },
  backend:  { label: 'Backend',           emoji: '⚙️',  accent: '#9A7A58' },
  database: { label: 'Databases',         emoji: '🗄️', accent: '#C4A882' },
  devops:   { label: 'Data & Analytics',  emoji: '📊', accent: '#8B6F4E' },
  tools:    { label: 'Tools',             emoji: '🔧', accent: '#A08060' },
} as const

const order = ['frontend', 'backend', 'database', 'devops', 'tools'] as const

export default function SkillsPage() {
  return (
    <div className="min-h-screen">
      <section className="py-20 px-8 md:px-14">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            eyebrow="Tech Stack"
            title="Skills & Expertise"
            subtitle="Technologies and tools I use daily — from building UIs to processing data pipelines."
            align="center"
            className="mb-20"
          />

          <div className="space-y-14">
            {order.map((cat, ci) => {
              const cfg = catCfg[cat]
              const catSkills = skills.filter(s => s.category === cat)
              return (
                <motion.div
                  key={cat}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: .5, delay: ci * .07 }}
                >
                  {/* Category header */}
                  <div className="flex items-center gap-4 mb-7">
                    <span className="text-xl">{cfg.emoji}</span>
                    <h2
                      className="font-serif font-semibold text-lg"
                      style={{ color: cfg.accent }}
                    >
                      {cfg.label}
                    </h2>
                    <div
                      className="flex-1 h-px"
                      style={{ background: `linear-gradient(90deg, ${cfg.accent}40, transparent)` }}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {catSkills.map((sk, si) => (
                      <motion.div
                        key={sk.name}
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: .38, delay: si * .04 }}
                        className="card hover:border-[#D6B98C]/50 group"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-2xl">{sk.icon}</span>
                          <div className="flex-1">
                            <div className="flex justify-between items-baseline">
                              <h3 className="font-sans font-medium text-[13.5px] text-ink-900">{sk.name}</h3>
                              <span
                                className="text-[11px] font-mono font-semibold"
                                style={{ color: cfg.accent }}
                              >
                                {sk.level}%
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Progress bar */}
                        <div className="h-[3px] rounded-full bg-[#E5E1D8] overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${sk.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: .1 + si * .03, ease: 'easeOut' }}
                            className="h-full rounded-full"
                            style={{ background: `linear-gradient(90deg, ${cfg.accent}, ${cfg.accent}80)` }}
                          />
                        </div>
                        <div className="mt-2 text-right">
                          <span className="text-[10px] text-ink-300 font-sans">
                            {sk.level >= 85 ? 'Proficient' : sk.level >= 70 ? 'Comfortable' : 'Learning'}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Currently learning */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .5 }}
            className="mt-16 card"
          >
            <h3 className="font-serif font-semibold text-[15px] text-ink-900 mb-2">🌱 Currently Learning</h3>
            <p className="text-ink-500 text-[13px] font-sans mb-5">
              Always expanding the toolkit through ALX Data Engineering Program and personal projects.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Data Pipelines', 'Big Data Processing', 'ETL Design', 'Cloud Databases', 'Apache tools', 'C++ Fundamentals'].map(item => (
                <span key={item} className="tag">{item}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
