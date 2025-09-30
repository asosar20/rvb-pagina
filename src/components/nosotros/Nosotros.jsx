import React from 'react'

const Nosotros = () => {
    return (
        <section id="nosotros" className=" 
            px-8
            md:pt-36
            pt-20
            text-center
            md:px-20
            bg-gradient-to-r from-indigo-50 via-white to-indigo-100">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-4xl 
                    md:text-5xl 
                    font-bold 
                    text-gray-900 
                    mb-6 
                    font-title
                    ">
                        ¿Quiénes somos?
                    </h2>
                    <p className="text-lg text-gray-700 mb-6 text-start">
                        Somos una <span className="font-semibold text-indigo-600 font-number">constructora con más de 10 años de experiencia </span>
                        en el desarrollo de proyectos inmobiliarios en la región. Nuestro objetivo
                        es brindar viviendas de calidad que combinen comodidad, seguridad y
                        ubicación estratégica.
                    </p>
                    <p className="text-lg text-gray-700 mb-6 text-start">
                        Creemos en construir hogares donde las familias puedan crecer y
                        alcanzar sus sueños, siempre cumpliendo los más altos estándares
                        del programa Techo Propio y normativas de construcción.
                    </p>

                    <a
                        href="#contacto"
                        className="
                        block 
                        md:inline-block 
                        bg-indigo-600 
                        text-white 
                        px-5
                        py-2
                        rounded-lg 
                        shadow-md 
                        transition-transform duration-300 
                        hover:scale-105 
                        hover:bg-indigo-700
                        font-button
                        "
                    >
                        Conoce más
                    </a>
                </div>
                <div>
                    <img
                        src="/img/equipo.webp"
                        alt="Equipo de la constructora"
                        loading="eager"
                        className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
                    />
                </div>
            </div>
        </section>
    )
}

export default Nosotros


