"use client";
import { toast } from "sonner";
import { Input } from "@/components/input";
import { Button } from "@/components/Button";

export const Form = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const { email, name, message } = Object.fromEntries(formData.entries());

    //lamo a la api
    fetch("api/kv-send-message", {
      method: "POST",
      body: JSON.stringify({ email, name, message }),
      headers: {
        "content-Type": "application/json",
      },
    })
      .then(() => {
        toast.success("Mensaje enviado con exito");
      })
      .catch(() => {
        toast.error("Hubo un error al enviar el mensaje");
      });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className=" max-w-md p-8 space-y-8 border border-black/10"
    >
      <Input
        name=" email"
        id="email"
        label="Tu Email:"
        type="email"
        placeholder="miemial@dominioc.om"
      />

      <Input
        name=" name"
        id="name"
        label="Tu Nombre:"
        type="text"
        placeholder="Carolina Barragan"
      />

      <Input
        name=" message"
        id="message"
        label="Tu Message:"
        type="text"
        placeholder="este es el mensaje que quiero enviar"
      />
      <Button>Enviar Mensaje</Button>
    </form>
  );
};
