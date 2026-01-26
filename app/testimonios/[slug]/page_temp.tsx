import React from 'react';
import { MapPin, Calendar, Activity, Heart, User, Quote, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from "next/image";
import { notFound } from "next/navigation";
import { testimonials } from "@/lib/testimonials-data";

interface TestimonialPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return testimonials.map((testimonial) => ({
    slug: testimonial.slug,
  }))
}

export default async function TestimonioIndividualPage({ params }: TestimonialPageProps) {
  const { slug } = await params
  const testimonial = testimonials.find((t) => t.slug === slug)

  if (!testimonial) {
    notFound()
  }

  // Fallback defaults
  const heroImage = "/Secciones_Iniciales/Testimonios.jpg";
  
  // Mapping data
  const diagnosis = testimonial.specialty; // Using specialty as diagnosis since we don't have separate field
  const treatment = testimonial.specialty; // Using specialty as treatment

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      
      {/* 1. HERO UNIFICADO (Sin el botón de volver, solo título) */}
      <section className="relative h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full"> 
            <Image 
                src={heroImage} 
                alt="Fondo" 
                fill
                className="object-cover blur-[2px]" 
                style={{ objectPosition: "center 20%" }} 
                priority
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#00334e]/95 via-[#00334e]/80 to-[#5bbaa5]/40 z-10" />
        
        <div className="relative z-20 container mx-auto px-4 mt-8">
          <span className="block text-[#ffcb05] font-bold tracking-widest uppercase text-sm mb-2">
            Historias de Esperanza
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white font-goudy drop-shadow-md">
            La Historia de {testimonial.name}
          </h1>
        </div>
      </section>

      {/* 2. CONTENIDO PRINCIPAL */}
      <div className="container mx-auto px-4 -mt-16 relative z-30 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* --- COLUMNA IZQUIERDA: STICKY (Volver + Ficha) --- */}
          <div className="lg:col-span-4 relative">
            {/* Contenedor Sticky para que TODO esto baje con el scroll */}
            <div className="sticky top-24 space-y-4">
              
              {/* BOTÓN VOLVER (Ahora vive aquí para acompañar al usuario) */}
              <Link 
                href="/testimonios" 
                className="inline-flex items-center text-[#00334e] hover:text-[#5bbaa5] font-bold transition-colors group mb-2 bg-white/80 backdrop-blur-sm py-2 px-4 rounded-full shadow-sm"
              >
                <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" /> 
                Volver a Testimonios
              </Link>

              {/* TARJETA DE PERFIL (Ficha Técnica) */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-[#5bbaa5]">
                <div className="relative h-64 bg-gray-100">
                   {testimonial.image ? (
                        <Image 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            fill 
                            className="object-cover" 
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-[#00334e] text-white text-4xl font-bold">
                            {testimonial.name[0]}
                        </div>
                    )}
                  
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <span className="text-white font-bold text-lg flex items-center gap-2">
                      <MapPin size={18} className="text-[#ffcb05]" /> {testimonial.country}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-[#f0f9f6] rounded-lg text-[#00334e]"><Activity size={20} /></div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-bold">Diagnóstico</p>
                      <p className="text-[#00334e] font-medium leading-tight">{diagnosis}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-[#f0f9f6] rounded-lg text-[#00334e]"><Heart size={20} /></div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-bold">Tratamiento</p>
                      <p className="text-[#00334e] font-medium leading-tight">{treatment}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-[#f0f9f6] rounded-lg text-[#00334e]"><Calendar size={20} /></div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-bold">Año</p>
                      <p className="text-[#00334e] font-medium">{testimonial.date}</p>
                    </div>
                  </div>

                  <hr className="border-gray-100 my-4"/>

                  {testimonial.fullTestimony?.interviewer && (
                    <div className="flex items-center gap-3 bg-[#f8fafc] p-3 rounded-lg">
                        <User size={20} className="text-gray-400" />
                        <div>
                        <p className="text-xs text-gray-500">Entrevista con:</p>
                        <p className="text-[#00334e] font-bold text-sm">{testimonial.fullTestimony.interviewer}</p>
                        </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>


          {/* --- COLUMNA DERECHA: ENTREVISTA --- */}
          <div className="lg:col-span-8 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
            
            {/* Cita Destacada */}
            <div className="mb-10 relative pl-8">
              <Quote size={60} className="absolute -left-2 -top-4 text-[#ffcb05]/20" />
              <p className="text-2xl md:text-3xl font-goudy text-[#00334e] italic leading-relaxed relative z-10">
                &quot;{testimonial.excerpt || testimonial.content.substring(0, 150)}...&quot;
              </p>
              <div className="h-1 w-20 bg-[#c74a3a] mt-6 rounded-full"></div>
            </div>

            {/* Preguntas */}
            <div className="space-y-10 mb-16">
              {testimonial.fullTestimony?.sections.map((item, index) => (
                <div key={index} className="group">
                  <h3 className="text-xl font-bold text-[#00334e] mb-3 flex items-start gap-2">
                    <span className="text-[#5bbaa5]">0{index + 1}.</span> {item.question}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed pl-8 border-l-2 border-gray-100 group-hover:border-[#5bbaa5] transition-colors whitespace-pre-line">
                    {item.answer}
                  </p>
                </div>
              ))}

               {!testimonial.fullTestimony && (
                  <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line">
                      {testimonial.content}
                  </p>
              )}
            </div>

            {/* --- SECCIÓN NUEVA: ¿NECESITAS AYUDA? (Reemplaza Donar) --- */}
            <div className="bg-[#f8fafc] rounded-xl p-8 md:p-10 text-center border border-gray-200">
               <h3 className="text-2xl md:text-3xl font-bold text-[#00334e] mb-3 font-goudy">
                 ¿Necesitas ayuda?
               </h3>
               <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
                 Si tú o un familiar necesitan un trasplante o tratamiento de alta complejidad, contáctanos. Estamos aquí para ayudarte.
               </p>
               
               <div className="flex flex-col sm:flex-row justify-center gap-4">
                 {/* Botón Principal: Terracota (Color de Soporte Manual ETHE) */}
                 <Link href="/contacto" className="bg-[#c74a3a] text-white px-8 py-3 rounded-md font-bold hover:bg-[#a63d30] transition-colors shadow-sm flex items-center justify-center">
                   Contactar a ETHE
                 </Link>
                 
                 {/* Botón Secundario: Outline */}
                 <Link href="/testimonios" className="bg-white border-2 border-[#00334e] text-[#00334e] px-8 py-3 rounded-md font-bold hover:bg-[#00334e] hover:text-white transition-colors flex items-center justify-center">
                   Ver más testimonios
                 </Link>
               </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
