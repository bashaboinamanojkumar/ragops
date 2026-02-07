"use client"

import React from "react"

import { useState } from "react"
import { Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const codeString = `# .github/workflows/rag-ci.yml
name: RAG Pipeline CI
on:
  push:
    paths: ['docs/**', 'knowledge/**']

jobs:
  test-rag:
    runs-on: ubuntu-latest
    steps:
      - uses: goragops/rag-test-action@v1
        with:
          api_key: \${{ secrets.GORAGOPS_API_KEY }}
          vector_db: pinecone
          threshold: 0.85`

function highlightYaml(code: string) {
  return code.split("\n").map((line, i) => {
    let highlighted: React.ReactNode = line

    if (line.trimStart().startsWith("#")) {
      highlighted = <span className="text-muted-foreground/60">{line}</span>
    } else if (line.includes(":") && !line.trimStart().startsWith("-")) {
      const colonIndex = line.indexOf(":")
      const key = line.slice(0, colonIndex)
      const rest = line.slice(colonIndex)
      highlighted = (
        <>
          <span className="text-cyan-400">{key}</span>
          <span className="text-foreground">{rest}</span>
        </>
      )
    } else if (line.trimStart().startsWith("-")) {
      highlighted = <span className="text-blue-400">{line}</span>
    } else {
      highlighted = <span className="text-foreground">{line}</span>
    }

    return (
      <div key={i} className="flex">
        <span className="mr-6 inline-block w-5 text-right text-muted-foreground/40 select-none">{i + 1}</span>
        {highlighted}
      </div>
    )
  })
}

export function CodeSnippetSection() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Integrate in Minutes
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Add GoragOps to your CI/CD pipeline with a single workflow file.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl">
          <div className="overflow-hidden rounded-2xl border border-border/50 bg-card">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border/50 px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500/60" />
                <div className="h-3 w-3 rounded-full bg-amber-500/60" />
                <div className="h-3 w-3 rounded-full bg-emerald-500/60" />
                <span className="ml-3 text-xs text-muted-foreground">rag-ci.yml</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="h-7 gap-1.5 px-2 text-xs text-muted-foreground hover:text-foreground"
                onClick={handleCopy}
              >
                {copied ? (
                  <>
                    <Check className="h-3 w-3" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3" />
                    Copy
                  </>
                )}
              </Button>
            </div>
            {/* Code */}
            <div className="overflow-x-auto p-6">
              <pre className="font-mono text-sm leading-relaxed">
                <code>{highlightYaml(codeString)}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
