import React, { useState, useEffect } from "react";

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
];

const Testimonios = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonios.length);
        }, 5000); // Cambia cada 5 segundos
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="testimonios"
            className="px-8 md:pt-24 pt-20 md:pb-32 md:px-20 text-center bg-gradient-to-r from-[#F3F9F5] via-white to-[#EEF3FF]"
        >
            <div className="max-w-4xl mx-auto text-center md:pb-0 pb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 font-title">
                    Lo que dicen nuestros clientes
                </h2>

                <div className="relative overflow-hidden w-full h-auto">
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${current * 100}%)` }}
                    >
                        {testimonios.map((t, i) => (
                            <div
                                key={i}
                                className="flex-shrink-0 w-full px-4 flex flex-col items-center justify-center"
                            >
                                <img
                                    src={t.img}
                                    alt={t.nombre}
                                    className="w-20 h-20 rounded-full object-cover border-4 border-[#0F70B7] shadow-md mb-4"
                                />
                                <p className="text-lg italic text-gray-700 max-w-2xl mb-4">
                                    “{t.texto}”
                                </p>
                                <p className="font-semibold text-[#0F70B7] text-lg">
                                    {t.nombre}
                                </p>
                                <p className="text-gray-500">{t.lugar}</p>
                            </div>
                        ))}
                    </div>

                    {/* Indicadores */}
                    <div className="flex justify-center mt-6 space-x-2">
                        {testimonios.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className={`w-3 h-3 rounded-full transition-all ${current === i ? "bg-[#0F70B7] w-6" : "bg-gray-300"
                                    }`}
                            ></button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonios;
