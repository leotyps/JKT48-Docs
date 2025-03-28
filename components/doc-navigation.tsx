"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

interface DocNavigationProps {
  activeSection: string
  sections: string[]
  sectionTitles: Record<string, string>
  setActiveSection: (section: string) => void
  apiUrl?: string
}

export function DocNavigation({
  activeSection,
  sections,
  sectionTitles,
  setActiveSection,
  apiUrl,
}: DocNavigationProps) {
  const currentIndex = sections.indexOf(activeSection)
  const hasPrevious = currentIndex > 0
  const hasNext = currentIndex < sections.length - 1

  return (
    <div className="flex flex-wrap justify-between pt-6 border-t mt-8">
      <Link href="/docs">
        <Button variant="outline" size="sm" className="mb-2">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to API List
        </Button>
      </Link>

      <div className="flex flex-wrap gap-2 my-2 justify-center">
        {hasPrevious && (
          <Button
            variant="outline"
            onClick={() => setActiveSection(sections[currentIndex - 1])}
            size="sm"
            className="mb-2"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {sectionTitles[sections[currentIndex - 1]]}
          </Button>
        )}

        {hasNext && (
          <Button onClick={() => setActiveSection(sections[currentIndex + 1])} size="sm" className="mb-2">
            {sectionTitles[sections[currentIndex + 1]]}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>

      {apiUrl && (
        <a href={apiUrl} target="_blank" rel="noopener noreferrer">
          <Button size="sm" className="mb-2">
            Try API
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </a>
      )}
    </div>
  )
}

