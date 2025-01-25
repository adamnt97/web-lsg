import { Link } from "react-router-dom";

const Footer = () => {
  const footerSections = [
    {
      title: "Company",
      links: ["About", "Press"],
    },
    {
      title: "Legal",
      links: ["Privacy", "Terms", "Cookies"],
    },
  ];

  return (
    <footer className="bg-[#141413] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 gap-8 mb-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link
                      to={`/${link.toLowerCase()}`}
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/70 text-sm">
            © 2019-2025 LSG Group dba. LSG Soluciones (LSG IBERIAN PARTNERS, S.L.). All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <Link to="#" className="text-white/70 hover:text-white transition-colors">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;