import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Heart, GraduationCap, HandCoins, Activity, Brain, ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. HERO HOME PAGE (Diseño Impactante) */}
      <section className="relative h-screen flex items-center">
        
        {/* 1. FOTO EMOTIVA DE FONDO (Niños/Esperanza) */}
        <div className="absolute inset-0 z-0">
          <Image 
             src="/Secciones_Iniciales/group-primary-schoolers-lying-ground-smiling.jpg" 
             fill
             className="object-cover"
             alt="Esperanza de vida - Fundación ETHE"
             style={{ objectPosition: "center" }}
             priority
          />
        </div>

        {/* 2. DEGRADADO MÁS FUERTE (Para impacto visual) */}
        {/* De Azul #00334e solido a transparente */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00334e] via-[#00334e]/80 to-transparent z-10" />

        {/* 3. TEXTO */}
        <div className="container mx-auto px-4 relative z-20 grid grid-cols-1 lg:grid-cols-2">
          <div className="max-w-3xl">
            {/* 1. ETIQUETA SUPERIOR (Capsule) */}
            <div className="mb-6 animate-fade-in-up">
               <span className="bg-[#5bbaa5] text-white px-4 py-2 rounded-full font-bold uppercase tracking-widest text-xs md:text-sm shadow-sm">
                 Transformando vidas a través de la medicina
               </span>
            </div>

            {/* 2. TÍTULO PRINCIPAL (H1) */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight font-goudy">
              Expertos en Medicina de <br/>
              <span className="text-[#ffcb05]">Alta Complejidad</span>
            </h1>
            
            {/* 3. BAJADA / DESCRIPCIÓN */}
            <p className="text-gray-100 text-xl mb-8 font-light max-w-2xl leading-relaxed">
              Brindamos atención especializada en trasplantes y cardiopatías congénitas con un equipo de profesionales de renombre internacional.
            </p>

            {/* 4. BOTONES OFICIALES */}
            <div className="flex flex-wrap gap-4">
              {/* Botón Principal: Amarillo */}
              <Link href="/especialidades">
                <button className="bg-[#ffcb05] text-[#00334e] px-8 py-4 rounded-full font-bold hover:bg-[#e5b604] transition-colors shadow-lg">
                  Nuestras Especialidades
                </button>
              </Link>
              
              {/* Botón Secundario: Borde Blanco */}
              <Link href="/contacto">
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#00334e] transition-colors">
                  Cómo Ayudar / Contacto
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Overview - Tarjetas con colores sólidos */}
      <section className="py-12 md:py-24 bg-[#f5f7fa]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-[#5bbaa5] font-semibold mb-1 md:mb-2 uppercase tracking-wider text-xs md:text-sm">Nuestras Áreas</p>
            <h2 className="text-2xl md:text-4xl font-bold text-[#00334e] mb-2 md:mb-4">Especialidades médicas</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
            {/* Trasplante Hepático */}
            <div className="group bg-[#c74a3a] rounded-2xl p-5 md:p-8 text-white hover:shadow-2xl transition-all hover:scale-105">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 md:mb-6">
                <Image src="/Logos_Especialidades/Logo_Higado.png" alt="Trasplante Hepático" width={32} height={32} className="w-7 h-7 md:w-8 md:h-8" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">Trasplante hepático</h3>
              <p className="text-white/90 text-sm md:text-base leading-relaxed mb-4 md:mb-6">
                Expertos en transplantes hepáticos pediátricos con detección temprana 
                y seguimiento integral post-quirúrgico.
              </p>
              <Link href="/especialidades" className="inline-flex items-center text-white text-sm md:text-base font-semibold border-b-2 border-white/30 hover:border-white transition-all">
                Conocer más <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>

            {/* Trasplante Renal */}
            <div className="group bg-[#94a3b8] rounded-2xl p-5 md:p-8 text-white hover:shadow-2xl transition-all hover:scale-105">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 md:mb-6">
                <Image src="/Logos_Especialidades/Logo_Renal.png" alt="Trasplante Renal" width={32} height={32} className="w-7 h-7 md:w-8 md:h-8" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">Trasplante renal</h3>
              <p className="text-white/90 text-sm md:text-base leading-relaxed mb-4 md:mb-6">
                Procedimientos especializados para insuficiencia renal crónica 
                con opción de donante vivo o cadavérico.
              </p>
              <Link href="/especialidades" className="inline-flex items-center text-white text-sm md:text-base font-semibold border-b-2 border-white/30 hover:border-white transition-all">
                Conocer más <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>

            {/* Cardiopatías */}
            <div className="group bg-[#ffcb05] rounded-2xl p-5 md:p-8 text-[#00334e] hover:shadow-2xl transition-all hover:scale-105">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#00334e]/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 md:mb-6">
                <Image src="/Logos_Especialidades/Logo_Corazon.png" alt="Cardiopatías Congénitas" width={32} height={32} className="w-7 h-7 md:w-8 md:h-8" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">Cardiopatías congénitas</h3>
              <p className="text-[#00334e]/90 text-sm md:text-base leading-relaxed mb-4 md:mb-6">
                Diagnóstico temprano y tratamiento de defectos cardíacos con 
                profesionales de renombre mundial.
              </p>
              <Link href="/especialidades" className="inline-flex items-center text-[#00334e] text-sm md:text-base font-semibold border-b-2 border-[#00334e]/30 hover:border-[#00334e] transition-all">
                Conocer más <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section - Azul oscuro con separador */}
      <section className="py-12 md:py-24 bg-[#00334e] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-white/10 rounded-full mb-4 md:mb-6">
              <span className="text-xs md:text-sm font-semibold uppercase tracking-wider">Nuestra Misión</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
              Compromiso con la excelencia médica
            </h2>
            <p className="text-sm md:text-lg leading-relaxed text-white/90 px-4">
              Promover el desarrollo de la medicina de alta complejidad en el Caribe y Centro América 
              a través de recursos públicos y privados destinados a la formación y capacitación 
              de profesionales de todas las especialidades involucradas en este proceso.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Tarjetas con colores sólidos */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-[#5bbaa5] font-semibold mb-1 md:mb-2 uppercase tracking-wider text-xs md:text-sm">Nuestro Valor</p>
            <h2 className="text-2xl md:text-4xl font-bold text-[#00334e] mb-2 md:mb-4">¿Por qué elegir ETHE?</h2>
            <p className="text-sm md:text-lg text-[#333333]">Excelencia médica con compromiso social</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
            {/* Equipo Especializado */}
            <div className="group bg-[#c74a3a] rounded-2xl p-5 md:p-8 text-white hover:shadow-2xl transition-all hover:scale-105">
              <CheckCircle size={32} className="mb-3 md:mb-4 opacity-90 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-lg md:text-xl mb-1 md:mb-2">Equipo especializado</h3>
              <p className="text-white/90 text-xs md:text-sm">Profesionales reconocidos internacionalmente con amplia trayectoria.</p>
            </div>

            {/* Atención Integral */}
            <div className="group bg-[#5bbaa5] rounded-2xl p-5 md:p-8 text-white hover:shadow-2xl transition-all hover:scale-105">
              <CheckCircle size={32} className="mb-3 md:mb-4 opacity-90 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-lg md:text-xl mb-1 md:mb-2">Atención integral</h3>
              <p className="text-white/90 text-xs md:text-sm">Acompañamiento integral en cada etapa del tratamiento y recuperación.</p>
            </div>

            {/* Formación Continua */}
            <div className="group bg-[#00334e] rounded-2xl p-5 md:p-8 text-white hover:shadow-2xl transition-all hover:scale-105">
              <CheckCircle size={32} className="mb-3 md:mb-4 opacity-90 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-lg md:text-xl mb-1 md:mb-2">Formación continua</h3>
              <p className="text-white/90 text-xs md:text-sm">Capacitación profesional permanente e intercambio de conocimientos.</p>
            </div>

            {/* Apoyo Social */}
            <div className="group bg-[#ffcb05] rounded-2xl p-5 md:p-8 text-[#00334e] hover:shadow-2xl transition-all hover:scale-105">
              <CheckCircle size={32} className="mb-3 md:mb-4 opacity-90 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-lg md:text-xl mb-1 md:mb-2 text-[#00334e]">Apoyo social</h3>
              <p className="text-[#00334e]/90 text-xs md:text-sm">Asistencia y contención para pacientes y familias sin recursos.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
