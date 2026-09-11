import { IconDeviceMobile, IconGift, IconTicket} from "@tabler/icons-react"

const list = [
  {
    name:"Recharges", icon : <IconDeviceMobile/>
  },
  {
    name:"Gifts", icon : <IconGift/>
  },
  {
    name:"Tickets", icon : <IconTicket/>
  },
]
export const Services = () =>{
  return(
    <div className="max-w-sm">
       <div data-slot="card-title" className="text-md font-medium pb-2 pl-4">
          Services
        </div>
      <div className="grid grid-cols-3 gap-2">
        {
          list.map((el , id) =>{
            return(
                <div
                key={id}
                className="flex flex-col justify-center items-center active:translate-y-px">
                    <div className=" hover:bg-(--hover-secondary) border size-20 flex items-center justify-center rounded-lg">
                      <span className="sr-only">{el.name}</span>
                     {el.icon}
                    </div>
                    <div data-slot="heading" className=" pl-2 text-(--text-primary) text-[12px] select-none">{el.name}</div>
                 </div>
            )
          })
        }
      </div>
    </div>
  )
}
