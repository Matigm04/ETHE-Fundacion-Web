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
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* --- SECCIÓN INICIAL TIPO HÉROE (El Sándwich) --- */}
      {/* Le damos una altura de 550px porque el collage es alto y necesita espacio */}
      <section className="relative h-[550px] flex items-center justify-center overflow-hidden">

        {/* CAPA 1: TU COLLAGE DE FONDO */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/testimonios/collage_niños_testimonios.jpg')"
          }}
        />

        {/* CAPA 2: EL FILTRO PROTECTOR (Overlay Azul Oscuro) */}
        {/* Usamos bg-[#00334e] (azul corporativo) con /90 (90% de opacidad).
            Es casi sólido para garantizar que el texto blanco se lea perfecto. */}
        <div className="absolute inset-0 bg-[#00334e]/90 mix-blend-multiply" />

        {/* CAPA 3: EL TEXTO (Lo único que debe ser relative z-10) */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pb-10">
          
          {/* Un detalle opcional: una pequeña etiqueta arriba */}
          <span className="inline-block py-1 px-3 rounded-full bg-[#5bbaa5]/20 text-[#5bbaa5] text-sm font-bold tracking-wider uppercase mb-4 backdrop-blur-sm">
            Historias de Esperanza
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-goudy drop-shadow-lg">
            Testimonios Reales
          </h1>

          <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light">
            Historias de pacientes que recuperaron su salud y transformaron sus vidas gracias a los programas de medicina de alta complejidad de Fundación ETHE.
          </p>

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
                      {testimonial.image ? (
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={80}
                          height={80}
                          className="rounded-full object-cover flex-shrink-0"
                        />
                      ) : (
                        <div className="w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center text-3xl flex-shrink-0">
                          {testimonial.countryFlag}
                        </div>
                      )}
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
