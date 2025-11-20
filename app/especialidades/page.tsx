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
        "El trasplante hepático es un tratamiento médico indicado cuando otras alternativas para recuperar la salud del paciente se han agotado. Consiste en el reemplazo de un hígado enfermo, sin posibilidad de recuperación, por otro sano proveniente de un donante cadavérico o de un donante vivo relacionado. El procedimiento puede durar hasta 12 horas y está indicado principalmente en casos de insuficiencia hepática aguda o crónica, cirrosis hepática, tumores hepáticos y defectos genéticos del metabolismo. Fundación ETHE cuenta con una larga trayectoria en transplantes hepáticos pediátricos, posicionándose como experta en estas intervenciones y colaborando con aquellos pacientes que tengan dificultades económicas.",
      services: [
        "Evaluación pre-trasplante y lista de espera",
        "Trasplante de donante cadavérico o donante vivo",
        "Cirugía de trasplante hepático completo o reducido",
        "Seguimiento integral post-transplante"
      ],
    },
    {
      icon: Brain,
      title: "Trasplante renal",
      description:
        "El trasplante renal es el procedimiento mediante el cual a una persona con insuficiencia renal crónica se le implanta un riñón sano de otra persona. Un trasplante renal realizado a tiempo evita tener que recurrir a la diálisis, un tratamiento de por vida que afecta al paciente y a todo su entorno familiar. El riñón donado puede provenir de un donante cadavérico o de un donante vivo relacionado (padres, hijos, hermanos). El riñón trasplantado se coloca en la región anterior del abdomen y puede comenzar a funcionar inmediatamente o demorar algunos días. Fundación ETHE trabaja junto a esferas gubernamentales, especialistas y centros médicos con un equipo dedicado a las necesidades especiales de cada paciente, acompañando cada caso de manera integral durante todo el proceso para que el niño pueda llevar una vida plena.",
      services: [
        "Evaluación pre-trasplante y estudios de compatibilidad",
        "Trasplante de donante cadavérico o donante vivo relacionado",
        "Cirugía de implantación renal",
        "Seguimiento post-trasplante y manejo de inmunosupresores"
      ],
    },
    {
      icon: Heart,
      title: "Cardiopatías congénitas",
      description:
        "Las cardiopatías congénitas son defectos cardíacos presentes desde el nacimiento que en su mayoría requieren intervención quirúrgica para su curación. La detección temprana durante la primera semana de vida es fundamental, ya que determina que el niño pueda tener una vida normal y sana. Pasada la primera semana, la intervención se hace más dificultosa, por lo cual es crucial detectar anomalías mediante ecografías durante el embarazo y tras el nacimiento del bebé. La prevención cardiovascular debe iniciarse precozmente en la infancia, tanto en niños con patologías específicas de alto riesgo como en aquellos expuestos a factores preexistentes. Fundación ETHE reúne a profesionales reconocidos mundialmente por su trabajo en cardiopatías congénitas y cirugías, junto a Centros Médicos altamente calificados y un equipo de asistencia personalizada que otorga asistencia médica de calidad, contención emocional a pacientes y familiares, facilitando el acceso al tratamiento.",
      services: [
        "Diagnóstico temprano mediante ecografías especializadas",
        "Cirugías cardíacas pediátricas de alta complejidad",
        "Prevención cardiovascular en la infancia",
        "Profesionales reconocidos mundialmente"
      ],
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-[#5bbaa5] text-white py-16 md:py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 right-20 w-32 h-32 bg-[#ffcb05] opacity-15 rounded-full" />
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-white opacity-10 rounded-full" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <span className="text-sm font-semibold uppercase tracking-wider">Medicina Especializada</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Nuestras especialidades</h1>
            <p className="text-lg md:text-xl text-white/95 leading-relaxed">
              Medicina de alta complejidad especializada en trasplantes y cardiopatías congénitas
            </p>
          </div>
        </div>
      </section>

      {/* Specialties Grid */}
      <section className="py-16 md:py-24 bg-[#f5f7fa]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => {
              const Icon = specialty.icon
              return (
                <Card key={index} className="border-[#5dbfb3] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-[#5dbfb3] to-[#0a4d5c] rounded-xl flex items-center justify-center mb-4">
                      <Icon className="text-white" size={32} />
                    </div>
                    <CardTitle className="text-xl text-[#0a4d5c] mb-3">{specialty.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{specialty.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-[#0a4d5c] mb-3 text-sm">Servicios incluidos:</h4>
                    <ul className="space-y-2">
                      {specialty.services.map((service, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-[#5dbfb3] mt-1 text-lg">•</span>
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

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-[#00334e] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-white/10 rounded-full mb-6">
              <span className="text-sm font-semibold uppercase tracking-wider">Nuestra Misión</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Compromiso con la excelencia médica</h2>
            <p className="text-lg md:text-xl leading-relaxed">
              Promover el desarrollo de la medicina de alta complejidad en el Caribe y Centro América a través de la 
              obtención de recursos públicos y privados, los cuales son destinados a la formación y capacitación de 
              profesionales de todas las especialidades involucradas en este proceso.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[#5bbaa5] font-semibold mb-2 uppercase tracking-wider text-sm">Contáctanos</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#00334e] mb-6">¿Necesitas alguno de estos servicios?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Nuestro equipo de profesionales especializados en medicina de alta complejidad está listo para atenderte. 
            Contáctanos para más información sobre nuestros servicios especializados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#c74a3a] text-white hover:bg-[#b43a2a] shadow-xl">
              <Link href="/contacto">Solicitar información</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-[#00334e] text-[#00334e] hover:bg-[#00334e]/5">
              <Link href="/quienes-somos">Conoce más</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
