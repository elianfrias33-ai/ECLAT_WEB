import { useEffect } from 'react'
import Lenis from 'lenis'

/**
 * SmoothScroll
 * Envuelve la app y activa scroll suave (Lenis) en toda la página.
 * No renderiza nada visualmente — solo conecta el motor de scroll
 * con requestAnimationFrame.
 */
export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => 1 - Math.pow(1 - t, 3), // ease-out cúbico, sensación premium
      smoothWheel: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return children
}
