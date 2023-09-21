

import Link from "next/link";
import { Icon } from "../lucide-icon/Icon";


export function LeftMenu () {
    const menu = [
        {name: 'Home', route: '/dashboard', icon: 'Home'},
        {name: 'Receitas', route: '/dashboard/receitas', icon: "ChefHat"},
        {name: 'Configurações', route: '/dashboard/config', icon: "Settings"},
        {name: 'Sobre', route: '/dashboard/sobre', icon: "Info"}
    ]
    return (
        <div className="flex flex-col items-center justify-start h-full w-72 bg-blue-300 pt-4 overflow-auto ">
            {menu.map((menu, index) =>
                <Link href={menu?.route} key={index} className="hover:text-white hover:scale-105 ease-in duration-200 hover:bg-blue-800 w-11/12 rounded-md h-10 pl-6 flex flex-row items-center gap-4 justify-start"> 
                    <Icon name={menu?.icon} size={18}/>
                    <p className="font-normal text-md">{menu?.name}</p>
                </Link>
            )}
        </div>
    )
}