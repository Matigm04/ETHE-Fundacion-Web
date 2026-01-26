import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { MapPin, Calendar, Activity, User, Heart, Quote, ArrowLeft } from "lucide-react"

import { testimonials } from "@/lib/testimonials-data"

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

  // Fallback hero image logic or use a specific one if available in data
  const heroImage = "/Secciones_Iniciales/Testimonios.jpg"

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      
      {/* 1. HERO UNIFICADO (Mismo estilo que el resto de la web) */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
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
        {/* Degradado Corporativo */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00334e]/95 via-[#00334e]/80 to-[#5bbaa5]/40 z-10" />
        
        <div className="relative z-20 container mx-auto px-4 mt-10">
          <Link href="/testimonios" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors font-medium">
            <ArrowLeft size={20} className="mr-2" /> Volver a Testimonios
          </Link>
          <span className="block text-[#ffcb05] font-bold tracking-widest uppercase text-sm mb-2">
            Historias de Esperanza
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white font-goudy drop-shadow-md">
            La Historia de {testimonial.name}
          </h1>
        </div>
      </section>

      {/* 2. CONTENIDO PRINCIPAL (Layout con Sidebar superpuesto) */}
      <div className="container mx-auto px-4 -mt-20 relative z-30 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* --- COLUMNA IZQUIERDA: FICHA DEL PACIENTE (Sticky) --- */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden sticky top-24 border-t-4 border-[#5bbaa5]">
              {/* Foto del Paciente */}
              <div className="relative h-64 bg-gray-100">
                {testimonial.image ? (
                    <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#00334e] text-white text-4xl font-bold">
                        {testimonial.name[0]}
                    </div>
                )}
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <span className="text-white font-bold text-lg flex items-center gap-2">
                    <MapPin size={18} className="text-[#ffcb05]" /> {testimonial.country}
                  </span>
                </div>
              </div>
              
              {/* Datos Técnicos */}
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#f0f9f6] rounded-lg text-[#00334e]"><Activity size={20} /></div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold">Diagnóstico</p>
                    <p className="text-[#00334e] font-medium leading-tight line-clamp-2">
                         {testimonial.specialty}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#f0f9f6] rounded-lg text-[#00334e]"><Heart size={20} /></div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold">Tratamiento</p>
                    <p className="text-[#00334e] font-medium leading-tight">{testimonial.specialty}</p>
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

                {/* Dato del Entrevistado */}
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


          {/* --- COLUMNA DERECHA: LA ENTREVISTA --- */}
          <div className="lg:col-span-8 bg-white p-6 md:p-12 rounded-2xl shadow-sm border border-gray-100">
            
            {/* Cita Destacada Inicial (Diseño Emotivo) */}
            <div className="mb-10 relative pl-4 md:pl-8">
              <Quote size={60} className="absolute -left-2 -top-4 text-[#ffcb05]/20" />
              <p className="text-2xl md:text-3xl font-goudy text-[#00334e] italic leading-relaxed relative z-10">
                &quot;{testimonial.excerpt || testimonial.content.substring(0, 150)}...&quot;
              </p>
              <div className="h-1 w-20 bg-[#c74a3a] mt-6 rounded-full"></div> {/* Acento Terracota */}
            </div>

            {/* Preguntas y Respuestas */}
            <div className="space-y-10">
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
                  <p className="text-gray-600 text-lg leading-relaxed">
                      {testimonial.content}
                  </p>
              )}
            </div>

            {/* Call to Action Final */}
            <div className="mt-16 bg-[#00334e] rounded-xl p-8 text-center text-white relative overflow-hidden">
               <div className="relative z-10">
                 <h3 className="text-2xl font-bold mb-2">Ayúdanos a escribir más historias como la de {testimonial.name}</h3>
                 <p className="mb-6 opacity-80">Tu colaboración hace posible la medicina de alta complejidad.</p>
                 <Link href="/contacto">
                    <button className="bg-[#ffcb05] text-[#00334e] px-8 py-3 rounded-full font-bold hover:bg-[#e5b604] transition-colors shadow-lg">
                    Donar Ahora
                    </button>
                 </Link>
               </div>
               {/* Decoración de fondo */}
               <Heart size={200} className="absolute -bottom-10 -right-10 text-white/5 rotate-12" />
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
