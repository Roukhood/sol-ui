
import { registry } from "@sol-ui/bank-kit";
import { TabPanel } from "../../tooltips/tab-panal";

export default async function page ({params} : {params: Promise<{slug : string}>}){
    const {slug} = await params;

    const item = registry.find((x)=> x.slug === slug);

    if(!item ) return <h1>not found</h1>;
    
    const Demo = item?.component;

 

    return(
       <div className="">
            <div className="min-h-screen flex items-center justify-center  pt-5">
                    <Demo /> 
            </div>
       </div>
    )
}