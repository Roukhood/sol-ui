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
    <div className="w-full h-fit max-w-[20rem] bg-background text-foreground border rounded-2xl">
      <div className="flex justify-between items-center border-b px-4 py-1">
        <div data-slot="card-title" className="text-md font-medium">
          Recharges
        </div>
        <div
          data-slot="heading"
          className="pl-2 py-2 text-(--text-primary) text-sm flex items-center gap-2 hover:bg-[--hover-secondary] active:bg-[--hover-secondary] hover:text-foreground active:translate-y-px select-none transition-all whitespace-nowrap rounded-lg"
        >
          More plans
        </div>
      </div>
      <div className="px-3 py-4">
        

      <div className="h-30 w-full bg-yellow-200 rounded-lg mt-4">img</div>

      <div className="pl-2 my-4 ">
        {Recharges.map((el, id) => {
          return (
            <div
              key={id}
              data-slot="heading"
              className=" text-(--text-primary) text-sm"
            >
              - {el.name}
            </div>
          );
        })}

      </div>

      </div>
        <div className="flex justify-between items-center border-t px-4 py-1">
              <div className="text-md font-medium mb-1 pl-px my-2">
              Total - <span className="text-(--text-primary) text-sm"> $ 5699</span>
            </div>
            <button className=" select-none bg-background-inverse text-foreground-inverse rounded-2xl px-3 py-1 active:translate-y-px transition-all hover:bg-(--hover-primary) active:bg-(--hover-primary)">
              Pay
            </button>
        </div>
    </div>
  );
}

export default Pricing;
