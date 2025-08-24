"use client"

import { Button } from "@/components/ui/button"
import { X, GraduationCap, Shield } from "lucide-react"
import { useState, useEffect } from "react"

export default function AboutPage() {
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
      <div className="flex items-center justify-center min-h-screen px-6 py-12">
        <div className="max-w-6xl w-full">
          {/* Header */}
          <div className="text-center mb-12 animate-in fade-in duration-700">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">About Me</h1>
            <p
              className={`text-xl lg:text-2xl transition-colors duration-500 ${
                isDark ? "text-[#A29BB0]" : "text-[#9E8C89]"
              }`}
            >
              Passionate about cybersecurity and building secure digital environments
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Description */}
            <div className="space-y-6 animate-in slide-in-from-left duration-700">
              <p
                className={`text-lg leading-relaxed transition-colors duration-500 ${
                  isDark ? "text-[#A29BB0]" : "text-[#9E8C89]"
                }`}
              >
                I'm a final-year B.Tech Computer Science student with a deep passion for cybersecurity, particularly in
                defensive security strategies. My journey in tech has been driven by curiosity and a commitment to
                protecting digital assets.
              </p>

              <p
                className={`text-lg leading-relaxed transition-colors duration-500 ${
                  isDark ? "text-[#A29BB0]" : "text-[#9E8C89]"
                }`}
              >
                Specializing in threat detection, incident response, and security automation, I'm constantly learning
                and adapting to the evolving cybersecurity landscape.
              </p>
            </div>

            {/* Right side - Education & Specialization */}
            <div className="space-y-8 animate-in slide-in-from-right duration-700">
              {/* Education Section */}
              <div
                className={`p-6 rounded-2xl transition-all duration-500 ${
                  isDark ? "bg-[#2B2735] border border-[#3D3548]" : "bg-[#FFF8F8] border border-[#F0E6E6]"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-xl transition-colors duration-500 ${
                      isDark ? "bg-[#A66CFF]/20 text-[#B18BD8]" : "bg-[#BC8C7A]/20 text-[#BC8C7A]"
                    }`}
                  >
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">Education</h3>
                    <h4
                      className={`text-lg font-medium mb-2 transition-colors duration-500 ${
                        isDark ? "text-[#B18BD8]" : "text-[#BC8C7A]"
                      }`}
                    >
                      B.Tech Computer Science
                    </h4>
                    <p className={`transition-colors duration-500 ${isDark ? "text-[#A29BB0]" : "text-[#9E8C89]"}`}>
                      Final year student focusing on cybersecurity and defensive security strategies.
                    </p>
                  </div>
                </div>
              </div>

              {/* Specialization Section */}
              <div
                className={`p-6 rounded-2xl transition-all duration-500 ${
                  isDark ? "bg-[#2B2735] border border-[#3D3548]" : "bg-[#FFF8F8] border border-[#F0E6E6]"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-xl transition-colors duration-500 ${
                      isDark ? "bg-[#A66CFF]/20 text-[#B18BD8]" : "bg-[#BC8C7A]/20 text-[#BC8C7A]"
                    }`}
                  >
                    <Shield className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">Specialization</h3>
                    <h4
                      className={`text-lg font-medium mb-2 transition-colors duration-500 ${
                        isDark ? "text-[#B18BD8]" : "text-[#BC8C7A]"
                      }`}
                    >
                      Defensive Security
                    </h4>
                    <p className={`transition-colors duration-500 ${isDark ? "text-[#A29BB0]" : "text-[#9E8C89]"}`}>
                      Focused on threat detection, incident response, and security automation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
