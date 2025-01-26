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
      <div className="h-16 w-full"> {/* Reducido de h-20 a h-16 */}
        <Link to="/" className="fixed top-3 left-6 z-[60]"> {/* Ajustado top-4 a top-3 */}
          <img 
            src="/lovable-uploads/6720ed45-dea9-4b52-bb22-e7d3fb7e35ba.png" 
            alt="LSG Soluciones" 
            className="h-8 w-auto" /* Reducido de h-10 a h-8 */
          />
        </Link>
        <TubelightNavbar items={menuItems} />
      </div>
    </>
  );
};

export default Navigation;