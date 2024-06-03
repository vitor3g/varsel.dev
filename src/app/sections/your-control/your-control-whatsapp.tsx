import Community from "@/components/icons/Community";
import Filter from "@/components/icons/Filter";
import Group from "@/components/icons/Group";
import NewChat from "@/components/icons/NewChat";
import Settings from "@/components/icons/Settings";
import Status from "@/components/icons/Status";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Pin from "@/components/icons/Pin";
import Search from "@/components/icons/Search";
import Plus from "@/components/icons/Plus";
import Microphone from "@/components/icons/Microphone";
import Smile from "@/components/icons/Smile";
import MsgClip from "@/components/icons/MsgClip";

export default function YourControlWhatsapp() {
  const chats: CardProps[] = [
    {
      avatar: "/icons/varsel.webp",
      lastMessage: "Que tal uma reunião hoje à tarde? 😉",
      name: "Varsel Agency",
      time: "15:30",
      fixed: true,
    },
    {
      avatar: "/icons/pedro.webp",
      lastMessage: "publique hoje a tarde",
      name: "Pedro",
      time: "12:30",
      fixed: true,
    },
    {
      avatar: "/icons/brasao.webp",
      lastMessage: "Vô: Neste domingo?",
      name: "Familia ❤️",
      time: "12:30",
      fixed: false,
    },
    {
      avatar: "/icons/amanda.webp",
      lastMessage: "Incrivel!!",
      name: "Amanda",
      time: "12:30",
      fixed: false,
    },
    {
      avatar: "/icons/dadf.webp",
      lastMessage: "🧐",
      name: "Pai 🤟",
      time: "12:30",
      fixed: false,
    },
    {
      avatar: "/icons/job.webp",
      lastMessage: "Certo.",
      name: "Trabalho",
      time: "12:30",
      fixed: false,
    },
    {
      avatar: "/icons/joao.webp",
      lastMessage: "Otimo, irei comunica-lo hoje sobre.",
      name: "João 👀",
      time: "12:30",
      fixed: false,
    },
    {
      avatar: "/icons/le.webp",
      lastMessage: "Pode ser as 20?",
      name: "Lê 💕",
      time: "12:30",
      fixed: false,
    },
    {
      avatar: "/icons/vitor.webp",
      lastMessage: "❤️",
      name: "Vítor Ribeiro",
      time: "15:30",
      fixed: false,
    },
    {
      avatar: "/icons/carlos.webp",
      lastMessage: "okay",
      name: "Carlos",
      time: "12:30",
      fixed: false,
    },
    {
      avatar: "/icons/vinicius.webp",
      lastMessage: "fecho",
      name: "Vinicius",
      time: "12:30",
      fixed: false,
    },
    {
      avatar: "/icons/diego.webp",
      lastMessage: "Perfeito",
      name: "Diego",
      time: "12:30",
      fixed: false,
    },
    {
      avatar: "/icons/dadf.webp",
      lastMessage: "🧐",
      name: "Pai 🤟",
      time: "12:30",
      fixed: false,
    },
  ];

  return (
    <div className="w-full flex-col mt-10">
      <div className="w-full h-9 bg-black border-t border-l border-r rounded-t-lg flex place-items-center">
        <div className="flex gap-2 pl-5">
          <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
        </div>
      </div>
      <div className="h-[45rem] w-full flex flex-shrink-0 overflow-hidden">
        <aside className="hidden md:block w-96 h-full bg-whatsapp-aside border border-r-zinc-400/30 rounded-bl-md">
          <header className="w-full h-14 bg-whatsapp-header flex justify-between place-items-center p-2">
            <div>
              <Avatar>
                <AvatarImage src="/icons/user.webp" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex gap-5">
              <Group className="text-[#777E90] cursor-pointer" />
              <Status className="text-[#777E90] cursor-pointer" />
              <Community className="text-[#777E90] cursor-pointer" />
              <NewChat className="text-[#777E90] cursor-pointer" />
              <Settings className="text-[#777E90] cursor-pointer" />
            </div>
          </header>

          <div className="w-full h-10 flex justify-between p-2">
            <div className="relative w-full">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 mt-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block p-2 pl-10 w-full text-sm text-white outline-none bg-whatsapp-input rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Pesquisar ou começar uma nova conversa"
              />
            </div>

            <div className="w-10 h-10 flex justify-center items-center">
              <Filter className="text-[#777E90] cursor-pointer" />
            </div>
          </div>
          <div className="w-full h-full mt-2 flex flex-wrap flex-shrink-0 flex-row overflow-auto gap-2 justify-center scrollbar-thin">
            {chats.map((chat) => (
              <Card key={chat.name} {...chat} />
            ))}
          </div>
        </aside>

        <div className="flex flex-1 flex-col rounded-br-md border">
          <main className="flex-1 flex-col bg-black bg-cover justify-between">
            <header className="w-full h-14 bg-whatsapp-header flex justify-between place-items-center p-2 border-b">
              <div className="flex gap-3">
                <Avatar>
                  <AvatarImage src="/icons/varsel.webp" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <p className="text-whatsapp-text">Varsel Agency</p>
                  <small className="text-whatsapp-text/70 -mt-1">Online</small>
                </div>
              </div>

              <div className="flex gap-2">
                <Search className="text-[#777E90] cursor-pointer" />
                <Settings className="text-[#777E90] cursor-pointer" />
              </div>
            </header>

            <div className="relative h-full w-full">
              <div className="absolute inset-x-0 bottom-0 mb-14">
                <div className="p-5 flex flex-col gap-2">
                  <div className="w-full flex justify-start">
                    <MsgClip className="hidden md:block text-whatsapp-chat-message" />
                    <div className="max-w-96 bg-whatsapp-chat-message rounded-r-lg rounded-bl-lg overflow-hidden">
                      <small className="block max-w-full text-whatsapp-chat-text text-sm break-all p-3">
                        Bom dia, seu projeto <strong>mobile</strong> ganhou uma
                        versão estável e estamos ansiosos para compartilhar o
                        resultado!
                      </small>
                    </div>
                  </div>

                  <div className="md:pl-2 w-full flex justify-start">
                    <div className="max-w-96 bg-whatsapp-chat-message rounded-r-lg rounded-bl-lg overflow-hidden">
                      <small className="block max-w-full text-whatsapp-chat-text text-sm break-all p-3">
                        Que tal uma reunião hoje à tarde? 🎉
                      </small>
                    </div>
                  </div>

                  <div className="w-full flex justify-end">
                    <div className="max-w-64 bg-whatsapp-chat-message-me rounded-lg overflow-hidden">
                      <small className="block max-w-full text-whatsapp-chat-text text-sm break-all p-3">
                        Ótimo, me envie o link do meet! 😉
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <footer className="mt-auto flex justify-between place-items-center p-2 bg-whatsapp-chat-header rounded-br-md border-t">
            <div className="w-10 flex justify-center">
              <Plus className="text-[#777E90] cursor-pointer" />
            </div>
            <div className="relative w-full pl-3 pr-5">
              <div className="flex absolute inset-y-0 left-0 items-center pl-6 pointer-events-none">
                <Smile className="text-[#777E90] cursor-pointer" />
              </div>
              <input
                type="search"
                id="default-search"
                className="block p-3 pl-12 w-full text-sm text-white-900 outline-none bg-whatsapp-chat-input rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Digite uma mensagem"
              />
            </div>
            <div className="w-10 h-10 flex items-center">
              <Microphone className="text-[#777E90] cursor-pointer" />
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export type CardProps = {
  name: string;
  lastMessage: string;
  avatar: string;
  time: string;
  fixed: boolean;
};
export function Card(params: CardProps) {
  return (
    <div className="w-full hover:bg-white/10 transition p-3 flex justify-between cursor-pointer border-b border-white/10">
      <div className="flex gap-3">
        <Avatar>
          <AvatarImage src={params.avatar} alt={params.avatar} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className="flex flex-col">
          <p className="text-whatsapp-text">{params.name}</p>
          <small className="text-whatsapp-text/70">{params.lastMessage}</small>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-2">
        <small className="text-whatsapp-text/60 text-xs">{params.time}</small>
        {params.fixed && <Pin className="text-[#777E90] cursor-pointer" />}
      </div>
    </div>
  );
}
