"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import { FaLinkedin, FaGithub } from "react-icons/fa" 

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="relative w-32 h-32 rounded-full overflow-hidden">
              <Image 
                src="/assets/MohamedNofal.png?height=128&width=128" 
                alt="M.N" 
                layout="intrinsic"
                width={128} 
                height={128} 
              />
            </div>
            <div>
              <CardTitle className="text-3xl font-bold text-center sm:text-left">John Doe</CardTitle>
              <p className="text-muted-foreground text-center sm:text-left">Cybersecurity Professional</p>
              {/* Links to LinkedIn and GitHub */}
              <div className="flex justify-center sm:justify-start space-x-4 mt-2">
                <a href="https://www.linkedin.com/in/vaxene/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-blue-500">
                  <FaLinkedin size={24} />
                </a>
                <a href="https://github.com/Ricksanchez-c137-og" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gray-800">
                  <FaGithub size={24} />
                </a>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-8">
          <AboutMe />
          <Separator />
          <Certifications />
          <Separator />
          <Projects />
          <Separator />
          <Skills />
        </CardContent>
      </Card>
    </div>
  )
}

function AboutMe() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">About Me</h2>
      <p className="text-muted-foreground">
        I am a passionate cybersecurity professional with over 8 years of experience in ethical hacking, penetration
        testing, and security research. My expertise lies in identifying and exploiting vulnerabilities in complex
        systems, developing robust security strategies, and staying ahead of emerging threats in the ever-evolving
        cybersecurity landscape.
      </p>
    </section>
  )
}

function Certifications() {
  const certs = [
    "KLCP (Kali Linux Certified Professional)",
    "OSWP (Offensive Security Wireless Professional)",
    "OSCP (Offensive Security Certified Professional)",
    "OSED (Offensive Security Exploitation Developer)",
  ]

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
      <div className="flex flex-wrap gap-2">
        {certs.map((cert, index) => (
          <Badge key={index} variant="secondary" className="text-sm">
            {cert}
          </Badge>
        ))}
      </div>
    </section>
  )
}

function Projects() {
  const projects = [
    {
      title: "Advanced Persistent Threat (APT) Simulation",
      description:
        "Developed and executed a comprehensive APT simulation to test and improve the security posture of a Fortune 500 company.",
    },
    {
      title: "Custom Vulnerability Scanner",
      description:
        "Created a specialized vulnerability scanner tailored for IoT devices, identifying critical security flaws in smart home systems.",
    },
    {
      title: "CTF Challenge Development",
      description:
        "Designed and implemented complex Capture The Flag (CTF) challenges for international cybersecurity competitions.",
    },
    {
      title: "Security Awareness Training Platform",
      description:
        "Developed an interactive, gamified security awareness training platform for corporate clients, significantly reducing phishing susceptibility.",
    },
  ]

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-lg">{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{project.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

function Skills() {
  const skills = [
    { name: "Metasploit", level: 95 },
    { name: "Burp Suite", level: 90 },
    { name: "Kali Linux", level: 98 },
    { name: "Wireshark", level: 85 },
    { name: "Python Scripting", level: 80 },
    { name: "Reverse Engineering", level: 90 },
    { name: "Incident Response", level: 85 },
    { name: "Threat Intelligence", level: 80 },
    { name: "Security Auditing", level: 90 },
    {name: "Web Application Security", level: 95},
    {name: "Network Security", level: 90},
  ]

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">{skill.name}</span>
              <span className="text-sm font-medium">{skill.level}%</span>
            </div>
            <Progress value={skill.level} className="h-2" />
          </div>
        ))}
      </div>
    </section>
  )
}
