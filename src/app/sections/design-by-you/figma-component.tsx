import Image from "next/image";
import { ChevronDown, MousePointer2 } from "lucide-react";
import { FaFigma } from "react-icons/fa";
import { PiHashStraightLight } from "react-icons/pi";
import { RiCheckboxBlankLine } from "react-icons/ri";
import { FiPenTool } from "react-icons/fi";
import { TfiText } from "react-icons/tfi";
import { TbAppsFilled } from "react-icons/tb";
import { RxHand } from "react-icons/rx";
import { IoChatbubbleOutline } from "react-icons/io5";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { RiCodeSSlashFill } from "react-icons/ri";
import { IoPlayOutline } from "react-icons/io5";
import { FollowerPointerCard } from "@/components/aceternity/following-pointer";
import {
  MdAlignVerticalBottom,
  MdAlignVerticalCenter,
  MdAlignVerticalTop,
  MdOutlineSearch,
} from "react-icons/md";
import {
  MdAlignHorizontalLeft,
  MdAlignHorizontalCenter,
  MdAlignHorizontalRight,
} from "react-icons/md";
import { LuAlignVerticalSpaceAround } from "react-icons/lu";
import { TbAngle } from "react-icons/tb";
import { MdFilterCenterFocus } from "react-icons/md";
import { MdOutlineRoundedCorner } from "react-icons/md";
import { MdOutlineDesignServices } from "react-icons/md";
import { LiaTintSolid } from "react-icons/lia";
import { LuEye } from "react-icons/lu";
import { BsFullscreen } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { RiSubtractFill } from "react-icons/ri";

export function FigmaComponent() {
  return (
    <div className="w-full flex-col mt-10">
      <div className="w-full h-9 bg-black border-t border-l border-r rounded-t-lg flex place-items-center">
        <div className="flex gap-2 pl-5">
          <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
        </div>
      </div>
      <div className="h-[45rem] w-full flex flex-col overflow-hidden">
        <header className="w-full h-12 p-2 border flex justify-between">
          <div className="flex gap-5 items-center">
            <button className="flex items-center gap-2">
              <FaFigma className="text-[#777E90] cursor-pointer" size={17} />
              <ChevronDown
                className="text-[#777E90] cursor-pointer"
                size={12}
              />
            </button>

            <div className="hidden md:flex gap-2">
              <button className="flex items-center gap-2">
                <MousePointer2
                  className="text-[#777E90] cursor-pointer"
                  size={17}
                />
                <ChevronDown
                  className="text-[#777E90] cursor-pointer"
                  size={12}
                />
              </button>

              <button className="flex items-center gap-2">
                <PiHashStraightLight
                  className="text-[#777E90] cursor-pointer"
                  size={17}
                />
                <ChevronDown
                  className="text-[#777E90] cursor-pointer"
                  size={12}
                />
              </button>

              <button className="flex items-center gap-2">
                <RiCheckboxBlankLine
                  className="text-[#777E90] cursor-pointer"
                  size={17}
                />
                <ChevronDown
                  className="text-[#777E90] cursor-pointer"
                  size={12}
                />
              </button>

              <button className="flex items-center gap-2">
                <FiPenTool
                  className="text-[#777E90] cursor-pointer"
                  size={17}
                />
                <ChevronDown
                  className="text-[#777E90] cursor-pointer"
                  size={12}
                />
              </button>

              <TfiText className="text-[#777E90] cursor-pointer" size={17} />
              <TbAppsFilled
                className="text-[#777E90] cursor-pointer"
                size={17}
              />
              <RxHand className="text-[#777E90] cursor-pointer" size={17} />
              <IoChatbubbleOutline
                className="text-[#777E90] cursor-pointer"
                size={17}
              />
            </div>
          </div>

          <div className="flex justify-center">
            <p className="flex items-center gap-1 font-normal text-zinc-400">
              Drafts /
              <span className="flex items-center gap-2 text-zinc-100 cursor-pointer">
                FiveM
                <ChevronDown className="text-zinc-100" size={12} />
              </span>
            </p>
          </div>
          <div className="flex gap-2">
            <div className="flex rounded-full bg-white/10 items-center gap-2 p-1">
              <Avatar className="w-7 h-7">
                <AvatarFallback className="bg-[#0C8CE9]">V</AvatarFallback>
              </Avatar>
              <ChevronDown className="text-zinc-100" size={15} />
            </div>

            <div className="flex w-12 bg-white/10 rounded-full items-center">
              <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center">
                <RiCodeSSlashFill className="text-zinc-100/50" size={17} />
              </div>
            </div>
            <button className="flex items-center gap-2">
              <IoPlayOutline
                className="text-[#777E90] cursor-pointer"
                size={17}
              />
              <ChevronDown
                className="text-[#777E90] cursor-pointer"
                size={12}
              />
            </button>

            <button className="flex items-center gap-2">
              <small className="text-white/80">100%</small>
              <ChevronDown
                className="text-[#777E90] cursor-pointer"
                size={12}
              />
            </button>
          </div>
        </header>
        <div className="w-full h-[50rem] flex justify-between border-b border-l border-r">
          <aside className="w-96 h-full border-r hidden md:block">
            <div className="h-10 border-b flex justify-between gap-2 items-center p-2">
              <div className="flex gap-5 items-center">
                <MdOutlineSearch className="text-[#777E90] cursor-pointer" />
                <small className="text-white/80">Layers</small>
                <small className="text-white/50">Assets</small>
              </div>

              <button className="flex items-center gap-2">
                <small className="text-white/80">Page 1</small>
                <ChevronDown
                  className="text-[#777E90] cursor-pointer"
                  size={12}
                />
              </button>
            </div>
          </aside>
          <FollowerPointerCard
            className="w-full flex flex-col justify-center bg-grid-white/[0.05]"
            title={
              <TitleComponent
                title={blogContent.author}
                avatar={blogContent.authorAvatar}
              />
            }
          >
            <div className="w-full flex flex-col justify-center bg-grid-white/[0.05]"></div>
            <FollowingPointerDemo />
          </FollowerPointerCard>
          <aside className="w-96 h-full border-l hidden md:block">
            <div className="border-b flex-col space-y-3 p-2">
              <div className="flex gap-2 items-center">
                <small className="text-white/80">Design</small>
                <small className="text-white/50">Prototype</small>
              </div>

              <div className="flex justify-between">
                <MdAlignHorizontalLeft
                  className="text-[#777E90] cursor-pointer"
                  size={17}
                />

                <MdAlignHorizontalCenter
                  className="text-[#777E90] cursor-pointer"
                  size={17}
                />

                <MdAlignHorizontalRight
                  className="text-[#777E90] cursor-pointer"
                  size={17}
                />

                <MdAlignVerticalTop
                  className="text-[#777E90] cursor-pointer"
                  size={17}
                />

                <MdAlignVerticalCenter
                  className="text-[#777E90] cursor-pointer"
                  size={17}
                />

                <MdAlignVerticalBottom
                  className="text-[#777E90] cursor-pointer"
                  size={17}
                />

                <button className="flex items-center gap-2">
                  <LuAlignVerticalSpaceAround
                    className="text-[#777E90] cursor-pointer"
                    size={17}
                  />
                  <ChevronDown
                    className="text-[#777E90] cursor-pointer"
                    size={12}
                  />
                </button>
              </div>
            </div>

            <div className="h-32 border-b p-6 flex flex-col justify-center space-y-5">
              <div className="relative grid grid-cols-2 gap-20">
                <div className="grid grid-cols-2 gap-y-5 gap-24">
                  <div className="cursor-pointer w-5 h-5 flex gap-2">
                    <p className="text-white/90 text-xs">X</p>
                    <p className="text-white/40 text-xs">0</p>
                  </div>

                  <div className="cursor-pointer w-5 h-5 flex gap-2">
                    <p className="text-white/90 text-xs">Y</p>
                    <p className="text-white/40 text-xs">0</p>
                  </div>

                  <div className="cursor-pointer w-5 h-5 flex gap-2">
                    <p className="text-white/90 text-xs">W</p>
                    <p className="text-white/40 text-xs">0</p>
                  </div>

                  <div className="cursor-pointer w-5 h-5 flex gap-2">
                    <p className="text-white/90 text-xs">H</p>
                    <p className="text-white/40 text-xs">0</p>
                  </div>
                </div>

                <div className="absolute right-0">
                  <div className="flex flex-col gap-5">
                    <MdFilterCenterFocus className="text-white/70 cursor-pointer" />
                    <MdOutlineDesignServices className="text-white/70 cursor-pointer" />
                  </div>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex gap-2 items-center">
                  <TbAngle
                    className="text-[#777E90] cursor-pointer"
                    size={15}
                  />
                  <p className="text-white/40 text-xs">0°</p>
                </div>

                <div className="flex gap-2 items-center">
                  <MdOutlineRoundedCorner
                    className="text-[#777E90] cursor-pointer"
                    size={15}
                  />
                  <p className="text-white/40 text-xs">0</p>
                </div>
              </div>
            </div>

            <div className="h-fit border-b p-3 flex flex-col gap-3">
              <p className="text-xs text-white/80">Layer</p>
              <div className="flex justify-between gap-1 items-center">
                <div className="flex gap-2 items-center">
                  <LiaTintSolid
                    className="text-[#777E90] cursor-pointer"
                    size={20}
                  />
                  <p className="text-xs text-white/70">Pass through</p>
                  <ChevronDown
                    className="text-[#777E90] cursor-pointer"
                    size={12}
                  />
                </div>
                <div className="flex gap-2">
                  <p className="text-xs text-white/70">100%</p>
                  <LuEye className="text-[#777E90] cursor-pointer" size={17} />
                </div>
              </div>
            </div>

            <div className="h-fit border-b p-3 flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <p className="text-xs text-white/80">Fill</p>
                <div className="flex gap-3">
                  <BsFullscreen
                    className="text-[#777E90] cursor-pointer"
                    size={12}
                  />
                  <FaPlus className="text-[#777E90] cursor-pointer" size={12} />
                </div>
              </div>
              <div className="flex justify-between gap-1 items-center">
                <div className="flex space-x-2 gap-2 items-center">
                  <span className="w-4 h-4 bg-zinc-400"></span>
                  <small className="text-white/90">D9D9D9</small>
                </div>
                <small className="text-white/80">100%</small>
                <div className="flex gap-1">
                  <LuEye className="text-[#777E90] cursor-pointer" size={17} />
                  <RiSubtractFill
                    className="text-[#777E90] cursor-pointer"
                    size={17}
                  />
                </div>
              </div>
            </div>

            <div className="h-fit border-b p-3 flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <p className="text-sm text-white/50">Stroke</p>
                <FaPlus className="text-[#777E90] cursor-pointer" size={12} />
              </div>
            </div>

            <div className="h-fit border-b p-3 flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <p className="text-sm text-white/50">Effects</p>
                <FaPlus className="text-[#777E90] cursor-pointer" size={12} />
              </div>
            </div>

            <div className="h-fit border-b p-3 flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <p className="text-sm text-white/50">Export</p>
                <FaPlus className="text-[#777E90] cursor-pointer" size={12} />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export function FollowingPointerDemo() {
  return (
    <div className="w-80 mx-auto">
      <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
        <div className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
          <Image
            src={blogContent.image}
            alt="thumbnail"
            layout="fill"
            objectFit="cover"
            className={`group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200 `}
          />
        </div>
        <div className=" p-4">
          <h2 className="font-bold my-4 text-lg text-zinc-700">
            {blogContent.title}
          </h2>
          <h2 className="font-normal my-4 text-sm text-zinc-500">
            {blogContent.description}
          </h2>
          <div className="flex flex-row justify-between items-center mt-10">
            <span className="text-sm text-gray-500">{blogContent.date}</span>
            <div className="relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs">
              Ler Sobre
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const blogContent = {
  slug: "amazing-tailwindcss-grid-layouts",
  author: "Vítor Ribeiro",
  date: "12 de Março, 2024",
  title: "Simples componente do figma",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  image: "/everest.webp",
  authorAvatar: "/icons/amanda.webp",
};
const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex space-x-2 items-center">
    <Image
      src={avatar}
      height="20"
      width="20"
      alt="thumbnail"
      objectFit="contain"
      className="rounded-full border-2 border-white"
    />
    <p>{title}</p>
  </div>
);
