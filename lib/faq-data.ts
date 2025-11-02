export interface FAQItem {
  question: string
  answer: string
}

export interface Myth {
  myth: string
  reality: string
}

// Preguntas Frecuentes Generales (INCUCAI)
export const generalFAQs: FAQItem[] = [
  {
    question: "¿Cuándo es necesario un trasplante de órganos?",
    answer: "En determinadas circunstancias, en general como consecuencia de enfermedades o accidentes, es posible perder la capacidad habitual que tienen los órganos de realizar funciones básicas para la vida. El corazón bombea la sangre, los pulmones la oxigenan, el hígado y los riñones la depuran. Al mismo tiempo, sintetizan hormonas. Todos ellos son indispensables para un correcto funcionamiento del organismo. Cuando sobreviene un trastorno importante que afecta el desempeño de algún órgano vital, es necesario un trasplante que permita sustituir las funciones del órgano dañado."
  },
  {
    question: "¿Qué se debe hacer para ingresar a la lista de espera?",
    answer: "La inscripción en lista de espera es un proceso compuesto de varias etapas. En primer lugar, el médico a cargo del paciente es quien indica el trasplante como tratamiento a una insuficiencia orgánica o de tejido. Luego, el paciente debe realizarse una serie de estudios y evaluaciones clínicas obligatorias. Si los resultados indican que está en condiciones de trasplantarse, es incluido en lista de espera. Por su parte, la cobertura social debe autorizar los exámenes y el financiamiento del trasplante."
  },
  {
    question: "¿Se puede verificar si una persona está inscripta?",
    answer: "Todo paciente puede realizar el seguimiento de su ficha personal a través del sitio web del INCUCAI mediante una clave de acceso al sistema informático SINTRA. A partir de la indicación pre trasplante, que da inicio al proceso de inscripción en lista de espera, el paciente recibe un número de identificación personal que le permite consultar cada una de las etapas del proceso. Una vez inscripto, puede conocer su participación en los operativos de distribución y asignación de órganos y tejidos, así como las actualizaciones de sus estudios clínicos. También es posible solicitar dicha información a través de la línea telefónica gratuita, 0800 555 4628."
  },
  {
    question: "¿Cómo funciona el orden en la lista de espera?",
    answer: "Los pacientes inscriptos en lista de espera no tienen un orden preestablecido. Un proceso de distribución está asociado a un proceso de donación y, por lo tanto, a un donante. El ordenamiento de la lista se da en cada operativo de procuración cuando se conocen las características de compatibilidad entre el donante y el receptor, en base a criterios preestablecidos. En esa instancia, el sistema informático del INCUCAI, SINTRA, emite un listado de los receptores más adecuados estableciendo prioridades con un paciente en primer lugar, otro en segundo, otro en tercero, y así sucesivamente."
  },
  {
    question: "¿Cuánto es el tiempo promedio de espera para lograr un trasplante?",
    answer: "No hay un tiempo establecido, dado que cada paciente demanda un órgano o tejido con características específicas. El INCUCAI trabaja todos los días del año y concreta en promedio 3 operativos por día a través de los cuales se procuran órganos y tejidos que son distribuidos equitativamente entre los pacientes en lista de espera. Cada persona que se convierte en donante real tiene determinadas características propias. El tiempo de espera depende entonces de la aparición del donante más apropiado para cada paciente a partir de las coincidencias entre ambos, lapso que puede demorar días, meses o años."
  },
  {
    question: "¿Cómo se distribuyen los órganos?",
    answer: "Los criterios para distribuir los órganos y tejidos procurados están preestablecidos, definidos por consenso entre el INCUCAI, equipos de trasplante y sociedades científicas; son uniformes, aplicados del mismo modo para todos los habitantes del territorio nacional; y específicos, diferenciados de acuerdo a las particularidades de cada órgano o tejido. En líneas generales, los factores que se toman en cuenta son: la región donde se procura, la compatibilidad entre donante y receptor, la situación clínica del paciente y la antigüedad en lista de espera. La distribución se realiza a través del sistema informático del INCUCAI, SINTRA, que toma estos criterios, y como resultado emite un listado identificando a los posibles receptores."
  },
  {
    question: "¿A quién se asignan los órganos y tejidos donados?",
    answer: "Se asignan al paciente más adecuado en función a los criterios de distribución preestablecidos, pero quien acepta el órgano o tejido es el médico del centro de trasplante a cargo. Una vez que el sistema informático del INCUCAI, SINTRA, emite el listado de los posibles receptores, se contacta al profesional para informarle sobre la aparición de un posible donante. En base a las características descriptas, el profesional decide si admite el órgano. En caso afirmativo, éste contacta al paciente para iniciar los estudios necesarios en el momento para evaluar si está en condiciones de trasplantarse."
  },
  {
    question: "¿Cómo se determina la compatibilidad entre donante y receptor?",
    answer: "La compatibilidad viene determinada por diferentes valores:\n\nGrupo sanguíneo: el paciente debe recibir un órgano con grupo sanguíneo compatible, igual que si se tratara de una transfusión sanguínea.\n\nSistema de histocompatibilidad (HLA): comprende un conjunto de proteínas que existen en la superficie de ciertas células del organismo. Cuanto más parecidos sean donante y receptor, existirá menor posibilidad de rechazo hacia el órgano implantado.\n\nFactores físicos: se intenta encontrar receptores con similitud de peso y edad con el donante, para no causar desproporciones físicas entre ambos."
  },
  {
    question: "¿Se puede llevar una vida normal luego del trasplante?",
    answer: "A fin de evitar el rechazo del organismo hacia el órgano implantado, el paciente debe recibir medicamentos para atenuar la respuesta del sistema inmune, mecanismo que tiende a destruir a todo agente extraño. El seguimiento estricto de la medicación es vital, así como los cuidados higiénico-dietéticos. Durante los primeros meses posteriores al trasplante, se requiere una relación estrecha con el médico tratante a través de exámenes y revisiones periódicas. Sin embargo, en términos generales, la reintegración a la vida cotidiana es completa, incluso es posible hacer actividad física. El médico tratante informa de las precauciones necesarias en cada caso concreto.\n\nEl INCUCAI cuenta con un Área de Atención al Paciente. El objetivo principal es brindar información y establecer un vínculo con la comunidad de pacientes. Quienes lo deseen pueden llamarnos gratuitamente desde cualquier lugar del país al 0800 555 4628 o bien enviar un correo electrónico a pacientes@incucai.gov.ar"
  }
]

// Mitos y Realidades sobre Donación de Órganos
export const myths: Myth[] = [
  {
    myth: "¿Quién garantiza la transparencia en el acto de la donación de órganos?",
    reality: "El INCUCAI. Único organismo oficial que tiene autoridad para solicitar la donación y proceder a ejecutarla. Fiscaliza las actividades de donación y trasplante de órganos en nuestro país."
  },
  {
    myth: "No quiero que se mutile mi cuerpo",
    reality: "El cuerpo es tratado con gran respeto y dignidad. Los órganos donados se obtienen con todos los cuidados de una operación quirúrgica de rutina."
  },
  {
    myth: "Puedo querer donar un órgano, pero no todos",
    reality: "La persona puede especificar qué órganos quiere donar. En todos los casos se respetarán sus deseos."
  },
  {
    myth: "Si saben que quiero ser donante, los doctores no tratarán de preservar mi vida",
    reality: "El equipo médico que lo trate en vida, no es el mismo que el grupo médico de ablación de órganos. Los profesionales de la salud harán todos los esfuerzos por salvar su vida. Solamente después de agotar todas las posibilidades, y luego de ser declarado fallecido, se considerará la donación."
  },
  {
    myth: "Mi religión no apoya la donación de órganos",
    reality: "Según el Episcopado Argentino, la donación es un \"acto de solidaridad y fraternidad humanas y una prueba de que el cuerpo muere, pero jamás el amor que lo sostiene.\" Esta postura es compartida por la mayoría de las religiones."
  },
  {
    myth: "Debo pagar para realizar la donación",
    reality: "La donación de órganos es un acto de amor solidario. Nadie puede percibir compensación económica por ello así como tampoco nadie podrá exigir pago alguno por el órgano trasplantado."
  },
  {
    myth: "Los ricos y famosos avanzan en la lista de espera mientras que los demás deben aguardar más tiempo",
    reality: "La posición en la lista de espera no tiene en consideración factores como la etnia, edad, ingresos y clase social. Por el contrario, es imprescindible el tipo sanguíneo, la urgencia médica, la ubicación geográfica, el tamaño del órgano y la compatibilidad de los tejidos."
  },
  {
    myth: "Tráfico de órganos",
    reality: "De acuerdo a la legislación argentina, se exige que tres médicos firmen el acta de defunción tras haber certificado dos veces y con un intervalo de seis horas todas las exploraciones necesarias para confirmar el fallecimiento de la persona. Por otra parte, la complejidad, y el gran número de profesionales necesarios en un operativo de trasplante, como así también la necesidad de compatibilidad entre donante y receptor, hacen imposible concebir el tráfico de órganos. El INCUCAI ofrece todas las garantías de transparencia e idoneidad profesional para asegurar que el acto altruista de la donación."
  }
]

// Preguntas por Especialidad
export const specialtyFAQs = [
  {
    specialty: "Trasplante Hepático",
    slug: "hepatico",
    icon: "liver",
    color: "from-[#5dbfb3] to-[#0a4d5c]",
    description: "Preguntas frecuentes sobre trasplante de hígado"
  },
  {
    specialty: "Trasplante Renal",
    slug: "renal",
    icon: "kidney",
    color: "from-[#5dbfb3] to-[#0a4d5c]",
    description: "Preguntas frecuentes sobre trasplante de riñón"
  },
  {
    specialty: "Cardiopatías Congénitas",
    slug: "cardiaco",
    icon: "heart",
    color: "from-[#5dbfb3] to-[#0a4d5c]",
    description: "Preguntas frecuentes sobre afecciones cardíacas congénitas"
  }
]
