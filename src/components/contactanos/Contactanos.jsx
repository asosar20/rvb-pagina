import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

const Contactanos = () => {
    return (
        <section
            id="contacto"
            className="px-8 pt-20 md:px-20 text-center bg-gradient-to-r from-indigo-50 via-white to-indigo-100"
        >
            <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-title">
                    Contáctanos
                </h2>
                <p className="text-gray-700 mb-6">
                    Completa el formulario y nuestro equipo se pondrá en contacto contigo lo antes posible.
                </p>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">

                <div className="md:w-1/2">
                    <form className="flex flex-col text-left">

                        <div className="flex flex-col mb-6">
                            <label className="text-gray-700 mb-1 font-medium">
                                Nombre <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Tu nombre"
                                required
                                className="w-full border border-gray-400 rounded-lg px-4 py-2 
                           focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <div className="flex flex-col mb-6">
                            <label className="text-gray-700 mb-1 font-medium">
                                Correo (opcional)
                            </label>
                            <input
                                type="email"
                                placeholder="ejemplo@correo.com"
                                className="w-full border border-gray-400 rounded-lg px-4 py-2 
                           focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <div className="flex flex-col mb-6">
                            <label className="text-gray-700 mb-1 font-medium">
                                Teléfono <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="tel"
                                placeholder="+51 999 999 999"
                                required
                                className="w-full border border-gray-400 rounded-lg px-4 py-2 
                           focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <div className="flex flex-col mb-6">
                            <label className="text-gray-700 mb-1 font-medium">
                                Mensaje <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                placeholder="Escribe tu mensaje aquí..."
                                required
                                className="w-full border border-gray-400 rounded-lg px-4 py-2 h-32 
                           focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white px-5 py-2 rounded-lg 
                         hover:bg-indigo-700 transition-transform duration-300 
                         hover:scale-105 font-button mb-6"
                        >
                            Enviar
                        </button>
                    </form>
                </div>

                <div className="flex flex-col justify-center md:text-left mb-6 md:w-1/2">
                    <div className="mb-6 w-full h-80">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d990.4961801727093!2d-79.83768193278188!3d-6.771713216128401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x904cef29db2532b9%3A0x6dc479fdb7b7e814!2s7%20de%20Enero%20%23740%2C%20Chiclayo%2014001!5e0!3m2!1ses!2spe!4v1758302053424!5m2!1ses!2spe"
                            className="w-full h-full rounded-lg shadow"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    <p className="text-gray-700 mb-5 flex flex-col ">
                        <span className='flex items-center gap-2 mb-2'><MapPin className='w-5 h-5' /> Dirección: 7 de Enero #740, Chiclayo</span>
                        <span className='flex items-center gap-2 mb-2'><Phone className='w-5 h-5' /> Teléfono: +51 123 456 789</span>
                        <span className='flex items-center gap-2 mb-2'><Mail className='w-5 h-5' /> Correo: info@constructora.com</span>
                    </p>


                </div>
            </div>
        </section>
    )
}

export default Contactanos
