import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { proyectosData } from "../../data/proyectoData";

const Proyectos = () => {
    const [tipoCasa, setTipoCasa] = useState("2pisos");
    const [subtipo1Piso, setSubtipo1Piso] = useState("tipoA");
    const [tab, setTab] = useState({ "2pisos": "galeria", "1piso": "galeria" });
    const [activeAccordion, setActiveAccordion] = useState({});
    const [currentImage, setCurrentImage] = useState({});

    // --- Carrusel automático ---
    useEffect(() => {
        const intervalIds = {};
        proyectosData.tipos.forEach(tipo => {
            if (tipo.id === "1piso") {
                tipo.subtipo.forEach(sub => {
                    if (tab["1piso"] === "galeria") {
                        intervalIds[`1piso-${sub.id}`] = setInterval(() => {
                            setCurrentImage(prev => ({
                                ...prev,
                                [`1piso-${sub.id}`]: ((prev[`1piso-${sub.id}`] || 0) + 1) % sub.imagenes.length,
                            }));
                        }, 3000);
                    }
                });
            } else {
                if (tab[tipo.id] === "galeria") {
                    intervalIds[tipo.id] = setInterval(() => {
                        setCurrentImage(prev => ({
                            ...prev,
                            [tipo.id]: ((prev[tipo.id] || 0) + 1) % tipo.imagenes.length,
                        }));
                    }, 3000);
                }
            }
        });

        return () => Object.values(intervalIds).forEach(clearInterval);
    }, [tab]);

    const toggleAccordion = (key, titulo) => {
        setActiveAccordion(prev => ({
            ...prev,
            [key]: prev[key] === titulo ? null : titulo,
        }));
    };

    // ✅ Subcomponente Tabs galería/características reutilizable
    const TabsGaleriaCaracteristicas = ({ data, tipoKey }) => {
        const currentIdx = currentImage[tipoKey] || 0;
        return (
            <div className="flex-shrink-0 w-full md:w-1/2 flex flex-col rounded-xl shadow-2xl">
                {/* Tabs */}
                <div className="flex px-20">
                    {["galeria", "caracteristicas"].map(t => (
                        <div
                            key={t}
                            onClick={() => setTab(prev => ({ ...prev, [tipoCasa]: t }))}
                            className={`cursor-pointer flex-1 text-center py-3 font-title text-base relative
                ${tab[tipoCasa] === t ? "text-[#0F70B7] font-semibold" : "text-gray-500"}`}
                        >
                            {t === "galeria" ? "Galería" : "Características"}
                            {tab[tipoCasa] === t && (
                                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#0F70B7]"></span>
                            )}
                        </div>
                    ))}
                </div>

                {/* Contenido */}
                {tab[tipoCasa] === "galeria" && (
                    <div className="relative flex flex-col items-center justify-center p-3">
                        <div className="w-full h-56 overflow-hidden rounded-lg">
                            <img
                                src={data.imagenes[currentIdx].src}
                                alt={data.imagenes[currentIdx].title}
                                className="w-full h-full object-cover transition-opacity duration-500"
                            />
                        </div>
                        <span className="mt-2 text-sm text-gray-600 font-title">{data.imagenes[currentIdx].title}</span>
                        <div className="flex gap-2 mt-2">
                            {data.imagenes.map((_, index) => (
                                <div
                                    key={index}
                                    onClick={() => setCurrentImage(prev => ({ ...prev, [tipoKey]: index }))}
                                    className={`w-3 h-3 rounded-full cursor-pointer transition-all
                    ${index === currentIdx ? "bg-[#0F70B7]" : "bg-gray-300"}`}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {tab[tipoCasa] === "caracteristicas" && (
                    <div className="py-3">
                        <ul className="divide-y divide-gray-300">
                            {data.caracteristicas.map(item => (
                                <li key={item.titulo} className="py-2">
                                    <button
                                        onClick={() => toggleAccordion(tipoKey, item.titulo)}
                                        className="w-full flex justify-between items-center font-title text-gray-800"
                                    >
                                        <span className="pl-5">{item.titulo}</span>
                                        <ChevronDown
                                            className={`h-5 w-5 mr-5 transition-transform
                        ${activeAccordion[tipoKey] === item.titulo ? "rotate-180 text-[#0F70B7]" : "text-gray-400"}`}
                                        />
                                    </button>
                                    {activeAccordion[tipoKey] === item.titulo && (
                                        <div className="mt-2 text-sm text-gray-600 text-start px-5">{item.descripcion}</div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        );
    };

    const tipo2Pisos = proyectosData.tipos.find(t => t.id === "2pisos");
    const tipo1Piso = proyectosData.tipos.find(t => t.id === "1piso");
    const subtipoSeleccionado = tipo1Piso.subtipo.find(s => s.id === subtipo1Piso);

    return (
        <section id="proyectos" className="px-8 pt-20 md:pb-32 md:px-20 text-center bg-white">
            <div className="max-w-7xl mx-auto pb-8 md:pb-0">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 font-title">Nuestros Proyectos</h2>

                {/* --- Botones tipo de casa --- */}
                <div className="flex justify-center gap-3 mb-6">
                    {[
                        { id: "2pisos", label: "Casa de 2 pisos" },
                        { id: "1piso", label: "Casa de 1 piso" },
                    ].map(btn => (
                        <button
                            key={btn.id}
                            onClick={() => setTipoCasa(btn.id)}
                            className={`border px-6 py-4 rounded-xl font-button transition-colors duration-300
                ${tipoCasa === btn.id
                                    ? "bg-[#0F70B7] text-white border-[#0F70B7]"
                                    : "border-[#0F70B7] text-[#0F70B7] hover:bg-[#0F70B7] hover:text-white"}`}
                        >
                            {btn.label}
                        </button>
                    ))}
                </div>

                {/* --- Vista Casa de 2 pisos --- */}
                {tipoCasa === "2pisos" && (
                    <div className="flex flex-col md:flex-row items-start justify-between gap-6 p-6">
                        <div className="flex-1 flex flex-col items-start gap-3 text-start">
                            <span className="font-title font-bold text-2xl">{tipo2Pisos.titulo}</span>
                            <span className="border-b w-full pb-4 text-gray-700 border-gray-300 font-title">
                                Casa de: {tipo2Pisos.areaConstruida} | Terreno de: {tipo2Pisos.areaTerreno}
                            </span>
                            <div className="flex justify-between w-full text-gray-800 border-b pb-4 border-gray-300">
                                <span className="font-title">Precio al contado desde</span>
                                <span className="font-semibold font-numbers md:text-2xl text-xl">{tipo2Pisos.precioContado}</span>
                            </div>
                            <div className="flex justify-between w-full gap-4 pb-2">
                                <div className="flex flex-col">
                                    <span className="pb-2 font-title">Cuota desde</span>
                                    <span className="font-numbers text-lg">{tipo2Pisos.cuotaDesde}</span>
                                    <span className="text-[#0F70B7] border-[#0F70B7] border font-bold text-center py-1 rounded-full w-36 mt-2 text-xs font-title">
                                        SEPARA CON {tipo2Pisos.separacion}
                                    </span>
                                </div>
                                <div className="flex items-center justify-center">
                                    <a
                                        href="#contacto"
                                        className="bg-[#0F70B7] text-white px-8 py-3 shadow-2xl rounded-lg font-semibold font-button hover:bg-[#0d5e98] transition text-center"
                                    >
                                        Me interesa
                                    </a>
                                </div>
                            </div>
                        </div>
                        <TabsGaleriaCaracteristicas data={tipo2Pisos} tipoKey="2pisos" />
                    </div>
                )}

                {/* --- Vista Casa de 1 piso --- */}
                {tipoCasa === "1piso" && (
                    <div className="flex flex-col gap-6 p-6">
                        {/* Tabs A/B */}
                        <div className="flex w-full justify-center mb-4">
                            {tipo1Piso.subtipo.map(st => (
                                <div
                                    key={st.id}
                                    onClick={() => setSubtipo1Piso(st.id)}
                                    className={`cursor-pointer flex-1 max-w-[150px] text-center py-2 font-title text-base transition-all relative
                    ${subtipo1Piso === st.id ? "text-[#0F70B7] font-semibold" : "text-gray-500"}`}
                                >
                                    {st.id === "tipoA" ? "Tipo A" : "Tipo B"}
                                    {subtipo1Piso === st.id && (
                                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#0F70B7]"></span>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col md:flex-row items-start justify-between gap-6">
                            <div className="flex-1 flex flex-col items-start gap-3 text-start">
                                <span className="font-title font-bold text-2xl">{subtipoSeleccionado.titulo}</span>
                                <span className="border-b w-full pb-4 text-gray-700 border-gray-300 font-title">
                                    Casa de: {subtipoSeleccionado.areaConstruida} | Terreno de: {subtipoSeleccionado.areaTerreno}
                                </span>
                                <div className="flex justify-between w-full text-gray-800 border-b pb-4 border-gray-300">
                                    <span className="font-title">Precio al contado desde</span>
                                    <span className="font-semibold font-numbers  md:text-2xl text-xl">{subtipoSeleccionado.precioContado}</span>
                                </div>
                                <div className="flex justify-between w-full gap-4 pb-2">
                                    <div className="flex flex-col">
                                        <span className="pb-2 font-title">Cuota desde</span>
                                        <span className="font-numbers text-lg">{subtipoSeleccionado.cuotaDesde}</span>
                                        <span className="text-[#0F70B7] border-[#0F70B7] border font-bold text-center py-1 rounded-full w-36 mt-2 text-xs font-title">
                                            SEPARA CON {subtipoSeleccionado.separacion}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <a
                                            href="#contacto"
                                            className="bg-[#0F70B7] text-white px-8 py-3 shadow-2xl rounded-lg font-semibold font-button hover:bg-[#0d5e98] transition text-center"
                                        >
                                            Me interesa
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <TabsGaleriaCaracteristicas data={subtipoSeleccionado} tipoKey={`1piso-${subtipoSeleccionado.id}`} />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Proyectos;
