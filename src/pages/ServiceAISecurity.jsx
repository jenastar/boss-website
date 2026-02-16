import { BrainCircuit, ArrowRight, CheckCircle2, Search, Lock, Scale, Target } from 'lucide-react'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'

const capabilities = [
  {
    icon: Search,
    title: 'Architecture Review',
    desc: 'We assess your AI/ML infrastructure for security risks — data flows, model serving, API exposure, access controls, and supply chain dependencies. You get a clear picture of where your AI stack is vulnerable.',
  },
  {
    icon: Lock,
    title: 'LLM Hardening',
    desc: 'Prompt injection, data exfiltration, model manipulation — LLMs introduce novel attack surfaces. We harden your LLM deployments with input validation, output filtering, guardrails, and monitoring.',
  },
  {
    icon: Scale,
    title: 'AI Governance',
    desc: 'Policies, standards, and processes for responsible AI use across your organization. We build governance frameworks that address data privacy, model accountability, bias mitigation, and regulatory compliance.',
  },
  {
    icon: Target,
    title: 'AI Red Teaming',
    desc: 'Adversarial testing of your AI systems to find vulnerabilities before attackers do. We probe LLMs, ML models, and AI-powered features for prompt injection, jailbreaks, data leakage, and logic manipulation.',
  },
]

const deliverables = [
  'AI/ML architecture security assessments',
  'LLM threat modeling and hardening',
  'Prompt injection testing and mitigation',
  'AI governance framework development',
  'Model access control and monitoring',
  'Data pipeline security for ML workflows',
  'AI incident response procedures',
  'Responsible AI policy development',
]

export default function ServiceAISecurity() {
  return (
    <>
      <section className="py-16 sm:py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center mx-auto mb-5">
            <BrainCircuit className="w-6 h-6 text-primary" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-text mb-5 font-heading">AI Security</h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            We secure AI systems from architecture to production — LLM hardening, red teaming, governance frameworks, and ML pipeline security built by engineers who understand the technology.
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 font-heading">Securing AI in your org?</h2>
          <p className="text-blue-100 mb-8">We'll assess your AI stack and build a security roadmap.</p>
          <Button href="https://calendar.app.google/2tKotEhiAWfqv6y69" target="_blank" rel="noopener noreferrer" variant="white">
            Book a Call <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>
    </>
  )
}
