import {
    BedDouble,
    CookingPot,
    Toilet,
    WashingMachine,
    BookOpen,
    DoorClosed,
    Home,
    House
} from 'lucide-react';

const Proyectos = () => {
    const iconMap = {
        dormitorio: <BedDouble className="w-4 h-4 text-indigo-500" />,
        dormitorios: <BedDouble className="w-4 h-4 text-indigo-500" />,
        baño: <Toilet className="w-4 h-4 text-indigo-500" />,
        baños: <Toilet className="w-4 h-4 text-indigo-500" />,
        cocina: <CookingPot className="w-4 h-4 text-indigo-500" />,
        lavandería: <WashingMachine className="w-4 h-4 text-indigo-500" />,
        estudio: <BookOpen className="w-4 h-4 text-indigo-500" />,
        escalera: <House className="w-4 h-4 text-indigo-500" />,
        hall: <DoorClosed className="w-4 h-4 text-indigo-500" />,
        ambiente: <Home className="w-4 h-4 text-indigo-500" />
    };

    const proyectos = [
        {
            titulo: "Casa Tipo A",
            precio: "Desde S/ 120,000",
            img: "/img/casa_a.webp",
            area: 37.5,
            pisos: 1,
            descripcion: [
                "1 ambiente para sala, comedor y área de cocina.",
                "02 dormitorios.",
                "01 baño completo.",
                "Zona de lavandería."
            ]
        },
        {
            titulo: "Casa Tipo B",
            precio: "Desde S/ 120,000",
            img: "/img/casa_b.webp",
            area: 50.6,
            pisos: 1,
            descripcion: [
                "1 ambiente para sala, comedor y área de cocina.",
                "03 dormitorios.",
                "02 baños completos.",
                "1 pasadizo.",
                "Zona de lavandería."
            ]
        },
        {
            titulo: "Casa Tipo C",
            precio: "Desde S/ 120,000",
            img: "/img/casa_c.webp",
            area: 81.8,
            pisos: 2,
            descripcion: [
                "01 ambiente para sala, comedor y área de cocina.",
                "01 estudio.",
                "02 baños de visita.",
                "Zona de lavandería.",
                "01 dormitorio principal con baño completo.",
                "02 dormitorios.",
                "01 baño completo."
            ]
        },
        {
            titulo: "Departamento",
            precio: "Desde S/ 120,000",
            img: "/img/departamento.webp",
            area: 81.8,
            descripcion: [
                "03 dormitorios.",
                "02 baños completos."
            ]
        },
    ]

    const getIconForText = (text) => {
        const lower = text.toLowerCase();
        for (const key in iconMap) {
            if (lower.includes(key)) {
                return iconMap[key];
            }
        }
        return <Home className="w-4 h-4 text-indigo-500" />;
    };

    return (
        <section
            id="proyectos"
            className="px-8 pt-20 md:px-20 text-center bg-gradient-to-r from-indigo-50 via-white to-indigo-100"
        >
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-title">
                    Nuestros Proyectos
                </h2>

                <div className="grid gap-8 lg:grid-cols-2">
                    {proyectos.map((p, i) => (
                        <div
                            key={i}
                            className="md:flex bg-white border border-gray-300 rounded-xl shadow hover:-translate-y-2 hover:shadow-xl transition overflow-hidden"
                        >
                            <div className="md:w-1/2 h-64 md:h-auto">
                                <img
                                    src={p.img}
                                    alt={p.titulo}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition duration-500 hover:scale-105"
                                />
                            </div>

                            <div className="md:w-1/2 text-left px-6 py-4 flex flex-col justify-between">
                                <div className='mb-6'>
                                    <h3 className="text-xl font-semibold text-indigo-600 font-title mb-2">
                                        {p.titulo}
                                    </h3>
                                    <p className="text-gray-600 font-number mb-2">{p.precio}</p>

                                    <div className="flex flex-wrap gap-3 mb-3">
                                        {p.area && (
                                            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm font-semibold rounded-full">
                                                Área: {p.area} m²
                                            </span>
                                        )}
                                        {p.pisos && (
                                            <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
                                                {p.pisos} piso{p.pisos > 1 && "s"}
                                            </span>
                                        )}
                                    </div>

                                    <ul className="space-y-2 text-[14px]">
                                        {p.descripcion.map((desc, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-gray-700">
                                                {getIconForText(desc)} {desc}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <a
                                    href="#contacto"
                                    className="px-5 py-2 block bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition text-center font-button"
                                >
                                    Solicitar información
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Proyectos;
