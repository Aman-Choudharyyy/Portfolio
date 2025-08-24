"use client"

import { Button } from "@/components/ui/button"
import { X, Users, Code, Shield, Eye, AlertTriangle, Network, Database } from "lucide-react"
import { useState, useEffect } from "react"

export default function ExperiencePage() {
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

  const experiences = [
    {
      icon: Users,
      title: "Core Member",
      company: "The Hacker's Meetup",
      period: "July 2024 - July 2025",
      description:
        "Lead the planning, coordination, and execution of monthly cybersecurity meetups focused on ethical hacking, malware analysis, red/blue teaming, and hands-on labs. Collaborate with fellow organizers and industry professionals to design technical workshops, facilitate knowledge sharing, and foster a growing community of cybersecurity enthusiasts and practitioners. Actively contribute to content curation, speaker outreach, and event logistics.",
      type: "Leadership",
    },
    {
      icon: Code,
      title: "Intern",
      company: "Thevaultofcodes",
      period: "November 2023 - December 2023",
      description:
        "Completed a one-month internship focused on foundational cybersecurity concepts and practical skills. Gained hands-on experience in vulnerability assessment, basic penetration testing, network security, and threat identification. Developed a strong understanding of core cybersecurity principles, tools, and methodologies through guided projects, research tasks, and technical training. Strengthened analytical thinking and built a solid base for advanced security practices.",
      type: "Internship",
    },
  ]

  const skills = [
    {
      icon: Network,
      name: "Network Security",
      description: "Firewall configuration, intrusion detection, network monitoring",
      level: "Advanced",
    },
    {
      icon: Eye,
      name: "SIEM",
      description: "Security Information and Event Management systems",
      level: "Intermediate",
    },
    {
      icon: AlertTriangle,
      name: "SOAR",
      description: "Security Orchestration, Automation and Response",
      level: "Intermediate",
    },
    {
      icon: Database,
      name: "Digital Forensic",
      description: "Digital evidence analysis and incident investigation",
      level: "Intermediate",
    },
    {
      icon: Shield,
      name: "Incident Response",
      description: "Threat detection, containment, and recovery procedures",
      level: "Advanced",
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Experience</h1>
            <p
              className={`text-xl lg:text-2xl transition-colors duration-500 ${
                isDark ? "text-[#A29BB0]" : "text-[#9E8C89]"
              }`}
            >
              My work experience and technical skills
            </p>
          </div>

          {/* Work Experience Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 animate-in slide-in-from-left duration-700">Work Experience</h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => {
                const IconComponent = exp.icon
                return (
                  <div
                    key={index}
                    className={`p-6 rounded-2xl transition-all duration-500 hover:scale-[1.01] animate-in slide-in-from-left duration-700 ${
                      isDark ? "bg-[#2B2735] border border-[#3D3548]" : "bg-[#FFF8F8] border border-[#F0E6E6]"
                    }`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`p-3 rounded-xl transition-colors duration-500 ${
                          isDark ? "bg-[#A66CFF]/20 text-[#B18BD8]" : "bg-[#BC8C7A]/20 text-[#BC8C7A]"
                        }`}
                      >
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-semibold">{exp.title}</h3>
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-medium ${
                              exp.type === "Leadership"
                                ? isDark
                                  ? "bg-blue-500/20 text-blue-400"
                                  : "bg-blue-500/20 text-blue-600"
                                : isDark
                                  ? "bg-green-500/20 text-green-400"
                                  : "bg-green-500/20 text-green-600"
                            }`}
                          >
                            {exp.type}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 mb-3">
                          <h4
                            className={`text-lg font-medium transition-colors duration-500 ${
                              isDark ? "text-[#B18BD8]" : "text-[#BC8C7A]"
                            }`}
                          >
                            {exp.company}
                          </h4>
                          <span
                            className={`text-sm transition-colors duration-500 ${
                              isDark ? "text-[#A29BB0]" : "text-[#9E8C89]"
                            }`}
                          >
                            • {exp.period}
                          </span>
                        </div>
                        <p
                          className={`text-base leading-relaxed transition-colors duration-500 ${
                            isDark ? "text-[#A29BB0]" : "text-[#9E8C89]"
                          }`}
                        >
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Technical Skills Section */}
          <div>
            <h2 className="text-2xl font-bold mb-8 animate-in slide-in-from-right duration-700">Technical Skills</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon
                return (
                  <div
                    key={index}
                    className={`p-6 rounded-2xl transition-all duration-500 hover:scale-[1.02] animate-in slide-in-from-bottom duration-700 ${
                      isDark ? "bg-[#2B2735] border border-[#3D3548]" : "bg-[#FFF8F8] border border-[#F0E6E6]"
                    }`}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`p-3 rounded-xl transition-colors duration-500 ${
                          isDark ? "bg-[#A66CFF]/20 text-[#B18BD8]" : "bg-[#BC8C7A]/20 text-[#BC8C7A]"
                        }`}
                      >
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold">{skill.name}</h3>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              skill.level === "Advanced"
                                ? isDark
                                  ? "bg-green-500/20 text-green-400"
                                  : "bg-green-500/20 text-green-600"
                                : isDark
                                  ? "bg-yellow-500/20 text-yellow-400"
                                  : "bg-yellow-500/20 text-yellow-600"
                            }`}
                          >
                            {skill.level}
                          </span>
                        </div>
                        <p
                          className={`text-sm leading-relaxed transition-colors duration-500 ${
                            isDark ? "text-[#A29BB0]" : "text-[#9E8C89]"
                          }`}
                        >
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
