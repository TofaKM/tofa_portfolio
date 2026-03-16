import Link from 'next/link'
import { Github, Linkedin, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-[#1c1c35] py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00e5ff] to-[#a855f7] flex items-center justify-center">
                <span className="text-[11px] font-bold text-[#06060f]" style={{ fontFamily: 'var(--font-display)' }}>TK</span>
              </div>
              <span className="font-semibold text-white text-sm" style={{ fontFamily: 'var(--font-display)' }}>Tofa Kimani</span>
            </Link>
            <p className="text-[#8b8aaa] text-sm leading-relaxed max-w-xs">
              Data Engineer & Full-Stack Developer. Turning raw data into structured solutions from Nairobi, Kenya.
            </p>
            <div className="flex items-center gap-1.5 mt-3 text-[#3d3d5c] text-sm">
              <MapPin size={13} /> <span>Nairobi, Kenya 🇰🇪</span>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-widest mb-4" style={{ fontFamily: 'var(--font-display)' }}>Navigation</h3>
            <ul className="space-y-2">
              {['/about', '/projects', '/skills', '/blog', '/cv', '/contact'].map(href => (
                <li key={href}>
                  <Link href={href} className="text-[#8b8aaa] hover:text-[#00e5ff] transition-colors text-sm capitalize">
                    {href.replace('/', '')}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-widest mb-4" style={{ fontFamily: 'var(--font-display)' }}>Connect</h3>
            <div className="flex gap-3 mb-5">
              {[
                { href: 'https://github.com/TofaKM', icon: Github, label: 'GitHub' },
                { href: 'https://www.linkedin.com/in/tofa-mwangi', icon: Linkedin, label: 'LinkedIn' },
                { href: 'mailto:mwangitofa@gmail.com', icon: Mail, label: 'Email' },
              ].map(({ href, icon: Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-9 h-9 rounded-lg bg-[#0c0c1a] border border-[#1c1c35] flex items-center justify-center text-[#8b8aaa] hover:text-[#00e5ff] hover:border-[#00e5ff]/30 transition-all">
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <p className="text-[#8b8aaa] text-sm">Open to Data & Dev roles.</p>
            <a href="mailto:mwangitofa@gmail.com" className="text-[#00e5ff] text-sm hover:underline">mwangitofa@gmail.com</a>
          </div>
        </div>

        <div className="divider mb-6" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[#3d3d5c] text-xs" style={{ fontFamily: 'var(--font-mono)' }}>
            © {new Date().getFullYear()} Tofa Kimani Mwangi · Built with Next.js 14
          </p>
          <p className="text-[#3d3d5c] text-xs">Nairobi, Kenya 🇰🇪</p>
        </div>
      </div>
    </footer>
  )
}
