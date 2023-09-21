
interface PostsProps {
    id: string
    title: string
    description: string
    instruction: string
    created_at: string
    updated_at: string
}

export default async function Receitas () {

    const posts = await fetch('http://localhost:3333/recipes').then(resp => resp.json()).catch(e => console.log(e))

    return (
        <div className="flex flex-col items-center justify-start h-full w-full">
            <div className="w-full flex items-center justify-center">
                <input type="search" placeholder="Search" className="h-14 w-full p-4 "/>
            </div>
            <div className="flex flex-col p-4 w-full h-full items-center justify-start gap-4 bg-zinc-200">
                {posts.map((post: PostsProps, index: any) => 
                    <ul key={index} className="w-full bg-zinc-300 rounded-md p-4 ">
                        <li className="font-bold text-md">{post?.title}</li>
                        <li className="text-sm">{post?.description}</li>
                        <li className="text-sm">{post?.instruction}</li>
                    </ul>        
                )}
            </div>
        </div>
    )
}