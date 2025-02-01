import { ArrowRight, Check, ChevronDown, Store, Building2, Code } from "lucide-react";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SplineSceneBasic } from "@/components/ui/code-demo";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { Link } from "react-router-dom";

const Index = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const words = [
    {
      text: "Innovación",
    },
    {
      text: "en",
    },
    {
      text: "construcción",
    },
    {
      text: "y",
    },
    {
      text: "retail",
      className: "text-primary dark:text-primary-dark",
    },
  ];

  return (
    <div className="min-h-screen bg-background dark:bg-background-dark">
      <Navigation />
      
      <main className="pt-4">
        <section className="relative overflow-hidden px-6 lg:px-8 py-6 sm:py-8">
          <div className="mx-auto max-w-5xl">
            <SplineSceneBasic />
          </div>
        </section>

        <section className="py-6 bg-background dark:bg-background-dark">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col items-center justify-center">
              <TypewriterEffectSmooth words={words} />
              <Link 
                to="/contacto"
                className="mt-4 px-6 py-2 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary/90 transition-colors dark:bg-primary-dark dark:hover:bg-primary-dark/90"
              >
                Contáctanos
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-surface dark:bg-surface-dark px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-4xl font-bold text-center mb-12 text-foreground dark:text-foreground-dark">
              Nuestros Servicios
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Retail",
                  description: "Modernizamos grandes superficies de consumo, incorporando soluciones tecnológicas que optimizan la experiencia del cliente.",
                  icon: Store,
                },
                {
                  title: "Construcción especializada",
                  description: "Aplicamos métodos constructivos de vanguardia, priorizando la calidad y la sostenibilidad.",
                  icon: Building2,
                },
                {
                  title: "Desarrollo de software",
                  description: "Creamos herramientas digitales personalizadas que permiten a las empresas tomar decisiones basadas en datos.",
                  icon: Code,
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

        <section className="py-16 px-6 lg:px-8 bg-background dark:bg-background-dark">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-2xl font-bold text-center mb-8 text-foreground dark:text-foreground-dark">
              Preguntas Frecuentes
            </h2>
            <div className="space-y-3">
              {[
                {
                  question: "¿Qué servicios ofrecen?",
                  answer: "En LSG ofrecemos una amplia variedad de servicios especializados, que incluyen consultoría empresarial, desarrollo de software a medida, soluciones para el sector retail, y proyectos enfocados en sostenibilidad e innovación.",
                },
                {
                  question: "¿Cómo empezar un proyecto?",
                  answer: "Para iniciar un proyecto con nosotros, simplemente contáctanos a través de nuestro formulario web o escríbenos un correo a info@lsgsoluciones.com. Nuestro equipo analizará tus necesidades y diseñará una propuesta personalizada.",
                },
                {
                  question: "¿Cuál es el tiempo de desarrollo?",
                  answer: "El tiempo de desarrollo depende del alcance y la complejidad del proyecto. Generalmente, proyectos pequeños pueden completarse en unas pocas semanas, mientras que proyectos más grandes requieren varios meses. Siempre trabajamos para cumplir los plazos acordados.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="border border-border dark:border-border-dark rounded-lg overflow-hidden"
                >
                  <button
                    className="w-full px-4 py-3 text-left flex justify-between items-center hover:bg-background/50 dark:hover:bg-background-dark/50"
                    onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                  >
                    <span className="font-medium text-sm text-foreground dark:text-foreground-dark">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        activeAccordion === index ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeAccordion === index && (
                    <div className="px-4 py-3 bg-background/50 dark:bg-background-dark/50">
                      <p className="text-secondary dark:text-gray-400 text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-8 bg-gradient-to-br from-primary/90 to-primary dark:from-primary-dark/90 dark:to-primary-dark text-white px-6 lg:px-8 rounded-2xl mx-6 mb-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-xl sm:text-2xl font-bold mb-3">¿Listo para empezar?</h2>
            <p className="text-white/90 mb-4 max-w-xl mx-auto text-sm">
              Transformemos juntos tu visión en realidad. Contáctanos hoy mismo.
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white text-primary dark:text-primary-dark rounded-full text-sm font-medium hover:bg-white/90 transition-colors"
            >
              Iniciar Proyecto
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;