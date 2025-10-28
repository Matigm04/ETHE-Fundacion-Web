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
    answer: "Un trasplante de órganos es necesario cuando un órgano vital ha dejado de funcionar correctamente y no hay otras alternativas médicas efectivas. Esto puede ocurrir debido a enfermedades crónicas, fallas orgánicas agudas, defectos congénitos o daños traumáticos. El trasplante se considera cuando la calidad de vida del paciente está gravemente comprometida o cuando su vida está en riesgo inminente."
  },
  {
    question: "¿Qué se debe hacer para ingresar a la lista de espera?",
    answer: "Para ingresar a la lista de espera de trasplante, el paciente debe: 1) Ser evaluado por un equipo médico especializado que determine la necesidad del trasplante, 2) Completar estudios médicos exhaustivos para confirmar la viabilidad del procedimiento, 3) Ser inscrito por el centro de trasplante autorizado en el registro oficial (INCUCAI en Argentina), 4) Cumplir con los criterios médicos específicos para el tipo de órgano requerido. El equipo de coordinación de trasplantes guiará a la familia durante todo este proceso."
  },
  {
    question: "¿Se puede verificar si una persona está inscripta?",
    answer: "Sí, es posible verificar si un paciente está inscripto en la lista de espera. Los familiares o el propio paciente pueden solicitarlo al centro de trasplante donde están siendo atendidos o comunicarse directamente con el INCUCAI. Esta información es confidencial y solo está disponible para el paciente, sus familiares directos o representantes legales autorizados."
  },
  {
    question: "¿Cómo funciona el orden en la lista de espera?",
    answer: "Los pacientes inscritos en lista de espera no tienen un orden preestablecido. Un proceso de distribución está asociado a un proceso de donación y, por lo tanto, a un donante. El ordenamiento de la lista se da en cada operativo de procuración cuando se conocen las características de compatibilidad entre el donante y el receptor, en base a criterios preestablecidos. En esa instancia, el sistema informático del INCUCAI, SINTRA, emite un listado de los receptores más adecuados estableciendo prioridades con un paciente en primer lugar, otro en segundo, otro en tercero, y así sucesivamente."
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
    reality: "Las principales religiones aprueban la donación de órganos y la consideran un acto de caridad y amor hacia el prójimo."
  },
  {
    myth: "Soy muy mayor para donar",
    reality: "No hay límite de edad para ser donante. Lo importante es el estado de salud de los órganos al momento de la donación, no la edad del donante."
  },
  {
    myth: "Los ricos y famosos van primero en la lista",
    reality: "El sistema de asignación de órganos es completamente objetivo y basado en criterios médicos. La posición económica o social no influye en el proceso."
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
