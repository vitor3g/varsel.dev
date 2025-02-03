import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function OverviewAnnunce() {
  return (
    <>
      <div className="hidden md:flex flex-wrap w-full gap-5 h-fit items-center justify-center">
        <Badge className="h-5" variant="secondary">
          🎉 Novidade
        </Badge>
        <Label className="text-zinc-300" htmlFor="badge">
          Você é um desenvolvedor? Saiba que estamos contratando!
        </Label>

        <Link href="/jobs">
          <Button variant="outline" className="rounded-full gap-2">
            Aplicar a uma vaga
            <ChevronRight size={15} />
          </Button>
        </Link>
      </div>
      <div className="w-full md:hidden flex justify-center">
        <Link href="/jobs">
          <Button
            variant="outline"
            className="relative rounded-full max-w-full md:w-auto flex items-center justify-start gap-2 pr-10 overflow-hidden"
          >
            <Badge id="badge" variant="outline" className="border-none">
              🎉 Novidade
            </Badge>
            <span className="text-base">Nós estamos contratando</span>
            <div className="absolute right-0 z-20 h-full w-10 bg-black rounded-r-full items-center flex justify-center">
              <ChevronRight size={15} />
            </div>
          </Button>
        </Link>
      </div>
    </>
  );
}
