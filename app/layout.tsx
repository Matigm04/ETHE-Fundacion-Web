import type React from "react"
import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import "./globals.css"

export const metadata: Metadata = {
  title: "Fundación ETHE - Comprometidos con la Comunidad",
  description:
    "Fundación dedicada al bienestar y desarrollo de nuestra comunidad a través de servicios profesionales y especializados.",
  generator: 'v0.app',
  icons: {
    icon: '/Logo_sin_fondo_personas.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
