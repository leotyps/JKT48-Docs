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

export default function IDNLiveDocPage() {
  const [activeSection, setActiveSection] = useState("overview")
  const [copied, setCopied] = useState(false)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py:12 lg:py-16 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
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
            <Button variant={activeSection === "overview" ? "default" : "ghost"} size="sm" className="w-full justify-start" onClick={() => setActiveSection("overview")}>Overview</Button>
            <Button variant={activeSection === "endpoint" ? "default" : "ghost"} size="sm" className="w-full justify-start" onClick={() => setActiveSection("endpoint")}>Endpoint</Button>
            <Button variant={activeSection === "errors" ? "default" : "ghost"} size="sm" className="w-full justify-start" onClick={() => setActiveSection("errors")}>Error Handling</Button>
            <Button variant={activeSection === "notes" ? "default" : "ghost"} size="sm" className="w-full justify-start" onClick={() => setActiveSection("notes")}>Notes</Button>
          </motion.div>
        </div>

        <motion.div className="space-y-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-bold tracking-tight">JKT48Connect: IDN Live API Documentation</h1>
              <Badge variant="outline" className="ml-2">v3.0.14</Badge>
            </div>
            <p className="text-muted-foreground">Menampilkan data live dari platform IDN milik JKT48.</p>
          </div>

          <ApiBaseUrl url="https://api.jkt48connect.my.id/api/live/idn" />

          <Separator />

          <section id="overview" className={activeSection === "overview" ? "block" : "hidden"}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Introduction</h2>
              <p>
                API ini digunakan untuk menampilkan seluruh live stream yang sedang tayang dari JKT48 di platform IDN. API ini berguna untuk developer yang ingin menampilkan live show JKT48 secara real-time di platform mereka.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="border rounded-lg p-4 bg-card">
                  <h3 className="font-medium mb-2">Features</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-primary" />Ambil semua live IDN aktif dari member JKT48</li>
                    <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-primary" />Data yang dikembalikan sudah mencakup thumbnail, judul, nama member, dan link playback</li>
                    <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2 text-primary" />Respon cepat dan ringan</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4 bg-card">
                  <h3 className="font-medium mb-2">Quick Start</h3>
                  <p className="text-sm mb-2">GET request ke endpoint ini:</p>
                  <code className="text-xs block bg-muted p-2 rounded overflow-x-auto whitespace-pre-wrap break-all">
                    https://api.jkt48connect.my.id/api/live/idn?api_key=YOUR_API_KEY
                  </code>
                </div>
              </div>
            </div>
          </section>

          <section id="endpoint" className={activeSection === "endpoint" ? "block" : "hidden"}>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Endpoint</h2>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">GET /live/idn</h3>

                <div className="space-y-2">
                  <h4 className="text-lg font-medium">Description</h4>
                  <p>Menampilkan semua live streaming yang sedang berlangsung dari platform IDN milik JKT48.</p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-lg font-medium">Request Parameters</h4>
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
                        <TableCell>Kunci akses API milik pengguna</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>

                <div className="space-y-2">
                  <h4 className="text-lg font-medium">Example Request</h4>
                  <Tabs defaultValue="curl">
                    <TabsList className="mb-2">
                      <TabsTrigger value="curl">cURL</TabsTrigger>
                      <TabsTrigger value="js">JavaScript</TabsTrigger>
                    </TabsList>
                    <TabsContent value="curl" className="relative">
                      <Button variant="ghost" size="icon" className="absolute top-2 right-2 h-8 w-8" onClick={() => copyToClipboard('curl -X GET "https://api.jkt48connect.my.id/api/live/idn?api_key=YOUR_API_KEY"')}>
                        <Copy className="h-4 w-4" />
                      </Button>
                      <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                        <code className="text-sm">curl -X GET "https://api.jkt48connect.my.id/api/live/idn?api_key=YOUR_API_KEY"</code>
                      </pre>
                    </TabsContent>
                    <TabsContent value="js" className="relative">
                      <Button variant="ghost" size="icon" className="absolute top-2 right-2 h-8 w-8" onClick={() => copyToClipboard(`fetch("https://api.jkt48connect.my.id/api/live/idn?api_key=YOUR_API_KEY")\n  .then(response => response.json())\n  .then(data => console.log(data))\n  .catch(error => console.error("Error:", error));`)}>
                        <Copy className="h-4 w-4" />
                      </Button>
                      <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                        <code className="text-sm">fetch("https://api.jkt48connect.my.id/api/live/idn?api_key=YOUR_API_KEY")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));</code>
                      </pre>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </section>

          <section id="errors" className={activeSection === "errors" ? "block" : "hidden"}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Error Handling</h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Status Code</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>401 Unauthorized</TableCell>
                    <TableCell>{`{"error": "Invalid or missing api_key."}`}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>500 Internal Server Error</TableCell>
                    <TableCell>{`{"error": "Something went wrong on the server."}`}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </section>

          <section id="notes" className={activeSection === "notes" ? "block" : "hidden"}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Notes</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 mt-0.5 text-primary flex-shrink-0" />
                  <span>
                    Pastikan Anda menyertakan parameter <code className="text-xs bg-muted px-1 py-0.5 rounded">api_key</code> yang valid pada setiap request.
                  </span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 mt-0.5 text-primary flex-shrink-0" />
                  <span>Endpoint ini hanya menampilkan data live dari platform IDN, tidak termasuk Showroom atau TikTok Live.</span>
                </li>
              </ul>

              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-semibold">Contact & Support</h3>
                <p>
                  Untuk pertanyaan atau dukungan teknis, hubungi <strong>JKT48Connect Dev Team</strong> melalui email: <code className="text-xs bg-muted px-1 py-0.5 rounded">support@jkt48connect.my.id</code> atau kunjungi situs kami di{' '}
                  <a href="https://jkt48connect.my.id" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">jkt48connect.my.id</a>.
                </p>
              </div>
            </div>
          </section>

          <DocNavigation
            activeSection={activeSection}
            sections={["overview", "endpoint", "errors", "notes"]}
            sectionTitles={{
              overview: "Overview",
              endpoint: "Endpoint",
              errors: "Error Handling",
              notes: "Notes",
            }}
            setActiveSection={setActiveSection}
            apiUrl="https://api.jkt48connect.my.id/api/live/idn?api_key=YOUR_API_KEY"
          />
        </motion.div>
      </div>
    </div>
  )
}
