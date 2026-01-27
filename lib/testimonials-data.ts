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
  videoUrl?: string
}

export const testimonials: Testimonial[] = [
  {
    name: "Yorgenis",
    slug: "yorgenis",
    country: "República Dominicana",
    countryFlag: "🇩🇴",
    specialty: "Trasplante Hepático",
    image: "/testimonios/YORGENIS-1-150x150.jpg",
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
    image: "/testimonios/Kelly-Ann-2015_6-150x150.jpg",
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
    image: "/testimonios/FAMILIA-JACK-1-500x500.jpg",
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
    specialty: "Trasplante Hepático",
    image: "/testimonios/Ariella_Bazzard_3-500x500.jpg",
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
  {
    name: "Ayodele Roberts",
    slug: "ayodele-roberts",
    country: "Trinidad y Tobago",
    countryFlag: "🇹🇹",
    specialty: "Trasplante Hepático",
    image: "/testimonios/Ayodele_Roberts.jpg",
    excerpt: "A Ayodele le diagnosticaron un Amartoma Hepático Quístico a los 2 años.",
    content: "Entrevista a Nicole Roberts, nacida en Trinidad y Tobago y mamá de Ayodele (3 años). Vinieron a Argentina para operar el Amartoma Hepático Quístico que Ayodele tenía en su hígado. Luego de una exitosa operación, aquí su testimonio.",
    fullTestimony: {
      interviewer: "Nicole Roberts, mamá de Ayodele",
      sections: [
        {
          question: "¿Cuál fue el diagnóstico Ayodele?",
          answer: "Nicole: Su diagnóstico fue que tenía un quiste hepático benigno y el pronóstico era muy bueno. Sin embargo, era necesario que consiguiéramos hacer una cirugía que no está disponible en Trinidad y Tobago.\n\nAl principio, antes de que tuviéramos el diagnóstico correcto, cuando nos dimos cuenta de que había una masa en su hígado fue aterrador. Pero mi comunidad, en la iglesia a la que voy, tenemos gente que rezó por su salud y nos apoyó. Luego los médicos en Trinidad continuaron con la investigación y se dieron cuenta de que era un quiste y la noticia de Dios es que era benigno, así que los médicos trataron de eliminarlo. Ayodele tuvo entonces una cirugía inicial en octubre de 2012. Cuando lo abrieron y vieron lo grande que era el quiste los médicos intentaron removerlo. Pero estaba muy involucrado en el hígado y ellos hicieron lo que pudieron en ese momento.\n\nLo que estaban esperando con la cirugía era que se dreanar el líquido que se estaba formando en su estómago por el quiste. Sin embargo, eso no funcionó porque en el próximo mes su estómago comenzó a llenarse otra vez. Y era complicado porque, el quiste tenía tres compartimentos. Los médicos lograron drenar la mayor parte del compartimiento principal pero había otro compartimiento que estaba lleno de líquido también. Así que lo que pasó, es que fue drenado inmediatamente al mes siguiente, en noviembre. Y entonces, su estómago quedó bien por un buen rato. Pero en abril se llenó de nuevo hasta el punto de que era incómodo y tuvo que tener otro drenaje. Creo que en total, fueron tres o cuatro drenajes antes de venir aquí."
        },
        {
          question: "¿Cómo se decidió a venir a Argentina y realizarse la cirugía con la Fundación ETHE?",
          answer: "Cuando nos dimos cuenta de que no podíamos lidiar con esto en casa, tengo que confesar que, en un principio, miramos a los EEUU. Porque mi mamá es ciudadana de allí y vive a diez minutos de uno de los mejores hospitales. Así que empezamos a ver las opciones en los EEUU. Tuvimos algunas buenas respuestas iniciales, creo que una de las primeras fue de una fundación en Canadá que asiste a niños enfermos de todo el mundo. Bueno, después de enviar todas las muestras y papeles dijeron: «No podemos hacerlo.» No creo que dieran muchas más razones, sólo que no podían hacerlo.\n\nAsí que estaba cerrada esa vía y continuamos buscando en los Estados Unidos. Mi agente del seguro médico envió notas y papeles a algunos lugares; creo que fueron algo así como nueve hospitales. Sólo tres de ellos de los Estados Unidos y uno de Canadá estaban dispuestos a mirarlo y a tomarlo como un caso. Luego se tomaron un tiempo para devolvernos el precio de la cirugía y en el mes de agosto llegaron finalmente algunas cifras.\n\nAsí es como encontré en Internet acerca de la Fundación ETHE. Algunos médicos en particular, que eran la Doctora Doodnat y el Doctor Lee, habían mencionado la opción argentina antes pero nosotros estábamos viendo a los Estados Unidos. Esto fue porque estábamos estudiando la barrera del idioma y la distancia en la que se encuentra Argentina de casa. Pero después de recibir las cotizaciones de los Estados Unidos, los llamé para buscar otras opciones ya que el premio era un poco prohibitivo. El seguro médico habría cubierto la mitad de la cirugía y yo hubiera tenido que recaudar los fondos para la otra mitad. Así fue que nos encontramos con Fundación ETHE y mi marido y yo nos pusimos a investigar su sitio – por eso es que el sitio es muy importante- Y también investigamos historias en Trinidad en los periódicos línea acerca de la Fundación ETHE. Y cuando vimos que había trasplantes y cirugías realizadas por el Doctor Luque empezamos a emocionarnos. Porque vimos un camino por el que habían pasado otros trinitenses. Había algunos que realmente estaban mejor en Trinidad después de venir aquí y tener la experiencia de la cirugía con el Dr. Luque. Así que empezamos a sonreír. Sí. Empezamos a sentir mejor.\n\nLuego la médica en Trinidad, Doctora Doodnat, comenzó a interactuar con el Doctor Luque enviándole algunos exámenes médicos que solicitaba. Y empezaron a recopilar la información que necesitaba y luego, él envió un presupuesto. Y debo decir que nos quedamos impresionados por la cifra que envió de vuelta porque esperábamos que fuera mucho más caro de lo que era."
        },
        {
          question: "¿Cómo te sientes con los servicios ofrecidos por la Fundación ETHE?",
          answer: "Creo que es excelente y bien cualificado. Sentí que las enfermeras son muy humildes y orientadas al servicio. Tengo que confesar que nos hicieron sentir muy cómodos así que no tengo nada de qué quejarme. Sólo tengo cosas positivas que decir acerca de la calidad de los servicios médicos que recibimos aquí. Dr. Luque, por ejemplo, había estimado que Ayodele tendría que permanecer en el hospital durante dos semanas. Pero luego él tuvo que quedarse una semana más porque generó una infección y yo me sentí muy cómoda en ese momento. Me hicieron sentir muy bien. Lo único que importaba era que él se sintiera mejor ¿sabes?"
        },
        {
          question: "¿Qué le dirías a otra familia que está pasando por una situación similar en casa o en otro país?",
          answer: "Lo primero que me gustaría decirles es que hagan tanta investigación como puedan. Creo que de alguna manera por nuestros vínculos históricos con América del Norte, eso fue lo primero que me vino a mí. Quiero decir, los medios son América del Norte y en ellos se ve que hay instalaciones en los Estados Unidos y que son de calidad. Pero eso se convirtió en un obstáculo para mí, fue lo único que podíamos ver hasta que llegó la realidad del costo de los servicios médicos allá. Así que mi primer consejo es orar. Espero que tengan una comunidad para apoyarlos y para ayudarles. Y hagan mucha investigación. Miren todas las opciones. Nosotros, después de la investigación, nos dimos cuenta de que hay una gran cantidad de países en el mundo que ofrecen servicios médicos muy razonables. El doctor Luque siempre estuvo disponible para nosotros. Creo que si hubiéramos hecho mejor investigación y hubiéramos leído las historias en la web, podríamos haber ahorrado algún tiempo y hubiéramos podido ver más opciones desde el principio."
        },
        {
          question: "¿Cómo te sentiste en Argentina con la barrera del idioma?",
          answer: "Sentí que – honestamente – tenía que mejorar mi español. ¡Muchos argentinos son bilingües y pueden hablar tres idiomas! He hablado con mucha gente aquí que habla un poco de inglés pero también pueden hablar un poco de francés. Así que creo que tengo que revisar mis habilidades y no estar tan orientada al inglés (risas). Hablando en serio, creo que el idioma no fue un problema aquí. La mayoría de los argentinos hablan más de un idioma. Pero yo tengo planes de volver aquí en unos pocos años. Es un país hermoso y le he dicho a algunos amigos que la gente aquí me recuerda a los trinitenses. Aunque se trata de una gran ciudad y la gente siempre se está moviendo; ¡si usted va a la terraza en la mañana puede ver a la gente moviéndose hacia arriba y hacia abajo! (risas). Pero la gente de aquí se reúne para relajarse juntos, se los oye cantar por la mañana. Y eso realmente fue como estar en casa porque allá en Trinidad también salimos mucho juntos. La gente está muy orientada a la familia, les gusta pasar los ratos juntos. También son cálidos y hospitalarios cuando se llega a su país también como los trinitenses. Eso fue muy agradable."
        }
      ]
    },
    date: "2013",
  },
  {
    name: "Mikhail Ragoobar",
    slug: "mikhail-ragoobar",
    country: "Trinidad y Tobago",
    countryFlag: "🇹🇹",
    specialty: "Trasplante Hepático",
    image: "/testimonios/Mikhail_Ragoobar.jpg",
    excerpt: "Mikhail se recuperó de un Quiste de Colédoco.",
    content: "Entrevista a Himraj y Nadia, nacidos en Trinidad y Tobago y padres de Mikhail (4 años). Vinieron a Argentina para hacer una cirugía en un quiste de Coledoco que Mikhail tenía en su hígado. Luego de un exitoso procedimiento y buenos resultados, aquí su testimonio.",
    fullTestimony: {
      interviewer: "Himraj y Nadia, padres de Mikhail",
      sections: [
        {
          question: "¿Cuál fue el diagnóstico Mikhail y cómo se sintieron cuando llegó?",
          answer: "Nadia: Lo que tuvo Mikhail fue un quiste de colédoco. Al principio, no sabíamos realmente qué hacer. Los médicos en Trinidad tampoco sabían qué hacer con la situación porque él es un caso pediátrico y ellos han hecho esto antes en adultos pero nunca en un niño. Cuando Mikhail tuvo la complicación de pancreatitis se empeoró la situación. Entonces, después de un par de semanas, los médicos dijeron que deberíamos considerar ir a Argentina y para nosotros el sólo pensamiento de ir nos asustó mucho. Nos daba miedo.\n\nHimraj: Ir tan lejos de casa, ¿sabes?\n\nNadia: También sucede que tenemos otros dos niños que teníamos que tener en cuenta en el momento de tomar una decisión. Pero los médicos de Trinidad se pusieron en el trabajo de hacer los papeles para nosotros y nos dieron la opción de ir a Argentina. Nos dijeron que los médicos de aquí eran mucho mejores, que eran más capaces de manejar este tipo de situaciones y que había pediatras especialistas hepáticos. Así fue que mientras hablamos sobre el tema más y más, la decisión se nos hizo más fácil.\n\nHimraj: Mantener el contacto con Mario hizo que fuera mucho más fácil la transición ya que la logística necesaria para llegar hasta aquí también es importante. Cuando estás realmente por tomar una decisión te das cuenta de la importancia de todo y todos."
        },
        {
          question: "¿Cuándo fue el primer contacto con el Dr. Luque?",
          answer: "Nadia: Eso vino a través de los médicos de Mikhail.\n\nHimraj: Aproximadamente un mes después de que él fuera admitido en nuestro hospital local.\n\nNadia: Una vez que tuvimos la carta de aceptación del hospital fue cuando realmente comenzamos a tomar medidas para llegar a Argentina. A través de la Fundación Children Life Found tuvimos la posibilidad de recaudar fondos para llegar hasta aquí. Eso sí fue un gran proceso y tomó un mucho tiempo y tuvimos que ser pacientes. Pero el objetivo final siempre fue llegar a Argentina y conseguir que Mikhail se realizara la cirugía porque no podía seguir vivir así, un mes en cada hospital. Así no había manera real de que mejorara."
        },
        {
          question: "¿Cómo encontraron los servicios ofrecidos por la fundación ETHE?",
          answer: "Himraj: Fueron excelentes. Son muy profesionales, muy amables, muy serviciales. Ellos tratan de hablar en inglés y siempre se disculpan por si es pobre su manejo del mismo y yo creo que deberíamos ser nosotros quienes deberíamos disculparnos por nuestro pobre Español! (Risas).\n\nNadia: Ayer dijimos que todos hablamos “Spanglish” aquí porque ellos tratan de hablar un poco de Inglés y nosotros tratamos de hablar un poco de español. Creo que si tuviera que hacerlo todo de nuevo, me hubiera preparado un poco más y practicar un curso de español o algo. Pero creo que cuando tienes un niño enfermo no puedes pensar en hablar un idioma diferente. Por ejemplo, nosotros estábamos tan nerviosos de venir aquí porque estuvimos al límite tanto tiempo…que no podíamos pensar en otra cosa. Pero venir fue realmente una buena experiencia. Amamos a los médicos y a las enfermeras. Tenemos muy buenas enfermeras aquí en el hospital en quienes se puede ver que realmente les importa lo que hacen. El doctor Luque se preocupó mucho por Mikhail y la doctora Bailez también. Se puede ver que es auténtica su dedicación y eso te hace sentir mejor. Y la ciudad está muy bien, son como unas vacaciones para nosotros. Nunca hemos estado juntos fuera del país así que es nuestra primera vez fuera y es muy bonito."
        }
      ]
    },
    date: "2014",
  },
  {
    name: "Tonisha Rigaud",
    slug: "tonisha-rigaud",
    country: "Trinidad y Tobago",
    countryFlag: "🇹🇹",
    specialty: "Trasplante Hepático",
    image: "/testimonios/Tonisha_Rigaud.jpg",
    excerpt: "A Tonisha la diagnosticaron un Quiste de Colédoco a los 6 años.",
    content:
      "A Tonisha la diagnosticaron un Quiste de Colédoco a los 6 años. Sus padres, Tony e Isha, tomaron la decisión de confiar en la Fundación ETHE para realizar el procedimiento quirúrgico necesario. La confianza ganó y la operación resultó un éxito.",
    fullTestimony: {
      interviewer: "Tony e Isha, padres de Tonisha",
      sections: [
        {
          question: "¿Cuál fue el diagnóstico de Tonisha?",
          answer: "Conocimos a Tonisha Rigaud cuando tenía 6 años de edad. Sus papás, Tony e Isha, provenientes de Trinidad y Tobago, se pusieron en contacto con Fundación ETHE después de que Maria Bartholomew, le comentara al médico a cargo del caso (Dr. Hilary Lee-Cazabon) que allá por un país lejano se encontraba la oportunidad para Tonisha.\n\nDespués de varios exámenes no encontraban más respuestas que un diagnóstico: “Quiste de Colédoco”, dijeron los médicos y un procedimiento quirúrgico como solución: Hepático Yeyunotomias-Laparoscopia. El quiste del colédoco es una malformación de la vía biliar poco frecuente que esta comúnmente asociado a alteraciones de la unión biliopancreática en la gran mayoría de los casos. Se puede presentar a cualquier edad, pero se diagnostica con mayor frecuencia en la infancia.\n\n“Teníamos mucho miedo, estábamos traumatizados, no sabíamos que teníamos que hacer”, dijo Tony. “No teníamos suficiente información sobre eso y por el dolor que ella tenía, teníamos miedo de que fuera algo malo”, anunció su mamá. El miedo, dicen estos papás después de revivir todo lo sucedido, es una de las principales causas que inmovilizan a muchas familias a tomar una decisión.\nPero la confianza ganó y la operación resultó un éxito."
        },
        {
          question: "¿Cómo fue el primer contacto con Dr. Luque (Director Médico de Fundación ETHE)?",
          answer: "Fue por Skype, una entrevista donde se sentó y habló con nosotros. Con la doctora de allá comenzaron a hacer dibujos para intentar hacernos entender lo que estaba sucediendo. Y nos hizo sentir cómodos porque nosotros queríamos lo mejor para Tonisha. Nos hizo sentir seguros y entendió lo que estábamos buscando. Y después de eso solo queríamos venir y deseábamos conocerlo. Teníamos toda la confianza en lo que él nos decía porque era realista y eso era suficiente para nosotros. Y no nos lamentamos de nada. Sonreímos cada día y estamos contentos ahora. Sabes…el Dr. Luque es tan alegre. Mario… es tan divertido también. Entonces todo está muy bien. Son muy buenos con nosotros."
        },
        {
          question: "¿Cuáles eran sus dudas y miedos cuando les dijeron que tenían su oportunidad para Tonisha en Argentina?",
          answer: "Oh…sí. Habíamos llegado hasta acá y teníamos que ir a otro país nuevo y no sabíamos el idioma porque acá es español y el nuestro es inglés. Entonces, estábamos preocupados por cómo íbamos a comunicarnos. Pero otra vez, él (Dr. Luque) tenía eso también planeado. Y tuvimos un muy buen traductor…Ese es Santi….que es muy cool y tradujo todo para nosotros y nos explicó todo. Y estaba siempre ahí, por teléfono. Ellos realmente prepararon el lugar para que nos sintiéramos cómodos. De hecho estamos en casa aunque no estemos en casa. Así es como nos sentimos. Y eso es bueno."
        },
        {
          question: "¿Y tu Isha? ¿Cómo te sentiste?",
          answer: "Fue muy traumático para mí, porque era tan lejos de casa. Iba a ser la primera vez que iba a conocer al Dr. Luque en persona y no teníamos una relación con él como teníamos relación con los doctores allá en casa. Pero él nos hizo sentir muy cómodos desde el momento que pisamos Argentina. Nos acomodó muy bien, nos explicó todos los procedimientos que iban a hacer en Tonisha, los riesgos y eso nos hizo sentir muy cómodos y seguros de que cuidarían de Tonisha. Así que no tuvimos problemas hasta ahora. Realmente nos sentimos en casa. Y cada procedimiento que se hacía con Tonisha éramos informados, nos explicaban y todo era analizado con nosotros como papás. Entonces teníamos la última decisión sobre todo lo que se hacía. Todo fue 100% no como esperábamos…sino perfecto.\n\nSí…porque nuestra duda era que iba a pasar después.\n\nY fue 100% bueno."
        },
        {
          question: "¿Qué dirían a una familia que está atravesando por una situación similar a la que ustedes pasaron con Tonisha?",
          answer: "Yo les diría que tengan la mente abierta al respecto y que confíen, que tengan confianza. Porque tus dudas pueden generar más problemas…entonces esas veces que hay dudas, solo hazlo; porque esta gente realmente cuida de ti y quiere ayudarte. Eso es todo lo que quieren hacer: ayudar. Entonces, hay que sacarse ese miedo y dudas. Porque te diría que eso es lo más grande en un papá…el miedo. Miedo a ir a otro país, a donde no hablas el idioma, miedo porque no conoces esta gente. Pero cuando puedes despejar esas cosas, y abrir tu mente, te das cuenta que era tu propio miedo el que te mantenía atrás. Por eso yo le diría a cualquier familia que esto es bueno, los doctores son seguros, no va a pasar nada que no puedas enterarte. Ellos no van a hacer nada sin preguntarte antes de hacerlo y asegurarse de que tú vas a estar cómodo con eso. Recuerdo una vez que me preguntaban qué hacer y yo decía…”tú eres el doctor, haz lo que le parezca”. Pero él no…estaba esperando a decirme a mí para después hacerlo y eso fue muy bueno."
        },
        {
          question: "¿Y tú Isha? ¿Qué dirías como mamá?",
          answer: "Fue terrorífico para a mí. Pero una vez que haces mucha investigación y haces muchas preguntas, hasta las preguntas que suenan más tontas, el Dr. Luque está ahí para responderlas. Entonces deja el miedo porque ellos están aquí para ayudar y estuvieron ahí al 100% para hacer sentir a Tonisha mejor."
        },
        {
          question: "¿Nos vendrían a visitar otra vez?",
          answer: "¡Por supuesto, si! Estamos considerando hacernos residentes permanentes de Argentina (risas). Es muy lindo aquí. No es lo que estabas esperando, no es lo que escuchas sobre Argentina, es exactamente lo opuesto. Es muy lindo, confíen! Yo estaba en la misma situación. Pero están en buenas manos!"
        },
        {
          question: "¿Qué es lo primero que les gustaría hacer cuando lleguen a casa?",
          answer: "Tenemos un hijo y lo dejamos en casa por Tonisha. Y lo primero que quiero hacer es malcriarlo un poco. Darle besos y abrazos. ¡Y después comer un buen plato de nuestra comida típica!"
        }
      ]
    },
    date: "2015",
  },
  {
    name: "Nathaniel Cipriani",
    slug: "nathaniel-cipriani",
    country: "Trinidad y Tobago",
    countryFlag: "🇹🇹",
    specialty: "Trasplante Hepático",
    image: "/testimonios/NATHANIEL-2-500x500.jpg",
    excerpt: "Recuperar la infancia: Nathaniel Cipriani fue Atresia Biliar y fue trasplantado exitoso.",
    content:
      "Nathaniel Cipriani fue Atresia Biliar y fue trasplantado exitoso. Risa y Alester, su madre biológica y padre adoptivo, cuentan su historia.",
    fullTestimony: {
      interviewer: "Risa y Alester, madre biológica y padre adoptivo de Nathaniel",
      sections: [
        {
          question: "¿Cómo descubrieron su enfermedad, sus primeros síntomas?",
          answer: "Risa: A los cinco días de nacer, sus ojos estaban amarillos y los ingresaron al hospital por diez días. Luego de hacer los exámenes de sangre el doctor nos dijo que podíamos irnos a casa, pero no pudimos irnos. Al final, cuando tenía cuatro meses, su doctor le diagnosticó atresia de vías biliares."
        },
        {
          question: "¿Cómo descubrieron la Fundación ETHE?",
          answer: "Al principio no sabíamos nada. No enteramos luego por las otras familias de allá, que habían venido aquí. Ellos sabían sobre la Fundación."
        },
        {
          question: "¿Cómo y por qué decidieron venir a Argentina y confiar en el programa de la Fundación ETHE?",
          answer: "Risa: Tenemos un grupo allá con todos los chicos que recibieron trasplante de hígado y el doctor especialista que trata a Nathaniel en Trinidad me ofreció incluirme en el grupo con esos niños y sus padres, que sabían un poco más sobre la situación. Luego de reunirnos con el Dr. Luque, cuando estuvo en Trinidad, supimos que la solución estaba en Argentina. Recibimos otras ofertas de hospitales de otros países pero nos quedamos con esta porque habíamos visto los resultados. Y siempre hablaba con el Dr. Luque regularmente, y cada vez que llevaba a Nathaniel al hospital él me escribía para estar al tanto de todo. Yo estaba cómoda con la decisión de venir acá. No pensaba ir a ningún otro lado."
        },
        {
          question: "¿Cómo se sintieron y que nos pueden decir de los profesionales médicos que atendieron a Nathaniel, de la calidad del servicio médico, de las enfermeras y las instalaciones del hospital?",
          answer: "Risa: Muy bueno. Estuvo muy bien. Estoy satisfecha con los cirujanos, hicieron un buen trabajo. Los otros doctores, las enfermeras y todo el hospital fueron muy atentos y cuidaron muy bien de él. Estamos conformes con todo"
        },
        {
          question: "¿Qué o cuáles sentimientos tenían días antes del trasplante?",
          answer: "Risa: Miedo. Era todo un día, porque la cirugía llevaba entre 10 y 12 horas. Pero al final del día no queda otra cosa más que esperar. Había visto resultados en los otros niños así que sabía que iba a salir bien. Pero tuvimos mucho apoyo de amigos y de las traductoras también, así pude pasarlo."
        },
        {
          question: "¿Cuál es su estado actual y sus pensamientos viendo a Nathaniel tan recuperado y con una Mirada hacia atrás de todo lo que usted y su familia han pasado para llegar hasta este momento?",
          answer: "Risa: Por empezar subió de peso que era el objetivo porque siempre estuvo por debajo de su peso y siempre intenté que subiera. Y luego de la cirugía tenía mucha más energía, como pueden ver. Se lo ve bien, está intentando caminar, porque no lo podía hacer antes, no podía ni gatear porque tenía el estómago muy grande. Y ahora está intentando dar unos pasos por sí mismo y caminar y está comiendo mucho. ¡Así que está muy bien ahora, gracias a dios todo va bien por ahora!"
        },
        {
          question: "¿Les gustaría volver a la Argentina? ¿Por qué?",
          answer: "Risa: Si. Vamos a volver cuando él tenga quince años, así sabe dónde le hicimos el trasplante. Porque la gente de acá es muy buena, y los lugares muy lindos, si bien no pudimos pasear mucho, los lugares que visitamos son muy lindos."
        },
        {
          question: "¿Qué le dirías a otra familia que está pasando por una situación similar?",
          answer: "Risa: Les haría saber que es una batalla muy muy larga. Que al final del día tienen que estar ahí para sus hijos y rezar con él. Que tiene que hacer más, preguntar, en cuanto a las cosas médicas. Cómo cuando vayan al hospital, o si tienen preguntas para el Dr. Luque, que hagan más preguntas, porque yo no tenía ni idea y gracias a las otras familias fuimos conociendo un poco más sobre el tema y leímos un poco también. Y decidimos venir a Argentina porque vimos dos niños que habían estado muy mal y ahora son niños sanos y felices. No se rindan. Pueden pensar que no hay solución pero siempre hay una forma. Con la ayuda de los cirujanos y el Dr. Luque pueden superarlo."
        },
        {
          question: "¿Qué puedes decirnos de la situación legal que tuvieron que atravesar al no ser el donante un familiar directo?",
          answer: "Risa: Bueno, es la primera vez que tuvimos que hacer algo así. No sé qué quiere decir el, ya que fue el quien pasó por todo esto, no yo. Yo solo participé como madre, tutora y esposa, pero él fue el donante, no sé cómo se sintió el durante esta proceso legal.\n\nAlester: Honestamente me sentí muy cómodo, porque en definitiva nadie me obligó a hacerlo, fue una decisión mía. Risa tenía otros donantes en su familia. Algunos, pero no pudieron hacerle por diferentes motivos. Tenían esposa o hijos y no podían venir y dejar alá a su familia. Un hermano iba a donar y pasó lo mismo. El hermano iba a ser donante y le descubrieron glaucoma asique tampoco pudo. Para ese entonces ya estábamos casados. Y pensé, si ya estamos casados, Nathaniel es cómo mi hijo ¿no? Porque si estamos casados formas parte de mi vida y Nathaniel también. Entonces me pareció lo mejor donar el 25% de mi hígado a Nathaniel."
        }
      ]
    },
    date: "2016",
  },
  {
    name: "Caso Yeiner",
    slug: "yeiner",
    country: "Desconocido",
    countryFlag: "🌍",
    specialty: "Testimonio en Video",
    image: null,
    excerpt: "Testimonio en video de Yeiner.",
    content: "",
    date: "2024",
    videoUrl: "https://player.vimeo.com/video/1049385792?h=208548e562"
  },
  {
    name: "Caso Manuel",
    slug: "manuel",
    country: "Desconocido",
    countryFlag: "🌍",
    specialty: "Testimonio en Video",
    image: null,
    excerpt: "Testimonio en video de Manuel.",
    content: "",
    date: "2024",
    videoUrl: "https://player.vimeo.com/video/1049402203?h=c23668cbd3"
  },
  {
    name: "Caso Scarlett",
    slug: "scarlett",
    country: "Desconocido",
    countryFlag: "🌍",
    specialty: "Testimonio en Video",
    image: null,
    excerpt: "Testimonio en video de Scarlett.",
    content: "",
    date: "2020",
    videoUrl: "https://player.vimeo.com/video/484584864?h=4175b5b53c"
  },
  {
    name: "Caso Yarielis",
    slug: "yarielis",
    country: "Desconocido",
    countryFlag: "🌍",
    specialty: "Testimonio en Video",
    image: null,
    excerpt: "Testimonio en video de Yarielis.",
    content: "",
    date: "2020",
    videoUrl: "https://player.vimeo.com/video/484587983?h=bb9a53acd4"
  },
]
