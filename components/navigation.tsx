"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/quienes-somos", label: "Quiénes Somos" },
    { href: "/especialidades", label: "Especialidades" },
    { href: "/documentos", label: "Documentos" },
    { href: "/testimonios", label: "Testimonios" },
    { href: "/faq", label: "FAQ" },
    { href: "/contacto", label: "Contacto" },
  ]

  return (
    <nav className="bg-[#0a4d5c] text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#5dbfb3] rounded-lg flex items-center justify-center font-bold text-2xl text-[#0a4d5c]">
              FE
            </div>
            <span className="text-xl font-bold hidden sm:block">Fundación ETHE</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium hover:text-[#5dbfb3] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-[#0a4d5c]/80 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-sm font-medium hover:text-[#5dbfb3] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
