import { useState, useEffect } from "react";
import { Cookie, Settings, ShieldCheck, ShieldOff } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { v4 as uuidv4 } from 'uuid';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    checkCookiePreferences();
  }, []);

  const getBrowserId = () => {
    let browserId = localStorage.getItem('browser_id');
    if (!browserId) {
      browserId = uuidv4();
      localStorage.setItem('browser_id', browserId);
    }
    return browserId;
  };

  const checkCookiePreferences = async () => {
    try {
      const browserId = getBrowserId();
      const { data: preferences } = await supabase
        .from('cookie_preferences')
        .select('*')
        .eq('browser_id', browserId)
        .maybeSingle();

      if (preferences) {
        setShowBanner(false);
      }
    } catch (error) {
      console.error('Error checking cookie preferences:', error);
    }
  };

  const saveCookiePreferences = async (
    acceptedAll: boolean,
    analytics = false,
    marketing = false,
    functional = false
  ) => {
    setLoading(true);
    try {
      const browserId = getBrowserId();
      const { error } = await supabase
        .from('cookie_preferences')
        .upsert({
          browser_id: browserId,
          accepted_all: acceptedAll,
          analytics_cookies: analytics,
          marketing_cookies: marketing,
          functional_cookies: functional,
          updated_at: new Date().toISOString(),
        });

      if (error) throw error;

      setShowBanner(false);
      toast.success("Preferencias de cookies guardadas");
    } catch (error) {
      console.error('Error saving cookie preferences:', error);
      toast.error("Error al guardar las preferencias");
    } finally {
      setLoading(false);
    }
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-8 md:right-auto md:max-w-md bg-background/80 backdrop-blur-lg border border-border rounded-lg p-4 shadow-lg z-50">
      <div className="flex items-start gap-3">
        <Cookie className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
        <div className="space-y-3">
          <p className="text-sm text-foreground/80">
            Utilizamos cookies para mejorar tu experiencia. 
            <Link to="/cookies" className="text-primary hover:underline ml-1">
              Más información
            </Link>
          </p>
          <div className="flex flex-wrap gap-2">
            <Button
              size="sm"
              variant="default"
              onClick={() => saveCookiePreferences(true, true, true, true)}
              disabled={loading}
              className="flex items-center gap-1"
            >
              <ShieldCheck className="w-4 h-4" />
              Aceptar todas
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => saveCookiePreferences(false)}
              disabled={loading}
              className="flex items-center gap-1"
            >
              <ShieldOff className="w-4 h-4" />
              Rechazar
            </Button>
            <Link to="/cookies">
              <Button
                size="sm"
                variant="ghost"
                className="flex items-center gap-1"
              >
                <Settings className="w-4 h-4" />
                Configurar
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;