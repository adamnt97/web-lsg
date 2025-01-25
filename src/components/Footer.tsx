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
        <div className="max-w-7xl mx-auto py-12 px-6">
          <div className="grid grid-cols-2 gap-8 md:gap-12 mb-8">
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-3">
                <h3 className="text-sm font-medium text-foreground/80">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="text-sm text-foreground/60 hover:text-primary transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-border">
            <p className="text-sm text-foreground/60">
              © 2019-2025 LSG Group dba. LSG Soluciones (LSG IBERIAN PARTNERS, S.L.)
            </p>
            <div className="flex items-center space-x-4">
              <Link 
                to="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-foreground/60 hover:text-primary transition-colors"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </BlurFade>
    </footer>
  );
};

export default Footer;