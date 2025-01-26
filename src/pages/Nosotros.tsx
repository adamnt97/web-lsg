import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Nosotros = () => {
  useEffect(() => {
    document.title = "Nosotros | LSG";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-40 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-6xl font-bold mb-4">Nosotros</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conoce más sobre nuestra misión, visión y valores.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Nosotros;
