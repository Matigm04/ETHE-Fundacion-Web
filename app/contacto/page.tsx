"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Gracias por contactarnos. Te responderemos a la brevedad.")
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
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
      <section className="bg-gradient-to-br from-[#0a4d5c] to-[#5dbfb3] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Contáctanos</h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Estamos aquí para ayudarte. Comunícate con nosotros y te responderemos a la brevedad
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info and Form */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0a4d5c] mb-6">Información de contacto</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Puedes comunicarte con nosotros a través de cualquiera de estos medios. Estamos disponibles para
                  atenderte.
                </p>
              </div>

              <Card className="border-[#5dbfb3]">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#5dbfb3] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-[#0a4d5c] mb-1">Teléfono</CardTitle>
                      <CardDescription>+54 11 1234-5678</CardDescription>
                      <CardDescription>+54 11 8765-4321</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-[#5dbfb3]">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#5dbfb3] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-[#0a4d5c] mb-1">Email</CardTitle>
                      <CardDescription>info@fundacionethe.org</CardDescription>
                      <CardDescription>contacto@fundacionethe.org</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-[#5dbfb3]">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#5dbfb3] rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-white" size={20} />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-[#0a4d5c] mb-1">Dirección</CardTitle>
                      <CardDescription>Av. Corrientes 1234</CardDescription>
                      <CardDescription>Buenos Aires, Argentina</CardDescription>
                      <CardDescription>C1043AAZ</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-[#5dbfb3]">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#5dbfb3] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="text-white" size={20} />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-[#0a4d5c] mb-1">Horario</CardTitle>
                      <CardDescription>Lunes a Viernes</CardDescription>
                      <CardDescription>8:00 - 18:00 hs</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-[#5dbfb3]">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#0a4d5c]">Envíanos un Mensaje</CardTitle>
                  <CardDescription>
                    Completa el formulario y nos pondremos en contacto contigo lo antes posible
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-[#0a4d5c]">
                          Nombre Completo *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Tu nombre"
                          className="border-[#5dbfb3] focus:ring-[#5dbfb3]"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-[#0a4d5c]">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="tu@email.com"
                          className="border-[#5dbfb3] focus:ring-[#5dbfb3]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-[#0a4d5c]">
                          Teléfono
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+54 11 1234-5678"
                          className="border-[#5dbfb3] focus:ring-[#5dbfb3]"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-[#0a4d5c]">
                          Asunto *
                        </Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          placeholder="Motivo de tu consulta"
                          className="border-[#5dbfb3] focus:ring-[#5dbfb3]"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-[#0a4d5c]">
                        Mensaje *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Cuéntanos cómo podemos ayudarte..."
                        rows={6}
                        className="border-[#5dbfb3] focus:ring-[#5dbfb3] resize-none"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-[#0a4d5c] hover:bg-[#0a4d5c]/90">
                      Enviar Mensaje
                      <Send className="ml-2" size={20} />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a4d5c] mb-6 text-center">Nuestra ubicación</h2>
            <p className="text-lg text-gray-600 text-center mb-8 leading-relaxed">
              Visítanos en nuestras oficinas. Estamos ubicados en el centro de Buenos Aires
            </p>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-[#5dbfb3]">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="w-16 h-16 text-[#5dbfb3] mx-auto mb-4" />
                  <p className="text-gray-600 font-semibold">Av. Corrientes 1234, Buenos Aires</p>
                  <p className="text-sm text-gray-500 mt-2">Mapa interactivo disponible próximamente</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
