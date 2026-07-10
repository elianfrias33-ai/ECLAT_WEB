import { useEffect, useRef, useState } from 'react'

/**
 * CustomCursor
 * Punto dorado con glow que sigue el mouse, más un anillo que se
 * expande sutilmente sobre elementos interactivos (a, button).
 * Se desactiva automáticamente en pantallas táctiles.
 */
export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [isTouch, setIsTouch] = useState(false)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true)
      return
    }
    document.documentElement.classList.add('custom-cursor-active')

    const pos = { x: 0, y: 0 }
    const ring = { x: 0, y: 0 }

    function onMove(e) {
      pos.x = e.clientX
      pos.y = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.x}px, ${pos.y}px)`
      }
    }
    window.addEventListener('mousemove', onMove)

    let raf
    function animateRing() {
      ring.x += (pos.x - ring.x) * 0.15
      ring.y += (pos.y - ring.y) * 0.15
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.x}px, ${ring.y}px)`
      }
      raf = requestAnimationFrame(animateRing)
    }
    animateRing()

    function onOver(e) {
      setHovering(!!e.target.closest('a, button'))
    }
    window.addEventListener('mouseover', onOver)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      cancelAnimationFrame(raf)
    }
  }, [])

  if (isTouch) return null

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-dorado pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      />
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full border border-dorado/50 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-[width,height,opacity] duration-200 ${
          hovering ? 'w-11 h-11 opacity-70 bg-dorado/10' : 'w-7 h-7 opacity-40'
        }`}
      />
    </>
  )
}
