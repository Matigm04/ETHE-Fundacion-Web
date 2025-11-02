'use client'

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Quote, MapPin, Calendar, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { testimonials } from "@/lib/testimonials-data"

export default function TestimonialsPage() {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("all")

  const specialties = [
    { name: "Todos", slug: "all", color: "#00334e", bgColor: "bg-[#00334e]", borderColor: "border-[#00334e]" },
    { name: "Trasplante Hepático", slug: "hepatico", color: "#c74a3a", bgColor: "bg-[#c74a3a]", borderColor: "border-[#c74a3a]" },
    { name: "Trasplante Renal", slug: "renal", color: "#cfa46c", bgColor: "bg-[#cfa46c]", borderColor: "border-[#cfa46c]" },
    { name: "Cardiopatía Congénita", slug: "cardiaco", color: "#ffcb05", bgColor: "bg-[#ffcb05]", borderColor: "border-[#ffcb05]" }
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
      <section className="relative py-16 md:py-24 bg-gradient-to-r from-[#00334e] to-[#5bbaa5] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <Heart className="w-8 h-8 text-white" />
              <span className="text-white/90 font-medium tracking-wider uppercase text-sm">
                Historias de Vida
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Testimonios de Esperanza
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Conoce las historias reales de familias que han encontrado esperanza y apoyo en momentos difíciles.
            </p>
          </div>
        </div>
      </section>

      {/* Filter by Specialty */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#00334e] mb-6 text-center">Especialidades</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {specialties.map((specialty, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSpecialty(specialty.slug)}
                  className={`px-6 py-3 border-2 font-medium rounded-lg transition-all duration-300 ${
                    selectedSpecialty === specialty.slug
                      ? `${specialty.bgColor} text-white ${specialty.borderColor}`
                      : `${specialty.borderColor} text-[#333333] hover:${specialty.bgColor} hover:text-white`
                  }`}
                  style={selectedSpecialty === specialty.slug ? { backgroundColor: specialty.color, borderColor: specialty.color } : { borderColor: specialty.color, color: specialty.color }}
                >
                  {specialty.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 md:py-24 bg-[#f5f7fa]">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {filteredTestimonials.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredTestimonials.map((testimonial, index) => {
                  const specialty = specialties.find(s => s.slug === testimonial.specialty) || specialties[0];
                  return (
                <Card key={index} className={`border-2 hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white`} style={{ borderColor: specialty.color }}>
                  {/* Header with Specialty Tag */}
                  <div className="px-6 py-4" style={{ background: `linear-gradient(to right, ${specialty.color}, ${specialty.color}dd)` }}>
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
                        <h3 className="text-xl font-bold text-[#00334e] mb-1">{testimonial.name}</h3>
                        <div className="flex items-center gap-2 text-[#333333] mb-2">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{testimonial.country}</span>
                        </div>
                        <p className="text-sm text-gray-500 italic">{testimonial.excerpt}</p>
                      </div>
                    </div>

                    {/* Testimonial Content */}
                    <div className="relative">
                      <Quote className="absolute -top-2 -left-2 w-8 h-8" style={{ color: `${specialty.color}20` }} />
                      <p className="text-[#333333] leading-relaxed pl-6 relative z-10">
                        {testimonial.content}
                      </p>
                    </div>

                    {/* Read More Button */}
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <Link 
                        href={`/testimonios/${testimonial.slug}`}
                        className="text-[#c74a3a] hover:text-[#b43a2a] font-semibold text-sm flex items-center gap-2 transition-colors"
                      >
                        LEER TESTIMONIO COMPLETO
                        <span>→</span>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-[#333333]">
                  No hay testimonios disponibles para esta especialidad.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-[#c74a3a] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Necesitas ayuda con un trasplante?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Si tú o un familiar necesitan un trasplante o tratamiento de alta complejidad, contáctanos. 
            Nuestro equipo está listo para ayudarte en cada paso del proceso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contacto"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#c74a3a] hover:bg-gray-100 font-semibold rounded-lg transition-all duration-300 hover:shadow-xl"
            >
              Solicitar Asistencia
            </a>
            <a
              href="/especialidades"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#c74a3a] transition-all duration-300"
            >
              Ver Especialidades
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
