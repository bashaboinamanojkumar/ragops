import { AlertTriangle, HelpCircle, Clock } from "lucide-react"

const problems = [
  {
    icon: AlertTriangle,
    title: "Bad Data = Hallucinations",
    description: "New documents can break your RAG system silently. One bad chunk and your AI starts confidently lying to users.",
    iconColor: "text-red-400",
    bgColor: "bg-red-400/10",
  },
  {
    icon: HelpCircle,
    title: "No Testing Standards",
    description: "Unlike code, there's no CI/CD for your knowledge base. You're deploying data changes blind.",
    iconColor: "text-amber-400",
    bgColor: "bg-amber-400/10",
  },
  {
    icon: Clock,
    title: "Manual QA Doesn't Scale",
    description: "You can't manually test every data update. As your knowledge base grows, so does your risk.",
    iconColor: "text-orange-400",
    bgColor: "bg-orange-400/10",
  },
]

export function ProblemSection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            GenAI in Production is Terrifying
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Deploying RAG updates without testing is like pushing code without CI. Here's what keeps ML teams up at night.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="group rounded-2xl border border-border/50 bg-card p-8 transition-colors hover:border-border"
            >
              <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl ${problem.bgColor}`}>
                <problem.icon className={`h-6 w-6 ${problem.iconColor}`} />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{problem.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
