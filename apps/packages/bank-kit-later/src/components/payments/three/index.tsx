import { Button, Card, Input, SubHeading } from "@sol-ui/components";

function Payment() {
  return (
    <div className="w-full max-w-[18rem] flex flex-col mx-auto">
      <Card className="w-full max-w-[18rem] relative h-fit rounded-xl py-1 px-1 ">
        <div className="flex items-center justify-between gap-2">
          <Input
            placeholder="Enter amount"
            aria-label="Enter amount"
            className="h-auto border-0 rounded-none ml-px mr-1 rounded-md px-2 focus-visible:ring-0"
          />
          <Button
            variant="inverse"
            data-bk-press
            className="rounded-md border-0"
          >
            Pay
          </Button>
        </div>
      </Card>
      <SubHeading className="mt-1 ps-1 py-0 text-[var(--bk-muted)]">
        Sending to <span className="text-[var(--bk-foreground)]">Satish</span>
      </SubHeading>
    </div>
  );
}

export default Payment;
