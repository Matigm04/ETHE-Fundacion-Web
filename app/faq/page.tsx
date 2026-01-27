'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Activity, Heart, HelpCircle } from "lucide-react"
import { generalFAQs, myths, specialtyFAQs } from "@/lib/faq-data"
import InternalHero from "@/components/internal-hero"

export default function FAQPage() {
  return (
    <div className="flex flex-col">
      {/* 1. COMPONENTE UNIFICADO "InternalHero" */}
      <InternalHero 
        title="Preguntas Frecuentes"
        subtitle="Sabemos que los procesos médicos generan dudas. Aquí respondemos las consultas más comunes con claridad y empatía."
        imageSrc="/Secciones_Iniciales/FAQ.jpg"
        category="Centro de Ayuda"
      />

      {/* Preguntas Generales */}
      <section className="py-16 md:py-24 bg-[#f5f7fa]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm text-[#5bbaa5] font-semibold mb-2 uppercase tracking-wide">
                Información gentileza de INCUCAI
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#00334e] mb-4">
                Preguntas Generales
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {generalFAQs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`general-${index}`}
                  className="border-2 border-[#5bbaa5]/30 rounded-lg px-6 data-[state=open]:border-[#00334e] transition-colors bg-white"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="font-semibold text-[#00334e] text-lg pr-4">
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
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[#5bbaa5] font-semibold mb-2 uppercase tracking-wider text-sm">Desmintiendo Mitos</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#00334e] mb-4">
                Mitos y Realidades sobre la Donación de Órganos
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Las principales causas de miedos e inseguridades a la hora de considerar la posibilidad de donar los órganos, 
                son generalmente la resultante de la falta de educación e información acerca de esta temática que nos involucra a todos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {myths.map((item, index) => (
                <Card key={index} className="border-2 border-[#5bbaa5]/30 hover:border-[#00334e] transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="font-bold text-[#00334e] text-lg mb-2 flex items-start gap-2">
                        <span className="text-2xl">❓</span>
                        <span>{item.myth}</span>
                      </h3>
                    </div>
                    <div className="pl-8">
                      <p className="text-gray-700 leading-relaxed">
                        <span className="font-semibold text-[#5bbaa5]">
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
      <section className="py-16 md:py-24 bg-[#cfa46c]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[#5bbaa5] font-semibold mb-2 uppercase tracking-wider text-sm">Por Tratamiento</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#00334e] mb-4">
                Preguntas por Especialidad
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Consulta preguntas específicas sobre cada tipo de tratamiento
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto px-4">
              
              {/* TARJETA HEPÁTICA */}
              <Link href="/faq/trasplante-hepatico" className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 border border-gray-100 overflow-hidden">
                <div className="h-2 bg-[#5bbaa5] w-full" /> 
                <div className="p-8 text-center">
                  <div className="w-24 h-24 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <img src="/Logos_Especialidades/Logo_Higado.png" alt="Hígado" className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#00334e] mb-2 font-goudy">Trasplante Hepático</h3>
                  <p className="text-gray-500 mb-6 text-sm">Respuestas sobre el hígado, donantes y recuperación.</p>
                  <span className="text-[#5bbaa5] font-bold text-sm tracking-wider uppercase border-b-2 border-transparent group-hover:border-[#5bbaa5] transition-all">Leer Preguntas</span>
                </div>
              </Link>

              {/* TARJETA RENAL */}
              <Link href="/faq/trasplante-renal" className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 border border-gray-100 overflow-hidden">
                <div className="h-2 bg-[#00334e] w-full" />
                <div className="p-8 text-center">
                  <div className="w-24 h-24 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <img src="/Logos_Especialidades/Logo_Renal.png" alt="Riñón" className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#00334e] mb-2 font-goudy">Trasplante Renal</h3>
                  <p className="text-gray-500 mb-6 text-sm">Dudas sobre diálisis, cirugía y calidad de vida.</p>
                  <span className="text-[#00334e] font-bold text-sm tracking-wider uppercase border-b-2 border-transparent group-hover:border-[#00334e] transition-all">Leer Preguntas</span>
                </div>
              </Link>

              {/* TARJETA CARDIOPATÍAS */}
              <Link href="/faq/cardiopatias-congenitas" className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 border border-gray-100 overflow-hidden">
                <div className="h-2 bg-[#c74a3a] w-full" />
                <div className="p-8 text-center">
                  <div className="w-24 h-24 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <img src="/Logos_Especialidades/Logo_Corazon.png" alt="Corazón" className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#00334e] mb-2 font-goudy">Cardiopatías</h3>
                  <p className="text-gray-500 mb-6 text-sm">Información para familias sobre el corazón.</p>
                  <span className="text-[#c74a3a] font-bold text-sm tracking-wider uppercase border-b-2 border-transparent group-hover:border-[#c74a3a] transition-all">Leer Preguntas</span>
                </div>
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#00334e] text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block px-4 py-2 bg-white/10 rounded-full mb-6">
            <span className="text-sm font-semibold uppercase tracking-wider">Estamos Aquí</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿No encontraste tu respuesta?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Nuestro equipo está disponible para responder todas tus consultas y brindarte la información que necesites.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#c74a3a] hover:bg-[#b73d2d] text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-xl"
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
