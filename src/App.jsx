import { useState } from 'react'
import { motion } from 'framer-motion'
import IntroScreen from './components/IntroScreen.jsx'
import SmoothScroll from './components/SmoothScroll.jsx'
import CustomCursor from './components/CustomCursor.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Experience from './components/Experience.jsx'
import Gallery from './components/Gallery.jsx'
import Events from './components/Events.jsx'
import DrinksMenu from './components/DrinksMenu.jsx'
import Testimonials from './components/Testimonials.jsx'
import Location from './components/Location.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'

export default function App() {
  const [entered, setEntered] = useState(false)

  return (
    <>
      <CustomCursor />

      {!entered && <IntroScreen onComplete={() => setEntered(true)} />}

      {entered && (
        <SmoothScroll>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <Navbar />
            <Hero />
            <Experience />
            <Gallery />
            <Events />
            <DrinksMenu />
            <Testimonials />
            <Location />
            <Contact />
            <Footer />
            <WhatsAppButton />
          </motion.div>
        </SmoothScroll>
      )}
    </>
  )
}
