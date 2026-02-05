import { Button } from "@/src/components/ui/button";
import { MeshGradient } from "@paper-design/shaders-react";
export const CommunitySection = () => {
  return (
    <section>
      <div className="pl-3  min-h-screen pt-20 relative">
        <div className="absolute z-20 pl-3">
          <h1 className=" tracking-tight">
            <span className="text-[20px] md:text-[40px] text-cyan-900">
              The World of UI, Pixels.
            </span>
            <br />
            <span className="text-[20px] md:text-[40px] text-cyan-900">
              Join us on.
            </span>
          </h1>

          <div className="mt-10 gap-4 flex items-center">
            <Button className="text-24 font-semibold border py-2 px-3 rounded-[4px] w-32 h-10   relative flex items-center justify-center bg-[#FFBB00] hover:bg-[#FFBB00]/90 text-white cursor-pointer">
              <p>Discord</p>
            </Button>
            <Button className="text-24 font-semibold  py-2 px-3 rounded-[4px]   w-32 h-10 flex items-center justify-center group cursor-pointer gap-2 border border-neutral-200">
              <span className="">Twitter</span>
            </Button>
          </div>
        </div>
        <div className="absolute top-0 z-10 w-[344px] overflow-hidden md:w-full mx-auto mesh-gradient">
          <MeshGradient
            width={1210}
            height={400}
            colors={["#e0eaff", "#838391", "#ffbb00", "#9f50d3"]}
            distortion={0.8}
            swirl={0.1}
            grainMixer={0}
            grainOverlay={0}
            speed={1}
          />
        </div>
      </div>
    </section>
  );
};
