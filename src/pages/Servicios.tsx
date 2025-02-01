import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface ServiciosProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

const Servicios = ({ isDarkMode, setIsDarkMode }: ServiciosProps) => {
  return (
    <div className="min-h-screen bg-background dark:bg-background-dark">
      <Navigation />
      <main className="pt-4">
        <section className="py-16 bg-surface dark:bg-surface-dark px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-4xl font-bold text-center mb-12 text-foreground dark:text-foreground-dark">
              Nuestros Servicios
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Consultoría",
                  description: "Ofrecemos servicios de consultoría para ayudar a las empresas a optimizar sus procesos.",
                  icon: Store,
                },
                {
                  title: "Desarrollo de Software",
                  description: "Creamos soluciones de software personalizadas para satisfacer las necesidades de nuestros clientes.",
                  icon: Code,
                },
                {
                  title: "Gestión de Proyectos",
                  description: "Gestionamos proyectos de construcción y retail, asegurando la calidad y el cumplimiento de plazos.",
                  icon: Building2,
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-white/80 dark:bg-black/20 backdrop-blur-sm border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-200 hover:shadow-lg"
                >
                  <feature.icon className="w-8 h-8 mb-4 text-primary dark:text-primary-dark" />
                  <h3 className="text-xl font-semibold mb-2 text-foreground dark:text-foreground-dark">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-justify">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </div>
  );
};

export default Servicios;
