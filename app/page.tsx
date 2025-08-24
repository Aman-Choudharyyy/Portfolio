"use client"

import { Button } from "@/components/ui/button"
import {
  Sun,
  Moon,
  Github,
  Linkedin,
  Twitter,
  Mail,
  User,
  Code,
  Briefcase,
  MessageCircle,
  X,
  GraduationCap,
  Award,
  Shield,
  Network,
  Eye,
  Zap,
  Phone,
  MapPin,
  ExternalLink,
} from "lucide-react"
import { useState, useEffect } from "react"

const ThreeVerticalLines = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="5" x2="12" y2="7" />
    <line x1="12" y1="11" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12" y2="19" />
  </svg>
)

export default function Page() {
  const [isDark, setIsDark] = useState(true)
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [activeModal, setActiveModal] = useState<string | null>(null)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setIsDark(savedTheme === "dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    localStorage.setItem("theme", newTheme ? "dark" : "light")
  }

  const downloadResume = () => {
    const googleDriveUrl = "https://drive.google.com/uc?export=download&id=13dhJrn6dB1iKB1FIFzfw6ejjM7ge5e-y"

    const link = document.createElement("a")
    link.href = googleDriveUrl
    link.download = "Aman_Choudhary_Resume.pdf"
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const navigationItems = [
    {
      icon: User,
      title: "Home",
      description: "Back to main page",
      href: "home",
    },
    {
      icon: User,
      title: "About Me",
      description: "Learn about my background and education",
      href: "about",
    },
    {
      icon: Code,
      title: "Projects",
      description: "View my cybersecurity projects",
      href: "projects",
    },
    {
      icon: Briefcase,
      title: "Experience",
      description: "My work experience and skills",
      href: "experience",
    },
    {
      icon: MessageCircle,
      title: "Contact",
      description: "Get in touch with me",
      href: "contact",
    },
  ]

  const handleNavigation = (href: string) => {
    if (href === "home") {
      setActiveModal(null)
    } else {
      setActiveModal(href)
    }
    setIsNavOpen(false)
  }

  const closeModal = () => {
    setActiveModal(null)
  }

  return (
    <div
      className={`min-h-screen relative transition-all duration-500 ${
        isDark ? "bg-[#1F1B24] text-[#EDE6F4]" : "bg-[#FFF5F5] text-[#4B3F40]"
      }`}
    >
      {/* Top navigation */}
      <div className="fixed top-6 left-6 z-40">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsNavOpen(!isNavOpen)}
          className={`transition-all duration-300 rounded-xl border-2 px-4 py-2 min-w-[44px] min-h-[44px] ${
            isDark
              ? "bg-transparent text-[#B18BD8] border-[#B18BD8] hover:bg-[#A66CFF] hover:text-white hover:border-[#A66CFF]"
              : "bg-[#BC8C7A] text-[#FFF5F5] border-[#BC8C7A]"
          }`}
          aria-label="Navigation Menu"
        >
          <ThreeVerticalLines className="h-5 w-5" />
        </Button>
      </div>

      {/* Navigation Panel */}
      {isNavOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsNavOpen(false)} />
          <div
            className={`relative w-80 h-full transition-all duration-300 ${
              isDark ? "bg-[#1F1B24] border-r border-[#2B2735]" : "bg-[#FFF5F5] border-r border-[#F0E6E6]"
            }`}
          >
            <div className="flex items-center justify-between p-6 border-b border-opacity-20">
              <h2 className={`text-xl font-semibold ${isDark ? "text-[#EDE6F4]" : "text-[#4B3F40]"}`}>Navigation</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsNavOpen(false)}
                className={`transition-all duration-300 hover:scale-110 ${
                  isDark
                    ? "text-[#A29BB0] hover:text-[#EDE6F4] hover:bg-[#2B2735]"
                    : "text-[#9E8C89] hover:text-[#4B3F40] hover:bg-[#FFF8F8]"
                }`}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="p-4 space-y-2">
              {navigationItems.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <button
                    key={index}
                    onClick={() => handleNavigation(item.href)}
                    className={`w-full flex items-center gap-4 p-4 rounded-lg transition-all duration-300 hover:scale-[1.02] ${
                      isDark ? "hover:bg-[#2B2735] text-[#EDE6F4]" : "hover:bg-[#FFF8F8] text-[#4B3F40]"
                    }`}
                  >
                    <div
                      className={`p-2 rounded-lg ${
                        isDark ? "bg-[#A66CFF]/20 text-[#B18BD8]" : "bg-[#BC8C7A]/20 text-[#BC8C7A]"
                      }`}
                    >
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div className="text-left">
                      <div className="font-medium">{item.title}</div>
                      <div className={`text-sm ${isDark ? "text-[#A29BB0]" : "text-[#9E8C89]"}`}>
                        {item.description}
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-opacity-20">
              <div className={`text-center text-sm ${isDark ? "text-[#A29BB0]" : "text-[#9E8C89]"}`}>
                Aman Choudhary - Defensive Security Specialist
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="fixed top-6 right-6 z-40">
        <Button
          onClick={toggleTheme}
          className={`transition-all duration-300 rounded-xl border-2 px-4 py-2 hover:scale-105 active:scale-95 min-w-[44px] min-h-[44px] ${
            isDark
              ? "bg-transparent text-[#B18BD8] border-[#B18BD8] hover:bg-[#A66CFF] hover:text-[#1F1B24] hover:shadow-lg hover:shadow-[#B18BD8]/20"
              : "bg-[#BC8C7A] text-[#FFF5F5] border-[#BC8C7A] hover:bg-transparent hover:text-[#BC8C7A] hover:border-[#BC8C7A]"
          }`}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </div>

      {/* Hero Section */}
      <section className="flex items-center justify-center min-h-screen px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl w-full">
          <div className="relative animate-in fade-in duration-700">
            <div
              className={`w-80 h-80 rounded-full p-1 transition-all duration-500 ${
                isDark
                  ? "bg-gradient-to-br from-[#B18BD8] via-[#A66CFF] to-[#B18BD8] shadow-2xl shadow-[#A66CFF]/20"
                  : "bg-gradient-to-br from-[#DABFAF] via-[#BC8C7A] to-[#DABFAF] shadow-2xl shadow-[#BC8C7A]/20"
              }`}
            >
              <div
                className={`w-full h-full rounded-full overflow-hidden transition-colors duration-500 ${
                  isDark ? "bg-[#2B2735]" : "bg-[#FFF8F8]"
                }`}
              >
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dp.jpg-xr3pY4wf0nEk5GgtYCT20Tjba1NLnJ.jpeg"
                  alt="Aman Choudhary"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="flex-1 text-center lg:text-left max-w-2xl animate-in slide-in-from-right duration-700">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Hi, I'm{" "}
              <span
                className={`bg-clip-text text-transparent transition-all duration-500 ${
                  isDark
                    ? "bg-gradient-to-r from-[#B18BD8] via-[#A66CFF] to-[#B18BD8]"
                    : "bg-gradient-to-r from-[#DABFAF] via-[#BC8C7A] to-[#DABFAF]"
                }`}
              >
                Aman Choudhary
              </span>
            </h1>

            <h2
              className={`text-xl lg:text-2xl mb-6 transition-colors duration-500 ${
                isDark ? "text-white" : "text-[#4A4A4A]"
              }`}
            >
              Defensive Security Specialist
            </h2>

            <p
              className={`text-lg leading-relaxed mb-8 max-w-xl transition-colors duration-500 ${
                isDark ? "text-white" : "text-[#4A4A4A]"
              }`}
            >
              Final-year B.Tech Computer Science student passionate about cybersecurity, specializing in defensive
              security strategies, threat detection, and incident response. Building secure digital environments for
              tomorrow.
            </p>

            <div className="flex justify-center flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                onClick={() => handleNavigation("projects")}
                className={`transition-all duration-300 border-2 px-8 py-3 text-lg hover:scale-105 active:scale-95 min-h-[44px] ${
                  isDark
                    ? "bg-[#A66CFF] text-white border-[#A66CFF] hover:bg-transparent hover:text-[#A66CFF] hover:shadow-lg hover:shadow-[#A66CFF]/20"
                    : "bg-[#BC8C7A] text-[#FFF5F5] border-[#BC8C7A] hover:bg-transparent hover:text-[#BC8C7A] hover:shadow-lg hover:shadow-[#BC8C7A]/20"
                }`}
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={downloadResume}
                className={`transition-all duration-300 border-2 px-8 py-3 text-lg hover:scale-105 active:scale-95 min-h-[44px] ${
                  isDark
                    ? "border-[#B18BD8] text-white bg-transparent hover:bg-[#A66CFF] hover:text-white hover:shadow-lg hover:shadow-[#B18BD8]/20"
                    : "bg-transparent text-[#BC8C7A] shadow-lg shadow-[#BC8C7A]/20 hover:bg-[#BC8C7A] hover:text-[#FFF5F5] border-[#BC8C7A]"
                }`}
              >
                Download Resume
              </Button>
            </div>

            <div className="flex justify-center lg:justify-start gap-4">
              <Button
                variant="ghost"
                size="icon"
                className={`transition-all duration-300 border-2px hover:scale-110 active:scale-95 min-w-[44px] min-h-[44px] ${
                  isDark
                    ? "text-[#A29BB0] hover:text-[#EDE6F4] hover:bg-[#2B2735] hover:border-[#BC8C7A]hover:shadow-lg"
                    : "text-[#9E8C89] hover:text-[#4B3F40] hover:bg-[#FFF8F8] hover:shadow-lg"
                }`}
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className={`transition-all duration-300 hover:scale-110 active:scale-95 min-w-[44px] min-h-[44px] ${
                  isDark
                    ? "text-[#A29BB0] hover:text-[#EDE6F4] hover:bg-[#2B2735] hover:shadow-lg"
                    : "text-[#9E8C89] hover:text-[#4B3F40] hover:bg-[#FFF8F8] hover:shadow-lg"
                }`}
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className={`transition-all duration-300 hover:scale-110 active:scale-95 min-w-[44px] min-h-[44px] ${
                  isDark
                    ? "text-[#A29BB0] hover:text-[#EDE6F4] hover:bg-[#2B2735] hover:shadow-lg"
                    : "text-[#9E8C89] hover:text-[#4B3F40] hover:bg-[#FFF8F8] hover:shadow-lg"
                }`}
                aria-label="Twitter Profile"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className={`transition-all duration-300 hover:scale-110 active:scale-95 min-w-[44px] min-h-[44px] ${
                  isDark
                    ? "text-[#A29BB0] hover:text-[#EDE6F4] hover:bg-[#2B2735] hover:shadow-lg"
                    : "text-[#9E8C89] hover:text-[#4B3F40] hover:bg-[#FFF8F8] hover:shadow-lg"
                }`}
                aria-label="Email Contact"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Modal */}
      {activeModal === "about" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={closeModal} />
          <div
            className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl transition-all duration-300 ${
              isDark ? "bg-[#1F1B24] border border-[#2B2735]" : "bg-[#FFF5F5] border border-[#F0E6E6]"
            }`}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={closeModal}
              className={`absolute top-4 right-4 z-10 ${
                isDark
                  ? "text-[#A29BB0] hover:text-[#EDE6F4] hover:bg-[#2B2735]"
                  : "text-[#9E8C89] hover:text-[#4B3F40] hover:bg-[#FFF8F8]"
              }`}
            >
              <X className="h-6 w-6" />
            </Button>

            <div className="p-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                  <span
                    className={`bg-clip-text text-transparent ${
                      isDark
                        ? "bg-gradient-to-r from-[#B18BD8] via-[#A66CFF] to-[#B18BD8]"
                        : "bg-gradient-to-r from-[#DABFAF] via-[#BC8C7A] to-[#DABFAF]"
                    }`}
                  >
                    About Me
                  </span>
                </h2>
                <p className={`text-xl ${isDark ? "text-white" : "text-black"}`}>
                  Passionate about cybersecurity and building secure digital environments
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-6">
                  <p className={`text-lg leading-relaxed ${isDark ? "text-white" : "text-black"}`}>
                    I'm a final-year B.Tech Computer Science student with a deep passion for cybersecurity, particularly
                    in defensive security strategies. My journey in tech has been driven by curiosity and a commitment
                    to protecting digital assets.
                  </p>
                  <p className={`text-lg leading-relaxed ${isDark ? "text-white" : "text-black"}`}>
                    Specializing in threat detection, incident response, and security automation, I'm constantly
                    learning and adapting to the evolving cybersecurity landscape.
                  </p>
                </div>

                <div className="space-y-8">
                  <div
                    className={`p-6 rounded-xl border transition-all duration-300 ${
                      isDark ? "bg-[#2B2735] border-[#3D3548]" : "bg-[#FFF8F8] border-[#F0E6E6]"
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`p-3 rounded-lg ${
                          isDark ? "bg-[#A66CFF]/20 text-[#B18BD8]" : "bg-[#BC8C7A]/20 text-[#BC8C7A]"
                        }`}
                      >
                        <GraduationCap className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className={`text-xl font-semibold ${isDark ? "text-white" : "text-black"}`}>Education</h3>
                        <p className={`${isDark ? "text-[#B18BD8]" : "text-[#BC8C7A]"}`}>B.Tech Computer Science</p>
                      </div>
                    </div>
                    <p className={`${isDark ? "text-white" : "text-black"}`}>
                      Final year student focusing on cybersecurity and defensive security strategies.
                    </p>
                  </div>

                  <div
                    className={`p-6 rounded-xl border transition-all duration-300 ${
                      isDark ? "bg-[#2B2735] border-[#3D3548]" : "bg-[#FFF8F8] border-[#F0E6E6]"
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`p-3 rounded-lg ${
                          isDark ? "bg-[#A66CFF]/20 text-[#B18BD8]" : "bg-[#BC8C7A]/20 text-[#BC8C7A]"
                        }`}
                      >
                        <Award className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className={`text-xl font-semibold ${isDark ? "text-white" : "text-black"}`}>
                          Specialization
                        </h3>
                        <p className={`${isDark ? "text-[#B18BD8]" : "text-[#BC8C7A]"}`}>Defensive Security</p>
                      </div>
                    </div>
                    <p className={`${isDark ? "text-white" : "text-black"}`}>
                      Focused on threat detection, incident response, and security automation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Projects Modal */}
      {activeModal === "projects" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={closeModal} />
          <div
            className={`relative w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-2xl transition-all duration-300 ${
              isDark ? "bg-[#1F1B24] border border-[#2B2735]" : "bg-[#FFF5F5] border border-[#F0E6E6]"
            }`}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={closeModal}
              className={`absolute top-4 right-4 z-10 ${
                isDark
                  ? "text-[#A29BB0] hover:text-[#EDE6F4] hover:bg-[#2B2735]"
                  : "text-[#9E8C89] hover:text-[#4B3F40] hover:bg-[#FFF8F8]"
              }`}
            >
              <X className="h-6 w-6" />
            </Button>

            <div className="p-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                  <span
                    className={`bg-clip-text text-transparent ${
                      isDark
                        ? "bg-gradient-to-r from-[#B18BD8] via-[#A66CFF] to-[#B18BD8]"
                        : "bg-gradient-to-r from-[#DABFAF] via-[#BC8C7A] to-[#DABFAF]"
                    }`}
                  >
                    Projects
                  </span>
                </h2>
                <p className={`text-xl ${isDark ? "text-white" : "text-black"}`}>
                  Cybersecurity projects and defensive security implementations
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    icon: Shield,
                    title: "Network Intrusion Detection System",
                    description:
                      "Advanced NIDS implementation using machine learning algorithms to detect and classify network threats in real-time.",
                    status: "Completed",
                    technologies: ["Python", "Scikit-learn", "Wireshark", "Snort"],
                  },
                  {
                    icon: Eye,
                    title: "SIEM Dashboard",
                    description:
                      "Custom Security Information and Event Management dashboard for centralized log analysis and threat visualization.",
                    status: "In Progress",
                    technologies: ["ELK Stack", "Kibana", "Logstash", "Python"],
                  },
                  {
                    icon: Network,
                    title: "Vulnerability Assessment Tool",
                    description:
                      "Automated vulnerability scanner that identifies security weaknesses in network infrastructure and web applications.",
                    status: "Completed",
                    technologies: ["Nmap", "OpenVAS", "Python", "Docker"],
                  },
                  {
                    icon: Zap,
                    title: "Incident Response Automation",
                    description:
                      "SOAR-based incident response automation platform that streamlines security incident handling and remediation.",
                    status: "Planning",
                    technologies: ["Phantom", "Python", "REST APIs", "Playbooks"],
                  },
                ].map((project, index) => {
                  const IconComponent = project.icon
                  return (
                    <div
                      key={index}
                      className={`p-6 rounded-xl border transition-all duration-300 hover:scale-[1.02] ${
                        isDark
                          ? "bg-[#2B2735] border-[#3D3548] hover:border-[#A66CFF]/50"
                          : "bg-[#FFF8F8] border-[#F0E6E6] hover:border-[#BC8C7A]/50"
                      }`}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className={`p-3 rounded-lg ${
                            isDark ? "bg-[#A66CFF]/20 text-[#B18BD8]" : "bg-[#BC8C7A]/20 text-[#BC8C7A]"
                          }`}
                        >
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className={`text-xl font-semibold ${isDark ? "text-white" : "text-black"}`}>
                            {project.title}
                          </h3>
                          <span
                            className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                              project.status === "Completed"
                                ? isDark
                                  ? "bg-green-500/20 text-green-400"
                                  : "bg-green-500/20 text-green-600"
                                : project.status === "In Progress"
                                  ? isDark
                                    ? "bg-yellow-500/20 text-yellow-400"
                                    : "bg-yellow-500/20 text-yellow-600"
                                  : isDark
                                    ? "bg-blue-500/20 text-blue-400"
                                    : "bg-blue-500/20 text-blue-600"
                            }`}
                          >
                            {project.status}
                          </span>
                        </div>
                      </div>

                      <p className={`mb-4 ${isDark ? "text-white" : "text-black"}`}>{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`px-2 py-1 rounded text-xs ${
                              isDark ? "bg-[#3D3548] text-[#A29BB0]" : "bg-[#F0E6E6] text-[#9E8C89]"
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className={`transition-all duration-300 ${
                            isDark
                              ? "border-[#B18BD8] text-[#B18BD8] hover:bg-[#A66CFF] hover:text-[#1F1B24]"
                              : "border-[#BC8C7A] text-[#BC8C7A] hover:bg-[#BC8C7A] hover:text-[#FFF5F5]"
                          }`}
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className={`transition-all duration-300 ${
                            isDark
                              ? "text-[#A29BB0] hover:text-[#EDE6F4] hover:bg-[#2B2735]"
                              : "text-[#9E8C89] hover:text-[#4B3F40] hover:bg-[#FFF8F8]"
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
      )}

      {/* Experience Modal */}
      {activeModal === "experience" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={closeModal} />
          <div
            className={`relative w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-2xl transition-all duration-300 ${
              isDark ? "bg-[#1F1B24] border border-[#2B2735]" : "bg-[#FFF5F5] border border-[#F0E6E6]"
            }`}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={closeModal}
              className={`absolute top-4 right-4 z-10 ${
                isDark
                  ? "text-[#A29BB0] hover:text-[#EDE6F4] hover:bg-[#2B2735]"
                  : "text-[#9E8C89] hover:text-[#4B3F40] hover:bg-[#FFF8F8]"
              }`}
            >
              <X className="h-6 w-6" />
            </Button>

            <div className="p-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                  <span
                    className={`bg-clip-text text-transparent ${
                      isDark
                        ? "bg-gradient-to-r from-[#B18BD8] via-[#A66CFF] to-[#B18BD8]"
                        : "bg-gradient-to-r from-[#DABFAF] via-[#BC8C7A] to-[#DABFAF]"
                    }`}
                  >
                    Experience
                  </span>
                </h2>
                <p className={`text-xl ${isDark ? "text-white" : "text-black"}`}>
                  Professional experience and technical expertise
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Work Experience */}
                <div>
                  <h3 className={`text-2xl font-semibold mb-8 ${isDark ? "text-white" : "text-black"}`}>
                    Work Experience
                  </h3>
                  <div className="space-y-8">
                    <div
                      className={`p-6 rounded-xl border ${
                        isDark ? "bg-[#2B2735] border-[#3D3548]" : "bg-[#FFF8F8] border-[#F0E6E6]"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`p-3 rounded-lg ${
                            isDark ? "bg-[#A66CFF]/20 text-[#B18BD8]" : "bg-[#BC8C7A]/20 text-[#BC8C7A]"
                          }`}
                        >
                          <Briefcase className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h4 className={`text-xl font-semibold ${isDark ? "text-white" : "text-black"}`}>
                            Core Member
                          </h4>
                          <p className={`${isDark ? "text-[#B18BD8]" : "text-[#BC8C7A]"} mb-2`}>
                            The Hacker's Meetup • July 2024 - July 2025
                          </p>
                          <p className={`${isDark ? "text-white" : "text-black"} leading-relaxed`}>
                            Lead the planning, coordination, and execution of monthly cybersecurity meetups focused on
                            ethical hacking, malware analysis, red/blue teaming, and hands-on labs.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`p-6 rounded-xl border ${
                        isDark ? "bg-[#2B2735] border-[#3D3548]" : "bg-[#FFF8F8] border-[#F0E6E6]"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`p-3 rounded-lg ${
                            isDark ? "bg-[#A66CFF]/20 text-[#B18BD8]" : "bg-[#BC8C7A]/20 text-[#BC8C7A]"
                          }`}
                        >
                          <Code className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h4 className={`text-xl font-semibold ${isDark ? "text-white" : "text-black"}`}>Intern</h4>
                          <p className={`${isDark ? "text-[#B18BD8]" : "text-[#BC8C7A]"} mb-2`}>
                            Thevaultofcodes • November 2023 - December 2023
                          </p>
                          <p className={`${isDark ? "text-white" : "text-black"} leading-relaxed`}>
                            Completed a one-month internship focused on foundational cybersecurity concepts and
                            practical skills. Gained hands-on experience in vulnerability assessment and network
                            security.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technical Skills */}
                <div>
                  <h3 className={`text-2xl font-semibold mb-8 ${isDark ? "text-white" : "text-black"}`}>
                    Technical Skills
                  </h3>
                  <div className="grid gap-4">
                    {[
                      {
                        skill: "Network Security",
                        level: 90,
                        description: "Firewall configuration, IDS/IPS, Network monitoring",
                      },
                      { skill: "SIEM", level: 85, description: "Log analysis, Event correlation, Threat detection" },
                      {
                        skill: "SOAR",
                        level: 75,
                        description: "Security orchestration, Automated response, Playbook development",
                      },
                      {
                        skill: "Digital Forensic",
                        level: 80,
                        description: "Evidence collection, Malware analysis, Incident investigation",
                      },
                      {
                        skill: "Incident Response",
                        level: 88,
                        description: "Threat containment, Recovery procedures, Post-incident analysis",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-lg border ${
                          isDark ? "bg-[#2B2735] border-[#3D3548]" : "bg-[#FFF8F8] border-[#F0E6E6]"
                        }`}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <h4 className={`font-semibold ${isDark ? "text-white" : "text-black"}`}>{item.skill}</h4>
                          <span className={`text-sm ${isDark ? "text-[#B18BD8]" : "text-[#BC8C7A]"}`}>
                            {item.level}%
                          </span>
                        </div>
                        <div
                          className={`w-full bg-opacity-20 rounded-full h-2 mb-2 ${
                            isDark ? "bg-[#3D3548]" : "bg-[#F0E6E6]"
                          }`}
                        >
                          <div
                            className={`h-2 rounded-full transition-all duration-500 ${
                              isDark
                                ? "bg-gradient-to-r from-[#B18BD8] to-[#A66CFF]"
                                : "bg-gradient-to-r from-[#DABFAF] to-[#BC8C7A]"
                            }`}
                            style={{ width: `${item.level}%` }}
                          />
                        </div>
                        <p className={`text-sm ${isDark ? "text-white" : "text-black"}`}>{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {activeModal === "contact" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={closeModal} />
          <div
            className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl transition-all duration-300 ${
              isDark ? "bg-[#1F1B24] border border-[#2B2735]" : "bg-[#FFF5F5] border border-[#F0E6E6]"
            }`}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={closeModal}
              className={`absolute top-4 right-4 z-10 ${
                isDark
                  ? "text-[#A29BB0] hover:text-[#EDE6F4] hover:bg-[#2B2735]"
                  : "text-[#9E8C89] hover:text-[#4B3F40] hover:bg-[#FFF8F8]"
              }`}
            >
              <X className="h-6 w-6" />
            </Button>

            <div className="p-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                  <span
                    className={`bg-clip-text text-transparent ${
                      isDark
                        ? "bg-gradient-to-r from-[#B18BD8] via-[#A66CFF] to-[#B18BD8]"
                        : "bg-gradient-to-r from-[#DABFAF] via-[#BC8C7A] to-[#DABFAF]"
                    }`}
                  >
                    Contact
                  </span>
                </h2>
                <p className={`text-xl ${isDark ? "text-white" : "text-black"}`}>Get in touch with me</p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div className="space-y-8">
                  <div
                    className={`p-6 rounded-xl border ${
                      isDark ? "bg-[#2B2735] border-[#3D3548]" : "bg-[#FFF8F8] border-[#F0E6E6]"
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`p-3 rounded-lg ${
                          isDark ? "bg-[#A66CFF]/20 text-[#B18BD8]" : "bg-[#BC8C7A]/20 text-[#BC8C7A]"
                        }`}
                      >
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className={`text-lg font-semibold ${isDark ? "text-white" : "text-black"}`}>Phone</h3>
                        <p className={`${isDark ? "text-white" : "text-black"}`}>+91 9825228983</p>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`p-6 rounded-xl border ${
                      isDark ? "bg-[#2B2735] border-[#3D3548]" : "bg-[#FFF8F8] border-[#F0E6E6]"
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`p-3 rounded-lg ${
                          isDark ? "bg-[#A66CFF]/20 text-[#B18BD8]" : "bg-[#BC8C7A]/20 text-[#BC8C7A]"
                        }`}
                      >
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className={`text-lg font-semibold ${isDark ? "text-white" : "text-black"}`}>Email</h3>
                        <p className={`${isDark ? "text-white" : "text-black"}`}>aman.r.choudharyy@gmail.com</p>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`p-6 rounded-xl border ${
                      isDark ? "bg-[#2B2735] border-[#3D3548]" : "bg-[#FFF8F8] border-[#F0E6E6]"
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`p-3 rounded-lg ${
                          isDark ? "bg-[#A66CFF]/20 text-[#B18BD8]" : "bg-[#BC8C7A]/20 text-[#BC8C7A]"
                        }`}
                      >
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className={`text-lg font-semibold ${isDark ? "text-white" : "text-black"}`}>Location</h3>
                        <p className={`${isDark ? "text-white" : "text-black"}`}>Gandhidham, Gujarat</p>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className={`transition-all duration-300 hover:scale-110 ${
                        isDark
                          ? "border-[#B18BD8] text-[#B18BD8] hover:bg-[#A66CFF] hover:text-[#1F1B24]"
                          : "border-[#BC8C7A] text-[#BC8C7A] hover:bg-[#BC8C7A] hover:text-[#FFF5F5]"
                      }`}
                    >
                      <Github className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className={`transition-all duration-300 hover:scale-110 ${
                        isDark
                          ? "border-[#B18BD8] text-[#B18BD8] hover:bg-[#A66CFF] hover:text-[#1F1B24]"
                          : "border-[#BC8C7A] text-[#BC8C7A] hover:bg-[#BC8C7A] hover:text-[#FFF5F5]"
                      }`}
                    >
                      <Linkedin className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className={`transition-all duration-300 hover:scale-110 ${
                        isDark
                          ? "border-[#B18BD8] text-[#B18BD8] hover:bg-[#A66CFF] hover:text-[#1F1B24]"
                          : "border-[#BC8C7A] text-[#BC8C7A] hover:bg-[#BC8C7A] hover:text-[#FFF5F5]"
                      }`}
                    >
                      <Twitter className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                {/* Contact Form */}
                <div
                  className={`p-8 rounded-xl border ${
                    isDark ? "bg-[#2B2735] border-[#3D3548]" : "bg-[#FFF8F8] border-[#F0E6E6]"
                  }`}
                >
                  <h3 className={`text-2xl font-semibold mb-6 ${isDark ? "text-white" : "text-black"}`}>
                    Send a Message
                  </h3>
                  <form className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className={`w-full p-3 rounded-lg border transition-all duration-300 ${
                          isDark
                            ? "bg-[#1F1B24] border-[#3D3548] text-white placeholder-gray-400 focus:border-[#A66CFF]"
                            : "bg-[#FFF5F5] border-[#F0E6E6] text-black placeholder-gray-600 focus:border-[#BC8C7A]"
                        }`}
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Your Email"
                        className={`w-full p-3 rounded-lg border transition-all duration-300 ${
                          isDark
                            ? "bg-[#1F1B24] border-[#3D3548] text-white placeholder-gray-400 focus:border-[#A66CFF]"
                            : "bg-[#FFF5F5] border-[#F0E6E6] text-black placeholder-gray-600 focus:border-[#BC8C7A]"
                        }`}
                      />
                    </div>
                    <div>
                      <textarea
                        rows={4}
                        placeholder="Your Message"
                        className={`w-full p-3 rounded-lg border transition-all duration-300 resize-none ${
                          isDark
                            ? "bg-[#1F1B24] border-[#3D3548] text-white placeholder-gray-400 focus:border-[#A66CFF]"
                            : "bg-[#FFF5F5] border-[#F0E6E6] text-black placeholder-gray-600 focus:border-[#BC8C7A]"
                        }`}
                      />
                    </div>
                    <Button
                      type="submit"
                      className={`w-full transition-all duration-300 hover:scale-105 ${
                        isDark
                          ? "bg-[#A66CFF] text-[#1F1B24] hover:bg-[#B18BD8]"
                          : "bg-[#BC8C7A] text-[#FFF5F5] hover:bg-[#DABFAF]"
                      }`}
                    >
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
