import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const Header = () => {
    const [open, setOpen] = useState(false)

    return (
        <header
            className="
            fixed 
            top-0 
            left-0 
            w-full 
            bg-white 
            shadow-md 
            z-50
            ">
            <div
                className="
                max-w-7xl 
                mx-auto 
                flex 
                items-center 
                justify-between 
                px-6 
                py-4
                ">

                <a href="#hero"
                    className="
                    flex 
                    items-center 
                    gap-2
                    ">
                    <img src="/img/logo.webp" alt="Logo empresa"
                        loading="lazy"
                        className="
                        h-10
                        " />
                    <span className="font-bold text-lg text-gray-800 font-title">Constructora</span>
                </a>

                <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
                    <a href="#hero" className="hover:text-indigo-600">Inicio</a>
                    <a href="#beneficios" className="hover:text-indigo-600">Beneficios</a>
                    <a href="#proyectos" className="hover:text-indigo-600">Proyectos</a>
                    <a href="#nosotros" className="hover:text-indigo-600">Nosotros</a>
                    <a href="#testimonios" className="hover:text-indigo-600">Testimonios</a>
                    <a href="#contacto" className="hover:text-indigo-600">Contacto</a>
                </nav>

                <button
                    className="md:hidden text-gray-700"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {open && (
                <nav className="md:hidden bg-white border-t border-gray-200 px-6 py-4 flex flex-col gap-4 text-gray-700 font-medium">
                    <a href="#hero" className="hover:text-indigo-600">Inicio</a>
                    <a href="#beneficios" className="hover:text-indigo-600">Beneficios</a>
                    <a href="#proyectos" className="hover:text-indigo-600">Proyectos</a>
                    <a href="#nosotros" className="hover:text-indigo-600">Nosotros</a>
                    <a href="#testimonios" className="hover:text-indigo-600">Testimonios</a>
                    <a href="#contacto" className="hover:text-indigo-600">Contacto</a>
                </nav>
            )}
        </header>
    )
}

export default Header
