import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { BlurFade } from "@/components/ui/blur-fade";
import { Link } from "react-router-dom";
const Servicios = () => {
  const services = [{
    title: "Retail",
    description: "Modernizamos grandes superficies de consumo, incorporando soluciones tecnológicas que optimizan la experiencia del cliente.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80",
    features: ["Diseño de espacios comerciales", "Optimización de flujos de clientes", "Integración de tecnología IoT", "Análisis de datos en tiempo real"]
  }, {
    title: "Construcción especializada",
    description: "Aplicamos métodos constructivos de vanguardia, priorizando la calidad y la sostenibilidad.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80",
    features: ["Construcción sostenible", "Gestión integral de proyectos", "Innovación en materiales", "Eficiencia energética"]
  }, {
    title: "Desarrollo de software",
    description: "Creamos herramientas digitales personalizadas que permiten a las empresas tomar decisiones basadas en datos.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80",
    features: ["Desarrollo a medida", "Integración de sistemas", "Análisis de datos", "Mantenimiento continuo"]
  }];
  return <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">Nuestros Servicios</h1>
            <p className="text-muted-foreground max-w-3xl mx-auto text-3xl font-thin">Transformamos software, espacios y experiencias a través de la innovación y la tecnología.</p>
          </motion.div>

          <div className="space-y-32">
            {services.map((service, index) => <motion.div key={service.title} initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: index * 0.2
          }} viewport={{
            once: true
          }} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
                <div className="flex-1">
                  <div className="relative overflow-hidden rounded-2xl group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <img src={service.image} alt={service.title} className="relative w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>
                <div className="flex-1 space-y-6">
                  <h2 className="text-4xl font-bold">{service.title}</h2>
                  <p className="text-lg text-muted-foreground">{service.description}</p>
                  <ul className="space-y-4">
                    {service.features.map(feature => <li key={feature} className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span>{feature}</span>
                      </li>)}
                  </ul>
                </div>
              </motion.div>)}
          </div>

          <section className="py-16 mt-32 mb-24 bg-primary text-white rounded-3xl overflow-hidden relative">
            <BlurFade delay={0.25} inView>
              <div className="max-w-3xl mx-auto text-center px-6">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">¿Listo para empezar?</h2>
                <p className="text-lg mb-6">
                  Transformemos juntos tu visión en realidad. Contáctanos hoy mismo.
                </p>
                <Link to="/contacto" className="inline-block px-6 py-3 bg-white text-primary rounded-full font-semibold hover:bg-white/90 transition-colors">
                  Contactar ahora
                </Link>
              </div>
            </BlurFade>
          </section>
        </div>
      </main>
      <Footer />
    </div>;
};
export default Servicios;