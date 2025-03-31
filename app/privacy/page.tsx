"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PrivacyPage() {
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
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
        </div>

        <div className="prose prose-blue dark:prose-invert max-w-none">
          <p className="text-lg">Last updated: March 31, 2025</p>

          <p>
            JKT48Connect ("us", "we", or "our") operates the JKT48 API services. This page informs you of our policies
            regarding the collection, use, and disclosure of Personal Information when you use our Service.
          </p>

          <p>
            <strong>
              By using the Service, you agree to the collection and use of information in accordance with this policy.
            </strong>
          </p>

          <h2 className="text-2xl font-bold mt-8">1. Information Collection and Use</h2>

          <p>
            While using our Service, we may ask you to provide us with certain personally identifiable information that
            can be used to contact or identify you. Personally identifiable information may include, but is not limited
            to, your email address ("Personal Information").
          </p>

          <h2 className="text-2xl font-bold mt-8">2. Log Data</h2>

          <p>
            We collect information that your browser sends whenever you visit our Service ("Log Data"). This Log Data
            may include information such as your computer's Internet Protocol ("IP") address, browser type, browser
            version, the pages of our Service that you visit, the time and date of your visit, the time spent on those
            pages, and other statistics.
          </p>

          <h2 className="text-2xl font-bold mt-8">3. API Usage Data</h2>

          <p>We collect data about how our APIs are used, including:</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Request frequency and patterns</li>
            <li>Endpoints accessed</li>
            <li>Error rates and types</li>
            <li>Performance metrics</li>
          </ul>

          <p>
            This information is used to improve our services, troubleshoot issues, and ensure fair usage of our
            resources.
          </p>

          <h2 className="text-2xl font-bold mt-8">4. Cookies</h2>

          <p>
            Cookies are files with a small amount of data, which may include an anonymous unique identifier. Cookies are
            sent to your browser from a web site and stored on your computer's hard drive.
          </p>

          <p>
            We use cookies to collect information. You can instruct your browser to refuse all cookies or to indicate
            when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions
            of our Service.
          </p>

          <h2 className="text-2xl font-bold mt-8">5. Service Providers</h2>

          <p>
            We may employ third-party companies and individuals to facilitate our Service, to provide the Service on our
            behalf, to perform Service-related services, or to assist us in analyzing how our Service is used.
          </p>

          <p>
            These third parties have access to your Personal Information only to perform these tasks on our behalf and
            are obligated not to disclose or use it for any other purpose.
          </p>

          <h2 className="text-2xl font-bold mt-8">6. Security</h2>

          <p>
            The security of your Personal Information is important to us, but remember that no method of transmission
            over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially
            acceptable means to protect your Personal Information, we cannot guarantee its absolute security.
          </p>

          <h2 className="text-2xl font-bold mt-8">7. International Transfer</h2>

          <p>
            Your information, including Personal Information, may be transferred to — and maintained on — computers
            located outside of your state, province, country or other governmental jurisdiction where the data
            protection laws may differ from those of your jurisdiction.
          </p>

          <h2 className="text-2xl font-bold mt-8">8. Changes to This Privacy Policy</h2>

          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
            Changes to this Privacy Policy are effective when they are posted on this page.
          </p>

          <h2 className="text-2xl font-bold mt-8">9. Contact Us</h2>

          <p>
            If you have any questions about this Privacy Policy, please contact us at{" "}
            <a href="mailto:contact@jkt48connect.my.id" className="text-primary hover:underline">
              contact@jkt48connect.my.id
            </a>
            .
          </p>
        </div>
      </motion.div>
    </div>
  )
}

