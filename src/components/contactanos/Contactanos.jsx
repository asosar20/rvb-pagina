import { Mail, MapPin, Phone, Building2 } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { supabase } from "../../lib/supabaseClient";

const Contactanos = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        telefono: "",
        dni: "",
        correo: "",
    });

    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.nombre.trim()) {
            newErrors.nombre = "El nombre es obligatorio";
        } else if (formData.nombre.trim().length < 3) {
            newErrors.nombre = "El nombre debe tener al menos 3 caracteres";
        }

        const telefonoRegex = /^(?:\+51\s?)?9\d{8}$/;
        if (!formData.telefono.trim()) {
            newErrors.telefono = "El teléfono es obligatorio";
        } else if (!telefonoRegex.test(formData.telefono.trim())) {
            newErrors.telefono = "Debe ser válido (ej: +51 9XXXXXXXX o 9XXXXXXXX)";
        }

        const dniRegex = /^\d{8}$/;
        if (!formData.dni.trim()) {
            newErrors.dni = "El DNI es obligatorio";
        } else if (!dniRegex.test(formData.dni.trim())) {
            newErrors.dni = "Debe tener 8 dígitos";
        }

        if (formData.correo.trim() && !/\S+@\S+\.\S+/.test(formData.correo)) {
            newErrors.correo = "El correo debe ser válido";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        setLoading(true);
        const { error } = await supabase.from("contactos").insert([formData]);
        if (error) {
            setMessage("Hubo un problema al enviar el formulario");
        } else {
            setMessage("Formulario enviado correctamente");
            setFormData({ nombre: "", telefono: "", dni: "", correo: "" });
        }

        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 5000);
        setLoading(false);
    };

    return (
        <section
            id="contacto"
            ref={sectionRef}
            className="px-8 md:pt-32 pt-20 md:pb-32 pb-20 md:px-20 text-center bg-white"
        >
            <div className={`transition-all duration-700 ${isVisible ? "animate-fadeInUp show" : ""}`}>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 font-title">
                    ¡Quiero conocer más de Arena Blanca – Chiclayo!
                </h2>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-8">
                <div
                    className={`md:w-1/2 bg-[#F3F9F5] p-6 rounded-2xl shadow-xl transition-all duration-700 ${isVisible ? "animate-slideInLeft" : ""
                        }`}
                >
                    <p className="text-gray-700 mb-6 font-button">
                        Déjanos tus datos y un asesor se contactará contigo lo antes posible.
                    </p>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
                        <div className="relative">
                            <input
                                type="text"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                placeholder=" "
                                required
                                className={`peer w-full border rounded-lg px-4 pt-5 pb-3 focus:outline-none focus:ring-2 transition-all bg-white
                                ${errors.nombre ? "border-red-500 focus:ring-red-500" : "border-gray-400 focus:ring-indigo-500"}`}
                            />
                            <label
                                htmlFor="nombre"
                                className={`absolute left-4 font-button transition-all duration-200 ease-in-out pointer-events-none text-xs
                                ${formData.nombre
                                        ? "top-2 text-xs text-gray-600"
                                        : "top-6 text-base text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-indigo-600"}`}
                            >
                                NOMBRES Y APELLIDOS <span className="text-red-500">*</span>
                            </label>
                            {errors.nombre && <span className="text-red-500 text-xs mt-1 block">{errors.nombre}</span>}
                        </div>

                        <div className="flex flex-row gap-4">
                            <div className="relative flex-1">
                                <input
                                    type="tel"
                                    name="telefono"
                                    value={formData.telefono}
                                    onChange={handleChange}
                                    placeholder=" "
                                    required
                                    className={`peer w-full border rounded-lg px-4 pt-5 pb-3 focus:outline-none focus:ring-2 transition-all bg-white
                                    ${errors.telefono ? "border-red-500 focus:ring-red-500" : "border-gray-400 focus:ring-indigo-500"}`}
                                />
                                <label
                                    htmlFor="telefono"
                                    className={`absolute left-4 font-button transition-all duration-200 ease-in-out pointer-events-none text-xs
                                    ${formData.telefono
                                            ? "top-2 text-xs text-gray-600"
                                            : "top-6 text-base text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-indigo-600"}`}
                                >
                                    TELÉFONO <span className="text-red-500">*</span>
                                </label>
                                {errors.telefono && <span className="text-red-500 text-xs mt-1 block">{errors.telefono}</span>}
                            </div>

                            <div className="relative flex-1">
                                <input
                                    type="text"
                                    name="dni"
                                    value={formData.dni}
                                    onChange={handleChange}
                                    placeholder=" "
                                    required
                                    className={`peer w-full border rounded-lg px-4 pt-5 pb-3 focus:outline-none focus:ring-2 transition-all bg-white
                                    ${errors.dni ? "border-red-500 focus:ring-red-500" : "border-gray-400 focus:ring-indigo-500"}`}
                                />
                                <label
                                    htmlFor="dni"
                                    className={`absolute left-4 font-button transition-all duration-200 ease-in-out pointer-events-none text-xs
                                    ${formData.dni
                                            ? "top-2 text-xs text-gray-600"
                                            : "top-6 text-base text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-indigo-600"}`}
                                >
                                    DNI <span className="text-red-500">*</span>
                                </label>
                                {errors.dni && <span className="text-red-500 text-xs mt-1 block">{errors.dni}</span>}
                            </div>
                        </div>

                        <div className="relative">
                            <input
                                type="email"
                                name="correo"
                                value={formData.correo}
                                onChange={handleChange}
                                placeholder=" "
                                className={`peer w-full border rounded-lg px-4 pt-5 pb-3 focus:outline-none focus:ring-2 transition-all bg-white
                                ${errors.correo ? "border-red-500 focus:ring-red-500" : "border-gray-400 focus:ring-indigo-500"}`}
                            />
                            <label
                                htmlFor="correo"
                                className={`absolute left-4 font-button transition-all duration-200 ease-in-out pointer-events-none text-xs
                                ${formData.correo
                                        ? "top-2 text-xs text-gray-600"
                                        : "top-6 text-base text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-indigo-600"}`}
                            >
                                EMAIL (opcional)
                            </label>
                            {errors.correo && <span className="text-red-500 text-xs mt-1 block">{errors.correo}</span>}
                        </div>

                        <div className="flex justify-center">
                            <button
                                type="submit"
                                disabled={loading}
                                className="inline-flex bg-[#0F70B7] text-white px-20 py-4 rounded-lg transition-transform duration-300 hover:scale-105 font-button disabled:opacity-60"
                            >
                                {loading ? "Enviando..." : "Solicitar información"}
                            </button>
                        </div>

                        <div
                            className={`transition-opacity duration-500 mt-4 text-sm font-medium p-2 rounded text-center
                            ${showMessage ? "opacity-100" : "opacity-0 pointer-events-none h-0 overflow-hidden"}
                            ${message.includes("correctamente") ? "text-green-700 bg-green-100" : "text-red-700 bg-red-100"}`}
                        >
                            {message}
                        </div>
                    </form>
                </div>

                <div
                    className={`flex flex-col items-center justify-center md:items-start px-8 gap-6 md:w-1/2 font-title transition-all duration-700 ${isVisible ? "animate-slideInRight" : ""
                        }`}
                >
                    <div className="flex flex-col gap-2">
                        <h3 className="flex items-center text-md md:text-2xl font-bold text-gray-900 font-title gap-2 pb-6">
                            <Building2 className="w-6 h-6 text-[#0F70B7]" />
                            Nuestro Proyecto Estrella: Arena Blanca
                        </h3>

                        <p className="text-gray-700 text-sm md:text-base leading-relaxed text-start">
                            Arena Blanca es nuestro proyecto más ambicioso y con mayor proyección. Ubicado a solo minutos de Pimentel, combina{" "}
                            <span className="font-semibold">naturaleza, recreación y plusvalía</span> en un solo lugar.
                        </p>

                        <p className="text-gray-700 text-sm md:text-base leading-relaxed text-start">
                            Disfruta de <span className="font-semibold">parques, áreas deportivas y espacios para toda la familia</span>, diseñados para brindar confort y calidad de vida. Su planificación moderna lo convierte en una <span className="font-semibold">excelente inversión</span>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contactanos;
