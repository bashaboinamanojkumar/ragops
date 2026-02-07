import { Sparkles, Search, ShieldCheck } from "lucide-react"

const solutions = [
  {
    icon: Sparkles,
    title: "Synthetic Test Generation",
    description: "We auto-generate relevant questions from your new data. No manual test authoring required.",
    iconColor: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
  },
  {
    icon: Search,
    title: "Retrieval Accuracy Testing",
    description: "Test if your RAG retrieves the right context for every question, with precision and recall metrics.",
    iconColor: "text-blue-400",
    bgColor: "bg-blue-400/10",
  },
  {
    icon: ShieldCheck,
    title: "Automatic Deployment Blocking",
    description: "Block bad data before it reaches production. Only quality-verified updates go live.",
    iconColor: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
  },
]

export function SolutionSection() {
  return (
    <section className="relative py-20 lg:py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5">
            <span className="text-xs font-medium text-emerald-400">The Solution</span>
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Automated Quality Gates for Your RAG Pipeline
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            GoragOps plugs into your existing pipeline and catches bad data before it causes harm.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="group relative rounded-2xl border border-border/50 bg-card p-8 transition-all hover:border-primary/30 hover:bg-card/80"
            >
              <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl ${solution.bgColor}`}>
                <solution.icon className={`h-6 w-6 ${solution.iconColor}`} />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{solution.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
