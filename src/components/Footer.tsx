import { Link } from "react-router-dom";
import { BlurFade } from "@/components/ui/blur-fade";

const Footer = () => {
  const footerSections = [
    {
      title: "Company",
      links: [
        { name: "About", path: "/nosotros" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy", path: "/privacy" },
        { name: "Terms", path: "/terms" },
        { name: "Cookies", path: "/cookies" },
      ],
    },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <BlurFade>
        <div className="max-w-7xl mx-auto py-8 px-6">
          <div className="flex justify-between items-start mb-6">
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-2">
                <h3 className="text-xs font-medium text-foreground/80">{section.title}</h3>
                <ul className="space-y-1">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="text-xs text-foreground/60 hover:text-primary transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="flex justify-between items-center pt-4 border-t border-border">
            <p className="text-xs text-foreground/60">
              © 2019-2025 LSG Group dba. LSG Soluciones
            </p>
            <Link 
              to="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-foreground/60 hover:text-primary transition-colors"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </BlurFade>
    </footer>
  );
};

export default Footer;