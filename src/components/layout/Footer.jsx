import { Link } from 'react-router-dom'
import { Shield } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-base font-bold text-text font-heading tracking-wide">
                B<span className="text-primary">O</span>SS
              </span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              Boutique cybersecurity consulting — security data platforms, compliance, and AI security engineered by practitioners.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <p className="text-sm font-semibold text-text mb-4 font-heading">Navigation</p>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', path: '/' },
                { label: 'Services', path: '/services' },
                { label: 'About', path: '/about' },
                { label: 'Contact', path: '/contact' },
              ].map(({ label, path }) => (
                <li key={path}>
                  <Link to={path} className="text-text-secondary text-sm hover:text-primary transition-colors duration-200 cursor-pointer">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-sm font-semibold text-text mb-4 font-heading">Services</p>
            <ul className="space-y-2.5">
              {[
                { label: 'Security Data Platforms', path: '/services/data-platforms' },
                { label: 'Compliance', path: '/services/compliance' },
                { label: 'AI Security', path: '/services/ai-security' },
                { label: 'Professional Services', path: '/services/professional' },
              ].map(({ label, path }) => (
                <li key={path}>
                  <Link to={path} className="text-text-secondary text-sm hover:text-primary transition-colors duration-200 cursor-pointer">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-text-muted text-xs">
            &copy; {new Date().getFullYear()} Black Oak Security Solutions
          </p>
          <Link to="/contact" className="text-text-muted text-xs hover:text-primary transition-colors duration-200 cursor-pointer">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  )
}
