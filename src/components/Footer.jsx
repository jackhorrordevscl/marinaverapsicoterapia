import { motion } from "framer-motion";
import { Instagram, Music2, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/psico_marinade_colores",
      color: "hover:text-pink-500",
    },
    {
      name: "TikTok",
      icon: Music2,
      url: "https://www.tiktok.com/@marinna_decolores",
      color: "hover:text-black",
    },
    {
      name: "Youtube",
      icon: Youtube,
      url: "https://www.youtube.com/@Psico_marinadecolores",
      color: "hover:text-black",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/people/Marinna-de-Colores/61582718874848/?rdid=QcPIbYoyISqzSYDX&share_url=https%253A%252F%252Fwww.facebook.com%252Fshare%252F17zMTNjsaz%252F",
      color: "hover:text-black",
    },
  ];

  const quickLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Servicios", href: "#servicios" },
    { name: "Especialidades", href: "#especialidades" },
    { name: "Sobre Mí", href: "#sobre-mi" },
    { name: "Contacto", href: "#contacto" },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 border-t-4 border-accent-500">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-serif font-bold bg-gradient-to-r from-accent-400 to-accent-300 bg-clip-text text-transparent mb-4">
                Marina Vera Guzmán
              </h3>
              <p className="text-gray-400 mb-4 max-w-md">
                Psicóloga Clínica especializada en enfoque sistémico-funcional y
                transgeneracional. Acompañamiento profesional basado en
                evidencia para tu bienestar integral.
              </p>
              <div className="flex items-center gap-2 text-sm text-accent-400">
                <span className="font-semibold">Registro SIS N° 829354</span>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-gray-400 hover:text-accent-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Teleconsulta y Atención Presencial
                  <br />
                  <span className="text-xs">(Consultar disponibilidad)</span>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" />
                <a
                  href="https://wa.me/56937062554"
                  className="text-gray-400 hover:text-accent-400 transition-colors text-sm"
                >
                  +56 9 3706 2554
                  <br />
                  <span className="text-xs">(WhatsApp disponible)</span>
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:lic.ps.marinaverag@gmail.com"
                  className="text-gray-400 hover:text-accent-400 transition-colors text-sm"
                >
                  lic.ps.marinaverag@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border-t border-gray-800 pt-8 mb-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">Sígueme en redes sociales</p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:scale-110`}
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Legal Information */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="bg-gray-800 rounded-xl p-6 mb-6">
            <h5 className="text-white font-semibold mb-3 text-sm">
              Información Legal
            </h5>
            <div className="text-gray-400 text-xs leading-relaxed space-y-2">
              <p>
                La atención clínica se rige bajo la{" "}
                <strong className="text-gray-300">Ley 20.584</strong> de
                Derechos y Deberes del Paciente y la{" "}
                <strong className="text-gray-300">Ley 19.628</strong> de
                Protección de la Vida Privada.
              </p>
              <p>
                Las intervenciones en contextos judiciales se realizan bajo el
                rol de profesional tratante.
              </p>
              <p className="text-accent-400 font-medium">
                Registro Superintendencia de Salud: SIS N° 829354
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>
              © {currentYear} Marina Vera Guzmán. Todos los derechos reservados.
            </p>
            <p className="text-xs">
              Diseño y desarrollo:{" "}
              <span className="text-accent-400">Tu nombre aquí</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
