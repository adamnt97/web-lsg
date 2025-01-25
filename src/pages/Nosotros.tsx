import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { WorldMap } from "@/components/ui/WorldMap";
import { motion } from "framer-motion";

const Nosotros = () => {
  const mapDots = [
    {
      start: { lat: 40.4168, lng: -3.7038 }, // Madrid
      end: { lat: 41.3851, lng: 2.1734 }, // Barcelona
    },
    {
      start: { lat: 40.4168, lng: -3.7038 }, // Madrid
      end: { lat: 37.3891, lng: -5.9845 }, // Sevilla
    },
    {
      start: { lat: 41.3851, lng: 2.1734 }, // Barcelona
      end: { lat: 39.4699, lng: -0.3763 }, // Valencia
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-32"> {/* Added padding bottom to prevent footer overlap */}
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
            <WorldMap dots={mapDots} lineColor="#800020" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Retail",
                description: "Modernizamos grandes superficies de consumo, incorporando soluciones tecnológicas que optimizan la experiencia del cliente."
              },
              {
                title: "Construcción especializada",
                description: "Aplicamos métodos constructivos de vanguardia, priorizando la calidad y la sostenibilidad."
              },
              {
                title: "Desarrollo de software",
                description: "Creamos herramientas digitales personalizadas que permiten a las empresas tomar decisiones basadas en datos."
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-surface border border-border"
              >
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
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

          <div className="space-y-8 mb-24"> {/* Added margin bottom to prevent footer overlap */}
            <h2 className="text-3xl font-bold text-center">Nuestros Valores</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  title: "Innovación",
                  description: "Fomentamos la experimentación y la búsqueda incesante de ideas que rompan moldes."
                },
                {
                  title: "Sostenibilidad",
                  description: "Diseñamos y ejecutamos proyectos con una visión ecológica y de largo plazo."
                },
                {
                  title: "Rapidez",
                  description: "Abordamos cada desafío con dinamismo y flexibilidad."
                },
                {
                  title: "Calidad",
                  description: "Nos enfocamos en la excelencia de principio a fin."
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-surface border border-border shadow-lg"
                >
                  <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Nosotros;