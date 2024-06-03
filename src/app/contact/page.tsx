import { ContactForm } from "./form";

export default function Contact() {
  return (
    <div className="w-full h-screen flex justify-center bg-grid-white/[0.02]">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="w-[97%] xl:w-9/12 flex flex-col xl:flex-row space-y-14 xl:space-y-0 xl:space-x-32 justify-center place-items-center">
        <div className="flex w-full flex-col justify-center xl:block xl:w-5/12">
          <h1 className="font-outfit text-center xl:text-left  text-[3rem] xl:text-[4rem] xl:text-2xl leading-[3.35rem] xl:leading-[4rem] tracking-tight font-gradient">
            Mais de 270 empresas trabalham com a varsel.
          </h1>
          <span className="text-zinc-400 text-center xl:text-left text-md xl:text-lg">
            Transforme seus sonhos em realidade com um passo de cada vez.
            Permita-nos fazer parte dessa jornada. Faça um orçamento conosco e
            descubra como podemos trazer suas ideias à vida, superando
            expectativas e criando soluções sob medida para você.
          </span>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
