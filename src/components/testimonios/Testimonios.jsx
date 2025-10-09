import React, { useState, useEffect } from "react";
import { testimoniosData } from "../../data/testimoniosData";

const Testimonios = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimoniosData.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="testimonios"
            className="px-8 md:pt-24 pt-20 md:pb-32 md:px-20 bg-gradient-to-r from-[#F3F9F5] via-white to-[#EEF3FF]"
        >
            <div className="max-w-5xl mx-auto text-center md:pb-0">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 font-title">
                    Lo que dicen nuestros clientes
                </h2>

                <div className="relative overflow-hidden w-full h-auto md:pt-12">
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${current * 100}%)` }}
                    >
                        {testimoniosData.map((t, i) => (
                            <div
                                key={i}
                                className="flex-shrink-0 w-full flex flex-col md:flex-row items-center md:items-stretch text-right gap-6"
                            >
                                {/* Texto */}
                                <div className="flex flex-col justify-center md:w-1/2 p-4">
                                    <p className="text-lg italic text-gray-700 mb-4">
                                        “{t.texto}”
                                    </p>
                                    <p className="font-semibold text-[#0F70B7] text-lg">
                                        {t.nombre}
                                    </p>
                                    <p className="text-gray-500">{t.lugar}</p>
                                </div>

                                {/* Imagen a la derecha */}
                                <div className="md:w-1/2 w-full pb-4">
                                    <img
                                        src={t.img}
                                        alt={t.nombre}
                                        className="w-full h-64 md:h-full object-cover rounded-lg shadow-md"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Indicadores */}
                    <div className="flex justify-center mt-4 mb-2 space-x-2">
                        {testimoniosData.map((_, i) => (
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
