import { DirectionAwareHover } from "@/components/aceternity/direction-aware-hover";

export function Chose() {
  const projects = [
    {
      title: "Payment Dashboard",
      custumer: "CollabPay",
      imageUrl: "/products/8.png",
      link: "https://www.behance.net/gallery/186811041/CollabPay",
    },
    {
      title: "Landing Page",
      custumer: "LowPixel",
      imageUrl: "/products/11.png",
      link: "https://www.behance.net/gallery/196455061/LowPixel-Landing-Page",
    },
    {
      title: "Products Page",
      custumer: "RoseStore",
      imageUrl: "/rose.png",
      link: "https://www.behance.net/gallery/196455381/WIP-RoseStore",
    },
    {
      title: "Goal's App",
      custumer: "Winnergram",
      imageUrl: "/products/13.png",
      link: "https://www.behance.net/gallery/196456835/Winnergram",
    },
    {
      title: "Medic App",
      custumer: "Renan Pinheiro",
      imageUrl: "/products/16.png",
      link: "https://www.behance.net/gallery/196460081/Medic-App",
    },
  ];

  return (
    <div className="h-fit mt-24 pb-6 pt-5">
      <div className="absolute  left-1/2 -translate-y-1/2 w-full max-w-[200px] h-[200px] md:max-w-[400px] user-select-none center pointer-events-none bg-radial"></div>
      <div className="relative rounded-3xl border-t border-slate-6 pt-20"></div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col overflow-hidden gap-5 items-center mb-10">
          <h2 className="w-full mb-2 text-center text-[3rem] md:text-[3.5rem] tracking-tight leading-[120%] font-outfit bg-gradient-to-r from-white via-zinc-300 to-zinc-400 inline-block text-transparent bg-clip-text">
            Nossos <br />
            últimos trabalhos
          </h2>
          <p className="text-zinc-400 md:w-8/12 text-center text-lg">
          Veja os últimos cases em que trabalhamos, dedicando muito a 
          cada detalhe para que a experiência dos usuários seja incrível.


          </p>
        </div>

        <div className="flex gap-2 flex-wrap  w-full justify-center">
          {projects.map((project, key: number) => (
            <a href={project.link} target="_blank">
              <DirectionAwareHover
                key={key}
                className="w-full md:w-96"
                childrenClassName="w-full md:w-96"
                imageClassName="object-cover h-full w-full"
                imageUrl={project.imageUrl}
              >
                <p className="font-bold text-xl">{project.title}</p>
                <p className="font-normal text-sm">{project.custumer}</p>
              </DirectionAwareHover>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
