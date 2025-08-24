"use client"

import { Button } from "@/components/ui/button"
import { X, Shield, Eye, AlertTriangle, Network, ExternalLink, Github } from "lucide-react"
import { useState, useEffect } from "react"
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Aman Choudhary | Portfolio</title>
        <meta name="description" content="Defensive Security Specialist Portfolio" />
      </Head>
      
      {/* Your page content */}
      <main>
        ...
      </main>
    </>
  );
}

export default function ProjectsPage() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setIsDark(savedTheme === "dark")
    }
  }, [])

  const handleClose = () => {
    window.close()
  }

  const projects = [
    {
      icon: Shield,
      title: "Network Security Monitor",
      description:
        "Real-time network traffic analysis tool with threat detection capabilities. Monitors suspicious activities and generates automated alerts for potential security breaches.",
      technologies: ["Python", "Wireshark", "Scapy", "Flask"],
      status: "Completed",
      github: "#",
      demo: "#",
    },
    {
      icon: Eye,
      title: "SIEM Dashboard",
      description:
        "Custom Security Information and Event Management dashboard for centralized log analysis and incident response. Features real-time monitoring and automated threat correlation.",
      technologies: ["React", "Node.js", "Elasticsearch", "Kibana"],
      status: "In Progress",
      github: "#",
      demo: "#",
    },
    {
      icon: AlertTriangle,
      title: "Incident Response Toolkit",
      description:
        "Comprehensive toolkit for cybersecurity incident response including automated forensic data collection, threat hunting scripts, and incident documentation templates.",
      technologies: ["PowerShell", "Python", "YARA", "Volatility"],
      status: "Completed",
      github: "#",
      demo: "#",
    },
    {
      icon: Network,
      title: "Vulnerability Scanner",
      description:
        "Automated vulnerability assessment tool that scans network infrastructure for security weaknesses and generates detailed reports with remediation recommendations.",
      technologies: ["Nmap", "Python", "OpenVAS", "Docker"],
      status: "Completed",
      github: "#",
      demo: "#",
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Projects</h1>
            <p
              className={`text-xl lg:text-2xl transition-colors duration-500 ${
                isDark ? "text-[#A29BB0]" : "text-[#9E8C89]"
              }`}
            >
              View my cybersecurity projects
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 animate-in slide-in-from-bottom duration-700">
            {projects.map((project, index) => {
              const IconComponent = project.icon
              return (
                <div
                  key={index}
                  className={`p-6 rounded-2xl transition-all duration-500 hover:scale-[1.02] ${
                    isDark ? "bg-[#2B2735] border border-[#3D3548]" : "bg-[#FFF8F8] border border-[#F0E6E6]"
                  }`}
                >
                  {/* Project Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`p-3 rounded-xl transition-colors duration-500 ${
                        isDark ? "bg-[#A66CFF]/20 text-[#B18BD8]" : "bg-[#BC8C7A]/20 text-[#BC8C7A]"
                      }`}
                    >
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            project.status === "Completed"
                              ? isDark
                                ? "bg-green-500/20 text-green-400"
                                : "bg-green-500/20 text-green-600"
                              : isDark
                                ? "bg-yellow-500/20 text-yellow-400"
                                : "bg-yellow-500/20 text-yellow-600"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Project Description */}
                  <p
                    className={`text-base leading-relaxed mb-4 transition-colors duration-500 ${
                      isDark ? "text-[#A29BB0]" : "text-[#9E8C89]"
                    }`}
                  >
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 rounded-full text-sm transition-colors duration-500 ${
                            isDark ? "bg-[#3D3548] text-[#B18BD8]" : "bg-[#F0E6E6] text-[#BC8C7A]"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className={`transition-all duration-300 hover:scale-105 ${
                        isDark
                          ? "border-[#B18BD8] text-[#B18BD8] hover:bg-[#A66CFF] hover:text-[#1F1B24]"
                          : "border-[#BC8C7A] text-[#BC8C7A] hover:bg-[#BC8C7A] hover:text-[#FFF5F5]"
                      }`}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className={`transition-all duration-300 hover:scale-105 ${
                        isDark
                          ? "border-[#B18BD8] text-[#B18BD8] hover:bg-[#A66CFF] hover:text-[#1F1B24]"
                          : "border-[#BC8C7A] text-[#BC8C7A] hover:bg-[#BC8C7A] hover:text-[#FFF5F5]"
                      }`}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
