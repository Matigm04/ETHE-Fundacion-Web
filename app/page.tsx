import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Activity, Brain, ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0a4d5c] to-[#5dbfb3] text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Medicina de alta complejidad en el Caribe y Centro América
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed">
              Fundación ETHE se especializa en trasplantes hepáticos, renales y cardiopatías congénitas, 
              promoviendo el desarrollo de la medicina de alta complejidad a través de la formación profesional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-[#0a4d5c] hover:bg-white/90">
                <Link href="/contacto">
                  Contáctanos
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 bg-transparent"
              >
                <Link href="/quienes-somos">Conoce más</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a4d5c] mb-4">Especialidades</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Medicina de alta complejidad especializada en trasplantes y cardiopatías congénitas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-[#5dbfb3] hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-[#5dbfb3] to-[#0a4d5c] rounded-xl flex items-center justify-center mb-4">
                  <Activity className="text-white" size={32} />
                </div>
                <CardTitle className="text-[#0a4d5c] text-xl mb-3">Trasplante Hépatico</CardTitle>
                <CardDescription className="leading-relaxed text-left">
                  Haciendo foco en mejorar la calidad de vida de nuestros pacientes, desde Fundación ETHE buscamos generar conciencia en la detección temprana de las afecciones hepáticas para garantizar el éxito del transplante. Con una larga trayectoria en transplates hepáticos pediátricos, ETHE se posiciona como experta en estas intervenciones colaborando a su vez con aquellos pacientes que tengan dificultades económicas.
                </CardDescription>
                <Button asChild variant="link" className="mt-4 p-0 h-auto text-[#0a4d5c] hover:text-[#5dbfb3]">
                  <Link href="/especialidades">
                    Leer más
                    <ArrowRight className="ml-1" size={16} />
                  </Link>
                </Button>
              </CardHeader>
            </Card>

            <Card className="border-[#5dbfb3] hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-[#5dbfb3] to-[#0a4d5c] rounded-xl flex items-center justify-center mb-4">
                  <Brain className="text-white" size={32} />
                </div>
                <CardTitle className="text-[#0a4d5c] text-xl mb-3">Trasplante Renal</CardTitle>
                <CardDescription className="leading-relaxed text-left">
                  Un trasplante renal realizado a tiempo, evita tener que recurrir a la diálisis del niño. La diálisis es un tratamiento de por vida que afecta no sólo al niño paciente, sino a todo el entorno familiar y a su dinámica de vida. Para realizar estos transplantes, Fundación ETHE trabaja junto a esferas gubernamentales, especialistas, centros médicos y un equipo dedicado a las necesidades especiales de cada paciente. Acompañamos cada caso de transplante renal pediátrico de manera integral durante todo el proceso acompañando al niño para que pueda llevar una vida plena.
                </CardDescription>
                <Button asChild variant="link" className="mt-4 p-0 h-auto text-[#0a4d5c] hover:text-[#5dbfb3]">
                  <Link href="/especialidades">
                    Leer más
                    <ArrowRight className="ml-1" size={16} />
                  </Link>
                </Button>
              </CardHeader>
            </Card>

            <Card className="border-[#5dbfb3] hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-[#5dbfb3] to-[#0a4d5c] rounded-xl flex items-center justify-center mb-4">
                  <Heart className="text-white" size={32} />
                </div>
                <CardTitle className="text-[#0a4d5c] text-xl mb-3">Cardiopatías Congenitas</CardTitle>
                <CardDescription className="leading-relaxed text-left">
                  La mayoría de los defectos cardíacos congénitos se pueden tratar con un diagnóstico temprano. Detectar estas afecciones durante la primer semana de vida, determina que el niño pueda tener una vida normal y sana. Pasada la primer semana, se hace dificultoso realizar la intervención por lo cual es importante detectar anomalías mediante ecografías durante el embarazo y luego del nacimiento del bebé. ETHE reúne a profesionales reconocidos mundialmente por su trabajo en cardiopatías congénitas y cirugías. Junto a Centros Médicos altamente calificados y un equipo de asistencia personalizada otorgamos asistencia médica de calidad, brindamos contención emocional a pacientes y familiares y buscamos facilitar la posibilidad de los pacientes para acceder al tratamiento.
                </CardDescription>
                <Button asChild variant="link" className="mt-4 p-0 h-auto text-[#0a4d5c] hover:text-[#5dbfb3]">
                  <Link href="/especialidades">
                    Leer más
                    <ArrowRight className="ml-1" size={16} />
                  </Link>
                </Button>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-[#0a4d5c] hover:bg-[#0a4d5c]/90">
              <Link href="/especialidades">
                Ver todas las especialidades
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#0a4d5c] to-[#5dbfb3] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Misión</h2>
            <p className="text-lg md:text-xl leading-relaxed">
              Promover el desarrollo de la medicina de alta complejidad en el Caribe y Centro América a través de la 
              obtención de recursos públicos y privados, los cuales son destinados a la formación y capacitación de 
              profesionales de todas las especialidades involucradas en este proceso.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
