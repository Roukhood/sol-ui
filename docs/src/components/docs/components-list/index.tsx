
type ComponentListProps ={
    name: string ,
    compoentDemoPhoto: string ,
    compoenentDocsUrl: string
} 

export const ListOfComponents = [
    {
        name: "buttons" ,
        componentDemoPhotoUrl: "/ui-demo-preview/button-1.jpg" ,
        componentDocsUrl: "docs/components/button"
    },
    {
        name: "badges" ,
        componentDemoPhotoUrl: "/ui-demo-preview/badge-3.jpg" ,
        componentDocsUrl: "docs/components/badge"
    },
    {
        name: "cards" ,
        componentDemoPhotoUrl: "/ui-demo-preview/card-4.jpg" ,
        componentDocsUrl: "docs/components/card",
        imgClassName : "object-cover h-[300px] -mt-30"
    },
    {
        name: "Calendar" ,
        componentDemoPhotoUrl: "/ui-demo-preview/calendar.jpg" ,
        componentDocsUrl: "docs/components/calendar",
        imgClassName : "object-cover h-[500px]"
    },

]