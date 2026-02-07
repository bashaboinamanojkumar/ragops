const metrics = [
  {
    value: "95%",
    label: "Reduction in RAG-related incidents",
    description: "Teams using GoragOps see dramatic drops in production hallucinations.",
  },
  {
    value: "10x",
    label: "Faster data update deployment",
    description: "Automated testing replaces manual QA cycles, shipping updates in minutes.",
  },
  {
    value: "100%",
    label: "Test coverage on data changes",
    description: "Every document update is automatically tested before reaching production.",
  },
]

export function MetricsSection() {
  return (
    <section className="relative py-20 lg:py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Catch Issues Before Your Users Do
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Real results from teams that test their RAG pipelines.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {metrics.map((metric) => (
            <div
              key={metric.value}
              className="rounded-2xl border border-border/50 bg-card p-8 text-center"
            >
              <div className="text-5xl font-bold text-primary">{metric.value}</div>
              <div className="mt-3 text-base font-semibold text-foreground">{metric.label}</div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
