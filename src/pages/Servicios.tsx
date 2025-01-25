import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Servicios = () => {
  const services = [
    {
      title: "Retail",
      description: "Modernizamos grandes superficies de consumo, incorporando soluciones tecnológicas que optimizan la experiencia del cliente.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80",
      features: [
        "Diseño de espacios comerciales",
        "Optimización de flujos de clientes",
        "Integración de tecnología IoT",
        "Análisis de datos en tiempo real"
      ]
    },
    {
      title: "Construcción especializada",
      description: "Aplicamos métodos constructivos de vanguardia, priorizando la calidad y la sostenibilidad.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80",
      features: [
        "Construcción sostenible",
        "Gestión integral de proyectos",
        "Innovación en materiales",
        "Eficiencia energética"
      ]
    },
    {
      title: "Desarrollo de software",
      description: "Creamos herramientas digitales personalizadas que permiten a las empresas tomar decisiones basadas en datos.",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&q=80",
      features: [
        "Desarrollo a medida",
        "Integración de sistemas",
        "Análisis de datos",
        "Mantenimiento continuo"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6">Nuestros Servicios</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transformamos espacios y experiencias a través de la innovación y la tecnología
            </p>
          </motion.div>

          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-12 items-center`}
              >
                <div className="flex-1">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                    <img
                      src={service.image}
                      alt={service.title}
                      className="relative rounded-lg w-full h-[400px] object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1 space-y-6">
                  <h2 className="text-4xl font-bold">{service.title}</h2>
                  <p className="text-lg text-muted-foreground">{service.description}</p>
                  <ul className="space-y-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Servicios;