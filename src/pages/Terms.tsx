import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface TermsProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

const Terms = ({ isDarkMode, setIsDarkMode }: TermsProps) => {
  return (
    <div className="min-h-screen bg-background dark:bg-background-dark">
      <Navigation />
      <main className="pt-4">
        <section className="py-6 px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-4">Términos de Servicio</h1>
          <p className="mb-4">
            Bienvenido a LSG Soluciones. Al utilizar nuestros servicios, aceptas cumplir con los siguientes términos y condiciones.
          </p>
          <h2 className="text-2xl font-semibold mt-6">1. Aceptación de los Términos</h2>
          <p className="mb-4">
            Al acceder y utilizar nuestros servicios, aceptas estar sujeto a estos términos. Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestros servicios.
          </p>
          <h2 className="text-2xl font-semibold mt-6">2. Modificaciones a los Términos</h2>
          <p className="mb-4">
            Nos reservamos el derecho de modificar estos términos en cualquier momento. Te notificaremos sobre cambios significativos a través de nuestro sitio web.
          </p>
          <h2 className="text-2xl font-semibold mt-6">3. Uso de los Servicios</h2>
          <p className="mb-4">
            Te comprometes a utilizar nuestros servicios de manera legal y de acuerdo con todas las leyes aplicables. No debes utilizar nuestros servicios para actividades ilegales o no autorizadas.
          </p>
          <h2 className="text-2xl font-semibold mt-6">4. Propiedad Intelectual</h2>
          <p className="mb-4">
            Todos los derechos de propiedad intelectual relacionados con nuestros servicios son propiedad de LSG Soluciones. No puedes reproducir, distribuir o modificar nuestro contenido sin nuestro consentimiento previo.
          </p>
          <h2 className="text-2xl font-semibold mt-6">5. Limitación de Responsabilidad</h2>
          <p className="mb-4">
            En la medida máxima permitida por la ley, LSG Soluciones no será responsable de ningún daño indirecto, incidental o consecuente que surja del uso de nuestros servicios.
          </p>
          <h2 className="text-2xl font-semibold mt-6">6. Ley Aplicable</h2>
          <p className="mb-4">
            Estos términos se regirán e interpretarán de acuerdo con las leyes del país en el que operamos.
          </p>
          <h2 className="text-2xl font-semibold mt-6">7. Contacto</h2>
          <p className="mb-4">
            Si tienes alguna pregunta sobre estos términos, no dudes en contactarnos a través de nuestro correo electrónico: info@lsgsoluciones.com.
          </p>
        </section>
      </main>
      <Footer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </div>
  );
};

export default Terms;
