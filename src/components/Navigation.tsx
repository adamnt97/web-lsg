import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/61baa9cf-d4f1-4494-bfbd-d359e010902b.png" 
            alt="LSG Soluciones" 
            className="h-8 w-auto"
          />
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/nosotros" className="text-secondary hover:text-primary transition-colors">
            Nosotros
          </Link>
          <Link to="/servicios" className="text-secondary hover:text-primary transition-colors">
            Servicios
          </Link>
          <Link to="/proyectos" className="text-secondary hover:text-primary transition-colors">
            Proyectos
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden md:inline-flex">
            Iniciar Sesión
          </Button>
          <Button className="text-white">
            Contáctanos
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;