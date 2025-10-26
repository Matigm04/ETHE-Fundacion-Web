import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, FileText, MessageSquare, ArrowRight, CheckCircle } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0a4d5c] to-[#5dbfb3] text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Comprometidos con el Bienestar de Nuestra Comunidad
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed">
              Fundación ETHE ofrece servicios profesionales y especializados para mejorar la calidad de vida de quienes
              más lo necesitan.
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

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a4d5c] mb-4">Nuestros Servicios</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Ofrecemos una amplia gama de servicios especializados para apoyar a nuestra comunidad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-[#5dbfb3] hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#5dbfb3] rounded-lg flex items-center justify-center mb-4">
                  <Heart className="text-white" size={24} />
                </div>
                <CardTitle className="text-[#0a4d5c]">Atención Médica</CardTitle>
                <CardDescription>Servicios de salud integral y especializada</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-[#5dbfb3] hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#5dbfb3] rounded-lg flex items-center justify-center mb-4">
                  <Users className="text-white" size={24} />
                </div>
                <CardTitle className="text-[#0a4d5c]">Apoyo Social</CardTitle>
                <CardDescription>Programas de asistencia y desarrollo comunitario</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-[#5dbfb3] hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#5dbfb3] rounded-lg flex items-center justify-center mb-4">
                  <FileText className="text-white" size={24} />
                </div>
                <CardTitle className="text-[#0a4d5c]">Asesoría Legal</CardTitle>
                <CardDescription>Orientación jurídica y trámites administrativos</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-[#5dbfb3] hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#5dbfb3] rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="text-white" size={24} />
                </div>
                <CardTitle className="text-[#0a4d5c]">Apoyo Psicológico</CardTitle>
                <CardDescription>Atención emocional y terapia profesional</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center mt-10">
            <Button asChild size="lg" className="bg-[#0a4d5c] hover:bg-[#0a4d5c]/90">
              <Link href="/especialidades">
                Ver Todas las Especialidades
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
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
                En Fundación ETHE, nos dedicamos a brindar servicios de calidad con un enfoque humano y profesional.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#5dbfb3] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-[#0a4d5c] mb-1">Profesionales Calificados</h3>
                    <p className="text-gray-600">Equipo multidisciplinario con amplia experiencia</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#5dbfb3] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-[#0a4d5c] mb-1">Atención Personalizada</h3>
                    <p className="text-gray-600">Cada caso recibe atención individualizada y dedicada</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#5dbfb3] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-[#0a4d5c] mb-1">Compromiso Social</h3>
                    <p className="text-gray-600">Trabajamos por el bienestar de toda la comunidad</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#5dbfb3] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-[#0a4d5c] mb-1">Transparencia</h3>
                    <p className="text-gray-600">Información clara y accesible sobre nuestros servicios</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/diverse-community-people-helping-each-other.jpg"
                alt="Comunidad trabajando junta"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-[#0a4d5c] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Necesitas Ayuda?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Estamos aquí para apoyarte. Contáctanos hoy y descubre cómo podemos ayudarte a ti y a tu familia.
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
              <Link href="/faq">Preguntas Frecuentes</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
