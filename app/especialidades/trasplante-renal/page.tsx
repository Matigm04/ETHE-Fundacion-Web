import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Award, Dna, FileDown, HeartHandshake, HelpCircle, MessageSquareQuote, Scale, Stethoscope, Syringe, Users } from "lucide-react";
import Link from "next/link";

const TrasplanteRenalPage = () => {
  const timelineSteps = [
    {
      title: "Donante (Vivo o Cadavérico)",
      description: "El riñón puede provenir de la lista de espera nacional (INCUCAI) o de un familiar directo (donante vivo). Esta última opción permite programar la cirugía y acortar tiempos.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "El Implante",
      description: "El nuevo riñón se coloca en la parte baja del abdomen (fosa ilíaca). A diferencia de otros trasplantes, los riñones propios generalmente no se extraen a menos que causen problemas.",
      icon: <Stethoscope className="h-6 w-6" />,
    },
    {
      title: "La Conexión",
      description: "El cirujano une la arteria y vena del nuevo riñón a los vasos sanguíneos del receptor. Luego, conecta el uréter a la vejiga para permitir que la orina fluya correctamente.",
      icon: <Syringe className="h-6 w-6" />,
    },
    {
      title: "Recuperación",
      description: "La cirugía dura aproximadamente 3 horas. La internación varía entre 5 y 14 días con cuidados especiales de aislamiento inicial, dependiendo de la evolución clínica y el inicio de la función del injerto.",
      icon: <Award className="h-6 w-6" />,
    },
  ];

  const accordionItems = [
    {
      question: "Medicación Inmunosupresora (De por vida)",
      answer: "Es fundamental tomar la medicación para evitar que el cuerpo rechace el nuevo órgano. El tratamiento es de por vida y requiere un compromiso estricto con los horarios y dosis indicadas por el equipo médico.",
    },
    {
      question: "Dieta: Más libertad, menos sal",
      answer: "Tras el trasplante, la dieta es mucho más libre que en diálisis. Se recomienda una alimentación saludable, baja en sal para controlar la presión arterial y el cuidado del peso corporal.",
    },
    {
      question: "Ventajas del Donante Vivo",
      answer: "Permite realizar el trasplante antes de llegar a diálisis o acortar el tiempo en ella. Ofrece mejores resultados a largo plazo y la posibilidad de planificar la cirugía en el mejor momento clínico.",
    },
    {
      question: "¿Qué pasa si el riñón falla a futuro?",
      answer: "Si el injerto deja de funcionar, el paciente puede volver a diálisis y, si su condición lo permite, evaluarse nuevamente para un segundo trasplante renal.",
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-[#00334e] text-white py-20 sm:py-32 overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Trasplante Renal
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            Recuperando la libertad y la calidad de vida lejos de la diálisis.
          </p>
        </div>
        <Activity className="absolute -bottom-1/4 -right-16 text-white/5 h-[500px] w-[500px] rotate-12" />
      </section>

      {/* Call to Action Section */}
      <section className="bg-[#f5f7fa] py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <Link
              href="/testimonios?categoria=trasplante-renal"
              className="group"
            >
              <div className="bg-white hover:bg-[#5bbaa5]/10 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
                <MessageSquareQuote className="h-8 w-8 mx-auto text-[#5bbaa5] mb-2" />
                <h3 className="text-lg font-semibold text-[#00334e]">
                  Testimonios
                </h3>
              </div>
            </Link>
            <Link
              href="/faq/trasplante-renal"
              className="group"
            >
              <div className="bg-white hover:bg-[#5bbaa5]/10 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
                <HelpCircle className="h-8 w-8 mx-auto text-[#5bbaa5] mb-2" />
                <h3 className="text-lg font-semibold text-[#00334e]">
                  Preguntas Frecuentes
                </h3>
              </div>
            </Link>
            <Link
              href="/documentos#trasplante-renal"
              className="group"
            >
              <div className="bg-white hover:bg-[#5bbaa5]/10 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
                <FileDown className="h-8 w-8 mx-auto text-[#5bbaa5] mb-2" />
                <h3 className="text-lg font-semibold text-[#00334e]">
                  Descargar Documentos
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Grid de Diagnóstico Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#00334e]">
            Diagnóstico y Evaluación
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-gray-600">
            El camino hacia el trasplante comienza con un diagnóstico preciso y una evaluación integral.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                title: "Insuficiencia Renal Crónica", 
                description: "Es cuando los riñones pierden su capacidad de filtrar. El trasplante recupera la función natural mejor que la diálisis.",
                icon: <Activity className="h-6 w-6 text-[#5bbaa5]" />
              },
              { 
                title: "¿Diálisis o Trasplante?", 
                description: "El trasplante ofrece mayor libertad, menos restricciones dietéticas y una sensación de sentirse sano y normal nuevamente.",
                icon: <Scale className="h-6 w-6 text-[#5bbaa5]" />
              },
              { 
                title: "Evaluación Completa", 
                description: "Estudios de sangre, imagen y cardíacos para asegurar que tu cuerpo está listo para la intervención.",
                icon: <Stethoscope className="h-6 w-6 text-[#5bbaa5]" />
              },
              { 
                title: "Compatibilidad", 
                description: "Analizamos Grupo Sanguíneo y sistema HLA. El Cross-Match final confirma que tu cuerpo aceptará el órgano.",
                icon: <Dna className="h-6 w-6 text-[#5bbaa5]" />
              },
            ].map((item) => (
              <Card key={item.title} className="shadow-lg border-t-4 border-[#5bbaa5] hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-[#f0f9f6] p-2 rounded-full">
                    {item.icon}
                  </div>
                  <CardTitle className="text-[#00334e] text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section (El Procedimiento) */}
      <section className="bg-[#00334e] text-white py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center">El Procedimiento</h2>
          <p className="mt-4 max-w-2xl mx-auto text-center text-gray-300">
            Paso a paso hacia una nueva vida.
          </p>
          <div className="relative mt-16 max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-600" aria-hidden="true"></div>
            <div className="space-y-12">
              {timelineSteps.map((step, index) => (
                <div key={index} className="relative flex items-center">
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left order-2'}`}>
                    <h3 className="text-xl font-bold text-[#5bbaa5]">{step.title}</h3>
                    <p className="mt-2 text-gray-300">{step.description}</p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-[#cfa46c] rounded-full h-12 w-12 flex items-center justify-center text-[#00334e]">
                      {step.icon}
                    </div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sección Split (Una nueva etapa) */}
      <section className="bg-[#f5f7fa] py-16 sm:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <HeartHandshake className="mx-auto md:mx-0 h-16 w-16 text-[#c74a3a]" />
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[#00334e]">
              Una nueva etapa
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              El trasplante no es una cura, es un tratamiento que requiere compromiso, pero que devuelve la vida.
            </p>
          </div>
          <div>
            <Accordion type="single" collapsible className="w-full">
              {accordionItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index + 1}`}>
                  <AccordionTrigger className="text-lg font-semibold text-left text-[#00334e]">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-base text-gray-700">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrasplanteRenalPage;