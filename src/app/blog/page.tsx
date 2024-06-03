import { TracingBeam } from "@/components/aceternity/tracing-beam";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

export default function Blog() {
  const dummyContent = [
    {
      title: "Um Recomeço",
      description: (
        <>
          <p>
            Com muito orgulho e após dois anos de planejamento, nós lançamos
            isso novamente. A Varsel não é só uma empresa; é o nosso objetivo,
            nosso caminho, nossa jornada. Esperamos que toda a dedicação de
            todos os membros do nosso time e de nós mesmos, como fundadores,
            resulte em clientes felizes e em uma honrosa jornada.
            <br />
            <br />
            Veja o que nossos fundadores escreveram para este momento.
            <br />
            <br />
            <strong>Vinicius Emanuel (CEO):</strong> <br />
            Recomeçar é um grande desafio, criar um projeto do zero, gerar novas
            oportunidades e trabalhar diante de todas as expectativas geradas.
            Participei de muitos projetos, e aqueles que mais me marcaram foram
            aqueles que me tiraram da zona de conforto. Com eles, aprendi lições
            valiosas e conheci pessoas ainda mais valiosas. Como meu avô sempre
            dizia, não é apenas errando que se aprende, mas sim corrigindo o
            erro que se adquire conhecimento.
            <br />
            <br />
            <strong>Vítor Ribeiro (CTO):</strong> <br />
            Nós passamos por muitas dificuldades nos últimos anos para firmar
            isso e apresentar uma ideia de negócio sustentável, funcional e que
            agrade ao máximo os nossos parceiros e a nós mesmos. São muitos os
            desafios que percorremos em nossa jornada de outros projetos, alguns
            dando certo, outros incrivelmente errados. Mas acredito que a cada
            projeto que tem o seu sucesso ou sua falha é uma nova experiência a
            ser obtida. A Varsel não será apenas uma nova jornada, acredito que
            ela será a redenção.
          </p>
        </>
      ),
      badge: "Semanal Updates",
      image: "/friends.png",
    },
  ];

  return (
    <TracingBeam className="place-items-center">
      <div className="mt-20 mx-auto antialiased pt-4 p-4 md:p-0 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit py-1 mb-4">
              {item.badge}
            </h2>

            <p className={twMerge("font-outfit text-xl mb-4")}>{item.title}</p>

            <div className="text-sm  prose prose-sm dark:prose-invert text-zinc-300">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="600"
                  width="600"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}
