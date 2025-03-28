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

export default function WaifuDocPage() {
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
              variant={activeSection === "categories" ? "default" : "ghost"}
              size="sm"
              className="w-full justify-start"
              onClick={() => setActiveSection("categories")}
            >
              Categories
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
              variant={activeSection === "examples" ? "default" : "ghost"}
              size="sm"
              className="w-full justify-start"
              onClick={() => setActiveSection("examples")}
            >
              Usage Examples
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
              <h1 className="text-3xl font-bold tracking-tight">Waifu API Documentation</h1>
              <Badge variant="outline" className="ml-2">
                v1.1
              </Badge>
            </div>
            <p className="text-muted-foreground">
              Access anime-themed images categorized under SFW (Safe for Work) with a simple GET request.
            </p>
          </div>

          <ApiBaseUrl url="https://api.vtxgroup.my.id/api/v1" />

          <Separator />

          {/* Overview Section */}
          <section id="overview" className={activeSection === "overview" ? "block" : "hidden"}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Overview</h2>
              <p>
                The Waifu API provides anime-themed images categorized under SFW (Safe for Work). This API allows users
                to retrieve images with a simple GET request.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="border rounded-lg p-4 bg-card">
                  <h3 className="font-medium mb-2">Features</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      Multiple image categories
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      Direct image responses
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      Simple and easy-to-use API
                    </li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4 bg-card">
                  <h3 className="font-medium mb-2">Quick Start</h3>
                  <p className="text-sm mb-2">Make a GET request to:</p>
                  <div className="relative">
                    <code className="text-xs block bg-muted p-2 rounded overflow-x-auto whitespace-pre-wrap break-all">
                      https://api.vtxgroup.my.id/api/v1/waifu/neko
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
                <h3 className="text-xl font-semibold">Get a Single Image</h3>
                <div className="space-y-2">
                  <h4 className="text-lg font-medium">Endpoint</h4>
                  <div className="relative">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 h-8 w-8"
                      onClick={() => copyToClipboard("GET /waifu/{category}")}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                      <code className="text-sm">GET /waifu/{"{category}"}</code>
                    </pre>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-lg font-medium">Description</h4>
                  <p>Retrieves a single random image from a specified category.</p>
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
                          <TableCell className="font-mono">category</TableCell>
                          <TableCell>string</TableCell>
                          <TableCell>Yes</TableCell>
                          <TableCell>The category of the waifu image (see Categories section)</TableCell>
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
                      onClick={() => copyToClipboard("GET https://api.vtxgroup.my.id/api/v1/waifu/neko")}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                      <code className="text-sm">GET https://api.vtxgroup.my.id/api/v1/waifu/neko</code>
                    </pre>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-lg font-medium">Response</h4>
                  <p>
                    The API directly serves the image instead of returning a JSON response with a URL. To request an
                    image, you can fetch the endpoint and handle the binary image data accordingly.
                  </p>
                  <div className="space-y-2">
                    <h5 className="text-base font-medium">Response Headers</h5>
                    <div className="relative">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 h-8 w-8"
                        onClick={() =>
                          copyToClipboard("Content-Type: image/jpeg (or image/png depending on the response)")
                        }
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                      <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                        <code className="text-sm">
                          Content-Type: image/jpeg (or image/png depending on the response)
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Categories Section */}
          <section id="categories" className={activeSection === "categories" ? "block" : "hidden"}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Available Categories</h2>
              <p>The following categories are available for use with the Waifu API:</p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                {[
                  "waifu",
                  "neko",
                  "shinobu",
                  "megumin",
                  "bully",
                  "cuddle",
                  "cry",
                  "hug",
                  "awoo",
                  "kiss",
                  "lick",
                  "pat",
                  "smug",
                  "bonk",
                  "yeet",
                  "blush",
                  "smile",
                  "wave",
                  "highfive",
                  "handhold",
                  "nom",
                  "bite",
                  "glomp",
                  "slap",
                  "kill",
                  "kick",
                  "happy",
                  "wink",
                  "poke",
                  "dance",
                  "cringe",
                ].map((category) => (
                  <div key={category} className="bg-muted p-2 rounded text-center">
                    <code className="text-xs">{category}</code>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <p className="text-sm text-muted-foreground">
                  Note: New categories may be added in the future. Check back for updates.
                </p>
              </div>
            </div>
          </section>

          {/* Error Handling Section */}
          <section id="errors" className={activeSection === "errors" ? "block" : "hidden"}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Error Handling</h2>
              <p>The API returns standard HTTP status codes to indicate success or failure.</p>

              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Status Code</TableHead>
                      <TableHead>Meaning</TableHead>
                      <TableHead>Description</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>200</TableCell>
                      <TableCell>OK</TableCell>
                      <TableCell>Request was successful, returns an image</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>400</TableCell>
                      <TableCell>Bad Request</TableCell>
                      <TableCell>Invalid category provided</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>404</TableCell>
                      <TableCell>Not Found</TableCell>
                      <TableCell>The requested endpoint does not exist</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>405</TableCell>
                      <TableCell>Method Not Allowed</TableCell>
                      <TableCell>The request method is not supported</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>500</TableCell>
                      <TableCell>Internal Server Error</TableCell>
                      <TableCell>An unexpected error occurred</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </section>

          {/* Usage Examples Section */}
          <section id="examples" className={activeSection === "examples" ? "block" : "hidden"}>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Usage Examples</h2>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">JavaScript Fetch Example</h3>
                <div className="relative">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 h-8 w-8"
                    onClick={() =>
                      copyToClipboard(`fetch('https://api.vtxgroup.my.id/api/v1/waifu/neko')
  .then(response => {
    if (!response.ok) throw new Error('Network response was not ok');
    return response.blob();
  })
  .then(blob => {
    const imgUrl = URL.createObjectURL(blob);
    const img = document.createElement('img');
    img.src = imgUrl;
    document.body.appendChild(img);
  })
  .catch(error => console.error('Error:', error));`)
                    }
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code className="text-sm">
                      {`fetch('https://api.vtxgroup.my.id/api/v1/waifu/neko')
  .then(response => {
    if (!response.ok) throw new Error('Network response was not ok');
    return response.blob();
  })
  .then(blob => {
    const imgUrl = URL.createObjectURL(blob);
    const img = document.createElement('img');
    img.src = imgUrl;
    document.body.appendChild(img);
  })
  .catch(error => console.error('Error:', error));`}
                    </code>
                  </pre>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">HTML Image Tag Example</h3>
                <div className="relative">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 h-8 w-8"
                    onClick={() =>
                      copyToClipboard(
                        `<img src="https://api.vtxgroup.my.id/api/v1/waifu/neko" alt="Random Neko Image" />`,
                      )
                    }
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code className="text-sm">
                      {`<img src="https://api.vtxgroup.my.id/api/v1/waifu/neko" alt="Random Neko Image" />`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </section>

          <div className="mt-8 space-y-4">
            <div className="border-t pt-6">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center">
                  <span className="text-sm font-medium">Author:</span>
                  <span className="ml-2 text-sm">VTX Group</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm font-medium">Version:</span>
                  <span className="ml-2 text-sm">1.1</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm font-medium">License:</span>
                  <span className="ml-2 text-sm">MIT</span>
                </div>
              </div>
            </div>
          </div>

          <DocNavigation
            activeSection={activeSection}
            sections={["overview", "endpoints", "categories", "errors", "examples"]}
            sectionTitles={{
              overview: "Overview",
              endpoints: "Endpoints",
              categories: "Categories",
              errors: "Error Handling",
              examples: "Usage Examples",
            }}
            setActiveSection={setActiveSection}
            apiUrl="https://api.vtxgroup.my.id/api/v1/waifu/neko"
          />
        </motion.div>
      </div>
    </div>
  )
}

