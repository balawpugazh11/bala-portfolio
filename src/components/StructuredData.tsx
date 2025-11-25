"use client"

import { useEffect } from 'react'

export default function StructuredData() {
  useEffect(() => {
    // Add structured data to head after component mounts
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Balamurugan M",
      "jobTitle": "Full-Stack Developer",
      "description": "MERN Stack Developer specializing in React, Node.js, Express, MongoDB",
      "url": "https://bala-portfolio.vercel.app",
      "image": "https://bala-portfolio.vercel.app/hero-image.jpeg",
      "sameAs": [
        "https://github.com/balawpugazh11",
        "https://linkedin.com/in/balawmuruganm/"
      ],
      "worksFor": {
        "@type": "Organization",
        "name": "Freelance"
      },
      "knowsAbout": [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JavaScript",
        "TypeScript",
        "Web Development",
        "Full-Stack Development"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Cuddalore",
        "addressCountry": "India"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-7603925873",
        "contactType": "customer service",
        "email": "balawmurugan.jobs@gmail.com"
      }
    })
    
    document.head.appendChild(script)
    
    return () => {
      // Cleanup on unmount
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  return null
}
