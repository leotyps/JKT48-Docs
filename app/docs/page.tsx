
"use client"

import type React from "react"

import { useEffect, useState, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
  ArrowRight,
  Cloud,
  Download,
  ExternalLink,
  Image,
  Tv,
  Youtube,
  Music,
  Star,
  TrendingUp,
  Filter,
  Search,
  Zap,
  Wrench,
  Video,
  Users,
  Calendar,
  MessageSquare,
  Globe,
  Play,
  Newspaper,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ApiSearch } from "@/components/api-search"

interface ApiItem {
  title: string
  description: string
  icon: React.ReactNode
  href: string
  iconBg: string
  badge: string
  examples: string[]
  keywords: string[]
  category: string
  featured?: boolean
  popular?: boolean
}

export default function DocsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredApis, setFilteredApis] = useState<ApiItem[]>([])
  const [activeCategory, setActiveCategory] = useState("all")
  const [isSearching, setIsSearching] = useState(false)
  const [showNoResults, setShowNoResults] = useState(false)
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // Use a ref to track if this is the initial render
  const isInitialMount = useRef(true)

  // Updated APIs with new JKT48 features
  const apis: ApiItem[] = [
    {
      title: "Live API",
      description: "Get accurate live jkt48 data in real-time idn and also showroom directly.",
      icon: <Video className="h-8 w-8 text-primary" />,
      href: "/docs/live",
      iconBg: "bg-primary/10",
      badge: "v2.0",
      examples: ["Get Data Live Delynn", "All Live Member", "Live Video Url", "Live YouTube Info", "Live IDN Info"],
      keywords: ["live", "live jkt48", "jkt48", "member live", "top", "youtube", "idn", "showroom"],
      category: "jkt48",
      featured: true,
    },
    {
      title: "IDN API",
      description: "all live member data in real time on the IDN application platform.",
      icon: <Video className="h-8 w-8 text-primary" />,
      href: "/docs/idn",
      iconBg: "bg-primary/10",
      badge: "v2.0",
      examples: ["Idn live", "Live idn jkt48", "Live", "live jkt48", "Jkt48", "IDN Chat Stream"],
      keywords: ["idn", "idn live", "realtime", "jkt48 live member", "member jkt48", "chat stream"],
      category: "jkt48",
    },
    {
      title: "Showroom API",
      description: "All live JKT48 member data in real time on the Showroom application.",
      icon: <Video className="h-8 w-8 text-primary" />,
      href: "/docs/showroom",
      iconBg: "bg-primary/10",
      badge: "v2.0",
      examples: ["Live Kramat Kwkwk", "Live Showroom", "Freya SR😱", "Showroom Chat Stream"],
      keywords: ["jkt48", "Live Showroom", "Showroom", "SR", "Live jkt48", "chat stream"],
      category: "jkt48",
    },
    {
      title: "Recent Live API",
      description: "Displays data on JKT48 members who previously went live along with the total nominal gift.",
      icon: <Wrench className="h-8 w-8 text-primary" />,
      href: "/docs/recent",
      iconBg: "bg-primary/10",
      badge: "v2.0",
      examples: ["Total Gift Delynn", "Waktu Live Freya", "Recent Detail", "Live Activity"],
      keywords: ["jkt48", "Recent live", "Live Gift", "Gift total", "Live jkt48", "recent detail"],
      category: "jkt48",
    },
    {
      title: "Members API",
      description: "Get comprehensive JKT48 member information including profiles, details, and birthdays.",
      icon: <Users className="h-8 w-8 text-primary" />,
      href: "/docs/members",
      iconBg: "bg-blue-500/10",
      badge: "v2.0",
      examples: ["Get All Members", "Member Details by Name", "Birthday List", "Feni Profile"],
      keywords: ["jkt48", "members", "profile", "birthday", "member detail", "feni", "member list"],
      category: "jkt48",
      featured: true,
    },
    {
      title: "Events API",
      description: "Access JKT48 event information and schedules.",
      icon: <Calendar className="h-8 w-8 text-primary" />,
      href: "/docs/events",
      iconBg: "bg-green-500/10",
      badge: "v2.0",
      examples: ["Upcoming Events", "Event Schedule", "Concert Info", "Meet & Greet"],
      keywords: ["jkt48", "events", "schedule", "concert", "meet greet", "calendar"],
      category: "jkt48",
    },
    {
      title: "News API",
      description: "Get latest JKT48 news and detailed news information.",
      icon: <Newspaper className="h-8 w-8 text-primary" />,
      href: "/docs/news",
      iconBg: "bg-yellow-500/10",
      badge: "v2.0",
      examples: ["Latest News", "News Details", "Announcements", "Member Updates"],
      keywords: ["jkt48", "news", "announcements", "updates", "news detail", "latest"],
      category: "jkt48",
    },
    {
      title: "Theater API",
      description: "Access JKT48 theater show information and detailed schedules.",
      icon: <Tv className="h-8 w-8 text-primary" />,
      href: "/docs/theater",
      iconBg: "bg-purple-500/10",
      badge: "v2.0",
      examples: ["Theater Schedule", "Show Details", "Performance Info", "Setlist"],
      keywords: ["jkt48", "theater", "show", "performance", "schedule", "setlist"],
      category: "jkt48",
    },
    {
      title: "YouTube API",
      description: "Get JKT48 YouTube content and video information.",
      icon: <Youtube className="h-8 w-8 text-primary" />,
      href: "/docs/youtube",
      iconBg: "bg-red-500/10",
      badge: "v2.0",
      examples: ["Latest Videos", "YouTube Content", "Music Videos", "Variety Shows"],
      keywords: ["jkt48", "youtube", "videos", "music video", "variety", "content"],
      category: "jkt48",
    },
    {
      title: "Replay API",
      description: "Access JKT48 replay data and archived live streams.",
      icon: <Play className="h-8 w-8 text-primary" />,
      href: "/docs/replay",
      iconBg: "bg-indigo-500/10",
      badge: "v2.0",
      examples: ["Replay Data", "Archived Streams", "Past Lives", "Replay Links"],
      keywords: ["jkt48", "replay", "archive", "past live", "recorded", "stream"],
      category: "jkt48",
    },
    {
      title: "Chat Stream API",
      description: "Get real-time chat stream data from IDN and Showroom platforms.",
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      href: "/docs/chat-stream",
      iconBg: "bg-cyan-500/10",
      badge: "v2.0 NEW",
      examples: ["IDN Chat Stream", "Showroom Chat Stream", "Real-time Messages", "Chat Data"],
      keywords: ["jkt48", "chat", "stream", "real-time", "idn chat", "showroom chat", "messages"],
      category: "jkt48",
      popular: true,
    },
    {
      title: "Brat API",
      description: "Generate images based on text input with our simple and secure API.",
      icon: <Image className="h-8 w-8 text-primary" />,
      href: "/comingsoon",
      iconBg: "bg-primary/10",
      badge: "v1",
      examples: ["Generate images from text", "Secure API key handling", "Direct image response"],
      keywords: ["brat", "image", "generate", "text-to-image", "ai"],
      category: "tools",
    },
    {
      title: "Brat Video API",
      description: "Generate videos based on text input with our simple and secure API.",
      icon: <Video className="h-8 w-8 text-primary" />,
      href: "/comingsoon",
      iconBg: "bg-primary/10",
      badge: "v1",
      examples: ["Generate videos from text", "Secure API key handling", "Direct video response"],
      keywords: ["brat", "video", "generate", "text-to-video", "ai"],
      category: "tools",
    },
    {
      title: "Instagram Downloader",
      description: "Download media from Instagram posts by providing the post URL.",
      icon: <Download className="h-8 w-8 text-primary" />,
      href: "/comingsoon",
      iconBg: "bg-primary/10",
      badge: "v1",
      examples: ["Download Instagram photos", "Download Instagram videos", "Get media thumbnails"],
      keywords: ["instagram", "download", "media", "photos", "videos", "social media"],
      category: "download",
      popular: true,
    },
    {
      title: "TikTok Downloader",
      description: "Download TikTok videos and audio by providing a valid TikTok video URL.",
      icon: <Music className="h-8 w-8 text-primary" />,
      href: "/comingsoon",
      iconBg: "bg-primary/10",
      badge: "v1",
      examples: ["Download TikTok videos", "Extract audio from TikTok", "Get video metadata"],
      keywords: ["tiktok", "download", "video", "audio", "social media"],
      category: "download",
      featured: true,
    },
    {
      title: "YouTube Downloader",
      description: "Download YouTube videos by providing a valid YouTube video URL.",
      icon: <Youtube className="h-8 w-8 text-primary" />,
      href: "/comingsoon",
      iconBg: "bg-primary/10",
      badge: "v1",
      examples: ["Download YouTube videos", "Extract audio from YouTube", "Get video information"],
      keywords: ["youtube", "download", "video", "audio", "mp3", "mp4"],
      category: "download",
      popular: true,
    },
    {
      title: "Anime API",
      description: "Access a vast collection of anime data sourced from Jikan API.",
      icon: <Tv className="h-8 w-8 text-primary" />,
      href: "/comingsoon",
      iconBg: "bg-primary/10",
      badge: "v1",
      examples: ["Search anime by title", "Filter by genre and rating", "Get detailed anime information"],
      keywords: ["anime", "jikan", "search", "filter", "genre", "rating"],
      category: "anime",
      popular: true,
    },
    {
      title: "Otakudesu API",
      description: "Access anime data from Otakudesu including ongoing and completed anime listings.",
      icon: <Tv className="h-8 w-8 text-primary" />,
      href: "/comingsoon",
      iconBg: "bg-primary/10",
      badge: "v1",
      examples: ["Get ongoing anime", "Get completed anime", "Search anime by keyword"],
      keywords: ["anime", "otakudesu", "ongoing", "completed", "episodes", "genre"],
      category: "anime",
    },
    {
      title: "Waifu API",
      description: "Access anime-themed images categorized under SFW (Safe for Work).",
      icon: <Image className="h-8 w-8 text-primary" />,
      href: "/comingsoon",
      iconBg: "bg-primary/10",
      badge: "v1.1",
      examples: ["Get random waifu images", "Multiple image categories", "Direct image responses"],
      keywords: ["anime", "waifu", "neko", "images", "sfw"],
      category: "anime",
      featured: true,
    },
  ]

  // Updated categories with icons
  const categories = [
    { id: "all", name: "All APIs", icon: <Zap className="h-4 w-4 mr-2" />, count: apis.length },
    {
      id: "jkt48",
      name: "JKT48",
      icon: <Users className="h-4 w-4 mr-2" />,
      count: apis.filter((api) => api.category === "jkt48").length,
    },
    {
      id: "tools",
      name: "Tools",
      icon: <Wrench className="h-4 w-4 mr-2" />,
      count: apis.filter((api) => api.category === "tools").length,
    },
    {
      id: "download",
      name: "Download",
      icon: <Download className="h-4 w-4 mr-2" />,
      count: apis.filter((api) => api.category === "download").length,
    },
    {
      id: "anime",
      name: "Anime",
      icon: <Tv className="h-4 w-4 mr-2" />,
      count: apis.filter((api) => api.category === "anime").length,
    },
  ]

  // Function to filter APIs based on search query and category
  const filterApis = useCallback(() => {
    setIsSearching(true)

    let results = [...apis]

    // Filter by category
    if (activeCategory !== "all") {
      results = results.filter((api) => api.category === activeCategory)
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      results = results.filter((api) => {
        return (
          api.title.toLowerCase().includes(query) ||
          api.description.toLowerCase().includes(query) ||
          api.examples.some((example) => example.toLowerCase().includes(query)) ||
          api.keywords.some((keyword) => keyword.toLowerCase().includes(query))
        )
      })
    }

    setFilteredApis(results)
    setShowNoResults(results.length === 0)
    setIsSearching(false)
  }, [searchQuery, activeCategory])

  // Initial load - set all APIs
  useEffect(() => {
    if (isInitialMount.current) {
      setFilteredApis(apis)
      isInitialMount.current = false
    }
  }, [])

  // Effect for filtering when search or category changes
  useEffect(() => {
    // Skip on initial mount as we already set the APIs
    if (!isInitialMount.current) {
      const timer = setTimeout(() => {
        filterApis()
      }, 300)

      return () => clearTimeout(timer)
    }
  }, [searchQuery, activeCategory])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    setIsFilterOpen(false)
  }

  const clearFilters = () => {
    setSearchQuery("")
    setActiveCategory("all")
    setIsFilterOpen(false)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  }

  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.4 },
    },
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20 max-w-6xl mx-auto">
      <motion.div
        className="space-y-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header Section */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4"
          >
            <Cloud className="h-6 w-6 text-primary" />
          </motion.div>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            API Documentation
          </h1>
          <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
            Explore our collection of powerful and easy-to-use APIs designed to enhance your applications with JKT48 v2.0 features.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="space-y-6">
          <ApiSearch
            onSearch={handleSearch}
            placeholder="Search APIs by name, features, or keywords..."
            value={searchQuery}
          />

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="relative w-full sm:w-auto">
              <Button
                variant="outline"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="w-full sm:w-auto flex items-center gap-2 border-primary/20 hover:bg-primary/5"
              >
                <Filter className="h-4 w-4" />
                Filter by Category
                <Badge variant="secondary" className="ml-2">
                  {activeCategory === "all" ? "All" : categories.find((c) => c.id === activeCategory)?.name}
                </Badge>
              </Button>

              <AnimatePresence>
                {isFilterOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute z-10 mt-2 w-full sm:w-64 bg-background rounded-lg border shadow-lg p-2"
                  >
                    <div className="space-y-1">
                      {categories.map((category) => (
                        <Button
                          key={category.id}
                          variant={activeCategory === category.id ? "default" : "ghost"}
                          className="w-full justify-start"
                          onClick={() => handleCategoryChange(category.id)}
                        >
                          <div className="flex items-center justify-between w-full">
                            <div className="flex items-center">
                              {category.icon}
                              {category.name}
                            </div>
                            <Badge variant="outline" className="ml-auto">
                              {category.count}
                            </Badge>
                          </div>
                        </Button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {(searchQuery || activeCategory !== "all") && (
              <Button
                variant="outline"
                size="sm"
                onClick={clearFilters}
                className="w-full sm:w-auto flex items-center gap-2"
              >
                <Filter className="h-4 w-4" />
                Clear Filters
              </Button>
            )}
          </div>

          {/* Active filters display */}
          {activeCategory !== "all" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <span>Active filter:</span>
              <Badge variant="secondary" className="flex items-center gap-1">
                {categories.find((c) => c.id === activeCategory)?.icon}
                {categories.find((c) => c.id === activeCategory)?.name}
                <button
                  onClick={() => setActiveCategory("all")}
                  className="ml-1 hover:text-primary"
                  aria-label="Remove filter"
                >
                  ×
                </button>
              </Badge>
            </motion.div>
          )}
        </div>

        {/* API List Section */}
        <AnimatePresence mode="wait">
          {isSearching ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-center py-20"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                <p className="text-muted-foreground">Searching APIs...</p>
              </div>
            </motion.div>
          ) : showNoResults ? (
            <motion.div
              key="no-results"
              variants={fadeVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="text-center py-16 bg-muted/30 rounded-xl border border-muted"
            >
              <div className="max-w-md mx-auto space-y-4">
                <div className="inline-flex items-center justify-center p-3 bg-muted rounded-full">
                  <Search className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold">No APIs found</h3>
                <p className="text-muted-foreground">
                  We couldn't find any APIs matching your search criteria. Try adjusting your search or filters.
                </p>
                <Button onClick={clearFilters} className="mt-2">
                  Clear all filters
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="results"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            >
              {filteredApis.map((api) => (
                <motion.div key={api.title} variants={itemVariants} className="h-full">
                  <Link href={api.href} className="block h-full">
                    <Card className="h-full transition-all hover:shadow-lg hover:border-primary/20 hover:bg-muted/30 relative overflow-hidden group">
                      {/* Category badge */}
                      <div className="absolute top-3 left-3">
                        <Badge
                          variant="secondary"
                          className={`
                          flex items-center gap-1 text-xs font-medium
                          ${api.category === "jkt48" ? "bg-pink-500/10 text-pink-600 dark:text-pink-400" : ""}
                          ${api.category === "tools" ? "bg-blue-500/10 text-blue-600 dark:text-blue-400" : ""}
                          ${api.category === "download" ? "bg-green-500/10 text-green-600 dark:text-green-400" : ""}
                          ${api.category === "anime" ? "bg-purple-500/10 text-purple-600 dark:text-purple-400" : ""}
                        `}
                        >
                          {api.category === "jkt48" && <Users className="h-3 w-3 mr-1" />}
                          {api.category === "tools" && <Wrench className="h-3 w-3 mr-1" />}
                          {api.category === "download" && <Download className="h-3 w-3 mr-1" />}
                          {api.category === "anime" && <Tv className="h-3 w-3 mr-1" />}
                          {api.category.charAt(0).toUpperCase() + api.category.slice(1)}
                        </Badge>
                      </div>

                      {/* Featured or Popular Badge */}
                      {(api.featured || api.popular) && (
                        <div className="absolute top-0 right-0">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <div
                                  className={`p-1.5 ${api.featured ? "bg-amber-500/90" : "bg-primary/90"} text-white rounded-bl-lg`}
                                >
                                  {api.featured ? <Star className="h-4 w-4" /> : <TrendingUp className="h-4 w-4" />}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{api.featured ? "Featured API" : "Popular API"}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      )}

                      <CardHeader className="pt-12 pb-3">
                        <div className="flex justify-between items-start">
                          <div
                            className={`p-3 ${api.iconBg} rounded-xl w-fit mb-4 transition-transform group-hover:scale-110`}
                          >
                            {api.icon}
                          </div>
                          <Badge 
                            variant="outline" 
                            className={`transition-colors group-hover:bg-primary/10 ${
                              api.badge.includes('NEW') ? 'bg-green-500/10 text-green-600 border-green-500/20' : ''
                            }`}
                          >
                            {api.badge}
                          </Badge>
                        </div>
                        <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                          {api.title}
                        </CardTitle>
                        <CardDescription className="text-base mt-2">{api.description}</CardDescription>
                      </CardHeader>

                      <CardContent>
                        <div className="space-y-2">
                          <h4 className="text-sm font-medium text-muted-foreground">Examples:</h4>
                          <ul className="space-y-1.5">
                            {api.examples.map((example, i) => (
                              <li key={i} className="flex items-start text-sm">
                                <div className="mr-2 mt-0.5 h-3 w-3 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                                </div>
                                <span>{example}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>

                      <CardFooter>
                        <div className="flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform">
                          View Documentation
                          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </CardFooter>

                      {/* Hover effect overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-muted/50 rounded-xl border border-muted/80 relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-3 text-center md:text-left">
              <h3 className="text-2xl font-bold">Need a custom API solution?</h3>
              <p className="text-muted-foreground max-w-md">
                Our team can develop tailored API solutions to meet your specific business requirements.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="mailto:fort@vtxgroup.my.id">
                <Button size="lg" className="w-full sm:w-auto">
                  Contact Us
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <Link href="/">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
