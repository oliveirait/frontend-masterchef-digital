import { Icon } from "@/components/lucide-icon/Icon"
import { RecipeList } from "@/components/recipe-list/RecipeList"
import { Suspense } from "react"


export default function Receitas () {

    return (
        <div className="flex flex-col items-center justify-start h-full w-full overflow-auto">
            
            <div className="w-full flex flex-row items-center justify-center">
                <input type="search" placeholder="Search" className="h-14 w-full p-4 "/>
                <button  className="h-14 w-20 items-center justify-center flex transition ease-in duration-200 hover:bg-blue-800 hover:text-white">
                    <Icon name="Plus" size={36} />
                </button>
            </div>
            <div className="flex flex-col p-4 w-full h-full items-center justify-start gap-4 bg-zinc-200">
                <Suspense fallback={<p>Carregando...</p>}>
                    <RecipeList />
                </Suspense>
            </div>
            
        </div>
    )
}