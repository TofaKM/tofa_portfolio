import type { Metadata } from 'next'
import { Download, Briefcase, GraduationCap, Award, Code, MapPin, Mail, Phone } from 'lucide-react'
import { workExperience, education, skills, projects, certifications } from '@/data'

export const metadata: Metadata = {
  title: 'CV / Resume',
  description: 'Professional CV of Tofa Kimani Mwangi — Data Engineer & Full-Stack Developer.',
}

export default function CVPage() {
  return (
    <div className="min-h-screen">
      <section className="py-20 px-8 md:px-14">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-12">
            <div>
              <p className="text-[11px] uppercase tracking-[.2em] font-medium font-sans mb-4"
                 style={{ color: 'var(--accent-dark)' }}>
                Curriculum Vitae
              </p>
              <h1 className="font-serif font-bold text-4xl md:text-5xl text-ink-900 mb-1"
                  style={{ letterSpacing: '-.02em' }}>
                Tofa Kimani Mwangi
              </h1>
              <p className="font-sans font-medium text-[15px] mb-4" style={{ color: 'var(--accent-dark)' }}>
                Data Engineer | Software Engineering & Big Data
              </p>
              <div className="flex flex-wrap gap-4 text-[12px] text-ink-400 font-sans">
                <span className="flex items-center gap-1.5"><Mail size={11} /> mwangitofa@gmail.com</span>
                <span className="flex items-center gap-1.5"><Phone size={11} /> 0759 799 624</span>
                <span className="flex items-center gap-1.5"><MapPin size={11} /> Nairobi, Kenya</span>
              </div>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-[13px] font-sans text-white shrink-0 hover:opacity-90 transition-opacity shadow-sm"
              style={{ background: 'var(--accent-dark)' }}
            >
              <Download size={15} /> Download PDF
            </a>
          </div>

          {/* Profile Summary */}
          <div className="card mb-5">
            <h2 className="font-serif font-semibold text-[15px] text-ink-900 mb-4 flex items-center gap-2">
              <span style={{ color: 'var(--accent)' }}>▸</span> Profile Summary
            </h2>
            <p className="text-ink-500 text-[13.5px] leading-relaxed font-sans">
              Aspiring Data Engineer with strong programming and data analysis skills. Proficient in Python (Pandas, NumPy,
              Matplotlib) and MySQL for data processing, analysis, and database management. Experienced in JavaScript,
              Node.js, and React for building backend services and data-driven applications. Passionate about transforming
              raw data into structured datasets and developing scalable data solutions.
            </p>
          </div>

          {/* Work Experience */}
          <div className="card mb-5">
            <h2 className="font-serif font-semibold text-[15px] text-ink-900 mb-7 flex items-center gap-2">
              <Briefcase size={15} style={{ color: 'var(--accent-dark)' }} /> Work Experience
            </h2>
            {workExperience.map((job, i) => (
              <div key={job.company} className={i > 0 ? 'pt-6 mt-6 border-t border-[#E5E1D8]' : ''}>
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-serif font-semibold text-[14px] text-ink-900">{job.role}</h3>
                    <span className="font-sans text-[12px] font-medium" style={{ color: 'var(--accent-dark)' }}>
                      {job.company} · {job.location}
                    </span>
                  </div>
                  <span
                    className="text-[10px] text-ink-400 font-mono px-2.5 py-1 rounded-lg"
                    style={{ background: 'var(--sidebar-bg)' }}
                  >
                    {job.period}
                  </span>
                </div>
                <p className="text-ink-500 text-[12.5px] leading-relaxed font-sans mb-3">{job.description}</p>
                <ul className="space-y-1.5 mb-3">
                  {job.achievements.map(a => (
                    <li key={a} className="flex items-start gap-2 text-[12px] text-ink-500 font-sans">
                      <span style={{ color: 'var(--accent)' }} className="mt-0.5 shrink-0">›</span>{a}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {job.tech.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="card mb-5">
            <h2 className="font-serif font-semibold text-[15px] text-ink-900 mb-7 flex items-center gap-2">
              <GraduationCap size={15} style={{ color: 'var(--accent-dark)' }} /> Education
            </h2>
            <div className="space-y-6">
              {education.map((edu, i) => (
                <div key={edu.school} className={i > 0 ? 'pt-6 border-t border-[#E5E1D8]' : ''}>
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1.5">
                    <div>
                      <h3 className="font-serif font-semibold text-[14px] text-ink-900">
                        {edu.degree} in {edu.field}
                      </h3>
                      <span className="font-sans text-[12px] font-medium" style={{ color: 'var(--accent-dark)' }}>
                        {edu.school} · {edu.location}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className="text-[10px] text-ink-400 font-mono px-2.5 py-1 rounded-lg"
                        style={{ background: 'var(--sidebar-bg)' }}
                      >
                        {edu.period}
                      </span>
                      {edu.grade && (
                        <span
                          className="text-[10px] font-semibold px-2 py-1 rounded-lg"
                          style={{ background: 'rgba(214,185,140,.2)', color: 'var(--accent-dark)' }}
                        >
                          {edu.grade}
                        </span>
                      )}
                    </div>
                  </div>
                  <ul className="space-y-1 mt-2">
                    {edu.details.map(d => (
                      <li key={d} className="flex items-start gap-2 text-[12px] text-ink-500 font-sans">
                        <span style={{ color: 'var(--accent)' }} className="shrink-0">›</span>{d}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="card mb-5">
            <h2 className="font-serif font-semibold text-[15px] text-ink-900 mb-6 flex items-center gap-2">
              <Award size={15} style={{ color: 'var(--accent)' }} /> Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {certifications.map(cert => (
                <div
                  key={cert.name}
                  className={`p-4 rounded-xl border ${
                    cert.status === 'in-progress'
                      ? 'border-[#D6B98C]/40'
                      : 'border-[#E5E1D8]'
                  }`}
                  style={cert.status === 'in-progress' ? { background: 'rgba(214,185,140,.06)' } : { background: 'var(--sidebar-bg)' }}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">{cert.icon}</span>
                    <div>
                      <div className="font-sans font-medium text-[12.5px] text-ink-900 mb-0.5">{cert.name}</div>
                      <div className="text-ink-400 text-[11px] font-sans">{cert.issuer}</div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[10px] text-ink-300 font-mono">{cert.date}</span>
                        {cert.status === 'in-progress' && (
                          <span className="text-[10px] font-medium font-sans" style={{ color: 'var(--accent-dark)' }}>
                            ● In Progress
                          </span>
                        )}
                      </div>
                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank" rel="noopener noreferrer"
                          className="text-[10px] hover:underline mt-1 inline-block"
                          style={{ color: 'var(--accent-dark)' }}
                        >
                          ↗ View Credential
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="card mb-5">
            <h2 className="font-serif font-semibold text-[15px] text-ink-900 mb-6 flex items-center gap-2">
              <Code size={15} style={{ color: 'var(--accent-dark)' }} /> Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { label: 'Data & Analytics',     items: ['Power BI', 'Excel', 'Pandas', 'NumPy', 'Matplotlib', 'MySQL (SQL)'] },
                { label: 'Programming Languages', items: ['Python', 'JavaScript', 'C#', 'C++ (learning)', 'SQL'] },
                { label: 'Web Development',      items: ['React.js', 'Node.js', 'Express', 'Bootstrap', 'REST APIs'] },
                { label: 'Databases & Tools',    items: ['MySQL', 'MongoDB', 'Git', 'GitHub', 'VS Code', 'Postman'] },
              ].map(({ label, items }) => (
                <div key={label}>
                  <h3
                    className="text-[10px] font-semibold uppercase tracking-[.18em] mb-2.5 font-sans"
                    style={{ color: 'var(--accent-dark)' }}
                  >
                    {label}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map(item => <span key={item} className="tag">{item}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div className="card mb-5">
            <h2 className="font-serif font-semibold text-[15px] text-ink-900 mb-6">🚀 Key Projects</h2>
            <div className="space-y-5">
              {projects.map(p => (
                <div key={p.id} className="flex items-start gap-3">
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                    style={{ background: 'var(--accent)' }}
                  />
                  <div>
                    <div className="flex items-center gap-3 mb-0.5">
                      <h3 className="font-sans font-medium text-[13.5px] text-ink-900">{p.title}</h3>
                      <span className="text-[10px] text-ink-300 font-mono">{p.year}</span>
                    </div>
                    <p className="text-ink-500 text-[12px] leading-relaxed font-sans mb-2">{p.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.tech.slice(0, 5).map(t => <span key={t} className="tag">{t}</span>)}
                    </div>
                    <a
                      href={p.github}
                      target="_blank" rel="noopener noreferrer"
                      className="text-[10px] hover:underline mt-1 inline-block"
                      style={{ color: 'var(--accent-dark)' }}
                    >
                      ↗ {p.github}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div className="card">
            <h2 className="font-serif font-semibold text-[15px] text-ink-900 mb-4">💡 Interests</h2>
            <div className="flex flex-wrap gap-2">
              {['Artificial Intelligence', 'Machine Learning', 'Data Science', 'Analytics', 'Mobile App Development',
                'Open Source', 'Tech Communities', 'GitHub', 'Kaggle', 'Video Editing', 'Digital Storytelling',
                'Badminton', 'Outdoor Activities'].map(item => (
                <span key={item} className="tag">{item}</span>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
