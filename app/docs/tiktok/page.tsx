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

export default function TiktokDocPage() {
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
              variant={activeSection === "errors" ? "default" : "ghost"}
              size="sm"
              className="w-full justify-start"
              onClick={() => setActiveSection("errors")}
            >
              Error Handling
            </Button>
            <Button
              variant={activeSection === "terms" ? "default" : "ghost"}
              size="sm"
              className="w-full justify-start"
              onClick={() => setActiveSection("terms")}
            >
              Terms & Security
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
              <h1 className="text-3xl font-bold tracking-tight">TikTok Downloader API Documentation</h1>
              <Badge variant="outline" className="ml-2">
                v1
              </Badge>
            </div>
            <p className="text-muted-foreground">
              Download TikTok videos and audio by providing a valid TikTok video URL.
            </p>
          </div>

          <ApiBaseUrl url="https://api.vtxgroup.my.id/api/v1" />

          <Separator />

          {/* Overview Section */}
          <section id="overview" className={activeSection === "overview" ? "block" : "hidden"}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Overview</h2>
              <p>
                This API enables users to download TikTok videos and audio by providing a valid TikTok video URL. It
                serves as a secure proxy to fetch and return media resources from TikTok.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="border rounded-lg p-4 bg-card">
                  <h3 className="font-medium mb-2">Features</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      Download TikTok videos
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      Extract audio from TikTok videos
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
                      https://api.vtxgroup.my.id/api/v1/tiktok?url=https://vt.tiktok.com/ZSeJ7P56G
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
                <h3 className="text-xl font-semibold">1. Download TikTok Video and Audio</h3>
                <div className="space-y-2">
                  <h4 className="text-lg font-medium">Endpoint</h4>
                  <div className="relative">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 h-8 w-8"
                      onClick={() => copyToClipboard("GET /tiktok")}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                      <code className="text-sm">GET /tiktok</code>
                    </pre>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-lg font-medium">Description</h4>
                  <p>Fetches the video and audio resources of a TikTok video based on the provided URL.</p>
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
                          <TableCell>The TikTok video URL you want to download</TableCell>
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
                          "GET https://api.vtxgroup.my.id/api/v1/tiktok?url=https://vt.tiktok.com/ZSeJ7P56G",
                        )
                      }
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                      <code className="text-sm">
                        GET https://api.vtxgroup.my.id/api/v1/tiktok?url=https://vt.tiktok.com/ZSeJ7P56G
                      </code>
                    </pre>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-lg font-medium">Example Response</h4>
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
    "title": "#kurumi #nino #waifu #animegirl #anime #foryou...",
    "title_audio": null,
    "thumbnail": null,
    "video": [
      "https://dl.snapcdn.app/get?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    ],
    "audio": [
      "https://dl.snapcdn.app/get?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    ]
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
    "title": "#kurumi #nino #waifu #animegirl #anime #foryou...",
    "title_audio": null,
    "thumbnail": null,
    "video": [
      "https://dl.snapcdn.app/get?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    ],
    "audio": [
      "https://dl.snapcdn.app/get?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    ]
  }
}`}
                      </code>
                    </pre>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-lg font-medium">Response Fields</h4>
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
                          <TableCell>boolean</TableCell>
                          <TableCell>Indicates whether the request was successful (true) or not (false)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-mono">creator</TableCell>
                          <TableCell>string</TableCell>
                          <TableCell>The creator of this API response. Always set to "VTX Group"</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-mono">result.title</TableCell>
                          <TableCell>string</TableCell>
                          <TableCell>The title or caption of the TikTok video</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-mono">result.title_audio</TableCell>
                          <TableCell>string</TableCell>
                          <TableCell>The title of the audio track (if available). Null if unavailable</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-mono">result.thumbnail</TableCell>
                          <TableCell>string</TableCell>
                          <TableCell>
                            The thumbnail image URL of the TikTok video (if available). Null if unavailable
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-mono">result.video</TableCell>
                          <TableCell>array</TableCell>
                          <TableCell>An array of URLs where the TikTok video can be downloaded</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-mono">result.audio</TableCell>
                          <TableCell>array</TableCell>
                          <TableCell>An array of URLs where the TikTok audio can be downloaded</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
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
                        'curl -X GET "https://api.vtxgroup.my.id/api/v1/tiktok?url=https://vt.tiktok.com/ZSeJ7P56G"',
                      )
                    }
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code className="text-sm">
                      {`curl -X GET "https://api.vtxgroup.my.id/api/v1/tiktok?url=https://vt.tiktok.com/ZSeJ7P56G"`}
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
                      copyToClipboard(`fetch('https://api.vtxgroup.my.id/api/v1/tiktok?url=https://vt.tiktok.com/ZSeJ7P56G')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));`)
                    }
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code className="text-sm">
                      {`fetch('https://api.vtxgroup.my.id/api/v1/tiktok?url=https://vt.tiktok.com/ZSeJ7P56G')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));`}
                    </code>
                  </pre>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Using Axios (JavaScript/Node.js)</h3>
                <div className="relative">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 h-8 w-8"
                    onClick={() =>
                      copyToClipboard(`const axios = require('axios');

axios.get('https://api.vtxgroup.my.id/api/v1/tiktok', {
  params: { url: 'https://vt.tiktok.com/ZSeJ7P56G' }
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error:', error.response ? error.response.data : error.message);
  });`)
                    }
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code className="text-sm">
                      {`const axios = require('axios');

axios.get('https://api.vtxgroup.my.id/api/v1/tiktok', {
  params: { url: 'https://vt.tiktok.com/ZSeJ7P56G' }
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error:', error.response ? error.response.data : error.message);
  });`}
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

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Error Responses</h3>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm mb-1">
                      <Badge variant="outline" className="text-destructive border-destructive">
                        Invalid or Missing URL Parameter
                      </Badge>
                    </p>
                    <div className="relative">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 h-8 w-8"
                        onClick={() =>
                          copyToClipboard(`{
  "error": "Missing or invalid URL parameter"
}`)
                        }
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                      <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                        <code className="text-sm">
                          {`{
  "error": "Missing or invalid URL parameter"
}`}
                        </code>
                      </pre>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm mb-1">
                      <Badge variant="outline" className="text-destructive border-destructive">
                        Internal Server Error
                      </Badge>
                    </p>
                    <div className="relative">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 h-8 w-8"
                        onClick={() =>
                          copyToClipboard(`{
  "error": "Internal Server Error"
}`)
                        }
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                      <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                        <code className="text-sm">
                          {`{
  "error": "Internal Server Error"
}`}
                        </code>
                      </pre>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm mb-1">
                      <Badge variant="outline" className="text-destructive border-destructive">
                        External API Error
                      </Badge>
                    </p>
                    <div className="relative">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 h-8 w-8"
                        onClick={() =>
                          copyToClipboard(`{
  "error": "Error message",
  "details": {
    // Additional error details from the external API
  }
}`)
                        }
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                      <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                        <code className="text-sm">
                          {`{
  "error": "Error message",
  "details": {
    // Additional error details from the external API
  }
}`}
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-semibold">Rate Limiting</h3>
                <p className="mt-2">
                  To prevent abuse, the API may implement rate limiting. If you exceed the allowed number of requests
                  within a specific time window, you will receive a{" "}
                  <code className="text-xs bg-muted px-1 py-0.5 rounded">429 Too Many Requests</code> HTTP status code.
                </p>
              </div>
            </div>
          </section>

          {/* Terms & Security Section */}
          <section id="terms" className={activeSection === "terms" ? "block" : "hidden"}>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Security</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 mt-0.5 text-primary flex-shrink-0" />
                  <span>
                    The API key for the external service is securely stored in environment variables and never exposed
                    to clients.
                  </span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 mt-0.5 text-primary flex-shrink-0" />
                  <span>The API uses HTTPS to ensure secure communication.</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 mt-0.5 text-primary flex-shrink-0" />
                  <span>Input validation and sanitization are performed to prevent malicious input.</span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold mt-8">Terms of Use</h2>
              <p>By using this API, you agree to the following terms:</p>
              <ol className="list-decimal pl-5 space-y-2 mt-2">
                <li>You will not use the API for any illegal or unauthorized purposes.</li>
                <li>You will not attempt to reverse-engineer or exploit the API.</li>
                <li>You are responsible for ensuring that your usage complies with TikTok's terms of service.</li>
                <li>
                  The API provider reserves the right to modify or discontinue the API at any time without prior notice.
                </li>
              </ol>

              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-semibold">Contact</h3>
                <p>
                  For any questions or issues regarding the API, please contact us at:{" "}
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
            sections={["overview", "endpoints", "examples", "errors", "terms"]}
            sectionTitles={{
              overview: "Overview",
              endpoints: "Endpoints",
              examples: "Usage Examples",
              errors: "Error Handling",
              terms: "Terms & Security",
            }}
            setActiveSection={setActiveSection}
            apiUrl="https://api.vtxgroup.my.id/api/v1/tiktok?url=https://vt.tiktok.com/ZSeJ7P56G"
          />
        </motion.div>
      </div>
    </div>
  )
}

