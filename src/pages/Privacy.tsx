import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface PrivacyProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

const Privacy = ({ isDarkMode, setIsDarkMode }: PrivacyProps) => {
  return (
    <div className="min-h-screen bg-background dark:bg-background-dark">
      <Navigation />
      <main className="py-8 px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-4">Política de Privacidad</h1>
        <p className="mb-4">
          En LSG Soluciones, valoramos tu privacidad y nos comprometemos a proteger tus datos personales. Esta política de privacidad describe cómo recopilamos, usamos y compartimos tu información.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Información que Recopilamos</h2>
        <p className="mb-4">
          Recopilamos información que nos proporcionas directamente, como tu nombre, dirección de correo electrónico y cualquier otra información que decidas compartir con nosotros.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Uso de la Información</h2>
        <p className="mb-4">
          Utilizamos la información que recopilamos para proporcionarte nuestros servicios, comunicarnos contigo y mejorar nuestra oferta.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Compartir Información</h2>
        <p className="mb-4">
          No compartimos tu información personal con terceros sin tu consentimiento, excepto cuando sea necesario para cumplir con la ley o proteger nuestros derechos.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Tus Derechos</h2>
        <p className="mb-4">
          Tienes derecho a acceder, corregir o eliminar tu información personal. Si deseas ejercer estos derechos, contáctanos a través de la información proporcionada a continuación.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Contacto</h2>
        <p className="mb-4">
          Si tienes preguntas sobre esta política de privacidad, contáctanos en info@lsgsoluciones.com.
        </p>
      </main>
      <Footer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </div>
  );
};

export default Privacy;
