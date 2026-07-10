import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'

/**
 * IntroScreen
 * Pantalla de bienvenida original con:
 * - Fondo oscuro con partículas dibujadas en <canvas>
 * - Luces de neón que se mueven lentamente (GSAP)
 * - Botón "TOCA PARA ENTRAR" con glow pulsante + escala en hover + borde animado
 * - Secuencia cinematográfica de salida al hacer clic:
 *   1. Botón se desvanece
 *   2. Fondo hace zoom leve
 *   3. Blur progresivo
 *   4. Partículas se dispersan (aceleradas via GSAP)
 *   5. Fundido a negro (~500ms)
 *   6. onComplete() dispara el "reveal" del contenido principal en App.jsx
 */
export default function IntroScreen({ onComplete }) {
  const canvasRef = useRef(null)
  const particlesRef = useRef([])
  const animFrameRef = useRef(null)
  const [exiting, setExiting] = useState(false)
  const [dispersing, setDispersing] = useState(false)

  // ---------- Partículas en canvas ----------
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const COUNT = 70
    particlesRef.current = Array.from({ length: COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.8 + 0.4,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      hue: Math.random() > 0.5 ? '212,175,55' : '245,230,99', // dorado / neón
      alpha: Math.random() * 0.5 + 0.2,
    }))

    function draw() {
      ctx.clearRect(0, 0, width, height)
      particlesRef.current.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.hue},${p.alpha})`
        ctx.fill()
      })
      animFrameRef.current = requestAnimationFrame(draw)
    }
    draw()

    function handleResize() {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)
    return () => {
      cancelAnimationFrame(animFrameRef.current)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // ---------- Dispersar partículas al salir ----------
  useEffect(() => {
    if (!dispersing) return
    particlesRef.current.forEach((p) => {
      gsap.to(p, {
        vx: p.vx * 14,
        vy: p.vy * 14,
        alpha: 0,
        duration: 0.8,
        ease: 'power2.out',
      })
    })
  }, [dispersing])

  function handleEnter() {
    // Paso 1: el botón se desvanece (lo maneja AnimatePresence más abajo)
    setExiting(true)
    // Paso 4: partículas se dispersan casi al mismo tiempo que el zoom/blur
    setTimeout(() => setDispersing(true), 150)
    // Paso 5+6: tras el fundido a negro, avisamos a App.jsx que puede montar el contenido
    setTimeout(() => {
      onComplete()
    }, 1300) // deja tiempo a zoom + blur + fade antes de revelar contenido
  }

  return (
    <motion.div
      className="fixed inset-0 z-[200] bg-negro flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      animate={exiting ? { opacity: [1, 1, 0] } : { opacity: 1 }}
      transition={{ duration: 1.3, times: [0, 0.6, 1], ease: 'easeInOut' }}
    >
      {/* Fondo con zoom + blur progresivo al salir */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 40%, rgba(212,175,55,0.18), transparent 60%), #0A0A0C',
        }}
        animate={exiting ? { scale: 1.15, filter: 'blur(14px)' } : { scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1.1, ease: 'easeInOut' }}
      />

      {/* Canvas de partículas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Contenido central */}
      <AnimatePresence>
        {!exiting && (
          <motion.div
            className="relative z-10 flex flex-col items-center text-center px-6"
            exit={{ opacity: 0, transition: { duration: 0.35 } }}
          >
            <motion.span
              className="font-mono text-xs tracking-[0.3em] uppercase text-neon/70 mb-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Bávaro · Punta Cana
            </motion.span>

            <motion.h1
              className="font-display font-extrabold text-4xl md:text-6xl tracking-wide mb-10 bg-gradient-to-r from-dorado to-neon bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35 }}
            >
              ÉCLAT
            </motion.h1>

            <motion.button
              onClick={handleEnter}
              className="relative px-12 py-5 rounded-full font-semibold tracking-wide text-dorado border-[1.5px] border-dorado/70"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: [1, 1.035, 1],
                boxShadow: [
                  '0 0 0px rgba(212,175,55,0.3)',
                  '0 0 28px rgba(212,175,55,0.55)',
                  '0 0 0px rgba(212,175,55,0.3)',
                ],
              }}
              transition={{
                opacity: { duration: 0.6, delay: 0.6 },
                scale: { duration: 2.2, repeat: Infinity, ease: 'easeInOut' },
                boxShadow: { duration: 2.2, repeat: Infinity, ease: 'easeInOut' },
              }}
              whileHover={{ scale: 1.08, backgroundColor: 'rgba(212,175,55,1)', color: '#0A0A0C' }}
              whileTap={{ scale: 0.96 }}
            >
              {/* Borde luminoso animado (rotación de gradiente cónico) */}
              <span className="absolute inset-0 rounded-full -z-10 opacity-60 blur-[2px] animate-spin-slow bg-[conic-gradient(from_0deg,#D4AF37,transparent,#F5E663,transparent,#D4AF37)]" />
              TOCA PARA ENTRAR
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
