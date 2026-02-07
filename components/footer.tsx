import { GitBranch } from "lucide-react"

const footerLinks = {
  Product: ["Features", "Pricing", "Docs", "Changelog", "Status"],
  Company: ["About", "Blog", "Careers", "Contact"],
  Resources: ["Documentation", "API Reference", "GitHub", "Community"],
  Legal: ["Privacy Policy", "Terms of Service", "Security"],
}

const socialLinks = [
  { label: "Twitter", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "Discord", href: "#" },
]

export function Footer() {
  return (
    <footer className="border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <GitBranch className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold text-foreground">GoragOps</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              CI/CD for RAG Pipelines. Test retrieval accuracy before every deployment.
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                  aria-label={link.label}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-foreground">{category}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border/50 pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} GoragOps. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
