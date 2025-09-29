const Hero = () => {
    return (
        <section
            id="hero"
            className="
            min-h-screen 
            bg-gradient-to-r from-indigo-50 via-white to-indigo-100 
            flex 
            items-center 
            text-center
            px-8
            pt-24
            md:px-20
            "
        >
            <div
                className="
                max-w-7xl 
                mx-auto 
                flex 
                flex-col 
                md:flex-row 
                items-center 
                gap-8
                ">

                <div
                    className="
                    w-full 
                    md:w-1/2
                    ">
                    <h1
                        className="
                        text-4xl 
                        md:text-5xl 
                        font-bold 
                        text-gray-900 
                        leading-tight 
                        font-title
                        ">
                        Tu nuevo hogar a solo 10 minutos de Pimentel
                    </h1>
                    <p
                        className="
                        text-md 
                        md:text-lg 
                        text-gray-700 
                        font-body
                        mt-6
                        ">
                        Casas y departamentos modernos diseñados para brindarte comodidad,
                        seguridad y una ubicación privilegiada cerca del mar.
                    </p>

                    <div
                        className="
                        flex 
                        items-center 
                        justify-evenly 
                        mt-6
                        ">
                        <a
                            href="#contacto"
                            className="
                            bg-indigo-600 
                            text-white 
                            rounded-lg 
                            shadow-md 
                            transition-transform 
                            duration-300 
                            hover:scale-105 
                            hover:bg-indigo-700 
                            font-button
                            px-5
                            py-2
                            ">
                            Agenda tu visita
                        </a>
                        <a
                            href="#proyectos"
                            className="
                            border 
                            bg-gray-200 
                            border-gray-300 
                            text-indigo-600 
                            rounded-lg 
                            shadow-md
                            transition-transform 
                            duration-300 
                            hover:scale-105 
                            hover:bg-gray-300 
                            font-button
                            px-5
                            py-2
                            ">
                            Ver proyectos
                        </a>
                    </div>

                    <p
                        className="
                        text-sm 
                        text-gray-500
                        font-body 
                        mt-6
                        italic
                        ">
                        Más de
                        <span className="
                        font-bold 
                        text-indigo-600
                        font-number
                        "> 200 familias </span>
                        ya confían en nosotros para construir su futuro.
                    </p>
                </div>

                <div className="
                w-full 
                md:w-1/2
                mt-6
                ">
                    <video
                        src="/videos/video_presentacion.mp4"
                        autoPlay
                        loop
                        muted
                        controls
                        playsInline
                        className="
                        w-full 
                        h-[400px] 
                        rounded-2xl 
                        shadow-lg 
                        object-cover 
                        transition-transform 
                        duration-300 
                        hover:scale-105
                        "/>
                </div>
            </div>
        </section>

    )
}

export default Hero

