import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Nosotros = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-8">Nosotros</h1>
          {/* Contenido de la página */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Nosotros;