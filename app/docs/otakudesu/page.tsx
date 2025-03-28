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

export default function OtakudesuDocPage() {
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
              <h1 className="text-3xl font-bold tracking-tight">Otakudesu API Documentation</h1>
              <Badge variant="outline" className="ml-2">
                v1
              </Badge>
            </div>
            <p className="text-muted-foreground">
              Access anime data from Otakudesu including ongoing and completed anime, detailed information, episode
              lists, and genre-based collections.
            </p>
          </div>

          <ApiBaseUrl url="https://api.vtxgroup.my.id/api/v1/otakudesu" />

          <Separator />

          {/* Overview Section */}
          <section id="overview" className={activeSection === "overview" ? "block" : "hidden"}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Overview</h2>
              <p>
                Otakudesu API Proxy provides a simple interface to retrieve anime-related data, including ongoing and
                completed anime, detailed anime information, episode lists, and genre-based anime collections. This API
                acts as a proxy to ensure seamless data fetching and a structured response format.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="border rounded-lg p-4 bg-card">
                  <h3 className="font-medium mb-2">Features</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      Ongoing and completed anime listings
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      Detailed anime information
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      Episode lists and batch download links
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      Genre-based anime collections
                    </li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4 bg-card">
                  <h3 className="font-medium mb-2">Quick Start</h3>
                  <p className="text-sm mb-2">Make a GET request to:</p>
                  <div className="relative">
                    <code className="text-xs block bg-muted p-2 rounded overflow-x-auto whitespace-pre-wrap break-all">
                      https://api.vtxgroup.my.id/api/v1/otakudesu/getOngoingAnime?page=1
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

              <div className="space-y-8">
                {/* Endpoint 1 */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">1. Get Ongoing Anime</h3>
                  <div className="space-y-2">
                    <h4 className="text-lg font-medium">Endpoint</h4>
                    <div className="relative">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 h-8 w-8"
                        onClick={() => copyToClipboard("GET /getOngoingAnime")}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                      <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                        <code className="text-sm">GET /getOngoingAnime</code>
                      </pre>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-lg font-medium">Description</h4>
                    <p>Retrieves a paginated list of ongoing anime.</p>
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
                            <TableCell className="font-mono">page</TableCell>
                            <TableCell>integer</TableCell>
                            <TableCell>Yes</TableCell>
                            <TableCell>Page number for pagination</TableCell>
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
                          copyToClipboard("GET https://api.vtxgroup.my.id/api/v1/otakudesu/getOngoingAnime?page=1")
                        }
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                      <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                        <code className="text-sm">
                          GET https://api.vtxgroup.my.id/api/v1/otakudesu/getOngoingAnime?page=1
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>

                {/* Endpoint 2 */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">2. Get Completed Anime</h3>
                  <div className="space-y-2">
                    <h4 className="text-lg font-medium">Endpoint</h4>
                    <div className="relative">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 h-8 w-8"
                        onClick={() => copyToClipboard("GET /getCompletedAnime")}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                      <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                        <code className="text-sm">GET /getCompletedAnime</code>
                      </pre>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-lg font-medium">Description</h4>
                    <p>Retrieves a paginated list of completed anime.</p>
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
                            <TableCell className="font-mono">page</TableCell>
                            <TableCell>integer</TableCell>
                            <TableCell>Yes</TableCell>
                            <TableCell>Page number for pagination</TableCell>
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
                          copyToClipboard("GET https://api.vtxgroup.my.id/api/v1/otakudesu/getCompletedAnime?page=1")
                        }
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                      <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                        <code className="text-sm">
                          GET https://api.vtxgroup.my.id/api/v1/otakudesu/getCompletedAnime?page=1
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>

                {/* Endpoint 3 */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">3. Search Anime</h3>
                  <div className="space-y-2">
                    <h4 className="text-lg font-medium">Endpoint</h4>
                    <div className="relative">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 h-8 w-8"
                        onClick={() => copyToClipboard("GET /getAnimeSearch")}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                      <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                        <code className="text-sm">GET /getAnimeSearch</code>
                      </pre>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-lg font-medium">Description</h4>
                    <p>Searches for anime by keyword.</p>
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
                            <TableCell className="font-mono">q</TableCell>
                            <TableCell>string</TableCell>
                            <TableCell>Yes</TableCell>
                            <TableCell>Search term</TableCell>
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
                          copyToClipboard("GET https://api.vtxgroup.my.id/api/v1/otakudesu/getAnimeSearch?q=naruto")
                        }
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                      <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                        <code className="text-sm">
                          GET https://api.vtxgroup.my.id/api/v1/otakudesu/getAnimeSearch?q=naruto
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>

                {/* Additional Endpoints */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Additional Endpoints</h3>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Endpoint</TableHead>
                          <TableHead>Description</TableHead>
                          <TableHead>Parameters</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-mono">GET /getAnimeList</TableCell>
                          <TableCell>Retrieves a list of all available anime</TableCell>
                          <TableCell>None</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-mono">GET /getAnimeDetail</TableCell>
                          <TableCell>Fetches detailed information for a specific anime</TableCell>
                          <TableCell>detail (string, anime identifier)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-mono">GET /getAnimeEpisode</TableCell>
                          <TableCell>Retrieves information about a specific anime episode</TableCell>
                          <TableCell>detail (string, episode identifier)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-mono">GET /getBatchLink</TableCell>
                          <TableCell>Retrieves batch download links for an anime</TableCell>
                          <TableCell>detail (string, anime identifier)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-mono">GET /getGenreList</TableCell>
                          <TableCell>Retrieves a list of available anime genres</TableCell>
                          <TableCell>None</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-mono">GET /getGenrePage</TableCell>
                          <TableCell>Retrieves anime categorized under a specific genre</TableCell>
                          <TableCell>genre (string), page (integer)</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Response Format Section */}
          <section id="response" className={activeSection === "response" ? "block" : "hidden"}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Response Format</h2>
              <p>The API returns JSON responses containing the requested anime data.</p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Example Success Response</h3>
                <div className="relative">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 h-8 w-8"
                    onClick={() =>
                      copyToClipboard(`{
  "data": {
    "results": [ ... ]
  }
}`)
                    }
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code className="text-sm">
                      {`{
  "data": {
    "results": [ ... ]
  }
}`}
                    </code>
                  </pre>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Example Error Response</h3>
                <div className="relative">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 h-8 w-8"
                    onClick={() =>
                      copyToClipboard(`{
  "error": "Invalid endpoint"
}`)
                    }
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code className="text-sm">
                      {`{
  "error": "Invalid endpoint"
}`}
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
                      <TableCell>400 Bad Request</TableCell>
                      <TableCell>Missing or invalid query parameters</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>404 Not Found</TableCell>
                      <TableCell>The requested resource does not exist</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>500 Internal Server Error</TableCell>
                      <TableCell>Issues with fetching data from the backend</TableCell>
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
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 mt-0.5 text-primary flex-shrink-0" />
                  <span>
                    <strong>Email:</strong> fort@vtxgroup.my.id
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
            sections={["overview", "endpoints", "response", "errors", "contact"]}
            sectionTitles={{
              overview: "Overview",
              endpoints: "Endpoints",
              response: "Response Format",
              errors: "Error Handling",
              contact: "Contact",
            }}
            setActiveSection={setActiveSection}
            apiUrl="https://api.vtxgroup.my.id/api/v1/otakudesu/getOngoingAnime?page=1"
          />
        </motion.div>
      </div>
    </div>
  )
}

