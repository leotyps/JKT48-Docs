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
  Copy
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useInView } from "react-intersection-observer"
import { toast } from "@/lib/utils" // Replace with your preferred toast library

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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/80 z-10"></div>

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
                    scale: [1, 1.1, 1],
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
                  className="inline-block p-2 mb-4 bg-primary/10 rounded-full"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 1, type: "spring" }}
                >
                  <Cloud className="h-10 w-10 text-primary" />
                </motion.div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                  JKT48 API Documentation
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
                  Powerful, reliable, and easy to integrate API services for your applications.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-8 flex justify-center w-full"
              >
                <Link href="/docs">
                  <Button size="lg" className="group bg-primary hover:bg-primary/90 text-white rounded-full px-8">
                    Explore Documentation
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Service Categories Section - Updated with new categories */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-background to-muted/30">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                API Service Categories
              </h2>
              <p className="mt-4 text-muted-foreground md:text-lg max-w-3xl mx-auto">
                Explore our comprehensive collection of API services designed for different needs
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* JKT48 Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 p-5 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute top-0 right-0 -mt-12 -mr-12 h-40 w-40 rounded-full bg-white/10 blur-2xl"></div>
                <div className="mb-3 inline-flex items-center justify-center rounded-full bg-white/20 p-2">
                  <Music className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-white">JKT48</h3>
                <p className="text-sm text-white/90">
                  Access exclusive JKT48 content and data
                </p>
              </motion.div>

              {/* Downloader Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 p-5 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute top-0 right-0 -mt-12 -mr-12 h-40 w-40 rounded-full bg-white/10 blur-2xl"></div>
                <div className="mb-3 inline-flex items-center justify-center rounded-full bg-white/20 p-2">
                  <Download className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-white">Downloader</h3>
                <p className="text-sm text-white/90">
                  Download content from various platforms
                </p>
              </motion.div>

              {/* Payment Gateway Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 p-5 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute top-0 right-0 -mt-12 -mr-12 h-40 w-40 rounded-full bg-white/10 blur-2xl"></div>
                <div className="mb-3 inline-flex items-center justify-center rounded-full bg-white/20 p-2">
                  <FileSpreadsheet className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-white">Payment Gateway</h3>
                <p className="text-sm text-white/90">
                  Secure and reliable payment processing
                </p>
              </motion.div>

              {/* AI Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 p-5 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute top-0 right-0 -mt-12 -mr-12 h-40 w-40 rounded-full bg-white/10 blur-2xl"></div>
                <div className="mb-3 inline-flex items-center justify-center rounded-full bg-white/20 p-2">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-white">Artificial Intelligence</h3>
                <p className="text-sm text-white/90">
                  Advanced AI-powered tools and services
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* JKT48 Specific APIs Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">JKT48 Specific APIs</h2>
              <p className="mt-4 text-muted-foreground md:text-lg max-w-3xl mx-auto">
                Specialized APIs designed for JKT48 fans and developers to access real-time data and content
              </p>
            </div>

            <motion.div
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch"
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              <motion.div
                custom={0}
                variants={cardVariants}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="flex flex-col p-6 bg-background shadow-lg rounded-xl border border-muted hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="p-3 bg-primary/10 rounded-full w-fit mb-6">
                  <Cloud className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Live API</h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  Get accurate live JKT48 data in real-time from IDN and Showroom platforms.
                </p>
                <div className="mt-auto pt-4">
                  <Link href="/docs/live">
                    <Button
                      variant="outline"
                      className="w-full group rounded-lg border-primary/20 hover:border-primary hover:bg-primary/5"
                    >
                      View Documentation
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                custom={1}
                variants={cardVariants}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="flex flex-col p-6 bg-background shadow-lg rounded-xl border border-muted hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="p-3 bg-primary/10 rounded-full w-fit mb-6">
                  <Download className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">IDN API</h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  All live member data in real-time on the IDN application platform.
                </p>
                <div className="mt-auto pt-4">
                  <Link href="/docs/idn">
                    <Button
                      variant="outline"
                      className="w-full group rounded-lg border-primary/20 hover:border-primary hover:bg-primary/5"
                    >
                      View Documentation
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                custom={2}
                variants={cardVariants}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="flex flex-col p-6 bg-background shadow-lg rounded-xl border border-muted hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="p-3 bg-primary/10 rounded-full w-fit mb-6">
                  <Tv className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Showroom API</h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  All live JKT48 member data in real-time on the Showroom application.
                </p>
                <div className="mt-auto pt-4">
                  <Link href="/docs/showroom">
                    <Button
                      variant="outline"
                      className="w-full group rounded-lg border-primary/20 hover:border-primary hover:bg-primary/5"
                    >
                      View Documentation
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                custom={3}
                variants={cardVariants}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="flex flex-col p-6 bg-background shadow-lg rounded-xl border border-muted hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="p-3 bg-primary/10 rounded-full w-fit mb-6">
                  <Image className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Recent Live API</h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  Displays data on JKT48 members who previously went live along with the total nominal gift.
                </p>
                <div className="mt-auto pt-4">
                  <Link href="/docs/recent">
                    <Button
                      variant="outline"
                      className="w-full group rounded-lg border-primary/20 hover:border-primary hover:bg-primary/5"
                    >
                      View Documentation
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                custom={4}
                variants={cardVariants}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="flex flex-col p-6 bg-background shadow-lg rounded-xl border border-muted hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="p-3 bg-primary/10 rounded-full w-fit mb-6">
                  <Music className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Member Profile API</h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  Comprehensive profiles and information about current and graduated JKT48 members.
                </p>
                <div className="mt-auto pt-4">
                  <Link href="/docs/members">
                    <Button
                      variant="outline"
                      className="w-full group rounded-lg border-primary/20 hover:border-primary hover:bg-primary/5"
                    >
                      View Documentation
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                custom={5}
                variants={cardVariants}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="flex flex-col p-6 bg-background shadow-lg rounded-xl border border-muted hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="p-3 bg-primary/10 rounded-full w-fit mb-6">
                  <Play className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Performance API</h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  Information about JKT48 theater performances, setlists, and upcoming shows.
                </p>
                <div className="mt-auto pt-4">
                  <Link href="/docs/performances">
                    <Button
                      variant="outline"
                      className="w-full group rounded-lg border-primary/20 hover:border-primary hover:bg-primary/5"
                    >
                      View Documentation
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="inline-block p-1 bg-primary/10 rounded-lg mb-2">
                  <div className="bg-primary/10 p-2 rounded-md">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold tracking-tight">Developer-Friendly Integration</h2>
                <p className="text-muted-foreground">
                  Our APIs are designed with developers in mind. Simple endpoints, clear documentation, and predictable
                  responses make integration a breeze.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <span>RESTful API design</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <span>JSON response format</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <span>Comprehensive documentation</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <span>High availability and reliability</span>
                  </li>
                </ul>
                <div className="pt-4 flex justify-center">
                  <Link href="/docs">
                    <Button className="rounded-lg">
                      View All APIs
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative w-full max-w-full overflow-hidden"
              >
                <div className="absolute -inset-4 rounded-xl bg-primary/5 -z-10 blur-sm"></div>
                <div className="bg-background border rounded-xl p-4 md:p-6 shadow-lg overflow-x-auto">
                  <div className="flex items-center justify-between mb-3 md:mb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs text-muted-foreground">Terminal</div>
                  </div>
                  <pre className="bg-muted p-2 md:p-4 rounded-md overflow-x-auto text-xs md:text-sm whitespace-pre-wrap md:whitespace-pre">
                    <code className="text-sm">
                      <span className="text-muted-foreground">$</span> <span className="text-primary">curl</span> -X GET
                      "https://api.jkt48connect.my.id/api/live?api_key=valzz"
                      <br />
                      <br />
                      <span className="text-muted-foreground">// Response</span>
                      <br />
                      {`[
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
]`}
                    </code>
                  </pre>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action Section - Updated with Card Design and API Key Generation */}
        <section className="w-full py-12 md:py-20 bg-background">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-muted">
                <div className="p-8 md:p-10">
                  <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="inline-flex p-3 bg-primary/10 rounded-full mb-2">
                      <Code className="h-8 w-8 text-primary" />
                    </div>
                    
                    <div className="space-y-2">
                      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Get Started?</h2>
                      <p className="text-muted-foreground md:text-lg max-w-2xl">
                        Generate your API key instantly and start building amazing applications with our powerful APIs.
                      </p>
                    </div>
                    
                    <ApiKeyGenerationForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

// API Key Generation Form Component
function ApiKeyGenerationForm() {
  const redirectToWhatsApp = () => {
    const waText = encodeURIComponent(".generate");
    const waLink = `https://wa.me/6285198360849?text=${waText}`;
    window.location.href = waLink;
  };

  return (
    <div className="w-full max-w-md mt-6">
      <Button 
        onClick={redirectToWhatsApp} 
        size="lg" 
        className="w-full rounded-lg"
      >
        Generate API Key
      </Button>
    </div>
  );
}
