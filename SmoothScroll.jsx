import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiInstagram, FiFacebook, FiMail, FiPhone, FiClock, FiCheck } from 'react-icons/fi'
import { NEGOCIO } from '../data/negocio.js'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [suscrito, setSuscrito] = useState(false)

  function handleSubscribe(e) {
    e.preventDefault()
    if (!email.trim()) return
    // Nota: esto es solo UI — no hay backend conectado todavía.
    // Cuando haya uno, aquí se envía el email al servicio de newsletter real.
    setSuscrito(true)
    setEmail('')
  }

  return (
    <footer className="bg-gris-osc border-t border-white/5 pt-20 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-14">
          <div>
            <div className="font-display font-extrabold text-2xl mb-3">
              É<span className="text-dorado">CLAT</span>
            </div>
            <p className="text-white/55 text-sm max-w-xs mb-5">
              Bar y discoteca premium en el corazón de Bávaro, Punta Cana.
            </p>
            <div className="flex gap-3">
              <a href={NEGOCIO.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:border-dorado hover:text-dorado transition-colors">
                <FiInstagram />
              </a>
              <a href={NEGOCIO.facebook} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:border-dorado hover:text-dorado transition-colors">
                <FiFacebook />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wide text-white/50 mb-4">Horario</h4>
            <p className="text-sm text-white/70 flex items-start gap-2">
              <FiClock className="mt-0.5 text-dorado flex-shrink-0" /> {NEGOCIO.horario}
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wide text-white/50 mb-4">Contacto</h4>
            <a href={`tel:${NEGOCIO.telefono}`} className="text-sm text-white/70 flex items-center gap-2 mb-2 hover:text-dorado">
              <FiPhone className="text-dorado" /> {NEGOCIO.telefono}
            </a>
            <a href={`mailto:${NEGOCIO.email}`} className="text-sm text-white/70 flex items-center gap-2 hover:text-dorado">
              <FiMail className="text-dorado" /> {NEGOCIO.email}
            </a>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wide text-white/50 mb-4">Newsletter</h4>
            <p className="text-xs text-white/50 mb-3">Entérate de próximos eventos.</p>
            {suscrito ? (
              <p className="text-sm text-dorado flex items-center gap-2">
                <FiCheck /> ¡Gracias por suscribirte!
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@correo.com"
                  className="flex-1 bg-negro border border-white/15 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-dorado min-w-0"
                />
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-dorado text-negro font-semibold text-sm px-4 rounded-lg flex-shrink-0">
                  Unirme
                </motion.button>
              </form>
            )}
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/35">
          <span>© 2026 Éclat. Todos los derechos reservados.</span>
          <span>Diseño demo — no oficial</span>
        </div>
      </div>
    </footer>
  )
}
