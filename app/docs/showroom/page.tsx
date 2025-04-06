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

export default function ShowroomDocPage() {
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
              <h1 className="text-3xl font-bold tracking-tight">JKT48 Showroom API Documentation</h1>
              <Badge variant="outline" className="ml-2">
                v3.0.14
              </Badge>
            </div>
            <p className="text-muted-foreground">
              Get real-time information about JKT48 members and official accounts currently live on Showroom.
            </p>
          </div>

          <ApiBaseUrl url="https://api.jkt48connect.my.id/api/live" />

          <Separator />

          {/* Overview Section */}
          <section id="overview" className={activeSection === "overview" ? "block" : "hidden"}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Overview</h2>
              <p>
                The JKT48 Showroom API provides real-time information about JKT48 members and official accounts 
                currently streaming live on the{" "}
                <a
                  href="https://www.showroom-live.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Showroom
                </a>{" "}
                platform. Access live stream data including room IDs, viewers count, and stream details.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="border rounded-lg p-4 bg-card">
                  <h3 className="font-medium mb-2">Features</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      Real-time live stream detection
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      JKT48 member-specific data
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      Official JKT48 account coverage
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      Viewer count and engagement metrics
                    </li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4 bg-card">
                  <h3 className="font-medium mb-2">Quick Start</h3>
                  <p className="text-sm mb-2">Make a GET request to:</p>
                  <div className="relative">
                    <code className="text-xs block bg-muted p-2 rounded overflow-x-auto whitespace-pre-wrap break-all">
                      https://api.jkt48connect.my.id/api/live/showroom?api_key=YOUR_API_KEY
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
                <h3 className="text-xl font-semibold">Get Live Showroom Data</h3>
                <div className="space-y-2">
                  <h4 className="text-lg font-medium">Endpoint</h4>
                  <div className="relative">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 h-8 w-8"
                      onClick={() => copyToClipboard("GET /showroom")}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                      <code className="text-sm">GET /showroom</code>
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
                          <TableCell className="font-mono">api_key</TableCell>
                          <TableCell>string</TableCell>
                          <TableCell>Yes</TableCell>
                          <TableCell>Your API authentication key</TableCell>
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
                        copyToClipboard("GET https://api.jkt48connect.my.id/api/live/showroom?api_key=YOUR_API_KEY")
                      }
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                      <code className="text-sm">
                        GET https://api.jkt48connect.my.id/api/live/showroom?api_key=YOUR_API_KEY
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
  "timestamp": "2025-04-06T14:30:45Z",
  "count": 2,
  "lives": [
    {
      "name": "Gita Sekar Andarini",
      "roomId": "318064",
      "roomUrlKey": "gita_jkt48",
      "isLive": true,
      "viewers": 1243,
      "startedAt": "2025-04-06T13:45:22Z",
      "thumbnailUrl": "https://image.showroom-cdn.com/showroom-prod/image/room/318064_thumbnail.jpg",
      "isOfficial": true
    },
    {
      "name": "JKT48 Official",
      "roomId": "317778",
      "roomUrlKey": "jkt48_official",
      "isLive": true,
      "viewers": 3682,
      "startedAt": "2025-04-06T14:00:00Z",
      "thumbnailUrl": "https://image.showroom-cdn.com/showroom-prod/image/room/317778_thumbnail.jpg",
      "isOfficial": true
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
  "success": true,
  "timestamp": "2025-04-06T14:30:45Z",
  "count": 2,
  "lives": [
    {
      "name": "Gita Sekar Andarini",
      "roomId": "318064",
      "roomUrlKey": "gita_jkt48",
      "isLive": true,
      "viewers": 1243,
      "startedAt": "2025-04-06T13:45:22Z",
      "thumbnailUrl": "https://image.showroom-cdn.com/showroom-prod/image/room/318064_thumbnail.jpg",
      "isOfficial": true
    },
    {
      "name": "JKT48 Official",
      "roomId": "317778",
      "roomUrlKey": "jkt48_official",
      "isLive": true,
      "viewers": 3682,
      "startedAt": "2025-04-06T14:00:00Z",
      "thumbnailUrl": "https://image.showroom-cdn.com/showroom-prod/image/room/317778_thumbnail.jpg",
      "isOfficial": true
    }
  ]
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
                          Status Code: 401 Unauthorized
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
  "error": "Invalid or missing API key. Please provide a valid API key."
}`)
                          }
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                        <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                          <code className="text-sm">
                            {`{
  "success": false,
  "error": "Invalid or missing API key. Please provide a valid API key."
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
  "error": "An error occurred while fetching data from Showroom API. Please try again later."
}`)
                          }
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                        <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                          <code className="text-sm">
                            {`{
  "success": false,
  "error": "An error occurred while fetching data from Showroom API. Please try again later."
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
                <h3 className="text-xl font-semibold">Getting Live Showroom Data</h3>
                <div className="relative">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 h-8 w-8"
                    onClick={() =>
                      copyToClipboard(`// Example Request
GET https://api.jkt48connect.my.id/api/live/showroom?api_key=your_api_key_here

// Example Response (when members are live)
{
  "success": true,
  "timestamp": "2025-04-06T14:30:45Z",
  "count": 2,
  "lives": [
    {
      "name": "Gita Sekar Andarini",
      "roomId": "318064",
      "roomUrlKey": "gita_jkt48",
      "isLive": true,
      "viewers": 1243,
      "startedAt": "2025-04-06T13:45:22Z",
      "thumbnailUrl": "https://image.showroom-cdn.com/showroom-prod/image/room/318064_thumbnail.jpg",
      "isOfficial": true
    },
    {
      "name": "JKT48 Official",
      "roomId": "317778",
      "roomUrlKey": "jkt48_official",
      "isLive": true,
      "viewers": 3682,
      "startedAt": "2025-04-06T14:00:00Z",
      "thumbnailUrl": "https://image.showroom-cdn.com/showroom-prod/image/room/317778_thumbnail.jpg",
      "isOfficial": true
    }
  ]
}

// Example Response (when no members are live)
{
  "success": true,
  "timestamp": "2025-04-06T03:15:22Z",
  "count": 0,
  "lives": []
}`)
                    }
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code className="text-sm">
                      {`// Example Request
GET https://api.jkt48connect.my.id/api/live/showroom?api_key=your_api_key_here

// Example Response (when members are live)
{
  "success": true,
  "timestamp": "2025-04-06T14:30:45Z",
  "count": 2,
  "lives": [
    {
      "name": "Gita Sekar Andarini",
      "roomId": "318064",
      "roomUrlKey": "gita_jkt48",
      "isLive": true,
      "viewers": 1243,
      "startedAt": "2025-04-06T13:45:22Z",
      "thumbnailUrl": "https://image.showroom-cdn.com/showroom-prod/image/room/318064_thumbnail.jpg",
      "isOfficial": true
    },
    {
      "name": "JKT48 Official",
      "roomId": "317778",
      "roomUrlKey": "jkt48_official",
      "isLive": true,
      "viewers": 3682,
      "startedAt": "2025-04-06T14:00:00Z",
      "thumbnailUrl": "https://image.showroom-cdn.com/showroom-prod/image/room/317778_thumbnail.jpg",
      "isOfficial": true
    }
  ]
}

// Example Response (when no members are live)
{
  "success": true,
  "timestamp": "2025-04-06T03:15:22Z",
  "count": 0,
  "lives": []
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
                      copyToClipboard(`const API_KEY = 'your_api_key_here';

fetch('https://api.jkt48connect.my.id/api/live/showroom?api_key=' + API_KEY)
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      if (data.count > 0) {
        console.log('There are currently ' + data.count + ' JKT48 streams live:');
        data.lives.forEach(live => {
          console.log('- ' + live.name + ' with ' + live.viewers + ' viewers');
          console.log('  Room link: https://www.showroom-live.com/r/' + live.roomUrlKey);
        });
      } else {
        console.log('No JKT48 members are currently streaming.');
      }
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
                      {`const API_KEY = 'your_api_key_here';

fetch('https://api.jkt48connect.my.id/api/live/showroom?api_key=' + API_KEY)
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      if (data.count > 0) {
        console.log('There are currently ' + data.count + ' JKT48 streams live:');
        data.lives.forEach(live => {
          console.log('- ' + live.name + ' with ' + live.viewers + ' viewers');
          console.log('  Room link: https://www.showroom-live.com/r/' + live.roomUrlKey);
        });
      } else {
        console.log('No JKT48 members are currently streaming.');
      }
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
                  <h3 className="text-xl font-semibold">1. API Key Authentication</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 mr-2 mt-0.5 text-primary flex-shrink-0" />
                      <span>Each request must include a valid API key for authentication.</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 mr-2 mt-0.5 text-primary flex-shrink-0" />
                      <span>Contact the administrator for obtaining an API key.</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">2. Showroom Data Retrieval</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 mr-2 mt-0.5 text-primary flex-shrink-0" />
                      <span>The API checks for currently active JKT48 live streams on Showroom.</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 mr-2 mt-0.5 text-primary flex-shrink-0" />
                      <span>Only JKT48 members and official accounts are included in the results.</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 mr-2 mt-0.5 text-primary flex-shrink-0" />
                      <span>Information is retrieved from the Showroom API and processed in real-time.</span>
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
                      <span className="font-mono text-sm">timestamp</span>
                      <span className="ml-2">The time when the data was retrieved.</span>
                    </li>
                    <li className="flex items-start ml-7">
                      <span className="font-mono text-sm">count</span>
                      <span className="ml-2">The number of active live streams found.</span>
                    </li>
                    <li className="flex items-start ml-7">
                      <span className="font-mono text-sm">lives</span>
                      <span className="ml-2">An array of objects containing details about each live stream.</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">4. Data Refresh Rate</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 mr-2 mt-0.5 text-primary flex-shrink-0" />
                      <span>The API refreshes data approximately every 30 seconds.</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 mr-2 mt-0.5 text-primary flex-shrink-0" />
                      <span>Each request provides the most recent available data.</span>
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
              <p>For inquiries, support, or to request an API key, please reach out via:</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 mt-0.5 text-primary flex-shrink-0" />
                  <span>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:contact@jkt48connect.my.id" className="text-primary hover:underline">
                      contact@jkt48connect.my.id
                    </a>
                  </span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 mt-0.5 text-primary flex-shrink-0" />
                  <span>
                    <strong>Website:</strong>{" "}
                    <a
                      href="https://jkt48connect.web.id"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      https://jkt48connect.my.id
                    </a>
                  </span>
                </li>
              </ul>

              <div className="mt-8 space-y-2">
                <h3 className="text-xl font-semibold">API Information</h3>
                <ul className="space-y-1">
                  <li>
                    <strong>Provider:</strong> JKT48 Connect
                  </li>
                  <li>
                    <strong>Version:</strong> 3.0.14(on npmjs) 
                  </li>
                  <li>
                    <strong>License:</strong> API for non-commercial use only
                  </li>
                  <li>
                    <strong>Rate Limit:</strong> 60 requests per minute
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
            apiUrl="https://api.jkt48connect.my.id/api/live/showroom?api_key=YOUR_API_KEY"
          />
        </motion.div>
      </div>
    </div>
  )
                                      }
