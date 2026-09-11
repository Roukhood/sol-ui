import { Button, Card, Input, SubHeading } from "@sol-ui/components";

function Payment() {
  return (
    <div className="w-full flex flex-col pl-4 gap-2 ">
      <div className="w-full max-w-sm flex flex-col rounded-2xl">
        <Card className="w-full relative h-fit max-w-[18rem] rounded-2xl p-1">
          <div className="flex items-center justify-between">
            <Input
              placeholder="Enter amount"
              className="h-auto border-0 rounded-none ml-2 px-0 focus-visible:ring-0"
            />
            <Button variant="inverse" className="rounded-2xl border-0">
              Pay
            </Button>
          </div>
        </Card>
      </div>
      <SubHeading className="mt-1 pl-1 py-0">
        Sending to <span className="text-foreground">Satish</span>
      </SubHeading>
    </div>
  );
}

export default Payment;
