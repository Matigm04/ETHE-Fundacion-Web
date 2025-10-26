import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star } from "lucide-react"

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "María González",
      role: "Madre de familia",
      content:
        "La Fundación ETHE cambió nuestras vidas. Cuando más lo necesitábamos, nos brindaron atención médica de calidad y apoyo emocional. El equipo es increíblemente profesional y humano. Estoy eternamente agradecida.",
      rating: 5,
    },
    {
      name: "Carlos Rodríguez",
      role: "Beneficiario de asesoría legal",
      content:
        "Gracias al apoyo legal que recibí, pude resolver un problema familiar que me tenía muy preocupado. Los abogados son muy profesionales y me explicaron todo con paciencia. Recomiendo sus servicios al 100%.",
      rating: 5,
    },
    {
      name: "Ana Martínez",
      role: "Paciente de psicología",
      content:
        "El apoyo psicológico que recibí fue fundamental para superar un momento muy difícil. La psicóloga es excelente, muy empática y profesional. Me siento mucho mejor gracias a su ayuda.",
      rating: 5,
    },
    {
      name: "Jorge López",
      role: "Padre de dos hijos",
      content:
        "Necesitábamos ayuda con la educación de nuestros hijos y la fundación nos brindó apoyo escolar y becas. Ahora mis hijos están rindiendo mejor en la escuela. Muchas gracias por todo.",
      rating: 5,
    },
    {
      name: "Laura Fernández",
      role: "Beneficiaria de trabajo social",
      content:
        "El equipo de trabajo social me ayudó a conseguir todos los documentos que necesitaba y me orientó sobre programas de asistencia. Son muy dedicados y realmente se preocupan por ayudar.",
      rating: 5,
    },
    {
      name: "Roberto Sánchez",
      role: "Paciente de cardiología",
      content:
        "Recibí atención cardiológica de primera calidad. El doctor es excelente y me explicó todo sobre mi condición. Gracias a su seguimiento, mi salud ha mejorado notablemente.",
      rating: 5,
    },
    {
      name: "Patricia Ruiz",
      role: "Madre soltera",
      content:
        "Como madre soltera, necesitaba mucho apoyo y la fundación estuvo ahí para mí. Me ayudaron con atención médica para mis hijos, apoyo psicológico y orientación laboral. Son ángeles.",
      rating: 5,
    },
    {
      name: "Miguel Torres",
      role: "Beneficiario de orientación laboral",
      content:
        "Estaba desempleado y sin esperanzas. La fundación me brindó capacitación y orientación laboral. Ahora tengo un trabajo digno y puedo mantener a mi familia. Infinitas gracias.",
      rating: 5,
    },
    {
      name: "Claudia Gómez",
      role: "Abuela de tres nietos",
      content:
        "Cuido a mis tres nietos y la fundación nos ha apoyado con atención médica, útiles escolares y alimentos. No sé qué haríamos sin su ayuda. Son personas maravillosas.",
      rating: 5,
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0a4d5c] to-[#5dbfb3] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Quote className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Testimonios</h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Conoce las historias de las personas que hemos ayudado y cómo nuestros servicios han impactado sus vidas
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#0a4d5c] mb-2">5,000+</div>
              <div className="text-gray-600">Personas Atendidas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#0a4d5c] mb-2">98%</div>
              <div className="text-gray-600">Satisfacción</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#0a4d5c] mb-2">14</div>
              <div className="text-gray-600">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#0a4d5c] mb-2">12</div>
              <div className="text-gray-600">Especialidades</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 md:py-24 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a4d5c] mb-4">
                Lo Que Dicen Nuestros Beneficiarios
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Estas son algunas de las historias que nos motivan a seguir trabajando cada día
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-[#5dbfb3] hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#5dbfb3] text-[#5dbfb3]" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-[#5dbfb3] mb-4" />
                    <p className="text-gray-600 leading-relaxed mb-6 italic">{testimonial.content}</p>
                    <div className="border-t border-gray-200 pt-4">
                      <p className="font-semibold text-[#0a4d5c]">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-[#0a4d5c] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Quieres Ser Parte de Estas Historias?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Si necesitas ayuda o conoces a alguien que la necesite, no dudes en contactarnos. Estamos aquí para
            apoyarte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contacto"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#5dbfb3] text-white font-semibold rounded-lg hover:bg-[#5dbfb3]/90 transition-colors"
            >
              Contáctanos Ahora
            </a>
            <a
              href="/especialidades"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Ver Servicios
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
