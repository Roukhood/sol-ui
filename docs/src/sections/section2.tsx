import { useState } from "react";
import { Button } from "../components/ui/button";
import { ListOfComponents } from "../components/docs/components-list";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";

export const ComponentDemoSection = () => {
  return (
    <section className="min-h-screen px-3 pt-10 mt-10">
      <div className="grid grid-cols-1  lg:grid-cols-2 mx-auto gap-4 md:w-[300px] lg:w-[800px] ">
        {ListOfComponents.map((el, id) => {
          return (
            <Card
              name={el.name}
              componentSrc={el.componentDocsUrl}
              imgSrc={el.componentDemoPhotoUrl}
              imgClassName={el.imgClassName}
            />
          );
        })}
      </div>
    </section>
  );
};

export const Card = ({
  name,
  imgSrc,
  componentSrc,
  imgClassName
}: {
  name: string;
  imgSrc: string;
  componentSrc: string;
  imgClassName ?: string
}) => {
  const [showComponent, setShowComponent] = useState(false);
  return (
    <Link href={componentSrc}>
      <div className="h-60 w-full border rounded-[4px] col-span-1 relative overflow-hidden group mx-auto hover:bg-black/5 dark:hover:bg-white/5">
        <div className=" h-[200px] overflow-hidden p-3">
          <img
            src={imgSrc}
            className={cn("object-cover  h-full w-full " ,imgClassName)}
          />
        </div>
        <div className="absolute bottom-0 w-full border-t flex justify-between ">
          <Button className="border-0">
            <p>{name}</p>
          </Button>
        </div>
      </div>
    </Link>
  );
};
