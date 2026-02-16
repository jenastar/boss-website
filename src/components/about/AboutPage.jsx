import { Shield, Lock, Lightbulb, Handshake, ArrowRight } from 'lucide-react'
import Button from '../ui/Button'
import Card from '../ui/Card'

const values = [
  { icon: Shield, title: 'Integrity', desc: 'We recommend what is right, not what is easy to sell.' },
  { icon: Lock, title: 'Excellence', desc: 'Deep, current expertise in every engagement.' },
  { icon: Lightbulb, title: 'Innovation', desc: 'New technology applied where it actually matters.' },
  { icon: Handshake, title: 'Partnership', desc: 'We strengthen your team, not your dependency on ours.' },
]

export default function AboutPage() {
  return (
    <>
      <section className="py-16 sm:py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 font-heading">About</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-text mb-5 font-heading">About BOSS</h1>
          <p className="text-text-secondary text-lg">Strategy and implementation under one roof — no gaps, no handoffs.</p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-5 font-heading">Our Founder</h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Black Oak Security Solutions was founded by Jena Peoples — a CISSP-certified security architect with 20+ years in enterprise cybersecurity, including Splunk Enterprise Architect certification and a distinguished career in the U.S. Army.
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            After two decades building security programs at scale — from SIEM/SOAR platforms to data governance frameworks — Jena saw the same gap everywhere: firms that advise but never build. Black Oak was created to close it.
          </p>
          <p className="text-text-muted italic">Like our namesake — deep roots, quiet strength, built to last.</p>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 font-heading">Values</p>
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-14 font-heading">Our Principles</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map(({ icon: Icon, title, desc }) => (
              <Card key={title} hover={false} className="text-center">
                <div className="w-11 h-11 rounded-lg bg-primary-light flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-text mb-1.5 font-heading">{title}</h3>
                <p className="text-text-muted text-sm">{desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-5 font-heading">Ready to Connect?</h2>
          <Button href="https://calendar.app.google/2tKotEhiAWfqv6y69" target="_blank" rel="noopener noreferrer">
            Book a Consultation <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>
    </>
  )
}
