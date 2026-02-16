export default function Card({ children, className = '', hover = true, ...props }) {
  return (
    <div
      className={`bg-white border border-border rounded-xl p-6 shadow-sm ${hover ? 'transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 cursor-pointer' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
