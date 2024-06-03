import { GitHubLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export default function Footer() {
  return (
    <div className="translate-y-1/5 group relative overflow-hidden">
      <footer className="bg-black w-full flex flex-wrap justify-end">
        <div className="absolute left-1/2 h-[100px] w-[70%] md:h-[300px] user-select-none center pointer-events-none  max-w-full -translate-x-1/2 -translate-y-1/2 bg-canonic"></div>

        <Separator />

        <div className="mx-auto w-full max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16">
            <div className="w-full flex justify-center md:justify-start">
              <div>
                <div className="flex w-full flex-wrap flex-col gap-5">
                  <p className="text-xs text-zinc-400 font-sans text-center md:text-start">
                    Santa Rosa, RS, Brasil
                    <br />
                    Av. Santa Cruz, 98780-750
                  </p>

                  <div className="flex gap-2 transition-opacity duration-300 ease-in-out">
                    <a href="https://github.com/varselagency">
                      <Button variant="ghost" size="icon">
                        <GitHubLogoIcon className="h-4 w-4" />
                      </Button>
                    </a>
                    <Button variant="ghost" size="icon">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        className="h-4 w-4"
                      >
                        <path
                          d="M18.2338 14.162L26.9768 4H24.9048L17.3138 12.824L11.2498 4H4.25781L13.4268 17.343L4.25781 28H6.32981L14.3458 18.682L20.7498 28H27.7428L18.2338 14.162ZM15.3968 17.461L14.4668 16.132L7.07781 5.56H10.2598L16.2238 14.092L17.1538 15.421L24.9068 26.511H21.7248L15.3968 17.461Z"
                          fill="#F8F8F8"
                        />
                      </svg>
                    </Button>
                    <a href="https://instagram.com/varseldev">
                      <Button variant="ghost" size="icon">
                        <InstagramLogoIcon className="h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="xl:block hidden">
              <p className="font-medium text-white">Empresa</p>

              <ul className="mt-2 space-y-4 text-sm">
                <li>
                  <a
                    href="/blog"
                    className="text-zinc-400 transition hover:opacity-75"
                  >
                    Blog
                  </a>
                </li>

                <li>
                  <a
                    href="/jobs"
                    className="text-zinc-400 transition hover:opacity-75"
                  >
                    Conheça o time
                  </a>
                </li>
              </ul>
            </div>
            <div className="xl:block hidden">
              <p className="font-medium text-white">Links Úteis</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="/contact"
                    className="text-zinc-400 transition hover:opacity-75"
                  >
                    Contato
                  </a>
                </li>

                <li>
                  <a
                    href="https://api.whatsapp.com/send?phone=5511952246273&text=Olá,%20Estou%20buscando%20um%20novo%20orçamento"
                    className="text-zinc-400 transition hover:opacity-75"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
            <div className="xl:block hidden">
              <p className="font-medium text-white">Legal</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="/terms/exclusive"
                    className="text-zinc-400 transition hover:opacity-75"
                  >
                    Politica de Exclusividade
                  </a>
                </li>

                <li>
                  <a
                    href="https://varsel.dev/jobs"
                    className="text-zinc-400 transition hover:opacity-75"
                  >
                    Trabalhe conosco
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <div className="mx-auto w-full max-w-screen-xl px-4 py-16">
        <p className="text-xs text-gray-500 text-center">
          &copy; {new Date().getFullYear()} Varsel Agency. Todos os direitos
          reservados.
        </p>
      </div>
    </div>
  );
}
