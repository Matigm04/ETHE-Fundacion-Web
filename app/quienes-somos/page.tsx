import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Eye, Heart, Users, Award, Lightbulb } from "lucide-react"

export default function AboutUsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0a4d5c] to-[#5dbfb3] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Quiénes Somos</h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Conoce nuestra historia, misión y el equipo comprometido con el bienestar de la comunidad
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a4d5c] mb-6 text-center">Nuestra Historia</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-4">
                Fundación ETHE nació en 2010 con el objetivo de brindar apoyo integral a las comunidades más
                vulnerables. Desde nuestros inicios, hemos trabajado incansablemente para ofrecer servicios de calidad
                en áreas fundamentales como la salud, educación, asesoría legal y apoyo psicológico.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                A lo largo de los años, hemos crecido gracias al compromiso de nuestro equipo de profesionales y al
                apoyo de la comunidad. Hoy, somos una organización reconocida por su transparencia, profesionalismo y
                dedicación al servicio social.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nuestro enfoque multidisciplinario nos permite abordar las necesidades de manera integral, asegurando
                que cada persona reciba la atención y el apoyo que merece.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 md:py-24 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-[#5dbfb3]">
              <CardHeader>
                <div className="w-14 h-14 bg-[#5dbfb3] rounded-lg flex items-center justify-center mb-4">
                  <Target className="text-white" size={28} />
                </div>
                <CardTitle className="text-2xl text-[#0a4d5c]">Nuestra Misión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Brindar servicios profesionales y especializados de alta calidad para mejorar la calidad de vida de
                  las personas y familias en situación de vulnerabilidad, promoviendo su desarrollo integral y
                  bienestar.
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#5dbfb3]">
              <CardHeader>
                <div className="w-14 h-14 bg-[#5dbfb3] rounded-lg flex items-center justify-center mb-4">
                  <Eye className="text-white" size={28} />
                </div>
                <CardTitle className="text-2xl text-[#0a4d5c]">Nuestra Visión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Ser una organización líder en el apoyo social y comunitario, reconocida por su excelencia,
                  transparencia y compromiso con el desarrollo humano sostenible.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a4d5c] mb-12 text-center">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="border-[#5dbfb3] hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#5dbfb3] rounded-lg flex items-center justify-center mb-4">
                  <Heart className="text-white" size={24} />
                </div>
                <CardTitle className="text-[#0a4d5c]">Empatía</CardTitle>
                <CardDescription>
                  Nos ponemos en el lugar del otro para comprender sus necesidades y brindar apoyo genuino
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-[#5dbfb3] hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#5dbfb3] rounded-lg flex items-center justify-center mb-4">
                  <Users className="text-white" size={24} />
                </div>
                <CardTitle className="text-[#0a4d5c]">Compromiso</CardTitle>
                <CardDescription>
                  Dedicación absoluta al bienestar de nuestra comunidad y al cumplimiento de nuestra misión
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-[#5dbfb3] hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#5dbfb3] rounded-lg flex items-center justify-center mb-4">
                  <Award className="text-white" size={24} />
                </div>
                <CardTitle className="text-[#0a4d5c]">Excelencia</CardTitle>
                <CardDescription>
                  Buscamos la calidad en cada servicio que ofrecemos, con profesionalismo y dedicación
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-[#5dbfb3] hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#5dbfb3] rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="text-white" size={24} />
                </div>
                <CardTitle className="text-[#0a4d5c]">Transparencia</CardTitle>
                <CardDescription>
                  Actuamos con honestidad y claridad en todas nuestras acciones y comunicaciones
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a4d5c] mb-6 text-center">Nuestro Equipo</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto leading-relaxed">
            Contamos con un equipo multidisciplinario de profesionales altamente calificados y comprometidos con nuestra
            misión
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-[#5dbfb3]">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-[#5dbfb3] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">DR</span>
                </div>
                <CardTitle className="text-[#0a4d5c]">Dr. Roberto Martínez</CardTitle>
                <CardDescription>Director Médico</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 text-center">
                  Especialista en medicina familiar con 15 años de experiencia en atención comunitaria
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#5dbfb3]">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-[#5dbfb3] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">LC</span>
                </div>
                <CardTitle className="text-[#0a4d5c]">Lic. Carolina Fernández</CardTitle>
                <CardDescription>Coordinadora de Trabajo Social</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 text-center">
                  Trabajadora social con amplia experiencia en programas de desarrollo comunitario
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#5dbfb3]">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-[#5dbfb3] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">AB</span>
                </div>
                <CardTitle className="text-[#0a4d5c]">Abg. Miguel Sánchez</CardTitle>
                <CardDescription>Asesor Legal</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 text-center">
                  Abogado especializado en derecho civil y familiar, comprometido con la justicia social
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#5dbfb3]">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-[#5dbfb3] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">PS</span>
                </div>
                <CardTitle className="text-[#0a4d5c]">Psic. Laura Gómez</CardTitle>
                <CardDescription>Psicóloga Clínica</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 text-center">
                  Especialista en terapia familiar y atención a víctimas de violencia
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#5dbfb3]">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-[#5dbfb3] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">EN</span>
                </div>
                <CardTitle className="text-[#0a4d5c]">Enf. Patricia Ruiz</CardTitle>
                <CardDescription>Enfermera Coordinadora</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 text-center">
                  Enfermera profesional con experiencia en atención primaria y programas de salud preventiva
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#5dbfb3]">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-[#5dbfb3] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">AD</span>
                </div>
                <CardTitle className="text-[#0a4d5c]">Lic. Andrea Torres</CardTitle>
                <CardDescription>Directora Administrativa</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 text-center">
                  Administradora con experiencia en gestión de organizaciones sin fines de lucro
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
