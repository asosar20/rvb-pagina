import {
    FileCheck,
    Handshake,
    Home,
    MapPin,
    PhoneCall,
    Shield,
    Users,
    UtilityPole,
    Wallet,
} from "lucide-react";

const beneficios = [
    {
        Icon: Home,
        title: "Bono Techo Propio",
        description:
            "Te ayudamos a tramitar el bono del Estado para que compres tu vivienda con apoyo económico.",
    },
    {
        Icon: FileCheck,
        title: "Trámite Rápido y Seguro",
        description:
            "Nos encargamos de todo el proceso para que tú no te preocupes por papeleos.",
    },
    {
        Icon: Users,
        title: "Ideal para Familias",
        description:
            "Proyectos pensados para brindar comodidad y bienestar a tu familia.",
    },
    {
        Icon: MapPin,
        title: "Ubicaciones con Crecimiento",
        description:
            "Proyectos en zonas con servicios básicos y potencial de valorización.",
    },
    {
        Icon: Wallet,
        title: "Cuotas Accesibles",
        description:
            "Planes de pago mensuales desde S/ 300 según tus posibilidades.",
    },
    {
        Icon: Shield,
        title: "Viviendas de Calidad",
        description:
            "Construcción segura y resistente, cumpliendo estándares del programa.",
    },
    {
        Icon: Handshake,
        title: "Acompañamiento Total",
        description:
            "Desde la postulación hasta la entrega de llaves, estamos contigo.",
    },
    {
        Icon: PhoneCall,
        title: "Atención Inmediata",
        description:
            "Te atendemos por WhatsApp, llamada o en nuestras oficinas sin cita previa.",
    },
    {
        Icon: UtilityPole,
        title: "Luz y Agua",
        description:
            "Servicios de luz y agua habilitados y disponibles desde el primer día.",
    },
];

const Beneficios = () => {
    return (
        <section
            id="beneficios"
            className="bg-[#F3F9F5] px-8 pt-28 pb-20 md:px-20 text-center"
        >
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 font-title">
                    Beneficios de elegirnos
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {beneficios.map((b, index) => (
                        <div
                            key={index}
                            className="bg-white w-full max-w-sm rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-8 text-center animate-fadeInUp"
                            style={{ animationDelay: `${index * 0.08}s` }}
                        >
                            <div className="w-14 h-14 flex items-center justify-center bg-[#0F70B7] text-white rounded-full mx-auto mb-4 shadow">
                                <b.Icon size={26} />
                            </div>
                            <h3 className="text-lg font-semibold text-[#0F70B7] mb-2 font-title">
                                {b.title}
                            </h3>
                            <p className="text-gray-800 text-sm md:text-base">{b.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Beneficios;
