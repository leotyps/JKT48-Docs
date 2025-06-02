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
  Video,
  Star,
  TrendingUp,
  Filter,
  Search,
  Zap,
  Wrench,
  Users,
  Tv,
  ChevronDown,
  Sparkles,
  BookOpen,
  Code2,
  Activity,
  Globe,
  Mail,
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
  version?: string
  status: "stable" | "beta" | "new"
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

  // Enhanced APIs with more detailed information
  const apis: ApiItem[] = [
    {
      title: "Live Streaming API",
      description: "Real-time JKT48 live streaming data with multi-platform support including IDN, YouTube, and Showroom integration.",
      icon: <Video className="h-8 w-8 text-primary" />,
      href: "/docs/live",
      iconBg: "bg-gradient-to-br from-red-500/10 to-pink-500/10",
      badge: "v2.1",
      examples: ["Real-time member status", "Live viewer counts", "Stream quality info", "Chat integration", "Recording availability"],
      keywords: ["live", "streaming", "jkt48", "realtime", "youtube", "idn", "showroom"],
      category: "jkt48",
      featured: true,
      status: "stable",
      version: "2.1.0"
    },
    {
      title: "IDN Live API",
      description: "Comprehensive IDN platform integration for JKT48 live streams with advanced chat and interaction features.",
      icon: <Activity className="h-8 w-8 text-primary" />,
      href: "/docs/idn",
      iconBg: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10",
      badge: "v2.0",
      examples: ["IDN live status", "Chat stream data", "Member interactions", "Viewer analytics", "Platform notifications"],
      keywords: ["idn", "live", "chat", "streaming", "jkt48", "interactions"],
      category: "jkt48",
      popular: true,
      status: "stable",
      version: "2.0.3"
    },
    {
      title: "Member Profile API",
      description: "Complete JKT48 member information including profiles, social media, and activity tracking.",
      icon: <Users className="h-8 w-8 text-primary" />,
      href: "/docs/members",
      iconBg: "bg-gradient-to-br from-purple-500/10 to-pink-500/10",
      badge: "NEW",
      examples: ["Member profiles", "Social media links", "Recent activities", "Photo galleries", "Fan interactions"],
      keywords: ["members", "profiles", "jkt48", "social", "activities"],
      category: "jkt48",
      status: "new",
      version: "1.0.0"
    },
    {
      title: "Content Download API",
      description: "High-quality media download service for videos, images, and audio content from multiple platforms.",
      icon: <Download className="h-8 w-8 text-primary" />,
      href: "/docs/download",
      iconBg: "bg-gradient-to-br from-green-500/10 to-emerald-500/10",
      badge: "v1.8",
      examples: ["Video downloads", "Image processing", "Audio extraction", "Batch downloads", "Format conversion"],
      keywords: ["download", "media", "video", "audio", "converter"],
      category: "download",
      status: "stable",
      version: "1.8.2"
    },
    {
      title: "Anime Database API",
      description: "Comprehensive anime information database with advanced search and recommendation features.",
      icon: <Tv className="h-8 w-8 text-primary" />,
      href: "/docs/anime",
      iconBg: "bg-gradient-to-br from-indigo-500/10 to-purple-500/10",
      badge: "v3.2",
      examples: ["Anime search", "Episode tracking", "Character info", "Recommendations", "Reviews & ratings"],
      keywords: ["anime", "database", "search", "episodes", "characters"],
      category: "anime",
      status: "stable",
      version: "3.2.1"
    },
    {
      title: "Utility Tools API",
      description: "Collection of powerful utility tools including text processing, image manipulation, and data analysis.",
      icon: <Wrench className="h-8 w-8 text-primary" />,
      href: "/docs/tools",
      iconBg: "bg-gradient-to-br from-orange-500/10 to-yellow-500/10",
      badge: "v2.5",
      examples: ["Text processing", "Image editing", "Data conversion", "QR codes", "URL shortening"],
      keywords: ["tools", "utilities", "processing", "conversion", "generator"],
      category: "tools",
      status: "beta",
      version: "2.5.0-beta"
    },
  ]

  // Enhanced categories with better organization
  const categories = [
    { 
      id: "all", 
      name: "All APIs", 
      icon: <Globe className="h-4 w-4" />, 
      count: apis.length,
      description: "Browse all available APIs"
    },
    {
      id: "jkt48",
      name: "JKT48",
      icon: <Users className="h-4 w-4" />,
      count: apis.filter((api) => api.category === "jkt48").length,
      description: "JKT48 member and streaming APIs"
    },
    {
      id: "download",
      name: "Download",
      icon: <Download className="h-4 w-4" />,
      count: apis.filter((api) => api.category === "download").length,
      description: "Media download and conversion"
    },
    {
      id: "anime",
      name: "Anime",
      icon: <Tv className="h-4 w-4" />,
      count: apis.filter((api) => api.category === "anime").length,
      description: "Anime database and information"
    },
    {
      id: "tools",
      name: "Tools",
      icon: <Wrench className="h-4 w-4" />,
      count: apis.filter((api) => api.category === "tools").length,
      description: "Utility tools and generators"
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
      case "beta":
        return "bg-orange-500/10 text-orange-600 border-orange-500/20"
      default:
        return "bg-blue-500/10 text-blue-600 border-blue-500/20"
    }
  }

  const getCategoryGradient = (category: string) => {
    switch (category) {
      case "jkt48":
        return "from-pink-500/20 via-red-500/10 to-purple-500/20"
      case "download":
        return "from-green-500/20 via-emerald-500/10 to-teal-500/20"
      case "anime":
        return "from-purple-500/20 via-indigo-500/10 to-blue-500/20"
      case "tools":
        return "from-orange-500/20 via-yellow-500/10 to-red-500/20"
      default:
        return "from-primary/20 via-primary/10 to-primary/20"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20 max-w-7xl mx-auto">
        <motion.div
          className="space-y-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Enhanced Header Section */}
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="absolute -top-24 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
            </div>
            
            <div className="text-center max-w-4xl mx-auto space-y-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl mb-6 border border-primary/10"
              >
                <Cloud className="h-8 w-8 text-primary mr-3" />
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  API v2.0
                </Badge>
              </motion.div>
              
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                API Documentation
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Powerful, reliable, and easy-to-use APIs designed to supercharge your applications with 
                <span className="text-primary font-semibold"> JKT48 v2.0 features</span> and beyond.
              </motion.p>

              {/* Quick stats */}
              <motion.div 
                className="flex flex-wrap justify-center gap-6 pt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full border">
                  <Code2 className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">{apis.length} APIs Available</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full border">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Always Updated</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full border">
                  <BookOpen className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Well Documented</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Enhanced Search and Filter Section */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="max-w-2xl mx-auto">
              <ApiSearch
                onSearch={handleSearch}
                placeholder="Search APIs by name, features, or keywords..."
                value={searchQuery}
              />
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              {/* Category Filter */}
              <div className="relative w-full lg:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="w-full lg:w-auto flex items-center gap-3 border-primary/20 hover:bg-primary/5 h-12 px-6"
                >
                  <Filter className="h-5 w-5" />
                  <span className="font-medium">Filter by Category</span>
                  <Badge variant="secondary" className="ml-2 bg-primary/10 text-primary">
                    {activeCategory === "all" ? "All" : categories.find((c) => c.id === activeCategory)?.name}
                  </Badge>
                  <ChevronDown className={`h-4 w-4 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
                </Button>

                <AnimatePresence>
                  {isFilterOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute z-20 mt-2 w-full lg:w-80 bg-background/95 backdrop-blur-lg rounded-xl border shadow-2xl p-3"
                    >
                      <div className="space-y-2">
                        {categories.map((category) => (
                          <Button
                            key={category.id}
                            variant={activeCategory === category.id ? "default" : "ghost"}
                            className="w-full justify-start p-4 h-auto flex-col items-start"
                            onClick={() => handleCategoryChange(category.id)}
                          >
                            <div className="flex items-center justify-between w-full mb-1">
                              <div className="flex items-center gap-2">
                                {category.icon}
                                <span className="font-medium">{category.name}</span>
                              </div>
                              <Badge variant="outline" className="ml-auto">
                                {category.count}
                              </Badge>
                            </div>
                            <p className="text-xs text-muted-foreground text-left">
                              {category.description}
                            </p>
                          </Button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Active Filters Display */}
              {(searchQuery || activeCategory !== "all") && (
                <div className="flex items-center gap-4">
                  {activeCategory !== "all" && (
                    <Badge variant="secondary" className="flex items-center gap-2 px-3 py-1.5">
                      {categories.find((c) => c.id === activeCategory)?.icon}
                      {categories.find((c) => c.id === activeCategory)?.name}
                      <button
                        onClick={() => setActiveCategory("all")}
                        className="ml-1 hover:text-primary transition-colors"
                        aria-label="Remove category filter"
                      >
                        ×
                      </button>
                    </Badge>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={clearFilters}
                    className="flex items-center gap-2"
                  >
                    Clear All
                  </Button>
                </div>
              )}
            </div>
          </motion.div>

          {/* Enhanced API Cards Section */}
          <AnimatePresence mode="wait">
            {isSearching ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex justify-center py-24"
              >
                <div className="flex flex-col items-center gap-6">
                  <div className="relative">
                    <div className="animate-spin rounded-full h-16 w-16 border-4 border-primary/20 border-t-primary"></div>
                    <div className="absolute inset-0 rounded-full border-4 border-primary/10 animate-pulse"></div>
                  </div>
                  <div className="text-center space-y-2">
                    <p className="text-lg font-medium">Searching APIs...</p>
                    <p className="text-sm text-muted-foreground">Finding the perfect match for you</p>
                  </div>
                </div>
              </motion.div>
            ) : showNoResults ? (
              <motion.div
                key="no-results"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center py-20 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border border-muted backdrop-blur-sm"
              >
                <div className="max-w-md mx-auto space-y-6">
                  <div className="inline-flex items-center justify-center p-4 bg-muted/50 rounded-full">
                    <Search className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">No APIs found</h3>
                    <p className="text-muted-foreground">
                      We couldn't find any APIs matching "{searchQuery}". Try adjusting your search terms or explore different categories.
                    </p>
                  </div>
                  <Button onClick={clearFilters} size="lg" className="mt-4">
                    <Sparkles className="h-4 w-4 mr-2" />
                    Explore All APIs
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
                className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              >
                {filteredApis.map((api) => (
                  <motion.div key={api.title} variants={itemVariants} className="h-full">
                    <Link href={api.href} className="block h-full group">
                      <Card className="h-full transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 hover:-translate-y-2 relative overflow-hidden bg-gradient-to-br from-background to-muted/10 backdrop-blur-sm">
                        {/* Gradient overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryGradient(api.category)} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                        
                        {/* Status indicators */}
                        <div className="absolute top-4 left-4 z-10">
                          <Badge variant="secondary" className={getStatusColor(api.status)}>
                            {api.status.toUpperCase()}
                          </Badge>
                        </div>

                        {/* Featured/Popular indicator */}
                        {(api.featured || api.popular) && (
                          <div className="absolute top-4 right-4 z-10">
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <div className={`p-2 rounded-full ${api.featured ? "bg-amber-500/90" : "bg-primary/90"} text-white shadow-lg`}>
                                    {api.featured ? <Star className="h-4 w-4" /> : <TrendingUp className="h-4 w-4" />}
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>{api.featured ? "Featured API" : "Popular Choice"}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                        )}

                        <CardHeader className="pt-16 pb-4 relative z-10">
                          <div className="flex justify-between items-start mb-4">
                            <div className={`p-4 ${api.iconBg} rounded-2xl w-fit transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg`}>
                              {api.icon}
                            </div>
                            <Badge variant="outline" className="bg-background/80 backdrop-blur-sm border-primary/20">
                              {api.badge}
                            </Badge>
                          </div>
                          
                          <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300 mb-2">
                            {api.title}
                          </CardTitle>
                          <CardDescription className="text-base leading-relaxed">
                            {api.description}
                          </CardDescription>
                        </CardHeader>

                        <CardContent className="relative z-10">
                          <div className="space-y-4">
                            <div>
                              <h4 className="text-sm font-semibold text-muted-foreground mb-3 flex items-center gap-2">
                                <Sparkles className="h-4 w-4" />
                                Key Features
                              </h4>
                              <div className="grid gap-2">
                                {api.examples.slice(0, 3).map((example, i) => (
                                  <div key={i} className="flex items-center text-sm bg-muted/30 rounded-lg px-3 py-2">
                                    <div className="mr-3 h-2 w-2 rounded-full bg-primary flex-shrink-0"></div>
                                    <span>{example}</span>
                                  </div>
                                ))}
                                {api.examples.length > 3 && (
                                  <div className="text-xs text-muted-foreground px-3 py-1">
                                    +{api.examples.length - 3} more features
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </CardContent>

                        <CardFooter className="relative z-10 pt-4">
                          <div className="flex items-center justify-between w-full">
                            <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform duration-300">
                              <BookOpen className="h-4 w-4 mr-2" />
                              View Documentation
                            </div>
                            <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                        </CardFooter>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Enhanced Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-20 relative"
          >
            <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-3xl border border-primary/20 p-8 md:p-12 relative overflow-hidden backdrop-blur-sm">
              {/* Background decorations */}
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                    Ready to get started?
                  </h3>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    Join thousands of developers using our APIs to build amazing applications. 
                    Need custom solutions? Our team is here to help you succeed.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="mailto:fort@vtxgroup.my.id">
                    <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                      <Mail className="mr-2 h-5 w-5" />
                      Contact Our Team
                    </Button>
                  </a>
                  <Link href="/">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto border-primary/20 hover:bg-primary/5 px-8 py-3 rounded-xl font-semibold">
                      <Globe className="mr-2 h-5 w-5" />
                      Explore More
                    </Button>
                  </Link>
                </div>

                {/* Contact info */}
                <div className="mt-8 pt-8 border-t border-primary/20 text-center">
                  <p className="text-sm text-muted-foreground mb-2">
                    Response time: Usually within 24 hours
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      API Status: Operational
                    </span>
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Uptime: 99.9%
                    </span>
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      Support: 24/7
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* API Statistics Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {[
              { label: "Total APIs", value: apis.length.toString(), icon: <Code2 className="h-5 w-5" />, color: "text-blue-600" },
              { label: "Active Users", value: "10K+", icon: <Users className="h-5 w-5" />, color: "text-green-600" },
              { label: "API Calls/Day", value: "1M+", icon: <Activity className="h-5 w-5" />, color: "text-purple-600" },
              { label: "Uptime", value: "99.9%", icon: <Zap className="h-5 w-5" />, color: "text-orange-600" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gradient-to-br from-background to-muted/20 rounded-2xl border border-muted/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`inline-flex items-center justify-center p-3 bg-muted/50 rounded-full mb-4 ${stat.color}`}>
                  {stat.icon}
                </div>
                <div className="space-y-1">
                  <p className="text-2xl md:text-3xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
