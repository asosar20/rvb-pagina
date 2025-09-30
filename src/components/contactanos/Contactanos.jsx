import { Mail, MapPin, Phone } from "lucide-react";
import React, { useState } from "react";
import { supabase } from "../../lib/supabaseClient";

const Contactanos = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        correo: "",
        telefono: "",
        mensaje: "",
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // 🔎 Validaciones
    const validate = () => {
        const newErrors = {};

        // Nombre
        if (!formData.nombre.trim()) {
            newErrors.nombre = "El nombre es obligatorio";
        } else if (formData.nombre.trim().length < 3) {
            newErrors.nombre = "El nombre debe tener al menos 3 caracteres";
        }

        // Teléfono (formato Perú)
        const telefonoRegex = /^(?:\+51\s?)?9\d{8}$/;
        if (!formData.telefono.trim()) {
            newErrors.telefono = "El teléfono es obligatorio";
        } else if (!telefonoRegex.test(formData.telefono.trim())) {
            newErrors.telefono =
                "El teléfono debe ser válido (ej: +51 9XXXXXXXX o 9XXXXXXXX)";
        }

        // Correo (opcional pero válido)
        if (formData.correo.trim() && !/\S+@\S+\.\S+/.test(formData.correo)) {
            newErrors.correo = "El correo debe ser válido";
        }

        // Mensaje
        if (!formData.mensaje.trim()) {
            newErrors.mensaje = "El mensaje es obligatorio";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) return; // ⛔ no pasa validación

        setLoading(true);

        const { error } = await supabase.from("contactos").insert([formData]);

        if (error) {
            console.error("❌ Error:", error);
            alert("Hubo un problema al enviar el formulario");
        } else {
            alert("✅ Formulario enviado correctamente");
            setFormData({ nombre: "", correo: "", telefono: "", mensaje: "" });
        }
        setLoading(false);
    };

    return (
        <section
            id="contacto"
            className="px-8 pt-20 md:px-20 text-center bg-gradient-to-r from-indigo-50 via-white to-indigo-100"
        >
            <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-title">
                    Contáctanos
                </h2>
                <p className="text-gray-700 mb-6">
                    Completa el formulario y nuestro equipo se pondrá en contacto contigo
                    lo antes posible.
                </p>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
                {/* FORMULARIO */}
                <div className="md:w-1/2">
                    <form onSubmit={handleSubmit} className="flex flex-col text-left">
                        {/* Nombre */}
                        <div className="flex flex-col mb-4">
                            <label className="text-gray-700 mb-1 font-medium">
                                Nombre <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                placeholder="Tu nombre"
                                required
                                className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${errors.nombre
                                        ? "border-red-500 focus:ring-red-500"
                                        : "border-gray-400 focus:ring-indigo-500"
                                    }`}
                            />
                            {errors.nombre && (
                                <span className="text-red-500 text-sm">{errors.nombre}</span>
                            )}
                        </div>

                        {/* Correo */}
                        <div className="flex flex-col mb-4">
                            <label className="text-gray-700 mb-1 font-medium">
                                Correo (opcional)
                            </label>
                            <input
                                type="email"
                                name="correo"
                                value={formData.correo}
                                onChange={handleChange}
                                placeholder="ejemplo@correo.com"
                                className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${errors.correo
                                        ? "border-red-500 focus:ring-red-500"
                                        : "border-gray-400 focus:ring-indigo-500"
                                    }`}
                            />
                            {errors.correo && (
                                <span className="text-red-500 text-sm">{errors.correo}</span>
                            )}
                        </div>

                        {/* Teléfono */}
                        <div className="flex flex-col mb-4">
                            <label className="text-gray-700 mb-1 font-medium">
                                Teléfono <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="tel"
                                name="telefono"
                                value={formData.telefono}
                                onChange={handleChange}
                                placeholder="+51 9XXXXXXXX"
                                required
                                className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${errors.telefono
                                        ? "border-red-500 focus:ring-red-500"
                                        : "border-gray-400 focus:ring-indigo-500"
                                    }`}
                            />
                            {errors.telefono && (
                                <span className="text-red-500 text-sm">{errors.telefono}</span>
                            )}
                        </div>

                        {/* Mensaje */}
                        <div className="flex flex-col mb-4">
                            <label className="text-gray-700 mb-1 font-medium">
                                Mensaje <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                name="mensaje"
                                value={formData.mensaje}
                                onChange={handleChange}
                                placeholder="Escribe tu mensaje aquí..."
                                required
                                className={`w-full border rounded-lg px-4 py-2 h-32 focus:outline-none focus:ring-2 ${errors.mensaje
                                        ? "border-red-500 focus:ring-red-500"
                                        : "border-gray-400 focus:ring-indigo-500"
                                    }`}
                            />
                            {errors.mensaje && (
                                <span className="text-red-500 text-sm">{errors.mensaje}</span>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-indigo-600 text-white px-5 py-2 rounded-lg 
                hover:bg-indigo-700 transition-transform duration-300 
                hover:scale-105 font-button mb-6 disabled:opacity-60"
                        >
                            {loading ? "Enviando..." : "Enviar"}
                        </button>
                    </form>
                </div>

                {/* INFO */}
                <div className="flex flex-col justify-center md:text-left mb-6 md:w-1/2">
                    <div className="mb-6 w-full h-80">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d990.4961801727093!2d-79.83768193278188!3d-6.771713216128401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x904cef29db2532b9%3A0x6dc479fdb7b7e814!2s7%20de%20Enero%20%23740%2C%20Chiclayo%2014001!5e0!3m2!1ses!2spe!4v1758302053424!5m2!1ses!2spe"
                            className="w-full h-full rounded-lg shadow"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    <p className="text-gray-700 mb-5 flex flex-col ">
                        <span className="flex items-center gap-2 mb-2">
                            <MapPin className="w-5 h-5" /> Dirección: 7 de Enero #740, Chiclayo
                        </span>
                        <span className="flex items-center gap-2 mb-2">
                            <Phone className="w-5 h-5" /> Teléfono: +51 123 456 789
                        </span>
                        <span className="flex items-center gap-2 mb-2">
                            <Mail className="w-5 h-5" /> Correo: info@constructora.com
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contactanos;
