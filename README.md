# Éclat — Nightclub & Lounge (versión premium)

Proyecto React + Vite + Tailwind + Framer Motion + GSAP + Swiper + Lenis.

## Cómo correrlo

```
npm install
npm run dev
```

## ✅ Lo que se CONSERVÓ tal cual (no se rompió nada)

- **`IntroScreen.jsx`** — se mantiene exactamente como estaba: partículas en canvas, botón "TOCA PARA ENTRAR" con glow pulsante, borde giratorio, y la secuencia cinematográfica de salida (fade → zoom → blur → dispersión de partículas → fade a negro → revelado).
- **`Hero.jsx`** — se conservó el parallax con GSAP, el título letra por letra, y las luces de neón. Solo se **agregó** (sin quitar nada): comentario para cambiar la imagen por video, hover premium con glow en los botones, y un scroll indicator animado abajo.
- **`Navbar.jsx`** — se conservó el fondo transparente→sólido con blur. Se **agregó**: indicador de sección activa (se resalta el link de la sección que estás viendo) y menú móvil a pantalla completa.

## 🆕 Lo que se AGREGÓ (secciones que no existían en React todavía)

| Componente | Qué hace |
|---|---|
| `Experience.jsx` | Tarjetas con **hover 3D real** (tilt según posición del mouse), iconos animados |
| `Gallery.jsx` | Masonry grid, lightbox, lazy loading, hover con blur sutil |
| `Events.jsx` | Tarjetas de eventos con fecha, hora, DJ, descripción y botón de reserva por WhatsApp |
| `DrinksMenu.jsx` | Carta de cócteles con hover premium |
| `Testimonials.jsx` | Slider automático (Swiper) con 5 estrellas |
| `Location.jsx` | Mapa embebido **con tarjeta glassmorphism superpuesta** |
| `Contact.jsx` | Formulario **con validación** (nombre, teléfono, mensaje) que envía por WhatsApp |
| `Footer.jsx` | Rediseñado: newsletter (solo UI, sin backend todavía), redes, horario, contacto |
| `WhatsAppButton.jsx` | Botón flotante siempre visible con pulso sutil |
| `CustomCursor.jsx` | Cursor personalizado con glow — se desactiva automático en móvil/táctil |
| `SmoothScroll.jsx` | Scroll ultra suave con **Lenis**, envuelve toda la app |

## ⚠️ Cosas que DEBES reemplazar antes de lanzar

Todo centralizado en **`src/data/negocio.js`**:

1. **WhatsApp/teléfono/Instagram/Facebook/email** — todos son placeholders (`18090000000`, `instagram.com/`, etc.)
2. **Fotos** — todas son de Unsplash (banco gratuito). Reemplázalas por fotos/videos reales del lugar.
3. **Favicon** — agregué las referencias (`/favicon.png`) en `index.html` y `site.webmanifest`, pero necesitas subir el archivo de imagen real a `public/favicon.png` (yo no puedo generar un logo, solo dejé la estructura lista).
4. **Dominio real** — en `index.html`, `robots.txt` y `sitemap.xml` puse `eclat-bavaro.example` como marcador — cámbialo por el dominio real cuando lo tengas.
5. **Testimonios** — son de ejemplo. Solo usa nombres/fotos reales si tienes permiso de esas personas.
6. **Newsletter** — el formulario en el Footer solo tiene la interfaz (UI). Para que funcione de verdad, necesitas conectarlo a un servicio real (Mailchimp, Brevo, etc.) — eso ya requeriría backend o una integración externa.

## Sobre el "sonido opcional" en la intro

No lo agregué todavía: reproducir audio automático en la mayoría de navegadores requiere que el usuario ya haya interactuado con la página (política de autoplay), lo cual encaja bien porque el clic en "TOCA PARA ENTRAR" ya cuenta como esa interacción. Si quieres que lo agregue, dime y lo conecto a ese mismo clic con un archivo de audio corto (necesitarías proporcionar el archivo de sonido, ya que no puedo generar audio).

## Sobre Lighthouse / rendimiento

- Imágenes con `loading="lazy"`.
- Animaciones con `viewport={{ once: true }}` (no se repiten al hacer scroll varias veces).
- Para producción: comprime las fotos reales (WebP), y corre `npm run build` para servir la versión optimizada.
