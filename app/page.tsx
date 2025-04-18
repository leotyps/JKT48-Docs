"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion, useAnimation } from "framer-motion"
import { ArrowRight, Cloud, Code, Download, Image, Tv, Youtube, Music, FileSpreadsheet, CreditCard, Brain, Mountain, Mic } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useInView } from "react-intersection-observer"

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

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-primary/10">
      <div className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-primary/15 z-10"></div>

          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            {isLoaded && (
              <>
                <motion.div
                  className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
                  animate={{
                    x: [0, 30, 0],
                    y: [0, -30, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />
                <motion.div
                  className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-secondary/10 blur-3xl"
                  animate={{
                    x: [0, -40, 0],
                    y: [0, 40, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />
                <motion.div
                  className="absolute top-1/2 right-1/4 w-72 h-72 rounded-full bg-primary/5 blur-3xl"
                  animate={{
                    x: [0, 50, 0],
                    y: [0, 20, 0],
                    scale: [1.1, 1.2, 1.1],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />
              </>
            )}
          </div>

          <div className="container px-4 md:px-6 relative z-20">
            <motion.div
              className="flex flex-col items-center space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="space-y-2 max-w-3xl mx-auto text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <motion.div
                  className="inline-block p-3 mb-6 bg-primary/10 rounded-full"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 1, type: "spring" }}
                >
                  <Cloud className="h-12 w-12 text-primary" />
                </motion.div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                  API Documentation
                </h1>
                <p className="mx-auto max-w-[700px] text-primary-foreground md:text-xl mt-6">
                  Powerful, reliable, and easy to integrate API services for your applications.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-10 flex justify-center w-full"
              >
                <Link href="/docs">
                  <Button size="lg" className="group bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg">
                    Explore Documentation
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 lg:py-32 bg-primary/5">
          <div className="container px-4 md:px-6">
            <motion.div 
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary-foreground">Choose a Category</h2>
              <p className="mt-4 text-primary-foreground/80 md:text-lg max-w-3xl mx-auto">
                Explore our collection of powerful APIs designed to enhance your applications
              </p>
            </motion.div>

            <motion.div
              ref={ref}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto"
              initial="hidden"
              animate={controls}
              variants={staggerContainer}
            >
              {/* JKT48 Card */}
              <motion.div
                variants={fadeIn}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-rose-500 to-rose-700 p-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-rose-600/40 to-rose-800/40"></div>
                <div className="flex flex-col h-full bg-primary/5 backdrop-blur-lg rounded-3xl relative z-10 p-8">
                  <div className="bg-rose-500/20 p-4 rounded-full w-fit mb-6">
                    <Tv className="h-8 w-8 text-rose-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-primary-foreground mb-4">JKT48</h3>
                  <p className="text-primary-foreground/80 text-lg mb-6">
                    Complete JKT48 data API services
                  </p>
                  <Link href="/docs/jkt48" className="mt-auto">
                    <Button 
                      className="bg-rose-600 hover:bg-rose-700 text-white rounded-full px-6 py-3 w-full"
                    >
                      Explore
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </motion.div>

              {/* Downloader Card */}
              <motion.div
                variants={fadeIn}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-purple-500 to-purple-700 p-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/40 to-purple-800/40"></div>
                <div className="flex flex-col h-full bg-primary/5 backdrop-blur-lg rounded-3xl relative z-10 p-8">
                  <div className="bg-purple-500/20 p-4 rounded-full w-fit mb-6">
                    <Download className="h-8 w-8 text-purple-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-primary-foreground mb-4">Downloader</h3>
                  <p className="text-primary-foreground/80 text-lg mb-6">
                    Download content from various platforms
                  </p>
                  <Link href="/docs/downloader" className="mt-auto">
                    <Button 
                      className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6 py-3 w-full"
                    >
                      Explore
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </motion.div>

              {/* AI & Media Card */}
              <motion.div
                variants={fadeIn}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-500 to-cyan-600 p-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 to-cyan-700/40"></div>
                <div className="flex flex-col h-full bg-primary/5 backdrop-blur-lg rounded-3xl relative z-10 p-8">
                  <div className="bg-blue-500/20 p-4 rounded-full w-fit mb-6">
                    <Mic className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-primary-foreground mb-4">AI & Media</h3>
                  <p className="text-primary-foreground/80 text-lg mb-6">
                    AI-powered media processing tools
                  </p>
                  <Link href="/docs/ai-media" className="mt-auto">
                    <Button 
                      className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-3 w-full"
                    >
                      Explore
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </motion.div>

              {/* Entertainment Card */}
              <motion.div
                variants={fadeIn}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-orange-500 to-amber-600 p-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/40 to-amber-700/40"></div>
                <div className="flex flex-col h-full bg-primary/5 backdrop-blur-lg rounded-3xl relative z-10 p-8">
                  <div className="bg-orange-500/20 p-4 rounded-full w-fit mb-6">
                    <Mountain className="h-8 w-8 text-orange-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-primary-foreground mb-4">Entertainment</h3>
                  <p className="text-primary-foreground/80 text-lg mb-6">
                    Fun and engaging content APIs
                  </p>
                  <Link href="/docs/entertainment" className="mt-auto">
                    <Button 
                      className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-6 py-3 w-full"
                    >
                      Explore
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-primary/5 to-primary/10">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="inline-block p-2 bg-primary/10 rounded-lg mb-4">
                  <div className="bg-primary/15 p-3 rounded-md">
                    <Code className="h-7 w-7 text-primary" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-primary-foreground">Easy Integration</h2>
                <p className="text-primary-foreground/80 text-lg">
                  Our APIs are designed with developers in mind. Simple endpoints, clear documentation, and predictable
                  responses make integration a breeze.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="mr-3 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-primary-foreground/90">RESTful API design</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-3 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-primary-foreground/90">JSON response format</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-3 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-primary-foreground/90">Comprehensive documentation</span>
                  </li>
                </ul>
                <div className="pt-6">
                  <Link href="/docs">
                    <Button className="rounded-full px-8 py-6 text-lg bg-primary hover:bg-primary/90">
                      View All APIs
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative w-full max-w-full overflow-hidden"
              >
                <div className="absolute -inset-4 rounded-xl bg-primary/5 -z-10 blur-md"></div>
                <div className="bg-primary/5 backdrop-blur-md border border-primary/20 rounded-xl p-5 md:p-6 shadow-xl overflow-x-auto">
                  <div className="flex items-center justify-between mb-4 md:mb-5">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs text-primary-foreground/70">Terminal</div>
                  </div>
                  <pre className="bg-primary/10 p-4 md:p-5 rounded-md overflow-x-auto text-xs md:text-sm whitespace-pre-wrap md:whitespace-pre">
                    <code className="text-sm">
                      <span className="text-primary-foreground/70">$</span> <span className="text-blue-400">curl</span> -X GET
                      "https://api.jkt48connect.my.id/api/live?api_key=valzz"
                      <br />
                      <br />
                      <span className="text-primary-foreground/70">// Response</span>
                      <br />
                      <span className="text-green-400">{`[
  {
    "name": "Fritzy",
    "img": "https://cdn.idntimes.com/content-images/post/20250331/717109e0-a064-4f15-8187-5c4d46e56a58-250331190058.jpg",
    "img_alt": "https://cdn.idn.media/idnaccount/avatar/500/f4d25811b1b50effd560fb480cac8ba0.webp?v=1712299807",
    "url_key": "jkt48_fritzy",
    "slug": "hii-250331190058",
    "room_id": 510011,
    "is_graduate": false,
    "is_group": false,
    "chat_room_id": "arn:aws:ivschat:us-east-1:050891932989:room/dsKjuKRqfoRE",
    "started_at": "2025-03-31T12:01:07.000Z",
    "streaming_url_list": [
      {
        "label": "original",
        "quality": 1,
        "url": "https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.K9fM2uTS2hX3.m3u8"
      }
    ],
    "type": "idn"
  }
]`}</span>
                    </code>
                  </pre>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
