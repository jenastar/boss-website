import { Wrench, BrainCircuit, Target } from 'lucide-react'

const items = [
  { icon: Wrench, title: 'Builders, Not Advisors', desc: 'We architect and implement — no handoff required.' },
  { icon: BrainCircuit, title: 'AI-Native Expertise', desc: 'Fluent in LLMs, ML pipelines, and AI governance.' },
  { icon: Target, title: 'Senior Practitioners', desc: 'Every engagement led by hands-on experts.' },
]

export default function ValueProp() {
  return (
    <section className="py-20 sm:py-24 bg-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 font-heading">Why Black Oak</p>
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-14 font-heading">The Difference</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="text-center">
              <div className="w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center mx-auto mb-4">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-text mb-1.5 font-heading">{title}</h3>
              <p className="text-text-muted text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
