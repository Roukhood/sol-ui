import { TabPanel } from "@/app/view/tooltips/tab-panal";
import BlockPreview from "@/src/components/docs/docs-blocks-renderer/block-preview";
import  { registry } from "@sol-ui/bank-kit";

function Overview() {
  return (
    <div className="flex flex-col gap-10 ">
      {registry.map((el, id) => {
        return (
          <div className="mx-10" key={id}>
            <div className="w-full my-8 ">
              <TabPanel code={el.title} command={el.slug} />
            </div>
            <div className="relative w-full grid rounded-[min(var(--radius-2xl),24px)] border p-5">
              <div className="absolut inset-0">
                <BlockPreview 
                idx={el.title + "block"}
                src={el.slug}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Overview;
