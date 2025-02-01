import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface ProyectosProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

const Proyectos = ({ isDarkMode, setIsDarkMode }: ProyectosProps) => {
  return (
    <div className="min-h-screen bg-background dark:bg-background-dark">
      <Navigation />
      {/* Your existing Proyectos content */}
      <Footer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </div>
  );
};

export default Proyectos;