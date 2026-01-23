"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { usePathname } from "next/navigation"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isFundacionOpen, setIsFundacionOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: "/", label: "Inicio" },
    { 
      label: "Acerca de ETHE",
      submenu: [
        { href: "/quienes-somos", label: "Quiénes Somos" },
        { href: "/mision-vision", label: "Misión, Visión y Valores" },
        { href: "/ejes-de-accion", label: "Ejes de Acción" },
      ]
    },
    { href: "/especialidades", label: "Especialidades" },
    { href: "/documentos", label: "Documentos" },
    { href: "/testimonios", label: "Testimonios" },
    { href: "/faq", label: "FAQ" },
    { href: "/contacto", label: "Contacto" },
  ]

  return (
    <nav className="bg-[#f9f4ec] text-[#0a4d5c] sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-16 w-auto">
              <Image
                src="/Fundacion_ETHE_Logo_sinFondo.png"
                alt="Fundación ETHE"
                width={200}
                height={64}
                className="object-contain h-full w-auto"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <div key={index} className="relative group">
                {link.submenu ? (
                  <>
                    <button
                      className="flex items-center gap-1 text-sm font-medium hover:text-[#5dbfb3] transition-colors"
                      onMouseEnter={() => setIsFundacionOpen(true)}
                      onMouseLeave={() => setIsFundacionOpen(false)}
                    >
                      {link.label}
                      <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
                    </button>
                    {/* Dropdown Menu */}
                    <div
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2"
                      onMouseEnter={() => setIsFundacionOpen(true)}
                      onMouseLeave={() => setIsFundacionOpen(false)}
                    >
                      <div className="py-2">
                        {link.submenu.map((sublink) => (
                          <Link
                            key={sublink.href}
                            href={sublink.href}
                            className="block px-4 py-3 text-sm text-[#0a4d5c] hover:bg-[#5dbfb3]/10 hover:text-[#5dbfb3] transition-colors font-medium"
                          >
                            {sublink.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href!}
                    className="text-sm font-medium hover:text-[#5dbfb3] transition-colors"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
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
            {navLinks.map((link, index) => (
              <div key={index}>
                {link.submenu ? (
                  <>
                    <button
                      onClick={() => setIsFundacionOpen(!isFundacionOpen)}
                      className="flex items-center justify-between w-full py-2 text-sm font-medium hover:text-[#5dbfb3] transition-colors"
                    >
                      {link.label}
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform ${isFundacionOpen ? 'rotate-180' : ''}`} 
                      />
                    </button>
                    {isFundacionOpen && (
                      <div className="pl-4 mt-2 space-y-2">
                        {link.submenu.map((sublink) => (
                          <Link
                            key={sublink.href}
                            href={sublink.href}
                            onClick={() => {
                              setIsOpen(false)
                              setIsFundacionOpen(false)
                            }}
                            className="block py-2 text-sm font-medium text-[#5dbfb3] hover:text-white transition-colors"
                          >
                            {sublink.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href!}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-sm font-medium hover:text-[#5dbfb3] transition-colors"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
