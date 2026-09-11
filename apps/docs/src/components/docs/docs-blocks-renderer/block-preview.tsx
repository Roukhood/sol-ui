"use client";
import type { DeviceType } from "@/app/view/tooltips/tab-panal";
import IframeRenderer from "./iframe-block-renderer";

const deviceWidths: Record<DeviceType, string> = {
  desktop: "100%",
  tablet: "768px",
  mobile: "375px",
};

const BlockPreview = ({
  src,
  idx,
  device,
}: {
  src: string;
  idx: string;
  device: DeviceType;
}) => {
  return (
    <div className="flex w-full justify-center overflow-auto">
      <div
        className="max-w-full shrink-0 transition-[width] duration-200 ease-out"
        style={{ width: deviceWidths[device] }}
      >
        <IframeRenderer
          id={idx}
          isCached
          src={`/view/components/${src}`}
          title={`${src} preview`}
        />
      </div>
    </div>
  );
};

export default BlockPreview;
