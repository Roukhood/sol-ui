"use client";

import { TabPanel } from "@/app/view/tooltips/tab-panal";
import BlockPreview from "@/src/components/docs/docs-blocks-renderer/block-preview";
import { registry } from "@sol-ui/bank-kit";
import { useState } from "react";

function Overview() {
  const [devices, setDevices] = useState<Record<string, "desktop" | "mobile" | "tablet">>({});

  return (
    <div className="flex flex-col gap-10 ">
      {registry.map((el, id) => {
        const selectedDevice = devices[el.slug] ?? "desktop";

        return (
          <div className="mx-10" key={id}>
            <div className="w-full my-8 ">
              <TabPanel
                command={el.slug}
                selectedDevice={selectedDevice}
                onDeviceChange={(device) =>
                  setDevices((currentDevices) => ({ ...currentDevices, [el.slug]: device }))
                }
              />
            </div>
            <div className="relative w-full grid rounded-[min(var(--radius-2xl),24px)] border p-5">
              <div className="w-full">
                <BlockPreview idx={el.title + "block"} src={el.slug} device={selectedDevice} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Overview;
