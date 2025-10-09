import { HandCoins, LandPlot, MapPin } from "lucide-react"
import { HERO_DATA } from "../../data/heroData"

const Hero = () => {
    return (
        <section
            id="hero"
            className="min-h-screen bg-[#F3F9F5] flex items-center px-6 pt-24 md:px-20"
        >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 w-full">

                {/* --- IZQUIERDA --- */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight font-title animate-slideInLeft">
                        Tu nuevo hogar a solo 10 minutos de Pimentel
                    </h1>

                    <p className="text-md md:text-lg text-gray-700 mt-6 animate-fadeInUp max-w-lg mx-auto md:mx-0">
                        Casas y departamentos modernos diseñados para brindarte comodidad,
                        seguridad y una ubicación privilegiada cerca del mar.
                    </p>

                    {/* --- ICONOS --- */}
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto md:mx-0">

                        {/* Dirección */}
                        <div
                            className="flex flex-col items-center justify-center bg-[#0F70B7] rounded-xl shadow-md p-4 text-center transition-transform duration-300 hover:scale-105 animate-slideInLeft"
                            style={{ animationDelay: "0.1s" }}
                        >
                            <MapPin className="text-gray-100 mb-2" size={28} />
                            <span className="font-button text-gray-100 text-sm md:text-base">
                                {HERO_DATA.direccion}
                            </span>
                        </div>

                        {/* Área mínima */}
                        <div
                            className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md p-4 text-center border-[#0F70B7] border transition-transform duration-300 hover:scale-105 animate-slideInLeft"
                            style={{ animationDelay: "0.2s" }}
                        >
                            <LandPlot className="text-[#0F70B7] mb-2" size={28} />
                            <span className="font-button text-[#0F70B7] text-sm md:text-base">
                                Desde {HERO_DATA.areaMinima}m<sup>2</sup>
                            </span>
                        </div>

                        {/*  Cuota */}
                        <div
                            className="flex flex-col items-center justify-center bg-[#0F70B7] rounded-xl shadow-md p-4 text-center transition-transform duration-300 hover:scale-105 animate-slideInLeft"
                            style={{ animationDelay: "0.3s" }}
                        >
                            <HandCoins className="text-gray-100 mb-2" size={28} />
                            <span className="font-button text-gray-100 text-sm md:text-base">
                                Cuota desde S/{HERO_DATA.cuotaDesde}
                            </span>
                        </div>
                    </div>

                    {/* --- BOTONES --- */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:mt-12 mt-8">
                        <a
                            href="#contacto"
                            className="bg-[#0F70B7] text-white rounded-lg shadow-md transition-transform duration-300 hover:scale-105 font-button px-6 py-4 animate-fadeInUp"
                            style={{ animationDelay: "0.4s" }}
                        >
                            Agenda tu visita
                        </a>
                        <a
                            href="#proyectos"
                            className="border bg-white text-[#0F70B7] border-[#0F70B7] rounded-lg shadow-md transition-transform duration-300 hover:scale-105 font-button px-6 py-4 animate-fadeInUp"
                            style={{ animationDelay: "0.5s" }}
                        >
                            Ver proyectos
                        </a>

                    </div>
                </div>

                {/* --- VIDEO DERECHA --- */}
                <div className="relative w-full md:w-1/2 animate-slideInRight group">
                    <div className="relative rounded-2xl overflow-hidden shadow-lg">
                        <video
                            src={HERO_DATA.videoUrl}
                            autoPlay
                            loop
                            muted
                            controls
                            playsInline
                            className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0F70B7]/40 via-transparent to-transparent pointer-events-none"></div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero
