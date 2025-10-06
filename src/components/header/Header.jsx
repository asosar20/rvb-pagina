import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const Header = () => {
    const [open, setOpen] = useState(false)
    const claseNav = "hover:bg-[#0F70B7] hover:px-4 hover:py-2 hover:rounded-b-xl hover:text-gray-100 transition-all duration-300";


    return (
        <header
            className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <div
                className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

                <a href="#hero"
                    className="flex items-center gap-2">
                    <img src="/img/logo.png" alt="Logo empresa"
                        loading="lazy"
                        className="h-10" />
                    <span className="font-bold text-xl text-gray-900 font-title">Constructora</span>
                </a>

                <nav className="hidden md:flex md:items-center gap-8 text-gray-900 font-title">
                    <a href="#hero" className={claseNav}>Inicio</a>
                    <a href="#beneficios" className={claseNav}>Beneficios</a>
                    <a href="#proyectos" className={claseNav}>Proyectos</a>
                    <a href="#ubicacion" className={claseNav}>Ubicación</a>
                    <a href="#testimonios" className={claseNav}>Testimonios</a>
                    <a href="#contacto" className="bg-[#F6B800] px-5 py-4 text-gray-100 font-button font-bold shadow-xl rounded-xl transition-transform duration-300 hover:scale-105">Cotiza aquí</a>
                </nav>

                <button
                    className="md:hidden text-gray-700"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {open && (
                <nav className="md:hidden bg-gray-100 border-t border-gray-200 px-6 py-4 flex flex-col gap-4 text-gray-700 font-title">
                    {[
                        { id: "hero", text: "Inicio" },
                        { id: "beneficios", text: "Beneficios" },
                        { id: "proyectos", text: "Proyectos" },
                        { id: "ubicacion", text: "Ubicación" },
                        // { id: "nosotros", text: "Nosotros" },
                        { id: "testimonios", text: "Testimonios" },
                        { id: "contacto", text: "Contacto" },
                    ].map(({ id, text }) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            onClick={() => setOpen(false)}
                            className="hover:text-indigo-700"
                        >
                            {text}
                        </a>
                    ))}
                </nav>

            )}
        </header>
    )
}

export default Header

