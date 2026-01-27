import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Link from "next/link";

export default function FaqTrasplanteHepaticoPage() {
  const faqItems = [
    {
      question: "¿Por qué es de importancia la función del hígado en la nutrición?",
      answer: "El hígado reconstruye, almacena proteínas y carbohidratos para ser usados por las células. El hígado también permite el almacenamiento de azúcares y vitaminas, filtra medicamentos, alcohol, drogas y productos de desecho del cuerpo. El hígado produce importantes proteínas."
    },
    {
      question: "¿Qué síntomas aparecen cuando el hígado falla?",
      answer: (
        <div className="space-y-4">
          <p>Cuando el paciente se encuentra en un estadio terminal, varias cosas pueden empezar a ir mal. En el caso de los niños el crecimiento se detiene. En niños o adultos, se produce acumulación de líquidos en el abdomen, es decir, ascitis. La ascitis ocasiona dificultades respiratorias y los líquidos retenidos pueden llegar a infectarse. La actividad mental y el pensamiento pueden debilitarse o deteriorarse («encefalopatía»). La encefalopatía se manifiesta al principio mediante una desorientación leve, evoluciona hacia una continua somnolencia o modorra y al final puede acabar en una completa desconexión del entorno y de la realidad, con falta de sensibilidad y de interés hacia todo por parte del sujeto, lo que puede ser preámbulo de una situación comatosa. A causa de la hipertensión portal, puede darse sangrado en el tracto intestinal.</p>
          <p>Cuando la enfermedad hepática se encuentra en un estado inicial, todos los problemas apuntados pueden controlarse aceptablemente por medio de diversas medicinas. Pero, una vez que la enfermedad progresa y se llega al estadio terminal, los medicamentos ya no suponen ninguna ayuda y el trasplante hepático se hace imprescindible.</p>
        </div>
      )
    },
    {
      question: "Si creo que tengo un problema de hígado ¿a quién debo recurrir?",
      answer: "Preferentemente a un médico gastroenterólogo o un hepatólogo (especialista en hígado)"
    },
    {
      question: "¿Cuándo es necesario un trasplante de órganos?",
      answer: "En determinadas circunstancias, en general como consecuencia de enfermedades o accidentes, es posible perder la capacidad habitual que tienen los órganos de realizar funciones básicas para la vida. Las indicaciones más frecuentes para un trasplante hepático son: Cirrosis descompensada secundaria a hepatitis B, hepatitis C, enfermedades autoinmunes, metabólicas, hereditarias, atresia de vías biliares, cirrosis alcohólica; Falla hepática fulminante y subfulminante; Tumores hepáticos irresecables; Errores congénitos del metabolismo: hiperlipoproteinemia homozigota tipo II, deficiencia del ciclo de la urea, deficiencia de la proteína C."
    },
    {
      question: "¿Sólo puede hacerse un trasplante de un órgano proveniente de un donante cadavérico?",
      answer: "No. El trasplante hepático se puede realizar con donante cadavérico, donante vivo relacionado o mediante técnica de partición hepática (un solo hígado cadavérico se utiliza en dos pacientes) o técnica de reducción hepática (un segmento de órgano adulto se implanta en un receptor pediátrico)."
    },
    {
      question: "¿Cuánto es el tiempo promedio de espera para lograr un trasplante?",
      answer: "No hay un tiempo establecido, dado que cada paciente demanda un órgano o tejido con características específicas. Cada persona que se convierte en donante real tiene determinadas características propias. El tiempo de espera depende entonces de la aparición del donante más apropiado para cada paciente a partir de las coincidencias entre ambos, lapso que puede demorar días, meses o años pero mientras antes comiences los preparativos mejor."
    },
    {
      question: "¿Se puede llevar una vida normal luego del trasplante?",
      answer: "A fin de evitar el rechazo del organismo hacia el órgano implantado, el paciente debe recibir medicamentos para atenuar la respuesta del sistema inmune, mecanismo que tiende a destruir a todo agente extraño. El seguimiento estricto de la medicación es vital, así como los cuidados higiénico-dietéticos. Durante los primeros meses posteriores al trasplante, se requiere una relación estrecha con el médico tratante a través de exámenes y revisiones periódicas. Sin embargo, en términos generales, la reintegración a la vida cotidiana es completa, incluso es posible hacer actividad física. El médico tratante informa de las precauciones necesarias en cada caso concreto."
    },
    {
      question: "¿Cómo se determina la compatibilidad entre donante y receptor?",
      answer: (
        <div className="space-y-2">
          <p>La compatibilidad viene determinada por diferentes valores:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Grupo sanguíneo:</strong> el paciente debe recibir un órgano con grupo sanguíneo compatible, igual que si se tratara de una transfusión sanguínea.</li>
            <li><strong>Sistema de histocompatibilidad (HLA):</strong> comprende un conjunto de proteínas que existen en la superficie de ciertas células del organismo. Cuanto más parecidos sean donante y receptor, existirá menor posibilidad de rechazo hacia el órgano implantado.</li>
            <li><strong>Factores físicos:</strong> se intenta encontrar receptores con similitud de peso y edad con el donante, para no causar desproporciones físicas entre ambos.</li>
          </ul>
        </div>
      )
    },
    {
      question: "¿Qué tengo que hacer para reservar para mi operación?",
      answer: "Realizar todos los exámenes médicos que su doctor de confianza le recomiende y en caso de elegir Fundación Ethe completar el formulario on line con sus datos."
    }
  ];

  return (
    <div className="min-h-screen bg-[#f5f7fa]">
      {/* Nuevo Header Hero */}
      <section className="relative h-[250px] flex items-center justify-center overflow-hidden bg-gradient-to-r from-[#5bbaa5] to-[#3a8e7b]">
        
        {/* Decoración de fondo abstracta */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          
          {/* ETIQUETA SUPERIOR */}
          <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block uppercase tracking-wider backdrop-blur-md border border-white/20">
            Preguntas Frecuentes
          </span>
          
          {/* TÍTULO */}
          <h1 className="text-4xl md:text-5xl font-bold text-white font-goudy drop-shadow-sm">
            Trasplante Hepático
          </h1>
        </div>
      </section>

      {/* Contenedor Principal */}
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        
        <p className="text-gray-500 italic mb-6">
          Información gentileza de INCUCAI
        </p>

        {/* Lista de Acordeones */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white rounded-lg shadow-sm border-l-4 border-l-[#00334e] border-t-0 border-r-0 border-b-0 px-0 overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 text-gray-800 font-bold hover:no-underline hover:bg-gray-50 transition-colors text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="bg-gray-50 px-6 py-4 text-gray-600 text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Información Adicional INCUCAI */}
        <div className="mt-12 bg-white rounded-lg p-8 shadow-sm border border-gray-200">
          <h3 className="text-lg font-bold text-[#00334e] mb-4">
            Atención al Paciente - INCUCAI
          </h3>
          <p className="text-gray-600 mb-4">
            El INCUCAI cuenta con un Área de Atención al Paciente. El objetivo principal es brindar información y establecer un vínculo con la comunidad de pacientes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 text-sm">
            <div className="flex items-center gap-2 text-gray-700">
              <span className="font-semibold">Teléfono gratuito:</span>
              <a href="tel:08005554628" className="text-[#5bbaa5] hover:underline">0800 555 4628</a>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <span className="font-semibold">Email:</span>
              <a href="mailto:pacientes@incucai.gov.ar" className="text-[#5bbaa5] hover:underline">pacientes@incucai.gov.ar</a>
            </div>
          </div>
        </div>

        {/* Caja de '¿Sigues con dudas?' */}
        <div className="mt-8 bg-[#00334e] text-white rounded-lg p-8 text-center shadow-md">
          <h3 className="text-xl font-semibold mb-2">
            ¿No encontraste lo que buscabas?
          </h3>
          <p className="text-gray-300 mb-6">
            Nuestro equipo está listo para orientarte.
          </p>
          <Button asChild className="bg-[#5bbaa5] hover:bg-[#4aa894] text-white font-bold py-2 px-6 rounded-md transition-colors">
            <Link href="/contacto">
              Escribinos
            </Link>
          </Button>
        </div>

      </div>
    </div>
  );
}
