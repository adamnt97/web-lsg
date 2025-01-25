import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { WorldMap } from "@/components/ui/WorldMap";
import { motion } from "framer-motion";
import { ShoppingCart, Building2, Laptop, Lightbulb, Leaf, Rocket, Award } from "lucide-react";

const Nosotros = () => {
  const mapDots = [
    {
      start: { lat: 40.4168, lng: -3.7038 },
      end: { lat: 41.3851, lng: 2.1734 },
    },
    {
      start: { lat: 40.4168, lng: -3.7038 },
      end: { lat: 37.3891, lng: -5.9845 },
    },
    {
      start: { lat: 41.3851, lng: 2.1734 },
      end: { lat: 39.4699, lng: -0.3763 },
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 pb-32"> {/* Increased top padding */}
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-6xl font-bold tracking-tight">
              Reinventando el mercado
              <span className="text-accent block mt-2">a través de la innovación</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              LSG Group dba. LSG Soluciones (LSG IBERIAN PARTNERS, S.L.) nació en 2019 con la visión de reinventar el mercado a través de la innovación.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[500px] bg-gradient-to-b from-background to-background/50 rounded-3xl p-8"
          >
            <WorldMap dots={mapDots} lineColor="#bb0000" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Retail",
                icon: ShoppingCart,
                description: "Transformamos espacios comerciales mediante soluciones tecnológicas innovadoras. Optimizamos la experiencia del cliente con sistemas inteligentes de gestión de flujos, análisis de datos en tiempo real y diseño centrado en el usuario. Nuestras soluciones mejoran la eficiencia operativa y aumentan la satisfacción del cliente."
              },
              {
                title: "Construcción especializada",
                icon: Building2,
                description: "Implementamos métodos constructivos de vanguardia que priorizan la sostenibilidad y la eficiencia. Utilizamos materiales innovadores y técnicas de construcción modernas para crear espacios que no solo son funcionales, sino también respetuosos con el medio ambiente y energéticamente eficientes."
              },
              {
                title: "Desarrollo de software",
                icon: Laptop,
                description: "Desarrollamos soluciones digitales personalizadas que permiten a las empresas tomar decisiones basadas en datos. Nuestras aplicaciones integran tecnologías emergentes como IA y machine learning para optimizar procesos y mejorar la experiencia del usuario final."
              }
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-surface border border-border hover:shadow-lg transition-all duration-300"
                >
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold">Misión</h2>
              <p className="text-muted-foreground">
                Transformar el mercado con soluciones vanguardistas que integren tecnología, sostenibilidad y responsabilidad social en cada etapa del proceso.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold">Visión</h2>
              <p className="text-muted-foreground">
                Ser un referente global en la creación de proyectos revolucionarios, impulsando la convergencia entre retail, construcción y software.
              </p>
            </motion.div>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Nuestros Valores</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  title: "Innovación",
                  icon: Lightbulb,
                  description: "Impulsamos la experimentación continua y el desarrollo de soluciones disruptivas que transforman la industria. Nuestro enfoque innovador nos permite anticiparnos a las necesidades del mercado."
                },
                {
                  title: "Sostenibilidad",
                  icon: Leaf,
                  description: "Comprometidos con el futuro, implementamos prácticas sostenibles en todos nuestros proyectos. Priorizamos materiales ecológicos y procesos que minimizan el impacto ambiental."
                },
                {
                  title: "Rapidez",
                  icon: Rocket,
                  description: "Nuestra metodología ágil nos permite responder con velocidad a los cambios del mercado. Optimizamos procesos para entregar soluciones eficientes en tiempo récord."
                },
                {
                  title: "Calidad",
                  icon: Award,
                  description: "La excelencia es nuestro estándar. Cada proyecto se desarrolla con atención meticulosa al detalle, garantizando resultados superiores que superan las expectativas."
                }
              ].map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-6 rounded-xl bg-surface border border-border shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Icon className="w-6 h-6 text-primary mb-3" />
                    <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Nosotros;