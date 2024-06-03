import Image from "next/image";
import YourControlWhatsapp from "./your-control-whatsapp";

export function YourControl() {
  return (
    <div className="h-fit flex flex-col justify-center mt-28">
      <div className="flex flex-col items-center gap-1">
        <Image src="/icons/chat.webp" width={200} height={200} alt="CPU" />
        <h2 className="mb-2 text-center text-[3rem] md:text-[3.5rem] tracking-tight leading-[120%] font-outfit -mt-10 bg-gradient-to-r from-white via-zinc-300 to-zinc-400 inline-block text-transparent bg-clip-text">
          Gestão sem esforço
        </h2>

        <p className="text-zinc-400 md:w-8/12 text-center text-lg">
          Esqueça a rigidez dos e-mails. Comande seu projeto com facilidade e
          tenha diálogos diretos com nossa equipe.
        </p>
        <YourControlWhatsapp />
      </div>
    </div>
  );
}
