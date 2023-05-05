import { Inter } from "next/font/google";
import { Input } from "@/components/input";
import { Button } from "@/components/Button";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={` ${inter.className}flex min-h-screen flex-col items-center justify-center min-h-screen p-24`}
    >
      <h2 className="text-4xl font-bold tracking-tight text-center ">
        Contacta Conmigo
      </h2>
      <form className="p-8 space-y-8 border border-black/10">
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
    </main>
  );
}
