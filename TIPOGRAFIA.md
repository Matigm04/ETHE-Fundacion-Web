# Tipografía Corporativa - Fundación ETHE

## Sistema de Identidad Corporativa

### Fuentes Principales

1. **ITC Goudy Sans Std (1930)** - Frederic William Goudy ✅
   - Uso: Títulos y encabezados
   - Implementación: **Fuentes locales originales** (archivos .otf)
   - Ubicación: `/public/fonts/ITC-Goudy/`
   - Aplicación automática: Todos los elementos `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`
   - Pesos disponibles: Book (400), Medium (500), Bold (700), Black (900)
   - Incluye variantes itálicas de todos los pesos

2. **TASA Orbiter**
   - Uso: Textos generales y cuerpo
   - Implementación: Google Fonts
   - Pesos disponibles: 400-800 (variable)
   - Aplicación automática: Todos los párrafos, spans, divs, links, labels, inputs, etc.

### Complemento

**Aller (2009)** - Dalton Maag
- Seleccionada como complemento del sistema de identidad corporativa
- Nota: Reemplazada por ITC Goudy Sans Std original en esta implementación

---

## Implementación Técnica

### Variables CSS Disponibles

```css
--font-headings: 'ITC Goudy Sans', sans-serif;
--font-body: 'TASA Orbiter', sans-serif;
```

### Uso Automático

Las fuentes se aplican automáticamente:

- **Títulos (h1-h6)**: ITC Goudy Sans Std Bold (700), letter-spacing 0.01em
- **Textos generales**: TASA Orbiter con optical-sizing automático

### Archivos de Fuente Incluidos

```
public/fonts/ITC-Goudy/
├── GoudySansStd-Book.otf          (400 normal)
├── GoudySansStd-BookItalic.otf    (400 italic)
├── GoudySansStd-Medium.otf        (500 normal)
├── GoudySansStd-MediumItalic.otf  (500 italic)
├── GoudySansStd-Bold.otf          (700 normal)
├── GoudySansStd-BoldItalic.otf    (700 italic)
├── GoudySansStd-Black.otf         (900 normal)
└── GoudySansStd-BlackItalic.otf   (900 italic)
```

### Clases de Utilidad

#### Para títulos con ITC Goudy Sans
```tsx
// Automático en títulos
<h1 className="font-headings">Título con ITC Goudy Sans Bold</h1>

// Pesos específicos
<p className="goudy-book">Texto con ITC Goudy Sans Book (400)</p>
<p className="goudy-medium">Texto con ITC Goudy Sans Medium (500)</p>
<p className="goudy-bold">Texto con ITC Goudy Sans Bold (700)</p>
<p className="goudy-black">Texto con ITC Goudy Sans Black (900)</p>
```

#### Para textos con TASA Orbiter (pesos específicos)

```tsx
// Peso 400 (Light)
<p className="tasa-orbiter-light">Texto ligero</p>

// Peso 500 (Regular)
<p className="tasa-orbiter-regular">Texto regular</p>

// Peso 600 (Medium)
<p className="tasa-orbiter-medium">Texto medio</p>

// Peso 700 (Bold)
<p className="tasa-orbiter-bold">Texto negrita</p>

// Peso 800 (Extra Bold)
<p className="tasa-orbiter-extrabold">Texto extra negrita</p>
```

#### Clase genérica de cuerpo
```tsx
<div className="font-body">Texto con TASA Orbiter</div>
```

---

## Ejemplos de Uso

### Encabezados
```tsx
<h1 className="text-4xl font-bold">
  Este título usa ITC Goudy Sans Std automáticamente
</h1>
```

### Párrafos
```tsx
<p className="text-base">
  Este texto usa TASA Orbiter automáticamente
</p>
```

### Combinación personalizada
```tsx
<div className="font-body">
  <h2 className="font-headings text-3xl font-bold mb-4">
    Título con ITC Goudy Sans Std
  </h2>
  <p className="tasa-orbiter-regular text-base">
    Párrafo con TASA Orbiter peso 500
  </p>
</div>

<div>
  <h3 className="goudy-medium text-2xl mb-3">
    Subtítulo con Goudy Medium
  </h3>
  <p className="goudy-book text-base italic">
    Texto con Goudy Book Italic
  </p>
</div>
```

---

## Notas Técnicas

1. ✅ **ITC Goudy Sans Std (1930)** - Fuentes originales implementadas
   - Archivos .otf almacenados localmente en `/public/fonts/ITC-Goudy/`
   - 8 archivos totales: 4 pesos (Book, Medium, Bold, Black) + variantes itálicas
   - `font-display: swap` para optimizar la carga y evitar FOIT (Flash of Invisible Text)
   - No requiere conexión externa ni licencias adicionales

2. **TASA Orbiter** se carga desde Google Fonts con soporte completo de pesos variables (400-800).

3. **Optical Sizing**: TASA Orbiter incluye optical-sizing automático para mejor legibilidad en diferentes tamaños.

4. **Rendimiento**:
   - ITC Goudy Sans se carga desde archivos locales (más rápido y confiable)
   - TASA Orbiter usa `preconnect` a Google Fonts para optimizar carga
   - Todas las fuentes usan `font-display: swap` para evitar bloqueos de renderizado

5. Todos los componentes heredan automáticamente las fuentes corporativas sin necesidad de clases adicionales.

6. **Letter Spacing**: ITC Goudy Sans usa `0.01em` según estándares de la fuente (ligeramente abierto).

---

## Archivos Modificados

- `app/layout.tsx` - Link de TASA Orbiter desde Google Fonts
- `app/globals.css` - Declaraciones @font-face para ITC Goudy Sans + estilos base
- `public/fonts/ITC-Goudy/` - 8 archivos .otf de la fuente original
- Variables CSS configuradas para todo el proyecto
- Aplicación automática a todos los elementos HTML relevantes

## Estructura de Archivos

```
ETHE-Fundacion-Web/
├── public/
│   └── fonts/
│       └── ITC-Goudy/
│           ├── GoudySansStd-Book.otf
│           ├── GoudySansStd-BookItalic.otf
│           ├── GoudySansStd-Medium.otf
│           ├── GoudySansStd-MediumItalic.otf
│           ├── GoudySansStd-Bold.otf
│           ├── GoudySansStd-BoldItalic.otf
│           ├── GoudySansStd-Black.otf
│           └── GoudySansStd-BlackItalic.otf
├── app/
│   ├── globals.css (declaraciones @font-face)
│   └── layout.tsx (link a TASA Orbiter)
└── TIPOGRAFIA.md (esta documentación)
```
