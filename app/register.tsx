"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Check, Cloud, Eye, EyeOff, Info, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [registrationStep, setRegistrationStep] = useState(1)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    organization: "",
    website: "",
    useCase: "",
    acceptTerms: false,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (registrationStep === 1) {
      // Validate first step
      if (formData.fullName && formData.email && formData.password && formData.confirmPassword && formData.password === formData.confirmPassword) {
        setRegistrationStep(2)
      }
    } else {
      // Submit the form
      setIsLoading(true)
      
      // Mock API request
      setTimeout(() => {
        setIsLoading(false)
        setRegistrationStep(3)  // Success state
      }, 1500)
    }
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    })
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 relative overflow-hidden bg-muted/30">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-secondary/10 blur-3xl"></div>
          <div className="absolute top-1/2 right-1/4 w-72 h-72 rounded-full bg-primary/5 blur-3xl"></div>
        </div>
      
        <div className="container relative z-10 flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            {/* Header with logo and navigation */}
            <div className="text-center">
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center"
              >
                <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mt-6 flex justify-center"
              >
                <div className="inline-block p-2 bg-primary/10 rounded-full">
                  <Cloud className="h-10 w-10 text-primary" />
                </div>
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100"
              >
                Register for JKT48 API
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-2 text-sm text-muted-foreground"
              >
                Create an account to get your API key and access our services
              </motion.p>
            </div>

            {/* Progress indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="relative"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex flex-col items-center">
                  <div className={`h-8 w-8 flex items-center justify-center rounded-full ${
                    registrationStep >= 1 ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                  }`}>
                    {registrationStep > 1 ? <Check size={16} /> : 1}
                  </div>
                  <span className="text-xs mt-1">Account</span>
                </div>
                
                <div className={`h-0.5 flex-1 mx-2 ${registrationStep > 1 ? "bg-primary" : "bg-muted"}`}></div>
                
                <div className="flex flex-col items-center">
                  <div className={`h-8 w-8 flex items-center justify-center rounded-full ${
                    registrationStep >= 2 ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                  }`}>
                    {registrationStep > 2 ? <Check size={16} /> : 2}
                  </div>
                  <span className="text-xs mt-1">Details</span>
                </div>
                
                <div className={`h-0.5 flex-1 mx-2 ${registrationStep > 2 ? "bg-primary" : "bg-muted"}`}></div>
                
                <div className="flex flex-col items-center">
                  <div className={`h-8 w-8 flex items-center justify-center rounded-full ${
                    registrationStep >= 3 ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                  }`}>
                    {registrationStep > 3 ? <Check size={16} /> : 3}
                  </div>
                  <span className="text-xs mt-1">Complete</span>
                </div>
              </div>
            </motion.div>

            {/* Registration form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Card className="border-muted/50 shadow-lg">
                {registrationStep === 1 && (
                  <>
                    <CardHeader>
                      <CardTitle>Account Information</CardTitle>
                      <CardDescription>Create your JKT48 API account</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">Full Name</Label>
                          <Input 
                            id="fullName"
                            name="fullName"
                            placeholder="Enter your full name"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input 
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter your email address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="password">Password</Label>
                          <div className="relative">
                            <Input 
                              id="password"
                              name="password"
                              type={showPassword ? "text" : "password"}
                              placeholder="Create a password"
                              value={formData.password}
                              onChange={handleChange}
                              required
                              className="pr-10"
                            />
                            <button
                              type="button"
                              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                            </button>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">
                            Password must be at least 8 characters
                          </p>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="confirmPassword">Confirm Password</Label>
                          <Input 
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            placeholder="Confirm your password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        
                        <Button type="submit" className="w-full">
                          Continue
                        </Button>
                      </form>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-4 border-t px-6 py-4">
                      <div className="flex items-center justify-center w-full">
                        <Separator className="flex-1" />
                        <span className="mx-2 text-xs text-muted-foreground">OR</span>
                        <Separator className="flex-1" />
                      </div>
                      
                      <div className="text-center text-sm">
                        Already have an account?{" "}
                        <Link href="/login" className="text-primary hover:underline">
                          Log in
                        </Link>
                      </div>
                    </CardFooter>
                  </>
                )}
                
                {registrationStep === 2 && (
                  <>
                    <CardHeader>
                      <CardTitle>Additional Details</CardTitle>
                      <CardDescription>Tell us more about your API usage</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="organization">Organization/Company</Label>
                          <Input 
                            id="organization"
                            name="organization"
                            placeholder="Enter your organization name (optional)"
                            value={formData.organization}
                            onChange={handleChange}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="website">Website</Label>
                          <Input 
                            id="website"
                            name="website"
                            placeholder="https://your-website.com (optional)"
                            value={formData.website}
                            onChange={handleChange}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Label htmlFor="useCase">How will you use our API?</Label>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Info size={14} className="text-muted-foreground" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="w-64">
                                    This helps us understand your needs and improve our API services.
                                  </p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                          <Input 
                            id="useCase"
                            name="useCase"
                            placeholder="Describe your use case"
                            value={formData.useCase}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        
                        <div className="space-y-4 pt-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox 
                              id="acceptTerms" 
                              name="acceptTerms"
                              checked={formData.acceptTerms}
                              onCheckedChange={(checked) => 
                                setFormData({...formData, acceptTerms: checked})
                              }
                              required
                            />
                            <Label htmlFor="acceptTerms" className="text-sm leading-tight">
                              I agree to the{" "}
                              <Link href="/terms" className="text-primary hover:underline">
                                Terms of Service
                              </Link>{" "}
                              and{" "}
                              <Link href="/privacy" className="text-primary hover:underline">
                                Privacy Policy
                              </Link>
                            </Label>
                          </div>
                        </div>
                        
                        <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
                          <Button 
                            type="button" 
                            variant="outline"
                            className="flex-1"
                            onClick={() => setRegistrationStep(1)}
                          >
                            Back
                          </Button>
                          <Button 
                            type="submit" 
                            className="flex-1"
                            disabled={isLoading || !formData.acceptTerms}
                          >
                            {isLoading ? (
                              <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Processing
                              </>
                            ) : (
                              "Complete Registration"
                            )}
                          </Button>
                        </div>
                      </form>
                    </CardContent>
                  </>
                )}
                
                {registrationStep === 3 && (
                  <>
                    <CardHeader className="text-center pb-2">
                      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                        <Check className="h-7 w-7 text-green-600 dark:text-green-400" />
                      </div>
                      <CardTitle>Registration Successful!</CardTitle>
                      <CardDescription>Your API key has been generated</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="my-4 p-4 bg-muted rounded-lg">
                        <p className="text-xs mb-1 text-muted-foreground">Your API Key</p>
                        <p className="font-mono break-all select-all">
                          jkt48_api_27f4be1c90d5e8a6fb09d198c5d7942e
                        </p>
                      </div>
                      <div className="text-sm text-muted-foreground mt-4">
                        <p>Please save this key somewhere safe. You'll need it for all API requests.</p>
                        <p className="mt-2">We've also sent a confirmation email with your API details.</p>
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-3">
                      <Button className="w-full" asChild>
                        <Link href="/dashboard">
                          Go to Dashboard
                        </Link>
                      </Button>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href="/docs">
                          Explore Documentation
                        </Link>
                      </Button>
                    </CardFooter>
                  </>
                )}
              </Card>
            </motion.div>
            
            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mt-8 text-center text-xs text-muted-foreground"
            >
              <p>© {new Date().getFullYear()} JKT48 API. All rights reserved.</p>
              <div className="mt-2 flex justify-center space-x-4">
                <Link href="/terms" className="hover:text-primary hover:underline">
                  Terms
                </Link>
                <Link href="/privacy" className="hover:text-primary hover:underline">
                  Privacy
                </Link>
                <Link href="/help" className="hover:text-primary hover:underline">
                  Help
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
