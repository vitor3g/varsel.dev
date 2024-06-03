"use client";

import { Fade } from "react-awesome-reveal";
import QualtityTooltip, { QualityTooltipProps } from "./quality-tooltip";

export function Quality() {
  const steps: QualityTooltipProps[] = [
    {
      icon: "/icons/pull-request.svg",
      span: "Pull request",
      tooltip:
        "Todas as features implementadas no seu projeto passam por uma revisão de um superior antes da homologação.",
    },
    {
      icon: "/icons/compare-revisions.svg",
      span: "Compare Revisions",
      tooltip:
        "Antes de cada pull-request nós comparamos todas as modificações nos minumos detalhes para assegurar que esteja tudo nos conformes.",
    },
    {
      icon: "/icons/browser-code.svg",
      span: "Browser Code",
      tooltip: "text",
    },
    {
      icon: "/icons/quality-assurance.svg",
      span: "Quality Assurance",
      tooltip: "text",
    },
    {
      icon: "/icons/webhooks.svg",
      span: "WebHooks",
      tooltip: "text",
    },
    {
      icon: "/icons/pentesting.svg",
      span: "Pentesting",
      tooltip: "text",
    },
    {
      icon: "/icons/endline.svg",
      span: "Ready",
      tooltip: "text",
    },
  ];

  return (
    <div className="h-fit mt-24 pb-6 pt-5 bg-black">
      <div className="flex flex-col gap-60">
        <div className="flex flex-col xl:w-full gap-5 md:gap-5 md:items-start">
          <h2 className="w-full mb-2 text-center md:text-start text-[3rem] md:text-[3.5rem] tracking-tight leading-[120%] font-outfit bg-gradient-to-r from-white via-zinc-300 to-zinc-400 inline-block text-transparent bg-clip-text">
            Produtos e serviços <br /> de linha global
          </h2>
          <p className="xl:w-6/12 text-center xl:text-start text-lg text-zinc-400">
            A reunião de talentos especializados em suas respectivas áreas torna
            o nosso time mais completo e capacitado para chegar até nosso
            objetivo principal: a satisfação dos clientes.
          </p>

          <div className="w-full flex justify-center xl:justify-start">
            <a
              href="https://api.whatsapp.com/send?phone=5511952246273&text=Olá,%20Estou%20buscando%20um%20novo%20orçamento"
              className="w-50 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              Fale com um especialista
            </a>
          </div>
        </div>

        <div className="flex flex-col xl:w-full gap-5 md:gap-5 md:items-end">
          <h2 className="w-full mb-2 text-center md:text-end text-[3rem] md:text-[3.5rem] tracking-tight leading-[120%] font-outfit bg-gradient-to-r from-white via-zinc-300 to-zinc-400 inline-block text-transparent bg-clip-text">
            Etapas de <br />
            desenvolvimento
          </h2>
          <p className="xl:w-7/12 text-center xl:text-end text-lg text-zinc-400">
            Durante a produção do seu projeto, nossa equipe segue uma rígida
            linha de etapas antes que seu produto seja entregue em suas mãos.
            São essas etapas que asseguram que seu projeto ficará perfeito.
          </p>

          <div className="xl:w-7/12 flex flex-wrap gap-3 justify-center xl:justify-end">
            {steps.map((step, index) => (
              <QualtityTooltip {...step} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
