"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Copy, Check, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function LiveStreamingDocPage() {
  const [copied, setCopied] = useState("")

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(""), 2000)
  }

  const CopyButton = ({ text, id }) => (
    <Button
      variant="ghost"
      size="sm"
      className="absolute top-2 right-2 h-8 w-8 p-0"
      onClick={() => copyToClipboard(text, id)}
    >
      {copied === id ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
    </Button>
  )

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        {/* Header */}
        <div className="mb-6">
          <Link href="/docs">
            <Button variant="ghost" size="sm" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Docs
            </Button>
          </Link>
          <div className="space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <h1 className="text-2xl sm:text-3xl font-bold">Live Streaming API</h1>
              <Badge variant="outline">v2.1</Badge>
            </div>
            <p className="text-muted-foreground">
              Get real-time JKT48 live streaming data from YouTube, IDN, and Showroom platforms.
            </p>
          </div>
        </div>

        {/* Quick Info */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Quick Info</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium">Endpoint:</span>
                <code className="ml-2 text-xs bg-muted px-2 py-1 rounded">
                  /api/jkt48/live
                </code>
              </div>
              <div>
                <span className="font-medium">Method:</span>
                <Badge variant="secondary" className="ml-2">GET</Badge>
              </div>
            </div>
            <div className="relative">
              <CopyButton 
                text="https://v2.jkt48connect.my.id/api/jkt48/live?apikey=YOUR_API_KEY" 
                id="base-url" 
              />
              <code className="block bg-muted p-3 rounded text-xs overflow-x-auto">
                https://v2.jkt48connect.my.id/api/jkt48/live?apikey=YOUR_API_KEY
              </code>
            </div>
          </CardContent>
        </Card>

        {/* Code Examples */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Code Examples</CardTitle>
            <CardDescription>
              Choose your preferred method to access the Live Streaming API
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="http" className="w-full">
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4">
                <TabsTrigger value="http">HTTP</TabsTrigger>
                <TabsTrigger value="nodejs">Node.js</TabsTrigger>
                <TabsTrigger value="curl">cURL</TabsTrigger>
                <TabsTrigger value="jkt48core">@jkt48/core</TabsTrigger>
              </TabsList>
              
              <TabsContent value="http" className="relative">
                <CopyButton 
                  text="GET https://v2.jkt48connect.my.id/api/jkt48/live?apikey=YOUR_API_KEY" 
                  id="http" 
                />
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`GET https://v2.jkt48connect.my.id/api/jkt48/live?apikey=YOUR_API_KEY
Content-Type: application/json`}
                  </code>
                </pre>
              </TabsContent>

              <TabsContent value="nodejs" className="relative">
                <CopyButton 
                  text={`const response = await fetch('https://v2.jkt48connect.my.id/api/jkt48/live?apikey=YOUR_API_KEY');
const data = await response.json();
console.log(data);`}
                  id="nodejs" 
                />
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`const response = await fetch('https://v2.jkt48connect.my.id/api/jkt48/live?apikey=YOUR_API_KEY');
const data = await response.json();
console.log(data);`}
                  </code>
                </pre>
              </TabsContent>

              <TabsContent value="curl" className="relative">
                <CopyButton 
                  text={`curl -X GET "https://v2.jkt48connect.my.id/api/jkt48/live?apikey=YOUR_API_KEY"`}
                  id="curl" 
                />
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`curl -X GET "https://v2.jkt48connect.my.id/api/jkt48/live?apikey=YOUR_API_KEY"`}
                  </code>
                </pre>
              </TabsContent>

              <TabsContent value="jkt48core" className="relative">
                <CopyButton 
                  text={`const jkt48Api = require('@jkt48/core');

async function getLiveData() {
  try {
    const apiKey = 'YOUR_API_KEY';
    const liveData = await jkt48Api.live(apiKey);
    console.log(liveData);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

getLiveData();`}
                  id="jkt48core" 
                />
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm">
{`const jkt48Api = require('@jkt48/core');

async function getLiveData() {
  try {
    const apiKey = 'YOUR_API_KEY';
    const liveData = await jkt48Api.live(apiKey);
    console.log(liveData);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

getLiveData();`}
                  </code>
                </pre>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Installation */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">@jkt48/core Installation</CardTitle>
            <CardDescription>
              Install the official JKT48 Node.js package for easier integration
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="relative">
                <CopyButton text="npm install @jkt48/core" id="npm-install" />
                <pre className="bg-muted p-3 rounded-md">
                  <code className="text-sm">npm install @jkt48/core</code>
                </pre>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <ExternalLink className="h-4 w-4" />
                <span>Learn more at</span>
                <Link href="https://docs.jkt48connect.my.id" className="text-primary hover:underline">
                  docs.jkt48connect.my.id
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Response Example */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Response Example</CardTitle>
            <CardDescription>
              Sample JSON response from the Live Streaming API
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <CopyButton 
                text={`[
  {
    "name": "Fritzy",
    "img": "https://cdn.idntimes.com/content-images/post/20250406/717109e0-a064-4f15-8187-5c4d46e56a58-250406190348.jpg",
    "img_alt": "https://cdn.idn.media/idnaccount/avatar/500/f4d25811b1b50effd560fb480cac8ba0.webp?v=1712299807",
    "url_key": "jkt48_fritzy",
    "slug": "yuk-diborong-250406190348",
    "room_id": 510011,
    "is_graduate": false,
    "is_group": false,
    "chat_room_id": "arn:aws:ivschat:us-east-1:050891932989:room/dsKjuKRqfoRE",
    "started_at": "2025-04-06T12:03:58.000Z",
    "streaming_url_list": [
      {
        "label": "original",
        "quality": 1,
        "url": "https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.K9fM2uTS2hX3.m3u8"
      }
    ],
    "type": "idn"
  }
]`}
                id="response" 
              />
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
                <code>
{`[
  {
    "name": "Fritzy",
    "img": "https://cdn.idntimes.com/content-images/post/20250406/717109e0-a064-4f15-8187-5c4d46e56a58-250406190348.jpg",
    "img_alt": "https://cdn.idn.media/idnaccount/avatar/500/f4d25811b1b50effd560fb480cac8ba0.webp?v=1712299807",
    "url_key": "jkt48_fritzy",
    "slug": "yuk-diborong-250406190348",
    "room_id": 510011,
    "is_graduate": false,
    "is_group": false,
    "chat_room_id": "arn:aws:ivschat:us-east-1:050891932989:room/dsKjuKRqfoRE",
    "started_at": "2025-04-06T12:03:58.000Z",
    "streaming_url_list": [
      {
        "label": "original",
        "quality": 1,
        "url": "https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.K9fM2uTS2hX3.m3u8"
      }
    ],
    "type": "idn"
  }
]`}
                </code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Parameters & Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Parameters</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <code className="text-sm bg-muted px-2 py-1 rounded">apikey</code>
                  <Badge variant="destructive" className="text-xs">Required</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Your API key for authentication
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Multi-platform support (YouTube, IDN, Showroom)</li>
                <li>• Real-time streaming data</li>
                <li>• Chat room integration</li>
                <li>• Stream quality information</li>
                <li>• Member status tracking</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* API Keys */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">API Keys</CardTitle>
            <CardDescription>
              Use free API keys or get custom keys for advanced features
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Free API Keys</h4>
                <div className="flex flex-wrap gap-2">
                  <code className="bg-muted px-2 py-1 rounded text-sm">J-D55B</code>
                  <code className="bg-muted px-2 py-1 rounded text-sm">J-QV0Z</code>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Custom API Keys</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  For Premium and Premium+ plans, contact Valzy:
                </p>
                <Link 
                  href="https://wa.me/6285701479245" 
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  <ExternalLink className="h-4 w-4" />
                  WhatsApp: +62 857-0147-9245
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
