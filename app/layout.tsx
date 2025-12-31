import type React from "react"
import type { Metadata } from "next"
import { GoogleAnalytics } from '@next/third-parties/google'
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
      <head>
        {/* Tipografía Corporativa Fundación ETHE */}
        {/* ITC Goudy Sans Std (1930) se carga localmente desde /fonts */}
        {/* TASA Orbiter para textos generales */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=TASA+Orbiter:wght@400..800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <GoogleAnalytics gaId="G-F0WPST9JJ3" />
      </body>
    </html>
  )
}
