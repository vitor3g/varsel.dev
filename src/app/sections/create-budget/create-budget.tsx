import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

export function CreateBudget() {
  return (
    <div className="h-96 mt-28 flex justify-center">
      <div className="flex flex-col items-center text-center gap-20">
        <h3 className="bg-gradient-to-r from-white via-zinc-300 to-zinc-300 inline-block text-transparent bg-clip-text text-5xl font-normal">
          Faça seu orçamento <br /> agora mesmo
        </h3>

        <div className="flex gap-5 items-center">
          <Link
            href="https://api.whatsapp.com/send?phone=5511965246226&text=Olá,%20Estou%20buscando%20um%20novo%20orçamento"
            className="text-sm text-[#888B91] hover:text-zinc-400 font-semibold"
          >
            Entrar em contato
          </Link>

          <Link href="/contact">
            <Button variant="default" className="rounded-full gap-1 text-sm">
              Fazer orçamento
              <IoIosArrowForward />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
