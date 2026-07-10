@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

body {
  background: #0a0a0c;
  color: #f5f4f2;
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;
}

::selection {
  background: #d4af37;
  color: #0a0a0c;
}

.custom-cursor-active,
.custom-cursor-active * {
  cursor: none !important;
}

@media (max-width: 768px) {
  .custom-cursor-active,
  .custom-cursor-active * {
    cursor: auto !important;
  }
}

/* Accesibilidad: foco visible al navegar con teclado */
a:focus-visible,
button:focus-visible,
input:focus-visible,
textarea:focus-visible {
  outline: 2px solid #d4af37;
  outline-offset: 3px;
}

/* Animación del texto letra por letra */
.letter {
  display: inline-block;
}
