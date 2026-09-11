"use client";
import * as React from "react";
import {
  IconHelp,
  IconHome,
  IconLayoutSidebarFilled,
  IconNotification,
  IconSettings,
  IconTransfer,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils/cn";

export const SideBar = () => {
  const [sideBarIsOpen, setSideBarIsOpen] = React.useState<boolean>(true);
  return (
    <div className="w-full h-62 max-w-sm flex gap-4 overflow-hidden">
      <div
        className={cn(
          sideBarIsOpen
            ? "w-48 h-full relative border rounded-lg pb-5 ease-in transition-all "
            : "w-10 h-full relative border rounded-lg ease-out transition-all pb-5 ",
        )}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
            setSideBarIsOpen((prev) => !prev);
          }}
          className={cn(
            sideBarIsOpen
              ? "absolute right-3 top-2 "
              : "absolute top-2 right-2.5",
          )}
        >
          <IconLayoutSidebarFilled size={16} />
        </div>

        {sideBarIsOpen && (
          <div className="pt-8 px-1">
            {[
              { name: "Dashboard", icon: <IconHome size={16} /> },
              { name: "Transactions", icon: <IconTransfer size={16} /> },
              { name: "Notifications", icon: <IconNotification size={16} /> },
              { name: "Settings", icon: <IconSettings size={16} /> },
              { name: "Help center", icon: <IconHelp size={16} /> },
            ].map((el, id) => {
              return (
                <div
                  key={id}
                  data-slot="heading"
                  className="pl-2 py-2 text-(--text-primary) text-sm flex items-center gap-2 hover:bg-[--hover-secondary] active:bg-[--hover-secondary] hover:text-foreground active:translate-y-px select-none transition-all whitespace-nowrap rounded-lg"
                >
                  {el.icon} {el.name}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {!sideBarIsOpen && (
        <div className="w-full h-full ">
          <div className="flex gap-2 py-1">
            <div className="w-full py-2 bg-background-inverse/5  rounded-lg"></div>
            <div className="w-full py-2  bg-background-inverse/5  rounded-lg"></div>
          </div>
          <div className="w-full py-2 bg-background-inverse/5   rounded-lg my-1"></div>
          <div className="flex gap-1 py-1">
            <div className="w-full py-2  bg-background-inverse/5 rounded-lg"></div>
            <div className="w-full py-2 bg-background-inverse/5   rounded-lg"></div>
          </div>
          <div className="w-full py-10 bg-background-inverse/5  rounded-lg my-1"></div>
          <div className="w-full py-2 bg-background-inverse/5 rounded-lg my-1"></div>
          <div className="w-full py-7 bg-background-inverse/5   rounded-lg my-px"></div>
        </div>
      )}
    </div>
  );
};
