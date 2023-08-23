import React from "react";
import {ClassName} from "@/types/className.ts";
import {cn} from "@/lib/utils.ts";
import {Link} from "react-router-dom";
import {IconWrapper, navRoutes, SubRoute} from "@/data/navigation.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import {Search} from "@/components/projectComponents/Search.tsx";


interface RenderRoutesProps {
    category: SubRoute[]
}


const RenderRoutes = ({category}: RenderRoutesProps) => {




    return (
        <div className={"w-full"}>
            <Separator className={"mb-2 w-full"}/>
            <div className={"flex flex-col items-start w-full pl-4 gap-2"}>
                {
                    category.map((route: any, key: number) => {
                        return (
                            <span key={key} className={"flex items-end justify-center gap-4"}>
                                <IconWrapper icon={route.icon} size={24}/>
                                <Link to={route.path} className={"font-light"}>{route.name}</Link>
                            </span>
                        )
                    })
                }
            </div>
        </div>
    )
}



const Sidebar: React.FC<ClassName> = ({className}) => {


    const [searchState, setOpenState] = React.useState(false);

    const handleClick = ()=>{
        console.log("JHhhhh")
        setOpenState(!searchState);
    }

    return (
        <div className={cn(className, "flex")}>
            <div className={cn(className, "flex flex-col items-start")}>
                <button onClick={handleClick}
                    className="inline-flex items-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 relative w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64">
                    <span className="hidden lg:inline-flex">Search...</span>
                    <span className="inline-flex lg:hidden">Search...</span>
                    <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                        <span className="text-xs">⌘</span>
                    K</kbd>
                </button>
                <Search state={searchState} setState={setOpenState}/>
                {navRoutes?.map((category, index) => {
                    return (
                        <div key={index} className={"w-full"}>
                            <h3 className={"font-medium mt-4"}>
                                {category.header}
                            </h3>
                            <RenderRoutes category={category.subRoutes}/>
                        </div>
                    )
                })}
            </div>
            <Separator orientation={"vertical"} className={"h-full mx-2"}/>
        </div>
    )
}

export default Sidebar;