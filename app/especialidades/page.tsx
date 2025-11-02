import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Heart, Activity, Brain } from "lucide-react"

export default function SpecialtiesPage() {
  const specialties = [
    {
      icon: Activity,
      title: "Trasplante hepático",
      description:
        "Haciendo foco en mejorar la calidad de vida de nuestros pacientes, desde Fundación ETHE buscamos generar conciencia en la detección temprana de las afecciones hepáticas para garantizar el éxito del transplante. Con una larga trayectoria en transplates hepáticos pediátricos, ETHE se posiciona como experta en estas intervenciones colaborando a su vez con aquellos pacientes que tengan dificultades económicas.",
      services: [
        "Detección temprana de afecciones hepáticas",
        "Transplantes hepáticos pediátricos", 
        "Apoyo económico para pacientes",
        "Seguimiento integral post-transplante"
      ],
      color: "#c74a3a",
      bgColor: "bg-[#c74a3a]",
      borderColor: "border-[#c74a3a]",
      bulletColor: "text-[#c74a3a]"
    },
    {
      icon: Brain,
      title: "Trasplante renal",
      description:
        "Un trasplante renal realizado a tiempo, evita tener que recurrir a la diálisis del niño. La diálisis es un tratamiento de por vida que afecta no sólo al niño paciente, sino a todo el entorno familiar y a su dinámica de vida. Para realizar estos transplantes, Fundación ETHE trabaja junto a esferas gubernamentales, especialistas, centros médicos y un equipo dedicado a las necesidades especiales de cada paciente. Acompañamos cada caso de transplante renal pediátrico de manera integral durante todo el proceso acompañando al niño para que pueda llevar una vida plena.",
      services: [
        "Transplantes renales pediátricos",
        "Prevención de diálisis en niños", 
        "Coordinación con centros médicos especializados",
        "Acompañamiento integral familiar"
      ],
      color: "#cfa46c",
      bgColor: "bg-[#cfa46c]",
      borderColor: "border-[#cfa46c]",
      bulletColor: "text-[#cfa46c]"
    },
    {
      icon: Heart,
      title: "Cardiopatías congénitas",
      description:
        "La mayoría de los defectos cardíacos congénitos se pueden tratar con un diagnóstico temprano. Detectar estas afecciones durante la primer semana de vida, determina que el niño pueda tener una vida normal y sana. Pasada la primer semana, se hace dificultoso realizar la intervención por lo cual es importante detectar anomalías mediante ecografías durante el embarazo y luego del nacimiento del bebé. ETHE reúne a profesionales reconocidos mundialmente por su trabajo en cardiopatías congénitas y cirugías.",
      services: [
        "Diagnóstico temprano de cardiopatías",
        "Cirugías cardíacas pediátricas", 
        "Ecografías especializadas",
        "Profesionales reconocidos mundialmente"
      ],
      color: "#ffcb05",
      bgColor: "bg-[#ffcb05]",
      borderColor: "border-[#ffcb05]",
      bulletColor: "text-[#ffcb05]"
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section - Azul Oscuro corporativo */}
      <section className="bg-gradient-to-br from-[#00334e] to-[#5bbaa5] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Nuestras especialidades</h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Medicina de alta complejidad especializada en trasplantes y cardiopatías congénitas
            </p>
          </div>
        </div>
      </section>

      {/* Specialties Grid - Fondo blanco con tarjetas por color */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => {
              const Icon = specialty.icon
              return (
                <Card key={index} className={`border-2 ${specialty.borderColor} hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white`}>
                  <CardHeader>
                    <div className={`w-16 h-16 ${specialty.bgColor} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                      <Icon className={specialty.color === "#ffcb05" ? "text-[#00334e]" : "text-white"} size={32} />
                    </div>
                    <CardTitle className="text-xl text-[#00334e] mb-3">{specialty.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed text-[#333333]">{specialty.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-[#00334e] mb-3 text-sm">Servicios incluidos:</h4>
                    <ul className="space-y-2">
                      {specialty.services.map((service, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-[#333333]">
                          <span className={`${specialty.bulletColor} mt-1 text-lg`}>•</span>
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mission Section - Fondo beige suave */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'rgba(207, 164, 108, 0.08)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#00334e]">Misión</h2>
            <p className="text-lg md:text-xl leading-relaxed text-[#333333]">
              Promover el desarrollo de la medicina de alta complejidad en el Caribe y Centro América a través de la 
              obtención de recursos públicos y privados, los cuales son destinados a la formación y capacitación de 
              profesionales de todas las especialidades involucradas en este proceso.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action - Fondo gris web */}
      <section className="py-16 md:py-24 bg-[#f5f7fa]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00334e] mb-6">¿Necesitas alguno de estos servicios?</h2>
          <p className="text-lg text-[#333333] mb-8 max-w-2xl mx-auto leading-relaxed">
            Nuestro equipo de profesionales especializados en medicina de alta complejidad está listo para atenderte. 
            Contáctanos para más información sobre nuestros servicios especializados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#c74a3a] hover:bg-[#b43a2a] shadow-lg">
              <Link href="/contacto">Solicitar información</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-[#00334e] text-[#00334e] hover:bg-[#00334e] hover:text-white">
              <Link href="/quienes-somos">Conoce más</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
