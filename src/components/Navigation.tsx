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
      <div className="h-16 w-full flex items-center justify-between px-4 fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-lg z-50">
        {/* Logo for all screen sizes */}
        <Link to="/" className="flex-shrink-0">
          <img 
            src="/lovable-uploads/6720ed45-dea9-4b52-bb22-e7d3fb7e35ba.png" 
            alt="LSG Soluciones" 
            className="h-8 w-auto md:h-10"
          />
        </Link>
        
        {/* Navigation bar */}
        <div className="flex-grow flex justify-center">
          <TubelightNavbar items={menuItems} />
        </div>
      </div>
      {/* Spacer to prevent content from hiding under the fixed navbar */}
      <div className="h-16 w-full"></div>
    </>
  );
};

export default Navigation;