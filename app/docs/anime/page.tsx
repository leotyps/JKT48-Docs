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

export default function AnimeDocPage() {
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
              variant={activeSection === "authentication" ? "default" : "ghost"}
              size="sm"
              className="w-full justify-start"
              onClick={() => setActiveSection("authentication")}
            >
              Authentication
            </Button>
            <Button
              variant={activeSection === "rate-limits" ? "default" : "ghost"}
              size="sm"
              className="w-full justify-start"
              onClick={() => setActiveSection("rate-limits")}
            >
              Rate Limits
            </Button>
            <Button
              variant={activeSection === "errors" ? "default" : "ghost"}
              size="sm"
              className="w-full justify-start"
              onClick={() => setActiveSection("errors")}
            >
              Error Handling
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
              <h1 className="text-3xl font-bold tracking-tight">Anime API Documentation</h1>
              <Badge variant="outline" className="ml-2">
                v1
              </Badge>
            </div>
            <p className="text-muted-foreground">Access a vast collection of anime data sourced from Jikan API.</p>
          </div>

          <ApiBaseUrl url="https://api.vtxgroup.my.id/api/v1" />

          <Separator />

          {/* Overview Section */}
          <section id="overview" className={activeSection === "overview" ? "block" : "hidden"}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Overview</h2>
              <p>
                The Anime API provides access to a vast collection of anime data sourced from Jikan API. This API allows
                users to search, filter, and retrieve anime details securely while keeping the external API URL hidden.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="border rounded-lg p-4 bg-card">
                  <h3 className="font-medium mb-2">Features</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      Search anime by title, genre, and more
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      Filter results by various parameters
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      Retrieve detailed anime information
                    </li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4 bg-card">
                  <h3 className="font-medium mb-2">Quick Start</h3>
                  <p className="text-sm mb-2">Make a GET request to:</p>
                  <div className="relative">
                    <code className="text-xs block bg-muted p-2 rounded overflow-x-auto whitespace-pre-wrap break-all">
                      https://api.vtxgroup.my.id/api/v1/anime?q=naruto&limit=5
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
                <h3 className="text-xl font-semibold">1. Search Anime</h3>
                <div className="space-y-2">
                  <h4 className="text-lg font-medium">Endpoint</h4>
                  <div className="relative">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 h-8 w-8"
                      onClick={() => copyToClipboard("GET /anime")}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                      <code className="text-sm">GET /anime</code>
                    </pre>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-lg font-medium">Description</h4>
                  <p>
                    Retrieves a list of anime based on query parameters such as title, genre, type, status, rating, and
                    more.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-lg font-medium">Query Parameters</h4>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Parameter</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead>Description</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-mono">q</TableCell>
                          <TableCell>string</TableCell>
                          <TableCell>Search anime by title</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-mono">page</TableCell>
                          <TableCell>integer</TableCell>
                          <TableCell>Page number for pagination</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-mono">limit</TableCell>
                          <TableCell>integer</TableCell>
                          <TableCell>Number of results per page</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-mono">type</TableCell>
                          <TableCell>string</TableCell>
                          <TableCell>Filter by anime type (e.g., tv, movie, ova, special, etc.)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-mono">score</TableCell>
                          <TableCell>number</TableCell>
                          <TableCell>Filter by exact score</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-mono">min_score</TableCell>
                          <TableCell>number</TableCell>
                          <TableCell>Set a minimum score for results</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-mono">max_score</TableCell>
                          <TableCell>number</TableCell>
                          <TableCell>Set a maximum score for results</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-mono">status</TableCell>
                          <TableCell>string</TableCell>
                          <TableCell>Filter by status (airing, complete, upcoming)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-mono">rating</TableCell>
                          <TableCell>string</TableCell>
                          <TableCell>Filter by rating (g, pg, pg13, r17, r, rx)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-mono">sfw</TableCell>
                          <TableCell>boolean</TableCell>
                          <TableCell>Exclude adult content</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-mono">genres</TableCell>
                          <TableCell>string</TableCell>
                          <TableCell>Filter by genre IDs (comma-separated)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-mono">genres_exclude</TableCell>
                          <TableCell>string</TableCell>
                          <TableCell>Exclude specific genre IDs (comma-separated)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-mono">order_by</TableCell>
                          <TableCell>string</TableCell>
                          <TableCell>
                            Sort results by specific properties (e.g., score, popularity, rank, members, etc.)
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-mono">sort</TableCell>
                          <TableCell>string</TableCell>
                          <TableCell>Sorting order (`asc` or `desc`)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-mono">start_date</TableCell>
                          <TableCell>string</TableCell>
                          <TableCell>Filter by start date (YYYY-MM-DD)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-mono">end_date</TableCell>
                          <TableCell>string</TableCell>
                          <TableCell>Filter by end date (YYYY-MM-DD)</TableCell>
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
                            'curl -X GET "https://api.vtxgroup.my.id/api/v1/anime?q=naruto&limit=5&page=1&order_by=score&sort=desc"',
                          )
                        }
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                      <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                        <code className="text-sm">
                          {`curl -X GET "https://api.vtxgroup.my.id/api/v1/anime?q=naruto&limit=5&page=1&order_by=score&sort=desc"`}
                        </code>
                      </pre>
                    </TabsContent>
                    <TabsContent value="js" className="relative">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 h-8 w-8"
                        onClick={() =>
                          copyToClipboard(`fetch("https://api.vtxgroup.my.id/api/v1/anime?q=naruto&limit=5&page=1&order_by=score&sort=desc")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));`)
                        }
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                      <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                        <code className="text-sm">
                          {`fetch("https://api.vtxgroup.my.id/api/v1/anime?q=naruto&limit=5&page=1&order_by=score&sort=desc")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));`}
                        </code>
                      </pre>
                    </TabsContent>
                  </Tabs>
                </div>

                <div className="space-y-2">
                  <h4 className="text-lg font-medium">Response Example</h4>
                  <div className="relative">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 h-8 w-8"
                      onClick={() =>
                        copyToClipboard(`{
  "wm": "VTX API",
  "data": [
    {
      "mal_id": 20,
      "url": "https://myanimelist.net/anime/20/Naruto",
      "images": {
        "jpg": {
          "image_url": "https://cdn.myanimelist.net/images/anime/20/20.jpg"
        }
      },
      "title": "Naruto",
      "title_english": "Naruto",
      "title_japanese": "ナルト",
      "type": "TV",
      "episodes": 220,
      "status": "Finished Airing",
      "score": 7.9,
      "rank": 500,
      "popularity": 50,
      "synopsis": "Naruto Uzumaki is a young ninja..."
    }
  ],
  "pagination": {
    "last_visible_page": 10,
    "has_next_page": true,
    "items": {
      "count": 5,
      "total": 50,
      "per_page": 5
    }
  }
}`)
                      }
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                      <code className="text-sm">
                        {`{
  "wm": "VTX API",
  "data": [
    {
      "mal_id": 20,
      "url": "https://myanimelist.net/anime/20/Naruto",
      "images": {
        "jpg": {
          "image_url": "https://cdn.myanimelist.net/images/anime/20/20.jpg"
        }
      },
      "title": "Naruto",
      "title_english": "Naruto",
      "title_japanese": "ナルト",
      "type": "TV",
      "episodes": 220,
      "status": "Finished Airing",
      "score": 7.9,
      "rank": 500,
      "popularity": 50,
      "synopsis": "Naruto Uzumaki is a young ninja..."
    }
  ],
  "pagination": {
    "last_visible_page": 10,
    "has_next_page": true,
    "items": {
      "count": 5,
      "total": 50,
      "per_page": 5
    }
  }
}`}
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Authentication Section */}
          <section id="authentication" className={activeSection === "authentication" ? "block" : "hidden"}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Authentication</h2>
              <p>This API does not require authentication.</p>
            </div>
          </section>

          {/* Rate Limits Section */}
          <section id="rate-limits" className={activeSection === "rate-limits" ? "block" : "hidden"}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Rate Limits</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 mt-0.5 text-primary flex-shrink-0" />
                  <span>
                    <strong>Max Requests</strong>: 60 requests per minute
                  </span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 mt-0.5 text-primary flex-shrink-0" />
                  <span>
                    <strong>Status Code for Rate Limit Exceeded</strong>:{" "}
                    <code className="text-xs bg-muted px-1 py-0.5 rounded">429 Too Many Requests</code>
                  </span>
                </li>
              </ul>
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
                      <TableHead>Meaning</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>400</TableCell>
                      <TableCell>Bad Request</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>404</TableCell>
                      <TableCell>Not Found</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>500</TableCell>
                      <TableCell>Internal Server Error</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </section>

          <DocNavigation
            activeSection={activeSection}
            sections={["overview", "endpoints", "authentication", "rate-limits", "errors"]}
            sectionTitles={{
              overview: "Overview",
              endpoints: "Endpoints",
              authentication: "Authentication",
              "rate-limits": "Rate Limits",
              errors: "Error Handling",
            }}
            setActiveSection={setActiveSection}
            apiUrl="https://api.vtxgroup.my.id/api/v1/anime?q=naruto&limit=5"
          />
        </motion.div>
      </div>
    </div>
  )
}

