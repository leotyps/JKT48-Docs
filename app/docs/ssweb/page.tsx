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

export default function ScreenshotWebDocPage() {
  const [activeSection, setActiveSection] = useState("overview")
  const [copied, setCopied] = useState(false)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py:12 lg:py-16 max-w-6xl mx-auto">
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
              <h1 className="text-3xl font-bold tracking-tight">Screenshot Website API Documentation</h1>
              <Badge variant="outline" className="ml-2">
                v1
              </Badge>
            </div>
            <p className="text-muted-foreground">Capture screenshots of any website by providing its URL.</p>
          </div>

          <ApiBaseUrl url="https://api.vtxgroup.my.id/api/v1" />

          <Separator />

          {/* Overview Section */}
          <section id="overview" className={activeSection === "overview" ? "block" : "hidden"}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Introduction</h2>
              <p>
                The Screenshot Website API allows users to capture a screenshot of any website by providing its URL.
                This API acts as a wrapper around the Popcat screenshot service to ensure security and ease of use.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="border rounded-lg p-4 bg-card">
                  <h3 className="font-medium mb-2">Features</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      Capture screenshots of any website
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      Simple and easy-to-use API
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      Secure wrapper around Popcat service
                    </li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4 bg-card">
                  <h3 className="font-medium mb-2">Quick Start</h3>
                  <p className="text-sm mb-2">Make a GET request to:</p>
                  <div className="relative">
                    <code className="text-xs block bg-muted p-2 rounded overflow-x-auto whitespace-pre-wrap break-all">
                      https://api.vtxgroup.my.id/api/v1/ssweb?url=https://example.com
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
                <h3 className="text-xl font-semibold">GET /ssweb</h3>

                <div className="space-y-2">
                  <h4 className="text-lg font-medium">Description</h4>
                  <p>Fetches a screenshot of the given website URL.</p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-lg font-medium">Request Parameters</h4>
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
                          <TableCell>The URL of the website to capture</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-lg font-medium">Example Request</h4>
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
                            'curl -X GET "https://api.vtxgroup.my.id/api/v1/ssweb?url=https://example.com"',
                          )
                        }
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                      <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                        <code className="text-sm">
                          {`curl -X GET "https://api.vtxgroup.my.id/api/v1/ssweb?url=https://example.com"`}
                        </code>
                      </pre>
                    </TabsContent>
                    <TabsContent value="js" className="relative">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 h-8 w-8"
                        onClick={() =>
                          copyToClipboard(`fetch("https://api.vtxgroup.my.id/api/v1/ssweb?url=https://example.com")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));`)
                        }
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                      <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                        <code className="text-sm">
                          {`fetch("https://api.vtxgroup.my.id/api/v1/ssweb?url=https://example.com")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));`}
                        </code>
                      </pre>
                    </TabsContent>
                  </Tabs>
                </div>

                <div className="space-y-2">
                  <h4 className="text-lg font-medium">Example Response</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm mb-1">
                        <Badge variant="outline">Status Code: 200 OK</Badge>
                      </p>
                      <div className="relative">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute top-2 right-2 h-8 w-8"
                          onClick={() =>
                            copyToClipboard(`{
  "url": "https://api.popcat.xyz/screenshot?url=https://example.com"
}`)
                          }
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                        <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                          <code className="text-sm">
                            {`{
  "url": "https://api.popcat.xyz/screenshot?url=https://example.com"
}`}
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
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
                      <TableCell>400 Bad Request</TableCell>
                      <TableCell>{`{"error": "Invalid or missing 'url' parameter."}`}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>500 Internal Server Error</TableCell>
                      <TableCell>{`{"error": "An error occurred while processing your request."}`}</TableCell>
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
                  <span>
                    Ensure the <code className="text-xs bg-muted px-1 py-0.5 rounded">url</code> parameter is properly
                    formatted (including <code className="text-xs bg-muted px-1 py-0.5 rounded">http://</code> or{" "}
                    <code className="text-xs bg-muted px-1 py-0.5 rounded">https://</code>).
                  </span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 mt-0.5 text-primary flex-shrink-0" />
                  <span>This API is read-only and does not store any user data.</span>
                </li>
              </ul>

              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-semibold">Contact & Support</h3>
                <p>
                  For support or inquiries, please contact <strong>VTX API Team</strong> via email:{" "}
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
            </div>
          </section>

          <DocNavigation
            activeSection={activeSection}
            sections={["overview", "endpoint", "errors", "notes"]}
            sectionTitles={{
              overview: "Overview",
              endpoint: "Endpoint",
              errors: "Error Handling",
              notes: "Notes",
            }}
            setActiveSection={setActiveSection}
            apiUrl="https://api.vtxgroup.my.id/api/v1/ssweb?url=https://example.com"
          />
        </motion.div>
      </div>
    </div>
  )
}

