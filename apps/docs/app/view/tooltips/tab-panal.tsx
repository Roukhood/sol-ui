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

export type DeviceType = "desktop" | "mobile" | "tablet";

const DevicesTypes = [
  {
    name: "desktop" as const,
    label: "Desktop preview",
    icon: <IconDeviceDesktop size={16} />,
  },
  {
    name: "mobile" as const,
    label: "Mobile preview",
    icon: <IconDeviceMobile size={16} />,
  },
  {
    name: "tablet" as const,
    label: "Tablet preview",
    icon: <IconDeviceTablet size={16} />,
  },
];

export function TabPanel({
  command,
  selectedDevice,
  onDeviceChange,
}: {
  command: string;
  selectedDevice: DeviceType;
  onDeviceChange: (device: DeviceType) => void;
}) {
  const [isTabOpenPreview, setIsTabOpenPreview] = React.useState<boolean>(true);
  const [isTabOpenCode, setIsTabOpenCode] = React.useState<boolean>(false);
  return (
    <div className="flex items-center w-full  max-w-4xl relative mx-auto">
      <div className="flex items-center border w-fit rounded-lg ">
        <Button
          className={cn(
            "active:translate-y-0 border-0 rounded-lg transition-all",
          )}
          variant={isTabOpenPreview ? "inverse" : "default"}
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
          variant={isTabOpenCode ? "inverse" : "default"}
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
        <Devices selectedDevice={selectedDevice} onDeviceChange={onDeviceChange} />
        <Partition />
        <InstallationCommands command={command}/>
      </div>
    </div>
  );
}

export const Devices = ({
  selectedDevice,
  onDeviceChange,
}: {
  selectedDevice: DeviceType;
  onDeviceChange: (device: DeviceType) => void;
}) => {
  return (
    <div className="flex border rounded-lg">
      {DevicesTypes.map((device) => {
        return (
          <div key={device.name}>
            <Button
              type="button"
              variant={selectedDevice === device.name ? "inverse" : "default"}
              className="active:translate-y-0 flex py-[6.5px] border-0 rounded-lg"
              aria-label={device.label}
              aria-pressed={selectedDevice === device.name}
              onClick={() => onDeviceChange(device.name)}
            >
              {device.icon}
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
        variant="default"
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
