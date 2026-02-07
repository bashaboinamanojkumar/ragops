import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { HowItWorks } from "@/components/how-it-works"
import { FeaturesSection } from "@/components/features-section"
import { IntegrationsSection } from "@/components/integrations-section"
import { CodeSnippetSection } from "@/components/code-snippet-section"
import { MetricsSection } from "@/components/metrics-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { PricingSection } from "@/components/pricing-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <FeaturesSection />
      <IntegrationsSection />
      <CodeSnippetSection />
      <MetricsSection />
      <TestimonialSection />
      <PricingSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
