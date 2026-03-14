import { motion } from "framer-motion";
import { Calendar, MessageCircle } from "lucide-react";

const Hero = () => {
    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth"});
        }
    };

    return (
      <section
        id="inicio"
        className="relative min-h-screen flex item-center pt-20 overflow-hidden"
      >
        {/* Textura de Fondo Sutil */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23987834' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/*  Contenido de Texto */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block mb-4"
              >
                <span className="px-4 py-2 bg-accent-50 text-accent-700 rounder-full text-sm font-medium">
                  Registro SIS N° 829354
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6"
              >
                Psicología, narrativa y{""}
                <span className="bg-gradient-to-r from-accent-600 to-accent-400 bg-clip-text text-transparent">
                  transformación
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ dela: 0.5 }}
                className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
              >
                Enfoque Sistémico-Funcional y Transgeneracional centrado en la
                singularidad de cada consultante
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <button
                  onClick={() => scrollToSection("#contacto")}
                  className="btn-primay flex items-center justify-center gap-2 group"
                >
                  <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Agendar Sesión Online/Presencial
                </button>
                <button
                  onClick={() => scrollToSection("#servicios")}
                  className="btn-seconday flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Conocer Servicios
                </button>
              </motion.div>
              {/* Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0"
              >
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-accent-600">+5</div>
                  <div className="text-sm text-gray-600">
                    Años de Experiencia
                  </div>
                  <div className="text-center lg:text-left border-l border-r border-gray-200 px-4">
                    <div className="text-3xl font-bold text-accent-600">
                      100%
                    </div>
                    <div className="text-sm text-gray-600">
                      Confidencialidad
                    </div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-3xl font-bold text-accent-600">7</div>
                    <div className="text-sm text-gray-600">
                      Áreas de atención
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* IMAGEN */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative">
                {/* Placeholder para la foto de Marina */}
                <div className="aspect-[3/4] bg-gradient-to-br from-accent-100 to-primary-100 rounded-2xl shadow-2xl overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-accent-200 flex items-center justify-center">
                        <span className="text-4xl">👩‍⚕️</span>
                      </div>
                      <p className="text-gray-600 font-medium">
                        Foto Profesional de Marina
                      </p>
                      <p className="text-sm text-gray-500 mt-2">
                        (Reemplazar con imagen real)
                      </p>
                    </div>
                  </div>
                </div>
                {/* Decoración */}
                <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-accent-200 rounded-full blur-3xl opacity-20 -z-10" />
                <div className="absolute -top-6 -left-6 w-72 h-72 bg-primary-200 rounded-full blur-3xl opacity-20 -z-10" />
              </div>
              {/* Tarjeta Flotante */}
              <motion.div
                nitial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute bottom-8 -left-4 bg-white p-4 rounded-xl shadow-lg max-w-xs hidden lg:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent-100 flex items-center justify-center">
                    <span className="text-2xl">✨</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">
                      Atención Personalizada
                    </div>
                    <div className="text-sm text-gray-600">
                      Basada en evidencia
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
        >
          <div className="w-6 h-10 border-2 border-accent-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>
    );
};

export default Hero;