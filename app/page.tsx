import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Activity, Brain, ArrowRight, CheckCircle } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Diseño de círculos superpuestos y bloques intercalados */}
      <section className="relative bg-gradient-to-br from-[#00334e] via-[#00334e] to-[#003a52] text-white py-20 md:py-32 overflow-hidden">
        {/* Large circular overlays */}
        <div className="absolute inset-0">
          {/* Teal circle - top right */}
          <div 
            className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#5bbaa5]"
            style={{ opacity: 0.15 }}
          />
          {/* Yellow circle - bottom left */}
          <div 
            className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#ffcb05]"
            style={{ opacity: 0.12 }}
          />
          {/* Red circle - center right */}
          <div 
            className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-[#c74a3a]"
            style={{ opacity: 0.08 }}
          />
          {/* Beige circle - top left */}
          <div 
            className="absolute top-0 left-1/4 w-[350px] h-[350px] rounded-full bg-[#cfa46c]"
            style={{ opacity: 0.1 }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Content - offset layout */}
              <div className="lg:col-span-7 lg:col-start-1">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-[1.1]">
                  Transformando
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ffcb05] via-[#ffcb05] to-[#cfa46c] mt-2">
                    vidas a través
                  </span>
                  <span className="block mt-2">de la medicina</span>
                </h1>
                <p className="text-xl md:text-2xl mb-10 text-white/90 leading-relaxed max-w-2xl">
                  Expertos en trasplantes hepáticos, renales y cardiopatías congénitas en el Caribe y Centro América.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-[#c74a3a] text-white hover:bg-[#b43a2a] shadow-2xl text-base px-8 py-6 h-auto">
                    <Link href="/contacto">
                      Solicitar consulta
                      <ArrowRight className="ml-2" size={22} />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    className="bg-transparent text-white hover:bg-white/10 border-2 border-white/50 text-base px-8 py-6 h-auto"
                  >
                    <Link href="/especialidades">Ver especialidades</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Overview - Diseño de tarjetas escalonadas horizontalmente */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Decorative shapes - waves instead of circles */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-[#5bbaa5]/10 via-transparent to-[#ffcb05]/10" 
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 100%)' }} />
        <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-l from-[#c74a3a]/10 via-transparent to-[#cfa46c]/10"
          style={{ clipPath: 'polygon(0 50%, 100% 100%, 100% 100%, 0 100%)' }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#5bbaa5]/10 rounded-full mb-4">
              <span className="text-[#5bbaa5] font-bold uppercase tracking-wider text-sm">Nuestras Áreas</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#00334e] mb-4">
              Especialidades médicas
            </h2>
            <p className="text-xl text-[#333333]/80 leading-relaxed">
              Tres pilares de excelencia en medicina de alta complejidad
            </p>
          </div>

          {/* Staggered horizontal cards */}
          <div className="space-y-8">
            {/* Trasplante Hepático - Left aligned */}
            <div className="flex justify-start">
              <div className="w-full lg:w-2/3 group">
                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-l-8 border-[#c74a3a]">
                  <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#c74a3a] to-[#c74a3a]/70 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Activity className="text-white" size={36} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-[#00334e] mb-3">Trasplante hepático</h3>
                      <p className="text-[#333333] leading-relaxed mb-4">
                        Expertos en transplantes hepáticos pediátricos con detección temprana 
                        y seguimiento integral post-quirúrgico.
                      </p>
                      <Link href="/especialidades" className="inline-flex items-center text-[#c74a3a] font-bold hover:gap-3 transition-all">
                        Conocer más <ArrowRight className="ml-2" size={20} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trasplante Renal - Right aligned */}
            <div className="flex justify-end">
              <div className="w-full lg:w-2/3 group">
                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-r-8 border-[#cfa46c]">
                  <div className="flex flex-col md:flex-row-reverse gap-6 items-start md:items-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#cfa46c] to-[#cfa46c]/70 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Brain className="text-white" size={36} />
                    </div>
                    <div className="flex-1 md:text-right">
                      <h3 className="text-3xl font-bold text-[#00334e] mb-3">Trasplante renal</h3>
                      <p className="text-[#333333] leading-relaxed mb-4">
                        Transplantes renales pediátricos realizados a tiempo para evitar diálisis 
                        con acompañamiento completo.
                      </p>
                      <Link href="/especialidades" className="inline-flex items-center text-[#cfa46c] font-bold hover:gap-3 transition-all md:flex-row-reverse">
                        <ArrowRight className="ml-2 md:mr-2 md:ml-0" size={20} /> Conocer más
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cardiopatías - Center/Left aligned */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-full lg:w-2/3 group">
                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-l-8 border-[#ffcb05]">
                  <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#ffcb05] to-[#cfa46c] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Heart className="text-[#00334e]" size={36} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-[#00334e] mb-3">Cardiopatías congénitas</h3>
                      <p className="text-[#333333] leading-relaxed mb-4">
                        Diagnóstico temprano y tratamiento de defectos cardíacos con 
                        profesionales de renombre mundial.
                      </p>
                      <Link href="/especialidades" className="inline-flex items-center text-[#ffcb05] font-bold hover:gap-3 transition-all">
                        Conocer más <ArrowRight className="ml-2" size={20} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section - Bloques coloridos intercalados */}
      <section className="relative py-16 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left side - Content with yellow background */}
              <div className="bg-[#ffcb05] p-12 md:p-16 flex items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00334e] text-white rounded-full mb-6">
                    <span className="text-sm font-bold uppercase tracking-wider">Nuestra Misión</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#00334e] leading-tight">
                    Compromiso con la excelencia médica
                  </h2>
                  <p className="text-lg leading-relaxed text-[#00334e]/90 mb-6">
                    Promover el desarrollo de la medicina de alta complejidad en el Caribe y Centro América 
                    a través de recursos públicos y privados destinados a la formación y capacitación 
                    de profesionales especializados.
                  </p>
                  <Button asChild size="lg" className="bg-[#00334e] text-white hover:bg-[#00334e]/90">
                    <Link href="/quienes-somos">
                      Conocer más sobre nosotros
                      <ArrowRight className="ml-2" size={20} />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Right side - Feature blocks with teal background */}
              <div className="bg-[#5bbaa5] p-12 md:p-16 flex items-center">
                <div className="space-y-6 w-full">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:translate-x-2">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#c74a3a] rounded-xl flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#00334e] text-lg mb-2">Profesionales especializados</h3>
                        <p className="text-[#333333] text-sm">Equipo multidisciplinario reconocido internacionalmente</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:translate-x-2">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#cfa46c] rounded-xl flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#00334e] text-lg mb-2">Atención integral</h3>
                        <p className="text-[#333333] text-sm">Acompañamiento completo durante el tratamiento</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:translate-x-2">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#00334e] rounded-xl flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#00334e] text-lg mb-2">Formación continua</h3>
                        <p className="text-[#333333] text-sm">Capacitación profesional de excelencia</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Grid con colores de fondo alternados */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c74a3a]/10 rounded-full mb-4">
              <span className="text-[#c74a3a] font-bold uppercase tracking-wider text-sm">Nuestro Valor</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#00334e] mb-4">¿Por qué elegir ETHE?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-[#c74a3a] text-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <CheckCircle className="text-white" size={32} />
              </div>
              <h3 className="font-bold text-white mb-3 text-2xl">Equipo especializado</h3>
              <p className="text-white/90 leading-relaxed">
                Profesionales reconocidos internacionalmente en medicina de alta complejidad
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105 border-4 border-[#5bbaa5]">
              <div className="w-16 h-16 bg-gradient-to-br from-[#5bbaa5] to-[#00334e] rounded-2xl flex items-center justify-center mb-6">
                <CheckCircle className="text-white" size={32} />
              </div>
              <h3 className="font-bold text-[#00334e] mb-3 text-2xl">Atención 360°</h3>
              <p className="text-[#333333] leading-relaxed">
                Acompañamiento integral en cada etapa del tratamiento y recuperación
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105 border-4 border-[#cfa46c]">
              <div className="w-16 h-16 bg-gradient-to-br from-[#cfa46c] to-[#00334e] rounded-2xl flex items-center justify-center mb-6">
                <CheckCircle className="text-white" size={32} />
              </div>
              <h3 className="font-bold text-[#00334e] mb-3 text-2xl">Formación continua</h3>
              <p className="text-[#333333] leading-relaxed">
                Capacitación constante de profesionales en las últimas técnicas médicas
              </p>
            </div>

            <div className="bg-[#ffcb05] text-[#00334e] rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105">
              <div className="w-16 h-16 bg-[#00334e]/20 rounded-2xl flex items-center justify-center mb-6">
                <CheckCircle className="text-[#00334e]" size={32} />
              </div>
              <h3 className="font-bold text-[#00334e] mb-3 text-2xl">Resultados probados</h3>
              <p className="text-[#00334e]/90 leading-relaxed">
                Más de 15 años transformando vidas en el Caribe y Centro América
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
