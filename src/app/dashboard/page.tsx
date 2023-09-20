import Link from "next/link";

export default function Dashboard () {
    const menu = [
        {name: 'Usuarios', route: '/usuarios'},
        {name: 'Receitas', route: '/receitas'},
        {name: 'Configurações', route: '/configuracoes'},
        {name: 'Sobre', route: '/sobre'}
    ]
    return (
        <div className="w-screen h-screen items-center justify-center flex ">
            <div className="flex flex-col items-center justify-start h-full w-52 bg-green-300 pt-4">
                {
                    menu.map((menu, index) =>
                        
                        <Link href={menu.route} key={index} className="hover:text-white  hover:bg-blue-800 w-11/12 rounded-md h-10  flex items-center justify-center"> 
                            <p className="hover:scale-105 ease-in duration-200">{menu.name}</p>
                        </Link>
                    )
                }
            </div>
            <div className="flex flex-col items-center justify-center w-full">
                <h1>conteudo</h1>
                <Link href={"/"}>Voltar</Link>
            </div>
            
        </div>
    )
}