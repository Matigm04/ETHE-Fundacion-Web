import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Users, Heart, Globe, GraduationCap, Microscope, HeartHandshake, Eye, Award, Plane, HandHeart, Building2 } from "lucide-react"

export default function AboutUsPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-[#0a4d5c] to-[#5dbfb3] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
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

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a4d5c] mb-12 text-center">Acerca de ETHE</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

              {/* Visión */}
              <Card className="border-2 border-[#5dbfb3] hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-[#5dbfb3] to-[#0a4d5c] rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <Eye className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-2xl text-[#0a4d5c] text-center">Visión</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed text-center">
                    Ser la fundación líder que garantiza el acceso a tratamientos de alta complejidad y la formación médica 
                    de excelencia en la región, creando un futuro más saludable para todos.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-[#0a4d5c] mb-6 text-center">
              Objetivos de la Fundación
            </h3>
            <p className="text-gray-600 text-center mb-12 text-lg max-w-3xl mx-auto">
              Para dar cumplimiento a su Misión, la Fundación desarrolla y promueve los siguientes objetivos:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <Card className="border-2 border-[#5dbfb3]/30 bg-white hover:shadow-2xl hover:border-[#0a4d5c] transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-[#5dbfb3] to-[#0a4d5c] rounded-lg flex items-center justify-center mb-4">
                    <Users className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-[#0a4d5c] text-lg">Red de Especialistas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Componer una red de médicos especialistas y voluntarios asociados a la detección temprana de pacientes 
                    que necesiten acceder rápidamente a cirugías o tratamientos médicos de alta complejidad.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#5dbfb3]/30 bg-white hover:shadow-2xl hover:border-[#0a4d5c] transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-[#5dbfb3] to-[#0a4d5c] rounded-lg flex items-center justify-center mb-4">
                    <HeartHandshake className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-[#0a4d5c] text-lg">Colaboración Institucional</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Articular con otras Instituciones para brindar diversos beneficios al paciente promoviendo el 
                    intercambio, colaboración y alianzas con entidades públicas y privadas.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#5dbfb3]/30 bg-white hover:shadow-2xl hover:border-[#0a4d5c] transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-[#5dbfb3] to-[#0a4d5c] rounded-lg flex items-center justify-center mb-4">
                    <Globe className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-[#0a4d5c] text-lg">Difusión Global</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Promover y difundir los avances multidisciplinarios de la alta complejidad médica en todo el mundo.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#5dbfb3]/30 bg-white hover:shadow-2xl hover:border-[#0a4d5c] transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-[#5dbfb3] to-[#0a4d5c] rounded-lg flex items-center justify-center mb-4">
                    <Microscope className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-[#0a4d5c] text-lg">Investigación e Innovación</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Fomentar e incentivar la investigación médica innovadora y la excelencia en la educación en el 
                    ejercicio de la medicina.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#5dbfb3]/30 bg-white hover:shadow-2xl hover:border-[#0a4d5c] transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-[#5dbfb3] to-[#0a4d5c] rounded-lg flex items-center justify-center mb-4">
                    <GraduationCap className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-[#0a4d5c] text-lg">Formación Profesional</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Contribuir al desarrollo de cursos por expertos para la formación de profesionales en medicina de 
                    alta complejidad y programas de trasplantes.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#5dbfb3]/30 bg-white hover:shadow-2xl hover:border-[#0a4d5c] transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-[#5dbfb3] to-[#0a4d5c] rounded-lg flex items-center justify-center mb-4">
                    <Heart className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-[#0a4d5c] text-lg">Asistencia Integral</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Coordinar asistencia médica, estudios, medicamentos y hospedaje, brindando contención emocional a 
                    pacientes y familiares durante trasplantes.
                  </p>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a4d5c] mb-6 text-center">Elegir ETHE</h2>
            <p className="text-xl text-[#5dbfb3] mb-12 text-center font-semibold">
              Las razones por las cuales confiar en la Fundación
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              <Card className="border-2 border-[#5dbfb3]/30 hover:shadow-2xl hover:border-[#0a4d5c] transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#5dbfb3] to-[#0a4d5c] rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <Award className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-[#0a4d5c] text-lg">Experiencia Médica de Renombre</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed text-center">
                    Nuestro equipo está formado por expertos médicos de renombre en trasplantes hepáticos, renales y 
                    cardiopatías congénitas pediátricas.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#5dbfb3]/30 hover:shadow-2xl hover:border-[#0a4d5c] transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#5dbfb3] to-[#0a4d5c] rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <Plane className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-[#0a4d5c] text-lg">Asistencia Personalizada 360°</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed text-center">
                    Ofrecemos un servicio único de asistencia personalizada, desde asistir con los planes de viaje hasta 
                    asegurar una experiencia placentera durante su estadía en Argentina.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#5dbfb3]/30 hover:shadow-2xl hover:border-[#0a4d5c] transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#5dbfb3] to-[#0a4d5c] rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <HandHeart className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-[#0a4d5c] text-lg">Foco en Inclusión Social</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed text-center">
                    Buscamos facilitar el acceso a trasplantes a personas de cualquier parte del mundo, colaborando con 
                    aquellos que presenten dificultades económicas.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#5dbfb3]/30 hover:shadow-2xl hover:border-[#0a4d5c] transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#5dbfb3] to-[#0a4d5c] rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <Building2 className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-[#0a4d5c] text-lg">Confianza Institucional</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed text-center">
                    Trabajamos junto a esferas gubernamentales, profesionales de la salud y centros médicos, construyendo 
                    una sólida red de confianza internacional.
                  </p>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}