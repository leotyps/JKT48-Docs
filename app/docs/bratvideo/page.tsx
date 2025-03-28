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

export default function BratVideoDocPage() {
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
              variant={activeSection === "security" ? "default" : "ghost"}
              size="sm"
              className="w-full justify-start"
              onClick={() => setActiveSection("security")}
            >
              Security
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
              <h1 className="text-3xl font-bold tracking-tight">Brat Video API Documentation</h1>
              <Badge variant="outline" className="ml-2">
                v1
              </Badge>
            </div>
            <p className="text-muted-foreground">
              Generate videos based on text input with our simple and secure Brat Video API.
            </p>
          </div>

          <ApiBaseUrl url="https://api.vtxgroup.my.id/api/v1" />

          <Separator />

          {/* Overview Section */}
          <section id="overview" className={activeSection === "overview" ? "block" : "hidden"}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Introduction</h2>
              <p>
                The <strong>Brat Video API</strong> is a Next.js API route that fetches a video from an external API
                based on the provided text. This API ensures security by keeping the API key hidden in environment
                variables.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="border rounded-lg p-4 bg-card">
                  <h3 className="font-medium mb-2">Features</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      Generate videos from text
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      Secure API key handling
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      Direct video response
                    </li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4 bg-card">
                  <h3 className="font-medium mb-2">Quick Start</h3>
                  <p className="text-sm mb-2">Make a GET request to:</p>
                  <div className="relative">
                    <code className="text-xs block bg-muted p-2 rounded overflow-x-auto whitespace-pre-wrap break-all">
                      https://api.vtxgroup.my.id/api/v1/bratvideo?text=VTX%20Group%20Free%20API
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
                <h3 className="text-xl font-semibold">GET /bratvideo</h3>
                <div className="space-y-2">
                  <h4 className="text-lg font-medium">Description</h4>
                  <p>Generates a video based on the provided text.</p>
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
                          <TableCell className="font-mono">text</TableCell>
                          <TableCell>string</TableCell>
                          <TableCell>Yes</TableCell>
                          <TableCell>The text that will be used to generate the video</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-lg font-medium">Response</h4>
                  <p>
                    The API returns a video directly. If successful, the response will be a video file with the
                    appropriate <code className="text-xs bg-muted px-1 py-0.5 rounded">Content-Type</code> header.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Usage Examples Section */}
          <section id="examples" className={activeSection === "examples" ? "block" : "hidden"}>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Usage Examples</h2>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Example Request</h3>
                <div className="relative">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 h-8 w-8"
                    onClick={() =>
                      copyToClipboard("GET https://api.vtxgroup.my.id/api/v1/bratvideo?text=VTX%20Group%20Free%20API")
                    }
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code className="text-sm">
                      GET https://api.vtxgroup.my.id/api/v1/bratvideo?text=VTX%20Group%20Free%20API
                    </code>
                  </pre>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Using in HTML</h3>
                <div className="relative">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 h-8 w-8"
                    onClick={() =>
                      copyToClipboard(
                        '<video controls>\n  <source src="https://api.vtxgroup.my.id/api/v1/bratvideo?text=VTX%20Group%20Free%20API" type="video/mp4">\n  Your browser does not support the video tag.\n</video>',
                      )
                    }
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code className="text-sm">
                      {
                        '<video controls>\n  <source src="https://api.vtxgroup.my.id/api/v1/bratvideo?text=VTX%20Group%20Free%20API" type="video/mp4">\n  Your browser does not support the video tag.\n</video>'
                      }
                    </code>
                  </pre>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Using with JavaScript Fetch</h3>
                <div className="relative">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 h-8 w-8"
                    onClick={() =>
                      copyToClipboard(`fetch('https://api.vtxgroup.my.id/api/v1/bratvideo?text=VTX%20Group%20Free%20API')
  .then(response => {
    if (!response.ok) {
      return response.json().then(err => Promise.reject(err));
    }
    return response.blob();
  })
  .then(blob => {
    const videoUrl = URL.createObjectURL(blob);
    const video = document.createElement('video');
    video.src = videoUrl;
    video.controls = true;
    document.body.appendChild(video);
  })
  .catch(error => console.error('Error:', error));`)
                    }
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code className="text-sm">
                      {`fetch('https://api.vtxgroup.my.id/api/v1/bratvideo?text=VTX%20Group%20Free%20API')
  .then(response => {
    if (!response.ok) {
      return response.json().then(err => Promise.reject(err));
    }
    return response.blob();
  })
  .then(blob => {
    const videoUrl = URL.createObjectURL(blob);
    const video = document.createElement('video');
    video.src = videoUrl;
    video.controls = true;
    document.body.appendChild(video);
  })
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
              <p>The API can return various error messages depending on the issue:</p>

              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Status Code</TableHead>
                      <TableHead>Error Message</TableHead>
                      <TableHead>Description</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>400</TableCell>
                      <TableCell className="font-mono text-xs">
                        {"{'error': 'Text not provided. Please include a \\'text\\' query parameter.'}"}
                      </TableCell>
                      <TableCell>
                        The <code className="text-xs bg-muted px-1 py-0.5 rounded">text</code> parameter is missing
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>500</TableCell>
                      <TableCell className="font-mono text-xs">{"{'error': 'API key not found.'}"}</TableCell>
                      <TableCell>The API key is not set in the environment variables</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>500</TableCell>
                      <TableCell className="font-mono text-xs">
                        {"{'error': 'An error occurred while processing your request.'}"}
                      </TableCell>
                      <TableCell>A general server-side error occurred</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </section>

          {/* Security Section */}
          <section id="security" className={activeSection === "security" ? "block" : "hidden"}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Security Measures</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 mt-0.5 text-primary flex-shrink-0" />
                  <span>The API key is stored in an environment variable and never exposed to the client.</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 mt-0.5 text-primary flex-shrink-0" />
                  <span>
                    If the API key is missing, the API will return a{" "}
                    <code className="text-xs bg-muted px-1 py-0.5 rounded">500</code> error.
                  </span>
                </li>
              </ul>

              <div className="mt-6">
                <h3 className="text-xl font-semibold">Notes</h3>
                <ul className="space-y-3 mt-2">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 mr-2 mt-0.5 text-primary flex-shrink-0" />
                    <span>Ensure that the API key you use is valid and has access to the external service.</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 mr-2 mt-0.5 text-primary flex-shrink-0" />
                    <span>
                      The API directly fetches and returns the video, making it efficient for real-time requests.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className={activeSection === "contact" ? "block" : "hidden"}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Contact</h2>
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
            sections={["overview", "endpoint", "examples", "errors", "security", "contact"]}
            sectionTitles={{
              overview: "Overview",
              endpoint: "Endpoint",
              examples: "Usage Examples",
              errors: "Error Handling",
              security: "Security",
              contact: "Contact",
            }}
            setActiveSection={setActiveSection}
            apiUrl="https://api.vtxgroup.my.id/api/v1/bratvideo?text=VTX%20Group%20Free%20API"
          />
        </motion.div>
      </div>
    </div>
  )
}

