import { useState } from 'react'
import { Mail, MapPin, Clock, CheckCircle } from 'lucide-react'
import Button from '../ui/Button'
import Card from '../ui/Card'

const serviceOptions = [
  'Data Security', 'Compliance', 'AI Security', 'Professional Services', 'Multiple Services', 'Not Sure Yet',
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = 'Required'
    if (!form.email.trim()) e.email = 'Required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email'
    if (!form.message.trim()) e.message = 'Required'
    return e
  }

  function handleSubmit(ev) {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length === 0) setSubmitted(true)
  }

  function handleChange(ev) {
    const { name, value } = ev.target
    setForm((p) => ({ ...p, [name]: value }))
    if (errors[name]) setErrors((p) => ({ ...p, [name]: undefined }))
  }

  const inp = (err) =>
    `w-full border rounded-lg px-4 py-3 text-sm text-text placeholder:text-text-muted bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/15 ${
      err ? 'border-red-300 focus:border-red-400' : 'border-border focus:border-primary'
    }`

  return (
    <>
      <section className="py-16 sm:py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 font-heading">Contact</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-text mb-5 font-heading">Start a Conversation</h1>
          <p className="text-text-secondary text-lg">Tell us what you are working on. We reply within one business day.</p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card hover={false} className="p-8">
                {submitted ? (
                  <div className="py-10 text-center">
                    <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-text mb-2 font-heading">Message Received</h3>
                    <p className="text-text-secondary text-sm">We will be in touch within one business day.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-text mb-1.5">Name *</label>
                        <input type="text" id="name" name="name" value={form.name} onChange={handleChange} className={inp(errors.name)} placeholder="Your name" />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-text mb-1.5">Email *</label>
                        <input type="email" id="email" name="email" value={form.email} onChange={handleChange} className={inp(errors.email)} placeholder="you@company.com" />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-text mb-1.5">Company</label>
                        <input type="text" id="company" name="company" value={form.company} onChange={handleChange} className={inp(false)} placeholder="Company name" />
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-text mb-1.5">Service Area</label>
                        <select id="service" name="service" value={form.service} onChange={handleChange} className={`${inp(false)} cursor-pointer`}>
                          <option value="">Select...</option>
                          {serviceOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-text mb-1.5">Message *</label>
                      <textarea id="message" name="message" value={form.message} onChange={handleChange} rows={4} className={`${inp(errors.message)} resize-y`} placeholder="Tell us about your project or challenge..." />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>
                    <Button type="submit">Submit Inquiry</Button>
                  </form>
                )}
              </Card>
            </div>

            <div className="space-y-4">
              {[
                { icon: Mail, label: 'Email', value: 'contact@blackoaksecurity.com', href: 'mailto:contact@blackoaksecurity.com' },
                { icon: MapPin, label: 'Location', value: 'Remote-first, US nationwide' },
                { icon: Clock, label: 'Response Time', value: 'Within one business day' },
              ].map(({ icon: Icon, label, value, href }) => (
                <Card key={label} hover={false}>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary-light flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-text-muted font-heading font-semibold">{label}</p>
                      {href ? (
                        <a href={href} className="text-text text-sm hover:text-primary transition-colors duration-200 cursor-pointer">{value}</a>
                      ) : (
                        <p className="text-text text-sm">{value}</p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
