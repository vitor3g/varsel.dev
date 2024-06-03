import { TooltipProvider } from "@/components/ui/tooltip";
import { Quality } from "./sections/quality/quality";
import Overview from "./sections/overview";
import Products from "./sections/products/products";
import { YourControl } from "./sections/your-control/your-control";
import { Testimonials } from "./sections/testmonails/testmonails";
import { ImagineApps } from "./sections/imagine-apps/imagine-apps";
import { Chose } from "./sections/chose/chose";
import { CreateBudget } from "./sections/create-budget/create-budget";
import { DesignByYou } from "./sections/design-by-you/design-by-you";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Overview />

      <div className="w-full flex justify-center">
        <div className="w-[97%] xl:w-9/12 flex flex-col gap-5">
          <Products />

          <YourControl />

          <TooltipProvider>
            <Quality />
          </TooltipProvider>

          <ImagineApps />

          <Chose />

          <DesignByYou />

          <Testimonials />
          <CreateBudget />
        </div>
      </div>

      <div className="fixed bottom-14 w-full h-screen flex justify-end items-end  pr-10 z-50 pointer-events-none">
        <Link
          href="https://api.whatsapp.com/send?phone=5511952246273&text=Olá,%20Estou%20buscando%20um%20novo%20orçamento"
          target="_blank"
          rel="noreferrer"
          className="pointer-events-auto"
        >
          <div className="w-14 h-14 rounded-full bg-green-500 shadow-lg flex justify-center items-center pointer-events-auto">
            <img
              src="/whatsapp.svg"
              width="25"
              height="25"
              alt="WhatsApp Icon"
              className="pointer-events-auto opacity-[0.9]"
            />
          </div>
        </Link>
      </div>
    </>
  );
}
