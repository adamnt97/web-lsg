import { useEffect } from "react";

const Privacy = () => {
  useEffect(() => {
    document.title = "Política de Privacidad | LSG";
  }, []);

  return (
    <div>
      <h1>Política de Privacidad</h1>
      <p>
        Esta es la política de privacidad de LSG Soluciones. Nos comprometemos a proteger su privacidad y a garantizar que su información personal se maneje de manera responsable.
      </p>
      <h2>Información que recopilamos</h2>
      <p>
        Recopilamos información personal que usted nos proporciona al registrarse en nuestro sitio, realizar un pedido o comunicarse con nosotros. Esta información puede incluir su nombre, dirección de correo electrónico, dirección postal y número de teléfono.
      </p>
      <h2>Uso de la información</h2>
      <p>
        Utilizamos la información que recopilamos para procesar sus pedidos, mejorar nuestro sitio web y comunicarnos con usted sobre su cuenta y nuestros productos.
      </p>
      <h2>Divulgación de la información</h2>
      <p>
        No vendemos, intercambiamos ni transferimos su información personal a terceros sin su consentimiento, excepto cuando sea necesario para cumplir con la ley o proteger nuestros derechos.
      </p>
      <h2>Seguridad de la información</h2>
      <p>
        Implementamos una variedad de medidas de seguridad para mantener la seguridad de su información personal. Sin embargo, ninguna transmisión de datos a través de Internet puede garantizarse como 100% segura.
      </p>
      <h2>Cambios en nuestra política de privacidad</h2>
      <p>
        Nos reservamos el derecho a modificar esta política de privacidad en cualquier momento. Cualquier cambio será publicado en esta página.
      </p>
    </div>
  );
};

export default Privacy;
