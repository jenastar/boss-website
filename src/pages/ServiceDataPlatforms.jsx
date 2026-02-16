import { Database, ArrowRight, CheckCircle2, Server, GitBranch, BarChart3, Layers } from 'lucide-react'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'

const capabilities = [
  {
    icon: Server,
    title: 'SIEM & SOAR Engineering',
    desc: 'We design, deploy, and optimize Splunk and other SIEM/SOAR platforms end-to-end. Correlation rules, real-time dashboards, alerting pipelines, and automated response playbooks — nothing to hand off, we build and tune the entire stack.',
  },
  {
    icon: GitBranch,
    title: 'ETL & Data Pipelines',
    desc: 'Connect to your data sources, transform security telemetry in flight, and deliver it where it needs to go. We build ingestion pipelines, parsing logic, filtering, enrichment, and routing workflows that keep your security data flowing reliably at scale.',
  },
  {
    icon: Layers,
    title: 'Security Data Lakes',
    desc: 'Centralize security telemetry from across your environment for long-term retention, threat hunting, and advanced analytics. We architect data lake solutions with the right connectors, schema design, and query performance for your compliance and operational needs.',
  },
  {
    icon: BarChart3,
    title: 'Platform Architecture',
    desc: 'From single-instance deployments to distributed multi-site clusters, we design security data architectures that scale with your organization. Source integration, processing tiers, storage strategy, and tooling — all designed as one cohesive platform.',
  },
]

const deliverables = [
  'Platform architecture and capacity planning',
  'Splunk deployment, migration, and optimization',
  'Source connector onboarding and data parsing',
  'Real-time ETL pipeline development',
  'Detection engineering and correlation rules',
  'SOAR playbook and automation development',
  'Dashboard, reporting, and analytics design',
  'Data flow monitoring and pipeline reliability',
]

export default function ServiceDataPlatforms() {
  return (
    <>
      <section className="py-16 sm:py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center mx-auto mb-5">
            <Database className="w-6 h-6 text-primary" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-text mb-5 font-heading">Security Data Platforms</h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Connect, process, and deliver security data where it needs to go. We engineer the real-time data platforms your security team runs on — from source connectors and transformation pipelines to analytics and automated response.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {capabilities.map(({ icon: Icon, title, desc }) => (
              <Card key={title} hover={false} className="p-8">
                <div className="w-11 h-11 rounded-lg bg-primary-light flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-text mb-3 font-heading">{title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-10 font-heading">What We Deliver</h2>
          <div className="inline-block text-left">
            <ul className="space-y-3">
              {deliverables.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-text-secondary text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-primary">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 font-heading">Ready to build your platform?</h2>
          <p className="text-blue-100 mb-8">Let's design a security data architecture that fits your organization.</p>
          <Button href="https://calendar.app.google/2tKotEhiAWfqv6y69" target="_blank" rel="noopener noreferrer" variant="white">
            Book a Call <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>
    </>
  )
}
