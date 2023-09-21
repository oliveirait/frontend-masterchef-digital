import Link from "next/link";


export default function Home() {
  return (
    <div className="w-screen h-screen items-center justify-center flex flex-col bg-blue-300">
      <h1 className="text-red-800 font-bold">Hello</h1>
      <Link href={"/dashboard"}>Ir para Dashboard</Link>
    </div>
  )
}
