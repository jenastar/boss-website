import { Link } from 'react-router-dom'

export default function Button({ children, to, href, variant = 'primary', className = '', ...props }) {
  const base = 'inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-lg transition-all duration-200 cursor-pointer'

  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-hover shadow-md shadow-primary/20 hover:shadow-lg hover:-translate-y-px',
    cta: 'bg-cta text-white hover:bg-cta-hover shadow-md shadow-cta/20 hover:shadow-lg hover:-translate-y-px',
    outline: 'border-2 border-border text-text hover:border-primary hover:text-primary',
    ghost: 'text-text-muted hover:text-primary',
    white: 'bg-white text-primary hover:bg-primary-light shadow-md hover:-translate-y-px',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (to) return <Link to={to} className={classes} {...props}>{children}</Link>
  if (href) return <a href={href} className={classes} {...props}>{children}</a>
  return <button className={classes} {...props}>{children}</button>
}
