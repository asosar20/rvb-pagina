import { MapPinHouse } from "lucide-react";
import { Building2 } from "lucide-react";
import { Phone } from "lucide-react";

export default function Ubicacion() {
    return (
        <section id="ubicacion" className="bg-[#F4FAF7] py-12 px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">

                {/* ENCABEZADO */}
                <div className="text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                        Tu futuro hogar te espera aquí
                    </h2>
                    <p className="text-gray-700 mb-1">
                        Oficina de ventas de lunes a domingo.
                    </p>
                    <p className="text-gray-900 font-semibold mb-4">
                        <span className="font-bold">Horario:</span> 9:00 a.m. a 6:00 p.m.
                    </p>
                    <a
                        href="tel:012032820"
                        className="inline-flex items-center gap-2 bg-[#0F70B7] text-white px-5 py-3 rounded-md font-semibold transition"
                    >
                        <Phone size={18} />
                        Llamar al: 074 - 688437
                    </a>
                </div>

                {/* TARJETAS */}
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Oficina de ventas */}
                    <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center text-center">
                        <Building2 className="h-10 w-10 mb-3 text-gray-800" />
                        <h3 className="font-bold text-lg mb-1">OFICINA DE VENTAS</h3>
                        <p className="text-gray-600 mb-4">
                            7 de Enero #740 - Chiclayo.
                        </p>
                        <a
                            href="https://www.google.com/maps/place/Villa+Posada+del+Sol+Chiclayo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-[#0F70B7] text-[#0F70B7] hover:bg-[#0F70B7] hover:text-white px-4 py-2 rounded-md transition flex items-center gap-2"
                        >
                            <MapPinHouse className="w-5 h-5" />
                            Como llegar
                        </a>
                    </div>

                    {/* Proyecto */}
                    <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-3 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3l9 4.5-9 4.5L3 7.5 12 3zM3 12l9 4.5 9-4.5" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 16.5L12 21l9-4.5" />
                        </svg>
                        <h3 className="font-bold text-lg mb-1">PROYECTO</h3>
                        <p className="text-gray-600 mb-4">
                            Alt. km 1.5 carretera a Pimentel
                        </p>
                        <a
                            href="https://www.google.com/maps"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-[#0F70B7] text-[#0F70B7] hover:bg-[#0F70B7] hover:text-white px-4 py-2 rounded-md transition flex items-center gap-2"
                        >
                            <MapPinHouse className="w-5 h-5" />
                            Como llegar
                        </a>
                    </div>
                </div>

                {/* MAPA */}

            </div>

            <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg pt-10">
                <iframe
                    title="Ubicación"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.5800144651245!2d-79.8434929!3d-6.7570888999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x904d68e3774170a3%3A0x7e67cbb2a5476d34!2sVilla%20Posada%20del%20Sol%20Chiclayo!5e0!3m2!1ses-419!2spe!4v1699980000000!5m2!1ses-419!2spe"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    );
}
