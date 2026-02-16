import { Users, ArrowRight, CheckCircle2, UserCog, AlertTriangle, GraduationCap, TrendingUp } from 'lucide-react'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'

const capabilities = [
  {
    icon: UserCog,
    title: 'Virtual CISO',
    desc: 'Senior security leadership without the full-time hire. We embed as your vCISO to set security strategy, manage risk, report to the board, and drive program maturity — on your schedule and budget.',
  },
  {
    icon: AlertTriangle,
    title: 'Incident Response',
    desc: 'IR planning, playbook development, tabletop exercises, and readiness assessments. We prepare your team to detect, contain, and recover from security incidents before they become crises.',
  },
  {
    icon: GraduationCap,
    title: 'Security Training',
    desc: 'Targeted security awareness and technical training for your workforce. From phishing simulations to developer security workshops, we build training programs that change behavior, not just check boxes.',
  },
  {
    icon: TrendingUp,
    title: 'Program Maturity',
    desc: 'Assess where your security program is today and build a roadmap to where it needs to be. We benchmark against industry frameworks and prioritize investments that deliver the most risk reduction.',
  },
]

const deliverables = [
  'vCISO engagement and security strategy',
  'Incident response plan development',
  'Tabletop exercises and IR drills',
  'Security awareness training programs',
  'Developer security training',
  'Security program maturity assessments',
  'Board-level security reporting',
  'Security roadmap and budget planning',
]

export default function ServiceProfessional() {
  return (
    <>
      <section className="py-16 sm:py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center mx-auto mb-5">
            <Users className="w-6 h-6 text-primary" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-text mb-5 font-heading">Professional Services</h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Strategic security leadership and hands-on expertise — vCISO services, incident response, training, and program development from practitioners who've built programs at scale.
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 font-heading">Need security leadership?</h2>
          <p className="text-blue-100 mb-8">We scale to your needs — from a single engagement to ongoing vCISO support.</p>
          <Button href="https://calendar.app.google/2tKotEhiAWfqv6y69" target="_blank" rel="noopener noreferrer" variant="white">
            Book a Call <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>
    </>
  )
}
