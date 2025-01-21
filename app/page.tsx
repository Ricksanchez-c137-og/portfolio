import { ThemeProvider } from "@/components/theme-provider"
import Portfolio from "@/components/Portfolio"

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <Portfolio />
    </ThemeProvider>
  )
}

