import React from "react";
import Image from "next/image";
// Asegúrate de importar tus iconos. Si usas lucide-react:
import { Activity, Microscope, GraduationCap, Users, Search, HeartHandshake } from "lucide-react";

export default function EjesAccionPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      
      {/* HERO SECTION - Inmersión de Color Corporativo */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        {/* 1. CAPA DE IMAGEN DE FONDO (El equipo real) */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/Secciones_Iniciales/Ejes_de_accion.jpg" 
            alt="Equipo Médico de Fundación ETHE" 
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 25%" }}
          />
        </div>

        {/* 2. CAPA DE FILTRO VERDE (Inmersión de Marca) */}
        <div className="absolute inset-0 bg-[#5bbaa5]/90 mix-blend-multiply z-10" />

        {/* 3. CAPA DE CONTENIDO (Texto Blanco Centrado) */}
        <div className="relative z-20 text-center max-w-4xl px-4">
          {/* Pequeña etiqueta superior */}
          <span className="bg-white/20 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-5 inline-block uppercase tracking-wider backdrop-blur-md shadow-sm">
            Nuestra Labor
          </span>
          
          {/* Título Principal */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-goudy drop-shadow-md leading-tight">
            Nuestros Ejes de Acción
          </h1>
          
          {/* Decoración sutil */}
          <div className="w-24 h-1 bg-white/50 mx-auto mb-6 rounded-full"></div>

          {/* Subtítulo */}
          <p className="text-white/95 text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
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
