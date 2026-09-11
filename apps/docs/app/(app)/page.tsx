import Hero from "@/src/sections/hero";
import { ComponentDemoSection } from "@/src/sections/section2";

export default function Home() {
  return (
      <div className=" min-h-screen px-2 md:px-14 ">
        <Hero />
        <ComponentDemoSection />
      </div>
  );
}
