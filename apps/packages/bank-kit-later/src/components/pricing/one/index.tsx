import { Button, Card, Heading, SubHeading } from "@sol-ui/components";

const Recharges = [
  {
    name: "Mobile 9",
  },
  {
    name: "TV home",
  },
];

function Pricing() {
  return (
    <Card className="w-full h-fit max-w-[20rem] rounded-2xl p-0 overflow-hidden">
      <div className="flex justify-between items-center border-b px-4 py-1">
        <Heading as="h3" className="text-md font-medium py-0">
          Recharges
        </Heading>
        <SubHeading className="pl-2 py-2 flex items-center gap-2 hover:bg-[--hover-secondary] active:bg-[--hover-secondary] hover:text-foreground active:translate-y-px transition-all whitespace-nowrap rounded-lg cursor-pointer">
          More plans
        </SubHeading>
      </div>
      <div className="px-3 py-4">
        <div className="h-30 w-full bg-yellow-200 rounded-lg mt-4">img</div>

        <div className="pl-2 my-4">
          {Recharges.map((el, id) => {
            return (
              <SubHeading key={id} className="py-0">
                - {el.name}
              </SubHeading>
            );
          })}
        </div>
      </div>
      <div className="flex justify-between items-center border-t px-4 py-1">
        <div className="text-md font-medium mb-1 pl-px my-2">
          Total -{" "}
          <span className="text-(--text-primary) text-sm"> $ 5699</span>
        </div>
        <Button variant="inverse" className="rounded-2xl border-0">
          Pay
        </Button>
      </div>
    </Card>
  );
}

export default Pricing;
