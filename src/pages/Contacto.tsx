import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, introduce un email válido.",
  }),
  message: z.string().min(10, {
    message: "El mensaje debe tener al menos 10 caracteres.",
  }),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "Debes aceptar los términos y condiciones.",
  }),
});

const Contacto = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      acceptTerms: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const { error } = await supabase.functions.invoke('send-email', {
        body: {
          name: values.name,
          email: values.email,
          message: values.message,
        },
      });

      if (error) {
        console.error("Error sending email:", error);
        toast.error("Error al enviar el mensaje. Por favor, inténtalo de nuevo.");
        return;
      }

      toast.success("Mensaje enviado correctamente");
      form.reset();
    } catch (error) {
      console.error("Error in form submission:", error);
      toast.error("Error al enviar el mensaje. Por favor, inténtalo de nuevo.");
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 pb-32">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl font-bold mb-4 text-foreground">
              Contacto
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Estamos aquí para ayudarte. Contáctanos y te responderemos lo antes posible.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/80">Nombre</FormLabel>
                        <FormControl>
                          <Input placeholder="Tu nombre" className="bg-white/5 border-white/10" {...field} />
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
                        <FormLabel className="text-foreground/80">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="tu@email.com" className="bg-white/5 border-white/10" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground/80">Mensaje</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="¿En qué podemos ayudarte?"
                          className="min-h-[120px] bg-white/5 border-white/10"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="acceptTerms"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm text-foreground/80">
                          Acepto la{" "}
                          <a href="/privacy" className="text-primary hover:underline">
                            política de privacidad
                          </a>{" "}
                          y el{" "}
                          <a href="/terms" className="text-primary hover:underline">
                            tratamiento de mis datos personales
                          </a>
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                <div className="flex justify-center pt-4">
                  <InteractiveHoverButton 
                    type="submit"
                    text="Enviar mensaje"
                    className="w-48 h-12 text-base font-medium rounded-xl border-2 border-primary/20 bg-primary/5 hover:bg-primary hover:border-primary transition-all duration-300"
                  />
                </div>
              </form>
            </Form>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contacto;