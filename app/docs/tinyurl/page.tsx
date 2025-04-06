import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const ApiBaseUrl = ({ url }) => (
  <div className="rounded-md bg-muted p-4">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Base URL:</span>
        <code className="rounded bg-muted-foreground/20 px-2 py-1 text-sm">{url}</code>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8"
        onClick={() => {
          navigator.clipboard.writeText(url);
        }}
      >
        <Copy className="h-4 w-4" />
      </Button>
    </div>
  </div>
);

const DocNavigation = ({ activeSection, sections, sectionTitles, setActiveSection, apiUrl }) => {
  return (
    <div className="mt-12 border-t pt-8">
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={() => {
            const currentIndex = sections.indexOf(activeSection);
            if (currentIndex > 0) {
              setActiveSection(sections[currentIndex - 1]);
            }
          }}
          disabled={sections.indexOf(activeSection) === 0}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {sections.indexOf(activeSection) > 0
            ? sectionTitles[sections[sections.indexOf(activeSection) - 1]]
            : "Previous"}
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            const currentIndex = sections.indexOf(activeSection);
            if (currentIndex < sections.length - 1) {
              setActiveSection(sections[currentIndex + 1]);
            }
          }}
          disabled={sections.indexOf(activeSection) === sections.length - 1}
        >
          {sections.indexOf(activeSection) < sections.length - 1
            ? sectionTitles[sections[sections.indexOf(activeSection) + 1]]
            : "Next"}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
      <div className="mt-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Try it now</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-2">
              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-2 h-6 w-6"
                  onClick={() => {
                    navigator.clipboard.writeText(apiUrl);
                  }}
                >
                  <Copy className="h-3 w-3" />
                </Button>
                <code className="block rounded-md bg-muted p-4 text-xs">{apiUrl}</code>
              </div>
              <Button size="sm" className="w-full">
                Open in new tab
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const JKT48ConnectDocPage = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12 lg:py-16 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
        {/* Sidebar Navigation */}
        <div className="md:sticky md:top-20 h-fit">
          <div className="space-y-1">
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
              variant={activeSection === "examples" ? "default" : "ghost"}
              size="sm"
              className="w-full justify-start"
              onClick={() => setActiveSection("examples")}
            >
              Usage Examples
            </Button>
            <Button
              variant={activeSection === "contact" ? "default" : "ghost"}
              size="sm"
              className="w-full justify-start"
              onClick={() => setActiveSection("contact")}
            >
              Contact
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-bold tracking-tight">JKT48 Connect API Documentation</h1>
              <Badge variant="outline" className="ml-2">
                v1
              </Badge>
            </div>
            <p className="text-muted-foreground">
              Access recent JKT48 member live stream data across various platforms
            </p>
          </div>

          <ApiBaseUrl url="https://api.jkt48connect.my.id/api" />

          <Separator />

          {/* Overview Section */}
          <section id="overview" className={activeSection === "overview" ? "block" : "hidden"}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Overview</h2>
              <p>
                The JKT48 Connect API provides access to data about JKT48 members' recent livestreams across multiple platforms including Showroom and IDN Live. 
                This API allows developers to track which members have recently completed livestreams, along with detailed metrics about their streams.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="border rounded-lg p-4 bg-card">
                  <h3 className="font-medium mb-2">Features</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      Recent livestream data from multiple platforms
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      Detailed member information
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      Stream metrics (duration, viewers, gifts)
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      Platform-specific data (Showroom, IDN Live)
                    </li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4 bg-card">
                  <h3 className="font-medium mb-2">Quick Start</h3>
                  <p className="text-sm mb-2">Make a GET request with your API key:</p>
                  <div className="relative">
                    <code className="text-xs block bg-muted p-2 rounded overflow-x-auto whitespace-pre-wrap break-all">
                      https://api.jkt48connect.my.id/api/recent?api_key=JKTCONNECT
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
                <h3 className="text-xl font-semibold">Get Recent Livestreams</h3>
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
                          <TableCell>Your API key (default: JKTCONNECT)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-mono">limit</TableCell>
                          <TableCell>number</TableCell>
                          <TableCell>No</TableCell>
                          <TableCell>Number of records to return (default: 20)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-mono">page</TableCell>
                          <TableCell>number</TableCell>
                          <TableCell>No</TableCell>
                          <TableCell>Page number for pagination (default: 1)</TableCell>
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
                        copyToClipboard("GET https://api.jkt48connect.my.id/api/recent?api_key=JKTCONNECT")
                      }
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                      <code className="text-sm">
                        GET https://api.jkt48connect.my.id/api/recent?api_key=JKTCONNECT
                      </code>
                    </pre>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-lg font-medium">Successful Response</h4>
                  <p className="text-sm mb-2">
                    Returns an array of recent livestream objects. See Response Format section for details.
                  </p>
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
  "error": "API key is required. Please provide a valid API key."
}`)
                          }
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                        <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                          <code className="text-sm">
                            {`{
  "success": false,
  "error": "API key is required. Please provide a valid API key."
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

          {/* Response Format Section */}
          <section id="response" className={activeSection === "response" ? "block" : "hidden"}>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Response Format</h2>
              
              <div className="space-y-4">
                <p>
                  The API returns an array of objects, each representing a completed livestream by a JKT48 member.
                  The structure differs slightly based on the platform (Showroom or IDN Live).
                </p>
                
                <h3 className="text-xl font-semibold">Common Fields</h3>
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
                        <TableCell>Unique record identifier</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-mono">data_id</TableCell>
                        <TableCell>string</TableCell>
                        <TableCell>Platform-specific identifier</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-mono">member</TableCell>
                        <TableCell>object</TableCell>
                        <TableCell>Member information</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-mono">created_at</TableCell>
                        <TableCell>string (date)</TableCell>
                        <TableCell>Timestamp when record was created</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-mono">live_info</TableCell>
                        <TableCell>object</TableCell>
                        <TableCell>Livestream metrics and data</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-mono">points</TableCell>
                        <TableCell>number</TableCell>
                        <TableCell>Points received during livestream</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-mono">type</TableCell>
                        <TableCell>string</TableCell>
                        <TableCell>Platform type ("showroom" or "idn")</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-mono">total_gift</TableCell>
                        <TableCell>string</TableCell>
                        <TableCell>Total gift value in IDR</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>

                <h3 className="text-xl font-semibold">Member Object</h3>
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
                        <TableCell>Full member name including Japanese characters</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-mono">nickname</TableCell>
                        <TableCell>string</TableCell>
                        <TableCell>Member's nickname</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-mono">img</TableCell>
                        <TableCell>string (URL)</TableCell>
                        <TableCell>Member's profile image</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-mono">img_alt</TableCell>
                        <TableCell>string (URL)</TableCell>
                        <TableCell>Alternative profile image</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-mono">url</TableCell>
                        <TableCell>string</TableCell>
                        <TableCell>Member's URL identifier</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-mono">is_graduate</TableCell>
                        <TableCell>boolean</TableCell>
                        <TableCell>Whether member has graduated</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-mono">is_official</TableCell>
                        <TableCell>boolean</TableCell>
                        <TableCell>Whether account is an official JKT48 account</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>

                <h3 className="text-xl font-semibold">Platform-Specific Fields</h3>
                
                <h4 className="text-lg font-medium">IDN Live Specific</h4>
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
                        <TableCell>IDN-specific information</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-mono">room_id</TableCell>
                        <TableCell>number</TableCell>
                        <TableCell>IDN room identifier</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-mono">gift_rate</TableCell>
                        <TableCell>number</TableCell>
                        <TableCell>Gift conversion rate</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>

                <h4 className="text-lg font-medium">Showroom Specific</h4>
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
                        <TableCell className="font-mono">room_id</TableCell>
                        <TableCell>number</TableCell>
                        <TableCell>Showroom room identifier</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-mono">gift_rate</TableCell>
                        <TableCell>number</TableCell>
                        <TableCell>Showroom gift conversion rate (points to IDR)</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>

                <h3 className="text-xl font-semibold">Example Response Object</h3>
                <div className="relative">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 h-8 w-8"
                    onClick={() => copyToClipboard(`{
  "_id": "67f21dc2e7f8228792560f79",
  "data_id": "1743916269547061",
  "member": {
    "name": "Virgi / ヴィルジ (JKT48)",
    "nickname": "Virgi",
    "img_alt": "https://res.cloudinary.com/haymzm4wp/image/upload/v1733164607/jkt48/kabesha-gen13/astrella_virgiananda.jpg",
    "img": "https://static.showroom-live.com/image/room/cover/af8764e5f2a73e6370cc8c525fe7f31aefcb3b8571e55bb9018b1e859139b11c_m.jpeg?v=1743174618",
    "url": "virgi",
    "is_graduate": false,
    "is_official": false
  },
  "created_at": "2025-04-06T06:22:48.689Z",
  "live_info": {
    "duration": 4299689,
    "viewers": {
      "num": 16684,
      "is_excitement": true
    },
    "date": {
      "start": "2025-04-06T05:11:09.000Z",
      "end": "2025-04-06T06:22:48.689Z"
    }
  },
  "gift_rate": 113.87,
  "room_id": 547061,
  "points": 40687,
  "type": "showroom",
  "total_gift": "Rp 4.633.028.69"
}`)}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code className="text-sm">
                      {`{
  "_id": "67f21dc2e7f8228792560f79",
  "data_id": "1743916269547061",
  "member": {
    "name": "Virgi / ヴィルジ (JKT48)",
    "nickname": "Virgi",
    "img_alt": "https://res.cloudinary.com/haymzm4wp/image/upload/v1733164607/jkt48/kabesha-gen13/astrella_virgiananda.jpg",
    "img": "https://static.showroom-live.com/image/room/cover/af8764e5f2a73e6370cc8c525fe7f31aefcb3b8571e55bb9018b1e859139b11c_m.jpeg?v=1743174618",
    "url": "virgi",
    "is_graduate": false,
    "is_official": false
  },
  "created_at": "2025-04-06T06:22:48.689Z",
  "live_info": {
    "duration": 4299689,
    "viewers": {
      "num": 16684,
      "is_excitement": true
    },
    "date": {
      "start": "2025-04-06T05:11:09.000Z",
      "end": "2025-04-06T06:22:48.689Z"
    }
  },
  "gift_rate": 113.87,
  "room_id": 547061,
  "points": 40687,
  "type": "showroom",
  "total_gift": "Rp 4.633.028.69"
}`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* Examples Section */}
          <section id="examples" className={activeSection === "examples" ? "block" : "hidden"}>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Usage Examples</h2>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Fetch Recent Livestreams</h3>
                <div className="relative">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 h-8 w-8"
                    onClick={() =>
                      copyToClipboard(`// Using fetch API
fetch('https://api.jkt48connect.my.id/api/recent?api_key=JKTCONNECT')
  .then(response => response.json())
  .then(data => {
    // Process the livestream data
    console.log('Recent livestreams:', data);
  })
  .catch(error => console.error('Error fetching data:', error));`)
                    }
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code className="text-sm">
                      {`// Using fetch API
fetch('https://api.jkt48connect.my.id/api/recent?api_key=JKTCONNECT')
  .then(response => response.json())
  .then(data => {
    // Process the livestream data
    console.log('Recent livestreams:', data);
  })
  .catch(error => console.error('Error fetching data:', error));`}
                    </code>
                  </pre>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Filter by Type</h3>
                <div className="relative">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 h-8 w-8"
                    onClick={() =>
                      copyToClipboard(`// JavaScript example to filter by platform type
fetch('https://api.jkt48connect.my.id/api/recent?api_key=JKTCONNECT')
  .then(response => response.json())
  .then(data => {
    // Filter only Showroom livestreams
    const showroomStreams = data.filter(stream => stream.type === 'showroom');
    console.log('Showroom livestreams:', showroomStreams);
    
    // Filter only IDN livestreams
    const idnStreams = data.filter(stream => stream.type === 'idn');
    console.log('IDN livestreams:', idnStreams);
  })
  .catch(error => console.error('Error fetching data:', error));`)
                    }
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code className="text-sm">
                      {`// JavaScript example to filter by platform type
fetch('https://api.jkt48connect.my.id/api/recent?api_key=JKTCONNECT')
  .then(response => response.json())
  .then(data => {
    // Filter only Showroom livestreams
    const showroomStreams = data.filter(stream => stream.type === 'showroom');
    console.log('Showroom livestreams:', showroomStreams);
    
    // Filter only IDN livestreams
    const idnStreams = data.filter(stream => stream.type === 'idn');
    console.log('IDN livestreams:', idnStreams);
  })
  .catch(error => console.error('Error fetching data:', error));`}
                    </code>
                  </pre>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Display Member Livestream History</h3>
                <div className="relative">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 h-8 w-8"
                    onClick={() =>
                      copyToClipboard(`// JavaScript example to display member livestream history
fetch('https://api.jkt48connect.my.id/api/recent?api_key=JKTCONNECT')
  .then(response => response.json())
