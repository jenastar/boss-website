import Button from '../ui/Button'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-16 pb-24 sm:pt-20 sm:pb-32 lg:pt-28 lg:pb-40 bg-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="animate-fade-up text-4xl sm:text-5xl lg:text-6xl font-bold text-text leading-tight mb-6 font-heading">
          Black Oak Security Solutions
        </h1>
        <p className="animate-fade-up anim-delay-1 text-text-secondary text-lg mb-10 max-w-xl mx-auto">
          Security data platforms, compliance, and AI security — engineered by the people who build it.
        </p>
        <div className="animate-fade-up anim-delay-2 flex justify-center gap-4">
          <Button href="https://calendar.app.google/2tKotEhiAWfqv6y69" target="_blank" rel="noopener noreferrer">
            Book a Consultation <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button to="/services" variant="outline">
            Explore Services
          </Button>
        </div>
      </div>
    </section>
  )
}
