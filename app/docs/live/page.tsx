"use client"

import { useState } from "react"
import { ArrowLeft, Copy, Check, ExternalLink, Zap, Globe, Shield, Code2, Download, MessageCircle, Play, Star, Terminal, Smartphone, Monitor } from "lucide-react"

export default function LiveStreamingDocPage() {
  const [copied, setCopied] = useState("")
  const [activeTab, setActiveTab] = useState("http")

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(""), 2000)
  }

  const CopyButton = ({ text, id }) => (
    <button
      className="absolute top-3 right-3 p-2 rounded-lg bg-gray-800/80 hover:bg-gray-700 text-gray-300 hover:text-white transition-all duration-200 backdrop-blur-sm z-10 group"
      onClick={() => copyToClipboard(text, id)}
    >
      {copied === id ? (
        <Check className="h-4 w-4 text-green-400" />
      ) : (
        <Copy className="h-4 w-4 group-hover:scale-110 transition-transform" />
      )}
    </button>
  )

  const TabButton = ({ value, active, onClick, children, icon: Icon }) => (
    <button
      onClick={() => onClick(value)}
      className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 ${
        active === value
          ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
          : 'bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900'
      }`}
    >
      {Icon && <Icon className="h-4 w-4" />}
      {children}
    </button>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <button className="flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-200">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm font-medium">Back to Docs</span>
          </button>
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Live Streaming API
                </h1>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
                    v2.1
                  </span>
                  <div className="flex items-center gap-1 px-3 py-1 bg-green-500/20 backdrop-blur-sm rounded-full">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Active</span>
                  </div>
                </div>
              </div>
              <p className="text-lg md:text-xl text-blue-100 mb-6 leading-relaxed">
                Get real-time JKT48 live streaming data from YouTube, IDN, and Showroom platforms with our powerful REST API.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg">
                  <Globe className="h-4 w-4" />
                  <span className="text-sm">Multi-platform</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg">
                  <Zap className="h-4 w-4" />
                  <span className="text-sm">Real-time</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg">
                  <Shield className="h-4 w-4" />
                  <span className="text-sm">Secure</span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-96">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="font-semibold mb-4 text-blue-100">Quick Start</h3>
                <div className="relative">
                  <CopyButton 
                    text="https://v2.jkt48connect.my.id/api/jkt48/live?apikey=YOUR_API_KEY" 
                    id="hero-url" 
                  />
                  <code className="block bg-gray-900/50 backdrop-blur-sm p-4 rounded-lg text-sm overflow-x-auto text-green-300 border border-white/10">
                    https://v2.jkt48connect.my.id/api/jkt48/live?apikey=YOUR_API_KEY
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 -mt-8 relative z-10">
          <div className="bg-white rounded-2xl shadow-xl shadow-gray-900/5 p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Terminal className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Endpoint</h3>
            </div>
            <code className="text-sm bg-gray-50 px-3 py-2 rounded-lg block text-gray-700">
              /api/jkt48/live
            </code>
            <div className="mt-3 flex items-center gap-2">
              <span className="text-sm text-gray-600">Method:</span>
              <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">GET</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl shadow-gray-900/5 p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Star className="h-5 w-5 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Rate Limit</h3>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">1000</div>
            <div className="text-sm text-gray-600">requests per hour</div>
            <div className="mt-3">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full w-3/4"></div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl shadow-gray-900/5 p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-100 rounded-lg">
                <Shield className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Authentication</h3>
            </div>
            <div className="text-sm text-gray-600 mb-3">API Key required</div>
            <div className="flex gap-2">
              <code className="text-xs bg-gray-50 px-2 py-1 rounded border">J-D55B</code>
              <code className="text-xs bg-gray-50 px-2 py-1 rounded border">J-QV0Z</code>
            </div>
          </div>
        </div>

        {/* Code Examples */}
        <div className="bg-white rounded-3xl shadow-xl shadow-gray-900/5 p-8 mb-12 border border-gray-100">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Code Examples</h2>
            <p className="text-gray-600">Choose your preferred method to integrate with the Live Streaming API</p>
          </div>

          <div className="mb-6">
            <div className="flex flex-wrap gap-3">
              <TabButton
                value="http"
                active={activeTab}
                onClick={setActiveTab}
                icon={Globe}
              >
                HTTP
              </TabButton>
              <TabButton
                value="nodejs"
                active={activeTab}
                onClick={setActiveTab}
                icon={Code2}
              >
                Node.js
              </TabButton>
              <TabButton
                value="curl"
                active={activeTab}
                onClick={setActiveTab}
                icon={Terminal}
              >
                cURL
              </TabButton>
              <TabButton
                value="jkt48core"
                active={activeTab}
                onClick={setActiveTab}
                icon={Download}
              >
                @jkt48/core
              </TabButton>
            </div>
          </div>

          <div className="relative">
            {activeTab === "http" && (
              <div className="relative">
                <CopyButton 
                  text="GET https://v2.jkt48connect.my.id/api/jkt48/live?apikey=YOUR_API_KEY" 
                  id="http" 
                />
                <pre className="bg-gray-900 text-gray-100 p-6 rounded-2xl overflow-x-auto border border-gray-200">
                  <code className="text-sm">
{`GET https://v2.jkt48connect.my.id/api/jkt48/live?apikey=YOUR_API_KEY
Content-Type: application/json`}
                  </code>
                </pre>
              </div>
            )}

            {activeTab === "nodejs" && (
              <div className="relative">
                <CopyButton 
                  text={`const response = await fetch('https://v2.jkt48connect.my.id/api/jkt48/live?apikey=YOUR_API_KEY');
const data = await response.json();
console.log(data);`}
                  id="nodejs" 
                />
                <pre className="bg-gray-900 text-gray-100 p-6 rounded-2xl overflow-x-auto border border-gray-200">
                  <code className="text-sm">
{`const response = await fetch('https://v2.jkt48connect.my.id/api/jkt48/live?apikey=YOUR_API_KEY');
const data = await response.json();
console.log(data);`}
                  </code>
                </pre>
              </div>
            )}

            {activeTab === "curl" && (
              <div className="relative">
                <CopyButton 
                  text={`curl -X GET "https://v2.jkt48connect.my.id/api/jkt48/live?apikey=YOUR_API_KEY"`}
                  id="curl" 
                />
                <pre className="bg-gray-900 text-gray-100 p-6 rounded-2xl overflow-x-auto border border-gray-200">
                  <code className="text-sm">
{`curl -X GET "https://v2.jkt48connect.my.id/api/jkt48/live?apikey=YOUR_API_KEY"`}
                  </code>
                </pre>
              </div>
            )}

            {activeTab === "jkt48core" && (
              <div className="relative">
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
                <pre className="bg-gray-900 text-gray-100 p-6 rounded-2xl overflow-x-auto border border-gray-200">
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
              </div>
            )}
          </div>
        </div>

        {/* Installation */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 mb-12 border border-blue-100">
          <div className="flex items-start gap-6">
            <div className="p-3 bg-blue-500 rounded-2xl">
              <Download className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">@jkt48/core Installation</h3>
              <p className="text-gray-600 mb-6">Install the official JKT48 Node.js package for easier integration and better developer experience.</p>
              
              <div className="relative mb-4">
                <CopyButton text="npm install @jkt48/core" id="npm-install" />
                <pre className="bg-gray-900 text-green-400 p-4 rounded-xl overflow-x-auto">
                  <code className="text-sm font-mono">$ npm install @jkt48/core</code>
                </pre>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <ExternalLink className="h-4 w-4" />
                <span>Learn more at</span>
                <a href="https://docs.jkt48connect.my.id" className="text-blue-600 hover:text-blue-700 font-medium hover:underline transition-colors">
                  docs.jkt48connect.my.id
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Response Example */}
        <div className="bg-white rounded-3xl shadow-xl shadow-gray-900/5 p-8 mb-12 border border-gray-100">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Response Example</h2>
            <p className="text-gray-600">Sample JSON response from the Live Streaming API</p>
          </div>
          
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
            <pre className="bg-gray-900 text-gray-100 p-6 rounded-2xl overflow-x-auto text-xs border border-gray-200 max-h-96">
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
        </div>

        {/* Parameters & Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-3xl shadow-xl shadow-gray-900/5 p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Code2 className="h-5 w-5 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Parameters</h3>
            </div>
            
            <div className="space-y-6">
              <div className="p-4 border border-gray-200 rounded-2xl bg-gray-50/50">
                <div className="flex justify-between items-center mb-3">
                  <code className="text-sm bg-white px-3 py-2 rounded-lg border font-mono text-gray-800">apikey</code>
                  <span className="px-2 py-1 bg-red-100 text-red-700 rounded-lg text-xs font-medium">Required</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Your unique API key for authentication. Required for all requests to ensure secure access to the streaming data.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl shadow-gray-900/5 p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-green-100 rounded-lg">
                <Star className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Features</h3>
            </div>
            
            <div className="space-y-4">
              {[
                { icon: Globe, text: "Multi-platform support (YouTube, IDN, Showroom)" },
                { icon: Zap, text: "Real-time streaming data updates" },
                { icon: MessageCircle, text: "Chat room integration" },
                { icon: Monitor, text: "Stream quality information" },
                { icon: Shield, text: "Member status tracking" }
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-gray-50/50 rounded-xl">
                  <div className="p-1.5 bg-green-100 rounded-lg">
                    <feature.icon className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-sm text-gray-700">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* API Keys */}
        <div className="bg-gradient-to-r from-purple-50 via-blue-50 to-indigo-50 rounded-3xl p-8 border border-purple-100">
          <div className="flex items-start gap-6 mb-8">
            <div className="p-3 bg-purple-500 rounded-2xl">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">API Keys</h2>
              <p className="text-gray-600">Use free API keys to get started, or get custom keys for advanced features and higher limits.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Free API Keys
              </h4>
              <div className="flex flex-wrap gap-3 mb-4">
                <code className="bg-gray-100 px-4 py-2 rounded-xl text-sm font-mono border">J-D55B</code>
                <code className="bg-gray-100 px-4 py-2 rounded-xl text-sm font-mono border">J-QV0Z</code>
              </div>
              <p className="text-sm text-gray-600">Perfect for testing and small projects. No registration required.</p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Custom API Keys
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                For Premium and Premium+ plans with higher rate limits and priority support.
              </p>
              <a 
                href="https://wa.me/6285701479245" 
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-xl text-sm font-medium transition-colors duration-200 group"
              >
                <MessageCircle className="h-4 w-4 group-hover:scale-110 transition-transform" />
                Contact on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
