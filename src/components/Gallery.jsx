import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX } from 'react-icons/fi'
import { GALERIA } from '../data/negocio.js'

export default function Gallery() {
  const [active, setActive] = useState(null)

  return (
    <section id="galeria" className="py-28 bg-gris-osc">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center max-w-xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-dorado">Galería</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl mt-3">Momentos que se quedan.</h2>
        </motion.div>

        <div className="columns-2 md:columns-3 gap-4 [column-fill:_balance]">
          {GALERIA.map((item, i) => (
            <motion.div
              key={i}
              className="mb-4 break-inside-avoid rounded-xl overflow-hidden cursor-pointer relative group"
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              onClick={() => setActive(item.src)}
            >
              {/* ⚠️ Imágenes de ejemplo — reemplazar por fotos/videos reales */}
              <img
                src={item.src}
                alt={`Éclat foto ${i + 1}`}
                loading="lazy"
                className="w-full transition-transform duration-500 group-hover:scale-110 group-hover:blur-[0.5px]"
              />
              <div className="absolute inset-0 bg-negro/0 group-hover:bg-negro/25 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 text-dorado text-2xl transition-opacity">+</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[250] bg-negro/95 backdrop-blur-sm flex items-center justify-center p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <button className="absolute top-6 right-8 text-3xl" onClick={() => setActive(null)} aria-label="Cerrar">
              <FiX />
            </button>
            <motion.img
              src={active}
              alt="Vista ampliada"
              className="max-h-[85vh] max-w-[90vw] rounded-lg"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
