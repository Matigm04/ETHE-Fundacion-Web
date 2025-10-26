import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download, FileCheck, Info } from "lucide-react"

export default function DocumentsPage() {
  const documentCategories = [
    {
      title: "Documentos Institucionales",
      description: "Información oficial sobre la fundación",
      documents: [
        { name: "Estatuto de la Fundación", size: "2.5 MB", type: "PDF" },
        { name: "Memoria Anual 2024", size: "5.8 MB", type: "PDF" },
        { name: "Informe de Transparencia", size: "1.2 MB", type: "PDF" },
        { name: "Código de Ética", size: "850 KB", type: "PDF" },
      ],
    },
    {
      title: "Formularios de Solicitud",
      description: "Formularios para solicitar nuestros servicios",
      documents: [
        { name: "Solicitud de Atención Médica", size: "450 KB", type: "PDF" },
        { name: "Solicitud de Apoyo Social", size: "520 KB", type: "PDF" },
        { name: "Solicitud de Asesoría Legal", size: "380 KB", type: "PDF" },
        { name: "Solicitud de Apoyo Psicológico", size: "420 KB", type: "PDF" },
      ],
    },
    {
      title: "Guías y Manuales",
      description: "Recursos informativos para la comunidad",
      documents: [
        { name: "Guía de Servicios Disponibles", size: "3.2 MB", type: "PDF" },
        { name: "Manual de Derechos del Usuario", size: "1.8 MB", type: "PDF" },
        { name: "Guía de Trámites Administrativos", size: "2.1 MB", type: "PDF" },
        { name: "Manual de Prevención en Salud", size: "4.5 MB", type: "PDF" },
      ],
    },
    {
      title: "Informes y Publicaciones",
      description: "Estudios e informes de nuestro trabajo",
      documents: [
        { name: "Informe de Impacto Social 2024", size: "6.2 MB", type: "PDF" },
        { name: "Estudio de Necesidades Comunitarias", size: "3.8 MB", type: "PDF" },
        { name: "Boletín Informativo - Edición 12", size: "2.4 MB", type: "PDF" },
        { name: "Casos de Éxito y Testimonios", size: "5.1 MB", type: "PDF" },
      ],
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0a4d5c] to-[#5dbfb3] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Documentos y Recursos</h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Accede a toda la información y formularios necesarios para conocer y utilizar nuestros servicios
            </p>
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="py-8 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white border-l-4 border-[#5dbfb3] p-6 rounded-lg shadow-sm">
            <div className="flex items-start gap-4">
              <Info className="text-[#5dbfb3] flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-[#0a4d5c] mb-2">Información Importante</h3>
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
          <div className="space-y-12">
            {documentCategories.map((category, index) => (
              <div key={index} className="max-w-5xl mx-auto">
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0a4d5c] mb-2">{category.title}</h2>
                  <p className="text-gray-600">{category.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.documents.map((doc, idx) => (
                    <Card key={idx} className="border-[#5dbfb3] hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-start gap-3 flex-1">
                            <div className="w-10 h-10 bg-[#5dbfb3] rounded-lg flex items-center justify-center flex-shrink-0">
                              <FileText className="text-white" size={20} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <CardTitle className="text-base text-[#0a4d5c] mb-1">{doc.name}</CardTitle>
                              <CardDescription className="text-sm">
                                {doc.type} • {doc.size}
                              </CardDescription>
                            </div>
                          </div>
                          <Button size="sm" className="bg-[#0a4d5c] hover:bg-[#0a4d5c]/90 flex-shrink-0">
                            <Download size={16} />
                          </Button>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 md:py-24 bg-[#f5f5f5]">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <FileCheck className="w-16 h-16 text-[#5dbfb3] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a4d5c] mb-6">¿Necesitas Ayuda con los Documentos?</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Si tienes dificultades para descargar o completar algún documento, nuestro equipo está disponible para
              asistirte. También ofrecemos ayuda presencial en nuestras oficinas.
            </p>
            <Button asChild size="lg" className="bg-[#0a4d5c] hover:bg-[#0a4d5c]/90">
              <a href="/contacto">Solicitar Asistencia</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
