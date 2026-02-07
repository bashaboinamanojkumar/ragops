import { Sparkles, BarChart3, GitCompare, GitMerge, Database, Layers } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "Synthetic Question Generation",
    description: "AI-generated test cases derived directly from your documents. Comprehensive coverage without manual effort.",
  },
  {
    icon: BarChart3,
    title: "Retrieval Accuracy Scoring",
    description: "Measure context relevance and completeness with detailed precision and recall metrics.",
  },
  {
    icon: GitCompare,
    title: "Regression Detection",
    description: "Catch quality drops before production. Compare retrieval performance across data versions.",
  },
  {
    icon: GitMerge,
    title: "CI/CD Integrations",
    description: "Native support for GitHub Actions, GitLab CI, Jenkins, and CircleCI. Fits into your existing workflow.",
  },
  {
    icon: Database,
    title: "Vector DB Support",
    description: "Works with Pinecone, Weaviate, Chroma, Qdrant, Milvus, and more vector databases out of the box.",
  },
  {
    icon: Layers,
    title: "Framework Agnostic",
    description: "LangChain, LlamaIndex, Haystack, or your custom stack. GoragOps works with any RAG framework.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything You Need to Ship RAG Safely
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            A complete testing platform designed specifically for RAG pipelines.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border/50 bg-card p-6 transition-all hover:border-primary/20"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
