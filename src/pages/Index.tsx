import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SplineSceneBasic } from "@/components/ui/code-demo";

const Index = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-6 lg:px-8 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl">
            <SplineSceneBasic />
          </div>
        </section>

        <section className="py-24 bg-surface px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-16">Nuestros Servicios</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Desarrollo de Software",
                  description: "Soluciones personalizadas para tu negocio",
                  icon: "💻",
                },
                {
                  title: "Consultoría IT",
                  description: "Asesoramiento experto en tecnología",
                  icon: "🔍",
                },
                {
                  title: "Infraestructura Cloud",
                  description: "Servicios cloud escalables y seguros",
                  icon: "☁️",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-background border border-border hover:border-accent transition-colors hover:scale-105 transform duration-200"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-secondary">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-16">Preguntas Frecuentes</h2>
            <div className="space-y-4">
              {[
                {
                  question: "¿Qué servicios ofrecen?",
                  answer: "Ofrecemos desarrollo de software personalizado, consultoría IT y servicios cloud.",
                },
                {
                  question: "¿Cómo empezar un proyecto?",
                  answer: "Contáctanos para agendar una reunión inicial donde evaluaremos tus necesidades.",
                },
                {
                  question: "¿Cuál es el tiempo de desarrollo?",
                  answer: "Los tiempos varían según el proyecto, pero nos comprometemos con plazos realistas.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="border border-border rounded-lg overflow-hidden"
                >
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-background/50"
                    onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                  >
                    <span className="font-medium">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        activeAccordion === index ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeAccordion === index && (
                    <div className="px-6 py-4 bg-background/50">
                      <p className="text-secondary">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-white px-6 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="text-3xl sm:text-5xl font-bold mb-8">¿Listo para empezar?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Transformemos juntos tu visión en realidad. Contáctanos hoy mismo.
            </p>
            <button className="px-8 py-4 bg-accent text-primary rounded-full font-semibold hover:bg-accent/90 transition-colors">
              Iniciar Proyecto
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
