import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Proyectos = () => {
  useEffect(() => {
    document.title = "Proyectos | LSG";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-6xl font-bold tracking-tight">
              Nuestros Proyectos
              <span className="text-accent block mt-2">Innovación en acción</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Descubre cómo transformamos ideas en realidades a través de nuestros proyectos innovadores.
            </p>
          </motion.div>

          {/* Aquí puedes agregar más contenido sobre los proyectos */}

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Proyectos;
