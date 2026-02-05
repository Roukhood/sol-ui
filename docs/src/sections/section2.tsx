import { useState } from "react";
import { Button } from "../components/ui/button";
import { ListOfComponents } from "../components/docs/components-list";
import Link from "next/link";

export const ComponentDemoSection = () => {
    return (
        <section className="min-h-screen px-3 pt-10 mt-10">
            <div className="grid grid-cols-1  lg:grid-cols-2   mx-auto gap-4 ">
                {
                    ListOfComponents.map((el , id) =>{
                        return(
                             <Card name={el.name} componentSrc={el.componentDocsUrl} imgSrc={el.componentDemoPhotoUrl}/>
                        )
                    })
                }
               
                 
            </div>
        </section>
    );
};

export const Card = ({name , imgSrc , componentSrc}:{name: string , imgSrc: string , componentSrc: string}) => {
    const [showComponent, setShowComponent] = useState(false)
    return (
        
                    <Link href={componentSrc}>
            <div className="h-60 w-full md:w-96 border rounded-[4px] col-span-1 relative overflow-hidden group mx-auto hover:bg-black/5 dark:hover:bg-white/5">
                <div className=" h-[198px] overflow-hidden p-3">
                    <img src={imgSrc} className="object-cover
                     h-full w-full "/>
                </div>
                <div className="absolute bottom-0 w-full border-t flex justify-between ">
                    <Button className="border-0">
                        <p>{name}</p>
                    </Button>
                   
                </div>
            </div>
                       </Link>
        
    );
};


