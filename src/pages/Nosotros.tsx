import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { WorldMap } from "@/components/ui/WorldMap";
import { motion } from "framer-motion";
import { BlurFade } from "@/components/ui/blur-fade";

const Nosotros = () => {
  useEffect(() => {
    document.title = "Nosotros | LSG";
  }, []);

  const connections = [
    {
      start: { lat: 40.4168, lng: -3.7038 }, // Madrid
      end: { lat: 19.4326, lng: -99.1332 }, // Ciudad de México
    },
    {
      start: { lat: 40.4168, lng: -3.7038 }, // Madrid
      end: { lat: -34.6037, lng: -58.3816 }, // Buenos Aires
    },
    {
      start: { lat: 40.4168, lng: -3.7038 }, // Madrid
      end: { lat: -33.4489, lng: -70.6693 }, // Santiago de Chile
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-6xl font-bold mb-4">
              Reinventando el Mercado a través de la innovación
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mb-12">
              Conoce más sobre nuestra misión, visión y valores.
            </p>
          </motion.div>

          <BlurFade>
            <div className="w-full aspect-[2/1] bg-muted/50 rounded-lg mb-12">
              <WorldMap dots={connections} lineColor="#bb0000" />
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-lg bg-card"
            >
              <h2 className="text-2xl font-bold mb-4">Misión</h2>
              <p className="text-muted-foreground">
                Transformar el mercado a través de soluciones innovadoras y sostenibles que generen valor para nuestros clientes y la sociedad.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 rounded-lg bg-card"
            >
              <h2 className="text-2xl font-bold mb-4">Visión</h2>
              <p className="text-muted-foreground">
                Ser referentes globales en la transformación digital y la innovación empresarial, creando un impacto positivo en la sociedad.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="p-6 rounded-lg bg-card"
            >
              <h2 className="text-2xl font-bold mb-4">Valores</h2>
              <p className="text-muted-foreground">
                Innovación, excelencia, compromiso, sostenibilidad y orientación al cliente son los pilares que guían nuestro trabajo diario.
              </p>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Nosotros;