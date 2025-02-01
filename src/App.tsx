import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CookieBanner from "./components/CookieBanner";
import Index from "./pages/Index";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";
import Proyectos from "./pages/Proyectos";
import Contacto from "./pages/Contacto";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";
import { useEffect, useState } from "react";

const queryClient = new QueryClient();

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize dark mode from system preference
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
    if (prefersDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Handle dark mode changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
              <Route path="/nosotros" element={<Nosotros isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
              <Route path="/servicios" element={<Servicios isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
              <Route path="/proyectos" element={<Proyectos isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
              <Route path="/contacto" element={<Contacto isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
              <Route path="/privacy" element={<Privacy isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
              <Route path="/terms" element={<Terms isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
              <Route path="/cookies" element={<Cookies isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
            </Routes>
            <CookieBanner />
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;