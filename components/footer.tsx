"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Cloud, Github, Mail, MessageSquare } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t py-8 md:py-12">
      <div className="container flex flex-col gap-8 px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="p-1 bg-primary/10 rounded-full"
            >
              <Cloud className="h-5 w-5 text-primary" />
            </motion.div>
            <p className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              JKT48CONNECT API
            </p>
          </div>

          <div className="flex gap-4">
            <motion.a
              href="https://discord.gg/kke7VpNPfr"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="p-2 rounded-full bg-muted/50 hover:bg-muted"
              aria-label="Discord"
            >
              <MessageSquare className="h-5 w-5 text-muted-foreground" />
              <span className="sr-only">Discord</span>
            </motion.a>
            <motion.a
              href="https://github.com/zenova-id"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="p-2 rounded-full bg-muted/50 hover:bg-muted"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 text-muted-foreground" />
              <span className="sr-only">GitHub</span>
            </motion.a>
            <motion.a
              href="mailto:contact@jkt48connect.my.id"
              whileHover={{ y: -3 }}
              className="p-2 rounded-full bg-muted/50 hover:bg-muted"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 text-muted-foreground" />
              <span className="sr-only">Email</span>
            </motion.a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <h3 className="text-sm font-medium">API Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/docs" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  API List
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-medium">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/docs" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <a
                  href="https://stats.uptimerobot.com/vxehGhhYyY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  API Status
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://jkt48connect.web.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@vtxgroup.my.id"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} JKT48CONNECT API. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

