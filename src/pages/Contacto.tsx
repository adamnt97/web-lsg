import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

const Contacto = () => {
  useEffect(() => {
    document.title = "Contacto | LSG";
  }, []);

  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await fetch("https://formspree.io/f/xoqgbwbj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        toast({
          title: "Mensaje enviado",
          description: "Nos pondremos en contacto contigo pronto",
        });
        form.reset();
      } else {
        throw new Error("Error al enviar el mensaje");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-6xl font-bold tracking-tight">
              Contacta con
              <span className="text-accent block mt-2">nosotros</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              ¿Tienes alguna pregunta o proyecto en mente? Estaremos encantados de ayudarte.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-semibold mb-4">Oficina Central</h2>
                <p className="text-muted-foreground">
                  Calle de Velázquez 27, 1º Ext. Izda.<br />
                  28001 Madrid<br />
                  España
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">Información de Contacto</h2>
                <p className="text-muted-foreground">
                  Email: info@lsg-group.es<br />
                  Teléfono: +34 910 615 318
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">Horario de Atención</h2>
                <p className="text-muted-foreground">
                  Lunes a Viernes<br />
                  9:00 - 18:00
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-surface p-8 rounded-2xl border border-border"
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <Label>Nombre</Label>
                        <FormControl>
                          <Input placeholder="Tu nombre" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <Label>Email</Label>
                        <FormControl>
                          <Input placeholder="tu@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <Label>Mensaje</Label>
                        <FormControl>
                          <Textarea
                            placeholder="¿En qué podemos ayudarte?"
                            className="min-h-[150px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full">
                    Enviar mensaje
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contacto;