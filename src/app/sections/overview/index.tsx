import OverviewAnnunce from "./overview-annunc";
import { OverviewFooter } from "./overview-footer";
import { GlobeOverview } from "./overview-globe";

export default function Overview() {
  return (
    <div className="w-full h-screen flex justify-center border-b">
      <div className="absolute w-full h-full flex -z-50">
        <video
          src="/background.webm"
          itemType="video/webm"
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
        />
      </div>

      <div className="absolute pointer-events-none z-45 inset-0 flex items-center justify-center bg-black/80"></div>

      <div className="xl:w-8/12 w-full h-full flex flex-col gap-2 justify-center">
        <div className="z-40">
          <OverviewAnnunce />
          <GlobeOverview />

          <OverviewFooter />
        </div>
      </div>
    </div>
  );
}
