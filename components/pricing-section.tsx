"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactFormModal } from "@/components/contact-form-modal"

const tiers = [
  {
    name: "Starter",
    price: "Free",
    description: "For individuals and small experiments.",
    features: [
      "1,000 tests/month",
      "1 pipeline",
      "Community support",
      "Basic analytics",
    ],
    cta: "Join Waitlist",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$99",
    period: "/mo",
    description: "For teams shipping RAG to production.",
    features: [
      "10,000 tests/month",
      "5 pipelines",
      "Priority support",
      "Advanced analytics",
      "Regression alerts",
      "Custom thresholds",
    ],
    cta: "Join Waitlist",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations with advanced needs.",
    features: [
      "Unlimited tests",
      "Unlimited pipelines",
      "SSO & SAML",
      "SLA guarantee",
      "Dedicated support",
      "Custom integrations",
    ],
    cta: "Join Waitlist",
    highlighted: false,
  },
]

export function PricingSection() {
  const [modalOpen, setModalOpen] = useState(false)

  const handleTierClick = () => {
    setModalOpen(true)
  }

  return (
    <section id="pricing" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Start free. Scale as your RAG pipeline grows.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col rounded-2xl border p-8 ${tier.highlighted
                  ? "border-primary/50 bg-primary/5"
                  : "border-border/50 bg-card"
                }`}
            >
              {tier.highlighted && (
                <div className="mb-4 inline-flex w-fit items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  Most Popular
                </div>
              )}
              <h3 className="text-lg font-semibold text-foreground">{tier.name}</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                {tier.period && (
                  <span className="ml-1 text-sm text-muted-foreground">{tier.period}</span>
                )}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{tier.description}</p>

              <ul className="mt-8 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                onClick={handleTierClick}
                className={`mt-8 w-full ${tier.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                  }`}
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>

      <ContactFormModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  )
}
