import { useEffect } from "react";
import { beneficios } from "../../data/beneficioData";

const Beneficios = () => {
    useEffect(() => {
        const elements = document.querySelectorAll(".animate-fadeInUp");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="beneficios"
            className="bg-[#F3F9F5] px-8 pt-20 md:pt-24 pb-24 md:px-20 text-center"
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
                            style={{ animationDelay: `${index * 0.1}s` }}
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
