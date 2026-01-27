import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Link from "next/link";

export default function FaqTrasplanteRenalPage() {
  const faqItems = [
    {
      question: "¿Qué es un trasplante de riñón?",
      answer: "Es una operación en la que los riñones enfermos de un individuo (el receptor) se reemplazan con riñones sanos de otro individuo (el donante). Por lo general, el riñón donante proviene de un donante vivo. En otros casos, el riñón se toma de alguien que recientemente ha tenido una muerte cerebral."
    },
    {
      question: "¿Por qué se le hace un trasplante de riñón a un niño?",
      answer: "El trasplante se reserva a niños cuyos riñones están tan dañados que se necesita, o llegará a necesitarse, la diálisis para sobrevivir. El trasplante ofrece una solución más a largo plazo que da al niño la posibilidad de mejorar la salud, mayor independencia y una vida más normal."
    },
    {
      question: "¿Cómo se toma la decisión de seguir con la diálisis o de hacer un trasplante?",
      answer: "La decisión de referir a un niño para ser considerado como un candidato a trasplante normalmente la toma el nefrólogo del niño. Algunas veces los padres solicitan la evaluación."
    },
    {
      question: "¿De dónde provienen los riñones de donantes?",
      answer: (
        <div className="space-y-4">
          <p>Vienen de dos fuentes. La primera son los donantes vivos, de los cuales se extirpa un solo riñón. Los mejores donantes son en general miembros de la familia, ya que son genéticamente compatibles; normalmente lo son el padre o la madre. En ocasiones, se encuentra a alguien compatible en un individuo sin parentesco. Los hermanos menores de 18 años no son candidatos para el trasplante a bebés y niños porque son demasiado jóvenes para acceder legalmente al procedimiento. Los donantes pueden vivir vidas normales y sanas con el riñón que les queda.</p>
          <p>La segunda fuente son individuos que han sufrido recientemente de una muerte cerebral. Han acordado hacerse donantes de órganos antes de la muerte, o sus órganos han sido donados por sus cónyuges o padres después de la muerte. En la mayoría de los casos, se trasplanta un sólo riñón al receptor, para que cada donante difunto proporcione un riñón a dos receptores.</p>
        </div>
      )
    },
    {
      question: "¿Quién es el donante más probable de mi hijo?",
      answer: "El padre o la madre en general son los más compatibles, aunque algunas veces un tío o una tía pueden ser los donantes."
    },
    {
      question: "¿Cómo se pone a mi hijo en la lista de espera para un riñón nuevo?",
      answer: (
        <div className="space-y-4">
          <p>Primero, el equipo profesional tiene que determinar si es necesario un trasplante para su hijo. Las pruebas pueden incluir lo siguiente:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Pruebas diagnósticas</strong> para determinar el tipo y la gravedad de la disfunción renal.</li>
            <li><strong>Ultrasonido renal.</strong> Un examen no invasivo para crear una imagen del riñón con ondas sonoras. Esta prueba determina el tamaño y la forma del riñón y puede detectar masas, piedras, quistes, bloqueos y otras anormalidades.</li>
            <li><strong>Biopsia renal.</strong> Extirpación de una muestra de tejido del riñón con una aguja o durante una cirugía para ser analizada en el microscopio.</li>
            <li><strong>Angiograma de Resonancia Magnética (MRA).</strong> Es esencialmente una RM que permite que el médico vea los vasos sanguíneos en el abdomen en el cual se colocará el riñón trasplantado.</li>
            <li><strong>Escaneo de medicina nuclear.</strong> Se inyecta una muy pequeña cantidad de material radioactivo que se acumula en el riñón; luego se toman imágenes del riñón con una cámara especial que detecta la radiación. Esta radiación pasajera es inocua, y sale completamente del cuerpo en algunas horas.</li>
            <li><strong>Cistouretrograma miccional (VCUG).</strong> Una radiografía de la vejiga y de la uretra (el conducto que transporta la orina afuera del cuerpo) mientras se expulsa la orina. Se inyecta un medio de contraste en la vejiga y la uretra para que la imagen sea clara.</li>
            <li><strong>Evaluación psicológica y social del niño.</strong></li>
          </ul>
          <p>Se realizan otras pruebas para evaluar los riesgos de rechazo del órgano del donante. Estas pruebas pueden incluir las siguientes:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Grupo sanguíneo.</strong> Al igual que en las transfusiones de sangre, el donante de riñón y el receptor deben tener el mismo grupo sanguíneo. De lo contrario, es posible que haya una reacción alérgica mortal.</li>
            <li><strong>Antígeno Leucocitario Humano (ALH).</strong> Esta prueba identifica el grado de compatibildad de tejido entre el riñón del donante y el receptor y ayuda a medir la posibilidad para un trasplante exitoso.</li>
            <li><strong>Panel de Anticuerpos Reactivos (PRA).</strong> El PRA mide la sensibilización del receptor a ciertos antígenos y revisa el riesgo del niño de desarrollar una respuesta inmunológica fuerte al riñón trasplantado. Si el indicador del PRA es elevado, el suero sanguíneo del niño se revisa contra las células del riñón del donante para evaluar el potencial del rechazo.</li>
            <li><strong>Estudios virales.</strong> Estos estudios buscan virus como el citomegalovirus (CMV), el virus de inmunodeficiencia humana (VIH) y el virus Epstein-Barr, para determinar el protocolo de profilaxis viral después de la cirugía y para evaluar la necesidad de un manejo médico especial.</li>
            <li><strong>Prueba citotóxica cruzada.</strong> Las células del donante se mezclan con el suero sanguíneo del receptor para evaluar el grado de reacción. Si la reacción es positiva, es posible que haya rechazo; una prueba cruzada negativa indica que hay compatibilidad.</li>
          </ul>
        </div>
      )
    },
    {
      question: "¿Qué es el rechazo?",
      answer: "El rechazo resulta de la respuesta normal del cuerpo a objetos, microorganismos o tejido extraños. El sistema inmunológico percibe el órgano trasplantado como una amenaza y lo ataca con anticuerpos. Como resultado, vivir con un trasplante requiere de medicamentos que suprimen el sistema inmunológico y que evitan que ataque al nuevo riñón."
    },
    {
      question: "¿Cuáles son los síntomas del rechazo?",
      answer: (
        <div className="space-y-4">
          <p>En muchos pacientes, el único indicador inicial es niveles elevados de creatinina en la sangre, que sólo se pueden detectar con análisis de laboratorio. Otros síntomas pueden incluir los siguientes:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Fiebre</li>
            <li>Sensibilidad alrededor del riñón</li>
            <li>Hipertensión</li>
            <li>Disminución del gasto urinario</li>
            <li>Aumento repentino de peso</li>
            <li>Malestar general – sensación en todo el cuerpo parecida a la de la gripe</li>
          </ul>
          <p>Si aparecen síntomas de rechazo después de que su hijo ha recibido un trasplante, llame al coordinador de trasplantes.</p>
        </div>
      )
    },
    {
      question: "¿Qué se hace para evitar el rechazo?",
      answer: "Se administran medicamentos para suprimir el sistema inmunológico (inmunosupresores) y reducir así el riesgo del rechazo. El equipo del programa de trasplantes renales pediátricos fabrica un régimen de medicamentos para cada niño de manera individual y monitorea con frecuencia la respuesta del niño a los medicamentos. Se hacen ajustes al tipo de medicamento y a la dosis dependiendo del estado del niño."
    },
    {
      question: "¿Tienen la inmunosupresión efectos secundarios?",
      answer: (
        <div className="space-y-4">
          <p>Sí. Todos los inmunosupresores reducen la capacidad del cuerpo de luchar contra las infecciones. En particular durante los primeros meses después del trasplante, cuando las dosis de los medicamentos son las más elevadas, el niño es especialmente propenso a una infección por hongos (candidiasis bucal), a herpes y a virus respiratorios.</p>
          <p>Los esteroides, que han sido el pilar de la inmunosupresión por más de cuatro décadas, provocan una variedad de efectos secundarios que incluyen un retraso en el crecimiento, niveles anormalmente elevados de lípidos sanguíneos, huesos blandos, cicatricación lenta de heridas, acné y un aspecto hinchado.</p>
          <p>Los efectos secundarios de los medicamentos antirrechazo son un problema particular con los receptores de trasplantes en la adolescencia. Los adolescentes están en una época difícil de la vida, en la que la apariencia, la aceptación por parte de grupos y la presión de los compañeros son muy importantes. Los adolescentes que están tomando inmunosupresores se perciben a sí mismos como de aspecto anormal y es posible que no se tomen sus medicamentos. Como resultado, los receptores adolescentes de trasplantes de riñón tienen la tasa más elevada de fracasos de todos los grupos etarios.</p>
        </div>
      )
    },
    {
      question: "Una vez que mi hijo tenga un riñón trasplantado, ¿cuáles son sus posibilidades a largo plazo?",
      answer: "Es prácticamente seguro que el trasplante mejore la salud del niño. Aún así, vivir con un trasplante es un proceso de por vida. La necesidad de los medicamentos antirrechazo continúa, y se requieren visitas de seguimiento frecuentes con el equipo de trasplantes renales pediátricos para monitorear el progreso del niño. Es importante saber cuáles son las señales de rechazo y estar pendiente de ellas todos los días."
    }
  ];

  return (
    <div className="min-h-screen bg-[#f5f7fa]">
      {/* Nuevo Header Hero */}
      <section className="relative h-[250px] flex items-center justify-center overflow-hidden bg-gradient-to-r from-[#00334e] to-[#002233]">
        
        {/* Decoración de fondo abstracta */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          
          {/* ETIQUETA SUPERIOR */}
          <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block uppercase tracking-wider backdrop-blur-md border border-white/20">
            Preguntas Frecuentes
          </span>
          
          {/* TÍTULO */}
          <h1 className="text-4xl md:text-5xl font-bold text-white font-goudy drop-shadow-sm">
            Trasplante Renal
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
