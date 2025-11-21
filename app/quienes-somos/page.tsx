import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Users, Heart, Globe, GraduationCap, Microscope, HeartHandshake, HandHeart } from "lucide-react"

export default function AboutUsPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-[#5bbaa5] text-white py-16 md:py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 right-20 w-32 h-32 bg-[#ffcb05] opacity-15 rounded-full" />
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-white opacity-10 rounded-full" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <span className="text-sm font-semibold uppercase tracking-wider">Nuestra Historia</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Quiénes somos</h1>
            <div className="max-w-[80%] mx-auto">
              <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
                Somos un equipo de profesionales seleccionados por su reconocida trayectoria en cada una de sus 
                especialidades de medicina de alta complejidad.
              </p>
              <p className="text-base md:text-lg text-white/80 leading-relaxed">
                Nos identificamos por nuestros valores éticos y por nuestro alto grado de compromiso para transmitir 
                y compartir conocimientos, con el objetivo de capacitar en pos de brindar el mejor tratamiento al paciente.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#f5f7fa]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <p className="text-[#5bbaa5] font-semibold mb-2 uppercase tracking-wider text-sm text-center">Nuestra Fundación</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#00334e] mb-12 text-center">Acerca de ETHE</h2>
            
            {/* Misión */}
            <Card className="border-2 border-[#5dbfb3] hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-[#5dbfb3] to-[#0a4d5c] rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Target className="text-white" size={32} />
                </div>
                <CardTitle className="text-2xl text-[#0a4d5c] text-center">Misión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed text-center">
                  Promover el desarrollo de la medicina de alta complejidad en el Caribe y Centro América a través de la 
                  obtención de recursos públicos y privados, los cuales son destinados a la formación y capacitación de 
                  profesionales de todas las especialidades involucradas en este proceso.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#00334e]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="inline-block px-4 py-2 bg-white/10 rounded-full mb-6 mx-auto block w-fit">
              <span className="text-sm font-semibold uppercase tracking-wider text-white">Nuestros Objetivos</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
              Objetivos de la Fundación
            </h3>
            <p className="text-white/90 text-center mb-12 text-lg max-w-3xl mx-auto">
              Para dar cumplimiento a su Misión, la Fundación desarrolla y promueve los siguientes objetivos:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <Card className="border-2 border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-14 h-14 bg-[#5bbaa5] rounded-lg flex items-center justify-center mb-4">
                    <Users className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-white text-lg">Red de Especialistas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Componer una red de médicos especialistas y voluntarios asociados a la detección temprana de pacientes que necesiten acceder rápidamente a cirugías o tratamientos médicos de alta complejidad por médicos expertos en cada especialidad y de esta manera cumplir con dos metas, mejorar la calidad de vida del paciente y la formación de los médicos participantes a través de los ateneos correspondientes.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-14 h-14 bg-[#5bbaa5] rounded-lg flex items-center justify-center mb-4">
                    <HeartHandshake className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-white text-lg">Colaboración Institucional</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Articular con otras Instituciones para brindar diversos beneficios al paciente promoviendo a su vez el intercambio, colaboración y alianzas con entidades, organismos públicos y privados, que posean los mismos principios éticos.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-14 h-14 bg-[#5bbaa5] rounded-lg flex items-center justify-center mb-4">
                    <Globe className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-white text-lg">Difusión Global</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Promover y difundir los avances multidisciplinarios de la alta complejidad médica en todo el mundo.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-14 h-14 bg-[#5bbaa5] rounded-lg flex items-center justify-center mb-4">
                    <Microscope className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-white text-lg">Investigación e Innovación</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Fomentar e incentivar la investigación médica innovadora y la excelencia en la educación en el ejercicio de la medicina.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-14 h-14 bg-[#5bbaa5] rounded-lg flex items-center justify-center mb-4">
                    <GraduationCap className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-white text-lg">Formación Profesional</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Contribuir al desarrollo y dictados de cursos por expertos, para la formación de profesionales en el área de la salud, programas de trasplantes, medicina de alta complejidad, entre otros, los cuales podrán realizarse en su país de origen o en el exterior.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-14 h-14 bg-[#5bbaa5] rounded-lg flex items-center justify-center mb-4">
                    <HandHeart className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-white text-lg">Donación de Órganos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Promover la Donación de Órganos poniendo especial atención a la educación, divulgación y concientización de la población general.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-14 h-14 bg-[#5bbaa5] rounded-lg flex items-center justify-center mb-4">
                    <Heart className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-white text-lg">Asistencia Integral</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Coordinar y facilitar la asistencia médica, estudios de laboratorio de análisis clínicos, obtención de medicamentos, estudios complementarios, cobertura de viáticos y/u hospedaje a cada paciente, colaborando a su vez en la contención emocional a pacientes y familiares que aguarden o se recuperen de un trasplante de órganos.
                  </p>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#cfa46c]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <p className="text-[#5bbaa5] font-semibold mb-2 uppercase tracking-wider text-sm text-center">Confía en Nosotros</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#00334e] mb-6 text-center">Elegir ETHE</h2>
            <p className="text-xl text-[#5dbfb3] mb-8 text-center font-semibold">
              Las razones por las cuales confiar en la Fundación
            </p>
            
            <div className="mb-12 space-y-6 text-gray-600 leading-relaxed">
              <p>
                Desde Fundación ETHE, nos proponemos mejorar la calidad de vida de nuestros pacientes a través de cirugías de alta complejidad médica, siendo nuestra especialidad los trasplantes hepáticos, renales y las cardiopatías congénitas pediátricas.
              </p>
              <p>
                El equipo de ETHE está formado por expertos médicos de renombre y un equipo de asistencia personalizada a los pacientes que ofrecen el mejor servicio, desde asistir a los pacientes con los planes de viaje hasta asegurares una experiencia placentera durante su estadía en Argentina. Con el foco en la inclusión social, buscamos facilitar a personas de cualquier parte del mundo la posibilidad de realizar el trasplante que necesitan, colaborando con aquellos que presenten dificultades económicas y buscando alternativas de financiación.
              </p>
              <p>
                Además, en los casos que se requiera, gestionamos la asistencia médica, estudios de laboratorio, estudios de análisis clínicos, obtención de medicamentos, estudios médicos complementarios, cobertura de viáticos y/u hospedaje para pacientes del país y del extranjero. Sabemos lo dificultoso que es ese momento y los acompañamos con una asistencia integral.
              </p>
              <p>
                Fundación ETHE trabaja junto a esferas gubernamentales (embajadas, ministerios de salud, etcétera), profesionales de la salud, centros médicos de alta calidad y un equipo dedicado a las necesidades especiales del paciente y sus familiares al llegar a Argentina. Es importante resaltar la excelente relación de confianza que se desarrolló a lo largo de los años entre las Instituciones Médicas, nuestro Equipo Profesional y los Ministerios Públicos de los distintos países. ETHE es una Fundación que busca promover el desarrollo de la medicina de alta complejidad a través de la educación y capacitación de los profesionales en todas las especialidades involucradas en el proceso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[#5bbaa5] font-semibold mb-2 uppercase tracking-wider text-sm">Nuestro Trabajo</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#00334e] mb-4">
                Conoce más sobre nuestro trabajo
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Descubre cómo Fundación ETHE transforma vidas a través de la medicina de alta complejidad
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#5dbfb3]/20 bg-gray-100">
              <div className="relative pb-[56.25%]"> {/* 16:9 Aspect Ratio */}
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/uc7F2Zp7S-A?start=47"
                  title="Fundación ETHE - Trasplante Hepático, Renal, Cardiopatías, Medicina Fetal"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}