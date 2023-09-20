import Link from "next/link";
import { Icon } from "@/components/LucideIcon/Icon";

export default function Dashboard () {
    const menu = [
        {name: 'Receitas', route: '/receitas', icon: "ChefHat"},
        {name: 'Configurações', route: '/configuracoes', icon: "Settings"},
        {name: 'Sobre', route: '/sobre', icon: "Info"}
    ]
    return (
        <div className="w-screen h-screen items-center justify-center flex ">
            <div className="flex flex-col items-center justify-start h-full w-72 bg-blue-300 pt-4">
                {menu.map((menu, index) =>
                    <Link href={menu?.route} key={index} className="hover:text-white hover:scale-105 ease-in duration-200 hover:bg-blue-800 w-11/12 rounded-md h-10 pl-6 flex flex-row items-center gap-4 justify-start"> 
                        <Icon name={menu?.icon} />
                        <p >{menu?.name}</p>
                    </Link>
                )}
            </div>
            <div className="flex flex-col items-center justify-center w-full">
                <h1>conteudo</h1>
                <Link href={"/"}>Voltar</Link>
                    
            </div>
            
        </div>
    )
}