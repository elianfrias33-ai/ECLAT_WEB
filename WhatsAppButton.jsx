import { motion } from 'framer-motion'
import { BEBIDAS } from '../data/negocio.js'

export default function DrinksMenu() {
  return (
    <section className="py-28 bg-gris-osc">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          className="text-center max-w-xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-dorado">Carta de bebidas</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl mt-3">Cócteles de autor.</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {BEBIDAS.map((b, i) => (
            <motion.div
              key={b.nombre}
              className="flex justify-between items-start gap-4 bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:border-dorado/40 transition-colors"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <div>
                <h3 className="font-display font-bold text-lg mb-1">{b.nombre}</h3>
                <p className="text-sm text-white/55 max-w-xs">{b.desc}</p>
              </div>
              <span className="font-mono text-dorado text-sm whitespace-nowrap mt-1">{b.precio}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
