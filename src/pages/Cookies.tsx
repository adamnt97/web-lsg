import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Cookie, Settings, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { BlurFade } from "@/components/ui/blur-fade";

const Cookies = () => {
  const sections = [
    {
      icon: Cookie,
      title: "Uso de Cookies",
      content: "Explicamos cómo utilizamos las cookies para mejorar tu experiencia."
    },
    {
      icon: Settings,
      title: "Configuración",
      content: "Te permitimos personalizar tus preferencias de cookies."
    },
    {
      icon: Clock,
      title: "Duración",
      content: "Información sobre el tiempo de permanencia de las cookies."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-40 pb-32">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-6xl font-bold tracking-tight">
              Política de Cookies
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transparencia en el uso de cookies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <BlurFade key={section.title} delay={index * 0.1}>
                  <div className="p-8 rounded-2xl bg-surface border border-border hover:shadow-lg transition-all duration-300">
                    <Icon className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
                    <p className="text-muted-foreground">{section.content}</p>
                  </div>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cookies;