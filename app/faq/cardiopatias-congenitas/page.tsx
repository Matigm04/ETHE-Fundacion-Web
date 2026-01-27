import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Link from "next/link";

export default function FaqCardiopatiasCongenitasPage() {
  const faqItems = [
    {
      question: "¿Qué son las Cardiopatías Congénitas?",
      answer: (
        <div className="space-y-4">
          <p>Las cardiopatías congénitas son lesiones anatómicas de una o varias de las cuatro cámaras cardiacas, de los tabiques que las separan, o de las válvulas o tractos de salida (zonas ventriculares por donde sale la sangre del corazón).</p>
          <p>Las cardiopatías congénitas no son infrecuentes. Unos 8 de cada 1000 recién nacidos padecen este problema. La noticia de que su hijo padece una lesión cardíaca congénita es siempre motivo de gran preocupación para los padres. Y efectivamente una cardiopatía congénita no diagnosticada, ni tratada, siempre es algo serio, y a diferencia de lo que ocurre con otros órganos, con un corazón enfermo la situación clínica de los niños pequeños, en especial los recién nacidos, cambia rápidamente pudiendo ser grave en pocas horas o días.</p>
          <p>En los niños mayores la lesión cardíaca no tratada puede condicionar su vida futura, ya que impide que ese corazón se mantenga latiendo, y latiendo bien, los 80-90 años de vida que posiblemente tendrán.</p>
          <p>Sin embargo hoy día la detección médica de las cardiopatías se lleva a cabo en los primeros días, semanas o meses del nacimiento, de forma que muy precozmente se puede planificar el correspondiente tratamiento médico o quirúrgico. La gran mayoría de las cardiopatías congénitas son susceptibles de una corrección total y definitiva o casi definitiva, permitiendo que el niño disfrute de una vida también completamente normal o casi normal.</p>
          <p>Hay más de 50 tipos diferentes de lesiones. Sin embargo con mucha frecuencia se combinan varias lesiones en un mismo niño y ciertos nombres de cardiopatías engloban realmente varias anomalías, como es el caso de la Tetralogía de Fallot. No existe, sin embargo, necesariamente, una relación directa entre el número de lesiones asociadas y la gravedad del caso.</p>
        </div>
      )
    },
    {
      question: "¿Cómo y cuándo surgen?",
      answer: (
        <div className="space-y-4">
          <p>El niño dentro del seno materno tiene el corazón totalmente desarrollado en la 6ª semana de embarazo y precisamente algunas cardiopatías congénitas que son alteraciones o deficiencias en el desarrollo cardíaco, ya se hacen reales en esa 6ª semana.</p>
          <p>Sin embargo no todas las cardiopatías aunque sean congénitas, existen en el momento de nacer. Algunas se manifiestan días, semanas, meses o incluso años después, y sin embargo su origen es también congénito, pues al nacer existía ya la tendencia o predisposición a que se generara posteriormente esa cardiopatía.</p>
          <p>Así pues las cardiopatías congénitas no son fijas (existen o no al nacer) sino dinámicas (pueden existir al nacer o no) y las que existen al nacer pueden modificarse rápidamente en los siguientes días, desapareciendo unas, agravándose otras, etc… Por tanto requieren un seguimiento cercano en consulta durante los primeros meses de vida.</p>
          <p><strong>Una de las preguntas que se hacen los padres es ¿si la cardiopatía podía haberse diagnosticado durante el embarazo?</strong></p>
          <p>Nos referimos al diagnóstico fetal por ecocardiografía, que progresivamente se está implantando en las consultas ginecológicas. Hay cardiopatías que no son detectables como tal, pues incluso su existencia es normal y necesaria durante la vida fetal en el embarazo y sólo se constituyen en cardiopatías si persisten después de nacer el niño. Hay otras que existen, pero por su levedad no son detectables, manifestándose al nacer o incluso meses después del nacimiento. Hay otras progresivas que no se manifiestan en los estadios iniciales pero si finales. Hay finalmente otras que sí pueden detectarse a partir de la 16 semana de embarazo pero no siempre es fácil pues el niño está dando vueltas en el seno materno y no siempre tiene una adecuada posición para valorar el corazón, por lo que habría que ir a buscar la cardiopatía específicamente, lo que no es posible hacer de rutina en todas las embarazadas ya que el ginecólogo tendría que hacer lo mismo con los demás órganos.</p>
          <p>Sólo en casos con antecedentes de cardiopatía o en aquellas parejas con factores de riesgo está justificada la búsqueda específica de la cardiopatía.</p>
        </div>
      )
    },
    {
      question: "¿Cuáles son las causas de las cardiopatías?",
      answer: (
        <div className="space-y-4">
          <p>La medicina actual desconoce la verdadera causa de las anomalías o deficiencias del desarrollo cardíaco y por tanto de las cardiopatías congénitas. Tal vez la conozcamos en un futuro próximo.</p>
          <p>Hoy día sólo conocemos factores de riesgo o circunstancias que favorecen tener un hijo con cardiopatía: Padres de edad inferior a 18 y superior a 35 años; antecedentes familiares de cardiopatías congénitas; niños con alteraciones cromosómicas (síndrome de Down, etc); factores maternos de diabetes, alcoholismo, lupus, fenilquetonuria y rubeola durante el embarazo; ingesta de drogas durante el embarazo como anfetaminas, hidantoina, timetadiona, litium y talidomida.</p>
          <p>De acuerdo a los conocimientos actuales, el factor herencia es poco importante en las cardiopatías congénitas y en nuestra práctica médica es muy difícil que encontremos dos hermanos con cardiopatía. En una familia actual, que habitualmente se compone de dos hijos, sólo uno de los hermanos, tendría cardiopatía, al igual que podría ocurrir en las familias de 6-7 hijos de hace años. Así pues no está realmente justificada la preocupación, y tampoco el sentimiento de culpabilidad por parte de los padres, sobre si el padre o la madre es el/la causante de la enfermedad del hijo. En la práctica es cuestión del azar.</p>
          <p>Una de las preguntas que frecuentemente se hacen los padres es si merece la pena arriesgarse a tener otro hijo. La respuesta llana y simple para la mayoría de los casos es SI, ya que el riesgo de tener otro niño cardiópata si bien es algo mayor que el de la pareja sin hijos cardiópatas, es sin embargo pequeño.</p>
          <p>En esta situación, siempre es aconsejable recibir el consejo genético o cálculo estadístico de las posibilidades de tener otro hijo cardiópata, cálculo que se hace en base a múltiples factores específicos de cada pareja en cuestión.</p>
        </div>
      )
    },
    {
      question: "¿Cómo decirle al niño que va a ser operado?",
      answer: "Debemos obtener toda la informacion posible sobre la enfermedad para explicarsela al niño de una manera sencilla y decirle que va a ser operado para sentirse mejor y para que pueda jugar sin cansarse. Es importante ser muy sinceros y positivos. Debemos trasmitir confianza y hacer que el niño se sienta querido y protegido. Es importante que conozca la clinica donde permanecera internado."
    },
    {
      question: "¿Cómo es el Proceso Cardiológico?",
      answer: (
        <div className="space-y-4">
          <p>Aunque hay algunas variaciones según los grupos médicos, nuestro proceso habitual en el diagnóstico y tratamiento quirúrgico de las cardiopatías congénitas es el siguiente:</p>
          
          <div>
            <p className="font-semibold text-[#00334e]">Valoración cardiológica no invasiva:</p>
            <ol className="list-decimal pl-5 space-y-1">
              <li>Primera consulta cardiológica (obligatorio)</li>
              <li>Pruebas complementarias (Opcional)</li>
              <li>RM y/o TAC (Opcional)</li>
            </ol>
          </div>

          <div>
            <p className="font-semibold text-[#00334e]">Valoración cardiológica invasiva:</p>
            <ol className="list-decimal pl-5 space-y-1" start={4}>
              <li>Eco transesofágico</li>
              <li>Cateterismo diagnóstico (muy ocasional)</li>
            </ol>
          </div>

          <div>
            <p className="font-semibold text-[#00334e]">Diagnóstico definitivo:</p>
            <ol className="list-decimal pl-5 space-y-1" start={6}>
              <li>Diagnóstico definitivo</li>
            </ol>
          </div>

          <div>
            <p className="font-semibold text-[#00334e]">Tratamiento conservador:</p>
            <ol className="list-decimal pl-5 space-y-1" start={7}>
              <li>Tratamiento medicamentoso</li>
            </ol>
          </div>

          <div>
            <p className="font-semibold text-[#00334e]">Tratamiento invasivo:</p>
            <ol className="list-decimal pl-5 space-y-1" start={8}>
              <li>Corrección mediante un cateterismo terapéutico</li>
              <li>Cirugía</li>
            </ol>
          </div>
        </div>
      )
    },
    {
      question: "¿Cómo es el Proceso Quirúrgico?",
      answer: (
        <div className="space-y-4">
          <p><strong>Generalidades</strong></p>
          <p>La mayoría de las cardiopatías congénitas requieren para su curación una intervención quirúrgica y por ello el cardiólogo presenta el caso al cirujano. El cardiólogo se pone en contacto con el cirujano y en una sesión médico-quirúrgica presenta y discuten el caso, planificando entre cardiólogo y cirujano la técnica quirúrgica más apropiada para cada caso, así como la urgencia de la intervención. El cardiólogo hace un informe final incluyendo la decisión tomada conjuntamente con el cirujano y pide a los padres del niño, al adolescente o adulto que se pongan en contacto con el cirujano de cardiopatías congénitas. En nuestro equipo como norma general, y una vez sentada la indicación quirúrgica, la intervención suele ser realizada inmediatamente (horas o días) si es urgente, o en 2-3 semanas si no lo es, ya que incluso en este caso la espera no es beneficiosa para el paciente.</p>
          
          <p><strong>El proceso quirúrgico comprende:</strong></p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Consulta preoperatoria</li>
            <li>La operación con o sin circulación extracorpórea</li>
            <li>Estancia en UCI / UVI</li>
            <li>Estancia en planta</li>
            <li>Alta hospitalaria</li>
          </ul>
        </div>
      )
    },
    {
      question: "¿Como es la alimentacion en niños con CC?",
      answer: "Algunos pediatras o cardiologos no indican la dieta sin sal porque a los niños no les gusta y aumentan las dificultades a la hora de hacer comer a estos niños."
    },
    {
      question: "¿Es necesario el apoyo psicológico durante el proceso?",
      answer: (
        <div className="space-y-4">
          <p>En un servicio integral, en cualquier Unidad de Cardiopatías Congénitas, no puede faltar el apoyo psicológico a los niños y padres, a los adolescentes y adultos con cardiopatías congénitas.</p>
          <p>La enfermedad es incomprensible, siempre y en cualquier situación, pero es especialmente injustificable cuando ataca a un niño. Cuando la enfermedad cardiológica aparece, ya sea en el lactante, niño, adolescente o adulto, no sólo afecta a la persona que la sufre, sino a todo su entorno: padres, hermanos, amigos, colegio, familia, etc.</p>
          <p>En un primer momento del diagnóstico de la enfermedad cardiológica, los más directamente afectados, el enfermo y la familia entran en una especie de túnel del que no parece haber salida. Sólo si contamos con una información clara y detallada por parte del equipo médico se puede tomar conciencia del problema para enfrentarse a él de una forma emocionalmente eficaz.</p>
          <p>No es un trabajo imposible, sino un camino a recorrer, paso a paso, donde la resistencia personal puede verse afectada, pero también beneficiada de la atención psicológica al enfermo y a la familia.</p>
          <p>Siempre en colaboración directa con el equipo médico y sanitario, el apoyo psicológico va orientado a los:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Padres</li>
            <li>Niños</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-[#f5f7fa]">
      {/* Nuevo Header Hero */}
      <section className="relative h-[250px] flex items-center justify-center overflow-hidden bg-gradient-to-r from-[#c74a3a] to-[#a63d30]">
        
        {/* Decoración de fondo abstracta */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          
          {/* ETIQUETA SUPERIOR */}
          <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block uppercase tracking-wider backdrop-blur-md border border-white/20">
            Preguntas Frecuentes
          </span>
          
          {/* TÍTULO */}
          <h1 className="text-4xl md:text-5xl font-bold text-white font-goudy drop-shadow-sm">
            Cardiopatías Congénitas
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
