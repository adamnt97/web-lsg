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
      <div className="h-28 w-full">
        <Link to="/" className="fixed top-6 left-6 z-[60]">
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