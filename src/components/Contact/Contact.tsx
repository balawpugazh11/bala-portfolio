"use client"

import { motion } from 'framer-motion'
import { useState, useMemo, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Clock, MessageSquare, Shield } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    captchaAnswer: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState({ email: "", captcha: "" })
  const [captchaQuestion, setCaptchaQuestion] = useState({ num1: 0, num2: 0, answer: 0 })
  const [isClient, setIsClient] = useState(false)

  // Initialize captcha on client side only
  useEffect(() => {
    setIsClient(true)
    const num1 = Math.floor(Math.random() * 10) + 1
    const num2 = Math.floor(Math.random() * 10) + 1
    setCaptchaQuestion({ num1, num2, answer: num1 + num2 })
  }, [])

  // Email Validation Function
  const validateEmail = (email: string) =>
    /\S+@\S+\.\S+/.test(email)

  // Form Validity
  const isFormValid =
    formData.name.trim() &&
    formData.email.trim() &&
    validateEmail(formData.email) &&
    formData.message.trim() &&
    formData.captchaAnswer.trim() !== '' &&
    !isNaN(parseInt(formData.captchaAnswer)) &&
    parseInt(formData.captchaAnswer) === captchaQuestion.answer

  // Handle input changes and validation
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    
    if (name === "email") {
      setErrors(prev => ({ ...prev, email: validateEmail(value) ? '' : 'Enter a valid email address' }))
    }
    
    if (name === "captchaAnswer") {
      if (!value.trim()) {
        // Clear error if field is empty
        setErrors(prev => ({ ...prev, captcha: '' }))
      } else {
        const answer = parseInt(value)
        // Only show error if value is not a valid number or doesn't match
        if (isNaN(answer)) {
          setErrors(prev => ({ ...prev, captcha: 'Please enter a valid number' }))
        } else {
          setErrors(prev => ({ 
            ...prev, 
            captcha: answer === captchaQuestion.answer ? '' : 'Incorrect answer' 
          }))
        }
      }
    }
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        }),
      });
  
      if (!response.ok) {
        setSubmitStatus('error');
      } else {
        setFormData({ name: '', email: '', message: '', captchaAnswer: '' });
        setErrors({ email: '', captcha: '' }); // Clear all errors on success
        setSubmitStatus('success');
        // Generate new captcha after successful submission
        const num1 = Math.floor(Math.random() * 10) + 1
        const num2 = Math.floor(Math.random() * 10) + 1
        setCaptchaQuestion({ num1, num2, answer: num1 + num2 })
      }
    } catch {
      setSubmitStatus('error');
    }
  
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus('idle'), 5000);
  };
  

  // Memoize for performance (not critical but a best practice)
  const contactMethods = useMemo(() => [
    {
      icon: Mail,
      title: "Email",
      value: <a href="mailto:balawmurugan.jobs@gmail.com" className="underline">balawmurugan.jobs@gmail.com</a>,
      description: "I'll respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Phone",
      value: <a href="tel:+917603925873" className="underline">+91-7603925873</a>,
      description: "Available Mon-Fri, 9AM-6PM IST"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Cuddalore, India",
      description: "Available for remote work worldwide"
    }
  ], [])

  const socialLinks = useMemo(() => [
    {
      name: "GitHub",
      url: "https://github.com/balawpugazh11",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/balawmuruganm/",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    }
  ], [])

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-blue-50 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-64 sm:h-64 bg-purple-50 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-black tracking-tight mb-4 sm:mb-6">
            Get In Touch
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-2">
            Ready to start your next project? Let's discuss how I can help bring 
            your ideas to life with exceptional design and development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-black mb-6 sm:mb-8">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Name Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <label htmlFor="name" className="sr-only">Your Name</label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="h-12 sm:h-14 text-base sm:text-lg border-gray-200 focus:border-black focus:ring-black"
                  required
                  disabled={isSubmitting}
                  autoComplete="name"
                />
              </motion.div>

              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label htmlFor="email" className="sr-only">Your Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-12 sm:h-14 text-base sm:text-lg border-gray-200 focus:border-black focus:ring-black"
                  required
                  disabled={isSubmitting}
                  autoComplete="email"
                  aria-invalid={!!errors.email}
                  aria-describedby="email-error"
                />
                {errors.email && (
                  <p id="email-error" className="mt-2 text-xs sm:text-sm text-red-600">{errors.email}</p>
                )}
              </motion.div>

              {/* Message Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <label htmlFor="message" className="sr-only">Your Message</label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="min-h-[100px] sm:min-h-[120px] text-base sm:text-lg border-gray-200 focus:border-black focus:ring-black resize-none text-black placeholder:text-gray-500"
                  required
                  disabled={isSubmitting}
                  autoComplete="off"
                />
              </motion.div>

              {/* Anti-Spam Captcha - Only show when client-side */}
              {isClient && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-200"
                >
                  <div className="flex items-center space-x-2 mb-3">
                    <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
                    <span className="text-xs sm:text-sm font-medium text-gray-700">Security Check</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <span className="text-sm sm:text-base text-gray-600">
                      What is {captchaQuestion.num1} + {captchaQuestion.num2}?
                    </span>
                    <Input
                      name="captchaAnswer"
                      type="number"
                      placeholder="Answer"
                      value={formData.captchaAnswer}
                      onChange={handleChange}
                      className="w-full sm:w-20 h-10 text-center border-gray-200 focus:border-black focus:ring-black"
                      required
                      disabled={isSubmitting}
                      aria-invalid={!!errors.captcha}
                      aria-describedby="captcha-error"
                    />
                  </div>
                  {errors.captcha && (
                    <p id="captcha-error" className="mt-2 text-xs sm:text-sm text-red-600">{errors.captcha}</p>
                  )}
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Button
                  type="submit"
                  size="lg"
                  disabled={!isFormValid || isSubmitting || !isClient}
                  className={`w-full h-12 sm:h-14 text-sm sm:text-base md:text-lg font-medium transition-all duration-200 ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : submitStatus === 'success'
                      ? 'bg-green-600 hover:bg-green-700'
                      : submitStatus === 'error'
                      ? 'bg-red-600 hover:bg-red-700'
                      : 'bg-black hover:bg-gray-800'
                  } text-white shadow-lg hover:shadow-xl`}
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <Clock className="h-4 w-4 sm:h-5 sm:w-5 animate-spin" />
                      <span>Sending...</span>
                    </div>
                  ) : submitStatus === 'success' ? (
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                      <span className="hidden sm:inline">Message Sent Successfully!</span>
                      <span className="sm:hidden">Sent!</span>
                    </div>
                  ) : submitStatus === 'error' ? (
                    <div className="flex items-center justify-center space-x-2">
                      <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                      <span className="hidden sm:inline">Error - Please Try Again</span>
                      <span className="sm:hidden">Try Again</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                      <span>Send Message</span>
                    </div>
                  )}
                </Button>
                <div aria-live="polite" className="sr-only">
                  {submitStatus === "success" ? "Message sent successfully" : submitStatus === "error" ? "Error: Could not send message" : ""}
                </div>
              </motion.div>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 sm:p-4 bg-green-50 border border-green-200 rounded-lg"
                >
                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-green-800">Message Sent Successfully!</h4>
                      <p className="text-xs sm:text-sm text-green-700 mt-1">
                        Thank you for reaching out. I'll get back to you within 24 hours.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg"
                >
                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <AlertCircle className="h-5 w-5 sm:h-6 sm:w-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-red-800">Message Could Not Be Sent</h4>
                      <p className="text-xs sm:text-sm text-red-700 mt-1">
                        Please try again or contact me directly at{' '}
                        <a href="mailto:balawmurugan.jobs@gmail.com" className="underline break-all">balawmurugan.jobs@gmail.com</a>
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8 mt-8 lg:mt-0"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-black mb-6 sm:mb-8">
              Contact Information
            </h3>
            {/* Contact Methods */}
            <div className="space-y-4 sm:space-y-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start sm:items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-50 rounded-xl sm:rounded-2xl hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                    <method.icon className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-base sm:text-lg font-semibold text-black">{method.title}</h4>
                    <p className="text-sm sm:text-base text-gray-600 break-words">{method.value}</p>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">{method.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="pt-6 sm:pt-8"
            >
              <h4 className="text-lg sm:text-xl font-semibold text-black mb-3 sm:mb-4 flex items-center space-x-2">
                <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Connect With Me</span>
              </h4>
              <div className="flex space-x-3 sm:space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-200 shadow-lg hover:shadow-xl"
                    aria-label={social.name}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Response Time Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-blue-100"
            >
              <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                <h5 className="font-semibold text-sm sm:text-base text-black">Response Time</h5>
              </div>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                I typically respond to messages within 24 hours during business days. 
                For urgent inquiries, please mention it in your message.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* Footer quick contact */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-8 sm:mt-12 text-center text-xs sm:text-sm text-gray-600">
        <p className="mb-2">
          Reach me anytime at{' '}
          <a href="mailto:balawmurugan.jobs@gmail.com" className="underline break-all">balawmurugan.jobs@gmail.com</a>.
        </p>
        <p>
          Prefer a call?{' '}
          <a href={process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/'} target="_blank" rel="noopener noreferrer" className="underline">Book via Calendly</a>.
        </p>
      </div>
    </section>
  )
}
