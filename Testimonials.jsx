import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { NEGOCIO } from '../data/negocio.js'

export default function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${NEGOCIO.whatsapp}?text=${encodeURIComponent('¡Hola! Quiero hacer una reserva en Éclat.')}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 left-6 z-40 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-black/40"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: [1, 1.08, 1], opacity: 1 }}
      transition={{ scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' }, opacity: { duration: 0.4 } }}
      whileHover={{ scale: 1.15 }}
      aria-label="Escribir por WhatsApp"
    >
      <FaWhatsapp className="text-2xl text-white" />
    </motion.a>
  )
}
