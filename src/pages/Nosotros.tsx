import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users2, Target, Lightbulb, Award } from "lucide-react";

interface NosotrosProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

const Nosotros = ({ isDarkMode, setIsDarkMode }: NosotrosProps) => {
  return (
    <div className="min-h-screen bg-background dark:bg-background-dark">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-foreground dark:text-foreground-dark">
            Sobre Nosotros
          </h1>
          <p className="text-lg text-muted-foreground dark:text-muted-foreground-dark max-w-2xl mx-auto">
            En LSG Soluciones, nos dedicamos a transformar ideas en soluciones innovadoras,
            combinando experiencia técnica con creatividad para impulsar el éxito de nuestros clientes.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground dark:text-foreground-dark">
              Nuestra Historia
            </h2>
            <p className="text-muted-foreground dark:text-muted-foreground-dark">
              Fundada en 2019, LSG Soluciones nació con la visión de revolucionar la forma en que las empresas
              abordan sus desafíos tecnológicos y operativos. Desde entonces, hemos crecido hasta convertirnos
              en un referente en soluciones innovadoras para retail y construcción.
            </p>
            <p className="text-muted-foreground dark:text-muted-foreground-dark">
              Nuestro compromiso con la excelencia y la innovación nos ha permitido establecer relaciones
              duraderas con clientes en toda España, ofreciendo soluciones que marcan la diferencia en
              sus operaciones diarias.
            </p>
            <Button variant="outline" className="mt-4">
              Conoce más sobre nuestra trayectoria
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-6">
              <CardContent className="space-y-2">
                <Users2 className="h-8 w-8 text-primary dark:text-primary-dark" />
                <h3 className="font-semibold">Equipo Experto</h3>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground-dark">
                  Profesionales altamente cualificados y comprometidos
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="space-y-2">
                <Target className="h-8 w-8 text-primary dark:text-primary-dark" />
                <h3 className="font-semibold">Enfoque Preciso</h3>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground-dark">
                  Soluciones adaptadas a objetivos específicos
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="space-y-2">
                <Lightbulb className="h-8 w-8 text-primary dark:text-primary-dark" />
                <h3 className="font-semibold">Innovación</h3>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground-dark">
                  Tecnologías de vanguardia y métodos innovadores
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="space-y-2">
                <Award className="h-8 w-8 text-primary dark:text-primary-dark" />
                <h3 className="font-semibold">Calidad</h3>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground-dark">
                  Excelencia en cada proyecto que emprendemos
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground dark:text-foreground-dark">
            Nuestros Valores
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2 text-foreground dark:text-foreground-dark">
                Integridad
              </h3>
              <p className="text-muted-foreground dark:text-muted-foreground-dark">
                Actuamos con honestidad y transparencia en todas nuestras interacciones.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2 text-foreground dark:text-foreground-dark">
                Excelencia
              </h3>
              <p className="text-muted-foreground dark:text-muted-foreground-dark">
                Buscamos la perfección en cada detalle de nuestro trabajo.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2 text-foreground dark:text-foreground-dark">
                Innovación
              </h3>
              <p className="text-muted-foreground dark:text-muted-foreground-dark">
                Constantemente exploramos nuevas formas de resolver desafíos.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-foreground dark:text-foreground-dark">
            ¿Listo para trabajar juntos?
          </h2>
          <p className="text-lg text-muted-foreground dark:text-muted-foreground-dark mb-6">
            Descubre cómo podemos ayudarte a alcanzar tus objetivos empresariales.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-white">
            Contáctanos
          </Button>
        </section>
      </main>

      <Footer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </div>
  );
};

export default Nosotros;