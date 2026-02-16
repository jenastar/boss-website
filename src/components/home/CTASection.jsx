import Button from '../ui/Button'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-20 sm:py-24 bg-primary">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 font-heading">
          Let's Solve It Together
        </h2>
        <p className="text-blue-100 mb-8">Tell us the challenge. We'll respond within one business day.</p>
        <Button to="/contact" variant="white">
          Start a Conversation <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </section>
  )
}
