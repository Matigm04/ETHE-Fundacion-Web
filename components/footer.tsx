import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0a4d5c] text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="mb-4">
              <Image 
                src="/Fundacion_ETHE_Logo_sinFondo.png" 
                alt="Fundación ETHE" 
                width={180} 
                height={60} 
                className="object-contain brightness-0 invert"
              />
            </div>
            <p className="text-base text-white/80 leading-relaxed">
              Comprometidos con el bienestar y desarrollo de nuestra comunidad a través de servicios profesionales y
              especializados.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#5dbfb3]">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/quienes-somos" className="text-base text-white/80 hover:text-[#5dbfb3] transition-colors">
                  Quiénes somos
                </Link>
              </li>
              <li>
                <Link href="/especialidades" className="text-base text-white/80 hover:text-[#5dbfb3] transition-colors">
                  Especialidades
                </Link>
              </li>
              <li>
                <Link href="/documentos" className="text-base text-white/80 hover:text-[#5dbfb3] transition-colors">
                  Documentos
                </Link>
              </li>
              <li>
                <Link href="/testimonios" className="text-base text-white/80 hover:text-[#5dbfb3] transition-colors">
                  Testimonios
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#5dbfb3]">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-base text-white/80">
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <span>+54 11 1234-5678</span>
              </li>
              <li className="flex items-start gap-2 text-base text-white/80">
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <span>info@fundacionethe.org</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#5dbfb3]">Síguenos</h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/ETHE.Foundation/?_rdc=1&_rdr#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#5dbfb3] rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://x.com/FundacionETHE"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#5dbfb3] rounded-lg flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#5dbfb3] rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#5dbfb3] rounded-lg flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright - Left */}
            <div className="text-base text-white/60">
              <p>&copy; 2018 / Fundación ETHE / Todos los derechos reservados.</p>
            </div>
            
            {/* Developer Seal - Right */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-white/50">Diseño y desarrollo</span>
              <div className="inline-block px-3 py-1.5 bg-white/5 rounded-md hover:bg-white/10 transition-colors">
                <span className="font-bold text-white/70 tracking-tight" style={{ fontFamily: 'Montserrat, Poppins, sans-serif' }}>
                  &lt;MG /&gt;
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
