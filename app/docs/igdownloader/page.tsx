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

export default function IGDownloaderDocPage() {
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
              variant={activeSection === "response" ? "default" : "ghost"}
              size="sm"
              className="w-full justify-start"
              onClick={() => setActiveSection("response")}
            >
              Response Format
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
              variant={activeSection === "notes" ? "default" : "ghost"}
              size="sm"
              className="w-full justify-start"
              onClick={() => setActiveSection("notes")}
            >
              Notes
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
              <h1 className="text-3xl font-bold tracking-tight">Instagram Downloader Documentation</h1>
              <Badge variant="outline" className="ml-2">
                v1
              </Badge>
            </div>
            <p className="text-muted-foreground">Download media from Instagram posts by providing the post URL.</p>
          </div>

          <ApiBaseUrl url="https://api.vtxgroup.my.id/api/v1" />

          <Separator />

          {/* Overview Section */}
          <section id="overview" className={activeSection === "overview" ? "block" : "hidden"}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Introduction</h2>
              <p>
                Welcome to <strong>VTX API</strong>, a powerful and easy-to-use API for downloading media from Instagram
                posts. This API allows you to retrieve Instagram images and videos by simply providing the post URL.
              </p>

              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">Authentication</h3>
                <p>No authentication is required to use this API.</p>
              </div>
            </div>
          </section>

          {/* Endpoint Section */}
          <section id="endpoint" className={activeSection === "endpoint" ? "block" : "hidden"}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">1. Instagram Downloader</h2>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Endpoint</h3>
                <div className="relative">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 h-8 w-8"
                    onClick={() => copyToClipboard("GET /igdownloader")}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code className="text-sm">GET /igdownloader</code>
                  </pre>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Full API URL</h3>
                <div className="relative">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 h-8 w-8"
                    onClick={() =>
                      copyToClipboard("https://api.vtxgroup.my.id/api/v1/igdownloader?url={instagram_post_url}")
                    }
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code className="text-sm">
                      https://api.vtxgroup.my.id/api/v1/igdownloader?url={"{instagram_post_url}"}
                    </code>
                  </pre>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Request Parameters</h3>
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
                        <TableCell>The Instagram post URL</TableCell>
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
                  </TabsList>
                  <TabsContent value="curl" className="relative">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 h-8 w-8"
                      onClick={() =>
                        copyToClipboard(
                          'curl -X GET "https://api.vtxgroup.my.id/api/v1/igdownloader?url=https://www.instagram.com/p/ByxKbUSnubS/?utm_source=ig_web_copy_link"',
                        )
                      }
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                      <code className="text-sm">
                        {`curl -X GET "https://api.vtxgroup.my.id/api/v1/igdownloader?url=https://www.instagram.com/p/ByxKbUSnubS/?utm_source=ig_web_copy_link"`}
                      </code>
                    </pre>
                  </TabsContent>
                  <TabsContent value="js" className="relative">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 h-8 w-8"
                      onClick={() =>
                        copyToClipboard(`fetch("https://api.vtxgroup.my.id/api/v1/igdownloader?url=https://www.instagram.com/p/ByxKbUSnubS/?utm_source=ig_web_copy_link")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));`)
                      }
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                      <code className="text-sm">
                        {`fetch("https://api.vtxgroup.my.id/api/v1/igdownloader?url=https://www.instagram.com/p/ByxKbUSnubS/?utm_source=ig_web_copy_link")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));`}
                      </code>
                    </pre>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </section>

          {/* Response Format Section */}
          <section id="response" className={activeSection === "response" ? "block" : "hidden"}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Response Format</h2>

              <div className="space-y-2">
                <div className="relative">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 h-8 w-8"
                    onClick={() =>
                      copyToClipboard(`{
  "status": true,
  "creator": "VTX API",
  "message": [
    {
      "wm": "Powered By VTX API",
      "thumbnail": "https://example.com/thumbnail.jpg",
      "_url": "https://example.com/media.mp4"
    }
  ]
}`)
                    }
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code className="text-sm">
                      {`{
  "status": true,
  "creator": "VTX API",
  "message": [
    {
      "wm": "Powered By VTX API",
      "thumbnail": "https://example.com/thumbnail.jpg",
      "_url": "https://example.com/media.mp4"
    }
  ]
}`}
                    </code>
                  </pre>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Response Fields</h3>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Field</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Description</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-mono">status</TableCell>
                        <TableCell>bool</TableCell>
                        <TableCell>
                          <code>true</code> if request was successful, <code>false</code> otherwise
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-mono">creator</TableCell>
                        <TableCell>string</TableCell>
                        <TableCell>API provider name ("VTX API")</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-mono">message</TableCell>
                        <TableCell>array</TableCell>
                        <TableCell>List of downloaded media details</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-mono">wm</TableCell>
                        <TableCell>string</TableCell>
                        <TableCell>Watermark text (customized for VTX API)</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-mono">thumbnail</TableCell>
                        <TableCell>string</TableCell>
                        <TableCell>URL of the thumbnail image</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-mono">_url</TableCell>
                        <TableCell>string</TableCell>
                        <TableCell>Direct URL to download the media file</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
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
                      <TableHead>HTTP Status</TableHead>
                      <TableHead>Message</TableHead>
                      <TableHead>Description</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>400</TableCell>
                      <TableCell>"URL parameter is required"</TableCell>
                      <TableCell>
                        The <code>url</code> parameter is missing
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>500</TableCell>
                      <TableCell>"API configuration missing"</TableCell>
                      <TableCell>Internal server error (environment variables missing)</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>500</TableCell>
                      <TableCell>"Internal Server Error"</TableCell>
                      <TableCell>Unknown error occurred</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </section>

          {/* Notes Section */}
          <section id="notes" className={activeSection === "notes" ? "block" : "hidden"}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Notes</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 mt-0.5 text-primary flex-shrink-0" />
                  <span>Ensure the Instagram post URL is public and accessible.</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 mt-0.5 text-primary flex-shrink-0" />
                  <span>The API only works for single posts (not stories, reels, or IGTV yet).</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 mt-0.5 text-primary flex-shrink-0" />
                  <span>Do not abuse the API, as rate limiting may apply.</span>
                </li>
              </ul>

              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-semibold">Contact & Support</h3>
                <p>
                  For support, please contact <strong>VTX API Team</strong> via email:{" "}
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

                <p className="text-sm text-muted-foreground mt-8">© 2025 VTX API. All rights reserved.</p>
              </div>
            </div>
          </section>

          <DocNavigation
            activeSection={activeSection}
            sections={["overview", "endpoint", "response", "errors", "notes"]}
            sectionTitles={{
              overview: "Overview",
              endpoint: "Endpoint",
              response: "Response Format",
              errors: "Error Handling",
              notes: "Notes",
            }}
            setActiveSection={setActiveSection}
            apiUrl="https://api.vtxgroup.my.id/api/v1/igdownloader?url=https://www.instagram.com/p/ByxKbUSnubS/?utm_source=ig_web_copy_link"
          />
        </motion.div>
      </div>
    </div>
  )
}

