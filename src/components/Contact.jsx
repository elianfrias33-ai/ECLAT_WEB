import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiPhone, FiInstagram, FiMail, FiSend, FiAlertCircle } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { NEGOCIO } from '../data/negocio.js'

export default function Contact() {
  const [form, setForm] = useState({ nombre: '', telefono: '', mensaje: '' })
  const [errores, setErrores] = useState({})
  const [enviado, setEnviado] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrores({ ...errores, [e.target.name]: null })
  }

  function validar() {
    const errs = {}
    if (!form.nombre.trim()) errs.nombre = 'Escribe tu nombre.'
    if (!form.telefono.trim()) {
      errs.telefono = 'Escribe un teléfono de contacto.'
    } else if (!/^[\d\s()+-]{7,}$/.test(form.telefono.trim())) {
      errs.telefono = 'Ese teléfono no parece válido.'
    }
    if (!form.mensaje.trim()) errs.mensaje = 'Cuéntanos qué necesitas.'
    return errs
  }

  function handleSubmit(e) {
    e.preventDefault()
    const errs = validar()
    setErrores(errs)
    if (Object.keys(errs).length > 0) return

    const texto =
      `¡Hola! Soy ${form.nombre}.%0A` + `Teléfono: ${form.telefono}%0A` + `Mensaje: ${form.mensaje}`
    window.open(`https://wa.me/${NEGOCIO.whatsapp}?text=${texto}`, '_blank')
    setEnviado(true)
    setForm({ nombre: '', telefono: '', mensaje: '' })
  }

  return (
    <section id="contacto" className="py-28 bg-gris-osc">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-14">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-dorado">Contacto</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl mt-3 mb-8">Hablemos.</h2>

          <div className="space-y-4">
            <a href={`tel:${NEGOCIO.telefono}`} className="flex items-center gap-4 bg-white/[0.03] border border-white/10 rounded-xl p-5 hover:border-dorado/40 transition-colors">
              <FiPhone className="text-dorado text-xl" />
              <div><div className="text-xs text-white/50 font-mono uppercase">Teléfono</div><div className="font-semibold">{NEGOCIO.telefono}</div></div>
            </a>
            <a href={`https://wa.me/${NEGOCIO.whatsapp}`} target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-white/[0.03] border border-white/10 rounded-xl p-5 hover:border-dorado/40 transition-colors">
              <FaWhatsapp className="text-dorado text-xl" />
              <div><div className="text-xs text-white/50 font-mono uppercase">WhatsApp</div><div className="font-semibold">Escríbenos directo</div></div>
            </a>
            <a href={NEGOCIO.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-white/[0.03] border border-white/10 rounded-xl p-5 hover:border-dorado/40 transition-colors">
              <FiInstagram className="text-dorado text-xl" />
              <div><div className="text-xs text-white/50 font-mono uppercase">Instagram</div><div className="font-semibold">Síguenos</div></div>
            </a>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          noValidate
          className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 flex flex-col gap-4"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          {['nombre', 'telefono'].map((field) => (
            <div key={field}>
              <label className="block text-xs font-mono uppercase tracking-wide text-white/50 mb-2">
                {field === 'nombre' ? 'Nombre' : 'Teléfono'}
              </label>
              <input
                name={field}
                value={form[field]}
                onChange={handleChange}
                type={field === 'telefono' ? 'tel' : 'text'}
                placeholder={field === 'nombre' ? 'Tu nombre' : '809-000-0000'}
                className={`w-full bg-negro border rounded-lg px-4 py-3 focus:outline-none transition-colors ${
                  errores[field] ? 'border-red-500' : 'border-white/15 focus:border-dorado'
                }`}
              />
              {errores[field] && (
                <p className="text-xs text-red-400 flex items-center gap-1 mt-1.5">
                  <FiAlertCircle /> {errores[field]}
                </p>
              )}
            </div>
          ))}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wide text-white/50 mb-2">Mensaje</label>
            <textarea
              name="mensaje"
              value={form.mensaje}
              onChange={handleChange}
              rows="4"
              placeholder="Cuéntanos qué necesitas"
              className={`w-full bg-negro border rounded-lg px-4 py-3 focus:outline-none resize-none transition-colors ${
                errores.mensaje ? 'border-red-500' : 'border-white/15 focus:border-dorado'
              }`}
            />
            {errores.mensaje && (
              <p className="text-xs text-red-400 flex items-center gap-1 mt-1.5">
                <FiAlertCircle /> {errores.mensaje}
              </p>
            )}
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-2 flex items-center justify-center gap-2 bg-gradient-to-r from-dorado to-naranja text-negro font-bold py-3.5 rounded-sm"
          >
            <FiSend /> Enviar por WhatsApp
          </motion.button>
          {enviado && <p className="text-xs text-dorado text-center">¡Listo! Revisa la ventana de WhatsApp que se abrió.</p>}
        </motion.form>
      </div>
    </section>
  )
}
