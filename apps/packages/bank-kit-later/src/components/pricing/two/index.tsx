import { Button, Card, Heading, SubHeading } from "@sol-ui/components";

const monthly = [
  {
    name: "Credit points upto 12k",
  },
  {
    name: "Spent 368K without any commisiion",
  },
  {
    name: "Money transfter at any bank at 1%",
  },
];
const yearly = [
  {
    name: "Credit points upto 12k",
  },
  {
    name: "Spent 368K without any commisiion",
  },
  {
    name: "Money transfter at any bank at 1%",
  },
];

function Pricing() {
  return (
    <div className="w-full max-w-3xl">
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Card className="h-fit w-70 rounded-2xl p-0 overflow-hidden">
            <Heading
              as="h3"
              className="text-md font-medium border-b pl-4 py-2"
            >
              Monthly
            </Heading>
            <div className="pl-4 py-4">
              {monthly.map((el, id) => {
                return (
                  <SubHeading
                    key={id}
                    className="py-2 text-foreground flex items-center gap-2 whitespace-nowrap rounded-lg"
                  >
                    - {el.name}
                  </SubHeading>
                );
              })}
              <Button variant="inverse" className="my-4 rounded-2xl border-0">
                Buy subscription
              </Button>
            </div>
            <SubHeading className="pl-4 py-2 flex items-center gap-2 hover:bg-[--hover-secondary] active:bg-[--hover-secondary] hover:text-foreground whitespace-nowrap border-t cursor-pointer">
              Term & conditions
            </SubHeading>
          </Card>

          <Card className="h-fit w-70 border bg-background-inverse text-foreground-inverse rounded-2xl p-0 overflow-hidden">
            <Heading
              as="h3"
              className="text-md font-medium border-b pl-4 py-2"
            >
              Yearly
            </Heading>
            <div className="pl-4 py-4">
              {yearly.map((el, id) => {
                return (
                  <SubHeading
                    key={id}
                    className="py-2 text-foreground-inverse flex items-center gap-2 whitespace-nowrap"
                  >
                    - {el.name}
                  </SubHeading>
                );
              })}
              <Button
                variant="default"
                className="my-4 rounded-2xl border-0 hover:bg-background/90 active:bg-background/90"
              >
                Buy subscription
              </Button>
            </div>
            <SubHeading className="bg-(--hover-secondary)/40 hover:bg-(--hover-secondary) pl-4 py-2 text-foreground-inverse flex items-center gap-2 transition-all whitespace-nowrap hover:text-foreground-inverse/70 border-t cursor-pointer">
              Term & conditions
            </SubHeading>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
