"use client"

import { useState } from "react"
import { Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface ApiBaseUrlProps {
  url: string
}

export function ApiBaseUrl({ url }: ApiBaseUrlProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Alert className="overflow-hidden">
      <AlertDescription className="flex flex-wrap items-center gap-2">
        <span className="font-medium whitespace-nowrap">Base URL:</span>
        <div className="flex-1 min-w-0 flex items-center">
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm overflow-x-auto scrollbar-hide max-w-full">
            {url}
          </code>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 flex-shrink-0 ml-1"
            onClick={() => copyToClipboard(url)}
          >
            {copied ? <span className="text-xs text-green-500">Copied!</span> : <Copy className="h-4 w-4" />}
          </Button>
        </div>
      </AlertDescription>
    </Alert>
  )
}

