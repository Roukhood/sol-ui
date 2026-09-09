

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
]
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
]
function Pricing() {
    return (
        <div className="w-full  max-w-3xl  ">
            <div className="flex items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="h-fit w-70 rounded-2xl border ">
                        <div data-slot="card-title" className="text-md font-medium border-b pl-4 py-2">
                            Monthly
                        </div>
                        <div className="pl-4 py-4">
                            {
                            monthly.map((el, id) => {
                                return (
                                    <span
                                        key={id}
                                        data-slot="heading"
                                        className=" py-2  text-sm flex items-center gap-2   select-none whitespace-nowrap rounded-lg"

                                    >
                                       - {
                                            el.name
                                        }
                                    </span>
                                )
                            })
                        }
                        <button className="my-4 select-none bg-background-inverse text-foreground-inverse rounded-2xl px-3 py-1  active:translate-y-px transition-all hover:bg-(--hover-primary) active:bg-(--hover-primary)">
                            Buy subscription
                        </button>
                         </div>
                        <div data-slot="heading" className="pl-4 py-2 text-(--text-primary) text-sm flex items-center gap-2 hover:bg-[--hover-secondary] active:bg-[--hover-secondary] hover:text-foreground  select-none whitespace-nowrap  border-t">Term & conditions</div>
                    </div>


                    <div className="h-fit w-70 border bg-background-inverse text-foreground-inverse rounded-2xl">
                        <div data-slot="card-title" className="text-md font-medium border-b pl-4 py-2">
                            Yearly
                        </div>
                        <div className="pl-4 py-4">
                            {
                            yearly.map((el, id) => {
                                return (
                                    <span
                                        key={id}
                                        data-slot="heading"
                                        className="py-2 text-sm flex items-center gap-2  select-none whitespace-nowrap"
                                    >
                                      -  {
                                            el.name
                                        }
                                    </span>
                                )
                            })
                        }
                        <button className="my-4 select-none bg-background text-foreground rounded-2xl px-3 py-1 active:translate-y-px transition-all hover:bg-background/90 active:bg-background/90">
                            Buy subscription
                        </button>
                        </div>
                        <div data-slot="heading" className="bg-(--hover-secondary)/40  hover:bg-(--hover-secondary) pl-4 py-2 text-foreground-inverse text-sm flex items-center gap-2  select-none transition-all whitespace-nowrap hover:text-foreground-inverse/70 border-t">Term & conditions</div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Pricing;
