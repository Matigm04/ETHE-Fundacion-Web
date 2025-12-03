import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download, FileCheck, Info, Activity, Heart } from "lucide-react"

export default function DocumentsPage() {
  const documentCategories = [
    {
      title: "Trasplante Hepático",
      description: "Información sobre el hígado, indicaciones y procedimientos quirúrgicos",
      icon: "liver",
      color: "from-[#5bbaa5] to-[#00334e]",
      documents: [
        { name: "Sobre el hígado y su funcionamiento", type: "PDF" },
        { name: "Indicaciones y evaluación para trasplante", type: "PDF" },
        { name: "El trasplante: sobre el procedimiento quirúrgico", type: "PDF" },
      ],
    },
    {
      title: "Trasplante Renal",
      description: "Información sobre el proceso quirúrgico, donantes y opciones de tratamiento",
      icon: "kidney",
      color: "from-[#5bbaa5] to-[#00334e]",
      documents: [
        { name: "Sobre el proceso quirúrgico", type: "PDF" },
        { name: "Donantes renales", type: "PDF" },
        { name: "Opciones de tratamiento", type: "PDF" },
      ],
    },
    {
      title: "Cardiopatías Congénitas",
      description: "Información sobre cardiopatías congénitas y enfermedades cardiovasculares infantiles",
      icon: "heart",
      color: "from-[#5bbaa5] to-[#00334e]",
      documents: [
        { name: "¿Qué son las cardiopatías congénitas?", type: "PDF" },
        { name: "Enfermedades cardiovasculares infantiles", type: "PDF" },
      ],
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-[#5bbaa5] text-white py-16 md:py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 right-4 w-32 h-32 bg-[#ffcb05] opacity-15 rounded-full" />
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-white opacity-10 rounded-full" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <span className="text-sm font-semibold uppercase tracking-wider">Centro de Recursos</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Documentos y recursos</h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              El siguiente material fue seleccionado por Fundación ETHE por su contenido de calidad respecto de los tratamientos que la Fundación lleva adelante. Reservado para Uso Profesional, de los Pacientes y Familiares o Interesados en la temática en general. Fundación ETHE consigna en cada material la autoría de los mismos
            </p>
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="py-8 bg-[#f5f7fa]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white border-l-4 border-[#5bbaa5] p-6 rounded-lg shadow-sm">
            <div className="flex items-start gap-4">
              <Info className="text-[#5bbaa5] flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-[#00334e] mb-2">Información importante</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Todos los documentos están disponibles en formato PDF. Si necesitas ayuda para completar algún
                  formulario o tienes dudas sobre los documentos, no dudes en contactarnos. Estamos aquí para ayudarte.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Categories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16 max-w-6xl mx-auto">
            {documentCategories.map((category, index) => (
              <div key={index}>
                {/* Category Header with Icon */}
                <div className="text-center mb-10">
                  <div className="w-32 h-32 mx-auto mb-6 bg-[#5bbaa5] rounded-full flex items-center justify-center">
                    {category.icon === "liver" && <Activity className="text-white" size={56} />}
                    {category.icon === "kidney" && <Activity className="text-white" size={56} />}
                    {category.icon === "heart" && <Heart className="text-white" size={56} />}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#5bbaa5] mb-3 uppercase tracking-wide">{category.title}</h2>
                  <p className="text-gray-600 text-lg">{category.description}</p>
                </div>

                {/* Documents List */}
                <div className="space-y-4">
                  {category.documents.map((doc, idx) => (
                    <div 
                      key={idx} 
                      className="bg-[#5bbaa5] hover:bg-[#4aa594] transition-all duration-300 rounded-lg p-6 shadow-md hover:shadow-xl cursor-pointer group"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4 flex-1">
                          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <FileText className="text-white" size={24} />
                          </div>
                          <h3 className="text-white font-bold text-lg uppercase tracking-wide group-hover:translate-x-1 transition-transform">
                            {doc.name}
                          </h3>
                        </div>
                        <Button 
                          size="sm" 
                          className="bg-[#00334e] hover:bg-[#00334e]/90 text-white flex-shrink-0 px-6"
                        >
                          <Download size={18} className="mr-2" />
                          Descargar
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 md:py-24 bg-[#00334e]">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-white/10 rounded-full mb-6">
              <span className="text-sm font-semibold uppercase tracking-wider text-white">Asistencia</span>
            </div>
            <FileCheck className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">¿Necesitas ayuda con los documentos?</h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Si tienes dificultades para descargar o completar algún documento, nuestro equipo está disponible para
              asistirte. También ofrecemos ayuda presencial en nuestras oficinas.
            </p>
            <Button asChild size="lg" className="bg-[#c74a3a] hover:bg-[#b73d2d]">
              <a href="/contacto">Solicitar asistencia</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
