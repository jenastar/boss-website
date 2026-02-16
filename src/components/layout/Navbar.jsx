import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Shield } from 'lucide-react'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? 'bg-white shadow-sm border-b border-border' : 'bg-white/80 backdrop-blur-md border-b border-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 cursor-pointer" aria-label="Black Oak Security Solutions home">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-lg font-bold text-text font-heading tracking-wide">
              B<span className="text-primary">O</span>SS
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                className={`text-sm font-medium transition-colors duration-200 cursor-pointer ${
                  location.pathname === path ? 'text-primary' : 'text-text-secondary hover:text-text'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="px-5 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-hover transition-all duration-200 shadow-sm cursor-pointer"
            >
              Contact Us
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-text-secondary hover:text-text transition-colors duration-200 cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                className={`block text-sm font-medium py-2.5 px-3 rounded-lg transition-colors duration-200 cursor-pointer ${
                  location.pathname === path ? 'text-primary bg-primary-light' : 'text-text-secondary hover:text-text hover:bg-surface'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block text-center mt-2 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-hover transition-colors duration-200 cursor-pointer"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
