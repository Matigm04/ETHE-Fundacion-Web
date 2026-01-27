import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Apple, Baby, FileDown, Heart, HeartPulse, HelpCircle, MessageSquareQuote, Monitor, ShieldCheck, Stethoscope, Users } from "lucide-react";
import Link from "next/link";

const CardiopatiasPage = () => {
  const timelineSteps = [
    {
      title: "Etapa Prenatal",
      description: "La detección temprana comienza antes del nacimiento. Factores como prematurez, bajo peso o diabetes gestacional requieren un seguimiento cardiológico especializado.",
      icon: <Baby className="h-6 w-6" />,
    },
    {
      title: "Primer Año de Vida",
      description: "Un periodo crítico para el desarrollo. La lactancia materna actúa como factor protector y el control estricto del crecimiento permite detectar anomalías a tiempo.",
      icon: <HeartPulse className="h-6 w-6" />,
    },
    {
      title: "Niñez y Adolescencia",
      description: "El desafío es mantener un corazón sano frente a riesgos como el sedentarismo, la obesidad, el tabaquismo y la hipertensión. El deporte y la actividad física son pilares fundamentales.",
      icon: <Activity className="h-6 w-6" />,
    },
  ];

  const accordionItems = [
    {
      question: "Alimentación: Menos azúcar, más frutas",
      answer: "Se recomienda realizar 4 comidas diarias, evitar el consumo de bebidas azucaradas y controlar el tamaño de las porciones. Incorporar frutas y verduras es esencial para la salud cardiovascular.",
    },
    {
      question: "Actividad Física y Pantallas",
      answer: "Limitar el uso de pantallas a un máximo de 2 horas diarias y evitar tener televisión en el cuarto. Es vital fomentar el juego activo y el deporte recreativo.",
    },
    {
      question: "Controles de Tensión Arterial",
      answer: "La hipertensión en niños suele ser asintomática. Es fundamental medir la presión arterial en los controles pediátricos para detectar y tratar cualquier alteración a tiempo.",
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[350px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#c74a3a] to-[#a63d30]">
        
        {/* PATRÓN DE FONDO SUTIL */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

        {/* CONTENIDO */}
        <div className="relative z-20 container mx-auto px-4 text-center">
          
          {/* Icono Grande Flotante */}
          <div className="mx-auto w-32 h-32 flex items-center justify-center mb-6 rounded-full bg-white/20 p-6 shadow-2xl backdrop-blur-sm">
            <img 
              src="/Logos_Especialidades/Logo_Corazon.png" 
              alt="Icono Corazón" 
              className="w-full h-full object-contain drop-shadow-lg filter brightness-0 invert"
            />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 font-goudy drop-shadow-sm">
            Cardiopatías Congénitas
          </h1>
          
          <p className="text-white/80 text-xl font-light max-w-2xl mx-auto">
            Cuidando el corazón de los más pequeños desde el primer latido.
          </p>

        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-[#f5f7fa] py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <Link
              href="/testimonios?categoria=cardiopatias"
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
              href="/faq/cardiopatias-congenitas"
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
              href="/documentos#cardiopatias"
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

      {/* Grid Informativo Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#00334e]">
            Abordaje Integral
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-gray-600">
            Un enfoque multidisciplinario para garantizar la mejor calidad de vida.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Intervención Quirúrgica", 
                description: "La mayoría requiere corrección. Planificamos la técnica ideal para cada caso.",
                icon: <Stethoscope className="h-6 w-6 text-[#5bbaa5]" />
              },
              { 
                title: "Trabajo en Equipo", 
                description: "Cardiólogos y Cirujanos discuten cada caso en sesiones conjuntas para decidir el mejor tratamiento.",
                icon: <Users className="h-6 w-6 text-[#5bbaa5]" />
              },
              { 
                title: "Prevención Temprana", 
                description: "Actuar en la infancia es clave para evitar enfermedades cardiovasculares en la adultez.",
                icon: <ShieldCheck className="h-6 w-6 text-[#5bbaa5]" />
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

      {/* Timeline Section (Etapas de la Niñez) */}
      <section className="bg-[#00334e] text-white py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Cuidado en Cada Etapa</h2>
          <p className="mt-4 max-w-2xl mx-auto text-center text-gray-300">
            Acompañando el crecimiento y desarrollo cardiovascular.
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

      {/* Sección Split (Hábitos que salvan vidas) */}
      <section className="bg-[#f5f7fa] py-16 sm:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <Apple className="mx-auto md:mx-0 h-16 w-16 text-[#c74a3a]" />
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[#00334e]">
              Hábitos que salvan vidas
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              La prevención empieza en casa con pequeños cambios diarios.
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

export default CardiopatiasPage;