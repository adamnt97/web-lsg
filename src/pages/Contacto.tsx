import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface ContactoProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

const Contacto = ({ isDarkMode, setIsDarkMode }: ContactoProps) => {
  return (
    <div className="min-h-screen bg-background dark:bg-background-dark">
      <Navigation />
      <main className="pt-4">
        <section className="relative overflow-hidden px-6 lg:px-8 py-6 sm:py-8">
          <div className="mx-auto max-w-5xl">
            <h1 className="text-4xl font-bold">Contacto</h1>
            <p className="mt-4 text-muted-foreground">
              Si tienes alguna pregunta o inquietud, no dudes en contactarnos.
            </p>
          </div>
        </section>

        <section className="py-6 bg-background dark:bg-background-dark">
          <div className="max-w-7xl mx-auto px-6">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full border border-border dark:border-border-dark rounded-md shadow-sm focus:ring-primary dark:focus:ring-primary-dark focus:border-primary dark:focus:border-primary-dark"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full border border-border dark:border-border-dark rounded-md shadow-sm focus:ring-primary dark:focus:ring-primary-dark focus:border-primary dark:focus:border-primary-dark"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full border border-border dark:border-border-dark rounded-md shadow-sm focus:ring-primary dark:focus:ring-primary-dark focus:border-primary dark:focus:border-primary-dark"
                  required
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:bg-primary-dark dark:hover:bg-primary-dark/90"
              >
                Enviar
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </div>
  );
};

export default Contacto;
