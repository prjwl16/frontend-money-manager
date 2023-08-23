import React, {useEffect} from "react";
import {ClassName} from "@/types/className.ts";
import {cn} from "@/lib/utils.ts";
import {Link, NavLink} from "react-router-dom";
import {IconWrapper, navRoutes, SubRoute} from "@/data/navigation.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import {Search} from "@/components/projectComponents/Search.tsx";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import {InfoIcon, LogOut} from "lucide-react";


interface RenderRoutesProps {
    category: SubRoute[]
}

const SidebarNew: React.FC<ClassName> = ({className}) => {

    const [searchState, setOpenState] = React.useState(false);
    const [isActiveLink, setIsActiveLink] = React.useState(true);

    const handleClick = ()=>{
        setOpenState(!searchState);
    }

    const handleActiveLink =()=>{
        setIsActiveLink(!isActiveLink);
        // cn("", ({ isActive }) => (isActive ? "text-emerald-400" : "text-black"))
    }

    return (
        <div className={cn(className, "hidden sm:flex items-center justify-evenly py-12 flex-col border-r")}>

            <div className={"flex flex-col gap-12"}>
                {
                    navRoutes.map((route, key) => {
                        return (
                            <NavLink key={key} to={route.path} className={ ({ isActive }) => (isActive ? "flex gap-4 text-red-700 dark:text-purple-300" : "flex gap-4") } onClick={handleActiveLink}>
                                <IconWrapper icon={route.icon} size={24}/>
                                <p>{route.header}</p>
                            </NavLink>
                        )
                    })
                }
                <div className={"flex gap-4"}>
                    <LogOut size={24} className={"cursor-pointer"} />
                    <p>Logout</p>
                </div>
            </div>
            <Search state={searchState} setState={setOpenState}/>
        </div>
    )
}

export default SidebarNew;