"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ApiBaseUrl } from "@/components/api-base-url"
import { DocNavigation } from "@/components/doc-navigation"

export default function LiveStreamingDocPage() {
  const [activeSection, setActiveSection] = useState("overview")
  const [copied, setCopied] = useState(false)

  const copyToClipboard = (text) => {
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
              variant={activeSection === "request" ? "default" : "ghost"}
              size="sm"
              className="w-full justify-start"
              onClick={() => setActiveSection("request")}
            >
              Request Method
            </Button>
            <Button
              variant={activeSection === "response" ? "default" : "ghost"}
              size="sm"
              className="w-full justify-start"
              onClick={() => setActiveSection("response")}
            >
              Response Format
            </Button>
            <Button
              variant={activeSection === "guidelines" ? "default" : "ghost"}
              size="sm"
              className="w-full justify-start"
              onClick={() => setActiveSection("guidelines")}
            >
              Usage Guidelines
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
              <h1 className="text-3xl font-bold tracking-tight">Live Streaming API Documentation</h1>
              <Badge variant="outline" className="ml-2">v1</Badge>
            </div>
            <p className="text-muted-foreground">Fetch complete live streaming data for JKT48 members across YouTube, IDN Platforms, and Showroom.</p>
          </div>

          <ApiBaseUrl url="https://api.jkt48connect.my.id/api/live?api_key=YOUR_API_KEY" />

          <Separator />

          {/* Overview Section */}
          <section id="overview" className={activeSection === "overview" ? "block" : "hidden"}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Overview</h2>
              <p>The Live Streaming API provides real-time streaming details for JKT48 members, including YouTube (JKT48V), IDN Platforms, and Showroom.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="border rounded-lg p-4 bg-card">
                  <h3 className="font-medium mb-2">Features</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-primary" />Complete live streaming metadata</li>
                    <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-primary" />Streaming URLs with quality labels</li>
                    <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-primary" />Chat room and room IDs</li>
                    <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-primary" />Platform types: youtube, idn, showroom</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4 bg-card">
                  <h3 className="font-medium mb-2">Quick Start</h3>
                  <p className="text-sm mb-2">Make a GET request to:</p>
                  <div className="relative">
                    <code className="text-xs block bg-muted p-2 rounded overflow-x-auto whitespace-pre-wrap break-all">
                      https://api.jkt48connect.my.id/api/live?api_key=YOUR_API_KEY
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Request Method Section */}
          <section id="request" className={activeSection === "request" ? "block" : "hidden"}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">1. Request Method</h2>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">GET /api/live</h3>
                <p>Retrieves live streaming data for JKT48 members.</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Query Parameters</h3>
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
                        <TableCell className="font-mono">api_key</TableCell>
                        <TableCell>string</TableCell>
                        <TableCell>Yes</TableCell>
                        <TableCell>Your API key for authentication</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Example Request</h3>
                <Tabs defaultValue="curl">
                  <TabsList className="mb-2">
                    <TabsTrigger value="curl">cURL</TabsTrigger>
                    <TabsTrigger value="js">JavaScript</TabsTrigger>
                    <TabsTrigger value="python">Python</TabsTrigger>
                  </TabsList>
                  <TabsContent value="curl" className="relative">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 h-8 w-8"
                      onClick={() => copyToClipboard('curl -X GET "https://api.jkt48connect.my.id/api/live?api_key=YOUR_API_KEY"')}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                      <code className="text-sm">{`curl -X GET "https://api.jkt48connect.my.id/api/live?api_key=YOUR_API_KEY"`}</code>
                    </pre>
                  </TabsContent>
                  <TabsContent value="js" className="relative">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 h-8 w-8"
                      onClick={() => copyToClipboard(`fetch("https://api.jkt48connect.my.id/api/live?api_key=YOUR_API_KEY")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));`)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                      <code className="text-sm">{`fetch("https://api.jkt48connect.my.id/api/live?api_key=YOUR_API_KEY")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));`}</code>
                    </pre>
                  </TabsContent>
                  <TabsContent value="python" className="relative">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 h-8 w-8"
                      onClick={() => copyToClipboard(`import requests

response = requests.get("https://api.jkt48connect.my.id/api/live?api_key=YOUR_API_KEY")
print(response.json())`)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                      <code className="text-sm">{`import requests

response = requests.get("https://api.jkt48connect.my.id/api/live?api_key=YOUR_API_KEY")
print(response.json())`}</code>
                    </pre>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </section>

          {/* Response Format Section */}
          <section id="response" className={activeSection === "response" ? "block" : "hidden"}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">2. Response Format</h2>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Success Response</h3>
                <p className="text-sm mb-1"><Badge variant="outline">Status Code: 200 OK</Badge></p>
                <div className="relative">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 h-8 w-8"
                    onClick={() => copyToClipboard(`[
  {
    "name": "Fritzy",
    "img": "https://cdn.idntimes.com/content-images/post/20250406/717109e0-a064-4f15-8187-5c4d46e56a58-250406190348.jpg",
    "img_alt": "https://cdn.idn.media/idnaccount/avatar/500/f4d25811b1b50effd560fb480cac8ba0.webp?v=1712299807",
    "url_key": "jkt48_fritzy",
    "slug": "yuk-diborong-250406190348",
    "room_id": 510011,
    "is_graduate": false,
    "is_group": false,
    "chat_room_id": "arn:aws:ivschat:us-east-1:050891932989:room/dsKjuKRqfoRE",
    "started_at": "2025-04-06T12:03:58.000Z",
    "streaming_url_list": [
      {
        "label": "original",
        "quality": 1,
        "url": "https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.K9fM2uTS2hX3.m3u8"
      }
    ],
    "type": "idn"
  }
]`)}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code className="text-sm">{`[
  {
    "name": "Fritzy",
    "img": "https://cdn.idntimes.com/content-images/post/20250406/717109e0-a064-4f15-8187-5c4d46e56a58-250406190348.jpg",
    "img_alt": "https://cdn.idn.media/idnaccount/avatar/500/f4d25811b1b50effd560fb480cac8ba0.webp?v=1712299807",
    "url_key": "jkt48_fritzy",
    "slug": "yuk-diborong-250406190348",
    "room_id": 510011,
    "is_graduate": false,
    "is_group": false,
    "chat_room_id": "arn:aws:ivschat:us-east-1:050891932989:room/dsKjuKRqfoRE",
    "started_at": "2025-04-06T12:03:58.000Z",
    "streaming_url_list": [
      {
        "label": "original",
        "quality": 1,
        "url": "https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.K9fM2uTS2hX3.m3u8"
      }
    ],
    "type": "idn"
  }
]`}</code>
                  </pre>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Error Responses</h3>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm mb-1">
                      <Badge variant="outline" className="text-destructive border-destructive">Status Code: 400 Bad Request</Badge>
                      <span className="ml-2 text-sm">Missing <code className="text-xs bg-muted px-1 py-0.5 rounded">api_key</code> parameter</span>
                    </p>
                    <div className="relative">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 h-8 w-8"
                        onClick={() => copyToClipboard(`{ "error": "API key is required" }`)}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                      <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                        <code className="text-sm">{`{ "error": "API key is required" }`}</code>
                      </pre>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm mb-1">
                      <Badge variant="outline" className="text-destructive border-destructive">Status Code: 401 Unauthorized</Badge>
                      <span className="ml-2 text-sm">Invalid <code className="text-xs bg-muted px-1 py-0.5 rounded">api_key</code></span>
                    </p>
                    <div className="relative">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 h-8 w-8"
                        onClick={() => copyToClipboard(`{ "error": "Invalid API key" }`)}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                      <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                        <code className="text-sm">{`{ "error": "Invalid API key" }`}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Usage Guidelines Section */}
          <section id="guidelines" className={activeSection === "guidelines" ? "block" : "hidden"}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">3. Usage Guidelines</h2>
              <ul className="space-y-3">
                <li className="flex items-start"><ArrowRight className="h-5 w-5 mr-2 mt-0.5 text-primary" /><span>Include a valid <code className="text-xs bg-muted px-1 py-0.5 rounded">api_key</code> with each request</span></li>
                <li className="flex items-start"><ArrowRight className="h-5 w-5 mr-2 mt-0.5 text-primary" /><span>Responses are returned in <strong>JSON format</strong></span></li>
                <li className="flex items-start"><ArrowRight className="h-5 w-5 mr-2 mt-0.5 text-primary" /><span>Respect rate limits to avoid being throttled</span></li>
                <li className="flex items-start"><ArrowRight className="h-5 w-5 mr-2 mt-0.5 text-primary" /><span>Check <code className="text-xs bg-muted px-1 py-0.5 rounded">type</code> field for platform source</span></li>
              </ul>
            </div>
          </section>

          <DocNavigation
            activeSection={activeSection}
            sections={["overview", "request", "response", "guidelines"]}
            sectionTitles={{ overview: "Overview", request: "Request Method", response: "Response Format", guidelines: "Usage Guidelines" }}
            setActiveSection={setActiveSection}
            apiUrl="https://api.jkt48connect.my.id/api/live?api_key=YOUR_API_KEY"
          />
        </motion.div>
      </div>
    </div>
  )
}
