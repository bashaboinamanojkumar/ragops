const integrations = [
  "OpenAI",
  "Anthropic",
  "Pinecone",
  "Weaviate",
  "Chroma",
  "LangChain",
  "LlamaIndex",
  "GitHub",
  "GitLab",
  "AWS",
  "GCP",
  "Azure",
]

export function IntegrationsSection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Works With Your Stack
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Native integrations with the tools and platforms you already use.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
            {integrations.map((name) => (
              <div
                key={name}
                className="flex flex-col items-center justify-center gap-3 rounded-xl border border-border/50 bg-card p-4 transition-colors hover:border-primary/20"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-xs font-bold text-muted-foreground">
                  {name.slice(0, 2).toUpperCase()}
                </div>
                <span className="text-xs font-medium text-muted-foreground">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
