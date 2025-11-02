import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Activity, Brain, ArrowRight, CheckCircle } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Diseño diagonal con overlay */}
      <section className="relative bg-[#00334e] text-white py-20 md:py-32 overflow-hidden">
        {/* Diagonal background layers */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00334e] via-[#00334e] to-[#5bbaa5]" />
          <div 
            className="absolute top-0 right-0 w-2/3 h-full bg-[#5bbaa5] origin-top-left"
            style={{ 
              clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0 100%)',
              opacity: 0.9
            }}
          />
          <div 
            className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[#ffcb05]"
            style={{ 
              clipPath: 'polygon(50% 0, 100% 0, 100% 100%)',
              opacity: 0.15
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c74a3a] rounded-full mb-6">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="text-sm font-semibold uppercase tracking-wider">Alta Complejidad</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transformando vidas a través de la
              <span className="text-[#ffcb05]"> medicina especializada</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed">
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
                className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/30"
              >
                <Link href="/especialidades">Ver especialidades</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Overview - Diseño asimétrico moderno */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#5bbaa5]/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ffcb05]/5 rounded-full translate-x-1/2 translate-y-1/2" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-12 bg-[#c74a3a]" />
              <div>
                <p className="text-[#5bbaa5] font-semibold uppercase tracking-wider text-sm">Nuestras Áreas</p>
                <h2 className="text-3xl md:text-4xl font-bold text-[#00334e]">Especialidades médicas</h2>
              </div>
            </div>
            <p className="text-lg text-[#333333] leading-relaxed">
              Tres pilares de excelencia en medicina de alta complejidad
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Trasplante Hepático - Rojo */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#c74a3a] to-[#00334e] rounded-3xl transform group-hover:scale-105 transition-transform duration-300" />
              <div className="relative bg-white rounded-3xl p-8 m-1 group-hover:m-0 transition-all duration-300">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#c74a3a]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="w-14 h-14 bg-gradient-to-br from-[#c74a3a] to-[#00334e] rounded-2xl flex items-center justify-center mb-6 relative z-10">
                <Activity className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-[#00334e] mb-3">Trasplante hepático</h3>
              <p className="text-[#333333] leading-relaxed mb-6">
                Expertos en transplantes hepáticos pediátricos con detección temprana 
                y seguimiento integral post-quirúrgico.
              </p>
                <Link href="/especialidades" className="inline-flex items-center text-[#c74a3a] font-semibold group-hover:gap-3 transition-all">
                  Conocer más <ArrowRight className="ml-2" size={18} />
                </Link>
              </div>
            </div>

            {/* Trasplante Renal - Beige */}
            <div className="group relative lg:mt-8">
              <div className="absolute inset-0 bg-gradient-to-br from-[#cfa46c] to-[#00334e] rounded-3xl transform group-hover:scale-105 transition-transform duration-300" />
              <div className="relative bg-white rounded-3xl p-8 m-1 group-hover:m-0 transition-all duration-300">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#cfa46c]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="w-14 h-14 bg-gradient-to-br from-[#cfa46c] to-[#00334e] rounded-2xl flex items-center justify-center mb-6 relative z-10">
                <Brain className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-[#00334e] mb-3">Trasplante renal</h3>
              <p className="text-[#333333] leading-relaxed mb-6">
                Transplantes renales pediátricos realizados a tiempo para evitar diálisis 
                con acompañamiento completo.
              </p>
                <Link href="/especialidades" className="inline-flex items-center text-[#cfa46c] font-semibold group-hover:gap-3 transition-all">
                  Conocer más <ArrowRight className="ml-2" size={18} />
                </Link>
              </div>
            </div>

            {/* Cardiopatías - Amarillo */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#ffcb05] to-[#cfa46c] rounded-3xl transform group-hover:scale-105 transition-transform duration-300" />
              <div className="relative bg-white rounded-3xl p-8 m-1 group-hover:m-0 transition-all duration-300">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#ffcb05]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="w-14 h-14 bg-gradient-to-br from-[#ffcb05] to-[#cfa46c] rounded-2xl flex items-center justify-center mb-6 relative z-10">
                <Heart className="text-[#00334e]" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-[#00334e] mb-3">Cardiopatías congénitas</h3>
              <p className="text-[#333333] leading-relaxed mb-6">
                Diagnóstico temprano y tratamiento de defectos cardíacos con 
                profesionales de renombre mundial.
              </p>
                <Link href="/especialidades" className="inline-flex items-center text-[#ffcb05] font-semibold group-hover:gap-3 transition-all">
                  Conocer más <ArrowRight className="ml-2" size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section - Diagonal split inverso */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#5bbaa5] to-[#00334e]" />
        <div 
          className="absolute top-0 left-0 w-1/2 h-full bg-white"
          style={{ 
            clipPath: 'polygon(0 0, 100% 0, 60% 100%, 0 100%)'
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-[#00334e] text-white rounded-full mb-4">
                <span className="text-sm font-semibold">Nuestra Misión</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#00334e]">
                Compromiso con la excelencia médica
              </h2>
              <p className="text-lg leading-relaxed text-[#333333] mb-8">
                Promover el desarrollo de la medicina de alta complejidad en el Caribe y Centro América 
                a través de recursos públicos y privados destinados a la formación y capacitación 
                de profesionales especializados.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-l-4 border-[#5bbaa5] hover:scale-105 transition-transform">
                <CheckCircle className="text-[#5bbaa5] mb-3" size={32} />
                <h3 className="font-bold text-[#00334e] mb-2">Profesionales especializados</h3>
                <p className="text-[#333333] text-sm">Equipo multidisciplinario reconocido internacionalmente</p>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-l-4 border-[#cfa46c] hover:scale-105 transition-transform">
                <CheckCircle className="text-[#cfa46c] mb-3" size={32} />
                <h3 className="font-bold text-[#00334e] mb-2">Atención integral</h3>
                <p className="text-[#333333] text-sm">Acompañamiento completo durante el tratamiento</p>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-l-4 border-[#c74a3a] hover:scale-105 transition-transform">
                <CheckCircle className="text-[#c74a3a] mb-3" size={32} />
                <h3 className="font-bold text-[#00334e] mb-2">Formación continua</h3>
                <p className="text-[#333333] text-sm">Capacitación profesional de excelencia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Cards flotantes con sombras */}
      <section className="py-16 md:py-24 bg-[#f5f7fa]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#5bbaa5] font-semibold mb-2 uppercase tracking-wider text-sm">Nuestro Valor</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#00334e] mb-4">¿Por qué elegir ETHE?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-t-4 border-[#c74a3a]">
              <div className="w-12 h-12 bg-gradient-to-br from-[#c74a3a] to-[#00334e] rounded-xl flex items-center justify-center mb-4">
                <CheckCircle className="text-white" size={24} />
              </div>
              <h3 className="font-bold text-[#00334e] mb-2 text-lg">Equipo especializado</h3>
              <p className="text-[#333333] text-sm leading-relaxed">
                Profesionales reconocidos internacionalmente
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-t-4 border-[#5bbaa5]">
              <div className="w-12 h-12 bg-gradient-to-br from-[#5bbaa5] to-[#00334e] rounded-xl flex items-center justify-center mb-4">
                <CheckCircle className="text-white" size={24} />
              </div>
              <h3 className="font-bold text-[#00334e] mb-2 text-lg">Atención 360°</h3>
              <p className="text-[#333333] text-sm leading-relaxed">
                Acompañamiento integral en cada etapa
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-t-4 border-[#cfa46c]">
              <div className="w-12 h-12 bg-gradient-to-br from-[#cfa46c] to-[#00334e] rounded-xl flex items-center justify-center mb-4">
                <CheckCircle className="text-white" size={24} />
              </div>
              <h3 className="font-bold text-[#00334e] mb-2 text-lg">Formación continua</h3>
              <p className="text-[#333333] text-sm leading-relaxed">
                Capacitación profesional permanente
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-t-4 border-[#ffcb05]">
              <div className="w-12 h-12 bg-gradient-to-br from-[#ffcb05] to-[#cfa46c] rounded-xl flex items-center justify-center mb-4">
                <CheckCircle className="text-[#00334e]" size={24} />
              </div>
              <h3 className="font-bold text-[#00334e] mb-2 text-lg">Apoyo social</h3>
              <p className="text-[#333333] text-sm leading-relaxed">
                Asistencia económica disponible
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Overlay dramático con imagen */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
            src="/diverse-community-people-helping-each-other.jpg"
            alt="Equipo ETHE"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#c74a3a] via-[#c74a3a]/95 to-[#00334e]/90" />
        </div>

        {/* Diagonal decorative element */}
        <div 
          className="absolute top-0 right-0 w-1/3 h-full bg-[#ffcb05]"
          style={{ 
            clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 60% 100%)',
            opacity: 0.15
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <div className="w-2 h-2 bg-[#ffcb05] rounded-full animate-pulse" />
              <span className="text-white text-sm font-semibold">Estamos para ayudarte</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              ¿Necesitas atención médica especializada?
            </h2>
            
            <p className="text-xl text-white/95 mb-8 leading-relaxed">
              Contáctanos hoy y descubre cómo nuestros especialistas pueden ayudarte. 
              Brindamos atención personalizada y acompañamiento en cada paso del proceso.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-[#c74a3a] hover:bg-gray-100 shadow-2xl text-base px-8">
                <Link href="/contacto">
                  Solicitar consulta
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm"
              >
                <Link href="/especialidades">Conocer especialidades</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
