import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Proyectos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24"> {/* Ajustado de pt-8 a pt-24 */}
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