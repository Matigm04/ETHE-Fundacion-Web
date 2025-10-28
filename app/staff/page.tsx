import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Stethoscope, UserCheck, User, Heart, Activity } from "lucide-react"

export default function StaffPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0a4d5c] to-[#5dbfb3] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestro Staff</h1>
            <div className="max-w-[80%] mx-auto">
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Conoce al equipo de profesionales altamente calificados que hacen posible nuestra misión de excelencia 
                en medicina de alta complejidad. Cada miembro de nuestro staff aporta experiencia y dedicación para 
                brindar el mejor cuidado a nuestros pacientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consejo de Administración */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-[#5dbfb3] mb-8 text-center">
              Consejo de Administración
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-[#0a4d5c] to-[#5dbfb3] rounded-full flex items-center justify-center">
                    <User className="text-white" size={48} />
                  </div>
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-[#0a4d5c] text-lg font-bold">ING. JOSÉ MARIO FRONTALINI</CardTitle>
                  <CardDescription className="text-[#5dbfb3] font-semibold text-base">Presidente</CardDescription>
                </CardHeader>
              </Card>

              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-[#0a4d5c] to-[#5dbfb3] rounded-full flex items-center justify-center">
                    <User className="text-white" size={48} />
                  </div>
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-[#0a4d5c] text-lg font-bold">DR. CARLOS DANIEL LUQUE</CardTitle>
                  <CardDescription className="text-[#5dbfb3] font-semibold text-base">Director Médico</CardDescription>
                </CardHeader>
              </Card>

              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-[#0a4d5c] to-[#5dbfb3] rounded-full flex items-center justify-center">
                    <User className="text-white" size={48} />
                  </div>
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-[#0a4d5c] text-lg font-bold">DR. GUSTAVO RAÚL BIANCO</CardTitle>
                  <CardDescription className="text-[#5dbfb3] font-semibold text-base">Director Ejecutivo</CardDescription>
                </CardHeader>
              </Card>

              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-[#0a4d5c] to-[#5dbfb3] rounded-full flex items-center justify-center">
                    <User className="text-white" size={48} />
                  </div>
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-[#0a4d5c] text-lg font-bold">LIC. MAYQUEL MENDOZA</CardTitle>
                  <CardDescription className="text-[#5dbfb3] font-semibold text-base">Estudio Contable</CardDescription>
                </CardHeader>
              </Card>

              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-[#0a4d5c] to-[#5dbfb3] rounded-full flex items-center justify-center">
                    <User className="text-white" size={48} />
                  </div>
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-[#0a4d5c] text-lg font-bold">LIC. CHRISTINE VALENZUELA</CardTitle>
                  <CardDescription className="text-[#5dbfb3] font-semibold text-base">Directora Desarrollo Institucional</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Profesionales Médicos */}
      <section className="py-16 md:py-24 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-[#5dbfb3] mb-8 text-center">
              Profesionales Médicos
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#5dbfb3] to-[#0a4d5c] rounded-full flex items-center justify-center">
                    <Stethoscope className="text-white" size={36} />
                  </div>
                </div>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-[#0a4d5c] text-base font-bold">DR. CARLOS D. LUQUE</CardTitle>
                  <CardDescription className="text-[#5dbfb3] font-medium">Cirujano Hepatobiliar</CardDescription>
                </CardHeader>
              </Card>

              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#5dbfb3] to-[#0a4d5c] rounded-full flex items-center justify-center">
                    <Stethoscope className="text-white" size={36} />
                  </div>
                </div>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-[#0a4d5c] text-base font-bold">DR. GUSTAVO R. BIANCO</CardTitle>
                  <CardDescription className="text-[#5dbfb3] font-medium">Cirujano Hepatobiliar</CardDescription>
                </CardHeader>
              </Card>

              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#5dbfb3] to-[#0a4d5c] rounded-full flex items-center justify-center">
                    <Stethoscope className="text-white" size={36} />
                  </div>
                </div>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-[#0a4d5c] text-base font-bold">DR. FRANCISCO SUÁREZ ANZORENA</CardTitle>
                  <CardDescription className="text-[#5dbfb3] font-medium">Cirujano Intervencionista</CardDescription>
                </CardHeader>
              </Card>

              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#5dbfb3] to-[#0a4d5c] rounded-full flex items-center justify-center">
                    <Heart className="text-white" size={36} />
                  </div>
                </div>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-[#0a4d5c] text-base font-bold">DR. CRISTIAN KRUETZER</CardTitle>
                  <CardDescription className="text-[#5dbfb3] font-medium">Cirujano Cardiovascular</CardDescription>
                </CardHeader>
              </Card>

              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#5dbfb3] to-[#0a4d5c] rounded-full flex items-center justify-center">
                    <Stethoscope className="text-white" size={36} />
                  </div>
                </div>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-[#0a4d5c] text-base font-bold">DR. DIEGO ARUFE</CardTitle>
                  <CardDescription className="text-[#5dbfb3] font-medium">Hepatólogo / Trasplante Hepático</CardDescription>
                </CardHeader>
              </Card>

              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#5dbfb3] to-[#0a4d5c] rounded-full flex items-center justify-center">
                    <Stethoscope className="text-white" size={36} />
                  </div>
                </div>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-[#0a4d5c] text-base font-bold">DR. THOMAS IOLSTER</CardTitle>
                  <CardDescription className="text-[#5dbfb3] font-medium">Cuidados Intensivos</CardDescription>
                </CardHeader>
              </Card>

              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#5dbfb3] to-[#0a4d5c] rounded-full flex items-center justify-center">
                    <Stethoscope className="text-white" size={36} />
                  </div>
                </div>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-[#0a4d5c] text-base font-bold">DR. JOSÉ MARÍA MORA GUTIÉRREZ</CardTitle>
                  <CardDescription className="text-[#5dbfb3] font-medium">Nefrólogo / Tx Renal</CardDescription>
                </CardHeader>
              </Card>

              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#5dbfb3] to-[#0a4d5c] rounded-full flex items-center justify-center">
                    <Heart className="text-white" size={36} />
                  </div>
                </div>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-[#0a4d5c] text-base font-bold">DR. ALEJANDRO PEIRONE</CardTitle>
                  <CardDescription className="text-[#5dbfb3] font-medium">Hemodinamista</CardDescription>
                </CardHeader>
              </Card>

              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#5dbfb3] to-[#0a4d5c] rounded-full flex items-center justify-center">
                    <Stethoscope className="text-white" size={36} />
                  </div>
                </div>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-[#0a4d5c] text-base font-bold">DRA. IVONE MALLA</CardTitle>
                  <CardDescription className="text-[#5dbfb3] font-medium">Hepatóloga - Trasplante Hepático</CardDescription>
                </CardHeader>
              </Card>

              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#5dbfb3] to-[#0a4d5c] rounded-full flex items-center justify-center">
                    <Stethoscope className="text-white" size={36} />
                  </div>
                </div>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-[#0a4d5c] text-base font-bold">DRA. MARCELA BAILEZ</CardTitle>
                  <CardDescription className="text-[#5dbfb3] font-medium">Cirujana Laparoscópica</CardDescription>
                </CardHeader>
              </Card>

              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#5dbfb3] to-[#0a4d5c] rounded-full flex items-center justify-center">
                    <Stethoscope className="text-white" size={36} />
                  </div>
                </div>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-[#0a4d5c] text-base font-bold">MG. MARISA CAMEJO</CardTitle>
                  <CardDescription className="text-[#5dbfb3] font-medium">Enfermería Cuidados Intensivos</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo de Investigadores */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-[#5dbfb3] mb-8 text-center">
              Equipo de Investigadores
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#5dbfb3] to-[#0a4d5c] rounded-full flex items-center justify-center">
                    <Activity className="text-white" size={36} />
                  </div>
                </div>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-[#0a4d5c] text-base font-bold">MD PhD JOSEPMARÍA ARGEMI</CardTitle>
                </CardHeader>
              </Card>

              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#5dbfb3] to-[#0a4d5c] rounded-full flex items-center justify-center">
                    <Activity className="text-white" size={36} />
                  </div>
                </div>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-[#0a4d5c] text-base font-bold">MD PhD GUILLERMO D. MAZZOLINI</CardTitle>
                </CardHeader>
              </Card>

              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#5dbfb3] to-[#0a4d5c] rounded-full flex items-center justify-center">
                    <Activity className="text-white" size={36} />
                  </div>
                </div>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-[#0a4d5c] text-base font-bold">MD EDILMAR ALVARADO TAPIAS</CardTitle>
                </CardHeader>
              </Card>

              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#5dbfb3] to-[#0a4d5c] rounded-full flex items-center justify-center">
                    <Activity className="text-white" size={36} />
                  </div>
                </div>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-[#0a4d5c] text-base font-bold">DR. JUAN MIGUEL BAYO</CardTitle>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
