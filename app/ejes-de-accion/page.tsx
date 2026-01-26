import React from "react";
import Image from "next/image";
import { Activity, Microscope, GraduationCap, Users, Search, HeartHandshake } from "lucide-react";
import InternalHero from "@/components/internal-hero";

export default function EjesAccionPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      
      {/* 1. COMPONENTE UNIFICADO "InternalHero" */}
      <InternalHero 
        title="Nuestros Ejes de Acción"
        subtitle="Trabajamos en múltiples frentes para garantizar el acceso, la innovación y la excelencia médica en toda la región."
        imageSrc="/Secciones_Iniciales/Ejes_de_accion.jpg"
        category="Nuestra Labor"
        imagePosition="center 35%"
      />

      {/* 2. GRILLA DE EJES (Diseño inspirado en Misión, Visión y Valores) */}
      <section className="pt-20 pb-0 container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Tarjeta 1: Acceso - Teal */}
            <CardEje 
              icon={<Activity size={32} strokeWidth={1.5} />}
              title="Acceso a la medicina"
              desc="Facilitamos el acceso oportuno a diagnósticos, tratamientos y cirugías de alta complejidad, trabajando en red con instituciones públicas y privadas."
              color="#5bbaa5" // Teal
            />

            {/* Tarjeta 2: Innovación - Blue */}
            <CardEje 
              icon={<Microscope size={32} strokeWidth={1.5} />}
              title="Innovación e investigación"
              desc="Impulsamos proyectos de investigación médica e innovación clínica que contribuyan al avance del conocimiento y a mejores resultados en salud."
              color="#00334e" // Blue
            />

            {/* Tarjeta 3: Formación - Red */}
            <CardEje 
              icon={<GraduationCap size={32} strokeWidth={1.5} />}
              title="Formación profesional"
              desc="Promovemos la formación continua mediante cursos, estancias formativas, ateneos clínicos y actividades académicas de alto nivel."
              color="#c74a3a" // Red
            />

            {/* Tarjeta 4: Red - Yellow */}
            <CardEje 
              icon={<Users size={32} strokeWidth={1.5} />}
              title="Trabajo en red"
              desc="Fortalecemos alianzas estratégicas entre hospitales, fundaciones y organismos públicos para potenciar el alcance de nuestras acciones."
              color="#ffcb05" // Yellow
            />

             {/* Tarjeta 5: Detección - Teal */}
             <CardEje 
              icon={<Search size={32} strokeWidth={1.5} />}
              title="Detección temprana"
              desc="Favorecemos la identificación precoz de patologías complejas y la derivación oportuna a centros especializados para mejorar el pronóstico."
              color="#5bbaa5" // Teal
            />

             {/* Tarjeta 6: Acompañamiento - Blue */}
             <CardEje 
              icon={<HeartHandshake size={32} strokeWidth={1.5} />}
              title="Acompañamiento integral"
              desc="Brindamos contención emocional y apoyo a los pacientes y sus familias durante todo el proceso de atención y recuperación."
              color="#00334e" // Blue
            />

        </div>
      </section>
    </div>
  );
}

// Componente actualizado con estética "Misión/Visión/Valores"
function CardEje({ icon, title, desc, color }: { icon: React.ReactNode, title: string, desc: string, color: string }) {
  return (
    <div 
      className="bg-white p-8 rounded-2xl shadow-xl border-t-4 hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1"
      style={{ borderColor: color }}
    >
      <div 
        className="w-14 h-14 rounded-full flex items-center justify-center mb-6 text-[#00334e] transition-transform group-hover:scale-110"
        style={{ backgroundColor: `${color}20` }}
      >
        <div style={{ color: color === '#ffcb05' ? '#00334e' : color }}>
             {icon}
        </div>
      </div>
      <h3 className="text-2xl font-bold text-[#00334e] mb-4 group-hover:text-[#5bbaa5] transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed text-base">
        {desc}
      </p>
    </div>
  );
}
