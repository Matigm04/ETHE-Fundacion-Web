import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Stethoscope, Heart, Microscope, User } from "lucide-react"

export default function QuienesSomosPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-[#5bbaa5] text-white py-12 md:py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 right-20 w-32 h-32 bg-[#ffcb05] opacity-15 rounded-full" />
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-white opacity-10 rounded-full" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 font-goudy">Quiénes Somos</h1>
            <div className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed space-y-4">
              <p>
                Somos un equipo de profesionales seleccionados por su reconocida trayectoria en cada una de sus 
                especialidades de medicina de alta complejidad. Nos identificamos por nuestros valores éticos y por nuestro 
                alto grado de compromiso para transmitir y compartir conocimientos, con el objetivo de capacitar en pos 
                de brindar el mejor tratamiento al paciente.
              </p>
              <p>
                Conoce al equipo de profesionales altamente calificados que hacen posible nuestra misión de excelencia 
                en medicina de alta complejidad. Cada miembro de nuestro staff aporta experiencia y dedicación para 
                brindar el mejor cuidado a nuestros pacientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Liderazgo / Consejo de Administración */}
      <section className="py-12 bg-[#f5f7fa]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <p className="text-[#5bbaa5] font-semibold mb-1 md:mb-2 uppercase tracking-wider text-xs md:text-sm text-center">Liderazgo</p>
            <h2 className="text-xl md:text-3xl font-bold text-[#00334e] mb-6 md:mb-8 text-center">
              Consejo de administración
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-40 md:h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="w-20 h-20 md:w-32 md:h-32 bg-gradient-to-br from-[#0a4d5c] to-[#5dbfb3] rounded-full flex items-center justify-center">
                    <User className="text-white" size={32} />
                  </div>
                </div>
                <CardHeader className="text-center p-3 md:p-6">
                  <CardTitle className="text-[#0a4d5c] text-xs md:text-lg font-bold leading-tight">ING. JOSÉ MARIO FRONTALINI</CardTitle>
                  <CardDescription className="text-[#5dbfb3] font-semibold text-[10px] md:text-base">Presidente</CardDescription>
                </CardHeader>
              </Card>

              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-40 md:h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="w-20 h-20 md:w-32 md:h-32 bg-gradient-to-br from-[#0a4d5c] to-[#5dbfb3] rounded-full flex items-center justify-center">
                    <User className="text-white" size={32} />
                  </div>
                </div>
                <CardHeader className="text-center p-3 md:p-6">
                  <CardTitle className="text-[#0a4d5c] text-xs md:text-lg font-bold leading-tight">DR. CARLOS DANIEL LUQUE</CardTitle>
                  <CardDescription className="text-[#5dbfb3] font-semibold text-[10px] md:text-base">Director Médico</CardDescription>
                </CardHeader>
              </Card>

              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-40 md:h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="w-20 h-20 md:w-32 md:h-32 bg-gradient-to-br from-[#0a4d5c] to-[#5dbfb3] rounded-full flex items-center justify-center">
                    <User className="text-white" size={32} />
                  </div>
                </div>
                <CardHeader className="text-center p-3 md:p-6">
                  <CardTitle className="text-[#0a4d5c] text-xs md:text-lg font-bold leading-tight">DR. GUSTAVO RAÚL BIANCO</CardTitle>
                  <CardDescription className="text-[#5dbfb3] font-semibold text-[10px] md:text-base">Director Ejecutivo</CardDescription>
                </CardHeader>
              </Card>

              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-40 md:h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="w-20 h-20 md:w-32 md:h-32 bg-gradient-to-br from-[#0a4d5c] to-[#5dbfb3] rounded-full flex items-center justify-center">
                    <User className="text-white" size={32} />
                  </div>
                </div>
                <CardHeader className="text-center p-3 md:p-6">
                  <CardTitle className="text-[#0a4d5c] text-xs md:text-lg font-bold leading-tight">LIC. MAYQUEL MENDOZA</CardTitle>
                  <CardDescription className="text-[#5dbfb3] font-semibold text-[10px] md:text-base">Estudio Contable</CardDescription>
                </CardHeader>
              </Card>

              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-40 md:h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="w-20 h-20 md:w-32 md:h-32 bg-gradient-to-br from-[#0a4d5c] to-[#5dbfb3] rounded-full flex items-center justify-center">
                    <User className="text-white" size={32} />
                  </div>
                </div>
                <CardHeader className="text-center p-3 md:p-6">
                  <CardTitle className="text-[#0a4d5c] text-xs md:text-lg font-bold leading-tight">LIC. CHRISTINE VALENZUELA</CardTitle>
                  <CardDescription className="text-[#5dbfb3] font-semibold text-[10px] md:text-base">Directora Desarrollo Institucional</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Profesionales Médicos */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <p className="text-[#5bbaa5] font-semibold mb-1 md:mb-2 uppercase tracking-wider text-xs md:text-sm text-center">Especialistas</p>
            <h2 className="text-xl md:text-3xl font-bold text-[#00334e] mb-6 md:mb-8 text-center">
              Profesionales médicos
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-32 md:h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-[#5dbfb3] to-[#0a4d5c] rounded-full flex items-center justify-center">
                    <Stethoscope className="text-white w-6 h-6 md:w-9 md:h-9" />
                  </div>
                </div>
                <CardHeader className="text-center p-3 md:pb-4">
                  <CardTitle className="text-[#0a4d5c] text-[10px] md:text-base font-bold leading-tight">DR. CARLOS D. LUQUE</CardTitle>
                  <CardDescription className="text-[#5dbfb3] font-medium text-[9px] md:text-sm">Cirujano Hepatobiliar</CardDescription>
                </CardHeader>
              </Card>

              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-32 md:h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-[#5dbfb3] to-[#0a4d5c] rounded-full flex items-center justify-center">
                    <Stethoscope className="text-white w-6 h-6 md:w-9 md:h-9" />
                  </div>
                </div>
                <CardHeader className="text-center p-3 md:pb-4">
                  <CardTitle className="text-[#0a4d5c] text-[10px] md:text-base font-bold leading-tight">DR. GUSTAVO R. BIANCO</CardTitle>
                  <CardDescription className="text-[#5dbfb3] font-medium text-[9px] md:text-sm">Cirujano Hepatobiliar</CardDescription>
                </CardHeader>
              </Card>

              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-32 md:h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-[#5dbfb3] to-[#0a4d5c] rounded-full flex items-center justify-center">
                    <Stethoscope className="text-white w-6 h-6 md:w-9 md:h-9" />
                  </div>
                </div>
                <CardHeader className="text-center p-3 md:pb-4">
                  <CardTitle className="text-[#0a4d5c] text-[10px] md:text-base font-bold leading-tight">DR. FRANCISCO SUÁREZ ANZORENA</CardTitle>
                  <CardDescription className="text-[#5dbfb3] font-medium text-[9px] md:text-sm">Cirujano Intervencionista</CardDescription>
                </CardHeader>
              </Card>

              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-32 md:h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-[#5dbfb3] to-[#0a4d5c] rounded-full flex items-center justify-center">
                    <Heart className="text-white w-6 h-6 md:w-9 md:h-9" />
                  </div>
                </div>
                <CardHeader className="text-center p-3 md:pb-4">
                  <CardTitle className="text-[#0a4d5c] text-[10px] md:text-base font-bold leading-tight">DR. CRISTIAN KRUETZER</CardTitle>
                  <CardDescription className="text-[#5dbfb3] font-medium text-[9px] md:text-sm">Cirujano Cardiovascular</CardDescription>
                </CardHeader>
              </Card>

              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-32 md:h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-[#5dbfb3] to-[#0a4d5c] rounded-full flex items-center justify-center">
                    <Stethoscope className="text-white w-6 h-6 md:w-9 md:h-9" />
                  </div>
                </div>
                <CardHeader className="text-center p-3 md:pb-4">
                  <CardTitle className="text-[#0a4d5c] text-[10px] md:text-base font-bold leading-tight">DR. DIEGO ARUFE</CardTitle>
                  <CardDescription className="text-[#5dbfb3] font-medium text-[9px] md:text-sm">Hepatólogo / Trasplante Hepático</CardDescription>
                </CardHeader>
              </Card>

              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-32 md:h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-[#5dbfb3] to-[#0a4d5c] rounded-full flex items-center justify-center">
                    <Stethoscope className="text-white w-6 h-6 md:w-9 md:h-9" />
                  </div>
                </div>
                <CardHeader className="text-center p-3 md:pb-4">
                  <CardTitle className="text-[#0a4d5c] text-[10px] md:text-base font-bold leading-tight">DR. THOMAS IOLSTER</CardTitle>
                  <CardDescription className="text-[#5dbfb3] font-medium text-[9px] md:text-sm">Cuidados Intensivos</CardDescription>
                </CardHeader>
              </Card>

              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-32 md:h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-[#5dbfb3] to-[#0a4d5c] rounded-full flex items-center justify-center">
                    <Stethoscope className="text-white w-6 h-6 md:w-9 md:h-9" />
                  </div>
                </div>
                <CardHeader className="text-center p-3 md:pb-4">
                  <CardTitle className="text-[#0a4d5c] text-[10px] md:text-base font-bold leading-tight">DR. JOSÉ MARÍA MORA GUTIÉRREZ</CardTitle>
                  <CardDescription className="text-[#5dbfb3] font-medium text-[9px] md:text-sm">Nefrólogo / Tx Renal</CardDescription>
                </CardHeader>
              </Card>

              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-32 md:h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-[#5dbfb3] to-[#0a4d5c] rounded-full flex items-center justify-center">
                    <Heart className="text-white w-6 h-6 md:w-9 md:h-9" />
                  </div>
                </div>
                <CardHeader className="text-center p-3 md:pb-4">
                  <CardTitle className="text-[#0a4d5c] text-[10px] md:text-base font-bold leading-tight">DR. ALEJANDRO PEIRONE</CardTitle>
                  <CardDescription className="text-[#5dbfb3] font-medium text-[9px] md:text-sm">Hemodinamista</CardDescription>
                </CardHeader>
              </Card>

              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-32 md:h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-[#5dbfb3] to-[#0a4d5c] rounded-full flex items-center justify-center">
                    <Stethoscope className="text-white w-6 h-6 md:w-9 md:h-9" />
                  </div>
                </div>
                <CardHeader className="text-center p-3 md:pb-4">
                  <CardTitle className="text-[#0a4d5c] text-[10px] md:text-base font-bold leading-tight">DRA. IVONE MALLA</CardTitle>
                  <CardDescription className="text-[#5dbfb3] font-medium text-[9px] md:text-sm">Hepatóloga - Trasplante Hepático</CardDescription>
                </CardHeader>
              </Card>

              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-32 md:h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-[#5dbfb3] to-[#0a4d5c] rounded-full flex items-center justify-center">
                    <Stethoscope className="text-white w-6 h-6 md:w-9 md:h-9" />
                  </div>
                </div>
                <CardHeader className="text-center p-3 md:pb-4">
                  <CardTitle className="text-[#0a4d5c] text-[10px] md:text-base font-bold leading-tight">DRA. MARCELA BAILEZ</CardTitle>
                  <CardDescription className="text-[#5dbfb3] font-medium text-[9px] md:text-sm">Cirujana Laparoscópica</CardDescription>
                </CardHeader>
              </Card>

              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-32 md:h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-[#5dbfb3] to-[#0a4d5c] rounded-full flex items-center justify-center">
                    <Stethoscope className="text-white w-6 h-6 md:w-9 md:h-9" />
                  </div>
                </div>
                <CardHeader className="text-center p-3 md:pb-4">
                  <CardTitle className="text-[#0a4d5c] text-[10px] md:text-base font-bold leading-tight">MG. MARISA CAMEJO</CardTitle>
                  <CardDescription className="text-[#5dbfb3] font-medium text-[9px] md:text-sm">Enfermería Cuidados Intensivos</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo de Investigadores */}
      <section className="py-12 md:py-24 bg-[#00334e]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-white/10 rounded-full mb-4 md:mb-6 mx-auto block w-fit">
              <span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-white">Investigación</span>
            </div>
            <h3 className="text-xl md:text-3xl font-bold text-white mb-6 md:mb-8 text-center">
              Equipo de investigadores
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-32 md:h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-[#5dbfb3] to-[#0a4d5c] rounded-full flex items-center justify-center">
                    <Microscope className="text-white w-6 h-6 md:w-9 md:h-9" />
                  </div>
                </div>
                <CardHeader className="text-center p-3 md:pb-4">
                  <CardTitle className="text-[#0a4d5c] text-[10px] md:text-base font-bold leading-tight">MD PhD JOSEPMARÍA ARGEMI</CardTitle>
                </CardHeader>
              </Card>

              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-32 md:h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-[#5dbfb3] to-[#0a4d5c] rounded-full flex items-center justify-center">
                    <Microscope className="text-white w-6 h-6 md:w-9 md:h-9" />
                  </div>
                </div>
                <CardHeader className="text-center p-3 md:pb-4">
                  <CardTitle className="text-[#0a4d5c] text-[10px] md:text-base font-bold leading-tight">MD PhD GUILLERMO D. MAZZOLINI</CardTitle>
                </CardHeader>
              </Card>

              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-32 md:h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-[#5dbfb3] to-[#0a4d5c] rounded-full flex items-center justify-center">
                    <Microscope className="text-white w-6 h-6 md:w-9 md:h-9" />
                  </div>
                </div>
                <CardHeader className="text-center p-3 md:pb-4">
                  <CardTitle className="text-[#0a4d5c] text-[10px] md:text-base font-bold leading-tight">MD EDILMAR ALVARADO TAPIAS</CardTitle>
                </CardHeader>
              </Card>

              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-32 md:h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-[#5dbfb3] to-[#0a4d5c] rounded-full flex items-center justify-center">
                    <Microscope className="text-white w-6 h-6 md:w-9 md:h-9" />
                  </div>
                </div>
                <CardHeader className="text-center p-3 md:pb-4">
                  <CardTitle className="text-[#0a4d5c] text-[10px] md:text-base font-bold leading-tight">DR. MATÍAS SÁNCHEZ</CardTitle>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
