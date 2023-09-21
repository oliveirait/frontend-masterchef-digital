import Link from "next/link";
import { Icon } from "@/components/lucide-icon/Icon";

export default function Dashboard () {
    return (
        <div className="w-screen h-screen items-center justify-center flex flex-col">
            <h1>conteudo</h1>
            <Link href={"/"}>Voltar</Link>
        </div>
    )
}