import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Activity, Brain, ArrowRight, CheckCircle } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0a4d5c] to-[#5dbfb3] text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Medicina de Alta Complejidad en el Caribe y Centro América
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed">
              Fundación ETHE se especializa en trasplantes hepáticos, renales y cardiopatías congénitas, 
              promoviendo el desarrollo de la medicina de alta complejidad a través de la formación profesional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-[#0a4d5c] hover:bg-white/90">
                <Link href="/contacto">
                  Contáctanos
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 bg-transparent"
              >
                <Link href="/quienes-somos">Conoce Más</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a4d5c] mb-4">Nuestras Especialidades</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Medicina de alta complejidad especializada en trasplantes y cardiopatías congénitas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-[#5dbfb3] hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#5dbfb3] to-[#0a4d5c] rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Activity className="text-white" size={32} />
                </div>
                <CardTitle className="text-[#0a4d5c] text-xl">Trasplante Hepático</CardTitle>
                <CardDescription className="leading-relaxed">
                  Expertos en transplantes hepáticos pediátricos con enfoque en la detección temprana 
                  de afecciones hepáticas para garantizar el éxito del tratamiento.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-[#5dbfb3] hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#5dbfb3] to-[#0a4d5c] rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Brain className="text-white" size={32} />
                </div>
                <CardTitle className="text-[#0a4d5c] text-xl">Trasplante Renal</CardTitle>
                <CardDescription className="leading-relaxed">
                  Transplantes renales pediátricos realizados a tiempo para evitar la diálisis, 
                  con acompañamiento integral durante todo el proceso.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-[#5dbfb3] hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#5dbfb3] to-[#0a4d5c] rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Heart className="text-white" size={32} />
                </div>
                <CardTitle className="text-[#0a4d5c] text-xl">Cardiopatías Congénitas</CardTitle>
                <CardDescription className="leading-relaxed">
                  Diagnóstico temprano y tratamiento de defectos cardíacos congénitos con 
                  profesionales reconocidos mundialmente.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-[#0a4d5c] hover:bg-[#0a4d5c]/90">
              <Link href="/especialidades">
                Ver Todas las Especialidades
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#0a4d5c] to-[#5dbfb3] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Misión</h2>
            <p className="text-lg md:text-xl leading-relaxed">
              Promover el desarrollo de la medicina de alta complejidad en el Caribe y Centro América a través de la 
              obtención de recursos públicos y privados, los cuales son destinados a la formación y capacitación de 
              profesionales de todas las especialidades involucradas en este proceso.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a4d5c] mb-6">¿Por Qué Elegirnos?</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                En Fundación ETHE, nos especializamos en medicina de alta complejidad con un enfoque 
                integral en el desarrollo profesional y la atención de calidad.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#5dbfb3] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-[#0a4d5c] mb-1">Profesionales Especializados</h3>
                    <p className="text-gray-600">Equipo multidisciplinario reconocido mundialmente en medicina de alta complejidad</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#5dbfb3] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-[#0a4d5c] mb-1">Atención Integral</h3>
                    <p className="text-gray-600">Acompañamiento completo durante todo el proceso de tratamiento</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#5dbfb3] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-[#0a4d5c] mb-1">Formación Profesional</h3>
                    <p className="text-gray-600">Capacitación de profesionales en todas las especialidades involucradas</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#5dbfb3] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-[#0a4d5c] mb-1">Apoyo Económico</h3>
                    <p className="text-gray-600">Asistencia a pacientes con dificultades económicas</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/diverse-community-people-helping-each-other.jpg"
                alt="Profesionales médicos trabajando juntos"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-[#0a4d5c] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Necesitas Ayuda Especializada?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Nuestros especialistas en medicina de alta complejidad están aquí para ayudarte. 
            Contáctanos para obtener información sobre nuestros servicios especializados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#5dbfb3] text-white hover:bg-[#5dbfb3]/90">
              <Link href="/contacto">Solicitar Información</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent"
            >
              <Link href="/especialidades">Ver Especialidades</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
