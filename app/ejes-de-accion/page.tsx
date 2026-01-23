import React from "react";
import Image from "next/image";
// Asegúrate de importar tus iconos. Si usas lucide-react:
import { Activity, Microscope, GraduationCap, Users, Search, HeartHandshake } from "lucide-react";

export default function EjesAccionPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      
      {/* 1. HERO SECTION (Estilo similar pero con identidad propia) */}
      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#5bbaa5] via-[#4aa596] to-[#00334e]">
        {/* Imagen de fondo con overlay */}
        <div className="absolute inset-0">
          <Image 
            src="/Secciones_Iniciales/5228409.jpg" 
            alt="Ejes de Acción - Fundación ETHE" 
            fill
            className="object-cover object-top opacity-20"
            priority
            style={{ objectPosition: '50% 20%' }}
          />
        </div>
        
        {/* Overlay VERDE (Diferenciador clave de la página de Misión que es Azul) */}
        <div className="absolute inset-0 bg-[#5bbaa5]/60 mix-blend-multiply" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-goudy drop-shadow-md">
            Nuestros Ejes de Acción
          </h1>
          <p className="text-white text-lg md:text-xl font-light leading-relaxed">
            Trabajamos en múltiples frentes para garantizar el acceso, la innovación y la excelencia médica en toda la región.
          </p>
        </div>
      </section>

      {/* 2. GRILLA DE EJES (Diseño limpio y separado del Hero) */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Tarjeta 1: Acceso */}
            <CardEje 
              icon={<Activity size={32} />}
              title="Acceso a la medicina"
              desc="Facilitamos el acceso oportuno a diagnósticos, tratamientos y cirugías de alta complejidad, trabajando en red con instituciones públicas y privadas."
            />

            {/* Tarjeta 2: Innovación */}
            <CardEje 
              icon={<Microscope size={32} />}
              title="Innovación e investigación"
              desc="Impulsamos proyectos de investigación médica e innovación clínica que contribuyan al avance del conocimiento y a mejores resultados en salud."
            />

            {/* Tarjeta 3: Formación */}
            <CardEje 
              icon={<GraduationCap size={32} />}
              title="Formación profesional"
              desc="Promovemos la formación continua mediante cursos, estancias formativas, ateneos clínicos y actividades académicas de alto nivel."
            />

            {/* Tarjeta 4: Red */}
            <CardEje 
              icon={<Users size={32} />}
              title="Trabajo en red"
              desc="Fortalecemos alianzas estratégicas entre hospitales, fundaciones y organismos públicos para potenciar el alcance de nuestras acciones."
            />

             {/* Tarjeta 5: Detección */}
             <CardEje 
              icon={<Search size={32} />}
              title="Detección temprana"
              desc="Favorecemos la identificación precoz de patologías complejas y la derivación oportuna a centros especializados para mejorar el pronóstico."
            />

             {/* Tarjeta 6: Acompañamiento */}
             <CardEje 
              icon={<HeartHandshake size={32} />}
              title="Acompañamiento integral"
              desc="Brindamos contención emocional y apoyo a los pacientes y sus familias durante todo el proceso de atención y recuperación."
            />

        </div>
      </section>
    </div>
  );
}

// Componente pequeño para las tarjetas (Para no repetir código)
function CardEje({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
      <div className="w-14 h-14 bg-[#00334e] text-white rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#5bbaa5] group-hover:scale-110 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-[#00334e] mb-3 group-hover:text-[#5bbaa5] transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed text-sm">
        {desc}
      </p>
    </div>
  );
}
