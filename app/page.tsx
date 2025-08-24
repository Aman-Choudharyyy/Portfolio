"use client"

import { Button } from "@/components/ui/button"
import { Bell, Sun, Moon, Github, Linkedin, Twitter, Mail } from "lucide-react"
import { useState, useEffect } from "react"

export default function Home() {
  const [isDark, setIsDark] = useState(true)

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
    console.log("[v0] Attempting to download resume from /resume.pdf")

    try {
      const link = document.createElement("a")
      link.href = "/resume.pdf"
      link.download = "resume.pdf"
      link.target = "_blank" // Open in new tab if direct download fails

      // Check if file exists before attempting download
      fetch("/resume.pdf", { method: "HEAD" })
        .then((response) => {
          if (response.ok) {
            console.log("[v0] Resume file found, initiating download")
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
          } else {
            console.log("[v0] Resume file not found, status:", response.status)
            // Fallback: try to open in new tab
            window.open("/resume.pdf", "_blank")
          }
        })
        .catch((error) => {
          console.log("[v0] Error checking resume file:", error)
          // Fallback: try direct download anyway
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
        })
    } catch (error) {
      console.log("[v0] Error in downloadResume function:", error)
    }
  }

  return (
    <div
      className={`min-h-screen relative overflow-hidden transition-all duration-500 ${
        isDark ? "bg-[#1F1B24] text-[#EDE6F4]" : "bg-[#FFF5F5] text-[#4B3F40]"
      }`}
    >
      {/* Top navigation */}
      <div className="absolute top-6 left-6">
        <Button
          variant="ghost"
          size="icon"
          className={`transition-all duration-300 hover:scale-110 ${
            isDark
              ? "text-[#A29BB0] hover:text-[#EDE6F4] hover:bg-[#2B2735]"
              : "text-[#9E8C89] hover:text-[#4B3F40] hover:bg-[#FFF8F8]"
          }`}
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" />
        </Button>
      </div>

      <div className="absolute top-6 right-6">
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

      {/* Main content */}
      <div className="flex items-center justify-center min-h-screen px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl w-full">
          {/* Profile image */}
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

          {/* Content */}
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
                isDark ? "text-[#A29BB0]" : "text-[#9E8C89]"
              }`}
            >
              Defensive Security Specialist
            </h2>

            <p
              className={`text-lg leading-relaxed mb-8 max-w-xl transition-colors duration-500 ${
                isDark ? "text-[#A29BB0]" : "text-[#9E8C89]"
              }`}
            >
              Final-year B.Tech Computer Science student passionate about cybersecurity, specializing in defensive
              security strategies, threat detection, and incident response. Building secure digital environments for
              tomorrow.
            </p>

            {/* Buttons */}
            <div className="flex justify-center flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                className={`transition-all duration-300 border-2 px-8 py-3 text-lg hover:scale-105 active:scale-95 min-h-[44px] ${
                  isDark
                    ? "bg-[#A66CFF] text-[#1F1B24] border-[#A66CFF] hover:bg-transparent hover:text-[#A66CFF] hover:shadow-lg hover:shadow-[#A66CFF]/20"
                    : "bg-[#BC8C7A] text-[#FFF5F5] border-[#BC8C7A] hover:bg-transparent hover:text-[#BC8C7A] hover:shadow-lg hover:shadow-[#BC8C7A]/20"
                }`}
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={https://drive.google.com/uc?export=download&id=13dhJrn6dB1iKB1FIFzfw6ejjM7ge5e-y}
                className={`transition-all duration-300 border-2 px-8 py-3 text-lg hover:scale-105 active:scale-95 min-h-[44px] ${
                  isDark
                    ? "border-[#B18BD8] text-[#B18BD8] bg-transparent hover:bg-[#A66CFF] hover:text-[#1F1B24] hover:shadow-lg hover:shadow-[#B18BD8]/20"
                    : "bg-transparent text-[#BC8C7A] shadow-lg shadow-[#BC8C7A]/20 hover:bg-[#BC8C7A] hover:text-[#FFF5F5] border-[#BC8C7A]"
                }`}
              >
                Download Resume
              </Button>
            </div>

            {/* Social links */}
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
      </div>
    </div>
  )
}
