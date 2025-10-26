import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { HelpCircle, MessageCircle } from "lucide-react"

export default function FAQPage() {
  const faqCategories = [
    {
      category: "Servicios Generales",
      questions: [
        {
          question: "¿Qué servicios ofrece la Fundación ETHE?",
          answer:
            "Ofrecemos una amplia gama de servicios que incluyen atención médica, apoyo psicológico, asesoría legal, trabajo social, apoyo educativo, orientación laboral, y más. Puedes ver la lista completa en nuestra página de Especialidades.",
        },
        {
          question: "¿Los servicios tienen algún costo?",
          answer:
            "La mayoría de nuestros servicios son gratuitos o tienen un costo mínimo basado en la capacidad económica de cada familia. Realizamos una evaluación socioeconómica para determinar el aporte que cada persona puede realizar.",
        },
        {
          question: "¿Quiénes pueden acceder a los servicios?",
          answer:
            "Nuestros servicios están dirigidos principalmente a personas y familias en situación de vulnerabilidad social. Sin embargo, evaluamos cada caso de manera individual para determinar la mejor forma de ayudar.",
        },
        {
          question: "¿Necesito algún documento especial para solicitar atención?",
          answer:
            "Para la primera consulta, te recomendamos traer tu DNI y cualquier documentación médica o social relevante que tengas. Si no cuentas con documentación, igual podemos atenderte y ayudarte a gestionarla.",
        },
      ],
    },
    {
      category: "Atención Médica",
      questions: [
        {
          question: "¿Cómo puedo agendar una consulta médica?",
          answer:
            "Puedes agendar una consulta llamando a nuestro número de teléfono, enviando un correo electrónico, o acercándote personalmente a nuestras oficinas. También puedes completar el formulario de contacto en nuestra página web.",
        },
        {
          question: "¿Qué especialidades médicas están disponibles?",
          answer:
            "Contamos con medicina general, cardiología, pediatría, y nutrición. Para otras especialidades, podemos derivarte a profesionales de nuestra red de colaboradores.",
        },
        {
          question: "¿Puedo obtener medicamentos en la fundación?",
          answer:
            "Sí, contamos con una farmacia social donde puedes acceder a medicamentos esenciales a precios muy accesibles o de forma gratuita según tu situación económica.",
        },
      ],
    },
    {
      category: "Apoyo Social y Legal",
      questions: [
        {
          question: "¿Qué tipo de asesoría legal ofrecen?",
          answer:
            "Ofrecemos orientación en derecho civil, familiar y laboral. Esto incluye temas como divorcios, tenencia de hijos, violencia familiar, despidos laborales, y trámites administrativos diversos.",
        },
        {
          question: "¿Pueden ayudarme con trámites de documentación?",
          answer:
            "Sí, nuestro equipo de trabajo social puede asistirte en la gestión de DNI, certificados de nacimiento, defunción, y otros documentos oficiales. También te orientamos en trámites de subsidios y programas sociales.",
        },
        {
          question: "¿Ofrecen apoyo económico directo?",
          answer:
            "Si bien no entregamos dinero en efectivo, contamos con programas de asistencia que incluyen alimentos, medicamentos, útiles escolares, y apoyo para necesidades específicas según disponibilidad y evaluación de cada caso.",
        },
      ],
    },
    {
      category: "Horarios y Ubicación",
      questions: [
        {
          question: "¿Cuál es el horario de atención?",
          answer:
            "Nuestro horario de atención es de lunes a viernes de 8:00 a 18:00 horas. Algunos servicios específicos tienen horarios particulares que puedes consultar al momento de agendar tu cita.",
        },
        {
          question: "¿Dónde están ubicadas las oficinas?",
          answer:
            "Estamos ubicados en Buenos Aires, Argentina. Puedes encontrar nuestra dirección exacta en la sección de Contacto de nuestra página web, junto con un mapa de ubicación.",
        },
        {
          question: "¿Atienden urgencias?",
          answer:
            "Para urgencias médicas, te recomendamos acudir al hospital más cercano o llamar al servicio de emergencias. Nuestra fundación ofrece atención programada y seguimiento de casos, no servicios de urgencia.",
        },
      ],
    },
    {
      category: "Voluntariado y Donaciones",
      questions: [
        {
          question: "¿Cómo puedo ser voluntario en la fundación?",
          answer:
            "Siempre estamos buscando personas comprometidas que quieran colaborar. Puedes contactarnos a través de nuestro formulario de contacto indicando tu interés en ser voluntario, tus habilidades y disponibilidad horaria.",
        },
        {
          question: "¿Aceptan donaciones?",
          answer:
            "Sí, aceptamos donaciones de dinero, medicamentos, alimentos no perecederos, ropa, útiles escolares y otros elementos que puedan ser útiles para nuestra comunidad. Contáctanos para coordinar tu donación.",
        },
        {
          question: "¿Cómo puedo saber que mi donación se usa correctamente?",
          answer:
            "Publicamos informes anuales de transparencia donde detallamos el uso de los recursos. Además, puedes solicitar información específica sobre nuestros programas y el destino de las donaciones.",
        },
      ],
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0a4d5c] to-[#5dbfb3] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <HelpCircle className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Preguntas Frecuentes</h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Encuentra respuestas a las preguntas más comunes sobre nuestros servicios y funcionamiento
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqCategories.map((category, index) => (
              <div key={index}>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0a4d5c] mb-6">{category.category}</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((item, idx) => (
                    <AccordionItem
                      key={idx}
                      value={`item-${index}-${idx}`}
                      className="border border-[#5dbfb3] rounded-lg px-6 data-[state=open]:bg-[#f5f5f5]"
                    >
                      <AccordionTrigger className="text-left text-[#0a4d5c] hover:text-[#5dbfb3] font-semibold">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 leading-relaxed pt-2">{item.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 md:py-24 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto border-[#5dbfb3]">
            <CardContent className="p-8 md:p-12 text-center">
              <MessageCircle className="w-16 h-16 text-[#5dbfb3] mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a4d5c] mb-4">¿No Encontraste tu Respuesta?</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Si tienes alguna pregunta que no está en esta lista, no dudes en contactarnos. Nuestro equipo estará
                encantado de ayudarte.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-[#0a4d5c] hover:bg-[#0a4d5c]/90">
                  <Link href="/contacto">Contáctanos</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-[#0a4d5c] text-[#0a4d5c] bg-transparent">
                  <Link href="/especialidades">Ver Servicios</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
