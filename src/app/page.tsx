import { Inter } from "next/font/google";
import { Form } from "@/components/Form";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={` ${inter.className}flex min-h-screen flex-col items-center justify-center min-h-screen p-28`}
    >
      <h2 className="mb-4 text-5xl font-bold tracking-tight text-center ">
        Contacta Conmigo
      </h2>
      <div className="flex items-center justify-center max-w-xl m-auto">
        <Form />
      </div>
    </main>
  );
}
