import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, Users, Briefcase, FolderKanban, MessageSquare } from "lucide-react";
import { TubelightNavbar } from "./ui/tubelight-navbar";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Inicio", url: "/", icon: Home },
    { name: "Nosotros", url: "/nosotros", icon: Users },
    { name: "Servicios", url: "/servicios", icon: Briefcase },
    { name: "Proyectos", url: "/proyectos", icon: FolderKanban },
    { name: "Contacto", url: "/contacto", icon: MessageSquare },
  ];

  return (
    <>
      <div className="h-20 w-full">
        {/* Desktop logo */}
        <Link 
          to="/" 
          className="fixed top-4 left-6 z-50 md:z-[60] hidden md:block"
        >
          <img 
            src="/lovable-uploads/6720ed45-dea9-4b52-bb22-e7d3fb7e35ba.png" 
            alt="LSG Soluciones" 
            className="h-10 w-auto"
          />
        </Link>
        {/* Mobile logo - Adjusted positioning and size */}
        <Link 
          to="/" 
          className="fixed top-16 left-1/2 transform -translate-x-1/2 z-50 block md:hidden"
        >
          <img 
            src="/lovable-uploads/6720ed45-dea9-4b52-bb22-e7d3fb7e35ba.png" 
            alt="LSG Soluciones" 
            className="h-12 w-auto" 
          />
        </Link>
        <TubelightNavbar items={menuItems} />
      </div>
    </>
  );
};

export default Navigation;