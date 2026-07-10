import { motion } from 'framer-motion'
import { FiMapPin, FiNavigation } from 'react-icons/fi'
import { NEGOCIO } from '../data/negocio.js'

export default function Location() {
  return (
    <section id="ubicacion" className="py-28 bg-negro">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center max-w-xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-dorado">Ubicación</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl mt-3">Te esperamos en Bávaro.</h2>
        </motion.div>

        <motion.div
          className="relative rounded-2xl overflow-hidden border border-white/10 min-h-[420px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <iframe
            title="Ubicación de Éclat en Bávaro"
            src={`https://www.google.com/maps?q=${NEGOCIO.mapsQuery}&output=embed`}
            loading="lazy"
            className="w-full h-[420px] border-0 grayscale-[0.4] contrast-90 brightness-90"
          />

          {/* Tarjeta glassmorphism superpuesta */}
          <div className="absolute bottom-6 left-6 right-6 md:right-auto md:w-96 bg-negro/60 backdrop-blur-xl border border-white/15 rounded-2xl p-6">
            <div className="flex items-start gap-3 mb-5 text-white/85">
              <FiMapPin className="text-dorado text-xl mt-0.5 flex-shrink-0" />
              <span>{NEGOCIO.direccion}</span>
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${NEGOCIO.mapsQuery}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-dorado to-naranja text-negro font-bold px-6 py-3 rounded-full text-sm"
            >
              <FiNavigation /> Cómo llegar
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
