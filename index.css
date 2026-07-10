import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { FiStar } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { TESTIMONIOS } from '../data/negocio.js'
import 'swiper/css'
import 'swiper/css/pagination'

export default function Testimonials() {
  return (
    <section className="py-28 bg-negro">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-dorado">Opiniones</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl mt-3 mb-12">Voces de nuestra comunidad.</h2>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4800, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          className="pb-12"
        >
          {TESTIMONIOS.map((t) => (
            <SwiperSlide key={t.nombre}>
              <div className="w-16 h-16 rounded-full mx-auto mb-5 bg-gradient-to-br from-dorado to-naranja flex items-center justify-center font-display font-extrabold text-negro text-xl">
                {t.nombre.charAt(0)}
              </div>
              <div className="flex justify-center gap-1 text-dorado mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FiStar key={i} className="fill-dorado" />
                ))}
              </div>
              <p className="text-lg italic text-white/85 mb-5 max-w-lg mx-auto">"{t.texto}"</p>
              <div className="font-semibold text-white/60">{t.nombre}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
