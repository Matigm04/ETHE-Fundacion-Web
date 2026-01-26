// Componente: InternalHero.tsx
// Úsalo en TODAS las páginas menos en el Home.
import React from 'react';

interface InternalHeroProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  category: string;
  imagePosition?: string;
}

export default function InternalHero({ title, subtitle, imageSrc, category, imagePosition = "center 20%" }: InternalHeroProps) {
  return (
    <section className="relative h-[450px] flex items-center justify-center overflow-hidden">
      
      {/* 1. FOTO DE FONDO (Dinámica) */}
      <div className="absolute inset-0 z-0">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover"
          style={{ objectPosition: imagePosition }} // Ajuste dinámico de posición
        />
      </div>

      {/* 2. EL "ADN" DE LA MARCA (Degradado Unificador) */}
      {/* Va del Azul Corporativo (izquierda) a un Verde suave transparente (derecha) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00334e]/95 via-[#00334e]/70 to-[#5bbaa5]/30 z-10" />

      {/* 3. CONTENIDO ESTANDARIZADO */}
      <div className="relative z-20 container mx-auto px-4 text-left"> {/* Alineado a la izquierda es más moderno */}
        
        {/* Etiqueta de Categoría (Amarillo o Verde) */}
        <span className="inline-block py-1 px-3 rounded-md bg-[#ffcb05] text-[#00334e] text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
          {category}
        </span>

        {/* Título Principal */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 font-goudy drop-shadow-md max-w-3xl leading-tight">
          {title}
        </h1>
        
        {/* Subtítulo / Bajada */}
        <p className="text-white/90 text-lg md:text-xl font-light max-w-2xl leading-relaxed border-l-4 border-[#5bbaa5] pl-4">
          {subtitle}
        </p>
      </div>

      {/* 4. DETALLE DE DISEÑO (Curva inferior opcional para suavizar) */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" className="fill-slate-50 w-full h-12 md:h-16 block">
           <path d="M0,32L80,42.7C160,53,320,75,480,80C640,85,800,75,960,64C1120,53,1280,43,1360,37.3L1440,32L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
        </svg>
      </div>
    </section>
  );
}
