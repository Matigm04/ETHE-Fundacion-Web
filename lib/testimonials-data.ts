export interface TestimonialSection {
  question: string
  answer: string
}

export interface FullTestimony {
  interviewer: string
  sections: TestimonialSection[]
}

export interface Testimonial {
  name: string
  slug: string
  country: string
  countryFlag: string
  specialty: string
  image: string | null
  excerpt: string
  content: string
  fullTestimony?: FullTestimony
  date: string
}

export const testimonials: Testimonial[] = [
  {
    name: "Yorgenis",
    slug: "yorgenis",
    country: "República Dominicana",
    countryFlag: "🇩🇴",
    specialty: "Trasplante Hepático",
    image: null,
    excerpt: "Entrevistamos a Lucía, abuela de Yorgenis...",
    content:
      "Todo comenzó cuando fuimos a un Hospital en República Dominicana por un hidrocele. Los médicos le hicieron una operación, pero al transcurrir los días le iba creciendo su barriga de forma alarmante. Después de 8 meses internado y múltiples estudios, nos dijeron que necesitaba un trasplante hepático urgente y que en nuestro país no teníamos nada que hacer.",
    fullTestimony: {
      interviewer: "Lucía, abuela de Yorgenis",
      sections: [
        {
          question: "¿Cuál fue el diagnóstico de Yorgenis?",
          answer: "En realidad nosotros jamás pensamos que pudiéramos pasar algo así. Todo comenzó cuando fuimos a un Hospital en República Dominicana por un hidrocele, que es una especie de una hernia en el testículo. A partir de allí, lo vieron doctores que le dijeron que no estaba apto para operarlo porque les llamaba la atención el color amarillento de su piel, pero otros dijeron que era necesaria la operación. Entonces la hicimos, al comienzo dijeron que estaba bien, le dieron el alta, pero al transcurrir los días le iba creciendo su barriga. Le digo entonces a la madre de Yorgenis: 'Vamos a llevarlo al hospital'. Los médicos nos dijeron que lo que tenía era sólo una acumulación de materia fecal y volvieron a mandarnos a casa.\n\nPero ya al ver la angustia de mi nieto y su madre, fuimos a un lugar llamado 'Centro Americano' para que nos indicaran una sonografía ambulatoria para que ver qué tenía dentro el niño. Allí me dijeron que tenía un líquido y lo ingresaron a una habitación por 24 días. Hasta que un día en el que el niño tenía la barriga más grande que el cuerpo, fui a informar al director lo que estaba pasando. Allí, le hicieron un eco doppler, pero ya no había nada porque el quiste había estallado y se había diseminado. Decidieron entonces cortar el intestino y vesícula. Luego de ese proceso, nos informaron que ya estaba todo bien. Pero no fue así. Al mes, el niño comenzó a mostrar cambios alarmantes. Sus heces comienzan a ser muy claras y todos los días lo llevaba al hospital. La doctora gastroenteróloga, a quien agradezco mucho, decía 'tienen que prepararse para un futuro donde la situación de Yorgenis sea complicada'."
        },
        {
          question: "¿Cómo se enteraron que Yorgenis debía ser trasplantado?",
          answer: "Allí estuvo 8 meses internado. Luego, en enero, volvieron a intervenirlo, para asegurarse que todo estuviese funcionando bien. En ese momento, le sacaron un pedacito de hígado para hacerle la biopsia. Yo no sabía la gravedad del caso, estaba desconcertada. Cuando salió el resultado, nos citan y nos dicen lo que estaba pasando: necesitaba un trasplante hepático. Y me dijeron que en el país no teníamos nada que hacer. '¿Pero dónde lo voy a hacer y con mi situación económica?', me preguntaba. Y pregunté quién podía ser el donante. 'Por la relación genética, puede ser el padre', me dijeron. Pero el padre de Yorgenis ya había fallecido. También podía ser la madre, mi hija, o yo misma. Y, sabes, cuando te dan la noticia de un trasplante que no puede hacerse en tu país, uno usualmente se resigna a lo peor."
        },
        {
          question: "¿Cómo llegan a Fundación ETHE?",
          answer: "Con toda esta situación, me puse a investigar por Internet, buscar información, en el gobierno, despacho del presidente, por todos lados, estaba desesperada. Me puse en comunicación con EEUU, pero no era posible porque el niño era extranjero. En Colombia, México, Perú tampoco se podía. Aquí en Argentina me puse en contacto primero con la Fundación Favaloro, también con el Hospital Italiano que fue donde yo conseguí para una cita para evaluarlo. Cuando fui al consulado con esa cita, el cónsul me dijo: 'podemos darle una visa pero debe tener una cama donde lo esperen, de lo contrario, no procede el pedido, porque se corre el riesgo de que el niño se complique allí y no tenga el permiso para ser intervenido en ese país'. Pero el cónsul, muy amablemente, me consiguió una lista de lugares y Fundaciones a las que podía acudir, dentro de las cuales estaba, entre otras, Fundación Favaloro y ETHE. En la Fundación Favaloro me dijeron que si el Ministerio de Salud mi país, se ponia en contacto con el Ministerio de Argentina, podía hacerse algo, pero en mi país me dijeron que era imposible.\n\nEn ese entonces, la madre del niño, tenía una persona conocida en Buenos Aires que conocía al Doctor Carlos Luque. Yo venía de mucho tiempo de angustia, la desesperación, de no poder dormir. Entonces, ya en estas instancias, debía actuar y decidir. Pero no tenía dinero. Entonces, algunos compañeros de mi trabajo hicieron una colecta para al menos poder venir a Argentina e iniciar el proceso en la Fundación ETHE.\n\nEl contacto con la Fundación ETHE llegó luego de dos años de un tratamiento carísimo en mi país donde no aspirábamos a una solución, sino solamente aguantar. A partir de allí, y a través del Doctor Luque y el Ing. Mario Frontalini, Presidente de la Fundación, comienza la relación con la Fundación ETHE. Cuando conocí a Don Mario, le pedí, que acogiera mi caso no como Fundación, sino desde el lado humano. Yo creo que si Dios los puso en este lugar, es por algo. Y aquí estamos, desde que tenemos comunicación con el Ing. Mario y el Dr. Luque fue un cambio enorme, otro ambiente, otros aires."
        },
        {
          question: "¿Cómo se sintieron y que nos puede decir de los profesionales médicos?",
          answer: "Todo perfecto. Porque, si bien, la medicina es importante, cuando tu encuentras ese afecto humano, esa calidez, te sientes protegido. Y es lo que ha pasado aqui: desde el personal de limpieza, de seguridad, toda nuestra experiencia ha sido algo muy bonito. Y despues del trasplante, al ver como el niño ha ido evolucionado, pudimos ver también lo comprometido del trato y seguimiento que le han dado los médicos y enfermeras. ¡Todo ha sido maravilloso!"
        },
        {
          question: "¿Cuál es su estado actual?",
          answer: "Yo, la verdad, era prácticamente un muerto viviente, era una persona sin vida. ¡Ahora yo se que estoy luchado y el objetivo esta logrado! Lo que resta, yo sé que Dios nos va acompañar. Yo siento tranquilidad, algo que había perdido totalmente. Y hoy mi nieto está casi recuperado totalmente."
        },
        {
          question: "¿Qué le dirías a otra familia que está pasando por una situación similar?",
          answer: "En mi situación vivida y mi experiencia triste y amarga y sin encontrar a un ser humano que me extendiera la mano, yo exhorto a todos los padres y a todas esas familias que están pasando por esto (que yo sé que en mi país hay muchas). Que no se dejen aconsejar solo por médicos de allá, que no se limiten, que por más puertas que se cierren, por más 'no' que te digan, que sigan. Recomiendo el 100% la Fundación, no obstante a recomendarla, me gustaría incursionar en el trabajo de la Fundación pero en mi país, para que en el futuro, sea el inicio de una trayectoria de vida para que muchos niños y muchos padres puedan encontrar la posibilidad de vida mediante esta Fundación."
        }
      ]
    },
    date: "2016",
  },
  {
    name: "Kelly Ann Drayton",
    slug: "kelly-ann-drayton",
    country: "Trinidad y Tobago",
    countryFlag: "🇹🇹",
    specialty: "Trasplante Hepático",
    image: null,
    excerpt: "Una historia de amor y donación...",
    content:
      "Cuando Kelly Ann tenía 2 meses desarrolló un color amarillo en los ojos. El diagnóstico fue Atresia Biliar y necesitaba un trasplante de hígado. Como padre, decidí que no iba a permitir que Kelly Ann desapareciera de mí. El Doctor Luque nos explicó todo el procedimiento y me convertí en su donante. Hoy, 4 años después, Kelly Ann está perfectamente bien.",
    fullTestimony: {
      interviewer: "Anton y Gillian, padres de Kelly Ann",
      sections: [
        {
          question: "¿Cuál fue el diagnóstico de Kelly Ann?",
          answer: "Todo comenzó cuando Kelly Ann nació. Fue aproximadamente a sus 2 meses de edad que desarrolló un color amarillo en los ojos y decidimos ir a un pediatra en Trinidad para averiguar el por qué. Él decidió que debíamos hacer un análisis y el resultado mostró que tenía Atresia Biliar, lo que significaba que teníamos que hacerle un procedimiento médico. El problema era que a la edad que ella tenía en ese momento, esto no habría sido suficiente para solucionar la situación sino que estábamos en condiciones de hacerle un trasplante de hígado. En Trinidad intentamos sin éxito obtener más información sobre lo que era un trasplante y dónde hacerlo. Fuimos a ver a médicos y no estábamos seguros de cuál era la dirección que debíamos tomar.\n\nLuego, nos fuimos a un médico específico quien nos mencionó a la doctora Bartholomew. Desde allí ella se hizo cargo del caso: nos explicó lo que teníamos que hacer, cuáles eran las opciones que había y ella también nos refirió al Doctor Luque. Empezamos a tener conversaciones con él a través de ella y nos explicó el procedimiento que había que hacer, dónde teníamos que obtener la información para tener una idea general de la situación en la que estábamos.\n\nY después de eso, después de hacer todas las pruebas que el Doctor Luque nos solicitó, tuvimos un Skype donde nos explicó el procedimiento que había que hacerle a Kelly. Me explicó que me veía como un buen candidato para ser donante y que le gustaría que pensáramos sobre ello antes de llegar a una respuesta.\n\nCon esto llegamos a casa, conversamos sobre esto y decidimos hacerlo. No fue una discusión muy difícil porque nuestro primer hijo lo perdimos y con Kelly Ann teníamos la oportunidad de tener otra experiencia. Yo como padre, siempre he dicho que lo haría todo por mis hijos y decidí que no iba a permitir que Kelly Ann desapareciera de mí. Por eso decidimos investigar sobre el trasplante de hígado primero y tener una conversación con el doctor Luque después. Él nos explicó todo muy bien, nunca me hizo dudar de que algo pudiera salir mal. Y cuando llegamos a Argentina debo decir… que yo nunca he experimentado una situación como esta antes y Dios mío!… ¡fue la mejor!. Ese tiempo en el hospital, en especial, me gustaría poder vivir esa experiencia cada día."
        },
        {
          question: "¿Cómo fue su experiencia como donante?",
          answer: "Para mí fue algo que elegí como padre porque tenía muchas ganas de dedicar mi vida a mi hija. Creo que donar es algo que todo el mundo debería tener en cuenta y creo que si tomas esa decisión, la mitad de lo que ocurre en tu vida que pueda ser malo se convierte en algo realmente positivo. Porque, ya sabes, mirar todos los días a esa persona a la que estás dando una segunda oportunidad en la vida es realmente una cosa muy linda. Es verdaderamente una cosa muy agradable."
        },
        {
          question: "¿Qué le dirías a otra familia que está pasando por una situación similar?",
          answer: "Le diría que no hay otra opción que venir a la Argentina. Argentina para mí se ha convertido en mi segundo hogar. Desde la última vez que estuvimos aquí nos quedamos totalmente encantados en volver. Bueno, sólo que queríamos volver por vacaciones y no para un procedimiento médico, pero cada vez que nos vamos, en el aeropuerto, decimos que nos gustaría volver a la Argentina sólo para darle las gracias a todos los médicos y enfermeras que jugaron un papel importante en poner a Kelly Ann en la situación en la que está.\n\nTengo que decir, que yo nunca he encontrado una situación donde los médicos y los pacientes tengan una relación en la que se puedan llamar en cualquier momento. Es muy bonito. En Trinidad no tenemos ese lujo que se pueda llamar a un médico a las diez de la noche, las once de la noche. Siempre te van a indicar hacia dónde debes ir a esas horas, con quién hablar, pero esto te hace sentir muy incómodo. El Doctor Luque, en cambio, es un médico con una particularidad: él es el mejor porque no hay nada que puedas hacer que te hará sentir incómodo. Siempre te dice los hechos concretos y todo lo que necesitan saber sobre el procedimiento. Además, los resultados después de la intervención siempre están bien. Debo decir que es una persona que admiro como médico y como padre. No hay otra persona con la que me sentiría más cómodo. Y debo decir, que una vez que él está involucrado en el procedimiento que se tiene que hacer y él acabó de hablar conmigo, ya no tengo ningún problema. Ya me siento bien."
        }
      ]
    },
    date: "2021",
  },
  {
    name: "Amiah Jack",
    slug: "amiah-jack",
    country: "Trinidad y Tobago",
    countryFlag: "🇹🇹",
    specialty: "Trasplante Hepático",
    image: null,
    excerpt: "El diagnóstico de Amiah fue Atresia de vías Biliares...",
    content:
      "A los tres días de haber nacido, sus ojos estaban completamente amarillos. Cuando fuimos a Trinidad a confirmar el diagnóstico de atresia de vías biliares, el pediatra nos recomendó la Fundación ETHE. Con un trasplante de hígado, hoy Amiah se recupera favorablemente y se encuentra plena.",
    fullTestimony: {
      interviewer: "Cleavisha e Isaiah, padres de Amiah",
      sections: [
        {
          question: "¿Cómo descubrieron su enfermedad, sus primeros síntomas?",
          answer: "Cleavisha: A los tres días de haber nacido, sus ojos estaban completamente amarillos. Y cuando le hicieron todos los exámenes de sangre en Tobago, en el hospital general, uno de los resultados dio negativo, y era el de la prueba para controlar la Bilirrubina y daba muy alta."
        },
        {
          question: "¿Cómo descubrieron la Fundación ETHE?",
          answer: "Cleavisha: Cuando fuimos a Trinidad a confirmar el diagnóstico de atresia de vías biliares de Amiah, el doctor que la estaba tratando, su pediatra, nos recomendó la Fundación."
        },
        {
          question: "¿Cómo y por qué decidieron venir a Argentina y confiar en el programa de la Fundación ETHE?",
          answer: "Cleavisha: Porque todos los otros niños vinieron aquí y todos me dijeron que el Dr. Luque había realizado las operaciones y habían sido un éxito. ¡La Fundación es excelente! El trato de los profesionales y asesores fue realmente excelente."
        },
        {
          question: "¿Cómo fue su comunicación y trato con el director médico Dr. Carlos Luque?",
          answer: "Cleavisha: Al hablar él inglés fue muy bueno, porque se tomó el tiempo para entendernos y también para hablar con nosotros, así que la comunicación fue excelente."
        },
        {
          question: "¿Qué le dirías a otra familia que está pasando por una situación similar?",
          answer: "Isaiah: Les diría que tuvieran fe. Que sean Fuertes. Eso es importante también. Pero sobre todo que tengan fe, porque fue muy difícil para nosotros. Muchos están en situaciones así. Y pueden ver cómo tu hijo se transforma, sabes, la transformación es simplemente increíble.\n\nCleavisha: Y ver ahora lo bien que está, es sorprendente. Tienen que tener fe y rezar. Porque Amiah estaba muy mal y miren cómo está ahora. Más feliz que nunca."
        },
        {
          question: "¿Recomendarían la Fundación a otras familias?",
          answer: "Cleavisha: Todas las familias. A todas las familias. Porque la operación fue un éxito y tenía toda la fe y la seguridad porque el Dr. Luque vino y me explicó todo, todas las posibilidades y demás. Y si bien existía la posibilidad de que no sobreviviera, en realidad en mi mente no existía esa posibilidad. Yo sabía que la operación iba a salir bien y que volveríamos a casa y seríamos una familia."
        }
      ]
    },
    date: "2024",
  },
  {
    name: "Ariella Bazzard",
    slug: "ariella-bazzard",
    country: "Trinidad y Tobago",
    countryFlag: "🇹🇹",
    specialty: "Trasplante Renal",
    image: null,
    excerpt: "Una historia de valentía maternal y transformación...",
    content:
      "Notamos los primeros síntomas a los dos meses: ictericia, orina oscura y heces pálidas. A los cinco meses fue diagnosticada con Atresia Biliar. La Dra. Bartholomew nos recomendó al Dr. Luque. Yo fui la donante de mi hija. Hoy Ariella es una niña completamente diferente: ríe todo el tiempo, tiene energía y hace cosas propias de su edad que antes no podía hacer.",
    fullTestimony: {
      interviewer: "Kisha y Shastry, padres de Ariella",
      sections: [
        {
          question: "¿Cuál fue el diagnóstico de Ariella?",
          answer: "Notamos tres síntomas principales: Ictericia (color amarillento de la piel y mucosas), orina oscura y heces pálidas, esas fueron las características que vimos cuando Ariella tenía dos meses. Y allí fue diagnosticada a los cinco meses cuando le hicieron el colangiograma.\n\nDurante ese período intentamos deducir qué tenía buscando en páginas de Internet. Hablamos también con otra familia que tenían a su hijo con una afección llamada atresia biliar y a quien le tuvieron que hacer un trasplante por dicho motivo. En el fondo me repetía una y otra vez 'por favor que no sea, por favor que no sea', pero tuve que ser realista y aceptar que su enfermedad era Atresia biliar. Ariella debía ser trasplantada y yo, su mamá, sería la donante."
        },
        {
          question: "¿Por qué decidieron venir a Argentina?",
          answer: "Las razones fueron dos: La primera fue la recomendación, ya que la especialista en trasplante hepático en Trinidad y Tobago, la reconocida doctora Bartholomew, nos recomendó al Dr. Luque, comentándoles sobre el éxito de otras intervenciones con familias que ya habían venido a la Argentina como Hanna Akil. Sin dudas, ése fue un plus importante. El otro motivo fue el factor costo. Lo cierto es que sí había otros lugares más cerca, como los EEUU, pero en Argentina los gastos eran significativamente menores. Esas dos causas fueron las que nos trajeron aquí."
        },
        {
          question: "¿Cómo se sintieron con la calidad del servicio médico que se les fue brindado?",
          answer: "Creo que fue excelente. No tuvimos ningún problema. A decir verdad sabía muy poco acerca del sistema sanitario en Argentina, sabía poco sobre los médicos y todo lo relacionado a ello. Saliendo de la sombra, encontré excelentes médicos aquí."
        },
        {
          question: "¿Qué sentimientos les embargaba días antes del trasplante?",
          answer: "Sí, fui la donante. Creo que estaba nerviosa, igualmente hablaba con los médicos. El mismo Dr. Luque me comentaba que había riesgos, que las cosas podrían llegar a andar mal, que quizá no se tenía una recuperación adecuada, cosas por el estilo. Los médicos deben informarnos con claridad sobre las contrariedades o sobre las cosas que podrían llegar a suceder. Cualquier tipo de cirugía es riesgosa, todas tienen un riesgo distinto, pero lo tienen. Yo a todo esto lo tenía presente, pero creo ser una persona fuerte, tengo mucha fe en Dios, por lo que dije 'Muy bien, todo eso puede pasar, pero no pasará'. Sí, soy un ser humano y he padecido ansiedad, nervios, pero como te digo, lo puse todo en manos de Dios."
        },
        {
          question: "¿Qué sentiste cuando todo salió bien?",
          answer: "Un gran alivio. Hoy son dos niñas distintas, la Ari de antes y la de ahora. Ella solía llorar mucho, lloraba todo el tiempo. Se sentía muy incómoda, dolorida, no se reía como ahora, no se movía como ahora, no hacía cosas como ésas. Creo que está comenzando a hacer cosas de su edad, cosas que a lo mejor debería haber estado haciendo antes."
        },
        {
          question: "¿Vivieron alguna situación adversa luego del trasplante?",
          answer: "Sí, Ariella tuvo una internación luego de un mes de haber sido trasplantada debido a un virus, fueron casi dos semanas en el hospital. Otra situación, fue que tuvieron que aumentarle la dosis de una de las medicaciones post-trasplante (PROGRAF) la cual había ascendido de 1.5mg a 2,5mg. Igualmente hay que aclarar que volvió a descender así que estamos contentos. También se podría decir que el hecho de no poder hacer mucho, es decir, de no poder salir, pasear, nos complicó un poco, pero pudimos lidiar con eso."
        },
        {
          question: "¿Les gustaría volver a la Argentina?",
          answer: "¡Sí que nos gustaría!, pero para una situación totalmente distinta, de vacaciones digamos, para recorrer y conocer, Argentina es un lindo país.\n\nLuego del trasplante supe que mi hija había cambiado, que ella no se sentía de la forma que solía hacerlo y eso fue lo que nos dio el indicio de que andaba maravillosamente bien. Al fin, Ariella regresó a su casa. Esta vez más fuerte, llena de energía, queriendo -de a poco- hacer todo por ella misma y sin cansancio. La niña ríe todo el tiempo algo que previo a la intervención no hacía debido al malestar."
        }
      ]
    },
    date: "2023",
  },
]
