import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Inicio | LSG";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          <h1 className="text-6xl font-bold tracking-tight text-center">
            Bienvenido a LSG Soluciones
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-center">
            Transformamos ideas en soluciones innovadoras.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
