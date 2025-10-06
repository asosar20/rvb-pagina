import { Menu, X, Facebook, Instagram, Phone } from "lucide-react"
import Hero from "./components/hero/Hero"
import Beneficios from "./components/beneficios/Beneficios"
import Proyectos from "./components/proyectos/Proyectos"
import Nosotros from "./components/nosotros/Nosotros"
import Testimonios from "./components/testimonios/Testimonios"
import Contactanos from "./components/contactanos/Contactanos"
import Footer from "./components/footer/Footer"
import Whatsapp from "./components/whatsapp/Whatsapp"
import Header from "./components/header/Header"
import Visita from "./components/visita/Visita"
import Ubicacion from "./components/ubicacion/Ubicacion"

function App() {

  return (
    <div className="font-title">
      <Header />
      <Hero />
      <Beneficios />
      <Proyectos />
      <Visita />
      <Contactanos />
      <Ubicacion />
      {/* <Nosotros /> */}
      <Testimonios />
      <Footer />
      <Whatsapp />
    </div>
  )
}

export default App
