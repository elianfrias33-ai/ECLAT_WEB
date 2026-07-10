import { motion } from 'framer-motion'
import { FiClock, FiUser } from 'react-icons/fi'
import { EVENTOS, NEGOCIO } from '../data/negocio.js'

export default function Events() {
  return (
    <section id="eventos" className="py-28 bg-negro">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center max-w-xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-dorado">Próximos eventos</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl mt-3">No te quedes fuera.</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {EVENTOS.map((ev, i) => (
            <motion.div
              key={ev.titulo}
              className="group rounded-2xl overflow-hidden bg-gris-osc border border-white/5 hover:border-dorado/30 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div
                className="h-44 bg-cover bg-center relative"
                style={{ backgroundImage: `url('${ev.imagen}')` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-negro/70 to-transparent" />
                <div className="absolute top-4 left-4 bg-negro/70 backdrop-blur-md rounded-lg px-3 py-2 text-center">
                  <div className="font-display font-extrabold text-lg leading-none text-dorado">
                    {ev.fecha.split(' ')[0]}
                  </div>
                  <div className="font-mono text-[0.6rem] uppercase tracking-wide">{ev.fecha.split(' ')[1]}</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-xl mb-2">{ev.titulo}</h3>
                <div className="flex items-center gap-4 text-xs font-mono text-white/50 mb-3">
                  <span className="flex items-center gap-1"><FiClock /> {ev.hora}</span>
                  <span className="flex items-center gap-1"><FiUser /> {ev.dj}</span>
                </div>
                <p className="text-sm text-white/60 mb-5">{ev.desc}</p>
                <a
                  href={`https://wa.me/${NEGOCIO.whatsapp}?text=${encodeURIComponent('¡Hola! Quiero reservar para el evento: ' + ev.titulo)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block border border-dorado text-dorado px-5 py-2 rounded-full text-sm font-semibold hover:bg-dorado hover:text-negro transition-colors"
                >
                  Reservar
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
