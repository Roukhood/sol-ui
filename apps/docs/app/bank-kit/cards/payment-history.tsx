import { Card, Heading, SubHeading } from "@sol-ui/components";

const dummyTransections = [
  {
    status: "Paid to",
    name: "Solera",
    amount: 45,
  },
  {
    status: "Received from",
    name: "John",
    amount: 230,
  },
  {
    status: "Paid to",
    name: "Ron",
    amount: 4,
  },
];

export const History = () => {
  return (
    <Card className="max-w-sm h-fit border-none rounded-none">
      <Heading className="mb-1 pl-1">History</Heading>
      <SubHeading className=" pl-1">March</SubHeading>
      <div className="mt-2">
        {dummyTransections.map((el, id) => {
          return (
            <HistoryList
              key={id}
              name={el.name}
              amount={el.amount}
              status={el.status}
            />
          );
        })}
      </div>
    </Card>
  );
};

export const HistoryList = ({
  name,
  amount,
  status,
}: {
  name: string;
  amount: number;
  status: string;
}) => {
  return (
    <div className="flex justify-between items-center bg-(--hover-secondary)/40  hover:bg-(--hover-secondary)  py-3 px-3 select-none border-b ">
      <div className="">
        {status == "Paid to" ? (
          <SubHeading data-role="payment-type" className="text-[12px]">
            Paid to
          </SubHeading>
        ) : (
          <SubHeading data-role="payment-type" className="text-[12px]">
            Received from
          </SubHeading>
        )}
        <p className="text-md font-medium">{name}</p>
      </div>

      {status == "Paid to" ? (
        <p className="text-md font-semibold">
          - <span>{amount}</span>
        </p>
      ) : (
        <p className="text-green-700  text-md font-semibold">
          + <span>{amount}</span>
        </p>
      )}
    </div>
  );
};
