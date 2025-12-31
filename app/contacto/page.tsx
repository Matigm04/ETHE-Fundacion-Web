"use client"

import type React from "react"

import { useState, useRef } from "react"
import ReCAPTCHA from "react-google-recaptcha"
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
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const recaptchaRef = useRef<ReCAPTCHA>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // Validación: Si no hay captcha, no enviamos nada
    if (!captchaToken) {
      setStatus("error")
      return
    }

    setLoading(true)
    setStatus("idle")

    // Capturamos los datos del formulario
    const form = event.currentTarget
    
    const formData = {
      nombre: (form.elements.namedItem("nombre") as HTMLInputElement).value,
      apellido: (form.elements.namedItem("apellido") as HTMLInputElement).value,
      pais: (form.elements.namedItem("pais") as HTMLInputElement).value,
      ciudad: (form.elements.namedItem("ciudad") as HTMLInputElement).value,
      email: (form.elements.namedItem("correo") as HTMLInputElement).value,
      mensaje: (form.elements.namedItem("mensaje") as HTMLTextAreaElement).value,
      recaptchaToken: captchaToken // Enviamos el token al script
    }

    try {
      const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzC2Uj8glPw2e6dLV8IoSfJIA0EY71R4U6-GfmBXL2h0MGllBjRLNwXjp16bM7jRy5lig/exec"
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(formData),
      })

      setStatus("success")
      form.reset()
      setCaptchaToken(null)
      recaptchaRef.current?.reset()
    } catch (error) {
      console.error("Error al enviar", error)
      setStatus("error")
    } finally {
      setLoading(false)
    }
  }

  // Función que se ejecuta cuando el usuario completa el captcha
  const onCaptchaChange = (token: string | null) => {
    setCaptchaToken(token)
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
                        </div>
                      </div>

                      {/* El Salvador */}
                      <div className="flex items-start gap-2 group">
                        <SV className="w-6 h-4 md:w-8 md:h-6 rounded flex-shrink-0 mt-0.5" />
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-xs md:text-sm">El Salvador</p>
                        </div>
                      </div>

                      {/* Guatemala */}
                      <div className="flex items-start gap-2 group">
                        <GT className="w-6 h-4 md:w-8 md:h-6 rounded flex-shrink-0 mt-0.5" />
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-xs md:text-sm">Guatemala</p>
                        </div>
                      </div>

                      {/* Honduras */}
                      <div className="flex items-start gap-2 group">
                        <HN className="w-6 h-4 md:w-8 md:h-6 rounded flex-shrink-0 mt-0.5" />
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-xs md:text-sm">Honduras</p>
                        </div>
                      </div>

                      {/* Jamaica */}
                      <div className="flex items-start gap-2 group">
                        <JM className="w-6 h-4 md:w-8 md:h-6 rounded flex-shrink-0 mt-0.5" />
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-xs md:text-sm">Jamaica</p>
                        </div>
                      </div>

                      {/* Panamá */}
                      <div className="flex items-start gap-2 group">
                        <PA className="w-6 h-4 md:w-8 md:h-6 rounded flex-shrink-0 mt-0.5" />
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-xs md:text-sm">Panamá</p>
                        </div>
                      </div>

                      {/* República Dominicana */}
                      <div className="flex items-start gap-2 group">
                        <DO className="w-6 h-4 md:w-8 md:h-6 rounded flex-shrink-0 mt-0.5" />
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-xs md:text-sm">República Dominicana</p>
                        </div>
                      </div>

                      {/* Trinidad y Tobago */}
                      <div className="flex items-start gap-2 group">
                        <TT className="w-6 h-4 md:w-8 md:h-6 rounded flex-shrink-0 mt-0.5" />
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-xs md:text-sm">Trinidad y Tobago</p>
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="nombre" className="text-sm font-medium text-gray-700">
                          Nombre *
                        </Label>
                        <Input
                          id="nombre"
                          name="nombre"
                          required
                          placeholder="Tu nombre"
                          className="border-gray-300 focus:border-[#5bbaa5] focus:ring-[#5bbaa5]"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="apellido" className="text-sm font-medium text-gray-700">
                          Apellido *
                        </Label>
                        <Input
                          id="apellido"
                          name="apellido"
                          required
                          placeholder="Tu apellido"
                          className="border-gray-300 focus:border-[#5bbaa5] focus:ring-[#5bbaa5]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="pais" className="text-sm font-medium text-gray-700">
                          País *
                        </Label>
                        <Input
                          id="pais"
                          name="pais"
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
                        required
                        placeholder="Explícanos el motivo de tu consulta. Cuéntanos cómo podemos ayudarte..."
                        rows={6}
                        className="border-gray-300 focus:border-[#5bbaa5] focus:ring-[#5bbaa5] resize-none"
                      />
                    </div>

                    {/* reCAPTCHA */}
                    <div className="flex justify-center my-4">
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey="6LfKijwsAAAAANxvH3iTm3Al5Tw_0p0m5SEivU-O"
                        onChange={onCaptchaChange}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      disabled={loading || !captchaToken}
                      className="w-full bg-[#c74a3a] hover:bg-[#b43a2a] text-white disabled:opacity-50"
                    >
                      {loading ? "Enviando..." : "Enviar Mensaje"}
                      {!loading && <Send className="ml-2" size={20} />}
                    </Button>

                    {/* Mensajes de Feedback */}
                    {status === "success" && (
                      <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                        <p className="text-green-700 text-center font-medium">
                          ¡Mensaje enviado con éxito! Nos contactaremos pronto.
                        </p>
                      </div>
                    )}
                    {status === "error" && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-red-700 text-center font-medium">
                          {!captchaToken ? "Por favor confirma que no eres un robot." : "Hubo un error. Por favor intenta nuevamente."}
                        </p>
                      </div>
                    )}
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
