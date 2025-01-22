import type { Metadata } from 'next'
import { ThemeProvider } from "@/components/theme-provider"
import Portfolio from "@/components/Portfolio"

export const metadata: Metadata = {
  title: 'Mohamed Nofal- Cybersecurity Professional',
  description: 'Portfolio of Mohamed Nofal, an experienced cybersecurity professional specializing in ethical hacking, penetration testing, and security research.',
}

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <Portfolio />
    </ThemeProvider>
  )
}