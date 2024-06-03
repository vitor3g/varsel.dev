import Image from "next/image";
import { FigmaComponent } from "./figma-component";

export function DesignByYou() {
  return (
    <div className="h-fit flex flex-col justify-center mt-28">
      <div className="flex flex-col items-center gap-1">
        <Image src="/icons/brain.webp" width={200} height={200} alt="CPU" />
        <h2 className="mb-2 text-center text-[3rem] md:text-[3.5rem] tracking-tight leading-[120%] font-outfit -mt-10 bg-gradient-to-r from-white via-zinc-300 to-zinc-400 inline-block text-transparent bg-clip-text">
          Bake with your brain
        </h2>

        <p className="text-zinc-400 md:w-8/12 text-center text-lg">
          Não só no código, mas também no design, a Varsel possui profissionais
          excelentes na criação e idealização de interfaces. Todos eles estarão
          acessíveis a você quando precisar.
        </p>
        <FigmaComponent />
      </div>
    </div>
  );
}
