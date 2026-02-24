# Devia Model Web

SPA de presentación del modelo de equipo técnico de Devia.

## Stack

- React 18 + TypeScript
- Vite (base: `/deviamodel/`)
- Framer Motion (animaciones fade-in, scroll-triggered)
- CSS puro (scroll-snap, design tokens CSS custom properties)

## Desarrollo

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

El output va a `dist/`. El servidor Express sirve estáticos desde esa carpeta.

## Estructura

```
src/
  components/
    Header.tsx           # sticky header con nav y botón PDF
    NavDots.tsx          # dots de navegación lateral con IntersectionObserver
    sections/            # 13 secciones de la SPA
    shared/              # Card, CompareTable, BlueBanner, SectionHeader
  hooks/
  icons.tsx              # SVG icons inline (Feather/Lucide)
  animations.ts          # Framer Motion variants compartidos
  styles/
    globals.css          # tokens CSS, reset, scroll-snap
    components.css       # estilos de todos los componentes
  App.tsx
  main.tsx
```

## Deploy

Servido por Express en `kai-doc-pwa` container en ruta `/deviamodel/`.
El PDF descargable está en `public/assets/devia-presentacion.pdf`.
