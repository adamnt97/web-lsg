"use client"

import * as React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useToast } from "@/components/ui/use-toast"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Facebook, Instagram, Linkedin, Moon, Send, Sun } from "lucide-react"
import { supabase } from "@/integrations/supabase/client"

function FooterDemo() {
  const [isDarkMode, setIsDarkMode] = React.useState(false)
  const [email, setEmail] = React.useState("")
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [acceptedPrivacy, setAcceptedPrivacy] = React.useState(false)
  const { toast } = useToast()

  // Initialize dark mode from system preference
  React.useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setIsDarkMode(prefersDark)
    if (prefersDark) {
      document.documentElement.classList.add("dark")
    }
  }, [])

  // Handle dark mode changes
  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Por favor, ingresa un email válido",
      })
      return
    }

    if (!acceptedPrivacy) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Debes aceptar la política de privacidad",
      })
      return
    }

    setIsSubmitting(true)
    try {
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert({ email })

      if (error) throw error

      toast({
        title: "¡Suscripción exitosa!",
        description: "Gracias por suscribirte a nuestro newsletter.",
      })
      setEmail("")
      setAcceptedPrivacy(false)
    } catch (error) {
      console.error('Error:', error)
      toast({
        variant: "destructive",
        title: "Error",
        description: "Hubo un error al procesar tu suscripción. Por favor, intenta nuevamente.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Mantente Conectado</h2>
            <p className="mb-6 text-muted-foreground">
              Únete a nuestro boletín para recibir las últimas actualizaciones y ofertas exclusivas.
            </p>
            <form className="relative space-y-4" onSubmit={handleSubscribe}>
              <Input
                type="email"
                placeholder="Ingresa tu email"
                className="pr-12 backdrop-blur-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
                disabled={isSubmitting}
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Suscribirse</span>
              </Button>
              <div className="flex items-center space-x-2 mt-2">
                <Checkbox
                  id="privacy"
                  checked={acceptedPrivacy}
                  onCheckedChange={(checked) => setAcceptedPrivacy(checked as boolean)}
                  className="data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                />
                <label
                  htmlFor="privacy"
                  className="text-sm text-muted-foreground"
                >
                  Acepto la{" "}
                  <Link to="/privacy" className="text-primary hover:underline">
                    política de privacidad
                  </Link>
                </label>
              </div>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Enlaces Rápidos</h3>
            <nav className="space-y-2 text-sm">
              <Link to="/" className="block transition-colors hover:text-primary">
                Inicio
              </Link>
              <Link to="/nosotros" className="block transition-colors hover:text-primary">
                Nosotros
              </Link>
              <Link to="/servicios" className="block transition-colors hover:text-primary">
                Servicios
              </Link>
              <Link to="/proyectos" className="block transition-colors hover:text-primary">
                Proyectos
              </Link>
              <Link to="/contacto" className="block transition-colors hover:text-primary">
                Contacto
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contáctanos</h3>
            <address className="space-y-2 text-sm not-italic">
              <p>Calle Ortega y Gasset, 9</p>
              <p>Centro de negocios Regus, MU 30009</p>
              <p>Teléfono: +34 615 956 126</p>
              <p>Email: info@lsgsoluciones.com</p>
            </address>
          </div>
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">Síguenos</h3>
            <div className="mb-6 flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Facebook className="h-4 w-4" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" align="center" className="z-50">
                    <p>Síguenos en Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Instagram className="h-4 w-4" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" align="center" className="z-50">
                    <p>Síguenos en Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" align="center" className="z-50">
                    <p>Conéctate con nosotros en LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4" />
              <Switch
                id="dark-mode"
                checked={isDarkMode}
                onCheckedChange={setIsDarkMode}
              />
              <Moon className="h-4 w-4" />
              <Label htmlFor="dark-mode" className="sr-only">
                Alternar modo oscuro
              </Label>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2019-2025 LSG Group dba. LSG Soluciones. Todos los derechos reservados.
          </p>
          <nav className="flex gap-4 text-sm">
            <Link to="/privacy" className="transition-colors hover:text-primary">
              Política de Privacidad
            </Link>
            <Link to="/terms" className="transition-colors hover:text-primary">
              Términos de Servicio
            </Link>
            <Link to="/cookies" className="transition-colors hover:text-primary">
              Configuración de Cookies
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export { FooterDemo }