"use client";

import * as React from "react";
import { NavigationMenuDemo, NavigationMini } from "./header-navigation";
import { Button } from "../ui/button";
import { GitHubLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    if (pathname == "/contact" || pathname == "/jobs") {
      setScrolled(true);
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed w-full top-0 z-50">
      <Slide direction="down" duration={2000} triggerOnce={true}>
        <div
          className={`flex justify-center transition-all duration-500 ease-in-out border-b border-zinc-800 ${
            scrolled
              ? "bg-gray-950/10 backdrop-blur-md border-opacity-100"
              : "sm:bg-gray-950/10 backdrop-blur-md border-opacity-100 md:border-opacity-0"
          }`}
        >
          <nav
            className={cn(
              "flex w-10/12 justify-between transition-opacity duration-300 ease-in-out"
            )}
          >
            <div
              className={cn(
                "w-full gap-5",
                isMenuOpen ? "flex flex-col items-start" : "flex items-center"
              )}
            >
              <Link href={"/"}>
                <Image
                  src="/logo_old.png"
                  width={150}
                  height={40}
                  alt={"Logo Varsel Antiga"}
                  className="mb-2"
                />
              </Link>
              <div className="hidden lg:flex">
                <NavigationMenuDemo />
              </div>
            </div>

            <div className="hidden lg:flex gap-2 transition-opacity duration-300 ease-in-out items-center">
              <Link href="https://github.com/varselagency">
                <Button variant="ghost" size="icon">
                  <GitHubLogoIcon className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="https://twitter.com/varseldev">
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
              </Link>
              <Link href="https://instagram.com/varseldev">
                <Button variant="ghost" size="icon">
                  <InstagramLogoIcon className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <Button
              className="navbar-burger lg:hidden cursor-pointer mt-2"
              variant="ghost"
              size="icon"
              onClick={() => setMenuOpen(!isMenuOpen)}
            >
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
            </Button>
          </nav>
        </div>
      </Slide>

      {isMenuOpen && (
        <div className="md:hidden w-full h-screen bg-gray-950/10 backdrop-blur-md flex flex-col place-items-center p-5">
          <NavigationMini />
        </div>
      )}
    </div>
  );
}
