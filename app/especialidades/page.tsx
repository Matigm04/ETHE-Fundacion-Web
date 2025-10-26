import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Heart,
  Stethoscope,
  Brain,
  Users,
  FileText,
  Scale,
  GraduationCap,
  Home,
  Briefcase,
  Baby,
  Pill,
  Activity,
} from "lucide-react"

export default function SpecialtiesPage() {
  const specialties = [
    {
      icon: Stethoscope,
      title: "Medicina General",
      description:
        "Atención médica integral para toda la familia. Consultas, diagnósticos y tratamientos de enfermedades comunes.",
      services: ["Consultas médicas", "Control de salud", "Diagnóstico y tratamiento", "Recetas médicas"],
    },
    {
      icon: Heart,
      title: "Cardiología",
      description:
        "Especialistas en salud cardiovascular. Prevención, diagnóstico y tratamiento de enfermedades del corazón.",
      services: [
        "Electrocardiogramas",
        "Control de presión arterial",
        "Prevención cardiovascular",
        "Seguimiento de pacientes",
      ],
    },
    {
      icon: Brain,
      title: "Psicología Clínica",
      description:
        "Apoyo emocional y terapia profesional para niños, adolescentes y adultos. Atención individual y familiar.",
      services: ["Terapia individual", "Terapia familiar", "Orientación psicológica", "Manejo de crisis"],
    },
    {
      icon: Users,
      title: "Trabajo Social",
      description:
        "Programas de asistencia social y desarrollo comunitario. Apoyo integral para familias en situación de vulnerabilidad.",
      services: ["Evaluación socioeconómica", "Programas de asistencia", "Orientación familiar", "Gestión de recursos"],
    },
    {
      icon: Scale,
      title: "Asesoría Legal",
      description:
        "Orientación jurídica en derecho civil, familiar y laboral. Asistencia en trámites administrativos y legales.",
      services: ["Consultas jurídicas", "Derecho familiar", "Derecho laboral", "Trámites administrativos"],
    },
    {
      icon: FileText,
      title: "Gestión Documental",
      description: "Ayuda en la obtención y gestión de documentos oficiales. Asesoramiento en trámites burocráticos.",
      services: ["Tramitación de DNI", "Certificados oficiales", "Documentación legal", "Asesoramiento en trámites"],
    },
    {
      icon: GraduationCap,
      title: "Apoyo Educativo",
      description:
        "Programas de refuerzo escolar y orientación educativa. Becas y apoyo para estudiantes en situación vulnerable.",
      services: ["Refuerzo escolar", "Orientación vocacional", "Gestión de becas", "Apoyo a estudiantes"],
    },
    {
      icon: Home,
      title: "Asistencia Habitacional",
      description:
        "Orientación y apoyo en temas de vivienda. Programas de mejoramiento habitacional y acceso a vivienda digna.",
      services: [
        "Asesoramiento habitacional",
        "Programas de vivienda",
        "Mejoramiento del hogar",
        "Gestión de subsidios",
      ],
    },
    {
      icon: Briefcase,
      title: "Orientación Laboral",
      description:
        "Apoyo en la búsqueda de empleo y desarrollo profesional. Talleres de capacitación y orientación vocacional.",
      services: ["Búsqueda de empleo", "Capacitación laboral", "Orientación profesional", "Talleres de habilidades"],
    },
    {
      icon: Baby,
      title: "Pediatría",
      description:
        "Atención médica especializada para niños y adolescentes. Control de crecimiento y desarrollo infantil.",
      services: ["Control del niño sano", "Vacunación", "Diagnóstico pediátrico", "Orientación a padres"],
    },
    {
      icon: Pill,
      title: "Farmacia Social",
      description:
        "Acceso a medicamentos esenciales a precios accesibles. Orientación sobre uso correcto de medicamentos.",
      services: [
        "Dispensación de medicamentos",
        "Orientación farmacéutica",
        "Programas de medicación",
        "Seguimiento farmacológico",
      ],
    },
    {
      icon: Activity,
      title: "Nutrición",
      description:
        "Asesoramiento nutricional personalizado. Programas de alimentación saludable y prevención de enfermedades.",
      services: ["Consultas nutricionales", "Planes alimentarios", "Educación nutricional", "Seguimiento nutricional"],
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0a4d5c] to-[#5dbfb3] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Nuestras Especialidades</h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Ofrecemos una amplia gama de servicios profesionales para atender las necesidades de nuestra comunidad
            </p>
          </div>
        </div>
      </section>

      {/* Specialties Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => {
              const Icon = specialty.icon
              return (
                <Card key={index} className="border-[#5dbfb3] hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-14 h-14 bg-[#5dbfb3] rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-white" size={28} />
                    </div>
                    <CardTitle className="text-xl text-[#0a4d5c]">{specialty.title}</CardTitle>
                    <CardDescription className="text-base">{specialty.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-[#0a4d5c] mb-3 text-sm">Servicios incluidos:</h4>
                    <ul className="space-y-2">
                      {specialty.services.map((service, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-[#5dbfb3] mt-1">•</span>
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

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-[#f5f5f5]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a4d5c] mb-6">¿Necesitas Alguno de Estos Servicios?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Nuestro equipo de profesionales está listo para atenderte. Contáctanos para más información o para agendar
            una cita.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#0a4d5c] hover:bg-[#0a4d5c]/90">
              <Link href="/contacto">Solicitar Información</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-[#0a4d5c] text-[#0a4d5c] bg-transparent">
              <Link href="/faq">Preguntas Frecuentes</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
