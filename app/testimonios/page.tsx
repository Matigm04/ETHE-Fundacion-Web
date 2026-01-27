'use client'

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Quote, MapPin, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { testimonials } from "@/lib/testimonials-data"
import InternalHero from "@/components/internal-hero"

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* 1. COMPONENTE UNIFICADO "InternalHero" */}
      <InternalHero 
        title="Testimonios Reales"
        subtitle="Historias de pacientes que recuperaron su salud y transformaron sus vidas gracias a los programas de medicina de alta complejidad de Fundación ETHE."
        imageSrc="/testimonios/collage_niños_testimonios.jpg"
        category="Historias de Esperanza"
      />

      {/* Testimonials Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 border-[#5bbaa5]/30 hover:shadow-2xl transition-all duration-300 hover:border-[#00334e] overflow-hidden bg-white flex flex-col">
                {/* Header with Specialty Tag */}
                <div className="relative h-2 bg-[#5bbaa5]" /> {/* Green top bar */}
                
                <CardHeader className="p-0">
                  <div className="flex flex-col md:flex-row gap-6 p-6 pb-0">
                    {/* Avatar/Image */}
                    <div className="flex-shrink-0 mx-auto md:mx-0">
                      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg bg-gray-100 relative">
                          {testimonial.image ? (
                            <Image 
                              src={testimonial.image} 
                              alt={testimonial.name} 
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <div className="w-full h-full bg-[#00334e] text-white flex items-center justify-center text-2xl font-bold">
                              {testimonial.name.charAt(testimonial.name.startsWith("Caso ") ? 5 : 0)}
                            </div>
                          )}
                      </div>
                    </div>
                    
                    <div className="text-center md:text-left flex-1">
                      <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                          <span className="bg-[#ffcb05] text-[#00334e] text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wide">
                            {testimonial.specialty}
                          </span>
                      </div>
                      <div className="space-y-1">
                          <h3 className="text-xl font-bold text-[#00334e]">{testimonial.name}</h3>
                          <div className="flex items-center justify-center md:justify-start gap-4 text-sm text-gray-500">
                              <span className="flex items-center gap-1"><MapPin size={14} /> {testimonial.country}</span>
                              <span className="flex items-center gap-1"><Calendar size={14} /> {testimonial.date}</span>
                          </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-8 relative flex-1 flex flex-col">
                  {testimonial.videoUrl ? (
                    <div className="mt-4 rounded-lg overflow-hidden shadow-md aspect-video">
                      <iframe 
                        src={testimonial.videoUrl} 
                        className="w-full h-full" 
                        frameBorder="0" 
                        allow="autoplay; fullscreen; picture-in-picture" 
                        allowFullScreen
                        title={`Video testimonio de ${testimonial.name}`}
                      ></iframe>
                    </div>
                  ) : (
                    <>
                      <Quote className="absolute top-4 left-4 text-[#5bbaa5]/10 w-16 h-16 -z-10 transform -scale-x-100" />
                      <p className="text-gray-600 text-lg leading-relaxed italic relative z-10 flex-1">
                        "{testimonial.content}"
                      </p>
                      
                      <div className="mt-8 flex justify-end">
                        <Link href={`/testimonios/${testimonial.slug}`} className="text-[#5bbaa5] font-bold hover:text-[#00334e] transition-colors flex items-center gap-2 group">
                          Leer historia completa 
                          <span className="transform group-hover:translate-x-1 transition-transform"></span>
                        </Link>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
