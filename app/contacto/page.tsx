"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import AR from 'country-flag-icons/react/3x2/AR'
import SV from 'country-flag-icons/react/3x2/SV'
import GT from 'country-flag-icons/react/3x2/GT'
import HN from 'country-flag-icons/react/3x2/HN'
import JM from 'country-flag-icons/react/3x2/JM'
import PA from 'country-flag-icons/react/3x2/PA'
import DO from 'country-flag-icons/react/3x2/DO'
import TT from 'country-flag-icons/react/3x2/TT'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nombreApellido: "",
    pais: "",
    ciudad: "",
    correo: "",
    mensaje: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Gracias por contactarnos. Te responderemos a la brevedad.")
    setFormData({ nombreApellido: "", pais: "", ciudad: "", correo: "", mensaje: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-[#5bbaa5] text-white py-12 md:py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 right-4 w-32 h-32 bg-[#ffcb05] opacity-15 rounded-full" />
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-white opacity-10 rounded-full" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4">
              <span className="text-xs md:text-sm font-semibold uppercase tracking-wider">Comunícate</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-3 md:mb-6 text-balance">Contáctanos</h1>
            <p className="text-base md:text-xl text-white/90 leading-relaxed">
              Estamos aquí para ayudarte. Comunícate con nosotros y te responderemos a la brevedad
            </p>
          </div>
        </div>
      </section>

      {/* Integrated Contact Card */}
      <section className="py-8 md:py-24 bg-[#f5f7fa]">
        <div className="container mx-auto px-0 md:px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white md:rounded-3xl md:shadow-2xl overflow-hidden">
              <div className="flex flex-col-reverse lg:flex-row">
                {/* Left Column - Contact Info */}
                <div className="lg:w-2/5 bg-[#00334e] text-white p-6 md:p-8 lg:p-10">
                  <div className="mb-6 md:mb-8">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">Información de Contacto</h2>
                    <p className="text-sm md:text-base text-white/80 leading-relaxed">
                      Estamos presentes en múltiples países del Caribe y Centroamérica para brindarte el mejor servicio.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xs md:text-sm font-semibold uppercase tracking-wider text-[#5bbaa5] mb-3 md:mb-4">Presencia en:</h3>
                    
                    <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 md:gap-3">
                      {/* Argentina */}
                      <div className="flex items-start gap-2 group">
                        <AR className="w-6 h-4 md:w-8 md:h-6 rounded flex-shrink-0 mt-0.5" />
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-xs md:text-sm">Argentina</p>
                          <p className="text-[10px] md:text-xs text-white/60 truncate">info@fundacionethe.org</p>
                        </div>
                      </div>

                      {/* El Salvador */}
                      <div className="flex items-start gap-2 group">
                        <SV className="w-6 h-4 md:w-8 md:h-6 rounded flex-shrink-0 mt-0.5" />
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-xs md:text-sm">El Salvador</p>
                          <p className="text-[10px] md:text-xs text-white/60 truncate">info@fundacionethe.org</p>
                        </div>
                      </div>

                      {/* Guatemala */}
                      <div className="flex items-start gap-2 group">
                        <GT className="w-6 h-4 md:w-8 md:h-6 rounded flex-shrink-0 mt-0.5" />
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-xs md:text-sm">Guatemala</p>
                          <p className="text-[10px] md:text-xs text-white/60 truncate">info@fundacionethe.org</p>
                        </div>
                      </div>

                      {/* Honduras */}
                      <div className="flex items-start gap-2 group">
                        <HN className="w-6 h-4 md:w-8 md:h-6 rounded flex-shrink-0 mt-0.5" />
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-xs md:text-sm">Honduras</p>
                          <p className="text-[10px] md:text-xs text-white/60 truncate">info@fundacionethe.org</p>
                        </div>
                      </div>

                      {/* Jamaica */}
                      <div className="flex items-start gap-2 group">
                        <JM className="w-6 h-4 md:w-8 md:h-6 rounded flex-shrink-0 mt-0.5" />
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-xs md:text-sm">Jamaica</p>
                          <p className="text-[10px] md:text-xs text-white/60 truncate">info@fundacionethe.org</p>
                        </div>
                      </div>

                      {/* Panamá */}
                      <div className="flex items-start gap-2 group">
                        <PA className="w-6 h-4 md:w-8 md:h-6 rounded flex-shrink-0 mt-0.5" />
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-xs md:text-sm">Panamá</p>
                          <p className="text-[10px] md:text-xs text-white/60 truncate">info@fundacionethe.org</p>
                        </div>
                      </div>

                      {/* República Dominicana */}
                      <div className="flex items-start gap-2 group">
                        <DO className="w-6 h-4 md:w-8 md:h-6 rounded flex-shrink-0 mt-0.5" />
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-xs md:text-sm">República Dominicana</p>
                          <p className="text-[10px] md:text-xs text-white/60 truncate">info@fundacionethe.org</p>
                        </div>
                      </div>

                      {/* Trinidad y Tobago */}
                      <div className="flex items-start gap-2 group">
                        <TT className="w-6 h-4 md:w-8 md:h-6 rounded flex-shrink-0 mt-0.5" />
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-xs md:text-sm">Trinidad y Tobago</p>
                          <p className="text-[10px] md:text-xs text-white/60 truncate">info@fundacionethe.org</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Contact Form */}
                <div className="lg:w-3/5 p-6 md:p-8 lg:p-10">
                  <div className="mb-5 md:mb-6">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#00334e] mb-2">Envíanos un Mensaje</h2>
                    <p className="text-sm md:text-base text-gray-600">
                      Completa el formulario y nos pondremos en contacto contigo lo antes posible
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="nombreApellido" className="text-sm font-medium text-gray-700">
                        Nombre y Apellido *
                      </Label>
                      <Input
                        id="nombreApellido"
                        name="nombreApellido"
                        value={formData.nombreApellido}
                        onChange={handleChange}
                        required
                        placeholder="Tu nombre y apellido"
                        className="border-gray-300 focus:border-[#5bbaa5] focus:ring-[#5bbaa5]"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="pais" className="text-sm font-medium text-gray-700">
                          País *
                        </Label>
                        <Input
                          id="pais"
                          name="pais"
                          value={formData.pais}
                          onChange={handleChange}
                          required
                          placeholder="Tu país"
                          className="border-gray-300 focus:border-[#5bbaa5] focus:ring-[#5bbaa5]"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="ciudad" className="text-sm font-medium text-gray-700">
                          Ciudad *
                        </Label>
                        <Input
                          id="ciudad"
                          name="ciudad"
                          value={formData.ciudad}
                          onChange={handleChange}
                          required
                          placeholder="Tu ciudad"
                          className="border-gray-300 focus:border-[#5bbaa5] focus:ring-[#5bbaa5]"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="correo" className="text-sm font-medium text-gray-700">
                        Correo *
                      </Label>
                      <Input
                        id="correo"
                        name="correo"
                        type="email"
                        value={formData.correo}
                        onChange={handleChange}
                        required
                        placeholder="tu@correo.com"
                        className="border-gray-300 focus:border-[#5bbaa5] focus:ring-[#5bbaa5]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mensaje" className="text-sm font-medium text-gray-700">
                        Mensaje *
                      </Label>
                      <Textarea
                        id="mensaje"
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        required
                        placeholder="Explícanos el motivo de tu consulta. Cuéntanos cómo podemos ayudarte..."
                        rows={6}
                        className="border-gray-300 focus:border-[#5bbaa5] focus:ring-[#5bbaa5] resize-none"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-[#c74a3a] hover:bg-[#b43a2a] text-white">
                      Enviar Mensaje
                      <Send className="ml-2" size={20} />
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}
