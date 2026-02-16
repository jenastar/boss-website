import { ClipboardCheck, ArrowRight, CheckCircle2, FileCheck, Shield, BookOpen, Award } from 'lucide-react'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'

const capabilities = [
  {
    icon: FileCheck,
    title: 'SOC 2 Readiness',
    desc: 'We prepare your organization for SOC 2 Type I and Type II audits — gap assessments, policy development, control implementation, and evidence collection. No templates dropped on your desk; we do the work with you.',
  },
  {
    icon: Shield,
    title: 'HIPAA Compliance',
    desc: 'End-to-end HIPAA security program development. Risk assessments, safeguard implementation, workforce training, and ongoing compliance monitoring tailored to your covered entity or business associate obligations.',
  },
  {
    icon: BookOpen,
    title: 'NIST Frameworks',
    desc: 'Implementation of NIST CSF, 800-53, and 800-171 controls mapped to your environment. We translate framework requirements into practical, operational security measures your team can sustain.',
  },
  {
    icon: Award,
    title: 'CMMC Preparation',
    desc: 'Preparing defense contractors for CMMC Level 1-3 assessments. We identify gaps, implement CUI protections, build your System Security Plan, and guide you through the assessment process.',
  },
]

const deliverables = [
  'Gap assessments against target frameworks',
  'Policy and procedure development',
  'Control implementation and hardening',
  'Evidence collection and audit preparation',
  'Risk assessment and treatment plans',
  'Vendor risk management programs',
  'Continuous compliance monitoring',
  'Audit liaison and remediation support',
]

export default function ServiceCompliance() {
  return (
    <>
      <section className="py-16 sm:py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center mx-auto mb-5">
            <ClipboardCheck className="w-6 h-6 text-primary" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-text mb-5 font-heading">Compliance</h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            We build compliance programs that pass audits and actually improve your security posture — SOC 2, HIPAA, NIST, and CMMC done right the first time.
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 font-heading">Need compliance support?</h2>
          <p className="text-blue-100 mb-8">We'll scope the engagement to your framework and timeline.</p>
          <Button href="https://calendar.app.google/2tKotEhiAWfqv6y69" target="_blank" rel="noopener noreferrer" variant="white">
            Book a Call <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>
    </>
  )
}
