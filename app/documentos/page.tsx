import { Button } from "@/components/ui/button"
import { FileText, FileCheck, Info, Activity, Heart } from "lucide-react"

export default function DocumentsPage() {
  const documentCategories = [
    {
      title: "Trasplante Hepático",
      description: "Información sobre el hígado, indicaciones y procedimientos quirúrgicos",
      icon: "liver",
      color: "from-[#5bbaa5] to-[#00334e]",
      documents: [
        { 
          name: "Sobre el hígado y su funcionamiento", 
          type: "PDF",
          url: "/documentos_descargas/Transplante_Hepatico/HEPATICO-1-Sobre-el-Higado-y-su-funcionamiento.pdf"
        },
        { 
          name: "Indicaciones y evaluación para trasplante", 
          type: "PDF",
          url: "/documentos_descargas/Transplante_Hepatico/HEPATICO-2-Indicaciones-y-evaluación-pre-transplante.pdf"
        },
        { 
          name: "El trasplante: sobre el procedimiento quirúrgico", 
          type: "PDF",
          url: "/documentos_descargas/Transplante_Hepatico/HEPATICO-3-El-transplante-Sobre-el-procedimiento-quirúrgico-.pdf"
        },
      ],
    },
    {
      title: "Trasplante Renal",
      description: "Información sobre el proceso quirúrgico, donantes y opciones de tratamiento",
      icon: "kidney",
      color: "from-[#5bbaa5] to-[#00334e]",
      documents: [
        { 
          name: "Sobre el proceso quirúrgico", 
          type: "PDF",
          url: "/documentos_descargas/Transplante_Renal/RENAL-1-Sobre-el-Proceso-Quirúrgico.pdf"
        },
        { 
          name: "Donantes renales", 
          type: "PDF",
          url: "/documentos_descargas/Transplante_Renal/RENAL-2-Donantes-Renales.pdf"
        },
        { 
          name: "Opciones de tratamiento", 
          type: "PDF",
          url: "/documentos_descargas/Transplante_Renal/RENAL-3-Opciones-de-Tratamiento.pdf"
        },
      ],
    },
    {
      title: "Cardiopatías Congénitas",
      description: "Información sobre cardiopatías congénitas y enfermedades cardiovasculares infantiles",
      icon: "heart",
      color: "from-[#5bbaa5] to-[#00334e]",
      documents: [
        { 
          name: "¿Qué son las cardiopatías congénitas?", 
          type: "PDF",
          url: "/documentos_descargas/Cardiopatias_Congenitas/CARDIOPATIAS2PDF-que-son.pdf"
        },
        { 
          name: "Enfermedades cardiovasculares infantiles", 
          type: "PDF",
          url: "/documentos_descargas/Cardiopatias_Congenitas/CARDIPATIAS3PDF-enfermedades-cardiovasculares-infantiles.pdf"
        },
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
      <section className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-12 md:space-y-16 max-w-6xl mx-auto">
            {documentCategories.map((category, index) => (
              <div key={index}>
                {/* Category Header with Icon */}
                <div className="text-center mb-6 md:mb-10">
                  <div className="w-20 h-20 md:w-32 md:h-32 mx-auto mb-4 md:mb-6 bg-[#5bbaa5] rounded-full flex items-center justify-center">
                    {category.icon === "liver" && <Activity className="text-white" size={40} className="md:w-14 md:h-14" />}
                    {category.icon === "kidney" && <Activity className="text-white" size={40} className="md:w-14 md:h-14" />}
                    {category.icon === "heart" && <Heart className="text-white" size={40} className="md:w-14 md:h-14" />}
                  </div>
                  <h2 className="text-2xl md:text-4xl font-bold text-[#5bbaa5] mb-2 md:mb-3 uppercase tracking-wide">{category.title}</h2>
                  <p className="text-gray-600 text-sm md:text-lg px-4">{category.description}</p>
                </div>

                {/* Documents List */}
                <div className="space-y-3 md:space-y-4">
                  {category.documents.map((doc, idx) => (
                    <div 
                      key={idx} 
                      className="bg-[#5bbaa5] hover:bg-[#4aa594] transition-all duration-300 rounded-lg p-4 md:p-6 shadow-md hover:shadow-xl group"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4">
                        <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <FileText className="text-white" size={20} />
                          </div>
                          <h3 className="text-white font-bold text-sm md:text-lg uppercase tracking-wide group-hover:translate-x-1 transition-transform flex-1 min-w-0">
                            {doc.name}
                          </h3>
                        </div>
                        <a
                          href={doc.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 bg-[#00334e] hover:bg-[#00334e]/90 text-white px-4 md:px-6 py-2 rounded-md text-xs md:text-sm font-medium transition-colors w-full md:w-auto"
                        >
                          <FileText size={16} />
                          <span>Leer Documento</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
