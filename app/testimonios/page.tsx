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
      <section className="bg-[#5bbaa5] text-white py-16 md:py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 right-20 w-32 h-32 bg-[#ffcb05] opacity-15 rounded-full" />
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-white opacity-10 rounded-full" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <span className="text-sm font-semibold uppercase tracking-wider">Historias Reales</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Testimonios</h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Historias reales de pacientes que recuperaron su salud gracias a nuestros programas de trasplantes y medicina de alta complejidad
            </p>
          </div>
        </div>
      </section>

      {/* Filter by Specialty */}
      <section className="py-8 bg-[#f5f7fa] border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-[#5bbaa5] font-semibold mb-2 uppercase tracking-wider text-sm text-center">Filtra por</p>
            <h2 className="text-2xl font-bold text-[#00334e] mb-6 text-center">Especialidades</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {specialties.map((specialty, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSpecialty(specialty.slug)}
                  className={`px-6 py-3 border-2 font-medium rounded-lg transition-all duration-300 ${
                    selectedSpecialty === specialty.slug
                      ? "bg-[#00334e] text-white border-[#00334e]"
                      : "border-[#00334e] text-[#00334e] hover:bg-[#00334e] hover:text-white"
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
      <section className="py-16 md:py-24 bg-white">
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

    </div>
  )
}
