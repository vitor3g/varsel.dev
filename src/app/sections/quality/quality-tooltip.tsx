import Image from "next/image";

import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

export type QualityTooltipProps = {
  tooltip: string;
  icon: string;
  span: string;
};

export default function QualityTooltip(PARAMS: QualityTooltipProps) {
  return (
    <Tooltip>
      <TooltipTrigger>
        <li className="flex w-fit h-12 items-center gap-x-3.5 rounded-full border border-white border-opacity-[0.13] px-[21px] md:h-11 md:gap-5 md:gap-x-3 md:px-5 sm:h-8 sm:gap-x-2.5 sm:px-[11px] hover:bg-white/20 cursor-pointer transition-all">
          <Image src={PARAMS.icon} width={20} height={20} alt="Pull Request" />
          <span className="leading-none sm:text-14">{PARAMS.span}</span>
        </li>
      </TooltipTrigger>
      <TooltipContent>
        <p>{PARAMS.tooltip}</p>
      </TooltipContent>
    </Tooltip>
  );
}
