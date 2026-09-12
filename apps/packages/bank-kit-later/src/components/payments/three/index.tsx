import { Button, Card, Input, SubHeading } from "@sol-ui/components";

function Payment() {
  return (
    <div
      className="bank-kit w-full flex flex-col ps-4 gap-2"
      role="region"
      aria-label="Quick pay"
    >
      <div className="w-full max-w-sm flex flex-col rounded-2xl">
        <Card className="w-full relative h-fit max-w-[18rem] rounded-xl py-1 px-1 border-[var(--bk-border)] bg-[var(--bk-surface-elevated)]">
          <div className="flex items-center justify-between gap-2">
            <Input
              placeholder="Enter amount"
              aria-label="Enter amount"
              className="h-auto border-0 rounded-none mx-1 rounded-md px-2 focus-visible:ring-0"
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
      </div>
      <SubHeading className="mt-1 ps-1 py-0 text-[var(--bk-muted)]">
        Sending to <span className="text-[var(--bk-foreground)]">Satish</span>
      </SubHeading>
    </div>
  );
}

export default Payment;
