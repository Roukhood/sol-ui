"use client";
import * as React from "react";
import { IconLayoutSidebarFilled } from "@tabler/icons-react";
import { cn } from "@/lib/utils/cn";
import { componentItems } from "@sol-ui/bank-kit";
import Link from "next/link";
import { Heading } from "@sol-ui/components";
type RegistryItem = {
  title: string;
  category: string;
  slug: string;
};

export const SideBarDocs = () => {
  const [sideBarIsOpen, setSideBarIsOpen] = React.useState<boolean>(true);

  const grouped: Record<string, RegistryItem[]> = {};

  componentItems.forEach((item) => {
    if (!grouped[item.category]) {
      grouped[item.category] = [];
    }
    grouped[item.category].push(item);
  });

  return (
    <div className="sticky top-[calc(7rem+0.6rem)] z-30 hidden h-[calc(100svh-10rem)] overflow-hidden overscroll-none lg:flex scroll-animation">
      <div className="pointer-events-none absolute top-0 right-0 left-0 h-10 bg-linear-to-b from-background to-transparent z-10" />
      <div className="pointer-events-none absolute bottom-0 right-0 left-0 h-10 bg-linear-to-t from-background to-transparent z-10" />
      <div
        className={cn(
          "w-[550px] relative border-x py-10 transition-all scroll-smooth overflow-y-scroll scrollbar-none ",
        )}
      >
        <Heading className="font-normal text-sm px-2 py-1 my-1 ml-8 hover:bg-background-inverse/10 active:bg-background-inverse/10 w-fit rounded-md transition-all ease-linear duration-[200ms]">
          <Link href={`/bank-kit/docs/bank/Installation`}>
            Introduction
          </Link>
        </Heading>

        {sideBarIsOpen && (
          <div className="pl-8 overflow-hidden">
            {Object.entries(grouped).map(([category, item]) => {
              return (
                <div key={category} className="">
                  <div
                    data-slot="heading"
                    className="p-2  text-(--text-primary)  text-sm flex items-center gap-2 active:translate-y-px select-none transition-all whitespace-nowrap rounded-lg"
                  >
                    {category}
                  </div>
                  {item.map((el, id) => {
                    return (
                      <Heading key={id} className="font-normal text-sm px-2 py-1 my-1 hover:bg-background-inverse/10 active:bg-background-inverse/10 w-fit rounded-md transition-all ease-linear duration-[200ms]">
                        <Link href={`/bank-kit/docs/bank/${el.slug}`}>
                          {el.title}
                        </Link>
                      </Heading>
                    );
                  })}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
