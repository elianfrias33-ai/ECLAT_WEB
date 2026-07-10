import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

const TITLE = 'La noche caribeña, vivida en grande.'

export default function Hero() {
  const bgRef = useRef(null)
  const light1Ref = useRef(null)
  const light2Ref = useRef(null)

  // Parallax del fondo con GSAP al hacer scroll
  useEffect(() => {
    function handleScroll() {
      const y = window.scrollY
      gsap.to(bgRef.current, {
        y: y * 0.35,
        scale: 1.08,
        duration: 0.3,
        overwrite: true,
        ease: 'power1.out',
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Luces de neón moviéndose lentamente (loop infinito)
  useEffect(() => {
    gsap.to(light1Ref.current, {
      x: 60,
      y: -40,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })
    gsap.to(light2Ref.current, {
      x: -50,
      y: 50,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })
  }, [])

  const letters = TITLE.split('')

  return (
    <section
      id="inicio"
      className="relative h-screen flex items-center justify-center text-center overflow-hidden"
    >
      {/* Fondo con parallax.
          Para usar VIDEO en vez de imagen, reemplaza este <div> por:
          <video ref={bgRef} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/tu-video.mp4" type="video/mp4" />
          </video>
          El parallax (GSAP) sigue funcionando igual sobre el <video>. */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?q=80&w=1600&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-negro/55 via-negro/75 to-negro" />

      {/* Luces de neón flotantes */}
      <div
        ref={light1Ref}
        className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-dorado/20 blur-[100px] pointer-events-none"
      />
      <div
        ref={light2Ref}
        className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-neon/15 blur-[100px] pointer-events-none"
      />

      {/* Contenido */}
      <motion.div
        className="relative z-10 px-6"
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.span
          className="font-mono text-xs tracking-[0.25em] uppercase text-dorado block mb-5"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Bávaro · Punta Cana
        </motion.span>

        {/* Título letra por letra */}
        <h1 className="font-display font-extrabold text-4xl md:text-6xl lg:text-7xl max-w-3xl mx-auto mb-6 leading-tight">
          {letters.map((char, i) => (
            <motion.span
              key={i}
              className="letter"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.02 }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </h1>

        <motion.p
          className="max-w-md mx-auto text-white/75 mb-9"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          Cócteles de autor, DJs en vivo y ambiente VIP frente al mar. Éclat es
          donde empieza tu noche perfecta.
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.7 }}
        >
          <motion.a
            href="#contacto"
            className="bg-gradient-to-r from-dorado to-neon text-negro font-bold px-8 py-4 rounded-sm"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 12, delay: 1.9 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212,175,55,0.5)' }}
            whileTap={{ scale: 0.97 }}
          >
            Reservar
          </motion.a>
          <motion.a
            href="#ubicacion"
            className="border border-white/40 bg-white/5 backdrop-blur-sm px-8 py-4 rounded-sm font-semibold"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 12, delay: 2.05 }}
            whileHover={{ scale: 1.05, borderColor: 'rgba(212,175,55,0.7)' }}
            whileTap={{ scale: 0.97 }}
          >
            Cómo llegar
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator animado */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.3 }}
      >
        <span className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-white/50">Scroll</span>
        <motion.div
          className="w-[1px] h-8 bg-gradient-to-b from-dorado to-transparent"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
