import { motion } from "motion/react";
import { ChevronRightLinearIcon } from "../components/icons";
import { ExpoLogo, ReactNativeLogo } from "../components/svgs";
import { Button } from "../components/ui/button";
import Link from "next/link";

const TechnologyCardData = [
  {
    logo: <ExpoLogo  width={200}/>,
    link: "",
  },
  {
    logo: <ReactNativeLogo />,
    link: "",
  },
];
export const TechnologySection = () => {
  return (
    <section>
      <div className=" md:pl-3  min-h-screen pt-10 ">
        <span className="text-[20px] md:text-[40px] text-cyan-900 pl-3">
          Make your UI with.
        </span>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 mt-10 mx-2">
          {TechnologyCardData.map((el, id) => {
            return <TechnologyCard icon={el.logo} link={el.link} />;
          })}
        </div>
      </div>
    </section>
  );
};

export const TechnologyCard = ({
  icon,
  link,
}: {
  icon: React.ReactNode;
  link: string;
}) => {
  return (
    <div className="w-full h-60 border rounded-[4px] ">
      <div className="p-10 mx-auto dark:bg-white/80">{icon}</div>
      <Button className="pl-3 ml-3 size-10 mt-1">
        <motion.p
          whileHover={{
            rotate: -20,
          }}
          transition={{
            duration: 0.3,
            ease: "linear",
          }}
        >
          <Link href={link}>
            <ChevronRightLinearIcon />
          </Link>
        </motion.p>
      </Button>
    </div>
  );
};
