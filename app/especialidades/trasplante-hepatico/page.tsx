
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Award, Circle, Download, FileDown, HeartHandshake, HelpCircle, MessageSquareQuote, Stethoscope, Syringe, Users } from "lucide-react";
import Link from "next/link";

const TrasplanteHepaticoPage = () => {
  const timelineSteps = [
    {
      title: "Donante (Vivo vs Cadavérico)",
      description: "El órgano proviene de un donante cadavérico o de una persona sana (donante vivo) que cede una parte de su hígado. El hígado tiene una gran capacidad de regeneración en ambos individuos.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Fase Pre-Anhepática",
      description: "Comienza con la incisión abdominal para aislar el hígado enfermo. Se seccionan sus fijaciones y se disecan los vasos sanguíneos principales (vena cava, vena porta) y la vía biliar.",
      icon: <Stethoscope className="h-6 w-6" />,
    },
    {
      title: "Fase Anhepática",
      description: "Se pinzan los vasos sanguíneos, se extrae el hígado enfermo y se implanta el nuevo órgano, conectando las venas principales del donante y el receptor para restaurar el flujo.",
      icon: <Syringe className="h-6 w-6" />,
    },
    {
      title: "Fase Post-Anhepática",
      description: "Se restablece la circulación sanguínea al nuevo hígado (reperfusión) y se conectan la arteria hepática y la vía biliar. Es una fase crítica de estabilización hemodinámica.",
      icon: <Award className="h-6 w-6" />,
    },
  ];

  const faqItems = [
    {
      question: "¿Toda persona fallecida puede ser donante de órganos?",
      answer: "La donación depende de las características del fallecimiento. Para donar órganos, la persona debe morir en la terapia intensiva de un hospital, lo que permite mantener el cuerpo artificialmente hasta la extracción.",
    },
    {
      question: "¿Se pueden donar órganos en vida?",
      answer: "Sí. Ante una necesidad extrema y la falta de donantes cadavéricos, se plantea la posibilidad del donante vivo, debiendo existir un vínculo familiar según la ley. Esta alternativa se aplica principalmente a trasplantes renales y hepáticos.",
    },
    {
      question: "¿Cómo se distribuyen los órganos donados?",
      answer: "Existe una lista de espera única en todo el país, controlada por el INCUCAI. La asignación se basa en criterios médicos objetivos como la urgencia, compatibilidad y tiempo en lista, asegurando la equidad.",
    },
    {
      question: "¿Una persona con tatuajes puede donar?",
      answer: "Sí, siempre que haya transcurrido un tiempo prudencial desde que se hizo el tatuaje y se descarte cualquier enfermedad infectocontagiosa.",
    },
     {
      question: "¿Cuál es la posición de las religiones?",
      answer: "La mayoría de las religiones apoyan la donación de órganos como un acto de solidaridad. La religión católica, por ejemplo, lo considera un acto de caridad supremo.",
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[350px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#5bbaa5] to-[#3a8e7b]">
        
        {/* PATRÓN DE FONDO SUTIL */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

        {/* CONTENIDO */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          
          {/* Icono Grande Flotante */}
          <div className="mx-auto w-32 h-32 flex items-center justify-center mb-6 rounded-full bg-white/20 p-6 shadow-2xl backdrop-blur-sm">
            <img 
              src="/Logos_Especialidades/Logo_Higado.png" 
              alt="Icono Hígado" 
              className="w-full h-full object-contain drop-shadow-lg filter brightness-0 invert"
            />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 font-goudy drop-shadow-sm">
            Trasplante Hepático
          </h1>
          
          <p className="text-white/80 text-xl font-light max-w-2xl mx-auto">
            Una segunda oportunidad de vida a través de la ciencia y la generosidad.
          </p>

        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-[#f5f7fa] py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <Link
              href="/testimonios?categoria=trasplante-hepatico"
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
              href="/faq/trasplante-hepatico"
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
              href="/documentos#trasplante-hepatico"
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

      {/* Indicaciones y Evaluación Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#00334e]">
            Indicaciones y Evaluación
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-gray-600">
            El trasplante está indicado en la insuficiencia hepática aguda o crónica irreversible. La decisión se basa en signos clínicos como ictericia, ascitis y encefalopatía, y se prioriza usando el score MELD/PELD, que mide la probabilidad de mortalidad a tres meses para ordenar la lista de espera.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Cirrosis Hepática", description: "Es la causa más frecuente. El tejido hepático es reemplazado por cicatrices debido a hepatitis viral, alcoholismo o enfermedad autoinmune, impidiendo su función." },
              { title: "Insuficiencia Hepática Aguda", description: "Pérdida brusca de la función hepática en una persona sin enfermedad previa, causada por virus (Hepatitis A), toxinas o fármacos. Es una emergencia médica." },
              { title: "Tumores Hepáticos", description: "Principalmente el hepatocarcinoma en adultos y el hepatoblastoma en niños. El trasplante es una opción curativa cuando el tumor no puede ser resecado." },
              { title: "Defectos Genéticos", description: "Enfermedades metabólicas hereditarias (ej. Enfermedad de Wilson) que causan daño hepático progresivo y corrigen el defecto en otros órganos tras el trasplante." },
            ].map((item) => (
              <Card key={item.title} className="shadow-lg border-t-4 border-[#5bbaa5] hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-[#00334e]">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* El Procedimiento Section */}
      <section className="bg-[#00334e] text-white py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center">El Procedimiento Quirúrgico</h2>
          <p className="mt-4 max-w-2xl mx-auto text-center text-gray-300">
            Un viaje complejo y meticulosamente orquestado, dividido en fases clave.
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
        
        {/* Variantes Quirúrgicas Sub-section */}
        <div className="container mx-auto px-4 mt-20">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-white mb-10">
                Técnicas y Variantes Quirúrgicas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    { title: "Cirugía de Banco", description: "Procedimiento paralelo donde se prepara el hígado donado, limpiando tejidos y preparando los vasos sanguíneos para el implante." },
                    { title: "Técnica 'Piggy-back'", description: "Consiste en preservar la vena cava del receptor, lo que aporta mayor estabilidad hemodinámica y evita la necesidad de un bypass veno-venoso." },
                    { title: "Donante Vivo Relacionado", description: "Un familiar dona un segmento de su hígado. Es una técnica clave para resolver la escasez de órganos, especialmente en pediatría." },
                    { title: "Bipartición Hepática (Split)", description: "Un solo hígado de donante cadavérico se divide para ser implantado en dos receptores, usualmente un adulto y un niño." },
                    { title: "Trasplante Dominó", description: "El hígado de un paciente con una enfermedad metabólica (ej. polineuropatía amiloidótica) se dona a otro receptor, ya que el órgano es funcionalmente sano para otros usos." },
                    { title: "Injertos Vasculares", description: "Se utilizan segmentos de arterias o venas para reconstruir los vasos del receptor cuando estos están dañados o trombosados." },
                ].map(variant => (
                    <div key={variant.title} className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                        <h4 className="font-bold text-lg text-[#5bbaa5]">{variant.title}</h4>
                        <p className="mt-2 text-gray-300 text-sm">{variant.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Ser Donante Section */}
      <section className="bg-[#f5f7fa] py-16 sm:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <HeartHandshake className="mx-auto md:mx-0 h-16 w-16 text-[#c74a3a]" />
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[#00334e]">
              Ser Donante es Donar Vida
            </h2>
            <p className="mt-4 text-lg text-gray-600">
             Miles de vidas dependen de un trasplante para seguir viviendo. La donación de órganos es un acto de generosidad que permite que cientos de personas recuperen su salud. Sencillamente, todo aquel que generosamente quiera donar en vida, a aquellos que aguardan un trasplante como única y última posibilidad de vida. (Gentileza: INCUCAI ARGENTINA)
            </p>
          </div>
          <div>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
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

export default TrasplanteHepaticoPage;
