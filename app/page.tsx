
"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion, useAnimation } from "framer-motion"
import { 
  ArrowRight, 
  Cloud, 
  Code, 
  Download, 
  Image, 
  Tv, 
  Youtube, 
  Music, 
  FileSpreadsheet, 
  Mic, 
  Mountain,
  Play,
  Copy,
  Sparkles,
  Zap,
  Shield,
  Rocket,
  Star,
  ChevronRight,
  CheckCircle,
  Globe,
  Users,
  Activity
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useInView } from "react-intersection-observer"
import { toast } from "@/lib/utils"
import ServerStats from "./ServerStats"

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      <div className="flex-1">
        {/* Hero Section - Completely Redesigned */}
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-pink-600/10" />
            
            {/* Animated Orbs */}
            {isLoaded && (
              <>
                <motion.div
                  className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-3xl"
                  animate={{
                    x: [0, 50, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
                <motion.div
                  className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-pink-400/20 to-rose-400/20 blur-3xl"
                  animate={{
                    x: [0, -60, 0],
                    y: [0, 60, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
                <motion.div
                  className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-gradient-to-r from-green-400/15 to-teal-400/15 blur-3xl"
                  animate={{
                    x: [0, 40, 0],
                    y: [0, -40, 0],
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </>
            )}
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <motion.div
              className="max-w-5xl mx-auto text-center"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              {/* Badge */}
              <motion.div variants={fadeInUp} className="mb-8">
                <Badge className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 shadow-lg">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Now with Real-time Data
                </Badge>
              </motion.div>

              {/* Main Heading */}
              <motion.div variants={fadeInUp}>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    JKT48
                  </span>
                  <br />
                  <span className="text-slate-800 dark:text-slate-100">
                    API Platform
                  </span>
                </h1>
              </motion.div>

              {/* Subtitle */}
              <motion.p 
                variants={fadeInUp}
                className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed"
              >
                The most comprehensive and reliable API ecosystem for JKT48 data, 
                content downloads, AI services, and payment processing.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
              >
                <Link href="/docs">
                  <Button 
                    size="lg" 
                    className="group px-8 py-4 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0 shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    <Rocket className="w-5 h-5 mr-2" />
                    Start Building
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="px-8 py-4 text-lg font-semibold border-2 border-slate-300 hover:border-slate-400 bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-300"
                >
                  <Play className="w-5 h-5 mr-2" />
                  View Demo
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div 
                variants={fadeInUp}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-800 dark:text-slate-100">50+</div>
                  <div className="text-slate-600 dark:text-slate-400">API Endpoints</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-800 dark:text-slate-100">99.9%</div>
                  <div className="text-slate-600 dark:text-slate-400">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-800 dark:text-slate-100">1M+</div>
                  <div className="text-slate-600 dark:text-slate-400">API Calls/Month</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Live Stats Section - Enhanced */}
        <section className="w-full py-20 bg-white/50 dark:bg-slate-900 backdrop-blur-sm border-y border-slate-200 dark:border-slate-700">
          <div className="container px-4 md:px-6">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
                <Activity className="w-4 h-4 mr-2" />
                Live Status
              </Badge>
              <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
                Real-time Platform Statistics
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                Monitor our API performance and usage statistics in real-time
              </p>
            </motion.div>
            
            <ServerStats />
          </div>
        </section>

        {/* Service Categories - Modern Cards */}
        <section className="w-full py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
          <div className="container px-4 md:px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
                <Globe className="w-4 h-4 mr-2" />
                API Categories
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-6">
                Complete API Ecosystem
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                From JKT48 live data to AI-powered services, we've got everything you need
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* JKT48 Card */}
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-xl bg-gradient-to-br from-pink-500 to-rose-600 text-white overflow-hidden relative">
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
                  <CardHeader className="relative z-10">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                      <Music className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-2xl font-bold">JKT48</CardTitle>
                    <CardDescription className="text-white/90">
                      Real-time member data, live streams, and exclusive content
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <div className="flex items-center text-sm text-white/80">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      15+ Endpoints
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Downloader Card */}
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white overflow-hidden relative">
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
                  <CardHeader className="relative z-10">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                      <Download className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-2xl font-bold">Downloader</CardTitle>
                    <CardDescription className="text-white/90">
                      Multi-platform content downloading services
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <div className="flex items-center text-sm text-white/80">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      20+ Platforms
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Payment Gateway Card */}
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white overflow-hidden relative">
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
                  <CardHeader className="relative z-10">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                      <Shield className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-2xl font-bold">Payment</CardTitle>
                    <CardDescription className="text-white/90">
                      Secure payment processing and gateway services
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <div className="flex items-center text-sm text-white/80">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Bank Transfer
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* AI Card */}
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-xl bg-gradient-to-br from-blue-500 to-cyan-600 text-white overflow-hidden relative">
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
                  <CardHeader className="relative z-10">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                      <Sparkles className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-2xl font-bold">AI Services</CardTitle>
                    <CardDescription className="text-white/90">
                      Advanced AI-powered tools and automation
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <div className="flex items-center text-sm text-white/80">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      10+ AI Tools
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* JKT48 APIs - Enhanced Grid */}
        <section className="w-full py-24 bg-white dark:bg-slate-900">
          <div className="container px-4 md:px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-pink-100 text-pink-800 border-pink-200">
                <Users className="w-4 h-4 mr-2" />
                JKT48 Specialized
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-6">
                JKT48 API Collection
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Comprehensive APIs designed specifically for JKT48 fans and developers
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Cloud,
                  title: "Live API",
                  description: "Real-time streaming data from IDN and Showroom platforms",
                  link: "/docs/live",
                  gradient: "from-blue-500 to-indigo-600"
                },
                {
                  icon: Tv,
                  title: "IDN API",
                  description: "Complete IDN platform integration with member data",
                  link: "/docs/idn",
                  gradient: "from-purple-500 to-pink-600"
                },
                {
                  icon: Youtube,
                  title: "Showroom API",
                  description: "Live member data from Showroom streaming platform",
                  link: "/docs/showroom",
                  gradient: "from-orange-500 to-red-600"
                },
                {
                  icon: Image,
                  title: "Recent Live API",
                  description: "Historical live data with gift totals and statistics",
                  link: "/docs/recent",
                  gradient: "from-green-500 to-emerald-600"
                },
                {
                  icon: Music,
                  title: "Member Profile API",
                  description: "Comprehensive member profiles and information",
                  link: "/docs/members",
                  gradient: "from-pink-500 to-rose-600"
                },
                {
                  icon: Play,
                  title: "Performance API",
                  description: "Theater performances, setlists, and show schedules",
                  link: "/docs/performances",
                  gradient: "from-cyan-500 to-blue-600"
                }
              ].map((api, index) => (
                <motion.div
                  key={api.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="h-full border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${api.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <api.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-slate-800 dark:text-slate-100">
                        {api.title}
                      </CardTitle>
                      <CardDescription className="text-slate-600 dark:text-slate-400">
                        {api.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <Link href={api.link}>
                        <Button 
                          variant="ghost" 
                          className="w-full justify-between group-hover:bg-slate-100 dark:group-hover:bg-slate-800 transition-colors duration-300"
                        >
                          View Documentation
                          <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Code Example Section - Enhanced */}
        <section className="w-full py-24 bg-slate-50 dark:bg-slate-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                  <Code className="w-4 h-4 mr-2" />
                  Developer Experience
                </Badge>
                
                <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100">
                  Built for Developers
                </h2>
                
                <p className="text-lg text-slate-600 dark:text-slate-400">
                  Our APIs are designed with simplicity and power in mind. Clean responses, 
                  comprehensive documentation, and reliable uptime.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Zap, label: "Fast Response", desc: "< 100ms avg" },
                    { icon: Shield, label: "Secure", desc: "API Key Auth" },
                    { icon: Globe, label: "Global CDN", desc: "Worldwide" },
                    { icon: CheckCircle, label: "Reliable", desc: "99.9% uptime" }
                  ].map((feature, index) => (
                    <div key={feature.label} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                        <feature.icon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-800 dark:text-slate-100">{feature.label}</div>
                        <div className="text-sm text-slate-500 dark:text-slate-400">{feature.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <Link href="/docs">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Explore All APIs
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
                <Card className="relative border-0 shadow-2xl overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-slate-800 to-slate-900 text-white">
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        Live Example
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="bg-slate-900 text-green-400 p-6 font-mono text-sm overflow-x-auto">
                      <div className="text-slate-400 mb-2">// GET Request</div>
                      <div className="text-blue-400">curl</div>
                      <div className="ml-4 text-white">-X GET "https://api.jkt48connect.my.id/api/live"</div>
                      <div className="ml-4 text-white">-H "Authorization: Bearer YOUR_API_KEY"</div>
                      
                      <div className="text-slate-400 mt-4 mb-2">// Response</div>
                      <div className="text-yellow-400">{`{
  "status": "success",
  "data": [`}</div>
                      <div className="ml-4 text-white">{`{
    "name": "Fritzy",
    "room_id": 510011,
    "is_live": true,
    "viewers": 1542,
    "started_at": "2025-06-02T10:30:00Z"
  }`}</div>
                      <div className="text-yellow-400">{`  ]
}`}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="w-full py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <motion.div 
              className="max-w-4xl mx-auto text-center text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm mb-8">
                <Star className="w-5 h-5 mr-2" />
                <span className="font-medium">Ready to Start Building?</span>
              </div>

              <h2 className="text-5xl md:text-6xl font-black mb-6">
                Get Your API Key
              </h2>
              
              <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-2xl mx-auto">
                Join thousands of developers building amazing applications with our robust API platform
              </p>

              <ApiKeyGenerationForm />

              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold mb-2">Instant Setup</h3>
                  <p className="text-sm opacity-80">Get started in seconds with your API key</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold mb-2">Secure & Reliable</h3>
                  <p className="text-sm opacity-80">Enterprise-grade security and uptime</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold mb-2">24/7 Support</h3>
                  <p className="text-sm opacity-80">Expert support when you need it</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}

// Enhanced API Key Generation Form
function ApiKeyGenerationForm() {
  const [isLoading, setIsLoading] = useState(false)

  const handleGetApiKey = async () => {
    setIsLoading(true)
    
    // Add some loading delay for better UX
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const waText = encodeURIComponent("Hi! I'd like to generate an API key for the JKT48 API platform. Could you please help me get started?")
    const waLink = `https://wa.me/6285198360849?text=${waText}`
  
    window.open(waLink, '_blank')
    setIsLoading(false)
  }

  return (
    <motion.div 
      className="max-w-md mx-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="border-0 bg-white/10 backdrop-blur-md shadow-2xl">
        <CardContent className="p-6">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Rocket className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Get Started Today</h3>
            <p className="text-white/80 text-sm">
              Contact us via WhatsApp to get your API key instantly
            </p>
          </div>

          <Button
            onClick={handleGetApiKey}
            disabled={isLoading}
            size="lg"
            className="w-full bg-white text-blue-600 hover:bg-white/90 font-semibold text-lg py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-blue-600/20 border-t-blue-600 rounded-full animate-spin mr-2" />
                Connecting...
              </>
            ) : (
              <>
                <span className="mr-2">💬</span>
                Get API Key via WhatsApp
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </>
            )}
          </Button>

          <div className="mt-4 text-center">
            <p className="text-xs text-white/60">
              Free tier available • No credit card required
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Additional Info Cards */}
      <div className="mt-6 grid grid-cols-2 gap-3">
        <Card className="border-0 bg-white/5 backdrop-blur-sm">
          <CardContent className="p-4 text-center">
            <CheckCircle className="h-5 w-5 text-green-400 mx-auto mb-2" />
            <p className="text-sm text-white font-medium">Free Tier</p>
            <p className="text-xs text-white/60">1000 calls/month</p>
          </CardContent>
        </Card>
        
        <Card className="border-0 bg-white/5 backdrop-blur-sm">
          <CardContent className="p-4 text-center">
            <Zap className="h-5 w-5 text-yellow-400 mx-auto mb-2" />
            <p className="text-sm text-white font-medium">Instant Setup</p>
            <p className="text-xs text-white/60">Ready in minutes</p>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  )
}
