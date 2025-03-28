"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ApiBaseUrl } from "@/components/api-base-url"
import { DocNavigation } from "@/components/doc-navigation"

export default function YouTubeDocPage() {
  const [activeSection, setActiveSection] = useState("overview")
  const [copied, setCopied] = useState(false)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12 lg:py-16 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
        {/* Sidebar Navigation */}
        <div className="md:sticky md:top-20 h-fit">
          <motion.div
            className="space-y-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/docs">
              <Button variant="ghost" size="sm" className="w-full justify-start mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to API List
              </Button>
            </Link>
            <Button
              variant={activeSection === "overview" ? "default" : "ghost"}
              size="sm"
              className="w-full justify-start"
              onClick={() => setActiveSection("overview")}
            >
              Overview
            </Button>
            <Button
              variant={activeSection === "endpoint" ? "default" : "ghost"}
              size="sm"
              className="w-full justify-start"
              onClick={() => setActiveSection("endpoint")}
            >
              Endpoint
            </Button>
            <Button
              variant={activeSection === "examples" ? "default" : "ghost"}
              size="sm"
              className="w-full justify-start"
              onClick={() => setActiveSection("examples")}
            >
              Usage Examples
            </Button>
            <Button
              variant={activeSection === "errors" ? "default" : "ghost"}
              size="sm"
              className="w-full justify-start"
              onClick={() => setActiveSection("errors")}
            >
              Error Handling
            </Button>
            <Button
              variant={activeSection === "contact" ? "default" : "ghost"}
              size="sm"
              className="w-full justify-start"
              onClick={() => setActiveSection("contact")}
            >
              Contact
            </Button>
          </motion.div>
        </div>

        {/* Main Content */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-bold tracking-tight">YouTube Downloader API Documentation</h1>
              <Badge variant="outline" className="ml-2">
                v1
              </Badge>
            </div>
            <p className="text-muted-foreground">Download YouTube videos by providing a valid YouTube video URL.</p>
          </div>

          <ApiBaseUrl url="https://api.vtxgroup.my.id/api/v1" />

          <Separator />

          {/* Overview Section */}
          <section id="overview" className={activeSection === "overview" ? "block" : "hidden"}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Overview</h2>
              <p>
                The YouTube API allows users to download YouTube videos in various formats by providing a valid YouTube
                video URL. This API serves as a proxy to securely fetch and deliver video download links.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="border rounded-lg p-4 bg-card">
                  <h3 className="font-medium mb-2">Features</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      Download YouTube videos
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      Extract audio from YouTube videos
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      Get video metadata and information
                    </li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4 bg-card">
                  <h3 className="font-medium mb-2">Quick Start</h3>
                  <p className="text-sm mb-2">Make a GET request to:</p>
                  <div className="relative">
                    <code className="text-xs block bg-muted p-2 rounded overflow-x-auto whitespace-pre-wrap break-all">
                      https://api.vtxgroup.my.id/api/v1/yt?url=https://youtube.com/watch?v=VSL5F43qgng
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Endpoint Section */}
          <section id="endpoint" className={activeSection === "endpoint" ? "block" : "hidden"}>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Endpoint</h2>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Download YouTube Video</h3>
                <div className="space-y-2">
                  <h4 className="text-lg font-medium">Endpoint</h4>
                  <div className="relative">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 h-8 w-8"
                      onClick={() => copyToClipboard("GET /yt")}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                      <code className="text-sm">GET /yt</code>
                    </pre>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-lg font-medium">Query Parameters</h4>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Parameter</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead>Required</TableHead>
                          <TableHead>Description</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-mono">url</TableCell>
                          <TableCell>string</TableCell>
                          <TableCell>Yes</TableCell>
                          <TableCell>The full YouTube video URL to download</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-lg font-medium">Example Request</h4>
                  <div className="relative">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 h-8 w-8"
                      onClick={() =>
                        copyToClipboard(
                          "GET https://api.vtxgroup.my.id/api/v1/yt?url=https://youtube.com/watch?v=VSL5F43qgng",
                        )
                      }
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                      <code className="text-sm">
                        GET https://api.vtxgroup.my.id/api/v1/yt?url=https://youtube.com/watch?v=VSL5F43qgng
                      </code>
                    </pre>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-lg font-medium">Response</h4>
                  <div className="relative">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 h-8 w-8"
                      onClick={() =>
                        copyToClipboard(`{
    "status": true,
    "creator": "VTX Group",
    "result": {
        "title": "Bernadya - Untungnya, Hidup Harus Tetap Berjalan (Official Live Performance)",
        "description": "MUSIC CREDITS Performed by Bernadya Composed by Bernadya Ribka & Petra Sihombing Music Produced by Petra Sihombing ...",
        "id": "VSL5F43qgng",
        "thumb": "https://i.ytimg.com/vi/VSL5F43qgng/hq720.jpg",
        "source": "https://youtube.com/watch?v=VSL5F43qgng",
        "duration": 186,
        "views": 5295673,
        "author": "Bernadya",
        "mp3": "https://cdn302.savetube.su/download-direct/audio/128/6b06daf8caae0a69999e93b1a64eb99b12fb644b",
        "mp4": "https://cdn306.savetube.su/download-direct/video/360/6b06daf8caae0a69999e93b1a64eb99b12fb644b"
    }
}`)
                      }
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                      <code className="text-sm">
                        {`{
    "status": true,
    "creator": "VTX Group",
    "result": {
        "title": "Bernadya - Untungnya, Hidup Harus Tetap Berjalan (Official Live Performance)",
        "description": "MUSIC CREDITS Performed by Bernadya Composed by Bernadya Ribka & Petra Sihombing Music Produced by Petra Sihombing ...",
        "id": "VSL5F43qgng",
        "thumb": "https://i.ytimg.com/vi/VSL5F43qgng/hq720.jpg",
        "source": "https://youtube.com/watch?v=VSL5F43qgng",
        "duration": 186,
        "views": 5295673,
        "author": "Bernadya",
        "mp3": "https://cdn302.savetube.su/download-direct/audio/128/6b06daf8caae0a69999e93b1a64eb99b12fb644b",
        "mp4": "https://cdn306.savetube.su/download-direct/video/360/6b06daf8caae0a69999e93b1a64eb99b12fb644b"
    }
}`}
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Usage Examples Section */}
          <section id="examples" className={activeSection === "examples" ? "block" : "hidden"}>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Usage Examples</h2>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Using cURL</h3>
                <div className="relative">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 h-8 w-8"
                    onClick={() =>
                      copyToClipboard(
                        'curl -X GET "https://api.vtxgroup.my.id/api/v1/yt?url=https://youtube.com/watch?v=VSL5F43qgng"',
                      )
                    }
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code className="text-sm">
                      {`curl -X GET "https://api.vtxgroup.my.id/api/v1/yt?url=https://youtube.com/watch?v=VSL5F43qgng"`}
                    </code>
                  </pre>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Using JavaScript (Fetch API)</h3>
                <div className="relative">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 h-8 w-8"
                    onClick={() =>
                      copyToClipboard(`fetch('https://api.vtxgroup.my.id/api/v1/yt?url=https://youtube.com/watch?v=VSL5F43qgng')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));`)
                    }
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code className="text-sm">
                      {`fetch('https://api.vtxgroup.my.id/api/v1/yt?url=https://youtube.com/watch?v=VSL5F43qgng')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* Error Handling Section */}
          <section id="errors" className={activeSection === "errors" ? "block" : "hidden"}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Error Handling</h2>

              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Status Code</TableHead>
                      <TableHead>Description</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>400</TableCell>
                      <TableCell>Missing or invalid "url" parameter</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>500</TableCell>
                      <TableCell>Server error (e.g., missing API key or external API failure)</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className={activeSection === "contact" ? "block" : "hidden"}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Contact</h2>
              <p>
                For support or inquiries, please contact us at:{" "}
                <code className="text-xs bg-muted px-1 py-0.5 rounded">fort@vtxgroup.my.id</code> or visit our website
                at{" "}
                <a
                  href="https://vtxgroup.my.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  VTX Group
                </a>
                .
              </p>
            </div>
          </section>

          <DocNavigation
            activeSection={activeSection}
            sections={["overview", "endpoint", "examples", "errors", "contact"]}
            sectionTitles={{
              overview: "Overview",
              endpoint: "Endpoint",
              examples: "Usage Examples",
              errors: "Error Handling",
              contact: "Contact",
            }}
            setActiveSection={setActiveSection}
            apiUrl="https://api.vtxgroup.my.id/api/v1/yt?url=https://youtube.com/watch?v=VSL5F43qgng"
          />
        </motion.div>
      </div>
    </div>
  )
}

