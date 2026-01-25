import { Target, Eye, Heart } from "lucide-react";

export default function MisionVisionPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. HERO CON IMAGEN DE FONDO (Reemplaza el bloque verde sólido) */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        
        {/* Imagen de fondo */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop')" }}
        />
        
        {/* Capa oscura (Overlay) para que se lea el texto */}
        <div className="absolute inset-0 bg-[#00334e]/80" />

        <div className="relative z-10 text-center px-4">
          <span className="text-[#5bbaa5] font-bold tracking-widest uppercase text-sm mb-2 block">
            Nuestra Esencia
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-goudy">
            Misión, Visión y Valores
          </h1>
          <p className="text-white/80 max-w-xl mx-auto text-lg">
            Los pilares fundamentales que guían cada paso de nuestra fundación.
          </p>
        </div>
      </section>

      {/* 2. TARJETAS CON EFECTO DE SUPERPOSICIÓN (Margen negativo) - CORREGIDO A SIN SUPERPOSICION */}
      <section className="container mx-auto px-4 py-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Tarjeta Misión */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-[#5bbaa5]">
            <div className="w-14 h-14 bg-[#e6f4f1] rounded-full flex items-center justify-center mb-6 text-[#00334e]">
              <Target size={32} />
            </div>
            <h3 className="text-2xl font-bold text-[#00334e] mb-4">Misión</h3>
            <p className="text-gray-600 leading-relaxed">
              Promover el desarrollo de la medicina de alta complejidad en el Caribe y Centroamérica,
              impulsando la innovación y la investigación médica, y fortaleciendo la formación,
              capacitación y actualización continua de los profesionales de la salud mediante la gestión
              responsable de recursos públicos y privados.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Trabajamos en red con instituciones públicas y privadas para facilitar el acceso a la atención
              médica especializada, fomentar la detección temprana de enfermedades complejas y
              acompañar a los pacientes y sus familias.
            </p>
          </div>

          {/* Tarjeta Visión */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-[#ffcb05]">
            <div className="w-14 h-14 bg-[#fff8e1] rounded-full flex items-center justify-center mb-6 text-[#ffcb05]">
               <Eye size={32} />
            </div>
            <h3 className="text-2xl font-bold text-[#00334e] mb-4">Visión</h3>
            <p className="text-gray-600 leading-relaxed">
              Ser una fundación de referencia en el desarrollo y acceso a la medicina de alta complejidad
              en la región, reconocida por su compromiso con la innovación, la investigación médica, la
              excelencia profesional y el trabajo colaborativo entre instituciones, contribuyendo de
              manera sostenida a mejorar la calidad de vida de los pacientes y sus familias.
            </p>
          </div>

          {/* Tarjeta Valores */}
           <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-[#c74a3a]">
            <div className="w-14 h-14 bg-[#fceceb] rounded-full flex items-center justify-center mb-6 text-[#c74a3a]">
               <Heart size={32} />
            </div>
            <h3 className="text-2xl font-bold text-[#00334e] mb-4">Valores</h3>
            <ul className="text-gray-600 leading-relaxed space-y-2">
              <li>• Compromiso con el paciente</li>
              <li>• Excelencia médica</li>
              <li>• Innovación e investigación</li>
              <li>• Trabajo en red</li>
              <li>• Ética y transparencia</li>
              <li>• Acceso y equidad</li>
              <li>• Humanidad y acompañamiento</li>
            </ul>
          </div>

        </div>
      </section>

      {/* =========================================
          3. SECCIÓN RECUPERADA: ELEGIR ETHE
          ========================================= */}
      <section className="py-24 bg-[#fdfbf7]"> {/* Fondo crema suave para lectura cómoda */}
        <div className="container mx-auto px-6 md:px-8 max-w-7xl">
          
          {/* Encabezados Centrados */}
          <div className="text-center mb-16">
            <span className="text-[#5bbaa5] font-bold tracking-[0.2em] uppercase text-sm mb-3 block">
              Confía en nosotros
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#00334e] mb-6 font-goudy">
              Elegir ETHE
            </h2>
            <div className="w-20 h-1 bg-[#5bbaa5] mx-auto rounded-full mb-6"></div>
            <p className="text-[#00334e]/80 text-xl font-medium">
              Las razones por las cuales confiar en la Fundación
            </p>
          </div>

          {/* Bloque de Texto (Justificado y limpio) */}
          <div className="text-gray-600 space-y-6 text-lg leading-relaxed max-w-6xl mx-auto">
            <p>
              Desde Fundación ETHE, nos proponemos mejorar la calidad de vida de nuestros pacientes a través de cirugías de alta complejidad médica, siendo nuestra especialidad los trasplantes hepáticos, renales y las cardiopatías congénitas pediátricas.
            </p>
            <p>
              El equipo de ETHE está formado por expertos médicos de renombre y un equipo de asistencia personalizada a los pacientes que ofrecen el mejor servicio, desde asistir a los pacientes con los planes de viaje hasta asegurarles una experiencia placentera durante su estadía en Argentina. Con el foco en la inclusión social, buscamos facilitar a personas de cualquier parte del mundo la posibilidad de realizar el trasplante que necesitan, colaborando con aquellos que presenten dificultades económicas y buscando alternativas de financiación.
            </p>
            <p>
              Además, en los casos que se requiera, gestionamos la asistencia médica, estudios de laboratorio, estudios de análisis clínicos, obtención de medicamentos, estudios médicos complementarios, cobertura de viáticos y/u hospedaje para pacientes del país y del extranjero. Sabemos lo dificultoso que es ese momento y los acompañamos con una asistencia integral.
            </p>
            <p className="border-l-4 border-[#5bbaa5] pl-6 italic text-gray-700 bg-white p-4 rounded-r-lg shadow-sm">
              Fundación ETHE trabaja junto a esferas gubernamentales (embajadas, ministerios de salud, etcétera), profesionales de la salud, centros médicos de alta calidad y un equipo dedicado a las necesidades especiales del paciente y sus familiares al llegar a Argentina. Es importante resaltar la excelente relación de confianza que se desarrolló a lo largo de los años entre las Instituciones Médicas, nuestro Equipo Profesional y los Ministerios Públicos de los distintos países. ETHE es una Fundación que busca promover el desarrollo de la medicina de alta complejidad a través de la educación y capacitación de los profesionales en todas las especialidades involucradas en el proceso.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          4. SECCIÓN RECUPERADA: VIDEO INSTITUCIONAL
          ========================================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          
          <span className="text-[#5bbaa5] font-bold tracking-[0.2em] uppercase text-sm mb-3 block">
            Nuestro Trabajo
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#00334e] mb-6 font-goudy">
            Conoce más sobre nuestro impacto
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-12 text-lg">
            Descubre en este video cómo Fundación ETHE transforma vidas a través de la medicina de alta complejidad y el acompañamiento humano.
          </p>

          {/* Contenedor del Video (Responsive) */}
          <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-black border-[8px] border-white ring-1 ring-gray-200">
            <div className="relative pb-[56.25%] h-0">
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/uc7F2Zp7S-A" 
                title="Fundación ETHE - Trasplante Hepático, Renal y Cardiopatías"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
