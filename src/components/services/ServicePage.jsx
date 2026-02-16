import { Database, ClipboardCheck, BrainCircuit, Users, ArrowRight, CheckCircle2 } from 'lucide-react'
import Button from '../ui/Button'
import Card from '../ui/Card'

const pillars = [
  {
    icon: Database,
    title: 'Security Data Platforms',
    items: ['SIEM & SOAR Engineering', 'ETL & Data Pipelines', 'Security Data Lakes', 'Platform Architecture'],
  },
  {
    icon: ClipboardCheck,
    title: 'Compliance',
    items: ['SOC 2 Readiness', 'HIPAA Compliance', 'NIST Frameworks', 'CMMC Preparation'],
  },
  {
    icon: BrainCircuit,
    title: 'AI Security',
    items: ['Architecture Review', 'LLM Hardening', 'AI Governance', 'AI Red Teaming'],
  },
  {
    icon: Users,
    title: 'Professional Services',
    items: ['Virtual CISO', 'Incident Response', 'Security Training', 'Program Maturity'],
  },
]

export default function ServicePage() {
  return (
    <>
      <section className="py-16 sm:py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 font-heading">Services</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-text mb-5 font-heading">What We Build</h1>
          <p className="text-text-secondary text-lg">Practitioner-led security across four core disciplines.</p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map(({ icon: Icon, title, items }) => (
              <Card key={title} hover={false} className="p-8 text-center">
                <div className="w-11 h-11 rounded-lg bg-primary-light flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-text mb-4 font-heading">{title}</h3>
                <ul className="space-y-2.5 inline-block text-left">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-text-secondary text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-primary">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 font-heading">Need a Custom Scope?</h2>
          <p className="text-blue-100 mb-8">We design engagements around your specific challenges.</p>
          <Button href="https://calendar.app.google/2tKotEhiAWfqv6y69" target="_blank" rel="noopener noreferrer" variant="white">
            Book a Call <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>
    </>
  )
}
