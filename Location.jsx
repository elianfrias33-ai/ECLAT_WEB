import { useRef } from 'react'
import { motion } from 'framer-motion'
import { FiMusic, FiRadio, FiWind, FiStar, FiAward } from 'react-icons/fi'
import { EXPERIENCIAS } from '../data/negocio.js'

const ICONOS = [FiMusic, FiRadio, FiWind, FiStar, FiAward]

/**
 * Tarjeta individual con efecto hover 3D real (tilt según posición del mouse)
 */
function TiltCard({ titulo, desc, Icon, delay }) {
  const cardRef = useRef(null)

  function handleMouseMove(e) {
    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const rotateX = ((y - rect.height / 2) / rect.height) * -10
    const rotateY = ((x - rect.width / 2) / rect.width) * 10
    card.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`
  }

  function handleMouseLeave() {
    cardRef.current.style.transform = 'perspective(700px) rotateX(0deg) rotateY(0deg) translateY(0px)'
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative bg-white/[0.03] border border-white/10 rounded-2xl p-8 text-center backdrop-blur-md transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(212,175,55,0.15)] hover:border-dorado/40"
      style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
    >
      <motion.div
        whileHover={{ scale: 1.15, rotate: 6 }}
        transition={{ type: 'spring', stiffness: 300, damping: 12 }}
        className="mx-auto mb-4 w-9 h-9 text-dorado"
      >
        <Icon className="w-full h-full" />
      </motion.div>
      <h3 className="font-semibold mb-2">{titulo}</h3>
      <p className="text-sm text-white/55">{desc}</p>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experiencia" className="py-28 bg-negro">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center max-w-xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-dorado">La experiencia</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl mt-3">
            Todo lo que hace especial una noche.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
          {EXPERIENCIAS.map((exp, i) => (
            <TiltCard key={exp.titulo} titulo={exp.titulo} desc={exp.desc} Icon={ICONOS[i]} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}
