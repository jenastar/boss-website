import { Database, ClipboardCheck, BrainCircuit, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import Card from '../ui/Card'

const pillars = [
  { icon: Database, title: 'Security Data Platforms', desc: 'SIEM/SOAR engineering, ETL pipelines, and security analytics.', path: '/services/data-platforms' },
  { icon: ClipboardCheck, title: 'Compliance', desc: 'SOC 2, HIPAA, NIST, and CMMC — done right.', path: '/services/compliance' },
  { icon: BrainCircuit, title: 'AI Security', desc: 'LLM hardening, red teaming, and AI governance.', path: '/services/ai-security' },
  { icon: Users, title: 'Professional Services', desc: 'vCISO, incident response, and security training.', path: '/services/professional' },
]

export default function ServicePillars() {
  return (
    <section className="py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 font-heading">Our Capabilities</p>
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-14 font-heading">Four Practice Areas</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map(({ icon: Icon, title, desc, path }) => (
            <Link to={path} key={title} className="group">
              <Card className="h-full text-center">
                <div className="w-11 h-11 rounded-lg bg-primary-light flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-text mb-1.5 font-heading group-hover:text-primary transition-colors duration-200">{title}</h3>
                <p className="text-text-muted text-sm">{desc}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
