import {
    ChevronDown
} from 'lucide-react';
import { useEffect, useState } from 'react';

const Proyectos = () => {
    const [tipoCasa, setTipoCasa] = useState('2pisos');
    const [tab, setTab] = useState({ '2pisos': 'galeria', '1piso': 'galeria' });
    const [activeAccordion, setActiveAccordion] = useState({ '2pisos': null, '1piso': null });
    const [currentImage, setCurrentImage] = useState({ '2pisos': 0, '1piso': 0 });

    const images = {
        '2pisos': [
            { src: 'https://placehold.co/600x400?text=Fachada+2+pisos', title: 'Fachada principal' },
            { src: 'https://placehold.co/600x400?text=Sala+2+pisos', title: 'Sala comedor' },
            { src: 'https://placehold.co/600x400?text=Cocina+2+pisos', title: 'Cocina equipada' }
        ],
        '1piso': [
            { src: 'https://placehold.co/600x400?text=Fachada+1+piso', title: 'Fachada principal' },
            { src: 'https://placehold.co/600x400?text=Sala+1+piso', title: 'Sala comedor' },
            { src: 'https://placehold.co/600x400?text=Dormitorio+1+piso', title: 'Dormitorio principal' }
        ]
    };

    const caracteristicas = {
        '2pisos': [
            { titulo: 'General', descripcion: 'Casa moderna de 2 pisos con buena iluminación natural.' },
            { titulo: 'Sala, comedor y cocina', descripcion: 'Ambiente integrado con cocina tipo americana.' },
            { titulo: 'Baños', descripcion: 'Baño en primer piso y compartido en segundo.' },
            { titulo: 'Lavandería', descripcion: 'Lavandería techada con conexión para lavadora.' },
            { titulo: 'No incluye', descripcion: 'Closets y cocina equipada son opcionales.' }
        ],
        '1piso': [
            { titulo: 'General', descripcion: 'Casa funcional de 1 piso ideal para familias pequeñas.' },
            { titulo: 'Sala comedor', descripcion: 'Ambiente integrado para sala y comedor.' },
            { titulo: 'Cocina', descripcion: 'Cocina cerrada con conexión para gas.' },
            { titulo: 'Baño', descripcion: 'Baño completo bien distribuido.' },
            { titulo: 'Lavandería', descripcion: 'Lavandería posterior con área techada.' }
        ]
    };

    // Carrusel automático
    useEffect(() => {
        const intervalIds = {};
        Object.keys(images).forEach((tipo) => {
            if (tab[tipo] === 'galeria') {
                intervalIds[tipo] = setInterval(() => {
                    setCurrentImage(prev => ({
                        ...prev,
                        [tipo]: (prev[tipo] + 1) % images[tipo].length
                    }));
                }, 3000);
            }
        });
        return () => Object.values(intervalIds).forEach(clearInterval);
    }, [tab]);

    const toggleAccordion = (tipo, titulo) => {
        setActiveAccordion(prev => ({
            ...prev,
            [tipo]: prev[tipo] === titulo ? null : titulo
        }));
    };

    /**  COMPONENTE: Botones para elegir tipo de casa */
    const BotonesTipoCasa = () => (
        <div className="flex items-center justify-center gap-3 mb-6">
            {[
                { id: '2pisos', label: 'Casa de 2 pisos' },
                { id: '1piso', label: 'Casa de 1 piso' }
            ].map(btn => (
                <button
                    key={btn.id}
                    onClick={() => setTipoCasa(btn.id)}
                    className={`border px-6 py-4 rounded-xl font-button transition-colors duration-300 cursor-pointer
                        ${tipoCasa === btn.id
                            ? 'bg-[#0F70B7] text-white border-[#0F70B7]'
                            : 'border-[#0F70B7] text-[#0F70B7] hover:bg-[#0F70B7] hover:text-white'}`}
                >
                    {btn.label}
                </button>
            ))}
        </div>
    );

    /**  COMPONENTE: Columna con info (precio, cuota, etc.) */
    const InfoCasa = ({ titulo, area, terreno, precio, cuota }) => (
        <div className="flex-1 flex flex-col items-start gap-3">
            <span className="font-title font-bold text-2xl">{titulo}</span>
            <span className="border-b w-full pb-4 text-gray-700 text-start border-gray-300 font-title">
                Casa de: {area} m<sup>2</sup> | Terreno de: {terreno} m<sup>2</sup>
            </span>
            <div className="flex items-center justify-between w-full text-gray-800 border-b pb-4 border-gray-300">
                <span className="font-title">Precio al contado desde</span>
                <span className="font-semibold font-numbers text-2xl">S/ {precio}</span>
            </div>
            <div className="flex items-center justify-between w-full gap-4 text-start pb-2">
                <div className="flex flex-col">
                    <span className="pb-2 font-title">Cuota desde</span>
                    <span className="font-numbers text-xl">S/ {cuota} (30% cuota inicial)</span>
                    <span className="text-[#0F70B7] border-[#0F70B7] border font-bold text-center py-1 rounded-full w-36 mt-2 text-xs font-title">
                        SEPARA CON S/300
                    </span>
                </div>
                <a
                    href="#contacto"
                    className="bg-[#0F70B7] text-white px-8 py-3 shadow-2xl rounded-lg font-semibold font-button hover:bg-[#0d5e98] transition text-center"
                >
                    Me interesa
                </a>
            </div>
        </div>
    );

    /**  COMPONENTE: Galería o Características */
    const TabsGaleriaCaracteristicas = ({ tipo }) => (
        <div className="flex-shrink-0 w-full md:w-1/2 flex flex-col rounded-xl shadow-2xl">
            {/* Tabs */}
            <div className="flex px-20">
                {['galeria', 'caracteristicas'].map((t) => (
                    <div
                        key={t}
                        onClick={() => setTab(prev => ({ ...prev, [tipo]: t }))}
                        className={`cursor-pointer flex-1 text-center py-3 font-title text-base transition-all relative
                            ${tab[tipo] === t ? 'text-[#0F70B7] font-semibold' : 'text-gray-500'}`}
                    >
                        {t === 'galeria' ? 'Galería' : 'Características'}
                        {tab[tipo] === t && (
                            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#0F70B7]"></span>
                        )}
                    </div>
                ))}
            </div>

            {/* Contenido */}
            {tab[tipo] === 'galeria' && (
                <div className="relative flex flex-col items-center justify-center p-3 transition-opacity duration-500">
                    <div className="w-full h-56 overflow-hidden rounded-lg">
                        <img
                            src={images[tipo][currentImage[tipo]].src}
                            alt={images[tipo][currentImage[tipo]].title}
                            className="w-full h-full object-cover transition-opacity duration-500"
                        />
                    </div>
                    <span className="mt-2 text-sm text-gray-600 font-title">
                        {images[tipo][currentImage[tipo]].title}
                    </span>
                    <div className="flex gap-2 mt-2">
                        {images[tipo].map((_, index) => (
                            <div
                                key={index}
                                onClick={() => setCurrentImage(prev => ({ ...prev, [tipo]: index }))}
                                className={`w-3 h-3 rounded-full cursor-pointer transition-all
                                    ${index === currentImage[tipo] ? 'bg-[#0F70B7]' : 'bg-gray-300'}`}
                            />
                        ))}
                    </div>
                </div>
            )}

            {tab[tipo] === 'caracteristicas' && (
                <div className="py-3 transition-opacity duration-500">
                    <ul className="divide-y divide-gray-300">
                        {caracteristicas[tipo].map((item) => (
                            <li key={item.titulo} className="py-2">
                                <button
                                    onClick={() => toggleAccordion(tipo, item.titulo)}
                                    className="w-full flex justify-between items-center font-title text-gray-800"
                                >
                                    <span className="pl-5">{item.titulo}</span>
                                    <ChevronDown
                                        className={`h-5 w-5 mr-5 transition-transform duration-300
                                            ${activeAccordion[tipo] === item.titulo ? 'rotate-180 text-[#0F70B7]' : 'text-gray-400'}`}
                                    />
                                </button>
                                {activeAccordion[tipo] === item.titulo && (
                                    <div className="mt-2 text-sm text-gray-600 text-start px-5 transition-all duration-300">
                                        {item.descripcion}
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );

    return (
        <section id="proyectos" className="px-8 pt-28 md:px-20 text-center bg-[#F5F5F5] pb-28">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 font-title">
                    Nuestros Proyectos
                </h2>

                <BotonesTipoCasa />

                {/* BLOQUE 2 PISOS */}
                <div
                    className={`flex flex-col md:flex-row items-start justify-between gap-6 p-6 transition-all duration-500 ease-in-out transform
                    ${tipoCasa === '2pisos' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 hidden'}`}
                >
                    <InfoCasa
                        titulo="Casa de 2 pisos"
                        area={81.8}
                        terreno={80}
                        precio="232,200"
                        cuota="1,489"
                    />
                    <TabsGaleriaCaracteristicas tipo="2pisos" />
                </div>

                {/* BLOQUE 1 PISO */}
                <div
                    className={`flex flex-col md:flex-row items-start justify-between gap-6 p-6 transition-all duration-500 ease-in-out transform
                    ${tipoCasa === '1piso' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 hidden'}`}
                >
                    <InfoCasa
                        titulo="Casa de 1 piso"
                        area={65}
                        terreno={80}
                        precio="189,500"
                        cuota="1,200"
                    />
                    <TabsGaleriaCaracteristicas tipo="1piso" />
                </div>
            </div>
        </section>
    );
};

export default Proyectos;
