"use client"

import { motion } from 'framer-motion'
import { useState, useMemo } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Clock, MessageSquare } from 'lucide-react'

export default function AppleContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState({ email: "" })

  // Email Validation Function
  const validateEmail = (email: string) =>
    /\S+@\S+\.\S+/.test(email)

  // Form Validity
  const isFormValid =
    formData.name.trim() &&
    formData.email.trim() &&
    validateEmail(formData.email) &&
    formData.message.trim()

  // Handle input changes and email validation
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (name === "email") {
      setErrors({ email: validateEmail(value) ? '' : 'Enter a valid email address' })
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
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        setSubmitStatus('error');
      } else {
        setFormData({ name: '', email: '', message: '' });
        setSubmitStatus('success');
      }
    } catch {
      setSubmitStatus('error');
    }
  
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus('idle'), 3000);
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
    <section id="contact" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-50 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-black tracking-tight mb-6">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how I can help bring 
            your ideas to life with exceptional design and development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-black mb-8">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  className="h-14 text-lg border-gray-200 focus:border-black focus:ring-black"
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
                  className="h-14 text-lg border-gray-200 focus:border-black focus:ring-black"
                  required
                  disabled={isSubmitting}
                  autoComplete="email"
                  aria-invalid={!!errors.email}
                  aria-describedby="email-error"
                />
                {errors.email && (
                  <p id="email-error" className="mt-2 text-sm text-red-600">{errors.email}</p>
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
                  className="min-h-[120px] text-base sm:text-lg border-gray-200 focus:border-black focus:ring-black resize-none text-black placeholder:text-gray-500"
                  required
                  disabled={isSubmitting}
                  autoComplete="off"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Button
                  type="submit"
                  size="lg"
                  disabled={!isFormValid || isSubmitting}
                  className={`w-full h-14 text-lg font-medium transition-all duration-200 ${
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
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 animate-spin" />
                      <span>Sending...</span>
                    </div>
                  ) : submitStatus === 'success' ? (
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5" />
                      <span>Message Sent!</span>
                    </div>
                  ) : submitStatus === 'error' ? (
                    <div className="flex items-center space-x-2">
                      <AlertCircle className="h-5 w-5" />
                      <span>Error - Try Again</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </div>
                  )}
                </Button>
                <div aria-live="polite" className="sr-only">
                  {submitStatus === "success" ? "Message sent successfully" : submitStatus === "error" ? "Error: Could not send message" : ""}
                </div>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-black mb-8">
              Contact Information
            </h3>
            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <method.icon className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-black">{method.title}</h4>
                    <p className="text-gray-600">{method.value}</p>
                    <p className="text-sm text-gray-500">{method.description}</p>
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
              className="pt-8"
            >
              <h4 className="text-xl font-semibold text-black mb-4 flex items-center space-x-2">
                <MessageSquare className="h-5 w-5" />
                <span>Connect With Me</span>
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-200 shadow-lg hover:shadow-xl"
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
              className="bg-blue-50 p-6 rounded-2xl border border-blue-100"
            >
              <div className="flex items-center space-x-3 mb-3">
                <Clock className="h-5 w-5 text-blue-600" />
                <h5 className="font-semibold text-black">Response Time</h5>
              </div>
              <p className="text-gray-600 text-sm">
                I typically respond to messages within 24 hours during business days. 
                For urgent inquiries, please mention it in your message.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* Footer quick contact */}
      <div className="max-w-7xl mx-auto px-6 mt-12 text-center text-sm text-gray-600">
        Reach me anytime at <a href="mailto:balawmurugan.jobs@gmail.com" className="underline">balawmurugan.jobs@gmail.com</a>. {' '}
        Prefer a call? <a href={process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/'} target="_blank" rel="noopener noreferrer" className="underline">Book via Calendly</a>.
      </div>
    </section>
  )
}
