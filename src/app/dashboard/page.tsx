import Link from "next/link";

export default function Dashboard () {
    return (
        <div className="w-screen h-screen items-center justify-center flex ">
            <div className="flex flex-col items-center justify-center h-full">
                <h1>menu</h1>
            </div>
            <div className="flex flex-col items-center justify-center">
                <h1>conteudo</h1>
            </div>
            <Link href={"/"}>Voltar</Link>
        </div>
    )
}