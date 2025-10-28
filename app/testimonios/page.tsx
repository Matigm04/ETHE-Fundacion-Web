'use client'

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Quote, MapPin, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { testimonials } from "@/lib/testimonials-data"

export default function TestimonialsPage() {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("all")

  const specialties = [
    { name: "Todos", slug: "all" },
    { name: "Trasplante Hepático", slug: "hepatico" },
    { name: "Trasplante Renal", slug: "renal" },
    { name: "Cardiopatía Congénita", slug: "cardiaco" },
  ]

  const filteredTestimonials = selectedSpecialty === "all" 
    ? testimonials 
    : testimonials.filter(t => {
        if (selectedSpecialty === "hepatico") return t.specialty === "Trasplante Hepático"
        if (selectedSpecialty === "renal") return t.specialty === "Trasplante Renal"
        if (selectedSpecialty === "cardiaco") return t.specialty === "Cardiopatía Congénita"
        return true
      })

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0a4d5c] to-[#5dbfb3] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Testimonios</h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Historias reales de pacientes que recuperaron su salud gracias a nuestros programas de trasplantes y medicina de alta complejidad
            </p>
          </div>
        </div>
      </section>

      {/* Filter by Specialty */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#0a4d5c] mb-6 text-center">Especialidades</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {specialties.map((specialty, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSpecialty(specialty.slug)}
                  className={`px-6 py-3 border-2 font-medium rounded-lg transition-all duration-300 ${
                    selectedSpecialty === specialty.slug
                      ? "bg-[#0a4d5c] text-white border-[#0a4d5c]"
                      : "border-[#0a4d5c] text-[#0a4d5c] hover:bg-[#0a4d5c] hover:text-white"
                  }`}
                >
                  {specialty.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 md:py-24 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {filteredTestimonials.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredTestimonials.map((testimonial, index) => (
                <Card key={index} className="border-2 border-[#5dbfb3]/30 hover:shadow-2xl transition-all duration-300 hover:border-[#0a4d5c] overflow-hidden bg-white">
                  {/* Header with Specialty Tag */}
                  <div className="bg-gradient-to-r from-[#0a4d5c] to-[#5dbfb3] px-6 py-4">
                    <div className="flex items-center justify-between text-white">
                      <span className="text-sm font-semibold uppercase tracking-wide">
                        Especialidad: {testimonial.specialty}
                      </span>
                      <Calendar className="w-4 h-4" />
                    </div>
                  </div>

                  <CardContent className="p-6">
                    {/* Patient Info */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center text-3xl flex-shrink-0">
                        {testimonial.countryFlag}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[#0a4d5c] mb-1">{testimonial.name}</h3>
                        <div className="flex items-center gap-2 text-gray-600 mb-2">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{testimonial.country}</span>
                        </div>
                        <p className="text-sm text-gray-500 italic">{testimonial.excerpt}</p>
                      </div>
                    </div>

                    {/* Testimonial Content */}
                    <div className="relative">
                      <Quote className="absolute -top-2 -left-2 w-8 h-8 text-[#5dbfb3]/20" />
                      <p className="text-gray-700 leading-relaxed pl-6 relative z-10">
                        {testimonial.content}
                      </p>
                    </div>

                    {/* Read More Button */}
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <Link 
                        href={`/testimonios/${testimonial.slug}`}
                        className="text-[#d9534f] hover:text-[#c9443f] font-semibold text-sm flex items-center gap-2 transition-colors"
                      >
                        LEER TESTIMONIO COMPLETO
                        <span>→</span>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">
                  No hay testimonios disponibles para esta especialidad.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#0a4d5c] to-[#0a4d5c]/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Necesitas Ayuda con un Trasplante?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Si tú o un familiar necesitan un trasplante o tratamiento de alta complejidad, contáctanos. 
            Nuestro equipo está listo para ayudarte en cada paso del proceso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contacto"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#d9534f] hover:bg-[#c9443f] text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-xl"
            >
              Solicitar Asistencia
            </a>
            <a
              href="/especialidades"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#0a4d5c] transition-all duration-300"
            >
              Ver Especialidades
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
