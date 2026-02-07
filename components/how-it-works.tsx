import { Link2, Upload, TestTube, ShieldCheck } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Link2,
    title: "Connect Your Pipeline",
    description: "Integrate with your existing RAG stack. Works with LangChain, LlamaIndex, Pinecone, Weaviate, and more.",
    iconColor: "text-blue-400",
  },
  {
    number: "02",
    icon: Upload,
    title: "Push Data Updates",
    description: "Trigger tests on every document update via Git push, API call, or webhook integration.",
    iconColor: "text-cyan-400",
  },
  {
    number: "03",
    icon: TestTube,
    title: "Automatic Testing",
    description: "We generate synthetic queries from your data and test retrieval quality automatically.",
    iconColor: "text-blue-400",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Quality Gate",
    description: "Pass = Deploy to production. Fail = Block deployment and alert your team immediately.",
    iconColor: "text-emerald-400",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ship RAG Updates with Confidence
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Four simple steps from data update to safe production deployment.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.title} className="relative">
              {/* Connecting line */}
              {i < steps.length - 1 && (
                <div className="absolute top-8 right-0 hidden h-px w-8 translate-x-full bg-border/50 lg:block" />
              )}
              <div className="flex flex-col">
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-primary">{step.number}</span>
                  <div className="h-px flex-1 bg-border/50" />
                </div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-border/50 bg-secondary">
                  <step.icon className={`h-5 w-5 ${step.iconColor}`} />
                </div>
                <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
