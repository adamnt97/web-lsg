import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { BlurFade } from "@/components/ui/blur-fade";

const Privacy = () => {
  const sections = [
    {
      icon: Shield,
      title: "Protección de Datos",
      content: "Nos comprometemos a proteger tu privacidad y datos personales siguiendo las normativas GDPR y LOPDGDD."
    },
    {
      icon: Lock,
      title: "Seguridad",
      content: "Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos."
    },
    {
      icon: Eye,
      title: "Transparencia",
      content: "Mantenemos la transparencia sobre cómo recopilamos y utilizamos tus datos."
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
              Política de Privacidad
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tu privacidad es nuestra prioridad
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

export default Privacy;