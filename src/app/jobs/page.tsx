import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "@/components/aceternity/glowing-stars";
import { MacbookScroll } from "@/components/aceternity/macbook-scroll";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Jobs() {
  const availableJobs = [
    {
      title: "Backend Engineer",
      link: "mailto:contato.varsel@gmail.com?subject=Vaga de Engenheiro Backend",
      desc: "Estamos em busca de novos engenheiros back-end que trabalhem com Node.js e TypeScript.",
    },
    {
      title: "DevTools",
      link: "mailto:contato.varsel@gmail.com?subject=Vaga de DevTools",
      desc: "Buscamos programadores que consigam desenvolver ferramentas que auxiliem no desenvolvimento geral.",
    },
    {
      title: "Component Engineer",
      link: "mailto:contato.varsel@gmail.com?subject=Vaga de Componente Engineer",
      desc: "Buscamos programadores front-end com alto domínio em Next.js e Tailwind CSS para criar diversos componentes.",
    },
  ];

  return (
    <div className="h-fit flex flex-col gap-20">
      <div className="h-full overflow-hidden w-full border-b rounded-[3rem] hidden md:block">
        <MacbookScroll
          title={
            <span>
              No conforto da sua casa. <br /> com profissionais e agendas de
              qualidade.
            </span>
          }
          src={`/linear.webp`}
          showGradient={false}
        />
      </div>

      <div className="h-fit w-full flex justify-center p-2 md:p-0 mt-32">
        <div className="flex flex-col items-center gap-1">
          <h2 className="mb-2 text-center text-4xl md:text-[3rem] tracking-tight leading-[120%] font-outfit -mt-10 bg-gradient-to-r from-white via-zinc-300 to-zinc-400 inline-block text-transparent bg-clip-text">
            Vagas disponiveis
          </h2>

          <p className="text-zinc-400 md:w-8/12 text-center text-sm md:text-lg">
            Fazer parte de nosso time significa mais do que apenas ocupar uma
            posição; significa ser acolhido em uma família dedicada à
            excelência, inovação e apoio mútuo. Aqui, valorizamos as
            contribuições individuais, reconhecendo que cada membro é essencial
            para o sucesso coletivo.
          </p>

          <div className="max-w-[90rem] justify-center mt-10 flex flex-wrap gap-2">
            {availableJobs.map((job, index) => (
              <GlowingStarsBackgroundCard
                className="cursor-pointer"
                key={index}
              >
                <GlowingStarsTitle>{job.title}</GlowingStarsTitle>
                <div className="flex justify-between items-end">
                  <GlowingStarsDescription>{job.desc}</GlowingStarsDescription>
                  <Link href={job.link}>
                    <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
                      <ArrowRight size={15} />
                    </div>
                  </Link>
                </div>
              </GlowingStarsBackgroundCard>
            ))}
          </div>
          <div className="flex flex-col gap-2 mt-20">
            {/* <p className="text-center">Headquarters</p>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
              <AnimatedTooltip items={people} />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
