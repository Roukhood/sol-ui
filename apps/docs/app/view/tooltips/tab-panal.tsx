"use client";

import { useCopyToClipboard } from "@/hooks/useCopy";
import { cn } from "@/lib/utils/cn";

import {
  CheckLinearIcon,
  CLIBoldIcon,
  CopyLinearIcon,
} from "@/src/components/icons";
import { Button } from "@/src/components/ui/button";
import {
  IconDeviceDesktop,
  IconDeviceMobile,
  IconDeviceTablet,
} from "@tabler/icons-react";
import * as React from "react";

const DevicesTypes = [
  {
    icon: <IconDeviceDesktop size={16} />,
  },
  { icon: <IconDeviceMobile size={16} /> },
  { icon: <IconDeviceTablet size={16} /> },
];

export function TabPanel({ code, command }: { code: string; command: string }) {
  const [isTabOpenPreview, setIsTabOpenPreview] = React.useState<boolean>(true);
  const [isTabOpenCode, setIsTabOpenCode] = React.useState<boolean>(false);
  return (
    <div className="flex items-center w-full  max-w-4xl relative mx-auto">
      <div className="flex items-center border w-fit rounded-lg ">
        <Button
          className={cn(
            "active:translate-y-0 border-0 rounded-lg transition-all",
          )}
          typeOfBtn={isTabOpenPreview ? "black" : ""}
          onClick={() => {
            setIsTabOpenPreview(true);
            setIsTabOpenCode(false);
          }}
        >
          <p>Preview</p>
        </Button>

        <Button
          className={cn(
            "active:translate-y-0 border-0 rounded-lg transition-all ",
          )}
          typeOfBtn={isTabOpenCode ? "black" : ""}
          onClick={() => {
            setIsTabOpenCode(true);
            setIsTabOpenPreview(false);
          }}
        >
          <p>Code</p>
        </Button>
      </div>

      <Devices />
      <div className="flex items-center absolute right-0 gap-2">
        <InstallationCommands command={command} />
      </div>
    </div>
  );
}

export const Devices = () => {
  return (
    <div className="flex border rounded-lg">
      {DevicesTypes.map((el, id) => {
        return (
          <div key={id} className="">
            <Button
              typeOfBtn="white"
              className="active:translate-y-0 flex py-[6.5px] border-0 rounded-lg"
            >
              {el.icon}
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export const InstallationCommands = ({ command }: { command: string }) => {
  const { copy, copied } = useCopyToClipboard({ code: command });

  return (
    <div className="border rounded-lg ">
      <Button
        typeOfBtn="white"
        className="active:translate-y-0 flex gap-2 border-0 rounded-lg "
        onClick={copy}
      >
        {copied ? (
          <CheckLinearIcon className="!size-3 " />
        ) : (
          <CopyLinearIcon className="!size-3 opacity-50 " />
        )}
        <CLIBoldIcon />

        <span>{command}</span>
      </Button>
    </div>
  );
};

export const Partition = () => {
  return <div className="border h-5" />;
};
