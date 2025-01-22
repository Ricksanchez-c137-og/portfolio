"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Image from "next/image"
import { FaLinkedin, FaGithub, FaTwitter, FaMedium } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="relative w-32 h-32 rounded-full overflow-hidden">
              <Image 
                src="/assets/MohamedNofal.png" 
                alt="M.N" 
                width={128} 
                height={128} 
                objectFit="cover"
              />
            </div>
            <div className="flex-1">
              <CardTitle className="text-3xl font-bold text-center sm:text-left">Mohamed Nofal</CardTitle>
              <p className="text-muted-foreground text-center sm:text-left mb-2">Cybersecurity Professional | Ethical Hacker | Security Researcher | DevOps
              </p>
              <SocialLinks />
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-8">
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
            </TabsList>
            <TabsContent value="about">
              <AboutMe />
              <Separator className="my-4" />
              <Certifications />
            </TabsContent>
            <TabsContent value="experience">
              <Experience />
            </TabsContent>
            <TabsContent value="projects">
              <Projects />
            </TabsContent>
            <TabsContent value="skills">
              <Skills />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

function SocialLinks() {
  return (
    <div className="flex justify-center sm:justify-start space-x-4 mt-2">
      <SocialLink href="https://www.linkedin.com/in/vaxene/" icon={<FaLinkedin size={24} />} label="LinkedIn" />
      <SocialLink href="https://github.com/Ricksanchez-c137-og" icon={<FaGithub size={24} />} label="GitHub" />
      <SocialLink href="https://x.com/vaxene1" icon={<FaTwitter size={24} />} label="Twitter" />
      <SocialLink href="https://medium.com/@vaxene" icon={<FaMedium size={24} />} label="Medium" />
      <SocialLink href="mailto:mohamed.nofal@vax-labs.com" icon={<MdEmail size={24} />} label="Email" />
    </div>
  )
}

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <a href={href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            {icon}
          </a>
        </TooltipTrigger>
        <TooltipContent>
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
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
        cybersecurity landscape. I am committed to sharing knowledge and contributing to the security community through
        speaking engagements, writing articles, and participating in CTF competitions.
      </p>
    </section>
  )
}

function Certifications() {
  const certs = [
    "OSCP (Offensive Security Certified Professional)",
    "KLCP (Kali Linux Certified Professional)",
    "OSWE (Offensive Security Web Expert)",
    "OSED (Offensive Security Exploitation Expert)",
    "Network+",
    "Security+",
    
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

function Experience() {
  const experiences = [
    {
      title: "IT Administrator & Cybersecurity Consultant",
      company: "Salman & Co Petroleum Services",
      period: "2019 - 2022",
      responsibilities: [
        "Managed and secured the company's IT infrastructure, including servers, workstations, and network devices.",
        "Developed and implemented security protocols to protect company data and systems against cyber threats.",
        "Monitored and maintained network performance to ensure uptime and efficiency.",
        "Provided cybersecurity training and best practices guidance to employees and management.",
        "Assessed and mitigated vulnerabilities through regular audits and penetration tests.",
      ],
    },
    {
      title: "Student",
      company: "Abu Dhabi University",
      period: "2021 - present",
      responsibilities: [
        "Studied cybersecurity fundamentals and advanced topics, including network security, incident response, and ethical hacking.",
        "Participated in Capture The Flag (CTF) competitions, showcasing problem-solving and technical skills.",
        "Engaged in security research projects focused on threat analysis and mitigation strategies.",
        "Collaborated with peers to develop practical solutions for simulated security challenges.",
      ],
    },
  ];

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Professional Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{exp.title}</CardTitle>
              <p className="text-sm text-muted-foreground">
                {exp.company} | {exp.period}
              </p>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground">
                    {resp}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      title: "Advanced Persistent Threat (APT) Simulation",
      description: "Designed and executed a comprehensive APT simulation lab to evaluate and enhance defensive measures for enterprise-level networks.",
      tags: ["Red Team", "APT", "Threat Simulation"],
    },
    {
      title: "Custom Vulnerability Scanner",
      description: "Developed a tailored vulnerability scanner for my ethical hacking lab to identify and remediate security flaws in web applications and network services.",
      tags: ["Networking", "Vulnerability Assessment", "Python"],
    },
    {
      title: "CTF Challenge Development",
      description: "Created intricate Capture The Flag (CTF) challenges for global cybersecurity competitions, focusing on real-world exploitation scenarios.",
      tags: ["CTF", "Challenge Design", "Web Security"],
    },
    {
      title: "Security Awareness Training Platform",
      description: "Built an engaging, gamified security awareness training platform that significantly reduced phishing and social engineering risks for corporate teams.",
      tags: ["Security Awareness", "E-learning", "Gamification"],
    },
    {
      title: "DevOps Automation Lab",
      description: "Set up a lab environment to automate deployment pipelines and monitor CI/CD workflows, focusing on containerized applications using Kubernetes and Docker.",
      tags: ["DevOps", "Kubernetes", "CI/CD"],
    },
    {
      title: "Full SOC (Security Operations Center) Lab",
      description: "Designed and implemented a SOC lab with tools like Splunk, WAZUH, and Suricata for real-time monitoring and incident response training.",
      tags: ["SOC", "SIEM", "Incident Response"],
    },
    {
      title: "Web Exploitation Lab",
      description: "Created an environment to practice and exploit web vulnerabilities, including XSS, SQLi, and SSTI, to train professionals in secure coding practices.",
      tags: ["Web Security", "Exploitation", "OWASP"],
    },
    {
      title: "Malware Analysis Lab",
      description: "Built a sandbox environment for dynamic and static malware analysis, enabling the study of advanced obfuscation and payload techniques.",
      tags: ["Malware Analysis", "Sandboxing", "Reverse Engineering"],
    },
    {
      title: "Network Penetration Testing Toolkit",
      description: "Developed a toolkit with automated scripts for network scanning, vulnerability exploitation, and privilege escalation in diverse network environments.",
      tags: ["Penetration Testing", "Network Security", "Automation"],
    },
    {
      title: "Corporate Email Security Enhancements",
      description: "Implemented robust email security measures, including SPF, DKIM, and DMARC, to prevent phishing and email spoofing for a small enterprise.",
      tags: ["Email Security", "Phishing Prevention", "System Administration"],
    },
  ];

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Notable Projects</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-lg">{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <Badge key={idx} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}


function Skills() {
  type SkillCategory = "Technical" | "Tools" | "Languages" | "Soft Skills";
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>("Technical");
  
  const skillCategories: Record<SkillCategory, { name: string; level: number }[]> = {
    "Technical": [
      { name: "Penetration Testing", level: 95 },
      { name: "Vulnerability Assessment", level: 90 },
      { name: "Exploit Development", level: 85 },
      { name: "Reverse Engineering", level: 80 },
      { name: "Network Security", level: 90 },
      { name: "Web Application Security", level: 95 },
      { name: "Cloud Security", level: 85 },
      { name: "Incident Response", level: 88 },
      { name: "Threat Hunting", level: 87 },
      { name: "Social Engineering", level: 80 },
      { name: "SIEM (Security Information and Event Management)", level: 85 },
      { name: "Forensics", level: 75 },
      { name: "Red Teaming", level: 90 },
      { name: "Blue Teaming", level: 85 },
      { name: "Zero Trust Architecture", level: 80 },
      { name: "Docker", level: 88 },
      { name: "Kubernetes", level: 85 },
      { name: "CI/CD Pipelines", level: 80 },
      { name: "Terraform", level: 80 },
      { name: "Infrastructure as Code (IaC)", level: 85 },
      { name: "Linux System Administration", level: 90 },
      { name: "Windows System Administration", level: 80 },
      { name: "Ansible", level: 85 },
      { name: "AWS (Amazon Web Services)", level: 90 },
      { name: "Azure", level: 80 },
      { name: "Google Cloud Platform (GCP)", level: 75 },
      { name: "Network Monitoring Tools (Wireshark, tcpdump)", level: 90 },
      { name: "Firewalls & IDS/IPS (Snort, Suricata)", level: 85 },
      { name: "DevSecOps", level: 80 },
      { name: "Automation Scripting (Bash, PowerShell, Python)", level: 85 },
      { name: "Container Security", level: 85 },
      { name: "Git", level: 90 },
      { name: "Jenkins", level: 80 },
      { name: "Prometheus & Grafana", level: 75 },
      { name: "Security Auditing & Compliance (NIST, GDPR, HIPAA)", level: 80 },
      { name: "Identity and Access Management (IAM)", level: 85 },
      { name: "Security Orchestration, Automation, and Response (SOAR)", level: 80 },
      { name: "Incident Management", level: 85 },
    ],
    "Tools": [
      { name: "Metasploit", level: 95 },
      { name: "Burp Suite", level: 90 },
      { name: "Wireshark", level: 85 },
      { name: "Nmap", level: 95 },
      { name: "IDA Pro", level: 80 },
      { name: "OWASP ZAP", level: 90 },
      {name: "SQLMap", level: 85},
      {name: "Docker", level: 90},
      {name: "Kali Linux", level: 95},
      {name: "Windows", level: 90},
      {name: "Linux", level: 95},
      {name: "MacOS", level: 90},
      {name: "VMware", level: 85},
      {name: "VirtualBox", level: 90},
      {name: "Git", level: 95},
      {name: "Jira", level: 90},
      {name: "Confluence", level: 85},
    ],
    "Languages": [
      { name: "Python", level: 90 },
      { name: "Bash", level: 85 },
      { name: "PowerShell", level: 80 },
      { name: "C/C++", level: 75 },
      { name: "JavaScript", level: 70 },
      { name: "SQL", level: 85 },
    ],
    "Soft Skills": [
      { name: "Problem Solving", level: 95 },
      { name: "Communication", level: 90 },
      { name: "Team Leadership", level: 85 },
      { name: "Project Management", level: 80 },
      { name: "Technical Writing", level: 85 },
      { name: "Public Speaking", level: 80 },
    ],
  }

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-2 mb-4">
        {Object.keys(skillCategories).map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category as SkillCategory)}
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="space-y-4">
        {skillCategories[selectedCategory].map((skill, index) => (
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