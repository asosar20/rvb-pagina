import { FileCheck, Handshake, Home, MapPin, PhoneCall, Shield, Users, UtilityPole, Wallet } from "lucide-react"
import BeneficioCard from "./BeneficioCard"

const beneficios = [
    {
        Icon: Home,
        title: "Acceso al Bono Techo Propio",
        description: "Te ayudamos a tramitar el bono del Estado para que compres tu vivienda con apoyo económico."
    },
    {
        Icon: FileCheck,
        title: "Trámite Rápido y Seguro",
        description: "Nos encargamos de todo el proceso para que tú no te preocupes por papeleos."
    },
    {
        Icon: Users,
        title: "Ideal para Familias",
        description: "Proyectos pensados para brindar comodidad y bienestar a tu familia."
    },
    {
        Icon: MapPin,
        title: "Ubicaciones con Crecimiento",
        description: "Proyectos en zonas con servicios básicos y potencial de valorización."
    },
    {
        Icon: Wallet,
        title: "Cuotas Accesibles",
        description: "Planes de pago mensuales desde S/ 300 según tus posibilidades."
    },
    {
        Icon: Shield,
        title: "Viviendas de Calidad",
        description: "Construcción segura y resistente, cumpliendo estándares del programa."
    },
    {
        Icon: Handshake,
        title: "Acompañamiento Total",
        description: "Desde la postulación hasta la entrega de llaves, estamos contigo."
    },
    {
        Icon: PhoneCall,
        title: "Atención Inmediata",
        description: "Te atendemos por WhatsApp, llamada o en nuestras oficinas sin cita previa."
    },
    {
        Icon: UtilityPole,
        title: "Luz y Agua",
        description: "Servicios de luz y agua habilitados y disponibles desde el primer día."
    }
]

const Beneficios = () => {
    return (
        <section
            id="beneficios"
            className="
            bg-white bg-gradient-to-r from-indigo-50 via-white to-indigo-100
            px-8
            pt-20
            text-center
            md:px-20
            "
        >
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="
                text-4xl 
                md:text-5xl 
                font-bold 
                text-gray-900 
                mb-6 
                font-title
                ">
                    Beneficios de elegirnos
                </h2>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {beneficios.map((b, index) => (
                        <BeneficioCard
                            key={index}
                            Icon={b.Icon}
                            title={b.title}
                            description={b.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Beneficios
