import { MapPinHouse, Building2, Phone, Map } from "lucide-react";
import { ubicacionData } from "../../data/ubicacionData";

export default function Ubicacion() {
    const { titulo, horarioTexto, horario, telefono, tarjetas, mapa } = ubicacionData;

    return (
        <section id="ubicacion" className="bg-[#F4FAF7] md:pt-24 pt-20 md:pb-24 pb-20 text-center">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
                {/* ENCABEZADO */}
                <div className="text-center md:text-left px-8 md:px-0">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 font-title">
                        {titulo}
                    </h2>
                    <p className="text-gray-700 mb-1">{horarioTexto}</p>
                    <p className="text-gray-900 font-semibold mb-4">
                        <span className="font-bold">{horario.etiqueta}</span> {horario.valor}
                    </p>
                    <a
                        href={telefono.enlace}
                        className="inline-flex items-center gap-2 bg-[#0F70B7] text-white px-5 py-3 rounded-md font-semibold transition"
                    >
                        <Phone size={18} />
                        Llamar al: {telefono.numero}
                    </a>
                </div>

                {/* TARJETAS */}
                <div className="grid md:grid-cols-2 gap-6 px-8">
                    {tarjetas.map((tarjeta) => (
                        <div
                            key={tarjeta.id}
                            className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center text-center"
                        >
                            {tarjeta.icono === "Building2" && (
                                <Building2 className="h-10 w-10 mb-3 text-gray-800" />
                            )}
                            {tarjeta.icono === "Map" && (
                                <Map className="h-10 w-10 mb-3 text-gray-800" />
                            )}
                            <h3 className="font-bold text-lg mb-1">{tarjeta.titulo}</h3>
                            <p className="text-gray-600 mb-4">{tarjeta.direccion}</p>
                            <a
                                href={tarjeta.enlace}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border border-[#0F70B7] text-[#0F70B7] hover:bg-[#0F70B7] hover:text-white px-4 py-2 rounded-md transition flex items-center gap-2"
                            >
                                <MapPinHouse className="w-5 h-5" />
                                {tarjeta.textoBoton}
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* MAPA */}
            <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg pt-10">
                <iframe
                    src={mapa.src}
                    title={mapa.titulo}
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
