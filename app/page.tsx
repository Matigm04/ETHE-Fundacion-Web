import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Heart, GraduationCap, HandCoins, Activity, Brain, ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Diseño moderno con ilustración */}
      <section className="relative min-h-[90vh] bg-gradient-to-br from-[#5bbaa5] via-[#4aa596] to-[#00334e] text-white overflow-hidden flex items-center">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#ffcb05] opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white opacity-5 rounded-full blur-2xl" />
        
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-7xl mx-auto">
            
            {/* Contenido de texto */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4 md:mb-6">
                <div className="w-2 h-2 bg-[#ffcb05] rounded-full animate-pulse" />
                <span className="text-xs md:text-sm font-semibold uppercase tracking-wider">Alta Complejidad</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                Transformando vidas a través de la medicina
                <span className="block text-[#ffcb05] mt-2 text-2xl md:text-3xl lg:text-4xl">
                  Expertos en Medicina de Alta Complejidad
                </span>
              </h1>
              <p className="text-white/90 text-base md:text-lg mb-6 md:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Brindamos atención especializada en trasplantes y cardiopatías congénitas con un equipo de profesionales de renombre internacional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/especialidades">
                  <Button size="lg" className="bg-[#ffcb05] text-[#00334e] hover:bg-[#ffd52e] font-semibold w-full sm:w-auto">
                    Nuestras Especialidades
                  </Button>
                </Link>
                <Link href="/contacto">
                  <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#00334e] w-full sm:w-auto font-semibold shadow-lg transition-all">
                    Contáctanos
                  </Button>
                </Link>
              </div>
            </div>

            {/* Ilustración */}
            <div className="relative order-1 lg:order-2">
              <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
                {/* Decoración de fondo para la imagen */}
                <div className="absolute -inset-4 bg-white/10 rounded-3xl blur-2xl" />
                <div className="relative">
                  <Image 
                    src="/Secciones_iniciales/group-primary-schoolers-lying-ground-smiling.jpg" 
                    alt="Fundación ETHE - Medicina de Alta Complejidad" 
                    width={600} 
                    height={600} 
                    priority
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Specialties Overview - Tarjetas con colores sólidos */}
      <section className="py-12 md:py-24 bg-[#f5f7fa]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-[#5bbaa5] font-semibold mb-1 md:mb-2 uppercase tracking-wider text-xs md:text-sm">Nuestras Áreas</p>
            <h2 className="text-2xl md:text-4xl font-bold text-[#00334e] mb-2 md:mb-4">Especialidades médicas</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
            {/* Trasplante Hepático - Rojo completo */}
            <div className="group bg-[#c74a3a] rounded-2xl p-5 md:p-8 text-white hover:shadow-2xl transition-all hover:scale-105">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 md:mb-6">
                <Image src="/Logos_Especialidades/Logo_Higado.png" alt="Trasplante Hepático" width={32} height={32} className="w-7 h-7 md:w-8 md:h-8" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">Trasplante hepático</h3>
              <p className="text-white/90 text-sm md:text-base leading-relaxed mb-4 md:mb-6">
                Expertos en transplantes hepáticos pediátricos con detección temprana 
                y seguimiento integral post-quirúrgico.
              </p>
              <Link href="/especialidades" className="inline-flex items-center text-white text-sm md:text-base font-semibold border-b-2 border-white/30 hover:border-white transition-all">
                Conocer más <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>

            {/* Trasplante Renal - Beige completo */}
            <div className="group bg-[#cfa46c] rounded-2xl p-5 md:p-8 text-white hover:shadow-2xl transition-all hover:scale-105">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 md:mb-6">
                <Image src="/Logos_Especialidades/Logo_Renal.png" alt="Trasplante Renal" width={32} height={32} className="w-7 h-7 md:w-8 md:h-8" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">Trasplante renal</h3>
              <p className="text-white/90 text-sm md:text-base leading-relaxed mb-4 md:mb-6">
                Transplantes renales pediátricos realizados a tiempo para evitar diálisis 
                con acompañamiento completo.
              </p>
              <Link href="/especialidades" className="inline-flex items-center text-white text-sm md:text-base font-semibold border-b-2 border-white/30 hover:border-white transition-all">
                Conocer más <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>

            {/* Cardiopatías - Amarillo completo */}
            <div className="group bg-[#ffcb05] rounded-2xl p-5 md:p-8 text-[#00334e] hover:shadow-2xl transition-all hover:scale-105">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#00334e]/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 md:mb-6">
                <Image src="/Logos_Especialidades/Logo_Corazon.png" alt="Cardiopatías Congénitas" width={32} height={32} className="w-7 h-7 md:w-8 md:h-8" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">Cardiopatías congénitas</h3>
              <p className="text-[#00334e]/80 text-sm md:text-base leading-relaxed mb-4 md:mb-6">
                Diagnóstico temprano y tratamiento de defectos cardíacos con 
                profesionales de renombre mundial.
              </p>
              <Link href="/especialidades" className="inline-flex items-center text-[#00334e] text-sm md:text-base font-semibold border-b-2 border-[#00334e]/30 hover:border-[#00334e] transition-all">
                Conocer más <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section - Azul oscuro con separador */}
      <section className="py-12 md:py-24 bg-[#00334e] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-white/10 rounded-full mb-4 md:mb-6">
              <span className="text-xs md:text-sm font-semibold uppercase tracking-wider">Nuestra Misión</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
              Compromiso con la excelencia médica
            </h2>
            <p className="text-sm md:text-lg leading-relaxed text-white/90 px-4">
              Promover el desarrollo de la medicina de alta complejidad en el Caribe y Centro América 
              a través de recursos públicos y privados destinados a la formación y capacitación 
              de profesionales de todas las especialidades involucradas en este proceso.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Tarjetas con colores sólidos */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-[#5bbaa5] font-semibold mb-1 md:mb-2 uppercase tracking-wider text-xs md:text-sm">Nuestro Valor</p>
            <h2 className="text-2xl md:text-4xl font-bold text-[#00334e] mb-2 md:mb-4">¿Por qué elegir ETHE?</h2>
            <p className="text-sm md:text-lg text-[#333333]">Excelencia médica con compromiso social</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
            <div className="bg-gradient-to-br from-[#c74a3a] to-[#00334e] rounded-2xl p-5 md:p-8 text-white">
              <CheckCircle size={32} className="mb-3 md:mb-4" />
              <h3 className="font-bold text-lg md:text-xl mb-1 md:mb-2">Equipo especializado</h3>
              <p className="text-white/90 text-xs md:text-sm">Profesionales reconocidos internacionalmente</p>
            </div>

            <div className="bg-gradient-to-br from-[#5bbaa5] to-[#00334e] rounded-2xl p-5 md:p-8 text-white">
              <CheckCircle size={32} className="mb-3 md:mb-4" />
              <h3 className="font-bold text-lg md:text-xl mb-1 md:mb-2">Atención integral</h3>
              <p className="text-white/90 text-xs md:text-sm">Acompañamiento integral en cada etapa</p>
            </div>

            <div className="bg-gradient-to-br from-[#cfa46c] to-[#00334e] rounded-2xl p-5 md:p-8 text-white">
              <CheckCircle size={32} className="mb-3 md:mb-4" />
              <h3 className="font-bold text-lg md:text-xl mb-1 md:mb-2">Formación continua</h3>
              <p className="text-white/90 text-xs md:text-sm">Capacitación profesional permanente</p>
            </div>

            <div className="bg-gradient-to-br from-[#ffcb05] to-[#cfa46c] rounded-2xl p-5 md:p-8 text-[#00334e]">
              <CheckCircle size={32} className="mb-3 md:mb-4" />
              <h3 className="font-bold text-lg md:text-xl mb-1 md:mb-2">Apoyo social</h3>
              <p className="text-[#00334e]/80 text-xs md:text-sm">Asistencia económica disponible</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
