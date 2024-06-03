"use client";

import Image from "next/image";
import Spline from "@splinetool/react-spline";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { MdRefresh } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import { LuPanelRight } from "react-icons/lu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { TbDotsVertical } from "react-icons/tb";
import { FiInfo } from "react-icons/fi";
import { MdGTranslate } from "react-icons/md";
import { FaRegStar } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { Tabs } from "@/components/aceternity/tabs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ImagineApps() {
  const tabs = [
    {
      title: "Home",
      value: "product",
    },
    {
      title: "Services",
      value: "services",
    },
    {
      title: "Playground",
      value: "playground",
    },
    {
      title: "Blog",
      value: "content",
    },
    {
      title: "Contact",
      value: "random",
    },
  ];

  return (
    <div className="h-fit w-full flex flex-col justify-center mt-28">
      <div className="flex flex-col items-center gap-1">
        <Image src="/icons/cloud.webp" width={200} height={200} alt="CPU" />
        <h2 className="w-full mb-2 text-center text-[3rem] md:text-[3.5rem] tracking-tight leading-[120%] font-outfit -mt-10 bg-gradient-to-r from-white via-zinc-300 to-zinc-400 inline-block text-transparent bg-clip-text">
          Inovação{" "}
          <span className="inline leading-[0] bg-gradient-to-br bg-clip-text text-transparent from-[#FAAF39] via-[#FCBD3F] to-[#FFDC4A]">
            Digital
          </span>
        </h2>

        <p className="text-zinc-400 md:w-8/12 text-center text-lg">
          Comprometidos com a inovação e a excelência, nos especializamos no
          desenvolvimento de sites e plataformas personalizadas e pensadas para
          facilitar o sucesso de nossos clientes no ambiente digital.
        </p>
      </div>

      <div className="w-full flex-col mt-10">
        <div className="w-full h-9 bg-black border-t border-l border-r rounded-t-lg flex place-items-center">
          <div className="flex gap-2 pl-5">
            <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
          </div>
        </div>
        <div className="border p-2 flex justify-between gap-2">
          <div className="flex h-7 place-items-center gap-2">
            <FaArrowLeft className="text-[#777E90] cursor-pointer" />
            <FaArrowRight className="text-[#777E90] cursor-pointer" />
            <MdRefresh className="text-[#777E90] cursor-pointer" />
          </div>
          <div className="w-full h-7 rounded-lg bg-zinc-900 flex place-items-center justify-between overflow-hidden">
            <div className="flex items-center gap-2 pl-2">
              <FiInfo className="text-[#949db3]" />
              <small className="text-white/70">
                https://preview.varsel.dev/costumer
              </small>
            </div>

            <div className="flex h-7 place-items-center gap-3 pr-2 justify-center">
              <MdGTranslate className="text-[#949db3]" />
              <FaRegStar className="text-[#949db3]" />
            </div>
          </div>
          <div className="flex h-7 place-items-center gap-3 justify-center">
            <FiDownload className="text-[#777E90] cursor-pointer" />
            <LuPanelRight className="text-[#777E90] cursor-pointer" />

            <Avatar className="w-6 h-6">
              <AvatarFallback className="text-[10px] bg-[#C2185B]">
                V
              </AvatarFallback>
            </Avatar>
            <TbDotsVertical className="text-[#777E90] cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="relative border-b border-l border-r h-[40rem] bg-grid-white/[0.03] overflow-hidden">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <header className="relative flex justify-between place-items-center p-5">
          <div className="hidden xl:flex place-items-center gap-10 pl-2">
            <Tabs tabs={tabs} />
          </div>

          <div className="xl:hidden place-items-center gap-10 pl-2">
            <a className="navbar-burger self-center lg:hidden">
              <svg
                className="h-6 w-6 hover:text-gray-200"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </a>
          </div>

          <div>
            <div className="hidden min-[425px]:flex items-center gap-4">
              <Link
                href="/login"
                className="text-sm text-[#888B91] hover:text-zinc-400 font-semibold"
              >
                Sign in
              </Link>

              <Button variant="default" className="rounded-full gap-1 text-sm">
                Get Started
                <IoIosArrowForward />
              </Button>
            </div>
          </div>
        </header>

        <div className="relative w-full h-full  flex justify-center">
          <div className="w-full flex flex-col p-20 items-center md:items-start">
            <h1 className="font-outfit font-medium text-center md:text-left text-[2rem] md:text-6xl md:leading-[5rem] tracking-tight bg-gradient-to-r from-white via-zinc-300 to-zinc-400 inline-block text-transparent bg-clip-text">
              Aplicativos que crescem com você.
            </h1>
            <p className="w-full text-white/50 mb-8 mt-4 text-center md:text-left text-sm md:text-base font-normal">
              Explore o potencial ilimitado com aplicativos que crescem com o
              seu negócio. Plataformas robustas, adaptáveis e prontas para
              atender a demanda dinâmica do mercado. Transforme desafios em
              oportunidades escalando com inteligência e eficiência.
            </p>

            <div className="flex items-center gap-4">
              <Button variant="default" className="rounded-full gap-1 text-sm">
                Get Started
                <IoIosArrowForward />
              </Button>
              <a className="text-sm text-[#888B91] hover:text-zinc-400 font-semibold cursor-pointer">
                Documentation
              </a>
            </div>
          </div>

          <div className="hidden w-full h-full xl:flex">
            <Spline scene="https://prod.spline.design/Q3OiE1PRxt1IYmPh/scene.splinecode" />
          </div>
        </div>
      </div>
    </div>
  );
}
