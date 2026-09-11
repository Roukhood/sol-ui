
import { Vercel , Cisco , Beacon } from "../../../components/svgs";

import Header from "./header";

export function HeroOne() {
    const logoList = [
        {
            logo : <Cisco />
        },
        {
            logo : <Beacon />
        },
        {
            logo : <Vercel />,
            class : 'm-auto'
        },
    ]
    return (
        <div className="min-h-screen max-w-6xl ">
            <div className=" mx-auto pb-10">
                <Header/>

                <div className="pt-20">
                    <h1 className="text-4xl/[3rem] ">Payment <span className="italic text-blue-600">infrastrcutre </span> that handling</h1>
                    <p className="text-(--text-primary) ">your business paymets, billing and many more securly.</p>
                    <div className="flex gap-1 py-3">

                        <button className="bg-blue-700 hover:bg-blue-700/90 text-white  px-3 py-1 rounded-md cursor-pointer">
                            Try demo
                        </button>
                        <button className="border border-blue-100  font-medium px-3 py-1 cursor-pointer rounded-md hover:bg-blue-50 dark:hover:bg-(--hover-secondary)">
                            Connect your payments
                        </button>
                    </div>
                
                <div className="hidden mt-14 flex gap-1 mx-auto w-full h-full justify-center  items-center border  p-[2.5px] rounded-md">
                    {
                                    logoList.map((el , id)=>{
                                    return(
                                        <div
                                        key={id}
                                        className={`w-70 h-40  border  flex justify-center items-center rounded-[4px] ${el.class}`}>
                                                {el.logo}
                                        </div>
                                    )
                                    })
                    }
                 
                   
                </div>
                </div>

                
            </div>
        </div>
    )
}

export default HeroOne;
