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

export default function WeatherDocPage() {
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
              <h1 className="text-3xl font-bold tracking-tight">Weather API Documentation</h1>
              <Badge variant="outline" className="ml-2">
                v1
              </Badge>
            </div>
            <p className="text-muted-foreground">Get accurate weather data for any city around the world.</p>
          </div>

          <ApiBaseUrl url="https://api.vtxgroup.my.id/api/v1/weather" />

          <Separator />

          {/* Overview Section */}
          <section id="overview" className={activeSection === "overview" ? "block" : "hidden"}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Overview</h2>
              <p>
                The Weather API provides current weather data for cities worldwide. It's designed to be simple to use
                and integrate into your applications.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="border rounded-lg p-4 bg-card">
                  <h3 className="font-medium mb-2">Features</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      Current weather conditions
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      Temperature in Celsius
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      Weather descriptions
                    </li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4 bg-card">
                  <h3 className="font-medium mb-2">Quick Start</h3>
                  <p className="text-sm mb-2">Make a GET request to:</p>
                  <div className="relative">
                    <code className="text-xs block bg-muted p-2 rounded overflow-x-auto whitespace-pre-wrap break-all">
                      https://api.vtxgroup.my.id/api/v1/weather?city=London
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
                <h3 className="text-xl font-semibold">GET /api/v1/weather</h3>
                <p>Retrieves weather data for a specified city.</p>
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
                        <TableCell className="font-mono">city</TableCell>
                        <TableCell>string</TableCell>
                        <TableCell>Yes</TableCell>
                        <TableCell>The name of the city to fetch weather data for</TableCell>
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
                      onClick={() =>
                        copyToClipboard('curl -X GET "https://api.vtxgroup.my.id/api/v1/weather?city=London"')
                      }
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                      <code className="text-sm">
                        {`curl -X GET "https://api.vtxgroup.my.id/api/v1/weather?city=London"`}
                      </code>
                    </pre>
                  </TabsContent>
                  <TabsContent value="js" className="relative">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 h-8 w-8"
                      onClick={() =>
                        copyToClipboard(`fetch("https://api.vtxgroup.my.id/api/v1/weather?city=London")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));`)
                      }
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                      <code className="text-sm">
                        {`fetch("https://api.vtxgroup.my.id/api/v1/weather?city=London")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));`}
                      </code>
                    </pre>
                  </TabsContent>
                  <TabsContent value="python" className="relative">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 h-8 w-8"
                      onClick={() =>
                        copyToClipboard(`import requests

response = requests.get("https://api.vtxgroup.my.id/api/v1/weather?city=London")
data = response.json()
print(data)`)
                      }
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                      <code className="text-sm">
                        {`import requests

response = requests.get("https://api.vtxgroup.my.id/api/v1/weather?city=London")
data = response.json()
print(data)`}
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
              <h2 className="text-2xl font-bold">2. Response Format</h2>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Success Response</h3>
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
  "name": "London",
  "main": {
      "temp": 15.5
  },
  "weather": [
      {
          "description": "clear sky"
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
  "name": "London",
  "main": {
      "temp": 15.5
  },
  "weather": [
      {
          "description": "clear sky"
      }
  ]
}`}
                    </code>
                  </pre>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Error Responses</h3>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm mb-1">
                      <Badge variant="outline" className="text-destructive border-destructive">
                        Status Code: 400 Bad Request
                      </Badge>
                      <span className="ml-2 text-sm">
                        Missing <code className="text-xs bg-muted px-1 py-0.5 rounded">city</code> parameter
                      </span>
                    </p>
                    <div className="relative">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 h-8 w-8"
                        onClick={() =>
                          copyToClipboard(`{
  "error": "City parameter is required"
}`)
                        }
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                      <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                        <code className="text-sm">
                          {`{
  "error": "City parameter is required"
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
                      <span className="ml-2 text-sm">Invalid City or API Failure</span>
                    </p>
                    <div className="relative">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 h-8 w-8"
                        onClick={() =>
                          copyToClipboard(`{
  "error": "Failed to fetch weather data"
}`)
                        }
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                      <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                        <code className="text-sm">
                          {`{
  "error": "Failed to fetch weather data"
}`}
                        </code>
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
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 mt-0.5 text-primary flex-shrink-0" />
                  <span>
                    Ensure that you pass a valid <code className="text-xs bg-muted px-1 py-0.5 rounded">city</code> name
                    as a query parameter.
                  </span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 mt-0.5 text-primary flex-shrink-0" />
                  <span>
                    API responses are in <strong>JSON format</strong>.
                  </span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 mt-0.5 text-primary flex-shrink-0" />
                  <span>
                    Temperature is returned in <strong>Celsius</strong> by default.
                  </span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 mt-0.5 text-primary flex-shrink-0" />
                  <span>Rate limits may apply for excessive requests.</span>
                </li>
              </ul>
            </div>
          </section>

          <DocNavigation
            activeSection={activeSection}
            sections={["overview", "request", "response", "guidelines"]}
            sectionTitles={{
              overview: "Overview",
              request: "Request Method",
              response: "Response Format",
              guidelines: "Usage Guidelines",
            }}
            setActiveSection={setActiveSection}
            apiUrl="https://api.vtxgroup.my.id/api/v1/weather?city=London"
          />
        </motion.div>
      </div>
    </div>
  )
}

