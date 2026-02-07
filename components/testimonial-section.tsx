import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "GoragOps caught a critical retrieval regression that would have caused hallucinations for thousands of users. It's now a non-negotiable part of our pipeline.",
    author: "Sarah Chen",
    role: "ML Engineer",
    company: "Nebula AI",
  },
  {
    quote: "We went from manual QA taking days to fully automated testing in minutes. The synthetic question generation is incredibly accurate.",
    author: "Marcus Rivera",
    role: "Head of AI",
    company: "DataForge",
  },
  {
    quote: "Before GoragOps, every data update was a gamble. Now we deploy with confidence knowing our retrieval quality is verified.",
    author: "Priya Patel",
    role: "Staff Engineer",
    company: "VectorLabs",
  },
]

export function TestimonialSection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Trusted by AI Teams
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Hear from engineers who ship RAG updates with confidence.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="flex flex-col rounded-2xl border border-border/50 bg-card p-8"
            >
              <Quote className="mb-4 h-8 w-8 text-primary/40" />
              <blockquote className="flex-1 text-sm leading-relaxed text-muted-foreground">
                {`"${t.quote}"`}
              </blockquote>
              <div className="mt-6 flex items-center gap-3 border-t border-border/50 pt-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {t.author.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.author}</div>
                  <div className="text-xs text-muted-foreground">{t.role} at {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
