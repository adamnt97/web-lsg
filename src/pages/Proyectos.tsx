import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Proyectos = () => {
  useEffect(() => {
    document.title = "Proyectos | LSG";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-8"> {/* Reducido de pt-16 a pt-8 */}
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-8">Proyectos</h1>
          {/* Contenido de la página */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Proyectos;
