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

export default function TinyURLDocPage() {
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
              variant={activeSection === "endpoints" ? "default" : "ghost"}
              size="sm"
              className="w-full justify-start"
              onClick={() => setActiveSection("endpoints")}
            >
              Endpoints
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
              variant={activeSection === "how-it-works" ? "default" : "ghost"}
              size="sm"
              className="w-full justify-start"
              onClick={() => setActiveSection("how-it-works")}
            >
              How It Works
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
              <h1 className="text-3xl font-bold tracking-tight">TinyURL API Documentation</h1>
              <Badge variant="outline" className="ml-2">
                v1
              </Badge>
            </div>
            <p className="text-muted-foreground">
              Shorten any URL using the TinyURL service with VTX Group as the creator watermark.
            </p>
          </div>

          <ApiBaseUrl url="https://api.vtxgroup.my.id/api/v1" />

          <Separator />

          {/* Overview Section */}
          <section id="overview" className={activeSection === "overview" ? "block" : "hidden"}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Overview</h2>
              <p>
                The TinyURL API allows you to shorten any URL using the{" "}
                <a
                  href="https://tinyurl.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  TinyURL
                </a>{" "}
                service while including VTX Group as the creator watermark.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="border rounded-lg p-4 bg-card">
                  <h3 className="font-medium mb-2">Features</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      Shorten long URLs
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      Simple and easy-to-use API
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      VTX Group watermark included
                    </li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4 bg-card">
                  <h3 className="font-medium mb-2">Quick Start</h3>
                  <p className="text-sm mb-2">Make a GET request to:</p>
                  <div className="relative">
                    <code className="text-xs block bg-muted p-2 rounded overflow-x-auto whitespace-pre-wrap break-all">
                      https://api.vtxgroup.my.id/api/v1/tinyurl?url=https://example.com
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Endpoints Section */}
          <section id="endpoints" className={activeSection === "endpoints" ? "block" : "hidden"}>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Endpoints</h2>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Create TinyURL</h3>
                <div className="space-y-2">
                  <h4 className="text-lg font-medium">Endpoint</h4>
                  <div className="relative">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 h-8 w-8"
                      onClick={() => copyToClipboard("GET /tinyurl")}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                      <code className="text-sm">GET /tinyurl</code>
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
                          <TableCell>The original URL to be shortened</TableCell>
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
                        copyToClipboard("GET https://api.vtxgroup.my.id/api/v1/tinyurl?url=https://example.com")
                      }
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                      <code className="text-sm">
                        GET https://api.vtxgroup.my.id/api/v1/tinyurl?url=https://example.com
                      </code>
                    </pre>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-lg font-medium">Successful Response</h4>
                  <div className="relative">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 h-8 w-8"
                      onClick={() =>
                        copyToClipboard(`{
  "success": true,
  "originalUrl": "https://example.com",
  "tinyUrl": "https://tinyurl.com/abc123",
  "creator": "VTX Group"
}`)
                      }
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                      <code className="text-sm">
                        {`{
  "success": true,
  "originalUrl": "https://example.com",
  "tinyUrl": "https://tinyurl.com/abc123",
  "creator": "VTX Group"
}`}
                      </code>
                    </pre>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-lg font-medium">Error Response</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm mb-1">
                        <Badge variant="outline" className="text-destructive border-destructive">
                          Status Code: 400 Bad Request
                        </Badge>
                      </p>
                      <div className="relative">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute top-2 right-2 h-8 w-8"
                          onClick={() =>
                            copyToClipboard(`{
  "success": false,
  "error": "URL parameter is required. Please provide a valid URL."
}`)
                          }
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                        <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                          <code className="text-sm">
                            {`{
  "success": false,
  "error": "URL parameter is required. Please provide a valid URL."
}`}
                          </code>
                        </pre>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm mb-1">
                        <Badge variant="outline" className="text-destructive border-destructive">
                          Status Code: 500 Internal Server Error
                        </Badge>
                      </p>
                      <div className="relative">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute top-2 right-2 h-8 w-8"
                          onClick={() =>
                            copyToClipboard(`{
  "success": false,
  "error": "An internal server error occurred. Please try again later."
}`)
                          }
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                        <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                          <code className="text-sm">
                            {`{
  "success": false,
  "error": "An internal server error occurred. Please try again later."
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

          {/* Usage Examples Section */}
          <section id="examples" className={activeSection === "examples" ? "block" : "hidden"}>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Usage Examples</h2>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Shortening a URL</h3>
                <div className="relative">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 h-8 w-8"
                    onClick={() =>
                      copyToClipboard(`// Example Request
GET https://api.vtxgroup.my.id/api/v1/tinyurl?url=https://openai.com

// Example Response
{
  "success": true,
  "originalUrl": "https://openai.com",
  "tinyUrl": "https://tinyurl.com/xyz789",
  "creator": "VTX Group"
}`)
                    }
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code className="text-sm">
                      {`// Example Request
GET https://api.vtxgroup.my.id/api/v1/tinyurl?url=https://openai.com

// Example Response
{
  "success": true,
  "originalUrl": "https://openai.com",
  "tinyUrl": "https://tinyurl.com/xyz789",
  "creator": "VTX Group"
}`}
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
                      copyToClipboard(`fetch('https://api.vtxgroup.my.id/api/v1/tinyurl?url=https://example.com')
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      console.log('Shortened URL:', data.tinyUrl);
    } else {
      console.error('Error:', data.error);
    }
  })
  .catch(error => console.error('Fetch Error:', error));`)
                    }
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code className="text-sm">
                      {`fetch('https://api.vtxgroup.my.id/api/v1/tinyurl?url=https://example.com')
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      console.log('Shortened URL:', data.tinyUrl);
    } else {
      console.error('Error:', data.error);
    }
  })
  .catch(error => console.error('Fetch Error:', error));`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section id="how-it-works" className={activeSection === "how-it-works" ? "block" : "hidden"}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">How It Works</h2>

              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">1. Input URL</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 mr-2 mt-0.5 text-primary flex-shrink-0" />
                      <span>The API accepts a URL provided as a query parameter.</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 mr-2 mt-0.5 text-primary flex-shrink-0" />
                      <span>If no URL is provided, an error message will be returned.</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">2. Calling TinyURL API</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 mr-2 mt-0.5 text-primary flex-shrink-0" />
                      <span>The API makes a request to the TinyURL service using:</span>
                    </li>
                  </ul>
                  <div className="relative ml-7">
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                      <code className="text-sm">https://tinyurl.com/api-create.php?url=&lt;targetUrl&gt;</code>
                    </pre>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 mr-2 mt-0.5 text-primary flex-shrink-0" />
                      <span>The URL is encoded for safe transmission.</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">3. Response Construction</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 mr-2 mt-0.5 text-primary flex-shrink-0" />
                      <span>The API responds with a JSON object containing:</span>
                    </li>
                    <li className="flex items-start ml-7">
                      <span className="font-mono text-sm">success</span>
                      <span className="ml-2">Boolean value indicating the request status.</span>
                    </li>
                    <li className="flex items-start ml-7">
                      <span className="font-mono text-sm">originalUrl</span>
                      <span className="ml-2">The original URL provided.</span>
                    </li>
                    <li className="flex items-start ml-7">
                      <span className="font-mono text-sm">tinyUrl</span>
                      <span className="ml-2">The shortened URL from TinyURL.</span>
                    </li>
                    <li className="flex items-start ml-7">
                      <span className="font-mono text-sm">creator</span>
                      <span className="ml-2">The watermark VTX Group.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className={activeSection === "contact" ? "block" : "hidden"}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Contact</h2>
              <p>For inquiries or support, please reach out via:</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 mt-0.5 text-primary flex-shrink-0" />
                  <span>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:fort@vtxgroup.my.id" className="text-primary hover:underline">
                      fort@vtxgroup.my.id
                    </a>
                  </span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 mt-0.5 text-primary flex-shrink-0" />
                  <span>
                    <strong>Website:</strong>{" "}
                    <a
                      href="https://vtxgroup.my.id"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      https://vtxgroup.my.id
                    </a>
                  </span>
                </li>
              </ul>

              <div className="mt-8 space-y-2">
                <h3 className="text-xl font-semibold">Author</h3>
                <ul className="space-y-1">
                  <li>
                    <strong>Author:</strong> VTX Group
                  </li>
                  <li>
                    <strong>Version:</strong> 1.0
                  </li>
                  <li>
                    <strong>License:</strong> MIT
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <DocNavigation
            activeSection={activeSection}
            sections={["overview", "endpoints", "examples", "how-it-works", "contact"]}
            sectionTitles={{
              overview: "Overview",
              endpoints: "Endpoints",
              examples: "Usage Examples",
              "how-it-works": "How It Works",
              contact: "Contact",
            }}
            setActiveSection={setActiveSection}
            apiUrl="https://api.vtxgroup.my.id/api/v1/tinyurl?url=https://example.com"
          />
        </motion.div>
      </div>
    </div>
  )
}

