import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Heart, GraduationCap, HandCoins, Activity, Brain, ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Teal vibrante con decoración amarilla */}
      <section className="relative bg-[#5bbaa5] text-white py-20 md:py-32 overflow-hidden">
        {/* Decorative yellow overlay */}
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-[#ffcb05] opacity-20 rounded-tl-[100px]" />
        <div className="absolute top-10 right-20 w-32 h-32 bg-[#ffcb05] opacity-10 rounded-full" />
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-white opacity-5 rounded-full" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <div className="w-2 h-2 bg-[#ffcb05] rounded-full animate-pulse" />
              <span className="text-sm font-semibold uppercase tracking-wider">Alta Complejidad</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transformando vidas a través de la
              <span className="block text-[#ffcb05] mt-2">medicina especializada</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/95 leading-relaxed max-w-3xl mx-auto">
              Expertos en trasplantes hepáticos, renales y cardiopatías congénitas en el Caribe y Centro América.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#c74a3a] text-white hover:bg-[#b43a2a] shadow-2xl">
                <Link href="/contacto">
                  Solicitar consulta
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-white text-[#5bbaa5] hover:bg-white/90"
              >
                <Link href="/especialidades">Ver especialidades</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Overview - Tarjetas con colores sólidos */}
      <section className="py-16 md:py-24 bg-[#f5f7fa]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#5bbaa5] font-semibold mb-2 uppercase tracking-wider text-sm">Nuestras Áreas</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#00334e] mb-4">Especialidades médicas</h2>
            <p className="text-lg text-[#333333] max-w-2xl mx-auto">
              Tres pilares de excelencia en medicina de alta complejidad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Trasplante Hepático - Rojo completo */}
            <div className="group bg-[#c74a3a] rounded-2xl p-8 text-white hover:shadow-2xl transition-all hover:scale-105">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6">
                <Activity className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Trasplante hepático</h3>
              <p className="text-white/90 leading-relaxed mb-6">
                Expertos en transplantes hepáticos pediátricos con detección temprana 
                y seguimiento integral post-quirúrgico.
              </p>
              <Link href="/especialidades" className="inline-flex items-center text-white font-semibold border-b-2 border-white/30 hover:border-white transition-all">
                Conocer más <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>

            {/* Trasplante Renal - Beige completo */}
            <div className="group bg-[#cfa46c] rounded-2xl p-8 text-white hover:shadow-2xl transition-all hover:scale-105">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6">
                <Brain className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Trasplante renal</h3>
              <p className="text-white/90 leading-relaxed mb-6">
                Transplantes renales pediátricos realizados a tiempo para evitar diálisis 
                con acompañamiento completo.
              </p>
              <Link href="/especialidades" className="inline-flex items-center text-white font-semibold border-b-2 border-white/30 hover:border-white transition-all">
                Conocer más <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>

            {/* Cardiopatías - Amarillo completo */}
            <div className="group bg-[#ffcb05] rounded-2xl p-8 text-[#00334e] hover:shadow-2xl transition-all hover:scale-105">
              <div className="w-16 h-16 bg-[#00334e]/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6">
                <Heart className="text-[#00334e]" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Cardiopatías congénitas</h3>
              <p className="text-[#00334e]/80 leading-relaxed mb-6">
                Diagnóstico temprano y tratamiento de defectos cardíacos con 
                profesionales de renombre mundial.
              </p>
              <Link href="/especialidades" className="inline-flex items-center text-[#00334e] font-semibold border-b-2 border-[#00334e]/30 hover:border-[#00334e] transition-all">
                Conocer más <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section - Azul oscuro con separador */}
      <section className="py-16 md:py-24 bg-[#00334e] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-white/10 rounded-full mb-6">
              <span className="text-sm font-semibold uppercase tracking-wider">Nuestra Misión</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Compromiso con la excelencia médica
            </h2>
            <p className="text-lg leading-relaxed text-white/90">
              Promover el desarrollo de la medicina de alta complejidad en el Caribe y Centro América 
              a través de recursos públicos y privados destinados a la formación y capacitación 
              de profesionales de todas las especialidades involucradas en este proceso.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Tarjetas con colores sólidos */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#5bbaa5] font-semibold mb-2 uppercase tracking-wider text-sm">Nuestro Valor</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#00334e] mb-4">¿Por qué elegir ETHE?</h2>
            <p className="text-lg text-[#333333]">Excelencia médica con compromiso social</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <div className="bg-gradient-to-br from-[#c74a3a] to-[#00334e] rounded-2xl p-8 text-white">
              <CheckCircle size={40} className="mb-4" />
              <h3 className="font-bold text-xl mb-2">Equipo especializado</h3>
              <p className="text-white/90 text-sm">Profesionales reconocidos internacionalmente</p>
            </div>

            <div className="bg-gradient-to-br from-[#5bbaa5] to-[#00334e] rounded-2xl p-8 text-white">
              <CheckCircle size={40} className="mb-4" />
              <h3 className="font-bold text-xl mb-2">Atención integral</h3>
              <p className="text-white/90 text-sm">Acompañamiento integral en cada etapa</p>
            </div>

            <div className="bg-gradient-to-br from-[#cfa46c] to-[#00334e] rounded-2xl p-8 text-white">
              <CheckCircle size={40} className="mb-4" />
              <h3 className="font-bold text-xl mb-2">Formación continua</h3>
              <p className="text-white/90 text-sm">Capacitación profesional permanente</p>
            </div>

            <div className="bg-gradient-to-br from-[#ffcb05] to-[#cfa46c] rounded-2xl p-8 text-[#00334e]">
              <CheckCircle size={40} className="mb-4" />
              <h3 className="font-bold text-xl mb-2">Apoyo social</h3>
              <p className="text-[#00334e]/80 text-sm">Asistencia económica disponible</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
