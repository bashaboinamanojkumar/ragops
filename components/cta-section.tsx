"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="relative py-20 lg:py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl rounded-3xl border border-border/50 bg-card p-8 text-center sm:p-12 lg:p-16">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Stop Shipping Broken RAG Updates
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Get started in 5 minutes. No credit card required.
          </p>

          <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="you@company.com"
              className="flex-1 rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <Button className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
              Start Free Trial
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            Or{" "}
            <a href="#" className="font-medium text-primary underline-offset-4 hover:underline">
              book a demo
            </a>{" "}
            with our team.
          </p>
        </div>
      </div>
    </section>
  )
}
