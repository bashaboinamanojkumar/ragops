"use client"

import { useState } from "react"
import { ArrowRight, FileText, Sparkles, Search, ShieldCheck, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactFormModal } from "@/components/contact-form-modal"

const pipelineSteps = [
  { icon: FileText, label: "Data Update", color: "text-blue-400" },
  { icon: Sparkles, label: "Synthetic Q&A", color: "text-cyan-400" },
  { icon: Search, label: "Retrieval Test", color: "text-blue-400" },
  { icon: ShieldCheck, label: "Quality Gate", color: "text-emerald-400" },
  { icon: Rocket, label: "Production", color: "text-emerald-400" },
]

export function Hero() {
  const [modalOpen, setModalOpen] = useState(false)

  const openWaitlistModal = () => {
    setModalOpen(true)
  }

  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-primary">Now in Public Beta</span>
          </div>

          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            CI/CD for RAG Pipelines
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground lg:text-xl">
            Stop hallucinations before they reach production. Automatically test retrieval accuracy on every data update.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 px-8"
              onClick={openWaitlistModal}
            >
              Join Waitlist
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <p className="mt-4 text-xs text-muted-foreground">
            Be the first to know when we launch
          </p>
        </div>

        {/* Pipeline visualization */}
        <div className="mx-auto mt-16 max-w-3xl">
          <div className="rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm lg:p-8">
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
              {pipelineSteps.map((step, i) => (
                <div key={step.label} className="flex items-center gap-3">
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/50 bg-secondary">
                      <step.icon className={`h-5 w-5 ${step.color}`} />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">{step.label}</span>
                  </div>
                  {i < pipelineSteps.length - 1 && (
                    <ArrowRight className="hidden h-4 w-4 text-muted-foreground/50 sm:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ContactFormModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  )
}
