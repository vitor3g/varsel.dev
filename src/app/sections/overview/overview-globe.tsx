import React from "react";
import { Button } from "@/components/ui/button";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

export function GlobeOverview() {
  return (
    <div className="w-full flex flex-col p-5 items-center md:items-center">
      <h1 className="w-full font-poppins font-bold text-center md:text-center text-[3rem] md:text-[5rem] md:leading-[5rem] tracking-tight bg-gradient-to-r from-white via-zinc-300 to-zinc-400 inline-block bg-clip-text">
        transforme ideias em
        <br />
        <span className="font-favorit text-transparent bg-gradient-to-r from-[#D44686] to-[#fd666e] bg-clip-text">
          realidade
        </span>
        <span className="md:h-[10%] md:w-[10%] animate-pulse rounded-full duration-1000 bg-gradient-to-r from-[#D44686] to-[#EB5E65] absolute  translate-y-[-20%] translate-x-[-100%] z-[-2] blur-3xl" />
      </h1>
      <p className="w-full text-white/90 mb-8 mt-4 text-center md:text-center text-xs md:text-base font-normal">
        Nós somos especialistas em transformar conceitos em soluções
        tecnológicas de impacto. Se você sonha em criar um aplicativo
        revolucionário, um sistema que soluciona problemas reais ou um site que
        captura a essência do seu negócio, estamos aqui para tornar isso
        realidade.
      </p>

      <div className="flex items-center gap-4">
        <Link href="/contact">
          <Button variant="default" className="rounded-full gap-1 text-sm">
            Entrar em contato
            <IoIosArrowForward />
          </Button>
        </Link>
        <a
          className="text-sm text-[#888B91] hover:text-zinc-400 font-semibold cursor-pointer"
          href="https://api.whatsapp.com/send?phone=5511952246273&text=Olá,%20Estou%20buscando%20um%20novo%20orçamento
"
        >
          Live Chat
        </a>
      </div>
    </div>
  );
}
