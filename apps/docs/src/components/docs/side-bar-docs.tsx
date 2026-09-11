"use client";
import * as React from "react";
import { IconLayoutSidebarFilled } from "@tabler/icons-react";
import { cn } from "@/lib/utils/cn";
import { registry } from "@sol-ui/bank-kit";
import Link from "next/link";
import { Heading } from "../../../../packages/helper-ui/www/components/headings";

type RegistryItem = {
  title: string;
  category: string;
  slug: string;
};

export const SideBarDocs = () => {
  const [sideBarIsOpen, setSideBarIsOpen] = React.useState<boolean>(true);

  const grouped: Record<string, RegistryItem[]> = {};

  registry
    .filter((x) => x.type == "component")
    .forEach((item) => {
      // creating category if dont present in grouped
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
          "w-96 relative border-x py-20 transition-all scroll-smooth overflow-y-scroll scrollbar-none ",
        )}
      >
        <div
          data-slot="heading"
          className="pl-8 py-2 text-(--text-primary) hover:text-foreground text-sm flex items-center gap-2 active:translate-y-px select-none transition-all whitespace-nowrap rounded-lg"
        >
          <Link href={`/bank-kit/docs/bank-kit/Installation`}>
            Introduction
          </Link>
        </div>

        {sideBarIsOpen && (
          <div className="pl-8 overflow-hidden">
            {Object.entries(grouped).map(([category, item]) => {
              return (
                <div key={category} className="">
                  <Heading className="py-0">{category}</Heading>
                  {item.map((el, id) => {
                    return (
                      <div
                        key={id}
                        data-slot="heading"
                        className="py-1 text-(--text-primary) hover:text-foreground text-sm flex items-center gap-2 active:translate-y-px select-none transition-all whitespace-nowrap rounded-lg"
                      >
                        <Link key={id} href={`/bank-kit/docs/bank/${el.slug}`}>
                          {el.title}
                        </Link>
                      </div>
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
