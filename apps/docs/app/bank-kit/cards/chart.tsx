
export const Chart = () =>{
  return(
    <div className="relative w-full h-fit py-10 max-w-sm ">
      <div className="bg-grid-green w-full h-20 absolute inset-0  rounded-lg border-r border-neutral-200"/>
      <p className="absolute -bottom-6 left-1 text-(--text-primary) ">45% Balance</p>
      <div className="w-40 h-20 absolute bg-green-300 dark:bg-yellow-100 inset-0 rounded-l-lg"/>
      <p className="absolute -bottom-6 right-1 text-(--text-primary)">65% Spent</p>
    </div>
  )
}
