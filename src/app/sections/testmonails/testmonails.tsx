import { InfiniteMovingCards } from "@/components/aceternity/infinite-moving-cards";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Gostaria de expressar minha mais profunda gratidão pelo incrível trabalho que a Varsel realizou no desenvolvimento do nosso sistema de mídia indoor. Adedicação, expertise e paixão pelo que fazem foram evidentes em cada etapa do processo.",
      name: "Jonathan Costa",
      title: " ",
    },
    {
      quote:
        "A parceria com a equipe da Varsel foi transformadora para a nossa empresa. Eles entenderam exatamente o que precisávamos para a nossa plataforma de gestão e entregaram um produto que não só atendeu como superou nossas expectativas. A atenção aos detalhes, o comprometimento com prazos e a qualidade técnica do time fizeram toda a diferença. Recomendo a DesenvolveSys para qualquer empresa que busca inovação e eficiência em soluções de TI.",
      name: "Maria Clara",
      title: " ",
    },
    {
      quote:
        "Minha experiência com a Agência Varsel foi excelente do início ao fim. Ao procurar uma equipe para desenvolver uma plataforma financeira, não buscamos apenas competências técnicas de alto nível, mas também parceiros que realmente entendam nossa visão e objetivos. A Agência Varsel superou todas as nossas expectativas. Ficou óbvio desde a primeira reunião que eles não só possuem o conhecimento técnico necessário, mas também têm um conhecimento profundo do setor financeiro",
      name: "Lucas",
      title: " ",
    },
    {
      quote:
        "Trabalhar com a Varsel foi uma experiência excepcional do início ao fim. Precisávamos de um sistema robusto para gerenciamento de resíduos e eles nos entregaram uma solução personalizada que se integrou perfeitamente aos nossos processos. A equipe demonstrou um profundo entendimento das nossas necessidades ambientais e se mostrou extremamente profissional e acessível durante todo o projeto.",
      name: "Carlos Eduardo",
      title: " ",
    },
    {
      quote:
        "A Varsel foi fundamental no desenvolvimento da nossa nova plataforma educacional. Desde o planejamento até a execução, a equipe mostrou um comprometimento incrível com a qualidade e a inovação",
      name: "Juliana Menezes",
      title: " ",
    },
    {
      quote:
        "Para a nossa plataforma de cassino online, queríamos algo que realmente se destacasse no mercado, e a Varsel entregou exatamente isso. Eles entenderam nossa visão de criar uma experiência de usuário imersiva e inovadora, incorporando recursos avançados e garantindo a segurança dos dados dos usuários. O compromisso com a qualidade e o suporte contínuo pós-lançamento foram impressionantes.",
      name: "Beatriz Fonseca",
      title: " ",
    },
  ];
  return (
    <div className="h-fit mt-28">
      <h2 className="w-full mb-2 text-center text-[3rem] md:text-[3.5rem] tracking-tight leading-[120%] font-outfit -mt-10 bg-gradient-to-r from-white via-zinc-300 to-zinc-400 inline-block text-transparent bg-clip-text">
        Testimonails
      </h2>
      <p className="font-sans mx-auto mb-10 max-w-lg text-center text-base md:text-[1.125rem] md:leading-[1.5] text-slate-11 font-normal text-zinc-400">
        <span>
          Faça parte do clube seleto de excelência sem igual. Veja o que nossos
          clientes dizem.
        </span>
      </p>
      <div className="w-full  h-96 overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="slow"
        />
      </div>
    </div>
  );
}
