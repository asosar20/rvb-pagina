import React from "react"

const testimonios = [
    {
        texto: "Gracias a la constructora, mi familia y yo conseguimos nuestra casa ideal cerca del mar. Todo el proceso fue rápido y seguro.",
        nombre: "María Pérez",
        lugar: "Pimentel",
        img: "/img/cliente.webp",
    },
    {
        texto: "La atención fue excelente y nos ayudaron con todos los trámites del Bono Techo Propio. Recomendados 100%.",
        nombre: "Carlos Gómez",
        lugar: "Lambayeque",
        img: "/img/cliente.webp",
    },
    {
        texto: "Nos encantó nuestra nueva casa. Todo el equipo fue muy profesional y siempre estuvo pendiente de nosotros.",
        nombre: "Ana Torres",
        lugar: "Chiclayo",
        img: "/img/cliente.webp",
    },
    {
        texto: "El acompañamiento en cada paso fue increíble. Nos sentimos seguros en todo momento.",
        nombre: "Luis Fernández",
        lugar: "Monsefú",
        img: "/img/cliente.webp",
    },
    {
        texto: "Muy responsables y atentos, hicieron que todo el proceso fuera sencillo y rápido.",
        nombre: "Rosa Martínez",
        lugar: "Ferreñafe",
        img: "/img/cliente.webp",
    },
    {
        texto: "La mejor decisión que tomamos fue confiar en ellos para nuestro hogar.",
        nombre: "Pedro Castillo",
        lugar: "Chiclayo",
        img: "/img/cliente.webp",
    },
]

const Testimonios = () => {
    return (
        <section
            id="testimonios"
            className="
            px-8
            pt-20
            md:px-20
            text-center
            bg-gradient-to-r from-indigo-50 via-white to-indigo-100"
        >
            <div className="max-w-7xl mx-auto flex items-center justify-center flex-col">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-title">
                    Lo que dicen nuestros clientes
                </h2>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {testimonios.map((t, i) => (
                        <div
                            key={i}
                            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition text-left border border-gray-300"
                        >
                            <p className="text-gray-700 mb-6 italic">“{t.texto}”</p>
                            <div className="flex items-center gap-4">
                                <img
                                    src={t.img}
                                    alt={t.nombre}
                                    loading="lazy"
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-semibold text-gray-900">{t.nombre}</p>
                                    <p className="text-gray-500 text-sm">{t.lugar}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonios
