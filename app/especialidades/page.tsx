import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function SpecialtiesPage() {
  const specialties = [
    {
      icon: "/Logos_Especialidades/Logo_Higado.png",
      title: "Trasplante hepático",
      slug: "trasplante-hepatico",
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
      icon: "/Logos_Especialidades/Logo_Renal.png",
      title: "Trasplante renal",
      slug: "trasplante-renal",
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
      icon: "/Logos_Especialidades/Logo_Corazon.png",
      title: "Cardiopatías congénitas",
      slug: "cardiopatias",
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
      {/* Hero Section - Deep Tech Immersion */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        {/* 1. CAPA DE IMAGEN DE FONDO */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/Secciones_Iniciales/Especialidades.jpg" 
            alt="Alta Complejidad Médica" 
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 40%" }}
          />
        </div>

        {/* 2. CAPA DE FILTRO (Overlay Azul Oscuro) */}
        <div className="absolute inset-0 bg-[#00334e]/80 mix-blend-multiply z-10" />

        {/* 3. CAPA DE CONTENIDO (Texto Blanco Centrado) */}
        <div className="relative z-20 text-center max-w-4xl px-4">
          {/* Pequeña etiqueta opcional arriba */}
          <span className="inline-block py-1 px-3 rounded-full bg-[#5bbaa5]/20 text-[#5bbaa5] text-sm font-bold tracking-wider uppercase mb-4 backdrop-blur-sm">
            Vanguardia Médica
          </span>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-goudy drop-shadow-lg leading-tight">
            Especialidades de <br/> Alta Complejidad
          </h1>
          
          {/* Línea decorativa verde */}
          <div className="w-20 h-1 bg-[#5bbaa5] mx-auto mb-6 rounded-full"></div>

          <p className="text-white/90 text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
            Líderes en trasplantes, cardiopatías y tratamientos que transforman vidas mediante tecnología y experiencia.
          </p>
        </div>
      </section>

      {/* Specialties Grid */}
      <section className="py-16 md:py-24 bg-[#f5f7fa]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => {
              return (
                <Card key={index} className="flex flex-col border-[#5dbfb3] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-[#5dbfb3] to-[#0a4d5c] rounded-xl flex items-center justify-center mb-4">
                      <Image src={specialty.icon} alt={specialty.title} width={40} height={40} className="w-10 h-10" />
                    </div>
                    <CardTitle className="text-xl text-[#0a4d5c] mb-3">{specialty.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{specialty.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow">
                    <div className="mt-auto pt-6">
                      <Link href={`/especialidades/${specialty.slug}`} passHref>
                        <Button className="w-full bg-[#00334e] hover:bg-[#002233]">
                          Conocer más
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

    </div>
  )
}
