"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { X, Phone, Mail, MapPin, Github, Linkedin, ExternalLink, Send } from "lucide-react"
import { useState, useEffect } from "react"

export default function ContactPage() {
  const [isDark, setIsDark] = useState(true)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setIsDark(savedTheme === "dark")
    }
  }, [])

  const handleClose = () => {
    window.close()
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9825228983",
      href: "tel:+919825228983",
    },
    {
      icon: Mail,
      label: "Email",
      value: "aman.r.choudharyy@gmail.com",
      href: "mailto:aman.r.choudharyy@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Gandhidham, Gujarat",
      href: "#",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "#",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "#",
    },
    {
      icon: ExternalLink,
      label: "Portfolio",
      href: "#",
    },
  ]

  return (
    <div
      className={`min-h-screen relative overflow-hidden transition-all duration-500 ${
        isDark ? "bg-[#1F1B24] text-[#EDE6F4]" : "bg-[#FFF5F5] text-[#4B3F40]"
      }`}
    >
      {/* Close button */}
      <div className="absolute top-6 right-6 z-10">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleClose}
          className={`transition-all duration-300 hover:scale-110 ${
            isDark
              ? "text-[#A29BB0] hover:text-[#EDE6F4] hover:bg-[#2B2735]"
              : "text-[#9E8C89] hover:text-[#4B3F40] hover:bg-[#FFF8F8]"
          }`}
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      {/* Main content */}
      <div className="flex items-start justify-center min-h-screen px-6 py-12">
        <div className="max-w-6xl w-full">
          {/* Header */}
          <div className="text-center mb-12 animate-in fade-in duration-700">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Contact</h1>
            <p
              className={`text-xl lg:text-2xl transition-colors duration-500 ${
                isDark ? "text-[#A29BB0]" : "text-[#9E8C89]"
              }`}
            >
              Get in touch with me
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-in slide-in-from-left duration-700">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon
                    return (
                      <a
                        key={index}
                        href={info.href}
                        className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:scale-[1.02] ${
                          isDark ? "hover:bg-[#2B2735]" : "hover:bg-[#FFF8F8]"
                        }`}
                      >
                        <div
                          className={`p-3 rounded-xl transition-colors duration-500 ${
                            isDark ? "bg-[#A66CFF]/20 text-[#B18BD8]" : "bg-[#BC8C7A]/20 text-[#BC8C7A]"
                          }`}
                        >
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-sm font-medium opacity-70">{info.label}</div>
                          <div className="text-lg">{info.value}</div>
                        </div>
                      </a>
                    )
                  })}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon
                    return (
                      <Button
                        key={index}
                        variant="outline"
                        size="icon"
                        className={`transition-all duration-300 hover:scale-110 ${
                          isDark
                            ? "border-[#B18BD8] text-[#B18BD8] hover:bg-[#A66CFF] hover:text-[#1F1B24]"
                            : "border-[#BC8C7A] text-[#BC8C7A] hover:bg-[#BC8C7A] hover:text-[#FFF5F5]"
                        }`}
                        aria-label={social.label}
                      >
                        <IconComponent className="h-5 w-5" />
                      </Button>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-in slide-in-from-right duration-700">
              <div
                className={`p-6 rounded-2xl transition-all duration-500 ${
                  isDark ? "bg-[#2B2735] border border-[#3D3548]" : "bg-[#FFF8F8] border border-[#F0E6E6]"
                }`}
              >
                <h2 className="text-2xl font-bold mb-6">Send me a message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 ${
                          isDark
                            ? "bg-[#1F1B24] border-[#3D3548] text-[#EDE6F4] focus:ring-[#A66CFF] focus:border-[#A66CFF]"
                            : "bg-[#FFF5F5] border-[#F0E6E6] text-[#4B3F40] focus:ring-[#BC8C7A] focus:border-[#BC8C7A]"
                        }`}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 ${
                          isDark
                            ? "bg-[#1F1B24] border-[#3D3548] text-[#EDE6F4] focus:ring-[#A66CFF] focus:border-[#A66CFF]"
                            : "bg-[#FFF5F5] border-[#F0E6E6] text-[#4B3F40] focus:ring-[#BC8C7A] focus:border-[#BC8C7A]"
                        }`}
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 ${
                        isDark
                          ? "bg-[#1F1B24] border-[#3D3548] text-[#EDE6F4] focus:ring-[#A66CFF] focus:border-[#A66CFF]"
                          : "bg-[#FFF5F5] border-[#F0E6E6] text-[#4B3F40] focus:ring-[#BC8C7A] focus:border-[#BC8C7A]"
                      }`}
                      placeholder="What's this about?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 resize-none ${
                        isDark
                          ? "bg-[#1F1B24] border-[#3D3548] text-[#EDE6F4] focus:ring-[#A66CFF] focus:border-[#A66CFF]"
                          : "bg-[#FFF5F5] border-[#F0E6E6] text-[#4B3F40] focus:ring-[#BC8C7A] focus:border-[#BC8C7A]"
                      }`}
                      placeholder="Your message here..."
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className={`w-full transition-all duration-300 hover:scale-[1.02] ${
                      isDark
                        ? "bg-[#A66CFF] text-[#1F1B24] hover:bg-[#B18BD8] hover:shadow-lg hover:shadow-[#A66CFF]/20"
                        : "bg-[#BC8C7A] text-[#FFF5F5] hover:bg-[#DABFAF] hover:shadow-lg hover:shadow-[#BC8C7A]/20"
                    }`}
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
