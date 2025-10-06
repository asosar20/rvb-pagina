import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

const Footer = () => {
    return (
        <footer className="px-8 pt-20 text-center bg-gray-900">
            <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-4">

                <div className="flex flex-col gap-4">
                    <a href="#hero" className="flex items-center justify-center gap-2 mb-6">
                        <img src="/img/logo.png" alt="Logo empresa" className="h-10" />
                        <span className="font-bold text-2xl font-title text-gray-100">Constructora</span>
                    </a>
                    <p className="text-gray-400 text-sm text-center">
                        Construimos hogares cerca del mar, combinando calidad, confort y confianza para toda tu familia.
                    </p>
                </div>

                <div className="flex flex-col gap-4 items-center">
                    <h4 className="font-semibold text-white text-lg font-title">Síguenos</h4>
                    <div className="flex gap-4">
                        <a
                            href="#"
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-indigo-600 hover:scale-105 transition"
                        >
                            <Facebook className="w-5 h-5 text-white" />
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-pink-500 hover:scale-105 transition"
                        >
                            <Instagram className="w-5 h-5 text-white" />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col items-center md:items-start gap-2 text-white text-xs">
                    <h4 className="font-semibold text-lg font-title">Contáctanos</h4>
                    <span className='flex items-center gap-2 mb-2 '><MapPin className='w-5 h-5' /> Dirección: 7 de Enero #740, Chiclayo</span>
                    <span className='flex items-center gap-2 mb-2'><Phone className='w-5 h-5' /> Teléfono: +51 123 456 789</span>
                    <span className='flex items-center gap-2 mb-2'><Mail className='w-5 h-5' /> Correo: info@constructora.com</span>
                </div>

                <div className="flex flex-col text-center gap-4">
                    <h4 className="font-semibold text-white text-lg font-title">Agenda tu visita</h4>
                    <a
                        href="#contacto"
                        className="inline-block bg-indigo-600 text-white px-5 py-2 font-button rounded-lg hover:bg-indigo-700 transition-transform duration-300 hover:scale-105"
                    >
                        Contáctanos
                    </a>
                </div>
            </div>

            <div className="mt-12 border-t border-gray-700 p-6 text-center text-gray-500 text-sm">
                © 2025 RVB Constructora. Todos los derechos reservados. Diseñado con ❤️ por tu equipo digital
            </div>
        </footer>
    )
}

export default Footer

