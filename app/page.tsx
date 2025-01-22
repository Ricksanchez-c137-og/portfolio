import type { Metadata } from 'next'
import { ThemeProvider } from "@/components/theme-provider"
import Portfolio from "@/components/Portfolio"

export const metadata: Metadata = {
<<<<<<< HEAD
  title: 'Mohamed Nofal- Cybersecurity Professional',
  description: 'Portfolio of Mohamed Nofal, an experienced cybersecurity professional specializing in ethical hacking, penetration testing, and security research.',
=======
  title: 'Mohamed Nofal Cybersecurity Professional',
  description: 'Portfolio of John Doe, an experienced cybersecurity professional specializing in ethical hacking, penetration testing, and security research.',
>>>>>>> 3e869205c237497c63d9efd04581b269a60a5bcb
}

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <Portfolio />
    </ThemeProvider>
  )
}