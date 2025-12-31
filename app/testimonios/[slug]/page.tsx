import { notFound } from "next/navigation"
import { testimonials } from "@/lib/testimonials-data"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Calendar, ArrowLeft, Quote } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface TestimonialPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return testimonials.map((testimonial) => ({
    slug: testimonial.slug,
  }))
}

export default async function TestimonialPage({ params }: TestimonialPageProps) {
  const { slug } = await params
  const testimonial = testimonials.find((t) => t.slug === slug)

  if (!testimonial) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0a4d5c] to-[#5dbfb3] text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link 
              href="/testimonios" 
              className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver a Testimonios</span>
            </Link>

            {/* Patient Info */}
            <div className="flex items-start gap-6 mb-6">
              {testimonial.image ? (
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={96}
                  height={96}
                  className="rounded-full object-cover flex-shrink-0"
                />
              ) : (
                <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-5xl flex-shrink-0">
                  {testimonial.countryFlag}
                </div>
              )}
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold mb-3">{testimonial.name}</h1>
                <div className="flex flex-wrap gap-4 text-white/90">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span>{testimonial.country}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>{testimonial.date}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Specialty Badge */}
            <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full">
              <span className="font-semibold">Especialidad: {testimonial.specialty}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimony Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {testimonial.fullTestimony ? (
              <div className="space-y-10">
                {/* Interviewer Info */}
                <Card className="bg-[#5dbfb3]/10 border-[#5dbfb3]/30">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Quote className="w-6 h-6 text-[#0a4d5c] flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-sm font-semibold text-[#0a4d5c] mb-1">
                          Entrevista con:
                        </p>
                        <p className="text-lg font-medium text-gray-800">
                          {testimonial.fullTestimony.interviewer}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Interview Sections */}
                {testimonial.fullTestimony.sections.map((section, idx) => (
                  <div key={idx} className="space-y-4">
                    <h2 className="text-2xl font-bold text-[#0a4d5c] leading-tight">
                      {section.question}
                    </h2>
                    <div className="prose prose-lg max-w-none">
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line text-justify">
                        {section.answer}
                      </p>
                    </div>
                    {idx < testimonial.fullTestimony.sections.length - 1 && (
                      <div className="pt-6">
                        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-justify">
                  {testimonial.content}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Testimonials / CTA */}
      <section className="py-12 md:py-16 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a4d5c] mb-4">
              ¿Necesitas ayuda?
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Si tú o un familiar necesitan un trasplante o tratamiento de alta complejidad, 
              contáctanos. Estamos aquí para ayudarte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#d9534f] hover:bg-[#c9443f] text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-xl"
              >
                Contactar a ETHE
              </Link>
              <Link
                href="/testimonios"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#0a4d5c] text-[#0a4d5c] font-semibold rounded-lg hover:bg-[#0a4d5c] hover:text-white transition-all duration-300"
              >
                Ver más testimonios
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
