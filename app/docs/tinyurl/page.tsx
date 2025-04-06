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

export default function JKT48ConnectRecentLiveDocsPage() {
  const [activeSection, setActiveSection] = useState("overview")
  const [copied, setCopied] = useState(false)

  const copyToClipboard = (text) => {
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
              variant={activeSection === "data-structure" ? "default" : "ghost"}
              size="sm"
              className="w-full justify-start"
              onClick={() => setActiveSection("data-structure")}
            >
              Data Structure
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
              <h1 className="text-3xl font-bold tracking-tight">JKT48Connect Recent Live API</h1>
              <Badge variant="outline" className="ml-2">
                v1
              </Badge>
            </div>
            <p className="text-muted-foreground">
              Access recently ended live broadcasts data from JKT48 members
            </p>
          </div>

          <ApiBaseUrl url="https://api.jkt48connect.my.id/api" />

          <Separator />

          {/* Overview Section */}
          <section id="overview" className={activeSection === "overview" ? "block" : "hidden"}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Overview</h2>
              <p>
                The JKT48Connect Recent Live API provides data about recently ended live broadcasts from JKT48 members.
                This includes live sessions from IDN Live, SHOWROOM, and YouTube channels related to JKT48.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="border rounded-lg p-4 bg-card">
                  <h3 className="font-medium mb-2">Features</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      Recent live sessions from JKT48 members
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      Comprehensive live data including duration and viewers
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      Gift information and points collected
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      Multiple platforms (IDN Live, SHOWROOM, YouTube)
                    </li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4 bg-card">
                  <h3 className="font-medium mb-2">Quick Start</h3>
                  <p className="text-sm mb-2">Make a GET request to:</p>
                  <div className="relative">
                    <code className="text-xs block bg-muted p-2 rounded overflow-x-auto whitespace-pre-wrap break-all">
                      https://api.jkt48connect.my.id/api/recent?api_key=YOUR_API_KEY
                    </code>
                  </div>
                  <p className="text-xs mt-2 text-muted-foreground">
                    Note: API key is required for authentication
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Endpoints Section */}
          <section id="endpoints" className={activeSection === "endpoints" ? "block" : "hidden"}>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Endpoints</h2>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Get Recent Live Data</h3>
                <div className="space-y-2">
                  <h4 className="text-lg font-medium">Endpoint</h4>
                  <div className="relative">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 h-8 w-8"
                      onClick={() => copyToClipboard("GET /recent")}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                      <code className="text-sm">GET /recent</code>
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
                          <TableCell>Your API key for authentication</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-mono">limit</TableCell>
                          <TableCell>number</TableCell>
                          <TableCell>No</TableCell>
                          <TableCell>Limit the number of results (default: 10)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-mono">type</TableCell>
                          <TableCell>string</TableCell>
                          <TableCell>No</TableCell>
                          <TableCell>Filter by platform type (idn, showroom, youtube)</TableCell>
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
                        copyToClipboard("GET https://api.jkt48connect.my.id/api/recent?api_key=YOUR_API_KEY&limit=5")
                      }
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                      <code className="text-sm">
                        GET https://api.jkt48connect.my.id/api/recent?api_key=YOUR_API_KEY&limit=5
                      </code>
                    </pre>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-lg font-medium">Successful Response</h4>
                  <p className="text-sm mb-2">Returns an array of recent live broadcast data objects</p>
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
  "error": "Invalid or missing API key"
}`)
                          }
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                        <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                          <code className="text-sm">
                            {`{
  "success": false,
  "error": "Invalid or missing API key"
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
                <h3 className="text-xl font-semibold">Fetching Recent Live Data</h3>
                <div className="relative">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 h-8 w-8"
                    onClick={() =>
                      copyToClipboard(`// Example Request
GET https://api.jkt48connect.my.id/api/recent?api_key=YOUR_API_KEY&limit=5

// The response is an array containing live broadcast data`)
                    }
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code className="text-sm">
                      {`// Example Request
GET https://api.jkt48connect.my.id/api/recent?api_key=YOUR_API_KEY&limit=5

// The response is an array containing live broadcast data`}
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
                      copyToClipboard(`fetch('https://api.jkt48connect.my.id/api/recent?api_key=YOUR_API_KEY&limit=5')
  .then(response => response.json())
  .then(data => {
    // data is an array of recent live broadcasts
    console.log('Recent live sessions:', data);
    
    // Access the first broadcast
    if (data.length > 0) {
      const firstBroadcast = data[0];
      console.log('Member name:', firstBroadcast.member.name);
      console.log('Platform type:', firstBroadcast.type);
      console.log('Duration (ms):', firstBroadcast.live_info.duration);
    }
  })
  .catch(error => console.error('Fetch Error:', error));`)
                    }
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code className="text-sm">
                      {`fetch('https://api.jkt48connect.my.id/api/recent?api_key=YOUR_API_KEY&limit=5')
  .then(response => response.json())
  .then(data => {
    // data is an array of recent live broadcasts
    console.log('Recent live sessions:', data);
    
    // Access the first broadcast
    if (data.length > 0) {
      const firstBroadcast = data[0];
      console.log('Member name:', firstBroadcast.member.name);
      console.log('Platform type:', firstBroadcast.type);
      console.log('Duration (ms):', firstBroadcast.live_info.duration);
    }
  })
  .catch(error => console.error('Fetch Error:', error));`}
                    </code>
                  </pre>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Filter by Platform Type</h3>
                <div className="relative">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 h-8 w-8"
                    onClick={() =>
                      copyToClipboard(`// Example - Get only SHOWROOM broadcasts
GET https://api.jkt48connect.my.id/api/recent?api_key=YOUR_API_KEY&type=showroom

// Example - Get only IDN broadcasts
GET https://api.jkt48connect.my.id/api/recent?api_key=YOUR_API_KEY&type=idn`)
                    }
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code className="text-sm">
                      {`// Example - Get only SHOWROOM broadcasts
GET https://api.jkt48connect.my.id/api/recent?api_key=YOUR_API_KEY&type=showroom

// Example - Get only IDN broadcasts
GET https://api.jkt48connect.my.id/api/recent?api_key=YOUR_API_KEY&type=idn`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* Data Structure Section */}
          <section id="data-structure" className={activeSection === "data-structure" ? "block" : "hidden"}>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Data Structure</h2>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Response Format</h3>
                <p>The API returns an array of objects with the following structure:</p>
                
                <div className="space-y-2">
                  <h4 className="text-lg font-medium">Common Fields</h4>
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
                          <TableCell className="font-mono">_id</TableCell>
                          <TableCell>string</TableCell>
                          <TableCell>Unique identifier for the broadcast record</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-mono">data_id</TableCell>
                          <TableCell>string</TableCell>
                          <TableCell>Platform-specific identifier</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-mono">member</TableCell>
                          <TableCell>object</TableCell>
                          <TableCell>Member information (name, nickname, images, etc.)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-mono">created_at</TableCell>
                          <TableCell>string (ISO date)</TableCell>
                          <TableCell>When the record was created</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-mono">live_info</TableCell>
                          <TableCell>object</TableCell>
                          <TableCell>Details about the live broadcast</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-mono">gift_rate</TableCell>
                          <TableCell>number</TableCell>
                          <TableCell>Gift conversion rate</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-mono">room_id</TableCell>
                          <TableCell>number</TableCell>
                          <TableCell>Platform room identifier</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-mono">points</TableCell>
                          <TableCell>number</TableCell>
                          <TableCell>Points collected during live</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-mono">type</TableCell>
                          <TableCell>string</TableCell>
                          <TableCell>Platform type (idn, showroom, youtube)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-mono">total_gift</TableCell>
                          <TableCell>string</TableCell>
                          <TableCell>Total gift value in IDR</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-lg font-medium">Platform-Specific Fields</h4>
                  <p className="text-sm mb-2">For IDN Live broadcasts:</p>
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
                          <TableCell className="font-mono">idn</TableCell>
                          <TableCell>object</TableCell>
                          <TableCell>IDN-specific broadcast details (id, username, title, etc.)</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-lg font-medium">Nested Object: member</h4>
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
                          <TableCell className="font-mono">name</TableCell>
                          <TableCell>string</TableCell>
                          <TableCell>Full name of the member</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-mono">nickname</TableCell>
                          <TableCell>string</TableCell>
                          <TableCell>Member's nickname</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-mono">img</TableCell>
                          <TableCell>string (URL)</TableCell>
                          <TableCell>Profile image URL</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-mono">img_alt</TableCell>
                          <TableCell>string (URL)</TableCell>
                          <TableCell>Alternative profile image URL</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-mono">url</TableCell>
                          <TableCell>string</TableCell>
                          <TableCell>Member's identifier/handle</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-mono">is_graduate</TableCell>
                          <TableCell>boolean</TableCell>
                          <TableCell>Whether the member has graduated</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-mono">is_official</TableCell>
                          <TableCell>boolean</TableCell>
                          <TableCell>Whether this is an official account</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-lg font-medium">Nested Object: live_info</h4>
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
                          <TableCell className="font-mono">duration</TableCell>
                          <TableCell>number</TableCell>
                          <TableCell>Live duration in milliseconds</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-mono">viewers.num</TableCell>
                          <TableCell>number</TableCell>
                          <TableCell>Viewer count</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-mono">viewers.is_excitement</TableCell>
                          <TableCell>boolean</TableCell>
                          <TableCell>Excitement indicator (SHOWROOM specific)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-mono">date.start</TableCell>
                          <TableCell>string (ISO date)</TableCell>
                          <TableCell>Broadcast start time</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-mono">date.end</TableCell>
                          <TableCell>string (ISO date)</TableCell>
                          <TableCell>Broadcast end time</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className={activeSection === "contact" ? "block" : "hidden"}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Contact</h2>
              <p>For inquiries or support regarding the JKT48Connect API, please reach out via:</p>
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
                      href="https://jkt48connect.my.id"
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
                    <strong>Version:</strong> 1.0
                  </li>
                  <li>
                    <strong>Updated:</strong> April 2025
                  </li>
                  <li>
                    <strong>License:</strong> For personal use only
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <DocNavigation
            activeSection={activeSection}
            sections={["overview", "endpoints", "examples", "data-structure", "contact"]}
            sectionTitles={{
              overview: "Overview",
              endpoints: "Endpoints",
              examples: "Usage Examples",
              "data-structure": "Data Structure",
              contact: "Contact",
            }}
            setActiveSection={setActiveSection}
            apiUrl="https://api.jkt48connect.my.id/api/recent?api_key=YOUR_API_KEY"
          />
        </motion.div>
      </div>
    </div>
  )
}
