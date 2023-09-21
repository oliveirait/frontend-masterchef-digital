"use client"

interface PostsProps {
    id: string
    title: string
    description: string
    instruction: string
    created_at: string
    updated_at: string
}

export async function RecipeList () {
    const posts = await fetch('http://localhost:3333/recipes').then(resp => resp.json()).catch(e => console.log(e))

    return (
        posts?.map((post: PostsProps, index: any) => 
            <ul key={index} className="w-full bg-zinc-300 rounded-md p-4 ">
                <li className="font-bold text-md">{post?.title}</li>
                <li className="text-sm">{post?.description}</li>
                <li className="text-sm">{post?.instruction}</li>
            </ul>        
        )
    )
}