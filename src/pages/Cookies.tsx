import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface CookiesProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

const Cookies = ({ isDarkMode, setIsDarkMode }: CookiesProps) => {
  return (
    <div className="min-h-screen bg-background dark:bg-background-dark">
      <Navigation />
      <main className="pt-4">
        <section className="py-6 bg-background dark:bg-background-dark">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-3xl font-bold mb-4">Política de Cookies</h1>
            <p className="mb-4">
              Esta política de cookies explica qué son las cookies, cómo las utilizamos, cómo terceros con los que podemos asociarnos pueden utilizarlas en el servicio, sus opciones de control de cookies y más.
            </p>
            <h2 className="text-2xl font-semibold mb-2">¿Qué son las cookies?</h2>
            <p className="mb-4">
              Las cookies son pequeños archivos de texto que se utilizan para almacenar información en los navegadores web. Se utilizan ampliamente para hacer que los sitios web funcionen, o para que lo hagan de manera más eficiente, así como para proporcionar información a los propietarios del sitio.
            </p>
            <h2 className="text-2xl font-semibold mb-2">¿Cómo utilizamos las cookies?</h2>
            <p className="mb-4">
              Cuando utilizas nuestro servicio, podemos colocar una serie de cookies en tu web browser. Utilizamos cookies para habilitar ciertas funciones del servicio, para proporcionar análisis, para almacenar tus preferencias y para proporcionar publicidad.
            </p>
            <h2 className="text-2xl font-semibold mb-2">Tus opciones de control de cookies</h2>
            <p className="mb-4">
              Si prefieres evitar el uso de cookies, debes primero desactivar el uso de cookies en tu navegador y luego eliminar las cookies guardadas en tu navegador asociadas a este sitio web. Puedes utilizar esta opción para prevenir el uso de cookies en cualquier momento.
            </p>
            <p className="mb-4">
              Si deseas eliminar las cookies o indicar a tu navegador que las elimine o no las acepte, visita las páginas de ayuda de tu navegador:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>
                <a href="https://support.google.com/accounts/answer/32050" target="_blank" rel="noopener noreferrer">Google Chrome</a>
              </li>
              <li>
                <a href="https://support.mozilla.org/es/kb/Borrar%20cookies" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a>
              </li>
              <li>
                <a href="https://support.microsoft.com/es-es/help/278835/how-to-delete-cookie-files-in-internet-explorer" target="_blank" rel="noopener noreferrer">Internet Explorer</a>
              </li>
              <li>
                <a href="https://support.apple.com/es-es/HT201265" target="_blank" rel="noopener noreferrer">Safari</a>
              </li>
            </ul>
            <p className="mb-4">
              Ten en cuenta que si eliminas las cookies o no las aceptas, es posible que no puedas utilizar todas las funcionalidades que ofrecemos.
            </p>
          </div>
        </section>
      </main>
      <Footer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </div>
  );
};

export default Cookies;
