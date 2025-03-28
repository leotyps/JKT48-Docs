"use client"

import { useState, useEffect } from "react"
import { Search, X, Loader2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

interface ApiSearchProps {
  onSearch: (query: string) => void
  placeholder?: string
  value?: string
}

export function ApiSearch({ onSearch, placeholder = "Search APIs...", value = "" }: ApiSearchProps) {
  const [query, setQuery] = useState(value)
  const [isTyping, setIsTyping] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [prevValue, setPrevValue] = useState(value)

  // Sync with external value only when it changes
  useEffect(() => {
    if (value !== prevValue) {
      setQuery(value)
      setPrevValue(value)
    }
  }, [value, prevValue])

  useEffect(() => {
    // Set typing indicator
    if (query !== prevValue) {
      setIsTyping(true)
    }

    // Clear any existing timer
    const debounceTimer = setTimeout(() => {
      // Only trigger search if query has actually changed
      if (query !== prevValue) {
        onSearch(query.trim())
        setPrevValue(query)
      }
      setIsTyping(false)
    }, 400) // Slightly longer debounce for better UX

    return () => clearTimeout(debounceTimer)
  }, [query, onSearch, prevValue])

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <motion.div
        className={`relative flex items-center transition-all duration-300 ${isFocused ? "scale-[1.02]" : "scale-100"}`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative flex-1 group">
          {/* Animated background for focus state */}
          <AnimatePresence>
            {isFocused && (
              <motion.div
                className="absolute -inset-1 bg-primary/5 rounded-full blur-sm -z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </AnimatePresence>

          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground/70 pointer-events-none flex items-center">
            {isTyping ? <Loader2 className="h-5 w-5 animate-spin" /> : <Search className="h-5 w-5" />}
          </div>

          <Input
            type="text"
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="pl-12 pr-12 py-7 w-full rounded-full border-primary/20 focus-visible:ring-primary/30 focus-visible:ring-offset-0 text-base shadow-sm"
            aria-label="Search APIs"
          />

          <AnimatePresence>
            {query && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-full hover:bg-muted"
                  onClick={() => {
                    setQuery("")
                    onSearch("")
                    setPrevValue("")
                  }}
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4 text-muted-foreground" />
                  <span className="sr-only">Clear search</span>
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Search tips */}
      <div className="mt-2 text-xs text-muted-foreground/70 text-center px-4">
        <p>Try searching for: "download", "weather", "screenshot", or filter by category</p>
      </div>
    </div>
  )
}

