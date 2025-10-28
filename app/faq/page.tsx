'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { HelpCircle, Heart, Activity } from "lucide-react"
import { generalFAQs, myths, specialtyFAQs } from "@/lib/faq-data"

export default function FAQPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0a4d5c] to-[#5dbfb3] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <HelpCircle className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Preguntas Frecuentes</h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Encuentra respuestas a las preguntas más comunes sobre trasplantes, donación de órganos y nuestros servicios
            </p>
          </div>
        </div>
      </section>

      {/* Preguntas Generales */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm text-[#5dbfb3] font-semibold mb-2 uppercase tracking-wide">
                Información gentileza de INCUCAI
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a4d5c] mb-4">
                Preguntas Generales
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {generalFAQs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`general-${index}`}
                  className="border-2 border-[#5dbfb3]/30 rounded-lg px-6 data-[state=open]:border-[#0a4d5c] transition-colors"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="font-semibold text-[#0a4d5c] text-lg pr-4">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed pb-6 text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Mitos y Realidades */}
      <section className="py-16 md:py-24 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a4d5c] mb-4">
                Mitos y Realidades sobre la Donación de Órganos
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Las principales causas de miedos e inseguridades a la hora de considerar la posibilidad de donar los órganos, 
                son generalmente la resultante de la falta de educación e información acerca de esta temática que nos involucra a todos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {myths.map((item, index) => (
                <Card key={index} className="border-2 border-[#5dbfb3]/30 hover:border-[#0a4d5c] transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="font-bold text-[#5dbfb3] text-lg mb-2 flex items-start gap-2">
                        <span className="text-2xl">❓</span>
                        <span>{item.myth}</span>
                      </h3>
                    </div>
                    <div className="pl-8">
                      <p className="text-gray-700 leading-relaxed">
                        <span className="font-semibold text-[#0a4d5c]">
                          {item.reality.split('.')[0]}.
                        </span>
                        {item.reality.substring(item.reality.indexOf('.') + 1)}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Preguntas por Especialidad */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a4d5c] mb-4">
                Preguntas por Especialidad
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Consulta preguntas específicas sobre cada tipo de tratamiento
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {specialtyFAQs.map((specialty, index) => (
                <Card key={index} className="border-2 border-[#5dbfb3]/30 hover:border-[#0a4d5c] transition-all duration-300 hover:shadow-xl overflow-hidden group">
                  <div className={`h-3 bg-gradient-to-r ${specialty.color}`} />
                  <CardContent className="p-8 text-center">
                    <div className="mb-6">
                      <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#5dbfb3]/20 to-[#0a4d5c]/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {specialty.icon === "liver" && <Activity className="w-12 h-12 text-[#0a4d5c]" />}
                        {specialty.icon === "kidney" && <Activity className="w-12 h-12 text-[#0a4d5c]" />}
                        {specialty.icon === "heart" && <Heart className="w-12 h-12 text-[#0a4d5c]" />}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[#0a4d5c] mb-3">
                      {specialty.specialty}
                    </h3>
                    <p className="text-gray-600 mb-6 text-sm">
                      {specialty.description}
                    </p>
                    <Link
                      href={`/faq/${specialty.slug}`}
                      className="inline-flex items-center justify-center px-6 py-3 bg-[#d9534f] hover:bg-[#c9443f] text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg w-full"
                    >
                      LEER +
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#0a4d5c] to-[#0a4d5c]/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿No encontraste tu respuesta?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Nuestro equipo está disponible para responder todas tus consultas y brindarte la información que necesites.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#d9534f] hover:bg-[#c9443f] text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-xl"
            >
              Contactar a ETHE
            </Link>
            <Link
              href="/documentos"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#0a4d5c] transition-all duration-300"
            >
              Ver Documentos
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
