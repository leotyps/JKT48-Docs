"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TermsPage() {
  return (
    <div className="container max-w-4xl px-4 py-12 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">Terms of Service</h1>
        </div>

        <div className="prose prose-blue dark:prose-invert max-w-none">
          <p className="text-lg">Last updated: March 28, 2025</p>

          <p>
            Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the VTX API services
            operated by VTX Group.
          </p>

          <p>
            Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms.
            These Terms apply to all visitors, users, and others who access or use the Service.
          </p>

          <p>
            <strong>
              By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of
              the terms, then you may not access the Service.
            </strong>
          </p>

          <h2 className="text-2xl font-bold mt-8">1. Use of Service</h2>

          <p>
            VTX API provides various API services that allow users to access and retrieve data from different sources.
            By using our services, you agree to:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Use the services in compliance with all applicable laws and regulations.</li>
            <li>Not to abuse, harm, or exploit the services or the data provided.</li>
            <li>Respect rate limits and other usage restrictions that may be in place.</li>
            <li>Not to use the services for any illegal or unauthorized purpose.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8">2. API Usage</h2>

          <p>Our APIs are designed to be used in a fair and reasonable manner. We reserve the right to:</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Implement rate limiting to ensure service stability.</li>
            <li>Monitor usage patterns to prevent abuse.</li>
            <li>Suspend or terminate access for users who violate these terms.</li>
            <li>Modify, update, or discontinue any part of the service without prior notice.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8">3. Intellectual Property</h2>

          <p>
            The service and its original content, features, and functionality are and will remain the exclusive property
            of VTX Group. The service is protected by copyright, trademark, and other laws of both Indonesia and foreign
            countries.
          </p>

          <h2 className="text-2xl font-bold mt-8">4. Disclaimer</h2>

          <p>
            Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE"
            basis. The Service is provided without warranties of any kind, whether express or implied.
          </p>

          <h2 className="text-2xl font-bold mt-8">5. Limitation of Liability</h2>

          <p>
            In no event shall VTX Group, nor its directors, employees, partners, agents, suppliers, or affiliates, be
            liable for any indirect, incidental, special, consequential or punitive damages, including without
            limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to
            or use of or inability to access or use the Service.
          </p>

          <h2 className="text-2xl font-bold mt-8">6. Changes</h2>

          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is
            material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What
            constitutes a material change will be determined at our sole discretion.
          </p>

          <h2 className="text-2xl font-bold mt-8">7. Contact Us</h2>

          <p>
            If you have any questions about these Terms, please contact us at{" "}
            <a href="mailto:fort@vtxgroup.my.id" className="text-primary hover:underline">
              fort@vtxgroup.my.id
            </a>
            .
          </p>
        </div>
      </motion.div>
    </div>
  )
}

