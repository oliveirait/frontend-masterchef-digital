import Link from "next/link";
import { Icon } from "@/components/lucide-icon/Icon";

export default function Dashboard () {
    return (
        <div className="w-full h-full items-center justify-center flex flex-col overflow-auto">
            <h1>conteudo</h1>
            <Link href={"/"}>Voltar</Link>
        </div>
    )
}